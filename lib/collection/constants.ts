export type CollectionCategoryId =
  | "all"
  | "tote"
  | "crossbody"
  | "shoulder"
  | "travel"
  | "evening"
  | "new";

export type CollectionSortId =
  | "featured"
  | "newest"
  | "most-loved"
  | "recommended"
  | "price";

export type CollectionFilterGroupId =
  | "color"
  | "material"
  | "hardware"
  | "size"
  | "price"
  | "availability";

export type CollectionCardLayout =
  | "feature"
  | "standard"
  | "portrait"
  | "wide";

export type CollectionProduct = {
  id: string;
  name: string;
  subtitle: string;
  collection: string;
  category: Exclude<CollectionCategoryId, "all" | "new">;
  color: string;
  material: string;
  hardware: string;
  bagSize: "mini" | "medium" | "large";
  price: number;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  isNew: boolean;
  featured: boolean;
  bestSeller: boolean;
  available: boolean;
  tags: readonly string[];
};

export type ActiveCollectionFilters = {
  color: string | null;
  material: string | null;
  hardware: string | null;
  size: string | null;
  price: string | null;
  availability: string | null;
};

export type FilterOption = {
  id: string;
  label: string;
};

export type LifestyleBanner = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cta: string;
  href: string;
};

export type FeaturedEdit = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  category: CollectionCategoryId;
};

export type ExploreCard = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  category: CollectionCategoryId;
};

export type GalleryBlock =
  | { type: "product"; product: CollectionProduct; layout: CollectionCardLayout }
  | { type: "banner"; banner: LifestyleBanner }
  | { type: "quote"; quote: string; attribution: string };

export const COLLECTION_HERO = {
  eyebrow: "Private Showroom",
  headline: ["Crafted For", "Modern Journeys."] as const,
  description:
    "Every piece has been carefully curated for modern women who appreciate timeless craftsmanship.",
  stats: [
    { id: "handcrafted", label: "Handcrafted Pieces" },
    { id: "leather", label: "Italian Leather" },
    { id: "limited", label: "Limited Editions" },
    { id: "new", label: "New Arrivals" },
  ] as const,
} as const;

export const COLLECTION_CATEGORIES: readonly {
  id: CollectionCategoryId;
  label: string;
}[] = [
  { id: "all", label: "All Pieces" },
  { id: "tote", label: "Tote" },
  { id: "crossbody", label: "Crossbody" },
  { id: "shoulder", label: "Shoulder" },
  { id: "travel", label: "Travel" },
  { id: "evening", label: "Evening" },
  { id: "new", label: "New Arrivals" },
] as const;

export const COLLECTION_SEARCH = {
  placeholder: "Search handbags, leather, collections...",
  ariaLabel: "Search the DANOVIX collection",
  aiHint: "Ask AI Concierge",
  voiceLabel: "Voice search — coming soon",
} as const;

export const COLLECTION_FILTERS: readonly {
  id: CollectionFilterGroupId;
  label: string;
  options: readonly FilterOption[];
}[] = [
  {
    id: "color",
    label: "Colour",
    options: [
      { id: "noir", label: "Noir" },
      { id: "ivory", label: "Ivory" },
      { id: "taupe", label: "Taupe" },
      { id: "bordeaux", label: "Bordeaux" },
      { id: "olive", label: "Olive" },
      { id: "rose", label: "Rose" },
      { id: "powder", label: "Powder Blue" },
    ],
  },
  {
    id: "material",
    label: "Material",
    options: [
      { id: "calfskin", label: "Calfskin" },
      { id: "lambskin", label: "Lambskin" },
      { id: "quilted", label: "Quilted" },
      { id: "saffiano", label: "Saffiano" },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    options: [
      { id: "gold", label: "Champagne Gold" },
      { id: "silver", label: "Palladium" },
      { id: "matte", label: "Matte Black" },
    ],
  },
  {
    id: "size",
    label: "Size",
    options: [
      { id: "mini", label: "Mini" },
      { id: "medium", label: "Medium" },
      { id: "large", label: "Large" },
    ],
  },
  {
    id: "price",
    label: "Price",
    options: [
      { id: "under-300", label: "Under $300" },
      { id: "300-450", label: "$300 – $450" },
      { id: "450-600", label: "$450 – $600" },
      { id: "over-600", label: "Over $600" },
    ],
  },
  {
    id: "availability",
    label: "Availability",
    options: [
      { id: "in-stock", label: "In Stock" },
      { id: "limited", label: "Limited Edition" },
      { id: "new", label: "New Arrival" },
    ],
  },
] as const;

export const COLLECTION_SORTS: readonly {
  id: CollectionSortId;
  label: string;
}[] = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "most-loved", label: "Most Loved" },
  { id: "recommended", label: "Recommended" },
  { id: "price", label: "Price" },
] as const;

