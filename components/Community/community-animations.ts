"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  COMMUNITY_CURSOR,
  COMMUNITY_ENTRANCE,
  COMMUNITY_IMAGE_REVEAL,
  COMMUNITY_PARALLAX,
  COMMUNITY_REVEAL,
  type CommunityReveal,
} from "@/lib/community/constants";
import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  setClipConcealed,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";

type CommunityElements = {
  stage: HTMLElement | null;
  bg: HTMLElement | null;
  noise: HTMLElement | null;
  spotlight: HTMLElement | null;
  ambient: HTMLElement | null;
  label: HTMLElement | null;
  headingLines: HTMLElement[];
  description: HTMLElement | null;
  cards: HTMLElement[];
  photos: HTMLElement[];
  cta: HTMLElement | null;
  handle: HTMLElement | null;
  ctaCopy: HTMLElement | null;
  ctaButton: HTMLElement | null;
};

function collectElements(root: HTMLElement): CommunityElements {
  return {
    stage: root.querySelector('[data-community="stage"]'),
    bg: root.querySelector('[data-community="bg"]'),
    noise: root.querySelector('[data-community="noise"]'),
    spotlight: root.querySelector('[data-community="spotlight"]'),
    ambient: root.querySelector('[data-community="ambient"]'),
    label: root.querySelector('[data-community="label"]'),
    headingLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-community="heading-line"]'),
    ),
    description: root.querySelector('[data-community="description"]'),
    cards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-community="card"]'),
    ),
    photos: Array.from(
      root.querySelectorAll<HTMLElement>('[data-community="photo"]'),
    ),
    cta: root.querySelector('[data-community="cta"]'),
    handle: root.querySelector('[data-community="handle"]'),
    ctaCopy: root.querySelector('[data-community="cta-copy"]'),
    ctaButton: root.querySelector('[data-community="cta-button"]'),
  };
}

function isLifestyleCard(card: HTMLElement) {
  return card.tagName === "A";
}

function revealFrom(reveal: CommunityReveal) {
  switch (reveal) {
    case "fade-left":
      return COMMUNITY_REVEAL.fadeLeft;
    case "fade-right":
      return COMMUNITY_REVEAL.fadeRight;
    case "scale":
      return COMMUNITY_REVEAL.scale;
    case "rotate":
      return COMMUNITY_REVEAL.rotate;
    case "fade-up":
    default:
      return COMMUNITY_REVEAL.fadeUp;
  }
}

