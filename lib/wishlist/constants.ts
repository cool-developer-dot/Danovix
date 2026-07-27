export type WishlistFilterId =
  | "all"
  | "handbags"
  | "crossbody"
  | "shoulder"
  | "tote"
  | "mini"
  | "travel"
  | "new"
  | "favorites";

export type WishlistSortId =
  | "recently-saved"
  | "most-loved"
  | "newest"
  | "price";

export type WishlistCardSize = "hero" | "feature" | "support";

export type WishlistItem = {
  id: string;
  name: string;
  collection: string;
  color: string;
  price: number;
  priceLabel: string;
  category: WishlistFilterId;
  imageSrc: string;
  imageAlt: string;
  size: WishlistCardSize;
  addedAt: string;
  loved: boolean;
  isNew: boolean;
  materials: string;
  dimensions: string;
  weight: string;
  capacity: string;
  hardware: string;
  leather: string;
  colors: readonly string[];
  occasions: readonly string[];
};

export type CuratedItem = {
  id: string;
  name: string;
  collection: string;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export const WISHLIST_HERO = {
  eyebrow: "Private Collection",
  headline: ["Your Private", "Collection."] as const,
  description:
    "The pieces you've chosen to revisit, admire, and make part of your journey.",
  counterSuffix: "Curated Pieces",
} as const;

export const WISHLIST_INTRO = {
  heading: "Curated for You",
  description:
    "A private selection of pieces set aside with intention — refined, considered, and ready to revisit.",
} as const;

export const WISHLIST_STATS = {
  saved: "Saved Pieces",
  newest: "Newest Addition",
  collections: "Collections",
  value: "Estimated Collection Value",
} as const;

export const WISHLIST_FILTERS: readonly {
  id: WishlistFilterId;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "handbags", label: "Handbags" },
  { id: "crossbody", label: "Crossbody" },
  { id: "shoulder", label: "Shoulder" },
  { id: "tote", label: "Tote" },
  { id: "mini", label: "Mini" },
  { id: "travel", label: "Travel" },
  { id: "new", label: "New Arrivals" },
  { id: "favorites", label: "Favorites" },
] as const;

export const WISHLIST_SORTS: readonly {
  id: WishlistSortId;
  label: string;
}[] = [
  { id: "recently-saved", label: "Recently Saved" },
  { id: "most-loved", label: "Most Loved" },
  { id: "newest", label: "Newest" },
  { id: "price", label: "Price" },
] as const;

export const WISHLIST_QUOTE = {
  lines: ["Luxury isn't collected.", "It's curated."] as const,
} as const;

export const WISHLIST_COMPARE = {
  eyebrow: "Signature Experience",
  heading: "Compare My Favorites",
  description:
    "Select two to four pieces from your collection. Discover how materials, proportions, and craftsmanship speak to one another.",
  floatingCta: "Compare Selection",
  drawerTitle: "Side by Side",
  aiEyebrow: "AI Recommendation",
  aiCta: "View Recommendation",
  emptyHint: "Choose at least two pieces to begin a private comparison.",
} as const;

export const WISHLIST_CONCIERGE = {
  heading: "Need Help Choosing?",
  description: "Our AI Concierge can help you",
  capabilities: [
    "Compare saved pieces",
    "Recommend colors",
    "Match your wardrobe",
    "Explain craftsmanship",
    "Suggest the perfect handbag",
    "Track your order",
  ] as const,
  cta: "Start AI Conversation",
} as const;

export const WISHLIST_CURATED = {
  eyebrow: "Continue Your Collection",
  heading: "Curated For You",
  description:
    "Pieces chosen to complement what you've already set aside — considered silhouettes, honest materials, quiet confidence.",
  cta: "Discover Piece",
} as const;

export const WISHLIST_EMPTY = {
  heading: "Your Private Collection Awaits.",
  description:
    "Save timeless pieces that inspire you, and return whenever the moment feels right.",
  cta: "Explore Collection",
  ctaHref: "/collection",
} as const;

