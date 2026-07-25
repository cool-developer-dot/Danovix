import type { CollectionProduct } from "@/lib/collection/constants";
import { COLLECTION_PRODUCTS } from "@/lib/collection/constants";

export type ProductMediaKind = "image" | "video" | "spin" | "model";

export type ProductMediaCategory =
  | "studio"
  | "lifestyle"
  | "macro"
  | "packaging"
  | "video"
  | "interactive";

export type ProductMediaItem = {
  id: string;
  label: string;
  kind: ProductMediaKind;
  category: ProductMediaCategory;
  src: string;
  alt: string;
  poster?: string;
};

export type ProductColour = {
  id: string;
  name: string;
  swatch: string;
  imageSrc: string;
  available: boolean;
};

export type ProductDimension = {
  id: string;
  label: string;
  value: string;
};

export type CapacityItem = {
  id: string;
  label: string;
  fits: boolean;
};

export type CraftStep = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type MaterialFeature = {
  id: string;
  title: string;
  description: string;
  icon:
    | "leather"
    | "shield"
    | "droplets"
    | "gem"
    | "stitch"
    | "interior"
    | "magnet"
    | "infinity"
    | "package"
    | "badge";
};

export type LifestyleShot = {
  id: string;
  title: string;
  setting: string;
  imageSrc: string;
  imageAlt: string;
  span: "wide" | "tall" | "square";
};

export type LookItem = {
  id: string;
  name: string;
  category: string;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type CustomerStory = {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  helpful: number;
  imageSrc?: string;
  imageAlt?: string;
  date: string;
};

export type TrustItem = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: "truck" | "package" | "shield" | "rotate" | "lock" | "heart" | "badge";
};

export type ProductDetail = {
  slug: string;
  product: CollectionProduct;
  editorialSubtitle: string;
  storyLead: string;
  storyBody: readonly string[];
  rating: number;
  reviewCount: number;
  limitedEdition: boolean;
  media: readonly ProductMediaItem[];
  colours: readonly ProductColour[];
  dimensions: readonly ProductDimension[];
  capacity: readonly CapacityItem[];
  craftSteps: readonly CraftStep[];
  features: readonly MaterialFeature[];
  lifestyle: readonly LifestyleShot[];
  filmChapters: readonly { id: string; label: string; imageSrc: string }[];
  completeTheLook: readonly LookItem[];
  stories: readonly CustomerStory[];
  recentlyViewed: readonly string[];
};

const CRAFT_STEPS: readonly CraftStep[] = [
  {
    id: "leather",
    title: "Italian Leather",
    description: "Full-grain hides selected for grain, hand-feel, and lasting character.",
    imageSrc: "/craftsmanship/craft-leather.webp",
    imageAlt: "Full-grain Italian leather texture",
  },
  {
    id: "selection",
    title: "Material Selection",
    description: "Only panels with honest grain and quiet consistency enter the atelier.",
    imageSrc: "/craftsmanship/craft-leather.webp",
    imageAlt: "Selected leather panels",
  },
  {
    id: "cutting",
    title: "Hand Cutting",
    description: "Each silhouette is cut by hand to honour the hide’s natural direction.",
    imageSrc: "/craftsmanship/craft-handle.webp",
    imageAlt: "Hand-cut leather construction",
  },
  {
    id: "stitching",
    title: "Precision Stitching",
    description: "Saddle stitching placed with measured tension for strength and beauty.",
    imageSrc: "/craftsmanship/craft-stitching.webp",
    imageAlt: "Precision hand stitching",
  },
  {
    id: "edge",
    title: "Edge Finishing",
    description: "Painted and burnished edges that feel refined to the touch.",
    imageSrc: "/craftsmanship/craft-stitching.webp",
    imageAlt: "Edge finishing detail",
  },
  {
    id: "hardware",
    title: "Hardware Installation",
    description: "Champagne gold and palladium pieces seated with quiet precision.",
    imageSrc: "/craftsmanship/craft-hardware.webp",
    imageAlt: "Gold hardware installation",
  },
  {
    id: "inspection",
    title: "Quality Inspection",
    description: "Every piece reviewed under atelier light before it earns its name.",
    imageSrc: "/craftsmanship/craft-interior.webp",
    imageAlt: "Quality inspection of interior",
  },
  {
    id: "packaging",
    title: "Luxury Packaging",
    description: "Dust bag, tissue, and signature box — presentation as considered as the piece.",
    imageSrc: "/community/02-pink-unboxing.webp",
    imageAlt: "Luxury packaging presentation",
  },
  {
    id: "signature",
    title: "Final Signature",
    description: "Authenticated, numbered where limited, and ready for its first journey.",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Final signature packaging",
  },
] as const;