function concealTargets(elements: CommunityElements) {
  const { y } = COMMUNITY_ENTRANCE;
  const concealed = `translate3d(0, ${y}px, 0)`;

  for (const el of [elements.label, elements.description, elements.cta]) {
    if (!el) continue;
    el.style.opacity = "0";
    el.style.transform = concealed;
  }

  for (const line of elements.headingLines) {
    line.style.opacity = "1";
    line.style.transform = "translate3d(0, 110%, 0)";
  }

  for (const card of elements.cards) {
    if (isLifestyleCard(card)) {
      card.style.opacity = "1";
      card.style.transform = "none";
      continue;
    }
    card.style.opacity = "0";
  }

  const {
    opacity,
    scale,
    blur,
    y: photoY,
    rotate,
    shadowFrom,
  } = COMMUNITY_IMAGE_REVEAL;

  for (const photo of elements.photos) {
    photo.style.opacity = String(opacity);
    photo.style.transform = `translate3d(0, ${photoY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
    photo.style.filter = `blur(${blur}px)`;
    photo.style.transformOrigin = "50% 50%";

    const media = photo.closest<HTMLElement>('[data-community="media"]');
    if (media) media.style.boxShadow = shadowFrom;
  }
}

function revealStatic(elements: CommunityElements) {
  if (elements.stage) {
    elements.stage.style.clipPath = "none";
    elements.stage.style.removeProperty("-webkit-clip-path");
  }

  for (const el of [
    elements.bg,
    elements.noise,
    elements.spotlight,
    elements.ambient,
  ]) {
    if (el) el.style.opacity = "1";
  }

  const all = [
    elements.label,
    elements.description,
    elements.cta,
    elements.handle,
    elements.ctaCopy,
    elements.ctaButton,
    ...elements.headingLines,
    ...elements.cards,
    ...elements.photos,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  }

  for (const photo of elements.photos) {
    const media = photo.closest<HTMLElement>('[data-community="media"]');
    if (media) media.style.boxShadow = COMMUNITY_IMAGE_REVEAL.shadowTo;
  }
}

function unveilPhoto(
  gsap: typeof import("gsap").default,
  photo: HTMLElement,
  delay = 0,
) {
  const {
    duration,
    ease,
    opacity,
    scale,
    blur,
    y,
    rotate,
    shadowFrom,
    shadowTo,
    sweepDuration,
  } = COMMUNITY_IMAGE_REVEAL;

  const media = photo.closest<HTMLElement>('[data-community="media"]');
  const sweep = media?.querySelector<HTMLElement>(
    '[data-community="light-sweep"]',
  );

  gsap.set(photo, {
    opacity,
    y,
    scale,
    rotate,
    filter: `blur(${blur}px)`,
    transformOrigin: "50% 50%",
    force3D: true,
  });

  if (media) {
    gsap.set(media, { boxShadow: shadowFrom });
  }

  if (sweep) {
    gsap.set(sweep, {
      opacity: 0,
      xPercent: -120,
      skewX: -12,
      force3D: true,
    });
  }

  const tl = gsap.timeline({
    delay,
    defaults: { force3D: true },
    onComplete: () => {
      gsap.set(photo, {
        opacity: 1,
        clearProps: "transform,filter,willChange",
      });
      photo.style.willChange = "auto";
      if (sweep) {
        gsap.set(sweep, {
          opacity: 0,
          clearProps: "transform,willChange",
        });
      }
    },
  });

  tl.to(
    photo,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      duration,
      ease,
    },
    0,
  );

  if (media) {
    tl.to(
      media,
      {
        boxShadow: shadowTo,
        duration,
        ease,
      },
      0,
    );
  }

  if (sweep) {
    tl.to(
      sweep,
      {
        opacity: 0.85,
        xPercent: 0,
        duration: sweepDuration * 0.45,
        ease: "power2.out",
      },
      0.12,
    ).to(
      sweep,
      {
        opacity: 0,
        xPercent: 120,
        duration: sweepDuration * 0.55,
        ease: "power2.in",
      },
      0.12 + sweepDuration * 0.45,
    );
  }

  return tl;
}

export function useCommunityAnimations(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    if (!root) return;

    const elements = collectElements(root);
    concealTargets(elements);

    if (elements.stage) concealWithCurtain(elements.stage);

    if (elements.bg) elements.bg.style.opacity = "0";
    if (elements.noise) elements.noise.style.opacity = "0";
    if (elements.spotlight) elements.spotlight.style.opacity = "0";
    if (elements.ambient) elements.ambient.style.opacity = "0";

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    const cleanups: Array<() => void> = [];

    const run = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap/load").then(
        (mod) => mod.loadGsapWithScrollTrigger(),
      );
      if (cancelled || !rootRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease, y, clipY } = COMMUNITY_ENTRANCE;
      const fadeUp = { opacity: 1, y: 0, duration, ease, force3D: true };
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const canHover = window.matchMedia("(hover: hover)").matches;

      ctx = gsap.context(() => {
        /* ── Curtain + atmosphere ── */
        const atmosphere = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            once: true,
          },
        });

        if (elements.stage) {
          addCurtainReveal(gsap, atmosphere, {
            stage: elements.stage,
            spotlight: elements.spotlight,
          });
        }

        for (const [i, el] of [
          elements.bg,
          elements.noise,
          elements.ambient,
        ].entries()) {
          if (!el) continue;
          atmosphere.to(
            el,
            { opacity: 1, duration: 1.1, ease: "power4.out" },
            0.12 + i * 0.08,
          );
        }

        /* ── Header entrance ── */
        const entrance = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 72%",
            once: true,
          },
        });

        let at = 0.12;

        if (elements.label) {
          setLabelConcealed(gsap, elements.label, y);
          entrance.to(elements.label, labelRevealVars(duration, ease), at);
          at += stagger;
        }

        if (elements.headingLines.length) {
          setClipConcealed(gsap, elements.headingLines, clipY);
          entrance.to(
            elements.headingLines,
            clipRevealVars({ y: clipY, duration, ease, stagger }),
            at,
          );
          at += stagger * elements.headingLines.length;
        }

        if (elements.description) {
          gsap.set(elements.description, { opacity: 0, y, force3D: true });
          entrance.to(elements.description, fadeUp, at);
        }

        /* ── Quote / story card reveals (non-image) ── */
        for (const card of elements.cards) {
          if (isLifestyleCard(card)) continue;

          const reveal =
            (card.dataset.reveal as CommunityReveal | undefined) ?? "fade-up";
          const from = revealFrom(reveal);

          gsap.set(card, {
            opacity: 0,
            x: from.x,
            y: from.y,
            scale: from.scale,
            rotate: from.rotate,
            force3D: true,
          });

          gsap.to(card, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: COMMUNITY_REVEAL.duration,
            ease: COMMUNITY_REVEAL.ease,
            force3D: true,
            clearProps: "transform",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        }

        /* ── Editorial photograph unveil ── */
        if (elements.photos.length) {
          ScrollTrigger.batch(elements.photos, {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              batch.forEach((photo, index) => {
                unveilPhoto(
                  gsap,
                  photo as HTMLElement,
                  index * COMMUNITY_IMAGE_REVEAL.stagger,
                );
              });
            },
          });
        }

        /* ── CTA stagger ── */
        if (elements.cta) {
          const ctaTargets = [
            elements.handle,
            elements.ctaCopy,
            elements.ctaButton,
          ].filter(Boolean) as HTMLElement[];

          gsap.set(ctaTargets, { opacity: 0, y: 28, force3D: true });

          gsap.to(ctaTargets, {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: 0.12,
            ease,
            force3D: true,
            clearProps: "transform",
            scrollTrigger: {
              trigger: elements.cta,
              start: "top 86%",
              once: true,
            },
          });
        }

        /* ── Desktop parallax (single scrub + quickSetters — no N ScrollTriggers) ── */
        if (isDesktop) {
          const mediaNodes = root.querySelectorAll<HTMLElement>(
            '[data-community="media"]',
          );

          type ParallaxItem = {
            setY: (value: number) => void;
            from: number;
            span: number;
            start: number;
            range: number;
          };

          const items: ParallaxItem[] = [];

          const rebuildParallax = () => {
            items.length = 0;
            const scrollY = window.scrollY;
            const vh = window.innerHeight;

            for (const media of mediaNodes) {
              const card =
                media.closest<HTMLElement>('[data-community="card"]') ?? media;
              const amount = Number(card.dataset.parallax ?? 10);
              const from = -amount * COMMUNITY_PARALLAX.intensity;
              const to = amount * COMMUNITY_PARALLAX.intensity;
              const rect = card.getBoundingClientRect();
              const start = rect.top + scrollY - vh;
              const end = rect.bottom + scrollY;
              items.push({
                setY: gsap.quickSetter(media, "y", "px") as (value: number) => void,
                from,
                span: to - from,
                start,
                range: Math.max(1, end - start),
              });
            }
          };

          ScrollTrigger.create({
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: COMMUNITY_PARALLAX.scrub,
            invalidateOnRefresh: true,
            onRefresh: rebuildParallax,
            onUpdate: () => {
              const y = window.scrollY;
              for (const item of items) {
                const p = Math.min(
                  1,
                  Math.max(0, (y - item.start) / item.range),
                );
                item.setY(item.from + item.span * p);
              }
            },
          });

          rebuildParallax();
        }

        /* ── Cursor magnetic drift (desktop + hover) ── */
        if (isDesktop && canHover) {
          const lifestyleCards = elements.cards.filter(isLifestyleCard);

          for (const card of lifestyleCards) {
            const layer = card.querySelector<HTMLElement>(
              '[data-community="cursor-layer"]',
            );
            if (!layer) continue;

            let raf = 0;
            let targetX = 0;
            let targetY = 0;
            let currentX = 0;
            let currentY = 0;

            const tick = () => {
              currentX += (targetX - currentX) * COMMUNITY_CURSOR.ease;
              currentY += (targetY - currentY) * COMMUNITY_CURSOR.ease;

              gsap.set(layer, {
                x: currentX,
                y: currentY,
                force3D: true,
              });

              if (
                Math.abs(targetX - currentX) > 0.05 ||
                Math.abs(targetY - currentY) > 0.05
              ) {
                raf = requestAnimationFrame(tick);
              } else {
                raf = 0;
              }
            };

            const onMove = (event: MouseEvent) => {
              const rect = card.getBoundingClientRect();
              const nx = (event.clientX - rect.left) / rect.width - 0.5;
              const ny = (event.clientY - rect.top) / rect.height - 0.5;
              targetX = nx * COMMUNITY_CURSOR.maxOffset * 2;
              targetY = ny * COMMUNITY_CURSOR.maxOffset * 2;
              if (!raf) raf = requestAnimationFrame(tick);
            };

            const onLeave = () => {
              targetX = 0;
              targetY = 0;
              if (!raf) raf = requestAnimationFrame(tick);
            };

            card.addEventListener("mousemove", onMove);
            card.addEventListener("mouseleave", onLeave);

            cleanups.push(() => {
              card.removeEventListener("mousemove", onMove);
              card.removeEventListener("mouseleave", onLeave);
              if (raf) cancelAnimationFrame(raf);
              gsap.set(layer, { x: 0, y: 0 });
            });
          }
        }
      }, root);
    };

    void run();

    return () => {
      cancelled = true;
      for (const cleanup of cleanups) cleanup();
      ctx?.revert();
    };
  }, [rootRef, enabled]);
}
