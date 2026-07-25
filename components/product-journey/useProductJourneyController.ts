"use client";

import { useLayoutEffect, useRef } from "react";

import {
  HERO_PRODUCT_ASPECT,
  HERO_PRODUCT_EASE,
  HERO_PRODUCT_EMERGE,
  HERO_PRODUCT_TIMING,
} from "@/lib/hero-product/constants";
import { isCoarsePointerDevice } from "@/lib/performance/device";
import { PRODUCT_JOURNEY } from "@/lib/product-journey/constants";
import { scheduleScrollTriggerRefresh } from "@/lib/gsap/load";
import {
  buildJourneyCurve,
  cubicBezier,
  docToViewport,
  getJourneyScaleTargets,
  measureHeroEmergeRange,
  measureHeroRestPose,
  measureSignatureMarbleCenter,
  sampleJourneyScale,
  sampleRotationY,
  signatureBagAnchor,
  viewportToDoc,
  type DocPoint,
  type Vec2,
} from "@/lib/product-journey/math";
import {
  applyHeroChapterExitAtScroll,
  refreshHeroChapterExitRange,
} from "@/lib/product-journey/hero-chapter-exit";
import {
  patchProductJourney,
  productJourneyState,
} from "@/lib/product-journey/store";

const DOCK_MOVE_EPS = 0.0005;

type JourneyProgressProxy = {
  t: number;
};

/**
 * Owns the continuous ScrollTrigger + GSAP journey for the ONE handbag.
 * Museum rise from inside marble podium → settle → idle → scrubbed travel → land.
 */