export const DEFAULT_COLLECTION_FILTERS: ActiveCollectionFilters = {
  color: null,
  material: null,
  hardware: null,
  size: null,
  price: null,
  availability: null,
};

export const STORY_BREAK = {
  eyebrow: "Atelier Notes",
  heading: "Crafted To Accompany Every Chapter Of Your Journey.",
  body: "From quiet mornings to evening light, each silhouette is shaped by Italian leather, considered proportion, and the confidence of pieces made to last.",
  imageSrc: "/community/08-atelier-mahogany.webp",
  imageAlt: "Mahogany atelier bag on warm marble — craftsmanship detail",
} as const;

export const STYLE_CONCIERGE = {
  heading: "Need Help Choosing?",
  description:
    "A private stylist for your wardrobe — compare silhouettes, refine occasions, and discover the piece that feels unmistakably yours.",
  capabilities: [
    "Compare handbags",
    "Find business styles",
    "Find travel styles",
    "Gift recommendations",
    "Wardrobe matching",
    "Colour suggestions",
  ] as const,
  cta: "Ask AI Concierge",
} as const;

export const GALLERY_COPY = {
  eyebrow: "The Showroom",
  heading: "Curated Pieces",
  countSuffix: "pieces presented",
  emptyHeading: ["No Pieces Match", "This Curation."] as const,
  emptyDescription:
    "Refine your filters or allow our Style Concierge to guide you toward an alternative.",
  emptyCta: "Reset Filters",
} as const;

export const CONTINUE_EXPLORING_COPY = {
  eyebrow: "Further In",
  heading: "Continue Exploring",
  description: "Complementary edits that extend the story beyond a single silhouette.",
} as const;

export const LIFESTYLE_BANNERS: readonly LifestyleBanner[] = [
  {
    id: "city-light",
    eyebrow: "In Motion",
    title: "Designed For The Rhythm Of The City.",
    description:
      "Structured ease and quiet hardware — companions for days that move between meetings and evenings out.",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe lock handbag in soft architectural light",
    cta: "Explore Office Edit",
    href: "/collection?category=tote",
  },
  {
    id: "evening-air",
    eyebrow: "After Dark",
    title: "Quiet Drama For Night.",
    description:
      "Compact forms and champagne hardware that complete the evening without competing with it.",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "Celeste clutch in quilted noir leather",
    cta: "View Evening Edit",
    href: "/collection?category=evening",
  },
] as const;

export const FEATURED_EDITS: readonly FeaturedEdit[] = [
  {
    id: "noir",
    title: "Noir Collection",
    subtitle: "Timeless black silhouettes",
    description:
      "Matte calfskin and quiet hardware — the enduring foundation of a refined wardrobe.",
    imageSrc: "/handbag.webp",
    imageAlt: "Matte noir signature DANOVIX handbag",
    href: "/collection?color=noir",
    category: "evening",
  },
  {
    id: "business",
    title: "Business Collection",
    subtitle: "Structured for the working day",
    description:
      "Proportioned totes and lock bags that move with composure from desk to dinner.",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Structured taupe lock bag for business",
    href: "/collection?category=tote",
    category: "tote",
  },
  {
    id: "weekend",
    title: "Weekend Collection",
    subtitle: "Relaxed silhouettes, refined ease",
    description:
      "Soft structure and generous capacity for days that ask for less effort, not less elegance.",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Pearl ivory bucket bag for weekend luxury",
    href: "/collection?category=shoulder",
    category: "shoulder",
  },
] as const;

export const EXPLORE_CARDS: readonly ExploreCard[] = [
  {
    id: "travel",
    title: "Travel Essentials",
    subtitle: "Companions for every journey",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Mahogany atelier travel bag",
    category: "travel",
  },
  {
    id: "evening",
    title: "Evening Edit",
    subtitle: "Quiet drama for night",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "Celeste clutch for evening",
    category: "evening",
  },
  {
    id: "bestsellers",
    title: "Best Sellers",
    subtitle: "Most loved by our community",
    imageSrc: "/featured/luna-tote/hero.webp",
    imageAlt: "Luna Tote — best seller",
    category: "all",
  },
  {
    id: "new",
    title: "New Arrivals",
    subtitle: "The latest atelier releases",
    imageSrc: "/featured/aurora-mini/hero.webp",
    imageAlt: "Aurora Mini new arrival",
    category: "new",
  },
] as const;

