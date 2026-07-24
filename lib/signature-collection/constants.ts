/** Temporary static product — swappable for R3F GLB */
export const SIGNATURE_PRODUCT_ASSET = "/imag-removebg-preview.png" as const;

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
    duration: 0.85,
    delay: 0.12,
    ease: "power4.out",
    y: 24,
    clipY: "110%",
    featureX: 28,
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