export const PRODUCT_FEATURES: readonly MaterialFeature[] = [
  {
    id: "leather",
    title: "Italian Leather",
    description: "Full-grain calfskin chosen for depth of grain and enduring softness.",
    icon: "leather",
  },
  {
    id: "scratch",
    title: "Scratch Resistant",
    description: "A resilient finish that wears gracefully through daily movement.",
    icon: "shield",
  },
  {
    id: "water",
    title: "Water Resistant",
    description: "Protected against light rain without dulling the natural hand.",
    icon: "droplets",
  },
  {
    id: "hardware",
    title: "Gold Hardware",
    description: "Champagne-finished metal that catches light with quiet confidence.",
    icon: "gem",
  },
  {
    id: "stitching",
    title: "Premium Stitching",
    description: "Hand-guided seams that reinforce structure and silhouette.",
    icon: "stitch",
  },
  {
    id: "interior",
    title: "Microfiber Interior",
    description: "Soft-lined compartments that protect what you carry.",
    icon: "interior",
  },
  {
    id: "closure",
    title: "Magnetic Closure",
    description: "Secure, silent, and effortless — engineered for daily ritual.",
    icon: "magnet",
  },
  {
    id: "lifetime",
    title: "Lifetime Craftsmanship",
    description: "Built to accompany chapters, not seasons.",
    icon: "infinity",
  },
  {
    id: "packaging",
    title: "Luxury Packaging",
    description: "Signature presentation worthy of a private boutique unboxing.",
    icon: "package",
  },
  {
    id: "auth",
    title: "Authentication Certificate",
    description: "Each piece arrives with verified DANOVIX authenticity.",
    icon: "badge",
  },
] as const;

export const DEFAULT_CAPACITY: readonly CapacityItem[] = [
  { id: "laptop", label: "13\" Laptop", fits: true },
  { id: "notebook", label: "Notebook", fits: true },
  { id: "phone", label: "Phone", fits: true },
  { id: "wallet", label: "Wallet", fits: true },
  { id: "passport", label: "Passport", fits: true },
  { id: "bottle", label: "Water Bottle", fits: true },
  { id: "sunglasses", label: "Sunglasses", fits: true },
  { id: "keys", label: "Keys", fits: true },
  { id: "makeup", label: "Makeup Pouch", fits: true },
  { id: "perfume", label: "Perfume", fits: true },
  { id: "powerbank", label: "Power Bank", fits: true },
  { id: "cable", label: "Charging Cable", fits: true },
] as const;

export const PRODUCT_TRUST: readonly TrustItem[] = [
  {
    id: "shipping",
    title: "Complimentary Shipping",
    summary: "Arrives with white-glove care.",
    detail:
      "Every order ships complimentary within the continental US with discreet, signature packaging and real-time tracking.",
    icon: "truck",
  },
  {
    id: "packaging",
    title: "Luxury Packaging",
    summary: "Boutique presentation at home.",
    detail:
      "Dust bag, tissue, care card, and the DANOVIX signature box — designed for the moment of first reveal.",
    icon: "package",
  },
  {
    id: "auth",
    title: "Authentication Certificate",
    summary: "Verified originality.",
    detail:
      "Each piece includes a certificate confirming atelier origin, materials, and authenticity.",
    icon: "badge",
  },
  {
    id: "warranty",
    title: "Craftsmanship Warranty",
    summary: "Protected for the long journey.",
    detail:
      "Structural craftsmanship is covered for two years. Our atelier care team remains available beyond that.",
    icon: "shield",
  },
  {
    id: "returns",
    title: "Thoughtful Returns",
    summary: "Fourteen days of quiet consideration.",
    detail:
      "If the piece is not quite right, return it unused within 14 days in original packaging for a full refund.",
    icon: "rotate",
  },
  {
    id: "secure",
    title: "Secure Delivery",
    summary: "Encrypted checkout. Insured transit.",
    detail:
      "Payments are processed securely. Shipments are insured until they reach your door.",
    icon: "lock",
  },
  {
    id: "care",
    title: "Customer Care",
    summary: "A private stylist when you need one.",
    detail:
      "Our concierge team assists with sizing, styling, care, and gifting — with the patience of a flagship boutique.",
    icon: "heart",
  },
] as const;