export const EDITORIAL_QUOTES = [
  {
    quote: "Fewer pieces. Stronger presence. Every silhouette chosen with intention.",
    attribution: "DANOVIX Atelier",
  },
  {
    quote: "Luxury is not volume — it is the quiet confidence of the right companion.",
    attribution: "Private Showroom",
  },
] as const;

/** Flagship showroom catalog — curated for editorial presentation. */
export const COLLECTION_PRODUCTS: readonly CollectionProduct[] = [
  {
    id: "luna-tote",
    name: "The Luna Tote",
    subtitle: "Signature Everyday Carry",
    collection: "Signature",
    category: "tote",
    color: "Powder Blue",
    material: "Calfskin",
    hardware: "Champagne Gold",
    bagSize: "large",
    price: 289,
    priceLabel: "$289",
    imageSrc: "/featured/luna-tote/hero.webp",
    imageAlt: "The Luna Tote in powder blue leather",
    isNew: false,
    featured: true,
    bestSeller: true,
    available: true,
    tags: ["tote", "everyday", "office", "summer", "best seller"],
  },
  {
    id: "celeste-clutch",
    name: "The Celeste Clutch",
    subtitle: "Evening Classique",
    collection: "Classique",
    category: "evening",
    color: "Noir",
    material: "Quilted",
    hardware: "Champagne Gold",
    bagSize: "mini",
    price: 349,
    priceLabel: "$349",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "The Celeste Clutch in quilted black leather",
    isNew: true,
    featured: true,
    bestSeller: false,
    available: true,
    tags: ["evening", "gift", "black leather", "new arrivals"],
  },
  {
    id: "aurora-mini",
    name: "The Aurora Mini",
    subtitle: "Édition Soft Mini",
    collection: "Édition",
    category: "crossbody",
    color: "Ivory",
    material: "Quilted",
    hardware: "Palladium",
    bagSize: "mini",
    price: 249,
    priceLabel: "$249",
    imageSrc: "/featured/aurora-mini/hero.webp",
    imageAlt: "The Aurora Mini in cream quilted leather",
    isNew: true,
    featured: false,
    bestSeller: true,
    available: true,
    tags: ["mini", "weekend", "gift", "new arrivals", "best seller", "crossbody"],
  },
  {
    id: "coussin-rose",
    name: "The Coussin Rose",
    subtitle: "Atelier Soft Shoulder",
    collection: "Atelier",
    category: "shoulder",
    color: "Rose",
    material: "Calfskin",
    hardware: "Champagne Gold",
    bagSize: "medium",
    price: 420,
    priceLabel: "$420",
    imageSrc: "/community/01-pink-coussin.webp",
    imageAlt: "Soft rose coussin handbag with gold hardware",
    isNew: false,
    featured: true,
    bestSeller: false,
    available: true,
    tags: ["shoulder", "weekend", "summer", "gift"],
  },
  {
    id: "taupe-lock",
    name: "The Taupe Lock",
    subtitle: "Heritage Structured Carry",
    collection: "Heritage",
    category: "tote",
    color: "Taupe",
    material: "Calfskin",
    hardware: "Matte Black",
    bagSize: "medium",
    price: 510,
    priceLabel: "$510",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe handbag with signature lock detail",
    isNew: false,
    featured: true,
    bestSeller: true,
    available: true,
    tags: ["office", "everyday", "best seller", "tote"],
  },
  {
    id: "bordeaux-kelly",
    name: "The Bordeaux Frame",
    subtitle: "Heritage Evening Form",
    collection: "Heritage",
    category: "evening",
    color: "Bordeaux",
    material: "Calfskin",
    hardware: "Champagne Gold",
    bagSize: "medium",
    price: 580,
    priceLabel: "$580",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Deep bordeaux structured handbag",
    isNew: false,
    featured: false,
    bestSeller: false,
    available: true,
    tags: ["office", "evening", "formal"],
  },
  {
    id: "olive-crossbody",
    name: "The Olive Crossbody",
    subtitle: "Voyage City Carry",
    collection: "Voyage",
    category: "crossbody",
    color: "Olive",
    material: "Calfskin",
    hardware: "Palladium",
    bagSize: "mini",
    price: 310,
    priceLabel: "$310",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Olive leather crossbody presented in signature packaging",
    isNew: true,
    featured: false,
    bestSeller: true,
    available: true,
    tags: ["crossbody", "travel", "weekend", "new arrivals", "best seller"],
  },
  {
    id: "forest-tote",
    name: "The Forest Tote",
    subtitle: "Voyage Day Companion",
    collection: "Voyage",
    category: "travel",
    color: "Olive",
    material: "Calfskin",
    hardware: "Matte Black",
    bagSize: "large",
    price: 365,
    priceLabel: "$365",
    imageSrc: "/community/07-forest-unboxing.webp",
    imageAlt: "Forest green tote in signature unboxing presentation",
    isNew: false,
    featured: false,
    bestSeller: false,
    available: true,
    tags: ["tote", "travel", "weekend"],
  },
  {
    id: "mahogany-atelier",
    name: "The Mahogany Atelier",
    subtitle: "Limited Travel Edition",
    collection: "Atelier",
    category: "travel",
    color: "Taupe",
    material: "Calfskin",
    hardware: "Champagne Gold",
    bagSize: "large",
    price: 640,
    priceLabel: "$640",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Mahogany leather atelier bag on warm marble",
    isNew: false,
    featured: true,
    bestSeller: false,
    available: true,
    tags: ["travel", "office", "premium leather tote", "limited"],
  },
  {
    id: "pearl-bucket",
    name: "The Pearl Bucket",
    subtitle: "Édition Soft Drawstring",
    collection: "Édition",
    category: "shoulder",
    color: "Ivory",
    material: "Lambskin",
    hardware: "Palladium",
    bagSize: "medium",
    price: 295,
    priceLabel: "$295",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Pearl ivory bucket bag with soft drawstring",
    isNew: true,
    featured: false,
    bestSeller: false,
    available: true,
    tags: ["shoulder", "weekend", "summer", "new arrivals"],
  },
  {
    id: "taupe-ribbon",
    name: "The Ribbon Carry",
    subtitle: "Classique Mini Evening",
    collection: "Classique",
    category: "evening",
    color: "Taupe",
    material: "Saffiano",
    hardware: "Champagne Gold",
    bagSize: "mini",
    price: 275,
    priceLabel: "$275",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Soft taupe mini bag with ribbon detail",
    isNew: false,
    featured: false,
    bestSeller: false,
    available: true,
    tags: ["mini", "evening", "gift"],
  },
  {
    id: "noir-signature",
    name: "The Noir Signature",
    subtitle: "Signature Matte Icon",
    collection: "Signature",
    category: "shoulder",
    color: "Noir",
    material: "Calfskin",
    hardware: "Matte Black",
    bagSize: "medium",
    price: 455,
    priceLabel: "$455",
    imageSrc: "/handbag.webp",
    imageAlt: "Matte noir signature DANOVIX handbag",
    isNew: false,
    featured: true,
    bestSeller: true,
    available: true,
    tags: ["black leather", "office", "everyday", "evening", "best seller"],
  },
] as const;

