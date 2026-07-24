/**
 * Multi-frame PNG rotation — Front → 15° L → 35° L → pause → 35° R → 15° R → Front.
 * Full cycle ≈ 11.5s (5 holds + 5 crossfades).
 */
export const SHOWCASE_ANIMATION = {
  frameHold: 1.5,
  crossfade: 0.85,
  /** Index of the apex frame (35° left) — receives an extended pause. */
  pauseFrameIndex: 2,
  pauseExtraHold: 0.55,
  scalePeak: 1.015,
  crossfadeEase: "power2.inOut",
} as const;

/** Desktop cursor tilt on the image container (not frame swapping). */
export const SHOWCASE_CURSOR = {
  maxYaw: 3,
  maxPitch: 2,
  followDuration: 0.6,
  followEase: "power2.out",
  returnDuration: 1,
  returnEase: "power3.out",
} as const;
