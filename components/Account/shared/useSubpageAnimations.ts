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
import { ACCOUNT_ENTRANCE } from "@/lib/account/constants";
import { loadGsapWithScrollTrigger } from "@/lib/gsap/load";

export function useSubpageAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const heroStage = root.querySelector<HTMLElement>(
      '[data-account="hero-stage"]',
    );
    const heroBg = root.querySelector<HTMLElement>('[data-account="hero-bg"]');
    const heroNoise = root.querySelector<HTMLElement>(
      '[data-account="hero-noise"]',
    );
    const heroSpotlight = root.querySelector<HTMLElement>(
      '[data-account="hero-spotlight"]',
    );
    const heroGrain = root.querySelector<HTMLElement>(
      '[data-account="hero-grain"]',
    );
    const heroEyebrow = root.querySelector<HTMLElement>(
      '[data-account="hero-eyebrow"]',
    );
    const heroWords = Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="hero-word"]'),
    );
    const heroDescription = root.querySelector<HTMLElement>(
      '[data-account="hero-description"]',
    );
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(
        "[data-account='order-card'], [data-account='address-card'], [data-account='payment-card'], [data-account='form-card'], [data-account='security-card'], [data-account='detail-card'], [data-account='product-card']",
      ),
    );
    const filters = root.querySelector<HTMLElement>(
      '[data-account="filters"]',
    );
    const timelineSteps = Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="timeline-step"]'),
    );

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    if (heroStage) concealWithCurtain(heroStage);
    for (const el of [
      heroBg,
      heroNoise,
      heroSpotlight,
      heroGrain,
      heroEyebrow,
      heroDescription,
      filters,
    ]) {
      if (el) el.style.opacity = "0";
    }
    for (const word of heroWords) {
      word.style.opacity = "1";
      word.style.transform = "translate3d(0, 110%, 0)";
    }

    const revealStatic = () => {
      if (heroStage) {
        heroStage.style.clipPath = "none";
        heroStage.style.removeProperty("-webkit-clip-path");
      }
      const all = [
        heroBg,
        heroNoise,
        heroSpotlight,
        heroGrain,
        heroEyebrow,
        heroDescription,
        filters,
        ...heroWords,
        ...cards,
        ...timelineSteps,
      ];
      for (const el of all) {
        if (!el) continue;
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    };

    const run = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic();
        return;
      }

      const { duration, stagger, ease } = ACCOUNT_ENTRANCE;

      ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { force3D: true } });

        if (heroStage) {
          addCurtainReveal(gsap, heroTl, {
            stage: heroStage,
            spotlight: heroSpotlight,
            duration: 1.15,
          });
        }

        for (const [i, el] of [heroBg, heroNoise, heroGrain].entries()) {
          if (!el) continue;
          heroTl.to(
            el,
            { opacity: 1, duration: 1.1, ease: "power4.out" },
            0.1 + i * 0.08,
          );
        }

        let at = 0.4;
        if (heroEyebrow) {
          setLabelConcealed(gsap, heroEyebrow, 22);
          heroTl.to(heroEyebrow, labelRevealVars(duration, ease), at);
          at += 0.14;
        }
        if (heroWords.length) {
          setClipConcealed(gsap, heroWords, "110%");
          heroTl.to(
            heroWords,
            clipRevealVars({
              y: "110%",
              duration: 0.95,
              ease,
              stagger: 0.1,
            }),
            at,
          );
          at += 0.1 * heroWords.length + 0.16;
        }
        if (heroDescription) {
          gsap.set(heroDescription, { opacity: 0, y: 20 });
          heroTl.to(
            heroDescription,
            { opacity: 1, y: 0, duration: 0.8, ease },
            at,
          );
        }

        if (filters) {
          gsap.set(filters, { opacity: 0, y: 18 });
          gsap.to(filters, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease,
            scrollTrigger: {
              trigger: filters,
              start: "top 92%",
              once: true,
            },
          });
        }

        if (cards.length) {
          gsap.set(cards, { opacity: 0, y: 28 });
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger,
            ease,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 88%",
              once: true,
            },
          });
        }

        if (timelineSteps.length) {
          gsap.set(timelineSteps, { opacity: 0, y: 18 });
          gsap.to(timelineSteps, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease,
            scrollTrigger: {
              trigger: timelineSteps[0],
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
