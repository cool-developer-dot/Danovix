const REPLAY_QUERY_KEY = "replay-opening";

/**
 * In-memory gate for the current document load.
 * Survives App Router client navigations (same JS runtime).
 * Resets automatically on full refresh, new tab, or hard navigation.
 */
let openingHandledThisLoad = false;

function isReplayOpeningRequested(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has(REPLAY_QUERY_KEY);
}

/** Whether the intro has already run (or been skipped) for this document load. */
export function hasSeenOpening(): boolean {
  return openingHandledThisLoad;
}

export function markOpeningSeen(): void {
  openingHandledThisLoad = true;
}

export function clearOpeningSeen(): void {
  openingHandledThisLoad = false;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Play the brand intro once per fresh document load.
 * Never on client-side route transitions (Link / router / back / forward).
 */
export function shouldPlayOpening(): boolean {
  if (typeof window === "undefined") return true;

  if (isReplayOpeningRequested()) {
    openingHandledThisLoad = false;
    return true;
  }

  return !openingHandledThisLoad;
}