export const AI_STYLIST = {
  heading: "Your Private Luxury Stylist",
  description:
    "Ask for colour guidance, occasion styling, travel companions, or the piece that completes a wardrobe — with the restraint of a personal appointment.",
  capabilities: [
    "Compare handbags",
    "Recommend colours",
    "Suggest outfits",
    "Business styling",
    "Travel recommendations",
    "Gift suggestions",
    "Wedding styling",
    "Laptop compatibility",
    "Daily essentials",
    "Wardrobe matching",
    "Luxury advice",
  ] as const,
  cta: "Ask AI Stylist",
  prompts: [
    "Does this suit a business week?",
    "What colour complements ivory?",
    "Will a 13\" laptop fit?",
    "Suggest a gift wrapping note",
  ] as const,
} as const;

export const PRODUCT_HERO_COPY = {
  reserve: "Reserve Your Piece",
  wishlist: "Save to Private Collection",
  share: "Share",
  compare: "Compare",
  packaging: "Luxury Packaging Included",
  authentication: "Authenticated DANOVIX Piece",
  inStock: "Available Now",
  limited: "Limited Edition",
  quantity: "Quantity",
} as const;

const LOOK_POOL: readonly LookItem[] = [
  {
    id: "wallet",
    name: "Maison Card Holder",
    category: "Wallet",
    priceLabel: "$128",
    imageSrc: "/craftsmanship/craft-interior.webp",
    imageAlt: "Premium leather card holder",
    href: "/collection",
  },
  {
    id: "scarf",
    name: "Silk Contour Scarf",
    category: "Scarf",
    priceLabel: "$165",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Soft ribbon accessory styling",
    href: "/collection",
  },
  {
    id: "jewellery",
    name: "Champagne Link Bracelet",
    category: "Jewellery",
    priceLabel: "$210",
    imageSrc: "/craftsmanship/craft-hardware.webp",
    imageAlt: "Champagne gold jewellery detail",
    href: "/collection",
  },
  {
    id: "shoes",
    name: "Atelier Soft Loafer",
    category: "Shoes",
    priceLabel: "$320",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Complementary taupe styling",
    href: "/collection",
  },
] as const;

const STORY_TEMPLATES: readonly Omit<CustomerStory, "id">[] = [
  {
    name: "Amelia R.",
    location: "New York",
    rating: 5,
    title: "Quiet confidence, every day",
    body: "It carries my week without announcing itself — meetings, dinners, travel. The leather already feels like it knows me.",
    verified: true,
    helpful: 42,
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Customer lifestyle with structured bag",
    date: "March 2026",
  },
  {
    name: "Sofia L.",
    location: "Los Angeles",
    rating: 5,
    title: "The unboxing felt like a boutique",
    body: "From the tissue to the dust bag, everything felt intentional. I’ve never kept packaging before — I kept this.",
    verified: true,
    helpful: 31,
    date: "February 2026",
  },
  {
    name: "Priya M.",
    location: "London",
    rating: 5,
    title: "Travel companion that earns its place",
    body: "Airport to hotel to dinner without switching bags. Structure where I need it, softness where I want it.",
    verified: true,
    helpful: 28,
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Travel styling with atelier bag",
    date: "January 2026",
  },
] as const;

