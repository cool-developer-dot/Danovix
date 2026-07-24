"use client";

import { useCallback, useRef, type RefObject } from "react";

import { AUTH_FLIP } from "./auth.constants";

type FlipOptions = {
  cardRef: RefObject<HTMLElement | null>;
  flipperRef: RefObject<HTMLElement | null>;
  reflectionRef: RefObject<HTMLElement | null>;
  onMidpoint: () => void;
  onComplete?: () => void;
};

/**
 * Luxury Y-axis card flip — lift → rotate → content swap → settle.
 * Falls back to a soft crossfade when reduced motion is preferred.
 */
export function useAuthCardFlip() {
  const busyRef = useRef(false);

  const flip = useCallback(async (options: FlipOptions) => {
    if (busyRef.current) return;
    const { cardRef, flipperRef, reflectionRef, onMidpoint, onComplete } =
      options;

    const card = cardRef.current;
    const flipper = flipperRef.current;
    if (!card || !flipper) {
      onMidpoint();
      onComplete?.();
      return;
    }

    busyRef.current = true;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      onMidpoint();
      busyRef.current = false;
      onComplete?.();
      return;
    }

    const { default: gsap } = await import("gsap");
    const reflection = reflectionRef.current;
    const half = AUTH_FLIP.duration / 2;
    const restShadow =
      "0 40px 100px -40px rgb(0 0 0 / 0.85), inset 0 1px 0 rgb(255 255 255 / 0.08)";
    const deepShadow =
      "0 56px 120px -36px rgb(0 0 0 / 0.92), 0 0 48px -20px rgb(198 161 91 / 0.22), inset 0 1px 0 rgb(255 255 255 / 0.1)";

    await new Promise<void>((resolve) => {
      const tl = gsap.timeline({
        defaults: { force3D: true },
        onComplete: () => {
          gsap.set(flipper, { clearProps: "transform" });
          gsap.set(card, { clearProps: "transform,boxShadow" });
          if (reflection) gsap.set(reflection, { clearProps: "all" });
          busyRef.current = false;
          onComplete?.();
          resolve();
        },
      });

      tl.to(
        card,
        {
          y: AUTH_FLIP.liftY,
          scale: AUTH_FLIP.liftScale,
          boxShadow: deepShadow,
          duration: half * 0.85,
          ease: AUTH_FLIP.easeIn,
        },
        0,
      );

      if (reflection) {
        tl.fromTo(
          reflection,
          { opacity: 0, xPercent: -120 },
          {
            opacity: 1,
            xPercent: 120,
            duration: AUTH_FLIP.duration * 0.9,
            ease: "power1.inOut",
          },
          0.05,
        );
      }

      tl.to(
        flipper,
        {
          rotateY: 90,
          duration: half,
          ease: AUTH_FLIP.easeIn,
        },
        0,
      );

      tl.add(() => {
        onMidpoint();
        gsap.set(flipper, { rotateY: -90 });
      });

      tl.to(flipper, {
        rotateY: 0,
        duration: half,
        ease: AUTH_FLIP.easeOut,
      });

      tl.to(
        card,
        {
          y: 0,
          scale: 1,
          boxShadow: restShadow,
          duration: half * 0.9,
          ease: AUTH_FLIP.easeOut,
        },
        half,
      );
    });
  }, []);

  return { flip, isBusy: () => busyRef.current };
}
