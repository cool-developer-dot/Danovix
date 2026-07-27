import { COMPARE_PIECES, type ComparePiece } from "./pieces";

export const COMPARE_PAGE = {
  eyebrow: "Private Comparison Studio",
  heading: "Choose Your Signature Piece.",
  description:
    "Every design tells a different story. Compare craftsmanship, functionality, and timeless elegance to discover the piece that belongs in your collection.",
  craftHeading: "Craftsmanship, Side by Side",
  craftDescription:
    "Materials, hardware, and finishing — presented as they would be on a marble consultation table.",
  capacityHeading: "What It Carries",
  capacityDescription:
    "Capacity, expressed visually — never reduced to a number alone.",
  lifestyleHeading: "Perfect For",
  lifestyleDescription:
    "How each silhouette moves through your life.",
  aiHeading: "AI Stylist Note",
  ctaHeading: "Still Deciding?",
  ctaDescription:
    "Invite your AI Luxury Concierge to compare these handbags with quiet precision.",
  cta: "Ask the Concierge",
  selectHint: "Select two to four pieces",
  preview: "3D Preview",
  available: "Available",
  reserved: "Made to Order",
} as const;

export const COMPARE_DEFAULT_IDS = [
  "luna-tote",
  "taupe-lock",
  "celeste-clutch",
] as const;

export const CRAFT_ROWS = [
  { id: "leather", label: "Leather Type", key: "leather" },
  { id: "material", label: "Material", key: "material" },
  { id: "hardware", label: "Hardware Finish", key: "hardware" },
  { id: "stitching", label: "Stitching", key: "stitching" },
  { id: "lining", label: "Interior Lining", key: "lining" },
  { id: "straps", label: "Strap Options", key: "straps" },
  { id: "weight", label: "Weight", key: "weight" },
  { id: "capacity", label: "Capacity", key: "capacityLabel" },
] as const satisfies readonly {
  id: string;
  label: string;
  key: keyof ComparePiece;
}[];

export const DISCOVERIES_PAGE = {
  eyebrow: "Memorable Discoveries",
  heading: "Continue Your Journey.",
  description:
    "Every remarkable piece you've explored is waiting whenever inspiration returns.",
  insightHeading: "A Quiet Observation",
  insight:
    "You've recently explored structured leather handbags. Would you like to discover similar silhouettes?",
  insightCta: "Explore Similar Pieces",
  continueHeading: "Continue Exploring",
  continueDescription:
    "Pieces chosen from the path you've already taken — never generic, always considered.",
  actions: {
    view: "View Again",
    compare: "Compare",
    reserve: "Reserve Your Piece",
    wishlist: "Add to Private Collection",
  },
} as const;

export type DiscoveryGroupId = "today" | "yesterday" | "week" | "month";

export type DiscoveryItem = ComparePiece & {
  group: DiscoveryGroupId;
  editorial: string;
};

export const DISCOVERY_GROUPS: readonly {
  id: DiscoveryGroupId;
  label: string;
}[] = [
  { id: "today", label: "Today" },
  { id: "yesterday", label: "Yesterday" },
  { id: "week", label: "Earlier This Week" },
  { id: "month", label: "Last Month" },
] as const;

export const DISCOVERY_ITEMS: readonly DiscoveryItem[] = [
  {
    ...COMPARE_PIECES[0],
    group: "today",
    editorial: "Revisited for its architectural ease",
  },
  {
    ...COMPARE_PIECES[3],
    group: "today",
    editorial: "Considered for a quieter boardroom presence",
  },
  {
    ...COMPARE_PIECES[1],
    group: "yesterday",
    editorial: "Lingered with for evening light",
  },
  {
    ...COMPARE_PIECES[2],
    group: "yesterday",
    editorial: "Noted for day-to-night versatility",
  },
  {
    ...COMPARE_PIECES[4],
    group: "week",
    editorial: "Imagined for a distant city weekend",
  },
  {
    ...COMPARE_PIECES[5],
    group: "week",
    editorial: "Admired for deep grain and quiet authority",
  },
  {
    ...COMPARE_PIECES.find((p) => p.id === "olive-crossbody")!,
    id: "forest-echo",
    name: "The Forest Carry",
    collection: "Voyage",
    subtitle: "Soft structure for green hours",
    priceLabel: "$365",
    imageSrc: "/community/07-forest-unboxing.webp",
    lifestyleSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Forest green soft carry bag",
    group: "month",
    editorial: "Returned to for its voyage spirit",
  },
] as const;