function dimensionsFor(product: CollectionProduct): ProductDimension[] {
  switch (product.bagSize) {
    case "mini":
      return [
        { id: "h", label: "Height", value: "18 cm" },
        { id: "w", label: "Width", value: "22 cm" },
        { id: "d", label: "Depth", value: "8 cm" },
        { id: "weight", label: "Weight", value: "0.42 kg" },
        { id: "handle", label: "Handle Drop", value: "11 cm" },
        { id: "strap", label: "Strap Length", value: "110 cm" },
        { id: "capacity", label: "Capacity", value: "Essentials" },
      ];
    case "large":
      return [
        { id: "h", label: "Height", value: "32 cm" },
        { id: "w", label: "Width", value: "42 cm" },
        { id: "d", label: "Depth", value: "16 cm" },
        { id: "weight", label: "Weight", value: "0.92 kg" },
        { id: "handle", label: "Handle Drop", value: "24 cm" },
        { id: "strap", label: "Strap Length", value: "Adjustable" },
        { id: "capacity", label: "Capacity", value: "Full Day +" },
      ];
    default:
      return [
        { id: "h", label: "Height", value: "26 cm" },
        { id: "w", label: "Width", value: "34 cm" },
        { id: "d", label: "Depth", value: "12 cm" },
        { id: "weight", label: "Weight", value: "0.68 kg" },
        { id: "handle", label: "Handle Drop", value: "18 cm" },
        { id: "strap", label: "Strap Length", value: "120 cm" },
        { id: "capacity", label: "Capacity", value: "Daily Edit" },
      ];
  }
}

function capacityFor(product: CollectionProduct): CapacityItem[] {
  if (product.bagSize === "mini") {
    return DEFAULT_CAPACITY.map((item) => ({
      ...item,
      fits: !["laptop", "bottle", "notebook"].includes(item.id),
    }));
  }
  if (product.bagSize === "large") {
    return DEFAULT_CAPACITY.map((item) => ({ ...item, fits: true }));
  }
  return DEFAULT_CAPACITY.map((item) => ({
    ...item,
    fits: item.id !== "laptop" ? true : product.category === "tote" || product.category === "travel",
  }));
}

function relatedImages(product: CollectionProduct): string[] {
  const pool = COLLECTION_PRODUCTS.filter((p) => p.id !== product.id).map(
    (p) => p.imageSrc,
  );
  return [product.imageSrc, ...pool].slice(0, 8);
}

function buildMedia(product: CollectionProduct): ProductMediaItem[] {
  const related = relatedImages(product);
  const packaging =
    product.imageSrc.includes("community")
      ? product.imageSrc
      : "/community/02-pink-unboxing.webp";

  return [
    {
      id: "front",
      label: "Front View",
      kind: "image",
      category: "studio",
      src: product.imageSrc,
      alt: `${product.name} — front view`,
    },
    {
      id: "back",
      label: "Back View",
      kind: "image",
      category: "studio",
      src: related[1] ?? product.imageSrc,
      alt: `${product.name} — back view`,
    },
    {
      id: "left",
      label: "Left View",
      kind: "image",
      category: "studio",
      src: related[2] ?? product.imageSrc,
      alt: `${product.name} — left profile`,
    },
    {
      id: "right",
      label: "Right View",
      kind: "image",
      category: "studio",
      src: related[3] ?? product.imageSrc,
      alt: `${product.name} — right profile`,
    },
    {
      id: "open",
      label: "Open Bag",
      kind: "image",
      category: "studio",
      src: "/craftsmanship/craft-interior.webp",
      alt: `${product.name} — open interior`,
    },
    {
      id: "interior",
      label: "Interior",
      kind: "image",
      category: "studio",
      src: "/craftsmanship/craft-interior.webp",
      alt: `${product.name} — microfiber interior`,
    },
    {
      id: "leather",
      label: "Leather Texture",
      kind: "image",
      category: "macro",
      src: "/craftsmanship/craft-leather.webp",
      alt: "Leather grain macro",
    },
    {
      id: "stitching",
      label: "Stitching Close-up",
      kind: "image",
      category: "macro",
      src: "/craftsmanship/craft-stitching.webp",
      alt: "Hand stitching macro",
    },
    {
      id: "hardware",
      label: "Gold Hardware",
      kind: "image",
      category: "macro",
      src: "/craftsmanship/craft-hardware.webp",
      alt: "Champagne gold hardware",
    },
    {
      id: "handle",
      label: "Handle Detail",
      kind: "image",
      category: "macro",
      src: "/craftsmanship/craft-handle.webp",
      alt: "Handle construction detail",
    },
    {
      id: "logo",
      label: "Logo Detail",
      kind: "image",
      category: "macro",
      src: "/craftsmanship/craft-hardware.webp",
      alt: "Logo engraving detail",
    },
    {
      id: "bottom",
      label: "Bottom View",
      kind: "image",
      category: "studio",
      src: related[4] ?? product.imageSrc,
      alt: `${product.name} — base view`,
    },
    {
      id: "packaging",
      label: "Packaging",
      kind: "image",
      category: "packaging",
      src: packaging,
      alt: "Luxury packaging presentation",
    },
    {
      id: "lifestyle",
      label: "Editorial Lifestyle",
      kind: "image",
      category: "lifestyle",
      src: related[5] ?? "/community/08-atelier-mahogany.webp",
      alt: `${product.name} in lifestyle setting`,
    },
    {
      id: "model",
      label: "Human Model",
      kind: "image",
      category: "lifestyle",
      src: related[6] ?? "/community/09-pearl-bucket.webp",
      alt: `${product.name} worn in editorial context`,
    },
    {
      id: "video",
      label: "Video Thumbnail",
      kind: "video",
      category: "video",
      src: product.imageSrc,
      poster: product.imageSrc,
      alt: `${product.name} cinematic film still`,
    },
    {
      id: "spin",
      label: "360° Preview",
      kind: "spin",
      category: "interactive",
      src: product.imageSrc,
      alt: `${product.name} 360 preview`,
    },
    {
      id: "model-3d",
      label: "3D Preview",
      kind: "model",
      category: "interactive",
      src: product.imageSrc,
      alt: `${product.name} interactive 3D preview`,
    },
  ];
}

