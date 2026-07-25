import type { ShowcaseFrame } from "@/lib/product-showcase/types";

export type FeaturedProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  href: string;
  imageAlt: string;
  /** Editorial hero frame — full-bleed lifestyle photography. */
  showcaseFrames: readonly ShowcaseFrame[];
};

function buildEditorialFrame(
  productSlug: string,
  width: number,
  height: number,
): readonly ShowcaseFrame[] {
  return [
    {
      id: "hero",
      src: `/featured/${productSlug}/hero.webp`,
      width,
      height,
    },
  ];
}

export const FEATURED_LABEL = "Featured Collection" as const;

export const FEATURED_HEADING = ["Discover", "Our Signature Collection"] as const;

export const FEATURED_DESCRIPTION =
  "One piece at a time, presented the way it deserves. Every handbag in the Danovix line is a study in restraint — considered proportions, honest materials, and hardware finished by hand." as const;

export const FEATURED_CTA = "Explore Product" as const;

export const FEATURED_PRODUCTS: readonly FeaturedProduct[] = [
  {
    id: "luna-tote",
    name: "The Luna Tote",
    category: "Signature — Everyday Icon",
    description:
      "Sculpted from a single panel of Italian full-grain leather, Luna carries your world with quiet, effortless authority.",
    price: "Starting at $289",
    href: "#collection",
    imageAlt: "The Luna Tote in powder blue leather, presented in signature packaging",
    showcaseFrames: buildEditorialFrame("luna-tote", 1024, 768),
  },
  {
    id: "celeste-clutch",
    name: "The Celeste Clutch",
    category: "Classique — Evening",
    description:
      "Hand-stitched around a whisper-soft silk lining, Celeste is the final, perfect detail of a considered evening.",
    price: "Starting at $349",
    href: "#collection",
    imageAlt: "The Celeste Clutch in quilted black leather with pearl and gold detailing",
    showcaseFrames: buildEditorialFrame("celeste-clutch", 768, 1024),
  },
  {
    id: "aurora-mini",
    name: "The Aurora Mini",
    category: "Édition — Limited",
    description:
      "Compact confidence finished with sculpted gold hardware — a modern heirloom made to be noticed.",
    price: "Starting at $249",
    href: "#collection",
    imageAlt: "The Aurora Mini in cream quilted leather with gold hardware",
    showcaseFrames: buildEditorialFrame("aurora-mini", 1024, 1024),
  },
] as const;

/** Product change crossfade + slide. */
export const FEATURED_TRANSITION = {
  outDuration: 0.42,
  outEase: "power2.in",
  inDuration: 0.7,
  inEase: "power3.out",
  slide: 26,
} as const;

/**
 * Cinematic camera — slow dolly toward the product.
 * Starts farther away, pushes in, then breathes.
 */
export const FEATURED_CAMERA = {
  /** Far plate — camera begins at a distance */
  startScale: 1.0,
  startZ: -180,
  startBlur: 12,
  /** Settled close frame after the approach */
  endScale: 1.14,
  endZ: 0,
  endBlur: 0,
  /** Primary approach */
  approachDuration: 4.8,
  approachEase: "power2.out",
  /** Living idle breathe after approach */
  breatheScale: 1.175,
  breatheDuration: 16,
  breatheEase: "sine.inOut",
  /** Product-change restart */
  swapDuration: 4.0,
  swapEase: "power3.out",
} as const;

/** Section entrance stagger — calm, no bounce, no spring. */
export const FEATURED_ENTRANCE = {
  duration: 0.85,
  stagger: 0.14,
  ease: "power3.out",
  y: 28,
} as const;
