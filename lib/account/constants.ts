export type OrderStatus =
  | "reserved"
  | "preparing"
  | "shipped"
  | "delivered";

export type AccountOrder = {
  id: string;
  productName: string;
  collection: string;
  status: OrderStatus;
  statusLabel: string;
  progress: number;
  estimatedDelivery: string;
  imageSrc: string;
  imageAlt: string;
  orderNumber: string;
  placedAt: string;
};

export type CollectionPiece = {
  id: string;
  name: string;
  collection: string;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type SavedAddress = {
  id: string;
  label: string;
  line1: string;
  city: string;
  region: string;
  postal: string;
  country: string;
  isDefault: boolean;
};

export type PaymentMethod = {
  id: string;
  brand: "visa" | "mastercard" | "apple-pay" | "google-pay";
  label: string;
  lastFour?: string;
  expiry?: string;
  isDefault: boolean;
};

export type JournalArticle = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type QuickActionId =
  | "profile"
  | "orders"
  | "collection"
  | "addresses"
  | "payments"
  | "concierge"
  | "support";

export const ACCOUNT_MEMBER = {
  firstName: "Sarah",
  fullName: "Sarah Rahman",
  email: "sarah@danovix.private",
  tier: "Private Member",
  memberSince: "2026",
  avatarInitials: "SR",
  profileCompletion: 86,
  privateCollectionCount: 12,
  completedOrders: 8,
  ordersInProgress: 2,
  wishlistCount: 18,
  recentlyViewedCount: 9,
} as const;

export const ACCOUNT_HERO = {
  eyebrow: "Private Member Lounge",
  welcomePrefix: "Welcome Back,",
  subheading:
    "Your private DANOVIX collection, orders, and personalized experiences are waiting for you.",
  meta: [
    { label: "Member Since", value: ACCOUNT_MEMBER.memberSince },
    {
      label: "Private Collection",
      value: `${ACCOUNT_MEMBER.privateCollectionCount} Pieces`,
    },
    {
      label: "Completed Orders",
      value: String(ACCOUNT_MEMBER.completedOrders),
    },
  ] as const,
  editProfile: "Edit Profile",
  profileComplete: "Profile Complete",
} as const;

export const ACCOUNT_SUMMARY = [
  {
    id: "collection",
    label: "Private Collection",
    value: `${ACCOUNT_MEMBER.privateCollectionCount} Saved Pieces`,
    href: "/wishlist",
  },
  {
    id: "orders",
    label: "Orders In Progress",
    value: String(ACCOUNT_MEMBER.ordersInProgress),
    href: "/account/orders",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    value: `${ACCOUNT_MEMBER.wishlistCount} Pieces`,
    href: "/wishlist",
  },
  {
    id: "viewed",
    label: "Recently Viewed",
    value: String(ACCOUNT_MEMBER.recentlyViewedCount),
    href: "#recently-viewed",
  },
] as const;

export const ACCOUNT_ORDERS_COPY = {
  eyebrow: "Your Journey Continues",
  heading: "Recent Orders",
  description:
    "Each piece moves through our atelier with quiet precision — from reservation to your door.",
  track: "Track Order",
  details: "View Details",
  invoice: "Download Invoice",
  empty: "No orders yet. Begin your collection when you are ready.",
  viewAll: "View All Orders",
  viewAllHref: "/account/orders",
} as const;

export const ACCOUNT_ORDERS: readonly AccountOrder[] = [
  {
    id: "ord-noir-tote",
    productName: "The Noir Signature Tote",
    collection: "Signature",
    status: "preparing",
    statusLabel: "Preparing Shipment",
    progress: 62,
    estimatedDelivery: "July 28",
    imageSrc: "/featured/luna-tote/hero.webp",
    imageAlt: "The Noir Signature Tote in black leather",
    orderNumber: "DX-20481",
    placedAt: "2026-07-22",
  },
  {
    id: "ord-celeste",
    productName: "The Celeste Clutch",
    collection: "Classique",
    status: "reserved",
    statusLabel: "Reserved",
    progress: 28,
    estimatedDelivery: "August 4",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "The Celeste Clutch in quilted black leather",
    orderNumber: "DX-20462",
    placedAt: "2026-07-20",
  },
  {
    id: "ord-aurora",
    productName: "The Aurora Mini",
    collection: "Édition",
    status: "shipped",
    statusLabel: "In Transit",
    progress: 84,
    estimatedDelivery: "July 29",
    imageSrc: "/featured/aurora-mini/hero.webp",
    imageAlt: "The Aurora Mini in cream quilted leather",
    orderNumber: "DX-20395",
    placedAt: "2026-07-18",
  },
] as const;

export const ACCOUNT_COLLECTION_COPY = {
  eyebrow: "Set Aside With Intention",
  heading: "Private Collection",
  description:
    "Pieces you have chosen to revisit — refined silhouettes waiting in your private showroom.",
  viewAll: "Open Collection",
  viewAllHref: "/wishlist",
  actions: {
    view: "View",
    reserve: "Move to Reserved",
    compare: "Compare",
    remove: "Remove",
  },
} as const;

export const ACCOUNT_COLLECTION: readonly CollectionPiece[] = [
  {
    id: "luna-tote",
    name: "The Luna Tote",
    collection: "Signature",
    priceLabel: "$289",
    imageSrc: "/featured/luna-tote/hero.webp",
    imageAlt: "The Luna Tote in powder blue leather",
    href: "/product/luna-tote",
  },
  {
    id: "celeste-clutch",
    name: "The Celeste Clutch",
    collection: "Classique",
    priceLabel: "$349",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "The Celeste Clutch in quilted black leather",
    href: "/product/celeste-clutch",
  },
  {
    id: "aurora-mini",
    name: "The Aurora Mini",
    collection: "Édition",
    priceLabel: "$249",
    imageSrc: "/featured/aurora-mini/hero.webp",
    imageAlt: "The Aurora Mini in cream quilted leather",
    href: "/product/aurora-mini",
  },
  {
    id: "coussin-rose",
    name: "The Coussin Rose",
    collection: "Atelier",
    priceLabel: "$420",
    imageSrc: "/community/01-pink-coussin.webp",
    imageAlt: "Soft rose coussin handbag with gold hardware",
    href: "/collection",
  },
] as const;

export const ACCOUNT_ADDRESSES_COPY = {
  eyebrow: "Delivered With Care",
  heading: "Saved Addresses",
  description: "Where your pieces arrive — quietly, precisely, and on time.",
  defaultLabel: "Default Address",
  edit: "Edit",
  change: "Change",
  addNew: "Add New Address",
  manage: "Open Address Book",
  manageHref: "/account/addresses",
} as const;

export const ACCOUNT_ADDRESSES: readonly SavedAddress[] = [
  {
    id: "home",
    label: "Home",
    line1: "14 Atelier Lane",
    city: "Islamabad",
    region: "Capital Territory",
    postal: "44000",
    country: "Pakistan",
    isDefault: true,
  },
  {
    id: "studio",
    label: "Studio",
    line1: "88 Heritage Court",
    city: "Lahore",
    region: "Punjab",
    postal: "54000",
    country: "Pakistan",
    isDefault: false,
  },
] as const;

export const ACCOUNT_PAYMENTS_COPY = {
  eyebrow: "Secure Wallet",
  heading: "Payment Methods",
  description:
    "Encrypted, discreet, and ready — never displaying more than you need to see.",
  defaultLabel: "Primary",
  addNew: "Add Payment Method",
  manage: "Open Wallet",
  manageHref: "/account/payments",
} as const;

export const ACCOUNT_PAYMENTS: readonly PaymentMethod[] = [
  {
    id: "visa-1",
    brand: "visa",
    label: "Visa",
    lastFour: "4242",
    expiry: "09/28",
    isDefault: true,
  },
  {
    id: "mc-1",
    brand: "mastercard",
    label: "Mastercard",
    lastFour: "8891",
    expiry: "03/27",
    isDefault: false,
  },
  {
    id: "apple",
    brand: "apple-pay",
    label: "Apple Pay",
    isDefault: false,
  },
  {
    id: "google",
    brand: "google-pay",
    label: "Google Pay",
    isDefault: false,
  },
] as const;

export const ACCOUNT_MEMBERSHIP = {
  eyebrow: "Coming Soon",
  heading: "Private Membership",
  description:
    "An invitation-only circle for early access, private events, and a dedicated VIP concierge.",
  lockLabel: "Reserved for Members",
  benefits: [
    "Early access to new collections",
    "Exclusive private launches",
    "Invitation-only events",
    "VIP luxury concierge",
    "Birthday atelier gifts",
  ] as const,
} as const;

export const ACCOUNT_CONCIERGE = {
  eyebrow: "Personal Stylist",
  heading: "Your AI Luxury Concierge",
  description:
    "A private guide for silhouette, colour, gifting, and care — crafted for how you live with DANOVIX.",
  capabilities: [
    "Recommend a bag for business travel",
    "Compare two saved bags",
    "Suggest gifts",
    "Find matching accessories",
    "Track my order",
    "Show my previous purchases",
    "Recommend colours",
    "Plan a complete outfit",
  ] as const,
  cta: "Start Conversation",
  startedMessage:
    "Your concierge is listening. Share an occasion, silhouette, or colour — and we will respond with quiet precision.",
} as const;

export const ACCOUNT_RECENT_COPY = {
  eyebrow: "Continue Where You Left",
  heading: "Recently Viewed",
  description:
    "Pieces you lingered with — revisited with the same quiet attention.",
} as const;

export const ACCOUNT_RECENT: readonly CollectionPiece[] = [
  {
    id: "recent-taupe",
    name: "The Taupe Lock",
    collection: "Heritage",
    priceLabel: "$510",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe lock day bag",
    href: "/collection",
  },
  {
    id: "recent-bordeaux",
    name: "The Frame Carry",
    collection: "Heritage",
    priceLabel: "$580",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Deep bordeaux frame handbag",
    href: "/collection",
  },
  {
    id: "recent-olive",
    name: "The Voyage Crossbody",
    collection: "Voyage",
    priceLabel: "$310",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Olive voyage crossbody",
    href: "/collection",
  },
  {
    id: "recent-pearl",
    name: "The Pearl Bucket",
    collection: "Atelier",
    priceLabel: "$390",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Pearl bucket bag with soft hardware",
    href: "/collection",
  },
  {
    id: "recent-forest",
    name: "The Forest Carry",
    collection: "Voyage",
    priceLabel: "$340",
    imageSrc: "/community/07-forest-unboxing.webp",
    imageAlt: "Forest green soft carry bag",
    href: "/collection",
  },
] as const;

export const ACCOUNT_CURATED_COPY = {
  eyebrow: "Chosen With Care",
  heading: "Curated For You",
  description:
    "Recommendations shaped by your purchases, private collection, and browsing — never generic.",
  cta: "Discover Piece",
} as const;

export const ACCOUNT_CURATED: readonly CollectionPiece[] = [
  {
    id: "curated-mahogany",
    name: "The Atelier Mahogany",
    collection: "Atelier",
    priceLabel: "$640",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Mahogany atelier handbag",
    href: "/collection",
  },
  {
    id: "curated-ribbons",
    name: "The Ribbon Day Bag",
    collection: "Heritage",
    priceLabel: "$470",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Taupe ribbon day bag",
    href: "/collection",
  },
  {
    id: "curated-pink",
    name: "The Soft Rose Carry",
    collection: "Édition",
    priceLabel: "$420",
    imageSrc: "/community/02-pink-unboxing.webp",
    imageAlt: "Soft rose handbag unboxing",
    href: "/collection",
  },
] as const;

export const ACCOUNT_JOURNAL_COPY = {
  eyebrow: "Editorial Inspiration",
  heading: "Luxury Journal",
  description:
    "Stories of craft, care, and how DANOVIX lives beyond the atelier.",
  read: "Read Story",
} as const;

export const ACCOUNT_JOURNAL: readonly JournalArticle[] = [
  {
    id: "new-collection",
    title: "New Collection",
    category: "Arrivals",
    excerpt: "Quiet silhouettes for the season ahead.",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "New DANOVIX collection editorial",
    href: "/collection",
  },
  {
    id: "leather-care",
    title: "Leather Care",
    category: "Atelier Notes",
    excerpt: "How full-grain leather ages with intention.",
    imageSrc: "/community/03-taupe-ribbons.webp",
    imageAlt: "Leather care editorial still",
    href: "/brand",
  },
  {
    id: "travel-styling",
    title: "Travel Styling",
    category: "Lifestyle",
    excerpt: "Carry pieces that move from cabin to city.",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Travel styling with DANOVIX bag",
    href: "/collection",
  },
  {
    id: "craftsmanship",
    title: "Behind the Craftsmanship",
    category: "Maison",
    excerpt: "Hands, time, and the quiet discipline of making.",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Craftsmanship detail of lock hardware",
    href: "/brand",
  },
] as const;

export const ACCOUNT_QUICK_ACTIONS: readonly {
  id: QuickActionId;
  label: string;
  href: string;
}[] = [
  { id: "profile", label: "Edit Profile", href: "/account/profile" },
  { id: "orders", label: "Track Orders", href: "/account/orders" },
  { id: "collection", label: "Private Collection", href: "/wishlist" },
  { id: "addresses", label: "Addresses", href: "/account/addresses" },
  { id: "payments", label: "Payments", href: "/account/payments" },
  { id: "concierge", label: "AI Concierge", href: "#concierge" },
  { id: "support", label: "Contact Support", href: "/contact" },
] as const;

export const ACCOUNT_ENTRANCE = {
  duration: 0.9,
  stagger: 0.12,
  ease: "power3.out",
} as const;

export const ORDER_STATUS_STEPS: readonly OrderStatus[] = [
  "reserved",
  "preparing",
  "shipped",
  "delivered",
] as const;

export function orderStepIndex(status: OrderStatus): number {
  return ORDER_STATUS_STEPS.indexOf(status);
}