function buildColours(product: CollectionProduct): ProductColour[] {
  const siblings = COLLECTION_PRODUCTS.filter(
    (p) => p.category === product.category || p.collection === product.collection,
  ).slice(0, 4);

  const base: ProductColour[] = [
    {
      id: product.id,
      name: product.color,
      swatch: colourToSwatch(product.color),
      imageSrc: product.imageSrc,
      available: product.available,
    },
  ];

  for (const sibling of siblings) {
    if (sibling.id === product.id) continue;
    if (base.some((c) => c.name === sibling.color)) continue;
    base.push({
      id: sibling.id,
      name: sibling.color,
      swatch: colourToSwatch(sibling.color),
      imageSrc: sibling.imageSrc,
      available: sibling.available,
    });
    if (base.length >= 4) break;
  }

  return base;
}

function colourToSwatch(color: string): string {
  const map: Record<string, string> = {
    Noir: "#1a1a1a",
    Ivory: "#f3efe7",
    Taupe: "#8a7a68",
    Bordeaux: "#6b2b36",
    Olive: "#4a5540",
    Rose: "#c9a0a8",
    "Powder Blue": "#a8bdd0",
  };
  return map[color] ?? "#8a7a68";
}

function buildLifestyle(product: CollectionProduct): LifestyleShot[] {
  const related = relatedImages(product);
  return [
    {
      id: "office",
      title: "Business Office",
      setting: "Structured ease for the working day",
      imageSrc: related[0],
      imageAlt: `${product.name} in a business setting`,
      span: "wide",
    },
    {
      id: "airport",
      title: "Airport",
      setting: "Movement without compromise",
      imageSrc: related[1] ?? "/community/08-atelier-mahogany.webp",
      imageAlt: `${product.name} for travel`,
      span: "tall",
    },
    {
      id: "hotel",
      title: "Luxury Hotel",
      setting: "Quiet arrival, considered presence",
      imageSrc: related[2] ?? "/community/04-taupe-lock.webp",
      imageAlt: `${product.name} in a hotel lobby`,
      span: "square",
    },
    {
      id: "coffee",
      title: "Coffee Shop",
      setting: "Morning ritual, refined",
      imageSrc: related[3] ?? "/community/09-pearl-bucket.webp",
      imageAlt: `${product.name} at a café`,
      span: "square",
    },
    {
      id: "evening",
      title: "Evening Event",
      setting: "After dark, understated drama",
      imageSrc: related[4] ?? "/featured/celeste-clutch/hero.webp",
      imageAlt: `${product.name} for evening`,
      span: "wide",
    },
    {
      id: "gallery",
      title: "Art Gallery",
      setting: "Proportion that belongs among form",
      imageSrc: related[5] ?? "/community/05-bordeaux-kelly.webp",
      imageAlt: `${product.name} in a gallery`,
      span: "tall",
    },
  ];
}