export const COLLECTION_ENTRANCE = {
  duration: 0.9,
  stagger: 0.12,
  ease: "power3.out",
} as const;

function matchesPrice(price: number, band: string | null): boolean {
  if (!band) return true;
  switch (band) {
    case "under-300":
      return price < 300;
    case "300-450":
      return price >= 300 && price <= 450;
    case "450-600":
      return price > 450 && price <= 600;
    case "over-600":
      return price > 600;
    default:
      return true;
  }
}

function matchesHardware(hardware: string, filter: string | null): boolean {
  if (!filter) return true;
  const lower = hardware.toLowerCase();
  switch (filter) {
    case "gold":
      return lower.includes("gold") || lower.includes("champagne");
    case "silver":
      return lower.includes("palladium") || lower.includes("silver");
    case "matte":
      return lower.includes("matte");
    default:
      return lower.includes(filter);
  }
}

function matchesAvailability(
  product: CollectionProduct,
  filter: string | null,
): boolean {
  if (!filter) return true;
  switch (filter) {
    case "in-stock":
      return product.available;
    case "limited":
      return product.tags.includes("limited") || product.price >= 600;
    case "new":
      return product.isNew;
    default:
      return true;
  }
}

function relevanceScore(product: CollectionProduct, query: string): number {
  if (!query) {
    return product.featured ? 3 : product.bestSeller ? 2 : product.isNew ? 1 : 0;
  }
  const haystack = [
    product.name,
    product.subtitle,
    product.collection,
    product.color,
    product.material,
    product.hardware,
    product.category,
    ...product.tags,
  ]
    .join(" ")
    .toLowerCase();

  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  let score = 0;
  for (const token of tokens) {
    if (haystack.includes(token)) score += 2;
  }
  if (product.featured) score += 1;
  if (product.bestSeller) score += 1;
  if (product.isNew) score += 0.5;
  return score;
}

