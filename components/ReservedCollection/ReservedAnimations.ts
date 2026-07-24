"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  setClipConcealed,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";
import { loadGsapWithScrollTrigger } from "@/lib/gsap/load";
import { RESERVED_ENTRANCE } from "@/lib/reserved/constants";

type ReservedElements = {
  heroStage: HTMLElement | null;
  heroBg: HTMLElement | null;
  heroNoise: HTMLElement | null;
  heroSpotlight: HTMLElement | null;
  heroGrain: HTMLElement | null;
  heroParticles: HTMLElement | null;
  heroEyebrow: HTMLElement | null;
  heroWords: HTMLElement[];
  heroDescription: HTMLElement | null;
  heroCounter: HTMLElement | null;
  cards: HTMLElement[];
  cardImages: HTMLElement[];
  cardSweeps: HTMLElement[];
  summary: HTMLElement | null;
  timelineEyebrow: HTMLElement | null;
  timelineHeading: HTMLElement | null;
  timelineDescription: HTMLElement | null;
  timelineItems: HTMLElement[];
  serviceCards: HTMLElement[];
  concierge: HTMLElement | null;
  completeEyebrow: HTMLElement | null;
  completeHeading: HTMLElement | null;
  completeDescription: HTMLElement | null;
  completeCards: HTMLElement[];
  trustChips: HTMLElement[];
  empty: HTMLElement | null;
};

function collect(root: HTMLElement): ReservedElements {
  return {
    heroStage: root.querySelector('[data-reserved="hero-stage"]'),
    heroBg: root.querySelector('[data-reserved="hero-bg"]'),
    heroNoise: root.querySelector('[data-reserved="hero-noise"]'),
    heroSpotlight: root.querySelector('[data-reserved="hero-spotlight"]'),
    heroGrain: root.querySelector('[data-reserved="hero-grain"]'),
    heroParticles: root.querySelector('[data-reserved="hero-particles"]'),
    heroEyebrow: root.querySelector('[data-reserved="hero-eyebrow"]'),
    heroWords: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="hero-word"]'),
    ),
    heroDescription: root.querySelector('[data-reserved="hero-description"]'),
    heroCounter: root.querySelector('[data-reserved="hero-counter"]'),
    cards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="card"]'),
    ),
    cardImages: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="card-image"]'),
    ),
    cardSweeps: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="card-sweep"]'),
    ),
    summary: root.querySelector('[data-reserved="summary"]'),
    timelineEyebrow: root.querySelector('[data-reserved="timeline-eyebrow"]'),
    timelineHeading: root.querySelector('[data-reserved="timeline-heading"]'),
    timelineDescription: root.querySelector(
      '[data-reserved="timeline-description"]',
    ),
    timelineItems: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="timeline-item"]'),
    ),
    serviceCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="service-card"]'),
    ),
    concierge: root.querySelector('[data-reserved="concierge"]'),
    completeEyebrow: root.querySelector('[data-reserved="complete-eyebrow"]'),
    completeHeading: root.querySelector('[data-reserved="complete-heading"]'),
    completeDescription: root.querySelector(
      '[data-reserved="complete-description"]',
    ),
    completeCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="complete-card"]'),
    ),
    trustChips: Array.from(
      root.querySelectorAll<HTMLElement>('[data-reserved="trust-chip"]'),
    ),
    empty: root.querySelector('[data-reserved="empty"]'),
  };
}

function revealStatic(elements: ReservedElements) {
  if (elements.heroStage) {
    elements.heroStage.style.clipPath = "none";
    elements.heroStage.style.removeProperty("-webkit-clip-path");
  }

  const all = [
    elements.heroBg,
    elements.heroNoise,
    elements.heroSpotlight,
    elements.heroGrain,
    elements.heroParticles,
    elements.heroEyebrow,
    elements.heroDescription,
    elements.heroCounter,
    elements.summary,
    elements.timelineEyebrow,
    elements.timelineHeading,
    elements.timelineDescription,
    elements.concierge,
    elements.completeEyebrow,
    elements.completeHeading,
    elements.completeDescription,
    elements.empty,
    ...elements.heroWords,
    ...elements.cards,
    ...elements.timelineItems,
    ...elements.serviceCards,
    ...elements.completeCards,
    ...elements.trustChips,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  }

  for (const img of elements.cardImages) {
    img.style.opacity = "1";
    img.style.transform = "scale(1)";
    img.style.filter = "none";
  }
}

