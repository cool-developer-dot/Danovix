"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

import { prefersReducedMotion } from "@/lib/opening/storage";

import {
  createOpeningTimeline,
  createReducedMotionOpening,
} from "./OpeningTimeline";

type UseOpeningIntroOptions = {
  overlayRef: RefObject<HTMLDivElement | null>;
  active: boolean;
  onComplete: () => void;
};

function collectIntroElements(overlay: HTMLElement) {
  return {
    overlay,
    backdrop: overlay.querySelector(
      '[data-opening="backdrop"]',
    ) as HTMLElement,
    ambientGlow: overlay.querySelector(
      '[data-opening="ambient-glow"]',
    ) as HTMLElement,
    textWrap: overlay.querySelector(
      '[data-opening="text-wrap"]',
    ) as HTMLElement,
    inkChars: Array.from(
      overlay.querySelectorAll('[data-opening="ink-char"]'),
    ) as HTMLElement[],
    particles: Array.from(
      overlay.querySelectorAll('[data-opening="particle"]'),
    ) as HTMLElement[],
  };
}

/** @deprecated Timeline runs inside OpeningOverlay when introActive is true. */
export function useOpeningIntro({
  overlayRef,
  active,
  onComplete,
}: UseOpeningIntroOptions) {
  useEffect(() => {
    if (!active) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    const elements = collectIntroElements(overlay);
    if (
      !elements.backdrop ||
      !elements.ambientGlow ||
      !elements.textWrap ||
      elements.inkChars.length === 0
    ) {
      onComplete();
      return;
    }

    let timeline: { kill: () => void } | null = null;
    let cancelled = false;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      timeline = prefersReducedMotion()
        ? createReducedMotionOpening(gsap, elements, onComplete)
        : createOpeningTimeline(gsap, elements, onComplete);
    };

    run();

    return () => {
      cancelled = true;
      timeline?.kill();
    };
  }, [active, overlayRef, onComplete]);
}
