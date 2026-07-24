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
import { WISHLIST_ENTRANCE } from "@/lib/wishlist/constants";

type WishlistElements = {
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
  statCards: HTMLElement[];
  filters: HTMLElement | null;
  cards: HTMLElement[];
  cardImages: HTMLElement[];
  cardSweeps: HTMLElement[];
  empty: HTMLElement | null;
  quoteLines: HTMLElement[];
  compareEyebrow: HTMLElement | null;
  compareHeading: HTMLElement | null;
  compareDescription: HTMLElement | null;
  compareHint: HTMLElement | null;
  concierge: HTMLElement | null;
  curatedEyebrow: HTMLElement | null;
  curatedHeading: HTMLElement | null;
  curatedDescription: HTMLElement | null;
  curatedCards: HTMLElement[];
};

function collect(root: HTMLElement): WishlistElements {
  return {
    heroStage: root.querySelector('[data-wishlist="hero-stage"]'),
    heroBg: root.querySelector('[data-wishlist="hero-bg"]'),
    heroNoise: root.querySelector('[data-wishlist="hero-noise"]'),
    heroSpotlight: root.querySelector('[data-wishlist="hero-spotlight"]'),
    heroGrain: root.querySelector('[data-wishlist="hero-grain"]'),
    heroParticles: root.querySelector('[data-wishlist="hero-particles"]'),
    heroEyebrow: root.querySelector('[data-wishlist="hero-eyebrow"]'),
    heroWords: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="hero-word"]'),
    ),
    heroDescription: root.querySelector('[data-wishlist="hero-description"]'),
    heroCounter: root.querySelector('[data-wishlist="hero-counter"]'),
    statCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="stat-card"]'),
    ),
    filters: root.querySelector('[data-wishlist="filters"]'),
    cards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="card"]'),
    ),
    cardImages: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="card-image"]'),
    ),
    cardSweeps: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="card-sweep"]'),
    ),
    empty: root.querySelector('[data-wishlist="empty"]'),
    quoteLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="quote-line"]'),
    ),
    compareEyebrow: root.querySelector('[data-wishlist="compare-eyebrow"]'),
    compareHeading: root.querySelector('[data-wishlist="compare-heading"]'),
    compareDescription: root.querySelector(
      '[data-wishlist="compare-description"]',
    ),
    compareHint: root.querySelector('[data-wishlist="compare-hint"]'),
    concierge: root.querySelector('[data-wishlist="concierge"]'),
    curatedEyebrow: root.querySelector('[data-wishlist="curated-eyebrow"]'),
    curatedHeading: root.querySelector('[data-wishlist="curated-heading"]'),
    curatedDescription: root.querySelector(
      '[data-wishlist="curated-description"]',
    ),
    curatedCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-wishlist="curated-card"]'),
    ),
  };
}

function revealStatic(elements: WishlistElements) {
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
    elements.filters,
    elements.empty,
    elements.compareEyebrow,
    elements.compareHeading,
    elements.compareDescription,
    elements.compareHint,
    elements.concierge,
    elements.curatedEyebrow,
    elements.curatedHeading,
    elements.curatedDescription,
    ...elements.heroWords,
    ...elements.statCards,
    ...elements.cards,
    ...elements.quoteLines,
    ...elements.curatedCards,
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

export function useWishlistAnimations(rootRef: RefObject<HTMLElement | null>) {
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

      const { duration, stagger, ease } = WISHLIST_ENTRANCE;
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
          at += 0.15;
        }

        if (elements.statCards.length) {
          gsap.set(elements.statCards, { opacity: 0, y: 28 });
          heroTl.to(
            elements.statCards,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease,
            },
            at,
          );
        }

        if (elements.filters) {
          gsap.set(elements.filters, { opacity: 0, y: 18 });
          gsap.to(elements.filters, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease,
            scrollTrigger: {
              trigger: elements.filters,
              start: "top 90%",
              once: true,
            },
          });
        }

        if (elements.cards.length) {
          gsap.set(elements.cards, { opacity: 0, y: 40 });
          gsap.set(elements.cardImages, {
            opacity: 0,
            scale: WISHLIST_ENTRANCE.cardReveal.scale,
            filter: `blur(${WISHLIST_ENTRANCE.cardReveal.blur}px)`,
            y: WISHLIST_ENTRANCE.cardReveal.y,
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

        if (elements.quoteLines.length) {
          setClipConcealed(gsap, elements.quoteLines, clipY);
          gsap.to(elements.quoteLines, {
            ...clipRevealVars({
              y: clipY,
              duration: 1.05,
              ease: "power4.out",
              stagger: 0.14,
            }),
            scrollTrigger: {
              trigger: elements.quoteLines[0],
              start: "top 82%",
              once: true,
            },
          });
        }

        const compareEls = [
          elements.compareEyebrow,
          elements.compareHeading,
          elements.compareDescription,
          elements.compareHint,
        ].filter(Boolean) as HTMLElement[];

        if (compareEls.length) {
          gsap.set(compareEls, { opacity: 0, y: 24 });
          gsap.to(compareEls, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: compareEls[0],
              start: "top 85%",
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

        const curatedHeader = [
          elements.curatedEyebrow,
          elements.curatedHeading,
          elements.curatedDescription,
        ].filter(Boolean) as HTMLElement[];

        if (curatedHeader.length) {
          gsap.set(curatedHeader, { opacity: 0, y: 22 });
          gsap.to(curatedHeader, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: curatedHeader[0],
              start: "top 85%",
              once: true,
            },
          });
        }

        if (elements.curatedCards.length) {
          gsap.set(elements.curatedCards, { opacity: 0, y: 36 });
          gsap.to(elements.curatedCards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease,
            scrollTrigger: {
              trigger: elements.curatedCards[0],
              start: "top 88%",
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