/** Seeded private collection — editorial demo for the flagship experience. */
export const WISHLIST_ITEMS: readonly WishlistItem[] = [
  {
    id: "luna-tote",
    name: "The Luna Tote",
    collection: "Signature",
    color: "Powder Blue",
    price: 289,
    priceLabel: "$289",
    category: "tote",
    imageSrc: "/featured/luna-tote/hero.webp",
    imageAlt: "The Luna Tote in powder blue leather",
    size: "hero",
    addedAt: "2026-07-18T10:00:00.000Z",
    loved: true,
    isNew: false,
    materials: "Italian full-grain calfskin",
    dimensions: "38 × 28 × 14 cm",
    weight: "780 g",
    capacity: "Laptop + daily essentials",
    hardware: "Brushed champagne gold",
    leather: "Full-grain calfskin",
    colors: ["Powder Blue", "Noir", "Ivory"],
    occasions: ["Everyday", "Travel", "Work"],
  },
  {
    id: "celeste-clutch",
    name: "The Celeste Clutch",
    collection: "Classique",
    color: "Noir Quilted",
    price: 349,
    priceLabel: "$349",
    category: "handbags",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "The Celeste Clutch in quilted black leather",
    size: "feature",
    addedAt: "2026-07-20T14:30:00.000Z",
    loved: true,
    isNew: true,
    materials: "Quilted calfskin, silk lining",
    dimensions: "24 × 14 × 6 cm",
    weight: "320 g",
    capacity: "Evening essentials",
    hardware: "Pearl & champagne gold",
    leather: "Quilted calfskin",
    colors: ["Noir", "Champagne", "Bordeaux"],
    occasions: ["Evening", "Gala", "Dinner"],
  },
  {
    id: "aurora-mini",
    name: "The Aurora Mini",
    collection: "Édition",
    color: "Cream Quilted",
    price: 249,
    priceLabel: "$249",
    category: "mini",
    imageSrc: "/featured/aurora-mini/hero.webp",
    imageAlt: "The Aurora Mini in cream quilted leather",
    size: "feature",
    addedAt: "2026-07-21T09:15:00.000Z",
    loved: true,
    isNew: true,
    materials: "Quilted Italian leather",
    dimensions: "18 × 12 × 7 cm",
    weight: "260 g",
    capacity: "Phone, keys, card case",
    hardware: "Sculpted gold",
    leather: "Quilted calfskin",
    colors: ["Cream", "Noir", "Blush"],
    occasions: ["Day to night", "City", "Weekend"],
  },
  {
    id: "coussin-rose",
    name: "The Coussin Rose",
    collection: "Atelier",
    color: "Soft Rose",
    price: 420,
    priceLabel: "$420",
    category: "shoulder",
    imageSrc: "/community/01-pink-coussin.webp",
    imageAlt: "Soft rose coussin handbag with gold hardware",
    size: "hero",
    addedAt: "2026-07-15T16:00:00.000Z",
    loved: false,
    isNew: false,
    materials: "Pebbled calfskin",
    dimensions: "26 × 20 × 12 cm",
    weight: "540 g",
    capacity: "Day bag essentials",
    hardware: "Polished gold",
    leather: "Pebbled calfskin",
    colors: ["Soft Rose", "Ivory", "Sand"],
    occasions: ["Brunch", "Weekend", "Travel"],
  },
  {
    id: "taupe-lock",
    name: "The Taupe Lock",
    collection: "Heritage",
    color: "Warm Taupe",
    price: 510,
    priceLabel: "$510",
    category: "handbags",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe handbag with signature lock detail",
    size: "support",
    addedAt: "2026-07-12T11:20:00.000Z",
    loved: true,
    isNew: false,
    materials: "Smooth calfskin",
    dimensions: "28 × 22 × 10 cm",
    weight: "610 g",
    capacity: "Structured day carry",
    hardware: "Matte champagne",
    leather: "Smooth calfskin",
    colors: ["Warm Taupe", "Noir", "Cognac"],
    occasions: ["Work", "Travel", "Evening"],
  },
  {
    id: "bordeaux-kelly",
    name: "The Bordeaux Frame",
    collection: "Heritage",
    color: "Deep Bordeaux",
    price: 580,
    priceLabel: "$580",
    category: "handbags",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Deep bordeaux structured handbag",
    size: "feature",
    addedAt: "2026-07-10T08:45:00.000Z",
    loved: false,
    isNew: false,
    materials: "Box calf leather",
    dimensions: "32 × 24 × 12 cm",
    weight: "720 g",
    capacity: "Structured carry-all",
    hardware: "Palladium",
    leather: "Box calf",
    colors: ["Deep Bordeaux", "Noir", "Forest"],
    occasions: ["Formal", "Work", "Travel"],
  },
  {
    id: "olive-crossbody",
    name: "The Olive Crossbody",
    collection: "Voyage",
    color: "Olive",
    price: 310,
    priceLabel: "$310",
    category: "crossbody",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Olive leather crossbody presented in signature packaging",
    size: "support",
    addedAt: "2026-07-19T19:00:00.000Z",
    loved: true,
    isNew: true,
    materials: "Vegetable-tanned leather",
    dimensions: "22 × 16 × 8 cm",
    weight: "380 g",
    capacity: "Hands-free essentials",
    hardware: "Antique brass",
    leather: "Vegetable-tanned",
    colors: ["Olive", "Sand", "Noir"],
    occasions: ["Travel", "Weekend", "City"],
  },
  {
    id: "forest-tote",
    name: "The Forest Tote",
    collection: "Voyage",
    color: "Forest Green",
    price: 365,
    priceLabel: "$365",
    category: "tote",
    imageSrc: "/community/07-forest-unboxing.webp",
    imageAlt: "Forest green tote in signature unboxing presentation",
    size: "support",
    addedAt: "2026-07-08T13:10:00.000Z",
    loved: false,
    isNew: false,
    materials: "Full-grain leather",
    dimensions: "40 × 30 × 15 cm",
    weight: "850 g",
    capacity: "Weekend travel",
    hardware: "Brushed gold",
    leather: "Full-grain",
    colors: ["Forest Green", "Ivory", "Noir"],
    occasions: ["Travel", "Weekend", "Everyday"],
  },
  {
    id: "mahogany-atelier",
    name: "The Mahogany Atelier",
    collection: "Atelier",
    color: "Mahogany",
    price: 640,
    priceLabel: "$640",
    category: "travel",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Mahogany leather atelier bag on warm marble",
    size: "hero",
    addedAt: "2026-07-05T17:40:00.000Z",
    loved: true,
    isNew: false,
    materials: "Aniline-dyed calfskin",
    dimensions: "42 × 28 × 18 cm",
    weight: "980 g",
    capacity: "Overnight essentials",
    hardware: "Dark champagne",
    leather: "Aniline calfskin",
    colors: ["Mahogany", "Cognac", "Noir"],
    occasions: ["Travel", "Weekend", "Business"],
  },
  {
    id: "pearl-bucket",
    name: "The Pearl Bucket",
    collection: "Édition",
    color: "Pearl Ivory",
    price: 295,
    priceLabel: "$295",
    category: "shoulder",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Pearl ivory bucket bag with soft drawstring",
    size: "feature",
    addedAt: "2026-07-22T07:00:00.000Z",
    loved: false,
    isNew: true,
    materials: "Soft lambskin",
    dimensions: "24 × 26 × 14 cm",
    weight: "450 g",
    capacity: "Relaxed day carry",
    hardware: "Soft gold",
    leather: "Lambskin",
    colors: ["Pearl Ivory", "Blush", "Noir"],
    occasions: ["Day", "Weekend", "Travel"],
  },
  {
    id: "taupe-ribbon",
    name: "The Ribbon Carry",
    collection: "Classique",
    color: "Soft Taupe",
    price: 275,
    priceLabel: "$275",
    category: "mini",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Soft taupe mini bag with ribbon detail",
    size: "support",
    addedAt: "2026-07-14T12:00:00.000Z",
    loved: false,
    isNew: false,
    materials: "Saffiano-finish leather",
    dimensions: "16 × 12 × 6 cm",
    weight: "240 g",
    capacity: "Evening mini",
    hardware: "Champagne gold",
    leather: "Saffiano",
    colors: ["Soft Taupe", "Ivory", "Noir"],
    occasions: ["Evening", "Gift", "City"],
  },
  {
    id: "noir-signature",
    name: "The Noir Signature",
    collection: "Signature",
    color: "Matte Noir",
    price: 455,
    priceLabel: "$455",
    category: "handbags",
    imageSrc: "/handbag.webp",
    imageAlt: "Matte noir signature DANOVIX handbag",
    size: "feature",
    addedAt: "2026-07-16T15:30:00.000Z",
    loved: true,
    isNew: false,
    materials: "Matte calfskin",
    dimensions: "30 × 22 × 11 cm",
    weight: "590 g",
    capacity: "Everyday structured",
    hardware: "Gunmetal",
    leather: "Matte calfskin",
    colors: ["Matte Noir", "Ivory", "Champagne"],
    occasions: ["Everyday", "Work", "Evening"],
  },
] as const;

