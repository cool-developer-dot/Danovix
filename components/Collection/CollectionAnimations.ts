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
import { COLLECTION_ENTRANCE } from "@/lib/collection/constants";
import { loadGsapWithScrollTrigger } from "@/lib/gsap/load";

type CollectionElements = {
  heroStage: HTMLElement | null;
  heroBg: HTMLElement | null;
  heroMarble: HTMLElement | null;
  heroNoise: HTMLElement | null;
  heroSpotlight: HTMLElement | null;
  heroGrain: HTMLElement | null;
  heroEyebrow: HTMLElement | null;
  heroWords: HTMLElement[];
  heroDescription: HTMLElement | null;
  heroStats: HTMLElement[];
  categories: HTMLElement | null;
  categoryChips: HTMLElement[];
  search: HTMLElement | null;
  filters: HTMLElement | null;
  cards: HTMLElement[];
  cardImages: HTMLElement[];
  cardSweeps: HTMLElement[];
  banners: HTMLElement[];
  quotes: HTMLElement[];
  empty: HTMLElement | null;
  storyEyebrow: HTMLElement | null;
  storyHeading: HTMLElement | null;
  storyBody: HTMLElement | null;
  storyMedia: HTMLElement | null;
  featuredEyebrow: HTMLElement | null;
  featuredHeading: HTMLElement | null;
  featuredCards: HTMLElement[];
  concierge: HTMLElement | null;
  continueEyebrow: HTMLElement | null;
  continueHeading: HTMLElement | null;
  continueDescription: HTMLElement | null;
  continueCards: HTMLElement[];
};

function collect(root: HTMLElement): CollectionElements {
  return {
    heroStage: root.querySelector('[data-collection="hero-stage"]'),
    heroBg: root.querySelector('[data-collection="hero-bg"]'),
    heroMarble: root.querySelector('[data-collection="hero-marble"]'),
    heroNoise: root.querySelector('[data-collection="hero-noise"]'),
    heroSpotlight: root.querySelector('[data-collection="hero-spotlight"]'),
    heroGrain: root.querySelector('[data-collection="hero-grain"]'),
    heroEyebrow: root.querySelector('[data-collection="hero-eyebrow"]'),
    heroWords: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="hero-word"]'),
    ),
    heroDescription: root.querySelector('[data-collection="hero-description"]'),
    heroStats: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="stat-chip"]'),
    ),
    categories: root.querySelector('[data-collection="categories"]'),
    categoryChips: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="category-chip"]'),
    ),
    search: root.querySelector('[data-collection="search"]'),
    filters: root.querySelector('[data-collection="filters"]'),
    cards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="card"]'),
    ),
    cardImages: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="card-image"]'),
    ),
    cardSweeps: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="card-sweep"]'),
    ),
    banners: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="banner"]'),
    ),
    quotes: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="quote"]'),
    ),
    empty: root.querySelector('[data-collection="empty"]'),
    storyEyebrow: root.querySelector('[data-collection="story-eyebrow"]'),
    storyHeading: root.querySelector('[data-collection="story-heading"]'),
    storyBody: root.querySelector('[data-collection="story-body"]'),
    storyMedia: root.querySelector('[data-collection="story-media"]'),
    featuredEyebrow: root.querySelector('[data-collection="featured-eyebrow"]'),
    featuredHeading: root.querySelector('[data-collection="featured-heading"]'),
    featuredCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="featured-card"]'),
    ),
    concierge: root.querySelector('[data-collection="concierge"]'),
    continueEyebrow: root.querySelector('[data-collection="continue-eyebrow"]'),
    continueHeading: root.querySelector('[data-collection="continue-heading"]'),
    continueDescription: root.querySelector(
      '[data-collection="continue-description"]',
    ),
    continueCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-collection="continue-card"]'),
    ),
  };
}