export const STYLIST_PAGE = {
  eyebrow: "Private Stylist",
  heading: "Curated For Your Style.",
  description:
    "Thoughtfully selected recommendations inspired by your preferences, occasions, and personal taste.",
  understandsHeading: "Understood Without Asking",
  understands:
    "Your wishlist, purchases, colours, collections, and seasons — considered quietly, never explained as code.",
  looksHeading: "Complete Looks",
  looksDescription:
    "Never a single product alone — complete compositions for how you live.",
  lifestyleHeading: "Lifestyle Collections",
  lifestyleDescription:
    "Editorial edits composed around the moments that matter.",
} as const;

export type StylistLookItem = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  href: string;
};

export type StylistLook = {
  id: string;
  title: string;
  note: string;
  items: readonly StylistLookItem[];
};

export const STYLIST_LOOKS: readonly StylistLook[] = [
  {
    id: "noir-edit",
    title: "The Noir Edit",
    note: "Selected because its structured silhouette complements your preference for timeless professional styles while adding greater versatility for travel.",
    items: [
      {
        id: "tote",
        name: "Noir Signature Tote",
        role: "Handbag",
        imageSrc: "/featured/luna-tote/hero.webp",
        href: "/product/luna-tote",
      },
      {
        id: "wallet",
        name: "Leather Wallet",
        role: "Wallet",
        imageSrc: "/community/03-taupe-ribbons.webp",
        href: "/collection",
      },
      {
        id: "watch",
        name: "Luxury Watch",
        role: "Timepiece",
        imageSrc: "/community/04-taupe-lock.webp",
        href: "/collection",
      },
      {
        id: "scarf",
        name: "Silk Scarf",
        role: "Scarf",
        imageSrc: "/community/01-pink-coussin.webp",
        href: "/collection",
      },
      {
        id: "organizer",
        name: "Travel Organizer",
        role: "Organizer",
        imageSrc: "/community/06-olive-unboxing.webp",
        href: "/collection",
      },
    ],
  },
  {
    id: "voyage-edit",
    title: "The Voyage Composition",
    note: "Composed for the traveller who moves from cabin to city — light on the shoulder, complete in detail.",
    items: [
      {
        id: "crossbody",
        name: "Olive Crossbody",
        role: "Handbag",
        imageSrc: "/community/06-olive-unboxing.webp",
        href: "/collection",
      },
      {
        id: "passport",
        name: "Passport Sleeve",
        role: "Travel",
        imageSrc: "/community/07-forest-unboxing.webp",
        href: "/collection",
      },
      {
        id: "mini",
        name: "Aurora Mini",
        role: "Evening",
        imageSrc: "/featured/aurora-mini/hero.webp",
        href: "/product/aurora-mini",
      },
      {
        id: "wrap",
        name: "Cashmere Wrap",
        role: "Layer",
        imageSrc: "/community/09-pearl-bucket.webp",
        href: "/collection",
      },
    ],
  },
] as const;

export type LifestyleCollection = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  href: string;
};

export const LIFESTYLE_COLLECTIONS: readonly LifestyleCollection[] = [
  {
    id: "business",
    title: "Business Collection",
    subtitle: "Structured ease for the working day",
    imageSrc: "/community/04-taupe-lock.webp",
    href: "/collection",
  },
  {
    id: "weekend",
    title: "Weekend Escape",
    subtitle: "Soft silhouettes for unhurried hours",
    imageSrc: "/community/09-pearl-bucket.webp",
    href: "/collection",
  },
  {
    id: "travel",
    title: "Travel Essentials",
    subtitle: "Pieces that move with quiet confidence",
    imageSrc: "/community/06-olive-unboxing.webp",
    href: "/collection",
  },
  {
    id: "airport",
    title: "Airport Edit",
    subtitle: "Cabin-ready form, refined restraint",
    imageSrc: "/community/08-atelier-mahogany.webp",
    href: "/collection",
  },
  {
    id: "minimal",
    title: "Minimal Luxury",
    subtitle: "Less noise, more presence",
    imageSrc: "/featured/luna-tote/hero.webp",
    href: "/collection",
  },
  {
    id: "executive",
    title: "Executive Collection",
    subtitle: "Authority without announcement",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    href: "/collection",
  },
  {
    id: "evening",
    title: "Evening Elegance",
    subtitle: "Light held close after dusk",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    href: "/collection",
  },
  {
    id: "gifts",
    title: "Luxury Gifts",
    subtitle: "Occasions wrapped in intention",
    imageSrc: "/community/02-pink-unboxing.webp",
    href: "/gift-finder",
  },
] as const;