const EDITORIAL: Record<
  string,
  { subtitle: string; lead: string; body: readonly string[] }
> = {
  "luna-tote": {
    subtitle: "The everyday icon, sculpted in quiet blue.",
    lead: "Designed for women who move effortlessly between ambition and elegance.",
    body: [
      "Luna was cut from a single intention: carry the day without announcing the effort. Soft structure, honest grain, and a silhouette that reads as calm authority.",
      "From morning light to evening plans, it remains the companion that understands rhythm — never rushing, never competing.",
    ],
  },
  "celeste-clutch": {
    subtitle: "Evening refined to its quietest form.",
    lead: "For nights that ask for less volume and more presence.",
    body: [
      "Celeste is compact confidence — quilted restraint, champagne hardware, and a hand-feel that turns ritual into ceremony.",
      "It completes the evening the way a final note completes a composition: inevitable, considered, and entirely itself.",
    ],
  },
  "aurora-mini": {
    subtitle: "A modern heirloom in miniature.",
    lead: "Small enough to feel intimate. Strong enough to define a look.",
    body: [
      "Aurora was shaped for the woman who edits ruthlessly — fewer pieces, clearer presence, jewellery-like hardware.",
      "It travels from brunch to gallery openings with the same soft certainty.",
    ],
  },
};

function editorialFor(product: CollectionProduct) {
  const custom = EDITORIAL[product.id];
  if (custom) return custom;
  return {
    subtitle: product.subtitle,
    lead: "Designed for women who move effortlessly between ambition and elegance.",
    body: [
      `${product.name} is crafted from ${product.material.toLowerCase()} with ${product.hardware.toLowerCase()} hardware — a silhouette considered for daily ritual and lasting form.`,
      "Every proportion is intentional. Every finish is quiet. The result is a companion that earns its place through presence, not volume.",
    ],
  };
}

export function buildProductDetail(product: CollectionProduct): ProductDetail {
  const editorial = editorialFor(product);
  const others = COLLECTION_PRODUCTS.filter((p) => p.id !== product.id)
    .slice(0, 5)
    .map((p) => p.id);

  return {
    slug: product.id,
    product,
    editorialSubtitle: editorial.subtitle,
    storyLead: editorial.lead,
    storyBody: editorial.body,
    rating: product.bestSeller ? 4.9 : product.featured ? 4.8 : 4.7,
    reviewCount: product.bestSeller ? 128 : product.featured ? 86 : 54,
    limitedEdition: product.tags.includes("limited") || product.collection === "Édition",
    media: buildMedia(product),
    colours: buildColours(product),
    dimensions: dimensionsFor(product),
    capacity: capacityFor(product),
    craftSteps: CRAFT_STEPS,
    features: PRODUCT_FEATURES,
    lifestyle: buildLifestyle(product),
    filmChapters: [
      { id: "craft", label: "Craftsmanship", imageSrc: "/craftsmanship/craft-leather.webp" },
      { id: "lifestyle", label: "Lifestyle", imageSrc: product.imageSrc },
      { id: "travel", label: "Travel", imageSrc: "/community/08-atelier-mahogany.webp" },
      { id: "packaging", label: "Packaging", imageSrc: "/community/02-pink-unboxing.webp" },
      { id: "materials", label: "Materials", imageSrc: "/craftsmanship/craft-stitching.webp" },
    ],
    completeTheLook: LOOK_POOL,
    stories: STORY_TEMPLATES.map((story, index) => ({
      ...story,
      id: `${product.id}-story-${index}`,
    })),
    recentlyViewed: others,
  };
}

export const PRODUCT_DETAILS: readonly ProductDetail[] =
  COLLECTION_PRODUCTS.map(buildProductDetail);

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return PRODUCT_DETAILS.find((item) => item.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCT_DETAILS.map((item) => item.slug);
}

export function getProductsByIds(ids: readonly string[]): CollectionProduct[] {
  return ids
    .map((id) => COLLECTION_PRODUCTS.find((p) => p.id === id))
    .filter((p): p is CollectionProduct => Boolean(p));
}

export const PRODUCT_ENTRANCE = {
  duration: 0.9,
  stagger: 0.12,
  ease: "power3.out",
} as const;
