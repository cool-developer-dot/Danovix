"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

import { REDUCED_MOTION_TIMING, REVEAL_TIMING } from "@/lib/opening/constants";
import { prefersReducedMotion } from "@/lib/opening/storage";

import {
  createReducedMotionReveal,
  createRevealTimeline,
} from "./OpeningTimeline";

type OpeningTransitionProps = {
  overlayRef: RefObject<HTMLDivElement | null>;
  homeRef: RefObject<HTMLDivElement | null>;
  onHeroStart: () => void;
  onComplete: () => void;
};

function collectRevealElements(home: HTMLElement, overlay: HTMLElement) {
  return {
    overlay,
    backdrop: overlay.querySelector(
      '[data-opening="backdrop"]',
    ) as HTMLElement | null,
    background: home.querySelector(
      '[data-hero-reveal="background"]',
    ) as HTMLElement | null,
    ambient: home.querySelector(
      '[data-hero-reveal="ambient"]',
    ) as HTMLElement | null,
    tone: home.querySelector('[data-hero-reveal="tone"]') as HTMLElement | null,
    heroOverlay: home.querySelector(
      '[data-hero-reveal="hero-overlay"]',
    ) as HTMLElement | null,
    textWrap: overlay.querySelector(
      '[data-opening="text-wrap"]',
    ) as HTMLElement | null,
    inkChars: Array.from(
      overlay.querySelectorAll('[data-opening="ink-char"]'),
    ) as HTMLElement[],
    particles: Array.from(
      overlay.querySelectorAll('[data-opening="particle"]'),
    ) as HTMLElement[],
  };
}

export function OpeningTransition({
  overlayRef,
  homeRef,
  onHeroStart,
  onComplete,
}: OpeningTransitionProps) {
  useEffect(() => {
    const overlay = overlayRef.current;
    const home = homeRef.current;
    if (!overlay || !home) {
      onHeroStart();
      onComplete();
      return;
    }

    const elements = collectRevealElements(home, overlay);
    const backdrop = elements.backdrop;
    if (!backdrop) {
      onHeroStart();
      onComplete();
      return;
    }

    const revealElements = { ...elements, backdrop };

    const reducedMotion = prefersReducedMotion();
    const heroDelayMs = reducedMotion
      ? REDUCED_MOTION_TIMING.heroAnimationDelay * 1000
      : REVEAL_TIMING.heroAnimationDelay * 1000;

    let timeline: { kill: () => void } | null = null;
    let heroTimer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      heroTimer = setTimeout(() => {
        if (!cancelled) onHeroStart();
      }, heroDelayMs);

      timeline = reducedMotion
        ? createReducedMotionReveal(gsap, revealElements, () => {
            if (!cancelled) onComplete();
          })
        : createRevealTimeline(gsap, revealElements, () => {
            if (!cancelled) onComplete();
          });
    };

    run();

    return () => {
      cancelled = true;
      if (heroTimer) clearTimeout(heroTimer);
      timeline?.kill();
    };
  }, [overlayRef, homeRef, onHeroStart, onComplete]);

  return null;
}
