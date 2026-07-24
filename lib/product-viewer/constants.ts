/** Default luxury turntable presentation — degrees through one cycle. */
export const IMAGE_SEQUENCE_AUTO_ANGLES = [
  0, 10, 20, 30, 40, 50, 45, 35, 25, 15, 0,
] as const;

/** Full cycle duration for the automatic presentation (ms). */
export const IMAGE_SEQUENCE_CYCLE_MS = 13_500;

/** Delay after the viewer enters the viewport before auto-play (ms). */
export const IMAGE_SEQUENCE_START_DELAY_MS = 400;

/** Crossfade duration between adjacent rendered frames (ms). */
export const IMAGE_SEQUENCE_BLEND_MS = 50;

/** Desktop scrub sensitivity — lower = smoother, fewer skipped frames. */
export const IMAGE_SEQUENCE_SCRUB_SENSITIVITY = 0.55;

/** Mobile swipe sensitivity. */
export const IMAGE_SEQUENCE_SWIPE_SENSITIVITY = 0.45;

/** Idle time after touch ends before auto presentation resumes (ms). */
export const IMAGE_SEQUENCE_TOUCH_RESUME_MS = 900;

/** Duration to ease back into auto presentation after interaction (ms). */
export const IMAGE_SEQUENCE_RETURN_MS = 1_100;
