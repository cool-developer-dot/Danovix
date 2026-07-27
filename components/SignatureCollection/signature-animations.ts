"use client";

import { useLayoutEffect, useRef, useState, type RefObject } from "react";

import { scheduleScrollTriggerRefresh } from "@/lib/gsap/load";
import { PRODUCT_JOURNEY } from "@/lib/product-journey/constants";
import {
  productJourneyState,
  subscribeProductJourney,
} from "@/lib/product-journey/store";
import { SIGNATURE_ANIMATION } from "@/lib/signature-collection/constants";
import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  setClipConcealed,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";

type SignatureElements = {
  stage: HTMLElement;
  camera: HTMLElement | null;
  bg: HTMLElement | null;
  noise: HTMLElement | null;
  vignette: HTMLElement | null;
  spotlight: HTMLElement | null;
  ambient: HTMLElement | null;
  marble: HTMLElement | null;
  label: HTMLElement | null;
  headingLead: NodeListOf<HTMLElement>;
  headingPiece: HTMLElement | null;
  sentences: NodeListOf<HTMLElement>;
  cta: HTMLElement | null;
  features: NodeListOf<HTMLElement>;
};

function collectSignatureElements(root: HTMLElement): SignatureElements | null {
  const stage = root.querySelector('[data-signature="stage"]') as HTMLElement;
  if (!stage) return null;

  return {
    stage,
    camera: root.querySelector('[data-signature="camera"]'),
    bg: root.querySelector('[data-signature="bg"]'),
    noise: root.querySelector('[data-signature="noise"]'),
    vignette: root.querySelector('[data-signature="vignette"]'),
    spotlight: root.querySelector('[data-signature="spotlight"]'),
    ambient: root.querySelector('[data-signature="ambient"]'),
    marble: root.querySelector('[data-signature="marble"]'),
    label: root.querySelector('[data-signature="label"]'),
    headingLead: root.querySelectorAll('[data-heading="lead"]'),
    headingPiece: root.querySelector('[data-heading="piece"]'),
    sentences: root.querySelectorAll('[data-signature="sentence"]'),
    cta: root.querySelector('[data-signature="cta"]'),
    features: root.querySelectorAll('[data-signature="feature"]'),
  };
}

function concealEditorial(elements: SignatureElements) {
  const { y } = SIGNATURE_ANIMATION.editorial;
  const concealed = `translate3d(0, ${y}px, 0)`;

  for (const el of [
    elements.headingPiece,
    elements.cta,
    ...Array.from(elements.sentences),
    ...Array.from(elements.features),
  ]) {
    if (!el) continue;
    el.style.opacity = "0";
    el.style.transform = concealed;
  }

  if (elements.label) {
    elements.label.style.opacity = "0";
    elements.label.style.transform = concealed;
    elements.label.style.filter = "blur(8px)";
  }

  for (const word of Array.from(elements.headingLead)) {
    word.style.opacity = "1";
    word.style.transform = "translate3d(0, 110%, 0)";
  }
  if (elements.headingPiece) {
    elements.headingPiece.style.opacity = "1";
    elements.headingPiece.style.transform = "translate3d(0, 110%, 0)";
  }
}

function revealAtmosphere(elements: SignatureElements) {
  if (elements.bg) elements.bg.style.opacity = "1";
  if (elements.noise) elements.noise.style.opacity = "1";
  if (elements.vignette) elements.vignette.style.opacity = "1";
  if (elements.spotlight) elements.spotlight.style.opacity = "1";
  if (elements.ambient) elements.ambient.style.opacity = "1";
  if (elements.marble) {
    elements.marble.style.opacity = "1";
    elements.marble.style.transform = "none";
  }
}

/**
 * Signature gallery + editorial lifecycle.
 * Editorial reveal is driven by journey store `contentReady` (survives lazy mount)
 * with ScrollTrigger progress as a resilient fallback — never depends on page refresh.
 */
