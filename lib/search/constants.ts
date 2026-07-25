export type SearchSortId =
  | "relevant"
  | "newest"
  | "price"
  | "featured"
  | "best-selling";

export type SearchFilterGroupId =
  | "collection"
  | "color"
  | "material"
  | "size"
  | "price"
  | "new"
  | "featured"
  | "best-seller";

export type SearchCardSize = "hero" | "feature" | "support";

export type SearchProduct = {
  id: string;
  name: string;
  collection: string;
  color: string;
  material: string;
  size: SearchCardSize;
  bagSize: "mini" | "medium" | "large";
  price: number;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  isNew: boolean;
  featured: boolean;
  bestSeller: boolean;
  tags: readonly string[];
};

export type SearchSuggestion = {
  id: string;
  title: string;
  description: string;
  icon: "leather" | "office" | "travel" | "evening" | "gift" | "new" | "crossbody" | "collection";
  query: string;
};

export type TrendingChip = {
  id: string;
  label: string;
  query: string;
};

export type EditorialCollection = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  query: string;
};

export type FilterOption = {
  id: string;
  label: string;
};

export type ActiveFilters = {
  collection: string | null;
  color: string | null;
  material: string | null;
  size: string | null;
  price: string | null;
  new: boolean;
  featured: boolean;
  bestSeller: boolean;
};

export const SEARCH_HERO = {
  eyebrow: "Luxury Discovery",
  headline: ["Discover Your", "Next Signature Piece."] as const,
  description:
    "Search handbags, collections, craftsmanship, and timeless essentials.",
} as const;

export const SEARCH_BAR = {
  placeholder: "Search handbags, leather, colors, collections...",
  ariaLabel: "Discover DANOVIX pieces",
  voiceLabel: "Voice search — coming soon",
  visualLabel: "Visual search — coming soon",
} as const;

export const TRENDING_DISCOVERIES = {
  eyebrow: "Curated Now",
  heading: "Trending Discoveries",
  chips: [
    { id: "black-leather", label: "Black Leather", query: "black leather" },
    { id: "office", label: "Office Collection", query: "office collection" },
    { id: "travel", label: "Travel Collection", query: "travel collection" },
    { id: "weekend", label: "Weekend Edit", query: "weekend" },
    { id: "summer", label: "Summer Collection", query: "summer" },
    { id: "gift", label: "Gift Guide", query: "gift" },
    { id: "bestsellers", label: "Best Sellers", query: "best seller" },
    { id: "new", label: "New Arrivals", query: "new arrivals" },
  ] as const satisfies readonly TrendingChip[],
} as const;

export const AI_SUGGESTIONS: readonly SearchSuggestion[] = [
  {
    id: "black-leather",
    title: "Black Leather Collection",
    description: "Timeless noir calfskin silhouettes",
    icon: "leather",
    query: "black leather",
  },
  {
    id: "italian-leather",
    title: "Italian Leather",
    description: "Full-grain craftsmanship from Tuscany",
    icon: "leather",
    query: "italian leather",
  },
  {
    id: "office",
    title: "Office Collection",
    description: "Structured bags for the working day",
    icon: "office",
    query: "office collection",
  },
  {
    id: "travel",
    title: "Travel Essentials",
    description: "Pieces built for movement and ease",
    icon: "travel",
    query: "travel essentials",
  },
  {
    id: "new",
    title: "New Arrivals",
    description: "The latest atelier releases",
    icon: "new",
    query: "new arrivals",
  },
  {
    id: "crossbody",
    title: "Crossbody Bags",
    description: "Hands-free elegance for the city",
    icon: "crossbody",
    query: "crossbody",
  },
  {
    id: "evening",
    title: "Evening Collection",
    description: "Refined silhouettes for night",
    icon: "evening",
    query: "evening bag",
  },
  {
    id: "gift",
    title: "Gift Collection",
    description: "Thoughtful pieces for someone cherished",
    icon: "gift",
    query: "gift",
  },
] as const;

