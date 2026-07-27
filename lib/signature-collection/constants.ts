/** Signature marble podium disc — ProductJourney bag lands here. */
export const SIGNATURE_PRODUCT_ASSET = "/signature-marble.webp" as const;

export const SIGNATURE_PRODUCT_WIDTH = 564;
export const SIGNATURE_PRODUCT_HEIGHT = 443;

export const SIGNATURE_LABEL = "Signature Collection" as const;

export const SIGNATURE_HEADING = "The Signature Piece" as const;

export const SIGNATURE_DESCRIPTION = [
  "A single icon. Hand-finished Italian leather.",
  "Quiet authority — made to be lived with, not just worn.",
] as const;

export const SIGNATURE_CTA = "Explore Collection" as const;

export const SIGNATURE_FEATURES = [
  "Italian Full-Grain Leather",
  "24K Gold Hardware",
  "Handcrafted Excellence",
  "Lifetime Craftsmanship",
] as const;

export const SIGNATURE_ANIMATION = {
  ease: "power4.out",
  /** Editorial fade-up (headline → description → CTA → features) */
  editorial: {
    /** Shorter so label focus resolves before the rest of the sequence */
    duration: 0.52,
    delay: 0.1,
    ease: "power3.out",
    y: 24,
    clipY: "110%",
    featureX: 28,
  },
  /**
   * Gallery entrance — keep the cinematic curtain, lock focus sooner.
   * Soft camera settle must resolve early so the product reads crisp.
   */
  cinematic: {
    curtainDuration: 0.72,
    cameraDuration: 0.42,
    startBlur: 0,
    blurDuration: 0.38,
    startScale: 1.07,
    atmosphereDuration: 0.72,
    marbleDuration: 0.7,
  },
  duration: 0.9,
  delay: 0.12,
  y: 24,
  product: {
    y: 20,
    duration: 0.9,
    ease: "power4.out",
  },
} as const;