export function filterAndSortCollection(
  products: readonly CollectionProduct[],
  category: CollectionCategoryId,
  query: string,
  filters: ActiveCollectionFilters,
  sort: CollectionSortId,
): CollectionProduct[] {
  const normalized = query.trim().toLowerCase();

  const stopWords = new Set([
    "a",
    "an",
    "the",
    "for",
    "and",
    "or",
    "to",
    "of",
    "with",
  ]);

  let next = products.filter((product) => {
    if (category === "new") {
      if (!product.isNew) return false;
    } else if (category !== "all" && product.category !== category) {
      return false;
    }

    if (filters.color) {
      if (!product.color.toLowerCase().includes(filters.color.toLowerCase())) {
        return false;
      }
    }
    if (filters.material) {
      if (
        !product.material.toLowerCase().includes(filters.material.toLowerCase())
      ) {
        return false;
      }
    }
    if (!matchesHardware(product.hardware, filters.hardware)) return false;
    if (filters.size && product.bagSize !== filters.size) return false;
    if (!matchesPrice(product.price, filters.price)) return false;
    if (!matchesAvailability(product, filters.availability)) return false;

    if (!normalized) return true;

    const haystack = [
      product.name,
      product.subtitle,
      product.collection,
      product.color,
      product.material,
      product.hardware,
      product.category,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    const tokens = normalized
      .split(/\s+/)
      .filter((token) => token.length > 1 && !stopWords.has(token));

    if (tokens.length === 0) return true;
    return tokens.some((token) => haystack.includes(token));
  });

  const sorted = [...next];
  switch (sort) {
    case "newest":
      sorted.sort(
        (a, b) => Number(b.isNew) - Number(a.isNew) || b.price - a.price,
      );
      break;
    case "most-loved":
      sorted.sort(
        (a, b) =>
          Number(b.bestSeller) - Number(a.bestSeller) ||
          Number(b.featured) - Number(a.featured),
      );
      break;
    case "price":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "recommended":
      sorted.sort(
        (a, b) =>
          relevanceScore(b, normalized) - relevanceScore(a, normalized) ||
          Number(b.featured) - Number(a.featured),
      );
      break;
    case "featured":
    default:
      sorted.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          Number(b.bestSeller) - Number(a.bestSeller) ||
          b.price - a.price,
      );
      break;
  }

  return sorted;
}

/**
 * Builds an editorial gallery rhythm — feature cards, lifestyle banners,
 * quotes — so browsing feels curated rather than catalogue-like.
 */
export function buildEditorialGallery(
  products: readonly CollectionProduct[],
): GalleryBlock[] {
  if (products.length === 0) return [];

  const blocks: GalleryBlock[] = [];
  const layouts: CollectionCardLayout[] = [
    "feature",
    "portrait",
    "standard",
    "standard",
    "portrait",
    "standard",
    "feature",
    "standard",
    "portrait",
    "standard",
    "standard",
    "feature",
  ];

  products.forEach((product, index) => {
    blocks.push({
      type: "product",
      product,
      layout: layouts[index % layouts.length] ?? "standard",
    });

    if (index === 2 && products.length > 3) {
      blocks.push({ type: "banner", banner: LIFESTYLE_BANNERS[0] });
    }

    if (index === 5 && products.length > 6) {
      blocks.push({
        type: "quote",
        quote: EDITORIAL_QUOTES[0].quote,
        attribution: EDITORIAL_QUOTES[0].attribution,
      });
    }

    if (index === 7 && products.length > 8) {
      blocks.push({ type: "banner", banner: LIFESTYLE_BANNERS[1] });
    }

    if (index === 9 && products.length > 10) {
      blocks.push({
        type: "quote",
        quote: EDITORIAL_QUOTES[1].quote,
        attribution: EDITORIAL_QUOTES[1].attribution,
      });
    }
  });

  return blocks;
}

export function countActiveFilters(filters: ActiveCollectionFilters): number {
  return Object.values(filters).filter(Boolean).length;
}
