import type { AccountOrder, OrderStatus, SavedAddress } from "./constants";

export type OrderFilterId =
  | "all"
  | "active"
  | "preparing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

export type TimelineStep = {
  id: string;
  label: string;
  description?: string;
  completed: boolean;
  current: boolean;
  at?: string;
};

export type OrderLineItem = {
  id: string;
  name: string;
  collection: string;
  color: string;
  material: string;
  quantity: number;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  personalization?: string;
};

export type OrderPaymentInfo = {
  methodLabel: string;
  status: string;
  transactionId: string;
  dateLabel: string;
  lastFour?: string;
};

export type OrderDetailRecord = AccountOrder & {
  purchaseDateLabel: string;
  filterKey: OrderFilterId;
  timeline: readonly TimelineStep[];
  packagingTimeline: readonly TimelineStep[];
  items: readonly OrderLineItem[];
  payment: OrderPaymentInfo;
  shippingAddress: SavedAddress;
  courier?: string;
  trackingNumber?: string;
  liveStatus?: string;
};

export const ORDERS_PAGE = {
  eyebrow: "Private Atelier",
  heading: "Your Orders",
  description:
    "Track every journey from reservation to delivery with complete confidence.",
  empty: "No orders match this view. Explore your full collection when ready.",
  viewAll: "View All Orders",
} as const;

export const ORDER_DETAIL_PAGE = {
  eyebrow: "Purchase Story",
  heading: "Order Details",
  description: "Every handcrafted detail, from reservation to delivery.",
  productsHeading: "Purchased Pieces",
  shippingHeading: "Shipping Status",
  paymentHeading: "Payment",
  addressHeading: "Shipping Address",
  packagingHeading: "Luxury Packaging",
  actionsHeading: "Order Actions",
  backLabel: "Back to Orders",
} as const;

export const ORDER_FILTERS: readonly {
  id: OrderFilterId;
  label: string;
}[] = [
  { id: "all", label: "All Orders" },
  { id: "active", label: "Active" },
  { id: "preparing", label: "Preparing" },
  { id: "shipped", label: "Shipped" },
  { id: "delivered", label: "Delivered" },
  { id: "cancelled", label: "Cancelled" },
  { id: "returned", label: "Returned" },
] as const;

export const ORDER_CARD_ACTIONS = {
  track: "Track Order",
  details: "View Details",
  invoice: "Download Invoice",
  returnRequest: "Return Request",
  reorder: "Reorder",
  support: "Customer Support",
  review: "Leave Review",
} as const;

export const ORDER_DETAIL_ACTIONS = [
  { id: "reorder", label: "Reorder" },
  { id: "review", label: "Leave Review" },
  { id: "concierge", label: "Contact Concierge" },
  { id: "invoice", label: "Download Invoice" },
  { id: "return", label: "Return Item" },
] as const;

const HOME_ADDRESS: SavedAddress = {
  id: "home",
  label: "Home",
  line1: "14 Atelier Lane",
  city: "Islamabad",
  region: "Capital Territory",
  postal: "44000",
  country: "Pakistan",
  isDefault: true,
};

function buildTimeline(
  currentId: string,
  stamps: Partial<Record<string, string>> = {},
): TimelineStep[] {
  const steps = [
    {
      id: "confirmed",
      label: "Order Confirmed",
      description: "Your reservation was received by the atelier.",
    },
    {
      id: "preparing",
      label: "Preparing",
      description: "Craftspeople begin finishing your piece.",
    },
    {
      id: "inspection",
      label: "Quality Inspection",
      description: "Every stitch and edge is reviewed by hand.",
    },
    {
      id: "packaging",
      label: "Luxury Packaging",
      description: "Tissue, ribbon, and the DANOVIX seal.",
    },
    {
      id: "pickup",
      label: "Courier Pickup",
      description: "Your piece leaves the maison.",
    },
    {
      id: "delivery",
      label: "Out for Delivery",
      description: "En route to your private address.",
    },
    {
      id: "delivered",
      label: "Delivered",
      description: "Arrived with quiet ceremony.",
    },
  ] as const;

  const currentIndex = steps.findIndex((step) => step.id === currentId);

  return steps.map((step, index) => ({
    id: step.id,
    label: step.label,
    description: step.description,
    completed: index < currentIndex,
    current: index === currentIndex,
    at: stamps[step.id],
  }));
}

function buildPackaging(
  currentId: string,
): TimelineStep[] {
  const steps = [
    { id: "packaging", label: "Luxury Packaging" },
    { id: "inspection", label: "Quality Inspection" },
    { id: "wrapped", label: "Wrapped" },
    { id: "ready", label: "Ready for Shipment" },
  ] as const;

  const currentIndex = steps.findIndex((step) => step.id === currentId);

  return steps.map((step, index) => ({
    id: step.id,
    label: step.label,
    completed: index < currentIndex,
    current: index === currentIndex,
  }));
}

