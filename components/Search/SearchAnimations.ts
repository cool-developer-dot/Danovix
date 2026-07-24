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
import { SEARCH_ENTRANCE } from "@/lib/search/constants";

type SearchElements = {
  heroStage: HTMLElement | null;
  heroBg: HTMLElement | null;
  heroNoise: HTMLElement | null;
  heroSpotlight: HTMLElement | null;
  heroGrain: HTMLElement | null;
  heroParticles: HTMLElement | null;
  heroEyebrow: HTMLElement | null;
  heroWords: HTMLElement[];
  heroDescription: HTMLElement | null;
  searchBar: HTMLElement | null;
  trending: HTMLElement | null;
  trendChips: HTMLElement[];
  filters: HTMLElement | null;
  aiEditorial: HTMLElement | null;
  editorialCards: HTMLElement[];
  cards: HTMLElement[];
  cardImages: HTMLElement[];
  cardSweeps: HTMLElement[];
  empty: HTMLElement | null;
  concierge: HTMLElement | null;
  continueEyebrow: HTMLElement | null;
  continueHeading: HTMLElement | null;
  continueDescription: HTMLElement | null;
  continueCards: HTMLElement[];
  completeEyebrow: HTMLElement | null;
  completeHeading: HTMLElement | null;
  completeDescription: HTMLElement | null;
  completeCards: HTMLElement[];
};

function collect(root: HTMLElement): SearchElements {
  return {
    heroStage: root.querySelector('[data-search="hero-stage"]'),
    heroBg: root.querySelector('[data-search="hero-bg"]'),
    heroNoise: root.querySelector('[data-search="hero-noise"]'),
    heroSpotlight: root.querySelector('[data-search="hero-spotlight"]'),
    heroGrain: root.querySelector('[data-search="hero-grain"]'),
    heroParticles: root.querySelector('[data-search="hero-particles"]'),
    heroEyebrow: root.querySelector('[data-search="hero-eyebrow"]'),
    heroWords: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="hero-word"]'),
    ),
    heroDescription: root.querySelector('[data-search="hero-description"]'),
    searchBar: root.querySelector('[data-search="search-bar"]'),
    trending: root.querySelector('[data-search="trending"]'),
    trendChips: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="trend-chip"]'),
    ),
    filters: root.querySelector('[data-search="filters"]'),
    aiEditorial: root.querySelector('[data-search="ai-editorial"]'),
    editorialCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="editorial-card"]'),
    ),
    cards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="card"]'),
    ),
    cardImages: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="card-image"]'),
    ),
    cardSweeps: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="card-sweep"]'),
    ),
    empty: root.querySelector('[data-search="empty"]'),
    concierge: root.querySelector('[data-search="concierge"]'),
    continueEyebrow: root.querySelector('[data-search="continue-eyebrow"]'),
    continueHeading: root.querySelector('[data-search="continue-heading"]'),
    continueDescription: root.querySelector(
      '[data-search="continue-description"]',
    ),
    continueCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="continue-card"]'),
    ),
    completeEyebrow: root.querySelector('[data-search="complete-eyebrow"]'),
    completeHeading: root.querySelector('[data-search="complete-heading"]'),
    completeDescription: root.querySelector(
      '[data-search="complete-description"]',
    ),
    completeCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-search="complete-card"]'),
    ),
  };
}

function revealStatic(elements: SearchElements) {
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
    elements.searchBar,
    elements.trending,
    elements.filters,
    elements.aiEditorial,
    elements.empty,
    elements.concierge,
    elements.continueEyebrow,
    elements.continueHeading,
    elements.continueDescription,
    elements.completeEyebrow,
    elements.completeHeading,
    elements.completeDescription,
    ...elements.heroWords,
    ...elements.trendChips,
    ...elements.editorialCards,
    ...elements.cards,
    ...elements.continueCards,
    ...elements.completeCards,
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

export function useSearchAnimations(rootRef: RefObject<HTMLElement | null>) {
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
      elements.searchBar,
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

      const { duration, stagger, ease } = SEARCH_ENTRANCE;
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
          at += 0.15;
        }

        if (elements.searchBar) {
          gsap.set(elements.searchBar, { opacity: 0, y: 22 });
          heroTl.to(
            elements.searchBar,
            { opacity: 1, y: 0, duration: 0.85, ease },
            at,
          );
        }

        if (elements.trendChips.length) {
          gsap.set(elements.trendChips, { opacity: 0, y: 16, scale: 0.96 });
          gsap.to(elements.trendChips, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.05,
            ease,
            scrollTrigger: {
              trigger: elements.trending ?? elements.trendChips[0],
              start: "top 88%",
              once: true,
            },
          });
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

        if (elements.aiEditorial) {
          gsap.set(elements.aiEditorial, { opacity: 0, y: 24 });
          gsap.to(elements.aiEditorial, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: elements.aiEditorial,
              start: "top 88%",
              once: true,
            },
          });
        }

        if (elements.editorialCards.length) {
          gsap.set(elements.editorialCards, { opacity: 0, y: 36 });
          gsap.to(elements.editorialCards, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.14,
            ease,
            scrollTrigger: {
              trigger: elements.editorialCards[0],
              start: "top 86%",
              once: true,
            },
          });
        }

        if (elements.cards.length) {
          gsap.set(elements.cards, { opacity: 0, y: 40 });
          gsap.set(elements.cardImages, {
            opacity: 0,
            scale: SEARCH_ENTRANCE.cardReveal.scale,
            filter: `blur(${SEARCH_ENTRANCE.cardReveal.blur}px)`,
            y: SEARCH_ENTRANCE.cardReveal.y,
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

        const continueHeader = [
          elements.continueEyebrow,
          elements.continueHeading,
          elements.continueDescription,
        ].filter(Boolean) as HTMLElement[];

        if (continueHeader.length) {
          gsap.set(continueHeader, { opacity: 0, y: 22 });
          gsap.to(continueHeader, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: continueHeader[0],
              start: "top 85%",
              once: true,
            },
          });
        }

        if (elements.continueCards.length) {
          gsap.set(elements.continueCards, { opacity: 0, y: 30 });
          gsap.to(elements.continueCards, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease,
            scrollTrigger: {
              trigger: elements.continueCards[0],
              start: "top 88%",
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
      }, root);
    };

    void run();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [rootRef]);
}