export const NATURAL_LANGUAGE_PROMPTS = [
  "Luxury black office handbag",
  "Minimal white crossbody",
  "Travel handbag under $500",
  "Elegant evening bag",
  "Gift for my wife",
  "Premium leather tote",
  "Classic everyday handbag",
] as const;

export const SMART_FILTERS: readonly {
  id: SearchFilterGroupId;
  label: string;
  options?: readonly FilterOption[];
  toggle?: boolean;
}[] = [
  {
    id: "collection",
    label: "Collection",
    options: [
      { id: "signature", label: "Signature" },
      { id: "heritage", label: "Heritage" },
      { id: "voyage", label: "Voyage" },
      { id: "atelier", label: "Atelier" },
      { id: "classique", label: "Classique" },
      { id: "edition", label: "Édition" },
    ],
  },
  {
    id: "color",
    label: "Color",
    options: [
      { id: "noir", label: "Noir" },
      { id: "ivory", label: "Ivory" },
      { id: "taupe", label: "Taupe" },
      { id: "bordeaux", label: "Bordeaux" },
      { id: "olive", label: "Olive" },
      { id: "rose", label: "Rose" },
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
  { id: "new", label: "New", toggle: true },
  { id: "featured", label: "Featured", toggle: true },
  { id: "best-seller", label: "Best Seller", toggle: true },
] as const;

export const SEARCH_SORTS: readonly {
  id: SearchSortId;
  label: string;
}[] = [
  { id: "relevant", label: "Most Relevant" },
  { id: "newest", label: "Newest" },
  { id: "price", label: "Price" },
  { id: "featured", label: "Featured" },
  { id: "best-selling", label: "Best Selling" },
] as const;

export const EDITORIAL_COLLECTIONS: readonly EditorialCollection[] = [
  {
    id: "office-edit",
    title: "Office Edit",
    subtitle: "Structured leather for the day ahead",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Structured taupe lock handbag for the office",
    href: "/#collection",
    query: "office",
  },
  {
    id: "weekend-luxury",
    title: "Weekend Luxury",
    subtitle: "Relaxed silhouettes, refined ease",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Pearl ivory bucket bag for weekend luxury",
    href: "/#collection",
    query: "weekend",
  },
  {
    id: "travel",
    title: "Travel Collection",
    subtitle: "Companions for every journey",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Mahogany atelier travel bag",
    href: "/#collection",
    query: "travel",
  },
  {
    id: "evening",
    title: "Evening Essentials",
    subtitle: "Quiet drama for night",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "Celeste clutch for evening",
    href: "/#collection",
    query: "evening",
  },
  {
    id: "minimal-icons",
    title: "Minimal Icons Collection",
    subtitle: "Fewer pieces. Stronger presence.",
    imageSrc: "/handbag.webp",
    imageAlt: "Matte noir signature DANOVIX handbag",
    href: "/#collection",
    query: "minimal",
  },
  {
    id: "gifts",
    title: "Luxury Gifts",
    subtitle: "Pieces chosen with intention",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Soft taupe ribbon mini bag as a gift",
    href: "/#collection",
    query: "gift",
  },
] as const;

export const AI_CONCIERGE = {
  heading: "Need Help Finding Something?",
  description:
    "Describe your style. Our AI Concierge will recommend the perfect pieces for your lifestyle.",
  capabilities: [
    "Choose handbags",
    "Recommend matching shoes",
    "Suggest wallets",
    "Find gifts",
    "Compare collections",
    "Luxury styling advice",
  ] as const,
  cta: "Ask AI Concierge",
} as const;

export const AI_EDITORIAL = {
  eyebrow: "Stylist Note",
  heading: "Curated for Your Lifestyle",
  fallback:
    "Based on your request, we recommend structured leather handbags with timeless silhouettes that transition beautifully from business meetings to evening events.",
} as const;

export const SEARCH_EMPTY = {
  heading: ["We Couldn't Find", "That Piece."] as const,
  description:
    "Explore our curated collections or allow our AI Concierge to help you discover the perfect alternative.",
  cta: "Discover Collection",
  ctaHref: "/#collection",
} as const;

export const CONTINUE_EXPLORING = {
  eyebrow: "Your Journey",
  heading: "Continue Exploring",
  description:
    "Pieces you've lingered with — revisited with the same quiet attention.",
} as const;

export const COMPLETE_YOUR_COLLECTION = {
  eyebrow: "Complete the Story",
  heading: "Complete Your Collection",
  description:
    "Thoughtful companions that elevate what you've already discovered.",
  cta: "Discover Piece",
} as const;

export const RESULTS_COPY = {
  eyebrow: "Curated Results",
  heading: "Signature Pieces",
  countSuffix: "pieces discovered",
} as const;

export const DEFAULT_FILTERS: ActiveFilters = {
  collection: null,
  color: null,
  material: null,
  size: null,
  price: null,
  new: false,
  featured: false,
  bestSeller: false,
};

/** Seeded discovery catalog — editorial demo for the flagship experience. */
export const SEARCH_PRODUCTS: readonly SearchProduct[] = [
  {
    id: "luna-tote",
    name: "The Luna Tote",
    collection: "Signature",
    color: "Powder Blue",
    material: "Calfskin",
    size: "hero",
    bagSize: "large",
    price: 289,
    priceLabel: "$289",
    imageSrc: "/featured/luna-tote/hero.webp",
    imageAlt: "The Luna Tote in powder blue leather",
    isNew: false,
    featured: true,
    bestSeller: true,
    tags: ["tote", "everyday", "office", "summer", "best seller"],
  },
  {
    id: "celeste-clutch",
    name: "The Celeste Clutch",
    collection: "Classique",
    color: "Noir",
    material: "Quilted",
    size: "feature",
    bagSize: "mini",
    price: 349,
    priceLabel: "$349",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "The Celeste Clutch in quilted black leather",
    isNew: true,
    featured: true,
    bestSeller: false,
    tags: ["evening", "gift", "black leather", "new arrivals"],
  },
  {
    id: "aurora-mini",
    name: "The Aurora Mini",
    collection: "Édition",
    color: "Ivory",
    material: "Quilted",
    size: "feature",
    bagSize: "mini",
    price: 249,
    priceLabel: "$249",
    imageSrc: "/featured/aurora-mini/hero.webp",
    imageAlt: "The Aurora Mini in cream quilted leather",
    isNew: true,
    featured: false,
    bestSeller: true,
    tags: ["mini", "weekend", "gift", "new arrivals", "best seller"],
  },
  {
    id: "coussin-rose",
    name: "The Coussin Rose",
    collection: "Atelier",
    color: "Rose",
    material: "Calfskin",
    size: "hero",
    bagSize: "medium",
    price: 420,
    priceLabel: "$420",
    imageSrc: "/community/01-pink-coussin.webp",
    imageAlt: "Soft rose coussin handbag with gold hardware",
    isNew: false,
    featured: true,
    bestSeller: false,
    tags: ["shoulder", "weekend", "summer", "gift"],
  },
  {
    id: "taupe-lock",
    name: "The Taupe Lock",
    collection: "Heritage",
    color: "Taupe",
    material: "Calfskin",
    size: "support",
    bagSize: "medium",
    price: 510,
    priceLabel: "$510",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe handbag with signature lock detail",
    isNew: false,
    featured: true,
    bestSeller: true,
    tags: ["office", "black leather", "everyday", "best seller"],
  },
  {
    id: "bordeaux-kelly",
    name: "The Bordeaux Frame",
    collection: "Heritage",
    color: "Bordeaux",
    material: "Calfskin",
    size: "feature",
    bagSize: "medium",
    price: 580,
    priceLabel: "$580",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Deep bordeaux structured handbag",
    isNew: false,
    featured: false,
    bestSeller: false,
    tags: ["office", "evening", "formal"],
  },
  {
    id: "olive-crossbody",
    name: "The Olive Crossbody",
    collection: "Voyage",
    color: "Olive",
    material: "Calfskin",
    size: "support",
    bagSize: "mini",
    price: 310,
    priceLabel: "$310",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Olive leather crossbody presented in signature packaging",
    isNew: true,
    featured: false,
    bestSeller: true,
    tags: ["crossbody", "travel", "weekend", "new arrivals", "best seller"],
  },
  {
    id: "forest-tote",
    name: "The Forest Tote",
    collection: "Voyage",
    color: "Olive",
    material: "Calfskin",
    size: "support",
    bagSize: "large",
    price: 365,
    priceLabel: "$365",
    imageSrc: "/community/07-forest-unboxing.webp",
    imageAlt: "Forest green tote in signature unboxing presentation",
    isNew: false,
    featured: false,
    bestSeller: false,
    tags: ["tote", "travel", "weekend"],
  },
  {
    id: "mahogany-atelier",
    name: "The Mahogany Atelier",
    collection: "Atelier",
    color: "Taupe",
    material: "Calfskin",
    size: "hero",
    bagSize: "large",
    price: 640,
    priceLabel: "$640",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Mahogany leather atelier bag on warm marble",
    isNew: false,
    featured: true,
    bestSeller: false,
    tags: ["travel", "office", "premium leather tote"],
  },
  {
    id: "pearl-bucket",
    name: "The Pearl Bucket",
    collection: "Édition",
    color: "Ivory",
    material: "Lambskin",
    size: "feature",
    bagSize: "medium",
    price: 295,
    priceLabel: "$295",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Pearl ivory bucket bag with soft drawstring",
    isNew: true,
    featured: false,
    bestSeller: false,
    tags: ["shoulder", "weekend", "summer", "minimal white crossbody", "new arrivals"],
  },
  {
    id: "taupe-ribbon",
    name: "The Ribbon Carry",
    collection: "Classique",
    color: "Taupe",
    material: "Saffiano",
    size: "support",
    bagSize: "mini",
    price: 275,
    priceLabel: "$275",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Soft taupe mini bag with ribbon detail",
    isNew: false,
    featured: false,
    bestSeller: false,
    tags: ["mini", "evening", "gift"],
  },
  {
    id: "noir-signature",
    name: "The Noir Signature",
    collection: "Signature",
    color: "Noir",
    material: "Calfskin",
    size: "feature",
    bagSize: "medium",
    price: 455,
    priceLabel: "$455",
    imageSrc: "/handbag.webp",
    imageAlt: "Matte noir signature DANOVIX handbag",
    isNew: false,
    featured: true,
    bestSeller: true,
    tags: [
      "black leather",
      "office",
      "everyday",
      "elegant evening bag",
      "best seller",
      "luxury black office handbag",
    ],
  },
] as const;

export const CONTINUE_EXPLORING_IDS = [
  "noir-signature",
  "coussin-rose",
  "olive-crossbody",
  "pearl-bucket",
  "taupe-lock",
] as const;

export const COMPLETE_COLLECTION_IDS = [
  "aurora-mini",
  "bordeaux-kelly",
  "forest-tote",
  "taupe-ribbon",
] as const;

export const SEARCH_ENTRANCE = {
  duration: 0.9,
  stagger: 0.16,
  ease: "power3.out",
  cardReveal: {
    opacity: 0,
    scale: 1.08,
    blur: 12,
    y: 50,
  },
} as const;

export function isNaturalLanguageQuery(query: string): boolean {
  const trimmed = query.trim();
  if (!trimmed) return false;
  const words = trimmed.split(/\s+/);
  if (words.length >= 3) return true;
  const lower = trimmed.toLowerCase();
  return NATURAL_LANGUAGE_PROMPTS.some(
    (prompt) =>
      lower.includes(prompt.toLowerCase()) ||
      prompt.toLowerCase().includes(lower),
  );
}

export function buildAiEditorial(query: string): string {
  const lower = query.trim().toLowerCase();

  if (lower.includes("office") || lower.includes("work") || lower.includes("business")) {
    return "Based on your request, we recommend structured leather handbags with timeless silhouettes that transition beautifully from business meetings to evening events.";
  }
  if (lower.includes("travel") || lower.includes("weekend")) {
    return "For travel and weekends, we favor soft-structured pieces with generous capacity and quiet hardware — companions that move with you without announcing themselves.";
  }
  if (lower.includes("gift") || lower.includes("wife")) {
    return "For a gift chosen with intention, we recommend refined silhouettes in soft neutrals or classic noir — pieces that feel personal, enduring, and unmistakably DANOVIX.";
  }
  if (lower.includes("evening") || lower.includes("elegant")) {
    return "For evening, we curate compact, sculptural forms with champagne hardware — quiet drama that completes the night without competing with it.";
  }
  if (lower.includes("crossbody") || lower.includes("minimal") || lower.includes("white")) {
    return "For a minimal everyday carry, we suggest light-toned crossbodies and soft buckets — effortless proportion, honest leather, and nothing unnecessary.";
  }
  if (lower.includes("under") || lower.includes("500") || lower.includes("$")) {
    return "Within your range, we highlight Italian calfskin essentials that deliver atelier craftsmanship without excess — considered investment pieces under five hundred.";
  }
  if (lower.includes("leather") || lower.includes("tote") || lower.includes("premium")) {
    return "We recommend full-grain Italian leather totes with clean lines and lasting structure — pieces designed to become the quiet center of a wardrobe.";
  }

  return AI_EDITORIAL.fallback;
}

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

function relevanceScore(product: SearchProduct, query: string): number {
  if (!query) return product.featured ? 2 : product.bestSeller ? 1 : 0;
  const haystack = [
    product.name,
    product.collection,
    product.color,
    product.material,
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

export function filterSuggestions(query: string): SearchSuggestion[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return AI_SUGGESTIONS.filter((suggestion) => {
    const haystack = `${suggestion.title} ${suggestion.description} ${suggestion.query}`.toLowerCase();
    return (
      haystack.includes(normalized) ||
      normalized.split(/\s+/).some((token) => token.length > 1 && haystack.includes(token))
    );
  }).slice(0, 6);
}

export function filterAndSortProducts(
  products: readonly SearchProduct[],
  query: string,
  filters: ActiveFilters,
  sort: SearchSortId,
): SearchProduct[] {
  const normalized = query.trim().toLowerCase();

  const stopWords = new Set([
    "a",
    "an",
    "the",
    "for",
    "my",
    "me",
    "and",
    "or",
    "to",
    "of",
    "with",
    "under",
    "over",
  ]);

  let next = products.filter((product) => {
    if (filters.collection) {
      const coll = product.collection
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{M}/gu, "");
      if (coll !== filters.collection.toLowerCase()) return false;
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
    if (filters.size && product.bagSize !== filters.size) return false;
    if (!matchesPrice(product.price, filters.price)) return false;
    if (filters.new && !product.isNew) return false;
    if (filters.featured && !product.featured) return false;
    if (filters.bestSeller && !product.bestSeller) return false;

    if (!normalized) return true;

    const haystack = [
      product.name,
      product.collection,
      product.color,
      product.material,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    const tokens = normalized
      .replace(/\$/g, "")
      .split(/\s+/)
      .filter((token) => token.length > 1 && !stopWords.has(token) && !/^\d+$/.test(token));

    if (tokens.length === 0) return true;
    return tokens.some((token) => haystack.includes(token));
  });

  const underMatch = normalized.match(/under\s*\$?\s*(\d+)/);
  if (underMatch) {
    const max = Number(underMatch[1]);
    next = next.filter((product) => product.price <= max);
  }

  const sorted = [...next];
  switch (sort) {
    case "newest":
      sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.price - a.price);
      break;
    case "price":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "featured":
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.price - a.price);
      break;
    case "best-selling":
      sorted.sort(
        (a, b) => Number(b.bestSeller) - Number(a.bestSeller) || Number(b.featured) - Number(a.featured),
      );
      break;
    case "relevant":
    default:
      sorted.sort(
        (a, b) => relevanceScore(b, normalized) - relevanceScore(a, normalized),
      );
      break;
  }

  return sorted;
}

export function getProductsByIds(
  ids: readonly string[],
): SearchProduct[] {
  return ids
    .map((id) => SEARCH_PRODUCTS.find((product) => product.id === id))
    .filter((product): product is SearchProduct => Boolean(product));
}
