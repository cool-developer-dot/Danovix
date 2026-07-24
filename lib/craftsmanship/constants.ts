export type CraftsmanshipFrame = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
};

export const CRAFTSMANSHIP_LABEL = "Craftsmanship" as const;

export const CRAFTSMANSHIP_HEADLINE = [
  "Crafted",
  "Without",
  "Compromise.",
] as const;

export const CRAFTSMANSHIP_DESCRIPTION =
  "Every Danovix handbag is handcrafted from carefully selected materials and refined through meticulous craftsmanship, creating timeless pieces designed to accompany every journey." as const;

export const CRAFTSMANSHIP_CTA = "Discover Our Materials" as const;
export const CRAFTSMANSHIP_CTA_HREF = "#materials" as const;

export const CRAFTSMANSHIP_FRAMES: readonly CraftsmanshipFrame[] = [
  {
    id: "leather",
    src: "/craftsmanship/craft-leather.webp",
    alt: "Close-up of premium full-grain leather texture",
    width: 800,
    height: 1200,
    label: "Leather",
  },
  {
    id: "stitching",
    src: "/craftsmanship/craft-stitching.webp",
    alt: "Precise hand saddle-stitching along leather edge",
    width: 800,
    height: 1200,
    label: "Hand Stitching",
  },
  {
    id: "hardware",
    src: "/craftsmanship/craft-hardware.webp",
    alt: "Polished champagne-gold hardware clasp detail",
    width: 800,
    height: 1200,
    label: "Gold Hardware",
  },
  {
    id: "interior",
    src: "/craftsmanship/craft-interior.webp",
    alt: "Soft microfiber suede interior lining",
    width: 800,
    height: 1200,
    label: "Interior",
  },
  {
    id: "handle",
    src: "/craftsmanship/craft-handle.webp",
    alt: "Rolled leather handle with gold rivet construction",
    width: 800,
    height: 1200,
    label: "Handle Detail",
  },
] as const;

export type CraftsmanshipPillar = {
  id: string;
  icon: "pen-tool" | "gem" | "infinity";
  heading: string;
  description: string;
};

export const CRAFTSMANSHIP_PILLARS: readonly CraftsmanshipPillar[] = [
  {
    id: "precision",
    icon: "pen-tool",
    heading: "Handcrafted Precision",
    description:
      "Every stitch is placed with purpose to ensure exceptional durability.",
  },
  {
    id: "materials",
    icon: "gem",
    heading: "Premium Materials",
    description:
      "Only carefully selected leather and premium hardware become part of a Danovix piece.",
  },
  {
    id: "timeless",
    icon: "infinity",
    heading: "Timeless Design",
    description:
      "Designed beyond seasonal trends to remain elegant for years.",
  },
] as const;

/** Section entrance — cinematic curtain + clip reveals. */
export const CRAFTSMANSHIP_ENTRANCE = {
  duration: 0.95,
  stagger: 0.13,
  ease: "power4.out",
  y: 28,
  clipY: "110%",
  pillarX: 36,
  galleryRotateY: 14,
} as const;

/** Scroll-driven image crossfade + cinematic zoom. */
export const CRAFTSMANSHIP_SCROLL = {
  scrub: 1.4,
  crossfadeDuration: 1,
  zoomScale: 1.04,
  zoomDuration: 9,
  zoomEase: "none",
  pillarRevealAt: 0.82,
} as const;

/** Dust particle positions for ambient layer. */
export const CRAFTSMANSHIP_DUST = [
  { left: "14%", top: "18%", size: 1.5, duration: 22, delay: 0 },
  { left: "26%", top: "34%", size: 1, duration: 26, delay: 3 },
  { left: "72%", top: "22%", size: 1.5, duration: 24, delay: 1.5 },
  { left: "82%", top: "42%", size: 1, duration: 28, delay: 5 },
  { left: "38%", top: "68%", size: 1, duration: 25, delay: 2 },
  { left: "58%", top: "78%", size: 1.5, duration: 23, delay: 4 },
] as const;