export const FULL_ACCOUNT_ORDERS: readonly OrderDetailRecord[] = [
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
    purchaseDateLabel: "July 22, 2026",
    filterKey: "preparing",
    courier: "DANOVIX Private Courier",
    trackingNumber: "DXC-88421-NOIR",
    liveStatus: "Atelier finishing in progress",
    timeline: buildTimeline("packaging", {
      confirmed: "Jul 22",
      preparing: "Jul 23",
      inspection: "Jul 25",
      packaging: "Jul 26",
    }),
    packagingTimeline: buildPackaging("wrapped"),
    items: [
      {
        id: "noir-tote",
        name: "The Noir Signature Tote",
        collection: "Signature",
        color: "Noir",
        material: "Italian full-grain calfskin",
        quantity: 1,
        priceLabel: "$520",
        imageSrc: "/featured/luna-tote/hero.webp",
        imageAlt: "The Noir Signature Tote in black leather",
        href: "/product/luna-tote",
        personalization: "Coming soon",
      },
    ],
    payment: {
      methodLabel: "Visa",
      status: "Paid",
      transactionId: "TXN-DX-91842",
      dateLabel: "July 22, 2026",
      lastFour: "4242",
    },
    shippingAddress: HOME_ADDRESS,
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
    purchaseDateLabel: "July 20, 2026",
    filterKey: "active",
    courier: "Awaiting assignment",
    trackingNumber: "Pending",
    liveStatus: "Reservation confirmed",
    timeline: buildTimeline("preparing", {
      confirmed: "Jul 20",
      preparing: "Jul 21",
    }),
    packagingTimeline: buildPackaging("packaging"),
    items: [
      {
        id: "celeste",
        name: "The Celeste Clutch",
        collection: "Classique",
        color: "Noir Quilted",
        material: "Quilted calfskin, silk lining",
        quantity: 1,
        priceLabel: "$349",
        imageSrc: "/featured/celeste-clutch/hero.webp",
        imageAlt: "The Celeste Clutch in quilted black leather",
        href: "/product/celeste-clutch",
      },
    ],
    payment: {
      methodLabel: "Mastercard",
      status: "Authorized",
      transactionId: "TXN-DX-91705",
      dateLabel: "July 20, 2026",
      lastFour: "8891",
    },
    shippingAddress: HOME_ADDRESS,
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
    purchaseDateLabel: "July 18, 2026",
    filterKey: "shipped",
    courier: "DANOVIX Express",
    trackingNumber: "DXC-77102-AUR",
    liveStatus: "Out for delivery — Islamabad",
    timeline: buildTimeline("delivery", {
      confirmed: "Jul 18",
      preparing: "Jul 19",
      inspection: "Jul 20",
      packaging: "Jul 21",
      pickup: "Jul 22",
      delivery: "Jul 28",
    }),
    packagingTimeline: buildPackaging("ready"),
    items: [
      {
        id: "aurora",
        name: "The Aurora Mini",
        collection: "Édition",
        color: "Cream Quilted",
        material: "Quilted Italian leather",
        quantity: 1,
        priceLabel: "$249",
        imageSrc: "/featured/aurora-mini/hero.webp",
        imageAlt: "The Aurora Mini in cream quilted leather",
        href: "/product/aurora-mini",
      },
    ],
    payment: {
      methodLabel: "Apple Pay",
      status: "Paid",
      transactionId: "TXN-DX-91220",
      dateLabel: "July 18, 2026",
    },
    shippingAddress: {
      id: "studio",
      label: "Studio",
      line1: "88 Heritage Court",
      city: "Lahore",
      region: "Punjab",
      postal: "54000",
      country: "Pakistan",
      isDefault: false,
    },
  },
  {
    id: "ord-coussin",
    productName: "The Coussin Rose",
    collection: "Atelier",
    status: "delivered",
    statusLabel: "Delivered",
    progress: 100,
    estimatedDelivery: "July 12",
    imageSrc: "/community/01-pink-coussin.webp",
    imageAlt: "Soft rose coussin handbag with gold hardware",
    orderNumber: "DX-20110",
    placedAt: "2026-07-05",
    purchaseDateLabel: "July 5, 2026",
    filterKey: "delivered",
    courier: "DANOVIX Private Courier",
    trackingNumber: "DXC-65011-ROS",
    liveStatus: "Delivered with care",
    timeline: buildTimeline("delivered", {
      confirmed: "Jul 5",
      preparing: "Jul 6",
      inspection: "Jul 7",
      packaging: "Jul 8",
      pickup: "Jul 9",
      delivery: "Jul 11",
      delivered: "Jul 12",
    }),
    packagingTimeline: buildPackaging("ready"),
    items: [
      {
        id: "coussin",
        name: "The Coussin Rose",
        collection: "Atelier",
        color: "Soft Rose",
        material: "Pebbled calfskin",
        quantity: 1,
        priceLabel: "$420",
        imageSrc: "/community/01-pink-coussin.webp",
        imageAlt: "Soft rose coussin handbag with gold hardware",
        href: "/collection",
      },
    ],
    payment: {
      methodLabel: "Visa",
      status: "Paid",
      transactionId: "TXN-DX-89014",
      dateLabel: "July 5, 2026",
      lastFour: "4242",
    },
    shippingAddress: HOME_ADDRESS,
  },
  {
    id: "ord-taupe",
    productName: "The Taupe Lock",
    collection: "Heritage",
    status: "delivered",
    statusLabel: "Returned",
    progress: 100,
    estimatedDelivery: "June 20",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Warm taupe lock day bag",
    orderNumber: "DX-19840",
    placedAt: "2026-06-08",
    purchaseDateLabel: "June 8, 2026",
    filterKey: "returned",
    courier: "DANOVIX Returns",
    trackingNumber: "DXR-44120-TAU",
    liveStatus: "Return received by atelier",
    timeline: buildTimeline("delivered", {
      confirmed: "Jun 8",
      preparing: "Jun 9",
      inspection: "Jun 10",
      packaging: "Jun 11",
      pickup: "Jun 12",
      delivery: "Jun 18",
      delivered: "Jun 20",
    }),
    packagingTimeline: buildPackaging("ready"),
    items: [
      {
        id: "taupe",
        name: "The Taupe Lock",
        collection: "Heritage",
        color: "Warm Taupe",
        material: "Heritage calfskin",
        quantity: 1,
        priceLabel: "$510",
        imageSrc: "/community/04-taupe-lock.webp",
        imageAlt: "Warm taupe lock day bag",
        href: "/collection",
      },
    ],
    payment: {
      methodLabel: "Mastercard",
      status: "Refunded",
      transactionId: "TXN-DX-87102",
      dateLabel: "June 8, 2026",
      lastFour: "8891",
    },
    shippingAddress: HOME_ADDRESS,
  },
  {
    id: "ord-bordeaux",
    productName: "The Frame Carry",
    collection: "Heritage",
    status: "reserved",
    statusLabel: "Cancelled",
    progress: 12,
    estimatedDelivery: "—",
    imageSrc: "/community/05-bordeaux-kelly.webp",
    imageAlt: "Deep bordeaux frame handbag",
    orderNumber: "DX-19772",
    placedAt: "2026-06-01",
    purchaseDateLabel: "June 1, 2026",
    filterKey: "cancelled",
    liveStatus: "Reservation released",
    timeline: buildTimeline("confirmed", {
      confirmed: "Jun 1",
    }),
    packagingTimeline: buildPackaging("packaging"),
    items: [
      {
        id: "bordeaux",
        name: "The Frame Carry",
        collection: "Heritage",
        color: "Bordeaux",
        material: "Smooth calfskin",
        quantity: 1,
        priceLabel: "$580",
        imageSrc: "/community/05-bordeaux-kelly.webp",
        imageAlt: "Deep bordeaux frame handbag",
        href: "/collection",
      },
    ],
    payment: {
      methodLabel: "Visa",
      status: "Released",
      transactionId: "TXN-DX-86990",
      dateLabel: "June 1, 2026",
      lastFour: "4242",
    },
    shippingAddress: HOME_ADDRESS,
  },
];

export function filterOrders(
  orders: readonly OrderDetailRecord[],
  filter: OrderFilterId,
): OrderDetailRecord[] {
  if (filter === "all") return [...orders];
  if (filter === "active") {
    return orders.filter((order) =>
      (["reserved", "preparing", "shipped"] as OrderStatus[]).includes(
        order.status,
      ) && order.filterKey !== "cancelled" && order.filterKey !== "returned",
    );
  }
  if (filter === "preparing") {
    return orders.filter(
      (order) =>
        order.status === "preparing" || order.filterKey === "preparing",
    );
  }
  if (filter === "shipped") {
    return orders.filter((order) => order.status === "shipped");
  }
  if (filter === "delivered") {
    return orders.filter(
      (order) =>
        order.status === "delivered" && order.filterKey === "delivered",
    );
  }
  return orders.filter((order) => order.filterKey === filter);
}

export function getOrderById(id: string): OrderDetailRecord | undefined {
  return FULL_ACCOUNT_ORDERS.find((order) => order.id === id);
}

export function getOrderDetailIds(): string[] {
  return FULL_ACCOUNT_ORDERS.map((order) => order.id);
}
