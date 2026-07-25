"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  addCurtainReveal,
  concealWithCurtain,
  labelRevealVars,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";
import { loadGsapWithScrollTrigger } from "@/lib/gsap/load";
import { PRODUCT_ENTRANCE } from "@/lib/product/constants";

export function useProductAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    const hero = root.querySelector<HTMLElement>('[data-product="hero"]');
    const thumbs = root.querySelector<HTMLElement>('[data-product="thumbs"]');
    const stage = root.querySelector<HTMLElement>('[data-product="stage"]');
    const info = root.querySelector<HTMLElement>('[data-product="info"]');

    if (hero) concealWithCurtain(hero);
    for (const el of [thumbs, stage, info]) {
      if (el) el.style.opacity = "0";
    }

    const run = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (hero) {
          hero.style.clipPath = "none";
          hero.style.removeProperty("-webkit-clip-path");
        }
        for (const el of [thumbs, stage, info]) {
          if (el) {
            el.style.opacity = "1";
            el.style.transform = "none";
          }
        }
        return;
      }

      const { duration, stagger, ease } = PRODUCT_ENTRANCE;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { force3D: true } });

        if (hero) {
          addCurtainReveal(gsap, tl, {
            stage: hero,
            duration: 1.15,
          });
        }

        let at = 0.35;
        if (thumbs) {
          setLabelConcealed(gsap, thumbs, 24);
          tl.to(thumbs, labelRevealVars(duration, ease), at);
          at += 0.12;
        }
        if (stage) {
          gsap.set(stage, { opacity: 0, y: 28, scale: 0.985 });
          tl.to(
            stage,
            { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power4.out" },
            at,
          );
          at += 0.1;
        }
        if (info) {
          gsap.set(info, { opacity: 0, y: 24 });
          tl.to(info, { opacity: 1, y: 0, duration: 0.9, ease }, at);
        }

        const sections = root.querySelectorAll<HTMLElement>(
          "[data-product='media'], [data-product='viewer'], [data-product='story'], [data-product='craft'], [data-product='materials'], [data-product='lifestyle'], [data-product='film'], [data-product='dimensions'], [data-product='colour'], [data-product='look'], [data-product='stories'], [data-product='stylist'], [data-product='trust'], [data-product='recent']",
        );

        sections.forEach((section) => {
          gsap.set(section, { opacity: 0, y: 36 });
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease,
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          });
        });

        const cards = root.querySelectorAll<HTMLElement>(
          "[data-product='media-card'], [data-product='craft-card'], [data-product='feature-card'], [data-product='life-card'], [data-product='colour-card'], [data-product='look-card'], [data-product='story-card'], [data-product='video-card'], [data-product='community-card'], [data-product='featured-story'], [data-product='story-metrics'], [data-product='editorial-quote'], [data-product='recent-card']",
        );

        if (cards.length) {
          gsap.set(cards, { opacity: 0, y: 28 });
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger,
            ease,
            scrollTrigger: {
              trigger: cards[0],
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
