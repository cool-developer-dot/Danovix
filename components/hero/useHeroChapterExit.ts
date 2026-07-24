"use client";

import type { RefObject } from "react";
import { useEffect } from "react";

const CONTENT_SELECTORS = [
  '[data-hero-animate="description"]',
  '[data-hero-animate="buttons"]',
  '[data-hero-animate="trust"]',
  '[data-hero-animate="scroll-indicator"]',
  ".hero-feature-item",
].join(", ");

const VISIBLE_FROM = { opacity: 1, y: 0, force3D: true } as const;
const HIDDEN_TO = { opacity: 0, y: -12, ease: "none", force3D: true } as const;

/**
 * Fades hero typography and chrome as the visitor scrolls away.
 * Navbar is excluded so the sticky header stays visible site-wide.
 * Must run only after the entrance timeline has finished so scrub
 * progress 0 maps to the visible end-state, not the concealed CSS default.
 */
export function setupHeroChapterExit(scope: HTMLElement): () => void {
  let ctx: { revert: () => void } | null = null;
  let cancelled = false;

  const run = async () => {
    const { gsap, ScrollTrigger } = await import("@/lib/gsap/load").then(
      (mod) => mod.loadGsapWithScrollTrigger(),
    );
    if (cancelled) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const contentTargets = scope.querySelectorAll<HTMLElement>(CONTENT_SELECTORS);

    if (!contentTargets.length) return;

    const scrollTrigger = {
      trigger: scope,
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    };

    ctx = gsap.context(() => {
      gsap.fromTo(contentTargets, VISIBLE_FROM, {
        ...HIDDEN_TO,
        stagger: 0.012,
        scrollTrigger,
      });
    }, scope);

    ScrollTrigger.refresh();
  };

  void run();

  return () => {
    cancelled = true;
    ctx?.revert();
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
