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
import { SHOPPING_ENTRANCE } from "@/lib/shopping/quiz-gift";

export function useShoppingAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const heroStage = root.querySelector<HTMLElement>(
      '[data-shopping="hero-stage"]',
    );
    const layers = [
      root.querySelector<HTMLElement>('[data-shopping="hero-bg"]'),
      root.querySelector<HTMLElement>('[data-shopping="hero-noise"]'),
      root.querySelector<HTMLElement>('[data-shopping="hero-spotlight"]'),
      root.querySelector<HTMLElement>('[data-shopping="hero-grain"]'),
    ];
    const heroEyebrow = root.querySelector<HTMLElement>(
      '[data-shopping="hero-eyebrow"]',
    );
    const heroWords = Array.from(
      root.querySelectorAll<HTMLElement>('[data-shopping="hero-word"]'),
    );
    const heroDescription = root.querySelector<HTMLElement>(
      '[data-shopping="hero-description"]',
    );
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-shopping="card"]'),
    );

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    if (heroStage) concealWithCurtain(heroStage);
    for (const el of [...layers, heroEyebrow, heroDescription]) {
      if (el) el.style.opacity = "0";
    }
    for (const word of heroWords) {
      word.style.opacity = "1";
      word.style.transform = "translate3d(0, 110%, 0)";
    }

    const run = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (heroStage) {
          heroStage.style.clipPath = "none";
          heroStage.style.removeProperty("-webkit-clip-path");
        }
        for (const el of [
          ...layers,
          heroEyebrow,
          heroDescription,
          ...heroWords,
          ...cards,
        ]) {
          if (!el) continue;
          el.style.opacity = "1";
          el.style.transform = "none";
        }
        return;
      }

      const { duration, stagger, ease } = SHOPPING_ENTRANCE;

      ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { force3D: true } });
        const spotlight = layers[2];

        if (heroStage) {
          addCurtainReveal(gsap, heroTl, {
            stage: heroStage,
            spotlight,
            duration: 1.15,
          });
        }

        for (const [i, el] of [layers[0], layers[1], layers[3]].entries()) {
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
          at += 0.1 * heroWords.length + 0.14;
        }
        if (heroDescription) {
          gsap.set(heroDescription, { opacity: 0, y: 20 });
          heroTl.to(
            heroDescription,
            { opacity: 1, y: 0, duration: 0.8, ease },
            at,
          );
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
      }, root);
    };

    void run();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [rootRef]);
}