export function useReservedAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = collect(root);
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    if (elements.heroStage) concealWithCurtain(elements.heroStage);

    for (const el of [
      elements.heroBg,
      elements.heroNoise,
      elements.heroSpotlight,
      elements.heroGrain,
      elements.heroParticles,
      elements.heroEyebrow,
      elements.heroDescription,
      elements.heroCounter,
    ]) {
      if (el) el.style.opacity = "0";
    }

    for (const word of elements.heroWords) {
      word.style.opacity = "1";
      word.style.transform = "translate3d(0, 110%, 0)";
    }

    const run = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease } = RESERVED_ENTRANCE;
      const y = 28;
      const clipY = "110%";

      ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { force3D: true } });

        if (elements.heroStage) {
          addCurtainReveal(gsap, heroTl, {
            stage: elements.heroStage,
            spotlight: elements.heroSpotlight,
            duration: 1.25,
          });
        }

        for (const [i, el] of [
          elements.heroBg,
          elements.heroNoise,
          elements.heroGrain,
          elements.heroParticles,
        ].entries()) {
          if (!el) continue;
          heroTl.to(
            el,
            { opacity: 1, duration: 1.2, ease: "power4.out" },
            0.1 + i * 0.08,
          );
        }

        let at = 0.45;

        if (elements.heroEyebrow) {
          setLabelConcealed(gsap, elements.heroEyebrow, y);
          heroTl.to(elements.heroEyebrow, labelRevealVars(duration, ease), at);
          at += 0.18;
        }

        if (elements.heroWords.length) {
          setClipConcealed(gsap, elements.heroWords, clipY);
          heroTl.to(
            elements.heroWords,
            clipRevealVars({
              y: clipY,
              duration: 1.05,
              ease,
              stagger: 0.12,
            }),
            at,
          );
          at += 0.12 * elements.heroWords.length + 0.2;
        }

        if (elements.heroDescription) {
          gsap.set(elements.heroDescription, { opacity: 0, y: 24 });
          heroTl.to(
            elements.heroDescription,
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
            at,
          );
          at += 0.2;
        }

        if (elements.heroCounter) {
          gsap.set(elements.heroCounter, { opacity: 0, y: 16 });
          heroTl.to(
            elements.heroCounter,
            { opacity: 1, y: 0, duration: 0.75, ease },
            at,
          );
        }

        if (elements.cards.length) {
          gsap.set(elements.cards, { opacity: 0, y: 40 });
          gsap.set(elements.cardImages, {
            opacity: 0,
            scale: RESERVED_ENTRANCE.cardReveal.scale,
            filter: `blur(${RESERVED_ENTRANCE.cardReveal.blur}px)`,
            y: RESERVED_ENTRANCE.cardReveal.y,
            force3D: true,
          });

          gsap.to(elements.cards, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger,
            ease,
            scrollTrigger: {
              trigger: elements.cards[0],
              start: "top 86%",
              once: true,
            },
          });

          gsap.to(elements.cardImages, {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.15,
            stagger,
            ease: "power4.out",
            force3D: true,
            scrollTrigger: {
              trigger: elements.cards[0],
              start: "top 86%",
              once: true,
            },
            onStart: () => {
              elements.cardSweeps.forEach((sweep, index) => {
                gsap.fromTo(
                  sweep,
                  { opacity: 0, xPercent: -120 },
                  {
                    opacity: 1,
                    xPercent: 120,
                    duration: 1.1,
                    delay: 0.35 + index * stagger,
                    ease: "power2.inOut",
                    onComplete: () => {
                      gsap.set(sweep, { opacity: 0 });
                    },
                  },
                );
              });
            },
          });
        }

        if (elements.summary) {
          gsap.set(elements.summary, { opacity: 0, y: 28 });
          gsap.to(elements.summary, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: elements.summary,
              start: "top 88%",
              once: true,
            },
          });
        }

        const timelineHeader = [
          elements.timelineEyebrow,
          elements.timelineHeading,
          elements.timelineDescription,
        ].filter(Boolean) as HTMLElement[];

        if (timelineHeader.length) {
          gsap.set(timelineHeader, { opacity: 0, y: 22 });
          gsap.to(timelineHeader, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: timelineHeader[0],
              start: "top 85%",
              once: true,
            },
          });
        }

        if (elements.timelineItems.length) {
          gsap.set(elements.timelineItems, { opacity: 0, x: -18 });
          gsap.to(elements.timelineItems, {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: elements.timelineItems[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.serviceCards.length) {
          gsap.set(elements.serviceCards, { opacity: 0, y: 30 });
          gsap.to(elements.serviceCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: elements.serviceCards[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.concierge) {
          gsap.set(elements.concierge, { opacity: 0, y: 32 });
          gsap.to(elements.concierge, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease,
            scrollTrigger: {
              trigger: elements.concierge,
              start: "top 85%",
              once: true,
            },
          });
        }

        const completeHeader = [
          elements.completeEyebrow,
          elements.completeHeading,
          elements.completeDescription,
        ].filter(Boolean) as HTMLElement[];

        if (completeHeader.length) {
          gsap.set(completeHeader, { opacity: 0, y: 22 });
          gsap.to(completeHeader, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: completeHeader[0],
              start: "top 85%",
              once: true,
            },
          });
        }

        if (elements.completeCards.length) {
          gsap.set(elements.completeCards, { opacity: 0, y: 36 });
          gsap.to(elements.completeCards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: elements.completeCards[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.trustChips.length) {
          gsap.set(elements.trustChips, { opacity: 0, y: 16 });
          gsap.to(elements.trustChips, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.06,
            ease,
            scrollTrigger: {
              trigger: elements.trustChips[0],
              start: "top 92%",
              once: true,
            },
          });
        }

        if (elements.empty) {
          gsap.set(elements.empty, { opacity: 0, y: 28 });
          gsap.to(elements.empty, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: elements.empty,
              start: "top 85%",
              once: true,
            },
          });
        }
      }, root);
    };

    void run();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [rootRef]);
}