export function useProductJourneyController(enabled: boolean) {
  const progressRef = useRef<JourneyProgressProxy>({ t: 0 });
  const landedRef = useRef(false);
  const idleTweensRef = useRef<Array<{ kill: () => void }>>([]);
  const anchorsRef = useRef<{ hero: Vec2; signature: Vec2 } | null>(null);
  const frozenHeroDocRef = useRef<DocPoint | null>(null);
  const frozenSignatureDocRef = useRef<DocPoint | null>(null);
  const frozenStageWidthRef = useRef(340);
  const halfHeightRef = useRef(0.06);
  const lastDockedRef = useRef<{ x: number; y: number } | null>(null);
  const anchorElsRef = useRef<{
    heroStage: HTMLElement | null;
    heroCavity: HTMLElement | null;
    signatureRest: HTMLElement | null;
    signatureMarble: HTMLElement | null;
  }>({
    heroStage: null,
    heroCavity: null,
    signatureRest: null,
    signatureMarble: null,
  });
  const scrollTweenRef = useRef<{
    scrollTrigger?: { progress: number; refresh: () => void };
    kill: () => void;
  } | null>(null);

  useLayoutEffect(() => {
    if (!enabled) return;

    let cancelled = false;
    let ctx: { revert: () => void } | null = null;
    let scrollTriggerPlugin: typeof import("gsap/ScrollTrigger").ScrollTrigger | null =
      null;
    let revealTimeline: gsap.core.Timeline | null = null;
    let landingTimeline: gsap.core.Timeline | null = null;
    let landingArmed = false;
    let idleRestartQueued = false;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const clearPortalClip = () => {
      const host = document.querySelector(
        '[data-product-journey="canvas"]',
      ) as HTMLElement | null;
      if (!host) return;
      host.style.clipPath = "";
      host.style.removeProperty("-webkit-clip-path");
      host.style.willChange = "auto";
    };

    const setCanvasVisible = (visible: boolean) => {
      /* notify so WebGL frame gate + interaction can pause/resume */
      patchProductJourney({ canvasVisible: visible }, true);
      const root = document.documentElement;
      if (visible) {
        root.dataset.journeyCanvas = "visible";
      } else {
        root.dataset.journeyCanvas = "hidden";
      }
      const host = document.querySelector(
        '[data-product-journey="canvas"]',
      ) as HTMLElement | null;
      if (!host) return;
      if (visible) {
        host.style.display = "";
        host.style.opacity = "1";
        host.style.visibility = "visible";
        host.style.pointerEvents = "none";
      } else {
        /* Drop the fullscreen compositor layer entirely once the journey ends.
         * Visual is identical (already opacity 0); Safari stops sampling it. */
        host.style.opacity = "0";
        host.style.visibility = "hidden";
        host.style.display = "none";
      }
    };

    /** Concealed inside the marble podium — opening center, below the lip */
    const emergeStartForPose = (
      pose: NonNullable<ReturnType<typeof measureHeroRestPose>>,
    ) => measureHeroEmergeRange(pose).start;

    patchProductJourney({
      reducedMotion: prefersReducedMotion,
      phase: "concealed",
      revealed: false,
      interactiveEnabled: false,
      progress: 0,
      contentReady: false,
      canvasVisible: true,
      depth: 0,
      idleRotateY: 0,
      rotateX: 0,
    });

    const resolveAnchorElements = () => {
      const cache = anchorElsRef.current;
      const connected = (el: HTMLElement | null) =>
        Boolean(el && el.isConnected);

      if (!connected(cache.heroStage)) {
        cache.heroStage = document.querySelector(
          '[data-journey-anchor="hero"]',
        ) as HTMLElement | null;
      }
      if (!connected(cache.heroCavity)) {
        cache.heroCavity = document.querySelector(
          '[data-journey-anchor="hero-cavity"]',
        ) as HTMLElement | null;
      }
      if (!connected(cache.signatureRest)) {
        cache.signatureRest = document.querySelector(
          '[data-journey-anchor="signature-rest"]',
        ) as HTMLElement | null;
      }
      if (!connected(cache.signatureMarble)) {
        cache.signatureMarble = document.querySelector(
          '[data-journey-anchor="signature-marble"]',
        ) as HTMLElement | null;
      }
      return cache;
    };

    /**
     * Prefer document-space frozen anchors + scroll offset (no layout reads).
     * Live measure only when freezing / forced (resize, ST refresh, first land).
     */
    const refreshAnchors = (options?: {
      freezeHero?: boolean;
      freezeSignature?: boolean;
      forceLive?: boolean;
    }) => {
      const els = resolveAnchorElements();
      const needLiveHero =
        Boolean(options?.forceLive) ||
        Boolean(options?.freezeHero) ||
        !frozenHeroDocRef.current;
      const needLiveSignature =
        Boolean(options?.forceLive) ||
        Boolean(options?.freezeSignature) ||
        !frozenSignatureDocRef.current;

      const pose = needLiveHero
        ? measureHeroRestPose({
            heroStage: els.heroStage,
            heroCavity: els.heroCavity,
          })
        : null;

      if (pose) {
        halfHeightRef.current = pose.bagHalfHeight;
        if (options?.freezeHero || !frozenHeroDocRef.current) {
          frozenHeroDocRef.current = viewportToDoc(pose.bagCenter);
          frozenStageWidthRef.current = pose.stageWidthPx;
        }
      }

      let marble: Vec2 | null = null;
      if (needLiveSignature) {
        marble = measureSignatureMarbleCenter({
          signatureRest: els.signatureRest,
          signatureMarble: els.signatureMarble,
        });
        if (marble && (options?.freezeSignature || !frozenSignatureDocRef.current)) {
          frozenSignatureDocRef.current = viewportToDoc(marble);
        }
      } else if (frozenSignatureDocRef.current) {
        marble = docToViewport(frozenSignatureDocRef.current);
      }

      if (!marble) {
        marble = { x: 0.7, y: 0.58 };
      }

      const baseWidth =
        frozenStageWidthRef.current || pose?.stageWidthPx || 340;
      const endScale = sampleJourneyScale(1);
      const landingWidthPx = baseWidth * endScale;
      const landingHeightPx = landingWidthPx / HERO_PRODUCT_ASPECT;
      const landingHalfHeight = landingHeightPx / 2 / window.innerHeight;

      const hero = frozenHeroDocRef.current
        ? docToViewport(frozenHeroDocRef.current)
        : (pose?.bagCenter ?? { x: 0.66, y: 0.5 });

      anchorsRef.current = {
        hero,
        signature: signatureBagAnchor(marble, landingHalfHeight),
      };

      return pose;
    };

    const markContentReady = () => {
      if (productJourneyState.contentReady) return;
      patchProductJourney({ contentReady: true }, true);
      window.dispatchEvent(
        new CustomEvent("danovix:product-journey", {
          detail: { type: "landed" },
        }),
      );
      /* Never ScrollTrigger.refresh() here — landing does not change layout,
       * and refresh during active scrub forces synchronous layout hitch. */
    };

    const markContentDeparted = () => {
      if (!productJourneyState.contentReady && !landedRef.current) return;
      patchProductJourney(
        {
          contentReady: false,
          interactiveEnabled: false,
          interactiveYaw: 0,
          interactivePitch: 0,
          compressY: 1,
          floatY: 0,
        },
        true,
      );
      window.dispatchEvent(
        new CustomEvent("danovix:product-journey", {
          detail: { type: "departed" },
        }),
      );
    };

    const killIdle = () => {
      for (const tween of idleTweensRef.current) tween.kill();
      idleTweensRef.current = [];
      patchProductJourney({ floatY: 0, idleRotateY: 0 }, false);
    };

    const applyProgress = (t: number) => {
      if (!productJourneyState.revealed) return;
      if (productJourneyState.phase === "emerging") return;

      const clamped = Math.min(1, Math.max(0, t));
      const pose = refreshAnchors();
      const anchors = anchorsRef.current;
      if (!anchors) return;

      /* Leaving hero rest — stop competing idle / landing timelines */
      if (clamped > 0.02) {
        killIdle();
        if (landingTimeline) {
          landingTimeline.kill();
          landingTimeline = null;
        }
      }

      const [p0, p1, p2, p3] = buildJourneyCurve(
        anchors.hero,
        anchors.signature,
      );
      const point = cubicBezier(p0, p1, p2, p3, clamped);
      const rotateY = sampleRotationY(clamped);
      const scale = sampleJourneyScale(clamped);

      /*
       * Final approach: blend onto the frozen marble rest (doc-space) so scrub
       * end and dock share one position — no pop, no layout reads per frame.
       */
      const settleBlend =
        clamped >= 0.82 ? Math.min(1, (clamped - 0.82) / 0.18) : 0;
      const settledX =
        point.x + (anchors.signature.x - point.x) * settleBlend;
      const settledY =
        point.y + (anchors.signature.y - point.y) * settleBlend;

      const travelling = clamped > 0.02 && clamped < 0.97;
      const nearLand = clamped >= 0.97;

      let phase = productJourneyState.phase;
      if (clamped <= 0.02 && productJourneyState.revealed) {
        phase = "hero-idle";
      } else if (travelling) {
        phase = "travelling";
      } else if (nearLand) {
        phase = landedRef.current ? "interactive" : "landing";
      }

      const liftBoost =
        clamped > 0 && clamped < 0.18
          ? PRODUCT_JOURNEY.lift.px *
            (1 - Math.abs(clamped - 0.09) / 0.09) *
            0.0015
          : 0;

      const atRest = clamped <= 0.02;
      const parked = clamped >= 0.99 && landedRef.current;

      /* Dirty-gated notify — skips listener fan-out when pose is unchanged */
      patchProductJourney(
        {
          progress: clamped,
          x: settledX,
          y: settledY - liftBoost,
          scale,
          screenWidthPx:
            frozenStageWidthRef.current ||
            pose?.stageWidthPx ||
            productJourneyState.screenWidthPx,
          rotateY,
          rotateX: 0,
          depth: 0,
          floatY: atRest || parked ? productJourneyState.floatY : 0,
          idleRotateY: atRest ? productJourneyState.idleRotateY : 0,
          compressY: parked ? productJourneyState.compressY : 1,
          particlesOpacity:
            clamped > 0.04 && clamped < 0.9
              ? PRODUCT_JOURNEY.particles.maxOpacity *
                Math.min(1, Math.sin(clamped * Math.PI) * 1.15)
              : 0,
          shadowOpacity: 0.4 + (1 - Math.abs(clamped - 0.5) * 1.1) * 0.32,
          phase,
          interactiveEnabled: parked && !isCoarsePointerDevice(),
        },
        true,
      );

      if (clamped >= PRODUCT_JOURNEY.landing.contentProgress) {
        markContentReady();
      }

      if (clamped >= 0.99 && !landingArmed && productJourneyState.revealed) {
        landingArmed = true;
        void runLanding();
      }

      if (clamped < 0.9) {
        landingArmed = false;
        if (landedRef.current || productJourneyState.contentReady) {
          landedRef.current = false;
          markContentDeparted();
        }
      }

      if (
        clamped <= 0.005 &&
        phase === "hero-idle" &&
        idleTweensRef.current.length === 0 &&
        !idleRestartQueued &&
        !prefersReducedMotion
      ) {
        idleRestartQueued = true;
        void import("gsap").then(({ default: gsap }) => {
          idleRestartQueued = false;
          if (!cancelled && progressRef.current.t <= 0.005) {
            void startIdle(gsap);
          }
        });
      }
    };

    /**
     * Lock the bag permanently above the Signature pedestal once it has
     * landed. Uses document-space frozen marble + scroll offset so the bag
     * stays glued without layout reads every scroll tick.
     */
    const dockBagToSignature = (options?: { force?: boolean }) => {
      if (!productJourneyState.revealed) return;
      if (productJourneyState.phase === "emerging") return;

      refreshAnchors(
        options?.force ? { freezeSignature: true } : undefined,
      );
      const anchors = anchorsRef.current;
      if (!anchors) return;

      const endScale = sampleJourneyScale(1);
      const nextX = anchors.signature.x;
      const nextY = anchors.signature.y;
      const last = lastDockedRef.current;

      if (
        !options?.force &&
        last &&
        Math.abs(last.x - nextX) < DOCK_MOVE_EPS &&
        Math.abs(last.y - nextY) < DOCK_MOVE_EPS &&
        productJourneyState.phase === "interactive" &&
        landedRef.current
      ) {
        return;
      }

      lastDockedRef.current = { x: nextX, y: nextY };

      const alreadyLanded = landedRef.current;
      landedRef.current = true;

      /* Kill any residual landing tween so it cannot fight the dock */
      landingTimeline?.kill();
      landingTimeline = null;

      patchProductJourney(
        {
          progress: 1,
          x: nextX,
          y: nextY,
          scale: endScale,
          screenWidthPx:
            frozenStageWidthRef.current || productJourneyState.screenWidthPx,
          rotateY: 0,
          rotateX: 0,
          depth: 0,
          idleRotateY: 0,
          floatY: 0,
          compressY: 1,
          particlesOpacity: 0,
          shadowOpacity: 0.72,
          phase: "interactive",
          interactiveEnabled: !isCoarsePointerDevice(),
          contentReady: true,
          canvasVisible: true,
        },
        true,
      );

      if (!alreadyLanded) {
        markContentReady();
      }
    };

    const startIdle = async (gsap: typeof import("gsap").default) => {
      killIdle();
      if (prefersReducedMotion) return;
      if (progressRef.current.t > 0.02) return;

      const idle = { floatY: 0, rotateY: 0 };

      const floatTween = gsap.to(idle, {
        floatY: -PRODUCT_JOURNEY.idle.floatPx,
        duration: PRODUCT_JOURNEY.idle.duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          if (productJourneyState.progress > 0.02) return;
          if (productJourneyState.phase === "emerging") return;
          patchProductJourney({ floatY: idle.floatY }, true);
        },
      });

      const rotateTween = gsap.to(idle, {
        rotateY: PRODUCT_JOURNEY.idle.rotateYDeg,
        duration: PRODUCT_JOURNEY.idle.duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          if (productJourneyState.progress > 0.02) return;
          if (productJourneyState.phase === "emerging") return;
          patchProductJourney({ idleRotateY: idle.rotateY }, true);
        },
      });

      idleTweensRef.current = [floatTween, rotateTween];
    };

    const runLanding = async () => {
      if (cancelled || landedRef.current) return;
      if (progressRef.current.t < 0.99) return;

      const { default: gsap } = await import("gsap");
      if (cancelled || progressRef.current.t < 0.99) return;

      landingTimeline?.kill();
      killIdle();

      /* Snap exactly onto marble first — no Y bounce */
      refreshAnchors({ freezeSignature: true });
      const anchors = anchorsRef.current;
      if (anchors) {
        patchProductJourney(
          {
            phase: "landing",
            x: anchors.signature.x,
            y: anchors.signature.y,
            floatY: 0,
            particlesOpacity: 0,
            scale: sampleJourneyScale(1),
          },
          true,
        );
      } else {
        patchProductJourney({ phase: "landing", particlesOpacity: 0 }, true);
      }

      const land = {
        compressY: 1,
        shadowOpacity: productJourneyState.shadowOpacity,
      };

      landingTimeline = gsap.timeline({
        onComplete: () => {
          if (cancelled) return;
          if (progressRef.current.t < 0.99) return;
          landedRef.current = true;
          refreshAnchors();
          const rest = anchorsRef.current;
          patchProductJourney(
            {
              phase: "interactive",
              interactiveEnabled: !isCoarsePointerDevice(),
              compressY: 1,
              floatY: 0,
              particlesOpacity: 0,
              shadowOpacity: 0.72,
              contentReady: true,
              x: rest?.signature.x ?? productJourneyState.x,
              y: rest?.signature.y ?? productJourneyState.y,
            },
            true,
          );
          markContentReady();
        },
      });

      /* Subtle scale settle only — keeps the bag glued to the disc */
      landingTimeline
        .to(land, {
          compressY: PRODUCT_JOURNEY.landing.compress,
          shadowOpacity: 0.8,
          duration: PRODUCT_JOURNEY.landing.settleDuration * 0.4,
          ease: "power2.out",
          onUpdate: () => {
            if (progressRef.current.t < 0.99) return;
            patchProductJourney(
              {
                compressY: land.compressY,
                shadowOpacity: land.shadowOpacity,
                floatY: 0,
                particlesOpacity: 0,
              },
              true,
            );
          },
        })
        .to(land, {
          compressY: 1,
          shadowOpacity: 0.72,
          duration: PRODUCT_JOURNEY.landing.settleDuration * 0.6,
          ease: "power3.out",
          onUpdate: () => {
            if (progressRef.current.t < 0.99) return;
            patchProductJourney(
              {
                compressY: land.compressY,
                shadowOpacity: land.shadowOpacity,
                floatY: 0,
              },
              true,
            );
          },
        });
    };

    const applyEmergeProgress = (
      rise: number,
      pose: NonNullable<ReturnType<typeof measureHeroRestPose>>,
    ) => {
      /* rise: 0 = hidden inside marble, 1 = resting above pedestal */
      const { start, rest } = measureHeroEmergeRange(pose);
      const y = start.y + (rest.y - start.y) * rise;

      const rotateY = HERO_PRODUCT_EMERGE.startRotateYDeg * (1 - rise);
      const rotateX = HERO_PRODUCT_EMERGE.startRotateXDeg * (1 - rise);
      const depth =
        HERO_PRODUCT_EMERGE.startDepth +
        (HERO_PRODUCT_EMERGE.endDepth - HERO_PRODUCT_EMERGE.startDepth) * rise;

      patchProductJourney(
        {
          revealed: true,
          phase: "emerging",
          x: start.x + (rest.x - start.x) * rise,
          y,
          scale: getJourneyScaleTargets().start,
          screenWidthPx: pose.stageWidthPx,
          rotateY,
          rotateX,
          depth,
          floatY: 0,
          idleRotateY: 0,
          compressY: 1,
          shadowOpacity: 0.25 + rise * 0.47,
        },
        true,
      );
    };

    const run = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap/load").then(
        (mod) => mod.loadGsapWithScrollTrigger(),
      );
      scrollTriggerPlugin = ScrollTrigger;
      if (cancelled) return;

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });
      if (cancelled) return;

      clearPortalClip();

      const pose0 = refreshAnchors({
        freezeHero: true,
        freezeSignature: true,
      });
      const heroSection = document.querySelector(
        '[data-journey-section="hero"]',
      ) as HTMLElement | null;
      const signatureSection = document.querySelector(
        '[data-journey-section="signature"]',
      ) as HTMLElement | null;

      if (!heroSection || !signatureSection) return;

      const pose =
        pose0 ??
        ({
          bagCenter: anchorsRef.current?.hero ?? { x: 0.66, y: 0.5 },
          cavity: { x: 0.66, y: 0.56 },
          stageWidthPx: 340,
          bagHalfHeight: 0.06,
          lipY: 0.52,
          shelfTopViewportY: 50,
        } as const);

      const emergeStart = emergeStartForPose(pose);

      patchProductJourney({
        x: emergeStart.x,
        y: emergeStart.y,
        scale: getJourneyScaleTargets().start,
        screenWidthPx: pose.stageWidthPx,
        rotateY: HERO_PRODUCT_EMERGE.startRotateYDeg,
        rotateX: HERO_PRODUCT_EMERGE.startRotateXDeg,
        depth: HERO_PRODUCT_EMERGE.startDepth,
        floatY: 0,
        idleRotateY: 0,
        compressY: 1,
        revealed: false,
        phase: "concealed",
        shadowOpacity: 0,
        contentReady: false,
      });

      const proxy = progressRef.current;
      proxy.t = 0;

      if (prefersReducedMotion) {
        patchProductJourney({
          revealed: true,
          phase: "hero-idle",
          x: pose.bagCenter.x,
          y: pose.bagCenter.y,
          scale: getJourneyScaleTargets().start,
          screenWidthPx: pose.stageWidthPx,
          rotateY: 0,
          rotateX: 0,
          depth: 0,
          shadowOpacity: 0.72,
        });
      } else {
        const emerge = { rise: 0, settle: 0 };

        revealTimeline = gsap.timeline({
          delay: HERO_PRODUCT_TIMING.revealDelay,
        });

        revealTimeline.call(
          () => {
            const live = measureHeroRestPose() ?? pose;
            applyEmergeProgress(0, live);
          },
          undefined,
          0,
        );

        const riseEnd = HERO_PRODUCT_TIMING.emergeStartDelay;

        revealTimeline.to(
          emerge,
          {
            rise: 1,
            duration: HERO_PRODUCT_TIMING.emergeDuration,
            ease: HERO_PRODUCT_EASE.emerge,
            onUpdate: () => {
              const live = measureHeroRestPose() ?? pose;
              applyEmergeProgress(emerge.rise, live);
            },
          },
          riseEnd,
        );

        /* Soft 1–2px settle after the lift — then idle */
        revealTimeline
          .to(
            emerge,
            {
              settle: HERO_PRODUCT_TIMING.settlePx,
              duration: HERO_PRODUCT_TIMING.settleDuration * 0.45,
              ease: "power1.out",
              onUpdate: () => {
                patchProductJourney(
                  { floatY: emerge.settle, phase: "emerging" },
                  true,
                );
              },
            },
            riseEnd + HERO_PRODUCT_TIMING.emergeDuration,
          )
          .to(
            emerge,
            {
              settle: 0,
              duration: HERO_PRODUCT_TIMING.settleDuration * 0.55,
              ease: HERO_PRODUCT_EASE.settle,
              onUpdate: () => {
                patchProductJourney(
                  { floatY: emerge.settle, phase: "emerging" },
                  true,
                );
              },
              onComplete: () => {
                if (cancelled) return;
                const live = measureHeroRestPose() ?? pose;
                refreshAnchors({ freezeHero: true, freezeSignature: true });
                patchProductJourney({
                  revealed: true,
                  phase: "hero-idle",
                  x: live.bagCenter.x,
                  y: live.bagCenter.y,
                  scale: getJourneyScaleTargets().start,
                  screenWidthPx: live.stageWidthPx,
                  rotateY: 0,
                  rotateX: 0,
                  depth: 0,
                  shadowOpacity: 0.72,
                  floatY: 0,
                  idleRotateY: 0,
                });
                if (proxy.t > 0.02) {
                  applyProgress(proxy.t);
                } else {
                  void startIdle(gsap);
                }
              },
            },
            riseEnd +
              HERO_PRODUCT_TIMING.emergeDuration +
              HERO_PRODUCT_TIMING.settleDuration * 0.45,
          );
      }

      refreshHeroChapterExitRange(heroSection);

      ctx = gsap.context(() => {
        /*
         * ONE master scrub for Hero → Signature.
         * Journey pose + hero chrome exit both sample this progress —
         * no overlapping scrub timelines.
         */
        const tween = gsap.to(proxy, {
          t: 1,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: PRODUCT_JOURNEY.scroll.start,
            endTrigger: signatureSection,
            end: PRODUCT_JOURNEY.scroll.end,
            scrub: PRODUCT_JOURNEY.scroll.scrub,
            invalidateOnRefresh: true,
            anticipatePin: 0,
            onUpdate: (self) => {
              applyProgress(proxy.t);
              applyHeroChapterExitAtScroll(self.scroll());
            },
            onRefresh: () => {
              refreshAnchors({ freezeHero: true, freezeSignature: true });
              refreshHeroChapterExitRange(heroSection);
              applyProgress(proxy.t);
              applyHeroChapterExitAtScroll(window.scrollY);
            },
          },
        });
        scrollTweenRef.current = tween;

        /*
         * Journey ends at the Signature Piece. From the landing point until
         * the section leaves, DOCK the bag to the pedestal so it stays
         * locked above the marble — it never travels below this position.
         */
        ScrollTrigger.create({
          trigger: signatureSection,
          start: PRODUCT_JOURNEY.scroll.end,
          endTrigger: signatureSection,
          end: PRODUCT_JOURNEY.scroll.hideAfterSignature,
          onEnter: () => dockBagToSignature({ force: true }),
          onEnterBack: () => dockBagToSignature({ force: true }),
          onUpdate: (self) => {
            if (self.progress < 1) dockBagToSignature();
          },
          onLeaveBack: () => {
            /* Scrolled back above the pedestal — travel scrub resumes */
            lastDockedRef.current = null;
            applyProgress(progressRef.current.t);
          },
          onRefresh: (self) => {
            if (self.isActive) dockBagToSignature({ force: true });
          },
        });

        /* Hide the fixed canvas only once the section is fully above viewport */
        ScrollTrigger.create({
          trigger: signatureSection,
          start: PRODUCT_JOURNEY.scroll.hideAfterSignature,
          onEnter: () => setCanvasVisible(false),
          onLeaveBack: () => setCanvasVisible(true),
          onRefresh: (self) => {
            setCanvasVisible(self.scroll() < self.start);
          },
        });
      });

      scheduleScrollTriggerRefresh(ScrollTrigger);
    };

    void run();

    let resizeRaf = 0;
    const onResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        /* Re-freeze anchors in document space after layout changes */
        frozenHeroDocRef.current = null;
        frozenSignatureDocRef.current = null;
        lastDockedRef.current = null;
        const pose = refreshAnchors({
          freezeHero: true,
          freezeSignature: true,
        });
        if (
          pose &&
          productJourneyState.progress < 0.02 &&
          productJourneyState.phase !== "travelling" &&
          productJourneyState.phase !== "emerging"
        ) {
          if (productJourneyState.revealed) {
            patchProductJourney(
              {
                x: pose.bagCenter.x,
                y: pose.bagCenter.y,
                screenWidthPx: pose.stageWidthPx,
              },
              true,
            );
          }
        }
        applyProgress(progressRef.current.t);
        if (scrollTriggerPlugin) {
          scheduleScrollTriggerRefresh(scrollTriggerPlugin);
        }
      });
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      clearPortalClip();
      revealTimeline?.kill();
      landingTimeline?.kill();
      killIdle();
      scrollTweenRef.current = null;
      ctx?.revert();
      delete document.documentElement.dataset.journeyCanvas;
      patchProductJourney({
        phase: "concealed",
        revealed: false,
        interactiveEnabled: false,
        progress: 0,
        contentReady: false,
        canvasVisible: true,
        depth: 0,
        idleRotateY: 0,
        rotateX: 0,
      });
    };
  }, [enabled]);
}
