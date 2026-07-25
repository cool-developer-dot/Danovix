/**
 * Coalesce R3F invalidate() to at most once per animation frame.
 * GSAP ScrollTrigger can emit multiple scrub updates in one frame —
 * one WebGL render per frame is visually identical and far cheaper.
 */

let scheduled = false;
let invalidateFn: (() => void) | null = null;
let enabled = true;

export function bindJourneyInvalidate(fn: (() => void) | null) {
  invalidateFn = fn;
  scheduled = false;
}

export function setJourneyRenderEnabled(next: boolean) {
  enabled = next;
  if (!next) scheduled = false;
}

/** Request a canvas paint — deduped to one per frame. */
export function requestJourneyRender() {
  if (!enabled || !invalidateFn || scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    if (!enabled || !invalidateFn) return;
    invalidateFn();
  });
}
