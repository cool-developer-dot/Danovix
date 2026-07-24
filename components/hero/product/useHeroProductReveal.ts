"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";

import {
  applyHeroProductConcealedState,
  createHeroProductIdle,
  createHeroProductReveal,
  createReducedMotionProduct,
  type HeroProductElements,
} from "./HeroProductTimeline";

function collectElements(stage: HTMLElement): HeroProductElements | null {
  const well = stage.querySelector('[data-hero-product="well"]') as HTMLElement;
  const imageWrap = stage.querySelector(
    '[data-hero-product="image-wrap"]',
  ) as HTMLElement;
  const shadow = stage.querySelector(
    '[data-hero-product="shadow"]',
  ) as HTMLElement;
  const spotlight = stage.querySelector(
    '[data-hero-product="spotlight"]',
  ) as HTMLElement;
  const pedestalGlow = stage.querySelector(
    '[data-hero-product="pedestal-glow"]',
  ) as HTMLElement;
  const mist = stage.querySelector('[data-hero-product="mist"]') as HTMLElement;
  const particles = Array.from(
    stage.querySelectorAll('[data-hero-product="particle"]'),
  ) as HTMLElement[];

  if (!well || !imageWrap || !shadow || !spotlight || !pedestalGlow || !mist) {
    return null;
  }

  return {
    stage,
    well,
    imageWrap,
    shadow,
    spotlight,
    pedestalGlow,
    mist,
    particles,
  };
}

export function useHeroProductReveal(
  stageRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const idleRef = useRef<{ kill: () => void } | null>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const elements = collectElements(stage);
    if (!elements) return;

    applyHeroProductConcealedState(elements);

    if (!enabled) return;

    let revealTimeline: { kill: () => void } | null = null;
    let cancelled = false;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled || !stageRef.current) return;

      applyHeroProductConcealedState(elements);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        createReducedMotionProduct(gsap, elements);
        return;
      }

      revealTimeline = createHeroProductReveal(gsap, elements, () => {
        if (cancelled) return;
        idleRef.current = createHeroProductIdle(gsap, elements);
      });
    };

    void run();

    return () => {
      cancelled = true;
      revealTimeline?.kill();
      idleRef.current?.kill();
      idleRef.current = null;
    };
  }, [stageRef, enabled]);
}
