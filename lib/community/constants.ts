export type CommunityReveal =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "rotate";

export type LifestyleItem = {
  id: string;
  kind: "lifestyle";
  src: string;
  alt: string;
  caption: string;
  likes: number;
  comments: number;
  width: number;
  height: number;
  size: "hero" | "tall" | "wide" | "square" | "compact";
  fit: "contain" | "cover";
  reveal: CommunityReveal;
  parallax: number;
};

export type QuoteItem = {
  id: string;
  kind: "quote";
  lines: readonly string[];
  attribution?: string;
  reveal: CommunityReveal;
};

export type StoryItem = {
  id: string;
  kind: "story";
  name: string;
  location: string;
  quote: string;
  initials: string;
  reveal: CommunityReveal;
};

export type EditorialItem = LifestyleItem | QuoteItem | StoryItem;

export const COMMUNITY_LABEL = "Our Community" as const;

export const COMMUNITY_HEADLINE = [
  "Carry Confidence.",
  "Live Beautifully.",
] as const;

export const COMMUNITY_DESCRIPTION =
  "Moments shared by women who move through the world with quiet elegance." as const;

export const COMMUNITY_CTA = {
  handle: "@DANOVIX",
  copy: "Join thousands of women sharing timeless moments.",
  button: "Follow the Journey",
  href: "https://instagram.com/danovix",
} as const;

export const COMMUNITY_ITEMS: readonly EditorialItem[] = [
  {
    id: "soho-walk",
    kind: "lifestyle",
    src: "/community/01-pink-coussin.jpg",
    alt: "Quilted pink handbag with gold chain, styled in a luxury unboxing moment",
    caption: "New Season",
    likes: 4280,
    comments: 186,
    width: 768,
    height: 1024,
    size: "hero",
    fit: "cover",
    reveal: "fade-up",
    parallax: 18,
  },
  {
    id: "cafe-moment",
    kind: "lifestyle",
    src: "/community/02-pink-unboxing.jpg",
    alt: "Pink quilted handbag presented with signature packaging and gold hardware",
    caption: "Just Arrived",
    likes: 3120,
    comments: 142,
    width: 768,
    height: 1024,
    size: "tall",
    fit: "cover",
    reveal: "fade-left",
    parallax: 12,
  },
  {
    id: "quote-luxury",
    kind: "quote",
    lines: ["Luxury isn't loud.", "It's remembered."],
    reveal: "scale",
  },
  {
    id: "gallery-pause",
    kind: "lifestyle",
    src: "/community/03-taupe-ribbons.jpg",
    alt: "Taupe leather handbag in white presentation box with silk ribbons",
    caption: "The Unboxing",
    likes: 5610,
    comments: 224,
    width: 768,
    height: 1024,
    size: "tall",
    fit: "cover",
    reveal: "fade-right",
    parallax: 14,
  },
  {
    id: "story-emily",
    kind: "story",
    name: "Emily",
    location: "New York",
    quote: "Exactly what I was searching for.",
    initials: "E",
    reveal: "fade-up",
  },
  {
    id: "leather-detail",
    kind: "lifestyle",
    src: "/community/04-taupe-lock.jpg",
    alt: "Taupe pebbled leather handbag with gold lock and protective wrap",
    caption: "First Look",
    likes: 4890,
    comments: 198,
    width: 768,
    height: 1024,
    size: "square",
    fit: "cover",
    reveal: "rotate",
    parallax: 8,
  },
  {
    id: "quote-journey",
    kind: "quote",
    lines: ["Every journey deserves", "timeless elegance."],
    reveal: "fade-up",
  },
  {
    id: "airport-lounge",
    kind: "lifestyle",
    src: "/community/05-bordeaux-kelly.jpg",
    alt: "Bordeaux leather handbag nestled in orange packaging with gold hardware",
    caption: "Evening Edit",
    likes: 3740,
    comments: 156,
    width: 768,
    height: 1024,
    size: "wide",
    fit: "cover",
    reveal: "fade-left",
    parallax: 10,
  },
  {
    id: "story-sophia",
    kind: "story",
    name: "Sophia",
    location: "California",
    quote: "The craftsmanship exceeded every expectation.",
    initials: "S",
    reveal: "fade-right",
  },
  {
    id: "brunch-table",
    kind: "lifestyle",
    src: "/community/06-olive-unboxing.jpg",
    alt: "Olive green leather handbag in signature orange and white packaging",
    caption: "Weekend Ease",
    likes: 2980,
    comments: 121,
    width: 1024,
    height: 768,
    size: "wide",
    fit: "cover",
    reveal: "scale",
    parallax: 16,
  },
  {
    id: "quote-confidence",
    kind: "quote",
    lines: ["Carry confidence.", "Leave an impression."],
    reveal: "fade-up",
  },
  {
    id: "hotel-corridor",
    kind: "lifestyle",
    src: "/community/07-forest-unboxing.jpg",
    alt: "Forest green leather handbag revealed in luxury presentation box",
    caption: "Quiet Luxury",
    likes: 4520,
    comments: 173,
    width: 1024,
    height: 768,
    size: "wide",
    fit: "cover",
    reveal: "fade-up",
    parallax: 13,
  },
  {
    id: "story-charlotte",
    kind: "story",
    name: "Charlotte",
    location: "Chicago",
    quote: "Elegant. Timeless. Beautiful.",
    initials: "C",
    reveal: "scale",
  },
  {
    id: "hands-holding",
    kind: "lifestyle",
    src: "/community/08-atelier-mahogany.jpg",
    alt: "Mahogany leather handbag on the artisan workbench with gold turn-lock",
    caption: "In the Atelier",
    likes: 6120,
    comments: 241,
    width: 1024,
    height: 1024,
    size: "compact",
    fit: "cover",
    reveal: "rotate",
    parallax: 9,
  },
  {
    id: "stitch-detail",
    kind: "lifestyle",
    src: "/community/09-pearl-bucket.jpg",
    alt: "Black quilted mini bag with pearls and gold chain on a gallery wall",
    caption: "Evening Glow",
    likes: 5380,
    comments: 209,
    width: 768,
    height: 1024,
    size: "compact",
    fit: "cover",
    reveal: "fade-left",
    parallax: 11,
  },
] as const;