function revealStatic(elements: CollectionElements) {
  if (elements.heroStage) {
    elements.heroStage.style.clipPath = "none";
    elements.heroStage.style.removeProperty("-webkit-clip-path");
  }

  const all = [
    elements.heroBg,
    elements.heroMarble,
    elements.heroNoise,
    elements.heroSpotlight,
    elements.heroGrain,
    elements.heroEyebrow,
    elements.heroDescription,
    elements.categories,
    elements.search,
    elements.filters,
    elements.empty,
    elements.storyEyebrow,
    elements.storyHeading,
    elements.storyBody,
    elements.storyMedia,
    elements.featuredEyebrow,
    elements.featuredHeading,
    elements.concierge,
    elements.continueEyebrow,
    elements.continueHeading,
    elements.continueDescription,
    ...elements.heroWords,
    ...elements.heroStats,
    ...elements.categoryChips,
    ...elements.cards,
    ...elements.banners,
    ...elements.quotes,
    ...elements.featuredCards,
    ...elements.continueCards,
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

export function useCollectionAnimations(
  rootRef: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = collect(root);
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    if (elements.heroStage) concealWithCurtain(elements.heroStage);

    for (const el of [
      elements.heroBg,
      elements.heroMarble,
      elements.heroNoise,
      elements.heroSpotlight,
      elements.heroGrain,
      elements.heroEyebrow,
      elements.heroDescription,
      elements.categories,
      elements.search,
    ]) {
      if (el) el.style.opacity = "0";
    }

    for (const word of elements.heroWords) {
      word.style.opacity = "1";
      word.style.transform = "translate3d(0, 110%, 0)";
    }

    for (const chip of elements.heroStats) {
      chip.style.opacity = "0";
    }

    const run = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease } = COLLECTION_ENTRANCE;
      const y = 28;
      const clipY = "110%";

      ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { force3D: true } });

        if (elements.heroStage) {
          addCurtainReveal(gsap, heroTl, {
            stage: elements.heroStage,
            spotlight: elements.heroSpotlight,
            duration: 1.2,
          });
        }

        for (const [i, el] of [
          elements.heroBg,
          elements.heroMarble,
          elements.heroNoise,
          elements.heroGrain,
        ].entries()) {
          if (!el) continue;
          heroTl.to(
            el,
            { opacity: 1, duration: 1.15, ease: "power4.out" },
            0.1 + i * 0.07,
          );
        }

        let at = 0.4;

        if (elements.heroEyebrow) {
          setLabelConcealed(gsap, elements.heroEyebrow, y);
          heroTl.to(elements.heroEyebrow, labelRevealVars(duration, ease), at);
          at += 0.16;
        }

        if (elements.heroWords.length) {
          setClipConcealed(gsap, elements.heroWords, clipY);
          heroTl.to(
            elements.heroWords,
            clipRevealVars({
              y: clipY,
              duration: 1.0,
              ease,
              stagger: 0.1,
            }),
            at,
          );
          at += 0.1 * elements.heroWords.length + 0.18;
        }

        if (elements.heroDescription) {
          gsap.set(elements.heroDescription, { opacity: 0, y: 20 });
          heroTl.to(
            elements.heroDescription,
            { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
            at,
          );
          at += 0.12;
        }

        if (elements.heroStats.length) {
          gsap.set(elements.heroStats, { opacity: 0, y: 14 });
          heroTl.to(
            elements.heroStats,
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.06,
              ease,
            },
            at,
          );
          at += 0.15;
        }

        if (elements.categoryChips.length) {
          gsap.set(elements.categoryChips, { opacity: 0, y: 14, scale: 0.97 });
          heroTl.to(
            elements.categoryChips,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.045,
              ease,
            },
            at,
          );
          at += 0.12;
        }

        if (elements.search) {
          gsap.set(elements.search, { opacity: 0, y: 18 });
          heroTl.to(
            elements.search,
            { opacity: 1, y: 0, duration: 0.8, ease },
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
              start: "top 92%",
              once: true,
            },
          });
        }

        if (elements.cards.length) {
          gsap.set(elements.cards, { opacity: 0, y: 36 });
          gsap.set(elements.cardImages, {
            opacity: 0,
            scale: 1.06,
            y: 36,
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
            y: 0,
            duration: 1.05,
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
                    duration: 1.0,
                    delay: 0.3 + index * stagger,
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

        if (elements.banners.length) {
          gsap.set(elements.banners, { opacity: 0, y: 28 });
          gsap.to(elements.banners, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.14,
            ease,
            scrollTrigger: {
              trigger: elements.banners[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.quotes.length) {
          gsap.set(elements.quotes, { opacity: 0, y: 20 });
          gsap.to(elements.quotes, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: elements.quotes[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.empty) {
          gsap.set(elements.empty, { opacity: 0, y: 24 });
          gsap.to(elements.empty, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease,
            scrollTrigger: {
              trigger: elements.empty,
              start: "top 88%",
              once: true,
            },
          });
        }

        const storyEls = [
          elements.storyEyebrow,
          elements.storyHeading,
          elements.storyBody,
          elements.storyMedia,
        ].filter(Boolean) as HTMLElement[];

        if (storyEls.length) {
          gsap.set(storyEls, { opacity: 0, y: 28 });
          gsap.to(storyEls, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: storyEls[0],
              start: "top 85%",
              once: true,
            },
          });
        }

        const featuredHeader = [
          elements.featuredEyebrow,
          elements.featuredHeading,
        ].filter(Boolean) as HTMLElement[];

        if (featuredHeader.length) {
          gsap.set(featuredHeader, { opacity: 0, y: 20 });
          gsap.to(featuredHeader, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: featuredHeader[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.featuredCards.length) {
          gsap.set(elements.featuredCards, { opacity: 0, y: 32 });
          gsap.to(elements.featuredCards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: elements.featuredCards[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.concierge) {
          gsap.set(elements.concierge, { opacity: 0, y: 28 });
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

        const continueHeader = [
          elements.continueEyebrow,
          elements.continueHeading,
          elements.continueDescription,
        ].filter(Boolean) as HTMLElement[];

        if (continueHeader.length) {
          gsap.set(continueHeader, { opacity: 0, y: 20 });
          gsap.to(continueHeader, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: continueHeader[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.continueCards.length) {
          gsap.set(elements.continueCards, { opacity: 0, y: 28 });
          gsap.to(elements.continueCards, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: elements.continueCards[0],
              start: "top 90%",
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
