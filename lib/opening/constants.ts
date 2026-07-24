export const OPENING_COPY = "Where Timeless Elegance Begins." as const;

export const OPENING_LINE_ONE = "Where Timeless Elegance";
export const OPENING_LINE_TWO = "Begins.";

export const OPENING_LINES_EDITORIAL = [
  ["Where", "Timeless", "Elegance"],
  ["Begins."],
] as const;

export const OPENING_LINES_COMPACT = [
  ["Where", "Timeless"],
  ["Elegance"],
  ["Begins."],
] as const;

export const OPENING_COMPACT_BREAKPOINT = 540;

export const OPENING_STORAGE_KEY = "danovix-opening-seen";

export const OPENING_COLORS = {
  matteBlack: "#111111",
  ivory: "#F8F7F4",
  ivoryMuted: "#A9A195",
  champagneSoft: "#E2D8C9",
  champagne: "#C6A15B",
  /** Sampled from hero interior background (bg.webp) */
  heroTaupe: "#907860",
  heroTaupeDeep: "#6B5C4A",
  heroTaupeLight: "#A8947A",
  heroShadow: "#44392D",
} as const;

export const OPENING_EASE = {
  luxury: "power3.out",
  soft: "power2.out",
  reveal: "power1.inOut",
  dissolve: "power2.inOut",
} as const;

/**
 * Intro ink wave — tuned for ~3.0–3.3s total (reveal + hold).
 * 31 characters · ~29ms organic overlap · 3-stage color pass.
 */
export const OPENING_TIMING = {
  ambientGlow: 0.32,
  ambientGlowDuration: 1.15,
  dustFadeIn: 0.42,
  dustFadeDuration: 1.05,
  inkRevealStart: 0.38,
  inkCharChampagneDuration: 0.035,
  inkCharIvoryDuration: 0.053,
  inkCharStagger: 0.059,
  holdAfterReveal: 1.0,
} as const;

export const OPENING_INK_CHAR_DURATION =
  OPENING_TIMING.inkCharChampagneDuration + OPENING_TIMING.inkCharIvoryDuration;

export const OPENING_INK_OVERLAP_MS = Math.round(
  (OPENING_INK_CHAR_DURATION - OPENING_TIMING.inkCharStagger) * 1000,
);

export function getInkWaveEnd(charCount: number): number {
  return (
    OPENING_TIMING.inkRevealStart +
    Math.max(charCount - 1, 0) * OPENING_TIMING.inkCharStagger +
    OPENING_INK_CHAR_DURATION
  );
}

export function getIntroTotalDuration(charCount: number): number {
  return getInkWaveEnd(charCount) + OPENING_TIMING.holdAfterReveal;
}

/** Cinematic cross-dissolve — background, hero, then UI layers emerge */
export const REVEAL_TIMING = {
  dissolveDuration: 1.22,
  backdropFade: 1.18,
  backgroundFade: 1.15,
  ambientFade: 1.05,
  ambientDelay: 0.06,
  toneDelay: 0.14,
  heroOverlayDelay: 0.22,
  textDissolve: 1.12,
  textDissolveStagger: 0.006,
  overlayFadeDelay: 0.08,
  heroAnimationDelay: 0.32,
} as const;

export const REDUCED_MOTION_TIMING = {
  introHold: 0.35,
  revealDuration: 0.65,
  heroAnimationDelay: 0.12,
} as const;

export const OPENING_PARTICLE_COUNT = 14;
export const OPENING_DUST_OPACITY = 0.025;
