"use client";

import type { RefObject } from "react";
import { useEffect } from "react";

import { isoIs } from "@/lib/diagnostics/iso";
import {
  collectHeroChapterExitTargets,
  registerHeroChapterExit,
  setHeroChapterExitReady,
} from "@/lib/product-journey/hero-chapter-exit";

/**
 * Registers hero typography/chrome with the master journey ScrollTrigger.
 * No separate scrub timeline — exit progress is applied in the journey
 * controller's single onUpdate (identical timing to the former scrub).
 *
 * Must run only after the entrance timeline has finished so progress 0
 * maps to the visible end-state, not the concealed CSS default.
 */
export function setupHeroChapterExit(scope: HTMLElement): () => void {
  if (isoIs("other-scrub") || isoIs("all-gsap") || isoIs("journey-scrub")) {
    return () => undefined;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) {
    return () => undefined;
  }

  const elements = collectHeroChapterExitTargets(scope);
  if (!elements.length) {
    return () => undefined;
  }

  const unregister = registerHeroChapterExit(elements);
  setHeroChapterExitReady(true);

  return () => {
    setHeroChapterExitReady(false);
    unregister();
  };
}

export function useHeroChapterExit(
  scopeRef: RefObject<HTMLElement | null>,
  ready: boolean,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled || !ready) return;

    const scope = scopeRef.current;
    if (!scope) return;

    const cleanup = setupHeroChapterExit(scope);
    return cleanup;
  }, [scopeRef, ready, enabled]);
}
