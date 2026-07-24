export const HERO_PRODUCT_ASSET = "/handbag.webp" as const;

/**
 * Luxury keynote cubic-bezier — near-linear mid rise, soft settle.
 * No bounce / elastic / spring.
 */
export const HERO_PRODUCT_EASE = {
  emerge: "cubic-bezier(0.33, 0.0, 0.18, 1)",
  settle: "cubic-bezier(0.22, 0.0, 0.2, 1)",
  idle: "sine.inOut",
  spotlight: "power1.out",
  mist: "power1.inOut",
  atmosphere: "power2.out",
} as const;

export const HERO_PRODUCT_TIMING = {
  /** Atmosphere settles before any bag motion */
  revealDelay: 0.12,
  atmosphereDuration: 0.55,
  /** Brief beat, then museum lift */
  emergeStartDelay: 0.35,
  /** Full-object vertical rise — 2.6s luxury lift */
  emergeDuration: 2.6,
  /** Soft deceleration into rest */
  settleDuration: 0.4,
  settlePx: 2,
  /** Imperceptible idle breathing */
  idleFloatPx: 2,
  idleFloatDuration: 6,
  idleRotateDeg: 2,
  idleRotateDuration: 6,
  inactivityResumeMs: 3000,
  /** Lighting precedes the bag */
  spotlightFade: 0.85,
  shadowFade: 1.1,
  glowFade: 0.9,
  particleFadeIn: 0.7,
  mistFadeIn: 0.85,
  mistMaxOpacity: 0.075,
  particleMaxOpacity: 0.09,
  mistFadeOut: 0.9,
  particleFadeOut: 0.75,
} as const;

/**
 * Museum-platform entrance — rises from inside the marble podium opening.
 * Transform only — no clip / mask / hole.
 */
export const HERO_PRODUCT_EMERGE = {
  /**
   * Extra bury below the marble lip (fraction of bag half-height).
   * Keeps the full bag hidden inside the podium at t = 0.
   */
  hiddenBelowLipFactor: 0.1,
  /** Subtle yaw correction while rising (degrees) */
  startRotateYDeg: -2.5,
  /** Soft tip that flattens at rest (degrees) */
  startRotateXDeg: 2,
  /** World-space depth: starts slightly back, eases forward toward camera */
  startDepth: -0.05,
  endDepth: 0,
  /** Pedestal lip as fraction of hero stage height (opening rim) */
  platformTopY: 0.58,
  pedestalSurfaceY: 0.72,
  clipStart: "inset(58% 18% 0% 18% round 42%)",
  clipEnd: "inset(0% 0% 0% 0% round 0px)",
  cavityLipY: 0.58,
  cavityCenterY: 0.72,
  cavityInsetX: 0.18,
  /** @deprecated Legacy DOM reveal — unused; R3F journey is canonical */
  startYPercent: 100,
  /** @deprecated Legacy DOM reveal — unused */
  throughYPercent: 58,
} as const;

/** Handbag intrinsic aspect (width / height) */
export const HERO_PRODUCT_ASPECT = 1402 / 1122;
