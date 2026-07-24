export const PRODUCT_JOURNEY_ASSET = "/handbag.webp" as const;

/** Callouts revealed after landing + editorial */
export const PRODUCT_JOURNEY_CALLOUTS = [
  {
    id: "leather",
    label: "Italian Full-Grain Leather",
    /** Relative to bag center — grows outward */
    offsetX: -0.22,
    offsetY: -0.08,
  },
  {
    id: "hardware",
    label: "24K Gold Hardware",
    offsetX: 0.24,
    offsetY: -0.14,
  },
  {
    id: "craft",
    label: "Handcrafted Excellence",
    offsetX: -0.2,
    offsetY: 0.12,
  },
  {
    id: "lifetime",
    label: "Lifetime Craftsmanship",
    offsetX: 0.22,
    offsetY: 0.1,
  },
] as const;

export const PRODUCT_JOURNEY = {
  ease: "power3.out",
  /** Subtle hero idle */
  idle: {
    floatPx: 2,
    rotateYDeg: 2,
    duration: 6,
  },
  /** Lift before bezier travel */
  lift: {
    px: 12,
    duration: 0.35,
  },
  /**
   * Perspective scale while travelling (scroll-scrubbed).
   * start → mid(~0.5) → end landing. Per viewport class.
   */
  scale: {
    desktop: { start: 1, mid: 0.78, end: 0.52 },
    tablet: { start: 0.9, mid: 0.68, end: 0.46 },
    /** Slimmer on phones so the pedestal reads elegant, not oversized */
    largePhone: { start: 0.78, mid: 0.58, end: 0.4 },
    smallPhone: { start: 0.72, mid: 0.52, end: 0.36 },
  },
  /** Controlled commercial rotation — never 360 */
  rotation: {
    maxDeg: 22,
    keyframes: [
      { t: 0, y: 0 },
      { t: 0.22, y: 10 },
      { t: 0.5, y: 20 },
      { t: 0.78, y: 8 },
      { t: 1, y: 0 },
    ],
  },
  /** Cubic bezier control points in viewport-normalized space (0–1).
   *  P0 = hero rest, P3 = signature rest.
   *  Path: lift · arc forward · settle onto marble from above. */
  path: {
    c1: { x: 0.06, y: -0.14 },
    c2: { x: 0.08, y: -0.02 },
  },
  landing: {
    /** Soft scale settle only — no Y bounce (avoids down-then-up glitch) */
    settleDownPx: 0,
    compress: 0.988,
    settleDuration: 0.28,
    contentDelay: 0.15,
    contentProgress: 0.9,
  },
  particles: {
    maxOpacity: 0.09,
  },
  scroll: {
    /** Scrub from hero leaving → bag landed on signature */
    start: "top top",
    end: "center center",
    scrub: true,
    /** Hide fixed canvas once signature section scrolls out of view */
    hideAfterSignature: "bottom top",
  },
  interaction: {
    damping: 0.08,
    maxPitchDeg: 12,
  },
} as const;

export const SIGNATURE_CALLOUT_FEATURES = [
  "Italian Full-Grain Leather",
  "24K Gold Hardware",
  "Handcrafted Excellence",
  "Lifetime Craftsmanship",
] as const;