export const COMMUNITY_ENTRANCE = {
  duration: 1.05,
  stagger: 0.14,
  ease: "power4.out",
  y: 36,
  clipY: "110%",
} as const;

export const COMMUNITY_REVEAL = {
  duration: 1.15,
  ease: "power3.out",
  fadeUp: { y: 48, x: 0, scale: 1, rotate: 0 },
  fadeLeft: { y: 20, x: -36, scale: 1, rotate: 0 },
  fadeRight: { y: 20, x: 36, scale: 1, rotate: 0 },
  scale: { y: 24, x: 0, scale: 0.94, rotate: 0 },
  rotate: { y: 28, x: 0, scale: 0.97, rotate: 1.4 },
} as const;

/** Editorial photograph unveil — lifestyle images only */
export const COMMUNITY_IMAGE_REVEAL = {
  duration: 1.2,
  stagger: 0.2,
  ease: "expo.out",
  opacity: 0,
  scale: 1.08,
  blur: 12,
  y: 60,
  rotate: 0.8,
  shadowFrom: "0 0 0 0 rgb(26 26 26 / 0)",
  shadowTo: "0 28px 56px -24px rgb(26 26 26 / 0.2)",
  sweepDuration: 1.05,
} as const;

export const COMMUNITY_CURSOR = {
  maxOffset: 4.5,
  ease: 0.12,
  duration: 0.55,
} as const;

export const COMMUNITY_PARALLAX = {
  scrub: 1.6,
  intensity: 1,
} as const;

export const COMMUNITY_DUST = [
  { left: "12%", top: "18%", size: 1.5, duration: 28, delay: 0 },
  { left: "28%", top: "42%", size: 1, duration: 32, delay: 2.5 },
  { left: "64%", top: "22%", size: 1.5, duration: 26, delay: 1 },
  { left: "78%", top: "58%", size: 1, duration: 30, delay: 4 },
  { left: "44%", top: "72%", size: 1, duration: 27, delay: 3 },
  { left: "88%", top: "36%", size: 1.5, duration: 29, delay: 5.5 },
] as const;