export const CURATED_RECOMMENDATIONS: readonly CuratedItem[] = [
  {
    id: "curated-taupe",
    name: "The Lock Day Bag",
    collection: "Heritage",
    priceLabel: "Starting at $510",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe lock day bag",
    href: "/collection",
  },
  {
    id: "curated-bordeaux",
    name: "The Frame Carry",
    collection: "Heritage",
    priceLabel: "Starting at $580",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Deep bordeaux frame handbag",
    href: "/collection",
  },
  {
    id: "curated-olive",
    name: "The Voyage Crossbody",
    collection: "Voyage",
    priceLabel: "Starting at $310",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Olive voyage crossbody",
    href: "/collection",
  },
] as const;

export const WISHLIST_ENTRANCE = {
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out",
  cardReveal: {
    opacity: 0,
    scale: 1.08,
    blur: 12,
    y: 50,
  },
} as const;

export function formatCollectionValue(items: readonly WishlistItem[]): string {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(total);
}

export function getNewestAddition(
  items: readonly WishlistItem[],
): WishlistItem | null {
  if (items.length === 0) return null;
  return [...items].sort(
    (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
  )[0];
}

export function getUniqueCollections(
  items: readonly WishlistItem[],
): number {
  return new Set(items.map((item) => item.collection)).size;
}

export function buildCompareRecommendation(
  selected: readonly WishlistItem[],
): string {
  if (selected.length < 2) {
    return "Select a few pieces and we will illuminate how they complete one another.";
  }

  const names = selected.map((item) => item.name.replace(/^The\s+/, ""));
  const last = names[names.length - 1];
  const others = names.slice(0, -1).join(", ");

  return `Based on your saved collection, the ${last} complements ${others} by offering a distinct balance of capacity, silhouette, and craftsmanship — while remaining unmistakably DANOVIX.`;
}

export function filterAndSortItems(
  items: readonly WishlistItem[],
  filter: WishlistFilterId,
  sort: WishlistSortId,
  query: string,
): WishlistItem[] {
  const normalized = query.trim().toLowerCase();

  let next = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "new") return item.isNew;
    if (filter === "favorites") return item.loved;
    if (filter === "handbags") {
      return (
        item.category === "handbags" ||
        item.category === "tote" ||
        item.category === "shoulder" ||
        item.category === "crossbody" ||
        item.category === "mini" ||
        item.category === "travel"
      );
    }
    return item.category === filter;
  });

  if (normalized) {
    next = next.filter((item) => {
      const haystack = [
        item.name,
        item.collection,
        item.color,
        item.category,
        item.leather,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }

  const sorted = [...next];
  switch (sort) {
    case "most-loved":
      sorted.sort((a, b) => Number(b.loved) - Number(a.loved));
      break;
    case "newest":
      sorted.sort(
        (a, b) =>
          Number(b.isNew) - Number(a.isNew) ||
          new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
      );
      break;
    case "price":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "recently-saved":
    default:
      sorted.sort(
        (a, b) =>
          new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
      );
      break;
  }

  return sorted;
}
