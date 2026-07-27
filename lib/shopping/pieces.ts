export type CapacityItem =
  | "laptop"
  | "tablet"
  | "phone"
  | "wallet"
  | "bottle"
  | "passport"
  | "cosmetics"
  | "notebook";

export type LifestyleTag =
  | "Business"
  | "Travel"
  | "Evening"
  | "Weekend"
  | "Luxury Events"
  | "Airport"
  | "Office"
  | "Daily Luxury";

export type ComparePiece = {
  id: string;
  name: string;
  collection: string;
  subtitle: string;
  priceLabel: string;
  available: boolean;
  imageSrc: string;
  lifestyleSrc: string;
  imageAlt: string;
  href: string;
  leather: string;
  material: string;
  hardware: string;
  stitching: string;
  lining: string;
  straps: string;
  weight: string;
  capacityLabel: string;
  capacity: readonly CapacityItem[];
  lifestyles: readonly LifestyleTag[];
};

export const CAPACITY_LABELS: Record<CapacityItem, string> = {
  laptop: "Laptop",
  tablet: "Tablet",
  phone: "Phone",
  wallet: "Wallet",
  bottle: "Bottle",
  passport: "Passport",
  cosmetics: "Cosmetics",
  notebook: "Notebook",
};

export const COMPARE_PIECES: readonly ComparePiece[] = [
  {
    id: "luna-tote",
    name: "The Luna Tote",
    collection: "Signature",
    subtitle: "Architectural ease for every day",
    priceLabel: "$289",
    available: true,
    imageSrc: "/featured/luna-tote/hero.webp",
    lifestyleSrc: "/community/02-pink-unboxing.webp",
    imageAlt: "The Luna Tote in powder blue leather",
    href: "/product/luna-tote",
    leather: "Full-grain calfskin",
    material: "Italian leather",
    hardware: "Brushed champagne",
    stitching: "Saddle hand-stitch",
    lining: "Soft suede",
    straps: "Dual top handles",
    weight: "780 g",
    capacityLabel: "Laptop + daily essentials",
    capacity: ["laptop", "tablet", "phone", "wallet", "notebook", "bottle"],
    lifestyles: ["Business", "Office", "Daily Luxury", "Travel"],
  },
  {
    id: "celeste-clutch",
    name: "The Celeste Clutch",
    collection: "Classique",
    subtitle: "Evening light, held close",
    priceLabel: "$349",
    available: true,
    imageSrc: "/featured/celeste-clutch/hero.webp",
    lifestyleSrc: "/community/01-pink-coussin.webp",
    imageAlt: "The Celeste Clutch in quilted black leather",
    href: "/product/celeste-clutch",
    leather: "Quilted calfskin",
    material: "Silk-lined leather",
    hardware: "Pearl & champagne",
    stitching: "Diamond quilt",
    lining: "Champagne silk",
    straps: "Detachable chain",
    weight: "320 g",
    capacityLabel: "Evening essentials",
    capacity: ["phone", "wallet", "cosmetics", "passport"],
    lifestyles: ["Evening", "Luxury Events", "Weekend"],
  },
  {
    id: "aurora-mini",
    name: "The Aurora Mini",
    collection: "Édition",
    subtitle: "Compact confidence, day to night",
    priceLabel: "$249",
    available: true,
    imageSrc: "/featured/aurora-mini/hero.webp",
    lifestyleSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "The Aurora Mini in cream quilted leather",
    href: "/product/aurora-mini",
    leather: "Quilted calfskin",
    material: "Italian leather",
    hardware: "Sculpted gold",
    stitching: "Soft quilt",
    lining: "Ivory microfibre",
    straps: "Crossbody chain",
    weight: "260 g",
    capacityLabel: "Phone, keys, card case",
    capacity: ["phone", "wallet", "cosmetics"],
    lifestyles: ["Daily Luxury", "Evening", "Weekend"],
  },
  {
    id: "taupe-lock",
    name: "The Taupe Lock",
    collection: "Heritage",
    subtitle: "Structured heritage for the boardroom",
    priceLabel: "$510",
    available: true,
    imageSrc: "/community/04-taupe-lock.webp",
    lifestyleSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Warm taupe lock day bag",
    href: "/collection",
    leather: "Heritage calfskin",
    material: "Smooth leather",
    hardware: "Polished lock gold",
    stitching: "Machine precision",
    lining: "Tobacco suede",
    straps: "Top handle + shoulder",
    weight: "920 g",
    capacityLabel: "Documents + tablet",
    capacity: ["tablet", "phone", "wallet", "notebook", "passport"],
    lifestyles: ["Business", "Office", "Airport", "Luxury Events"],
  },
  {
    id: "olive-crossbody",
    name: "The Olive Crossbody",
    collection: "Voyage",
    subtitle: "Light movement for distant cities",
    priceLabel: "$310",
    available: true,
    imageSrc: "/community/06-olive-unboxing.webp",
    lifestyleSrc: "/community/07-forest-unboxing.webp",
    imageAlt: "Olive voyage crossbody",
    href: "/collection",
    leather: "Pebbled calfskin",
    material: "Travel-grade leather",
    hardware: "Matte bronze",
    stitching: "Reinforced edge",
    lining: "Forest twill",
    straps: "Adjustable crossbody",
    weight: "480 g",
    capacityLabel: "Travel day kit",
    capacity: ["phone", "wallet", "passport", "cosmetics", "bottle"],
    lifestyles: ["Travel", "Airport", "Weekend", "Daily Luxury"],
  },
  {
    id: "mahogany-atelier",
    name: "The Mahogany Atelier",
    collection: "Atelier",
    subtitle: "A quiet statement in deep grain",
    priceLabel: "$640",
    available: true,
    imageSrc: "/community/08-atelier-mahogany.webp",
    lifestyleSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Mahogany atelier handbag",
    href: "/collection",
    leather: "Atelier full-grain",
    material: "Hand-finished leather",
    hardware: "Brushed gold",
    stitching: "Artisan saddle",
    lining: "Mahogany suede",
    straps: "Structured handles",
    weight: "860 g",
    capacityLabel: "Executive day bag",
    capacity: ["laptop", "tablet", "phone", "wallet", "notebook"],
    lifestyles: ["Business", "Office", "Luxury Events", "Travel"],
  },
] as const;

export function getComparePieces(ids: readonly string[]): ComparePiece[] {
  return ids
    .map((id) => COMPARE_PIECES.find((piece) => piece.id === id))
    .filter((piece): piece is ComparePiece => Boolean(piece));
}

export function buildAiCompareNote(pieces: readonly ComparePiece[]): string {
  if (pieces.length < 2) {
    return "Select two to four pieces and our stylist will illuminate how their craftsmanship speaks to one another.";
  }

  const primary = pieces[0];
  const others = pieces
    .slice(1)
    .map((piece) => piece.name.replace(/^The\s+/, ""))
    .join(" and the ");

  return `Based on your wishlist and browsing history, the ${primary.name.replace(/^The\s+/, "")} complements your existing collection by offering greater capacity while maintaining the same timeless silhouette as the ${others} — refined, considered, and unmistakably DANOVIX.`;
}