export function useSignatureAnimations(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [calloutsActive, setCalloutsActive] = useState(false);
  const editorialPlayedRef = useRef(false);
  const editorialTweenRef = useRef<{ kill: () => void } | null>(null);

  useLayoutEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    if (!root) return;

    const elements = collectSignatureElements(root);
    if (!elements) return;

    if (elements.bg) elements.bg.style.opacity = "0";
    if (elements.noise) elements.noise.style.opacity = "0";
    if (elements.vignette) elements.vignette.style.opacity = "0";
    if (elements.spotlight) elements.spotlight.style.opacity = "0";
    if (elements.ambient) elements.ambient.style.opacity = "0";
    if (elements.marble) {
      elements.marble.style.opacity = "0";
      /* Opacity only — never translate Y (bag docks to this node) */
      elements.marble.style.transform = "none";
    }
    concealWithCurtain(elements.stage);
    concealEditorial(elements);

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    let scrollTriggerPlugin: typeof import("gsap/ScrollTrigger").ScrollTrigger | null =
      null;

    const resetEditorial = () => {
      editorialPlayedRef.current = false;
      editorialTweenRef.current?.kill();
      editorialTweenRef.current = null;
      setCalloutsActive(false);
      concealEditorial(elements);
    };

    const playEditorial = async () => {
      if (cancelled || editorialPlayedRef.current) return;
      editorialPlayedRef.current = true;

      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      /* Intentionally no ScrollTrigger.refresh() — landing does not
       * change layout; refresh during scroll causes a main-thread hitch. */

      const { duration, delay, ease, y, clipY, featureX } =
        SIGNATURE_ANIMATION.editorial;
      const fadeUp = {
        opacity: 1,
        y: 0,
        duration,
        ease,
        force3D: true,
      };

      for (const el of [
        elements.cta,
        ...Array.from(elements.sentences),
        ...Array.from(elements.features),
      ]) {
        if (!el) continue;
        gsap.set(el, { opacity: 0, y, force3D: true });
      }

      if (elements.label) {
        setLabelConcealed(gsap, elements.label, y);
      }

      setClipConcealed(gsap, elements.headingLead, clipY);
      if (elements.headingPiece) {
        setClipConcealed(gsap, elements.headingPiece, clipY);
      }

      for (const feature of Array.from(elements.features)) {
        gsap.set(feature, { opacity: 0, x: -featureX, force3D: true });
      }
      if (elements.cta) {
        gsap.set(elements.cta, {
          opacity: 0,
          y,
          scale: 0.92,
          force3D: true,
        });
      }

      await new Promise((r) =>
        setTimeout(r, PRODUCT_JOURNEY.landing.contentDelay * 1000),
      );
      if (cancelled) return;

      let at = 0;
      const tl = gsap.timeline({
        onComplete: () => {
          if (!cancelled) setCalloutsActive(true);
        },
      });
      editorialTweenRef.current = tl;

      tl.to(elements.label, labelRevealVars(duration, ease), at);
      at += delay;

      if (elements.headingLead.length) {
        tl.to(
          elements.headingLead,
          clipRevealVars({ y: clipY, duration, ease, stagger: delay }),
          at,
        );
        at += delay * elements.headingLead.length;
      }
      if (elements.headingPiece) {
        tl.to(elements.headingPiece, clipRevealVars({ y: clipY, duration, ease }), at);
        at += delay;
      }

      elements.sentences.forEach((sentence) => {
        tl.to(sentence, fadeUp, at);
        at += delay;
      });

      tl.to(
        elements.cta,
        { ...fadeUp, scale: 1, clearProps: "transform" },
        at,
      );
      at += delay;

      tl.to(
        elements.features,
        {
          opacity: 1,
          x: 0,
          duration,
          stagger: delay,
          ease,
          force3D: true,
        },
        at,
      );
    };

    const tryRevealEditorial = () => {
      if (productJourneyState.contentReady) {
        void playEditorial();
      }
    };

    const run = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap/load").then(
        (mod) => mod.loadGsapWithScrollTrigger(),
      );
      scrollTriggerPlugin = ScrollTrigger;
      if (cancelled || !rootRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        revealAtmosphere(elements);
        elements.stage.style.clipPath = "none";
        elements.stage.style.removeProperty("-webkit-clip-path");
        for (const el of [
          elements.label,
          elements.headingPiece,
          elements.cta,
          ...Array.from(elements.headingLead),
          ...Array.from(elements.sentences),
          ...Array.from(elements.features),
        ]) {
          if (!el) continue;
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "";
        }
        setCalloutsActive(true);
        return;
      }

      ctx = gsap.context(() => {
        /* Cinematic curtain + atmosphere as the gallery enters view */
        const atmosphere = gsap.timeline({
          scrollTrigger: {
            trigger: elements.stage,
            start: "top 88%",
            once: true,
          },
        });

        addCurtainReveal(
          gsap,
          atmosphere,
          {
            stage: elements.stage,
            camera: elements.camera,
            spotlight: elements.spotlight,
            duration: SIGNATURE_ANIMATION.cinematic.curtainDuration,
            cameraDuration: SIGNATURE_ANIMATION.cinematic.cameraDuration,
            startBlur: SIGNATURE_ANIMATION.cinematic.startBlur,
            blurDuration: SIGNATURE_ANIMATION.cinematic.blurDuration,
            startScale: SIGNATURE_ANIMATION.cinematic.startScale,
          },
          0,
        );

        const atmosDur = SIGNATURE_ANIMATION.cinematic.atmosphereDuration;

        if (elements.bg) {
          atmosphere.to(
            elements.bg,
            { opacity: 1, duration: atmosDur, ease: "power4.out" },
            0.08,
          );
        }
        if (elements.noise) {
          atmosphere.to(
            elements.noise,
            { opacity: 1, duration: atmosDur, ease: "power4.out" },
            0.08,
          );
        }
        if (elements.vignette) {
          atmosphere.to(
            elements.vignette,
            { opacity: 1, duration: atmosDur, ease: "power4.out" },
            0.1,
          );
        }
        if (elements.ambient) {
          atmosphere.to(
            elements.ambient,
            { opacity: 1, duration: atmosDur, ease: "power4.out" },
            0.14,
          );
        }
        if (elements.marble) {
          atmosphere.to(
            elements.marble,
            {
              opacity: 1,
              duration: SIGNATURE_ANIMATION.cinematic.marbleDuration,
              ease: "power4.out",
            },
            0.14,
          );
        }

        /*
         * Fallback editorial trigger: when the stage is well into view,
         * reveal content even if the CustomEvent was missed (lazy mount race).
         * playEditorial() is idempotent via editorialPlayedRef.
         */
        ScrollTrigger.create({
          trigger: elements.stage,
          start: "top 55%",
          once: true,
          onEnter: () => {
            tryRevealEditorial();
          },
        });
      }, root);

      scheduleScrollTriggerRefresh(ScrollTrigger);

      /* If the bag already landed before this section mounted, reveal now */
      tryRevealEditorial();
    };

    void run();

    let wasContentReady = productJourneyState.contentReady;
    const unsubscribe = subscribeProductJourney((state) => {
      if (state.contentReady && !wasContentReady) {
        wasContentReady = true;
        void playEditorial();
        return;
      }
      if (!state.contentReady && wasContentReady) {
        wasContentReady = false;
      }
      if (editorialPlayedRef.current && state.progress < 0.9) {
        resetEditorial();
      }
    });

    const onJourney = (event: Event) => {
      const detail = (event as CustomEvent<{ type: string }>).detail;
      if (detail?.type === "landed") {
        void playEditorial();
      }
      if (detail?.type === "departed") {
        resetEditorial();
      }
    };

    window.addEventListener("danovix:product-journey", onJourney);

    return () => {
      cancelled = true;
      unsubscribe();
      window.removeEventListener("danovix:product-journey", onJourney);
      editorialTweenRef.current?.kill();
      ctx?.revert();
      if (scrollTriggerPlugin && root) {
        scrollTriggerPlugin.getAll().forEach((trigger) => {
          if (root.contains(trigger.trigger as Node)) {
            trigger.kill();
          }
        });
      }
    };
  }, [rootRef, enabled]);

  return calloutsActive;
}
