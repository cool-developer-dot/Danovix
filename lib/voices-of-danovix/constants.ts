export type VoiceTestimonial = {
  id: string;
  quote: string;
  title: string;
  experience: string;
  name: string;
  city: string;
  portrait: {
    src: string;
    alt: string;
  };
};

export const VOICES_LABEL = "Voices of Danovix" as const;

export const VOICES_HEADLINE = [
  "Chosen By Women",
  "Who Appreciate",
  "Timeless Elegance.",
] as const;

export const VOICES_DESCRIPTION =
  "Every story reflects the confidence, craftsmanship, and timeless elegance that define Danovix." as const;

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?w=720&h=900&fit=crop&crop=faces&q=80`;

export const VOICES_TESTIMONIALS: readonly VoiceTestimonial[] = [
  {
    id: "sarah-mitchell",
    quote:
      "The craftsmanship is extraordinary. Every detail feels intentional, and carrying it gives me a quiet confidence that stays with me from morning to evening.",
    title: "Confidence, Refined",
    experience:
      "A piece she now reaches for every morning, without a second thought.",
    name: "Sarah Mitchell",
    city: "New York, USA",
    portrait: {
      src: UNSPLASH("photo-1494790108377-be9c29b29330"),
      alt: "Portrait of Sarah Mitchell",
    },
  },
  {
    id: "elena-rossi",
    quote:
      "From the very first touch I knew this was different. The leather feels alive — soft, structured, and impossibly refined in a way photographs never quite capture.",
    title: "Luxury That Lasts",
    experience:
      "Two years of daily use, and it has only grown more beautiful.",
    name: "Elena Rossi",
    city: "Milan, Italy",
    portrait: {
      src: UNSPLASH("photo-1534528741775-53994a69daeb"),
      alt: "Portrait of Elena Rossi",
    },
  },
  {
    id: "amara-williams",
    quote:
      "It is the kind of piece that elevates everything around it. Understated, beautifully made, and unmistakably luxurious without ever asking for attention.",
    title: "Quiet Elegance",
    experience: "Her most complimented accessory, season after season.",
    name: "Amara Williams",
    city: "London, UK",
    portrait: {
      src: UNSPLASH("photo-1438761681033-6461ffad8d80"),
      alt: "Portrait of Amara Williams",
    },
  },
  {
    id: "sofia-hernandez",
    quote:
      "I have owned many designer bags, but none feel as considered as this. The weight, the stitching, the way it opens — everything is deliberate and honest.",
    title: "The Art of Detail",
    experience: "A collector's eye, finally satisfied by true craftsmanship.",
    name: "Sofía Hernández",
    city: "Madrid, Spain",
    portrait: {
      src: UNSPLASH("photo-1544005313-94ddf0286df2"),
      alt: "Portrait of Sofía Hernández",
    },
  },
  {
    id: "yuki-tanaka",
    quote:
      "It moves with me through long days and late evenings, always looking composed. This is design that genuinely respects the woman who carries it.",
    title: "Made For Movement",
    experience: "From morning meetings to evening plans, effortlessly.",
    name: "Yuki Tanaka",
    city: "Tokyo, Japan",
    portrait: {
      src: UNSPLASH("photo-1517841905240-472988babdf9"),
      alt: "Portrait of Yuki Tanaka",
    },
  },
  {
    id: "chloe-dubois",
    quote:
      "There is a calm luxury to it. Nothing shouts, and yet everything is exquisite. It feels less like an accessory and more like a personal signature.",
    title: "A Signature Piece",
    experience: "The finishing note to every look she chooses to wear.",
    name: "Chloé Dubois",
    city: "Paris, France",
    portrait: {
      src: UNSPLASH("photo-1531123897727-8f129e1688ce"),
      alt: "Portrait of Chloé Dubois",
    },
  },
] as const;

export type TrustItem = {
  id: string;
  icon: "shield-check" | "gem" | "truck" | "rotate-ccw";
  label: string;
};

export const VOICES_TRUST_ITEMS: readonly TrustItem[] = [
  { id: "secure", icon: "shield-check", label: "Secure Checkout" },
  { id: "craftsmanship", icon: "gem", label: "Premium Craftsmanship" },
  { id: "shipping", icon: "truck", label: "Fast Shipping" },
  { id: "returns", icon: "rotate-ccw", label: "Easy Returns" },
] as const;

/** Section entrance — cinematic curtain + 3D book reveal. */
export const VOICES_ENTRANCE = {
  duration: 0.9,
  stagger: 0.13,
  ease: "power4.out",
  y: 24,
  clipY: "110%",
  bookRotateY: 22,
  trustScale: 0.72,
} as const;

/** Panel transition — cinematic, no bounce. */
export const VOICES_TRANSITION = {
  slideDuration: 0.85,
  slideEase: "power4.out",
  fadeDuration: 0.7,
  fadeEase: "power3.out",
  imageDuration: 0.9,
  textStagger: 0.08,
  inactiveOpacity: 0.26,
  inactiveScale: 0.955,
} as const;

/** Ambient dust particles — almost invisible. */
export const VOICES_DUST = [
  { left: "18%", top: "24%", size: 1, duration: 26, delay: 0 },
  { left: "42%", top: "16%", size: 1.5, duration: 24, delay: 2 },
  { left: "68%", top: "28%", size: 1, duration: 28, delay: 4 },
  { left: "84%", top: "52%", size: 1, duration: 25, delay: 1 },
  { left: "32%", top: "72%", size: 1.5, duration: 27, delay: 3 },
  { left: "56%", top: "82%", size: 1, duration: 23, delay: 5 },
] as const;
