export type ReservedItem = {
  id: string;
  name: string;
  material: string;
  collection: string;
  price: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
  chips: readonly string[];
};

export type CompleteCollectionItem = {
  id: string;
  name: string;
  category: string;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type TimelineStep = {
  id: string;
  label: string;
  description: string;
  status: "complete" | "current" | "upcoming";
};

export type ComplimentaryService = {
  id: string;
  label: string;
  description: string;
  icon: "gift" | "rotate" | "shield" | "headset";
};

export type TrustChip = {
  id: string;
  label: string;
  icon: "lock" | "shield" | "truck" | "rotate" | "package";
};

export const RESERVED_HERO = {
  eyebrow: "Reserved Collection",
  headline: ["Your Reserved", "Collection."] as const,
  description:
    "Each piece has been carefully reserved for you.\nComplete your journey whenever you're ready.",
  counterSuffix: "Reserved Pieces",
} as const;

export const RESERVED_EMPTY = {
  heading: "Your Journey Begins Here.",
  description:
    "Discover timeless handbags crafted for modern women.",
  cta: "Explore Collection",
  ctaHref: "/#collection",
} as const;

export const RESERVED_TIMELINE: readonly TimelineStep[] = [
  {
    id: "reserved",
    label: "Reserved Today",
    description: "Your selection is held exclusively for you.",
    status: "complete",
  },
  {
    id: "preparing",
    label: "Preparing Order",
    description: "Artisans begin assembling your pieces.",
    status: "current",
  },
  {
    id: "inspection",
    label: "Quality Inspection",
    description: "Every detail examined by hand.",
    status: "upcoming",
  },
  {
    id: "packaging",
    label: "Premium Packaging",
    description: "Presented in complimentary luxury wrapping.",
    status: "upcoming",
  },
  {
    id: "ship",
    label: "Ready to Ship",
    description: "Prepared for discreet delivery.",
    status: "upcoming",
  },
  {
    id: "delivered",
    label: "Delivered",
    description: "Arriving at your door with quiet ceremony.",
    status: "upcoming",
  },
] as const;

export const RESERVED_SUMMARY = {
  eyebrow: "Order Atelier",
  heading: "Your Reservation",
  subtotal: "Subtotal",
  shipping: "Shipping",
  shippingValue: "Complimentary",
  tax: "Estimated Tax",
  delivery: "Estimated Delivery",
  deliveryValue: "3–5 Business Days",
  total: "Total",
  trustNote: "Held exclusively · Secure reservation",
} as const;

export const COMPLIMENTARY_SERVICES: readonly ComplimentaryService[] = [
  {
    id: "packaging",
    label: "Complimentary Luxury Packaging",
    description: "Presented as a gift, every time.",
    icon: "gift",
  },
  {
    id: "returns",
    label: "30-Day Returns",
    description: "Quietly reconsidered, should you wish.",
    icon: "rotate",
  },
  {
    id: "payments",
    label: "Secure Payments",
    description: "Encrypted, protected, never shared.",
    icon: "shield",
  },
  {
    id: "care",
    label: "Priority Customer Care",
    description: "A private line for reserved clients.",
    icon: "headset",
  },
] as const;

export const RESERVED_CONCIERGE = {
  heading: "Need Styling Advice?",
  description: "Our AI Concierge can help you",
  capabilities: [
    "Complete your collection",
    "Recommend matching shoes",
    "Suggest wallets",
    "Recommend watches",
    "Compare handbags",
    "Find perfect gifts",
  ] as const,
  cta: "Ask AI Concierge",
} as const;

export const COMPLETE_COLLECTION = {
  eyebrow: "Continue the Narrative",
  heading: "Complete Your Collection",
  description:
    "Pieces chosen to complement what you've reserved — shoes, wallets, watches, and quiet accessories.",
  cta: "Discover Piece",
} as const;

export const TRUST_CHIPS: readonly TrustChip[] = [
  { id: "secure", label: "Secure Checkout", icon: "lock" },
  { id: "encrypted", label: "Encrypted Payments", icon: "shield" },
  { id: "shipping", label: "Complimentary Shipping", icon: "truck" },
  { id: "returns", label: "30-Day Returns", icon: "rotate" },
  { id: "packaging", label: "Luxury Packaging", icon: "package" },
] as const;

export const CHECKOUT = {
  label: "Secure Checkout",
  preparing: "Preparing Your Secure Checkout...",
} as const;

export const PRODUCT_ACTIONS = {
  privateCollection: "Move to Private Collection",
  viewDetails: "View Details",
  remove: "Remove Piece",
} as const;

/** Seeded reserved pieces — editorial demo for the flagship experience. */
export const RESERVED_ITEMS: readonly ReservedItem[] = [
  {
    id: "noir-signature-tote",
    name: "Noir Signature Tote",
    material: "Black Italian Leather",
    collection: "Handcrafted Collection",
    price: 420,
    quantity: 1,
    imageSrc: "/featured/luna-tote/hero.jpg",
    imageAlt: "Noir Signature Tote in black Italian leather",
    chips: [
      "Italian Leather",
      "Gold Hardware",
      "Complimentary Packaging",
      "Lifetime Craftsmanship",
    ],
  },
  {
    id: "celeste-evening-clutch",
    name: "Céleste Evening Clutch",
    material: "Champagne Soft Calfskin",
    collection: "Atelier Evening",
    price: 380,
    quantity: 1,
    imageSrc: "/featured/celeste-clutch/hero.jpg",
    imageAlt: "Céleste Evening Clutch in champagne calfskin",
    chips: [
      "Soft Calfskin",
      "Champagne Hardware",
      "Evening Silhouette",
      "Hand-Finished",
    ],
  },
  {
    id: "aurora-mini",
    name: "Aurora Mini",
    material: "Warm Taupe Suede",
    collection: "Signature Mini",
    price: 310,
    quantity: 1,
    imageSrc: "/featured/aurora-mini/hero.jpg",
    imageAlt: "Aurora Mini in warm taupe suede",
    chips: [
      "Italian Suede",
      "Compact Form",
      "Magnetic Closure",
      "Daily Elegance",
    ],
  },
] as const;

export const COMPLETE_COLLECTION_ITEMS: readonly CompleteCollectionItem[] = [
  {
    id: "atelier-heel",
    name: "Atelier Heel",
    category: "Shoes",
    priceLabel: "$295",
    imageSrc: "/community/03-taupe-ribbons.jpg",
    imageAlt: "Atelier heel in warm taupe",
    href: "/#collection",
  },
  {
    id: "folio-wallet",
    name: "Folio Wallet",
    category: "Wallets",
    priceLabel: "$165",
    imageSrc: "/community/04-taupe-lock.jpg",
    imageAlt: "Folio wallet with gold lock detail",
    href: "/#collection",
  },
  {
    id: "horizon-watch",
    name: "Horizon Watch",
    category: "Watch",
    priceLabel: "$480",
    imageSrc: "/community/08-atelier-mahogany.jpg",
    imageAlt: "Horizon watch on mahogany staging",
    href: "/#collection",
  },
  {
    id: "silk-scarf",
    name: "Silk Scarf",
    category: "Accessories",
    priceLabel: "$120",
    imageSrc: "/community/09-pearl-bucket.jpg",
    imageAlt: "Silk scarf draped with pearl bucket bag",
    href: "/#collection",
  },
] as const;

export const RESERVED_ENTRANCE = {
  duration: 0.9,
  stagger: 0.18,
  ease: "power3.out",
  cardReveal: {
    opacity: 0,
    scale: 1.06,
    blur: 10,
    y: 44,
  },
} as const;

export const TAX_RATE = 0.08;

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getSubtotal(items: readonly ReservedItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getEstimatedTax(items: readonly ReservedItem[]): number {
  return Math.round(getSubtotal(items) * TAX_RATE);
}

export function getTotal(items: readonly ReservedItem[]): number {
  return getSubtotal(items) + getEstimatedTax(items);
}

export function getPieceCount(items: readonly ReservedItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
