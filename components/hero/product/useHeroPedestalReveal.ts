"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  HERO_PRODUCT_EASE,
  HERO_PRODUCT_TIMING,
} from "@/lib/hero-product/constants";

type PedestalElements = {
  well: HTMLElement;
  shadow: HTMLElement;
  spotlight: HTMLElement;
  pedestalGlow: HTMLElement;
  mist: HTMLElement;
  particles: HTMLElement[];
};

function collect(stage: HTMLElement): PedestalElements | null {
  const well = stage.querySelector('[data-hero-product="well"]') as HTMLElement;
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

  if (!well || !shadow || !spotlight || !pedestalGlow || !mist) return null;
  return { well, shadow, spotlight, pedestalGlow, mist, particles };
}

/** Pedestal / portal atmosphere — timed to the cinematic bag emerge. */
export function useHeroPedestalReveal(
  stageRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const elements = collect(stage);
    if (!elements) return;

    const { well, shadow, spotlight, pedestalGlow, mist, particles } = elements;

    /* Portal is never a reveal mask — bag rises via transform only */
    well.style.clipPath = "none";
    well.style.setProperty("-webkit-clip-path", "none");
    shadow.style.opacity = "0";
    spotlight.style.opacity = "0";
    pedestalGlow.style.opacity = "0";
    mist.style.opacity = "0";
    for (const p of particles) p.style.opacity = "0";

    if (!enabled) return;

    let cancelled = false;
    let timeline: gsap.core.Timeline | null = null;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(spotlight, { opacity: 0.42 });
        gsap.set(pedestalGlow, { opacity: 0.5 });
        gsap.set(shadow, { opacity: 0.55, scale: 1 });
        return;
      }

      const T = HERO_PRODUCT_TIMING;
      const riseEnd = T.emergeStartDelay + T.emergeDuration;

      timeline = gsap.timeline({ delay: T.revealDelay });

      /* 1–3. Atmosphere before the bag moves */
      timeline
        .to(
          spotlight,
          {
            opacity: 0.42,
            duration: T.spotlightFade,
            ease: HERO_PRODUCT_EASE.atmosphere,
          },
          0,
        )
        .to(
          pedestalGlow,
          {
            opacity: 0.52,
            duration: T.glowFade,
            ease: HERO_PRODUCT_EASE.atmosphere,
          },
          0.05,
        )
        .to(
          shadow,
          {
            opacity: 0.38,
            scale: 1,
            duration: T.shadowFade,
            ease: HERO_PRODUCT_EASE.atmosphere,
          },
          0.08,
        )
        .to(
          particles,
          {
            opacity: T.particleMaxOpacity,
            yPercent: -18,
            duration: T.particleFadeIn,
            stagger: 0.05,
            ease: HERO_PRODUCT_EASE.atmosphere,
            force3D: true,
          },
          0.2,
        )
        .to(
          mist,
          {
            opacity: T.mistMaxOpacity,
            duration: T.mistFadeIn,
            ease: HERO_PRODUCT_EASE.mist,
          },
          0.28,
        );

      /* 8. Atmosphere settles as bag reaches rest */
      timeline
        .to(
          mist,
          {
            opacity: 0,
            duration: T.mistFadeOut,
            ease: HERO_PRODUCT_EASE.mist,
          },
          riseEnd - 0.15,
        )
        .to(
          particles,
          {
            opacity: 0,
            duration: T.particleFadeOut,
            ease: HERO_PRODUCT_EASE.mist,
            force3D: true,
          },
          riseEnd - 0.1,
        )
        .to(
          spotlight,
          {
            opacity: 0.38,
            duration: 0.6,
            ease: HERO_PRODUCT_EASE.spotlight,
          },
          riseEnd,
        )
        .to(
          shadow,
          {
            opacity: 0.55,
            duration: 0.55,
            ease: HERO_PRODUCT_EASE.settle,
          },
          riseEnd,
        );
    };

    void run();

    return () => {
      cancelled = true;
      timeline?.kill();
    };
  }, [stageRef, enabled]);
}
