export type ExperienceAction = {
  id: string;
  label: string;
  href?: string;
  primary?: boolean;
};

export const EXPERIENCE_404 = {
  eyebrow: "Private Atelier",
  heading: "This Piece Couldn't Be Found.",
  description:
    "The page you're looking for may have moved, but your journey through DANOVIX continues.",
  actions: [
    { id: "home", label: "Return Home", href: "/", primary: true },
    { id: "collection", label: "Explore Collection", href: "/collection" },
    { id: "search", label: "Search Collection", href: "/search" },
    { id: "stylist", label: "Ask AI Concierge", href: "/stylist" },
  ] as const satisfies readonly ExperienceAction[],
  ai: {
    eyebrow: "AI Stylist",
    heading: "Looking for something specific?",
    description:
      "Describe the handbag you're searching for and our AI Stylist will recommend similar pieces.",
    cta: "Start Conversation",
    ctaHref: "/stylist",
  },
} as const;

export const EXPERIENCE_ERROR = {
  eyebrow: "A Quiet Pause",
  heading: "Something Interrupted The Experience.",
  description:
    "Our team has already been notified. Please try again in a moment while we restore your experience.",
  actions: [
    { id: "retry", label: "Try Again", primary: true },
    { id: "home", label: "Return Home", href: "/" },
    { id: "contact", label: "Contact Concierge", href: "/contact" },
  ] as const satisfies readonly ExperienceAction[],
} as const;

export const EXPERIENCE_OFFLINE = {
  eyebrow: "Connection Paused",
  heading: "You're Temporarily Offline.",
  description:
    "Your journey has been safely preserved. We'll reconnect as soon as you're back online.",
  actions: [
    { id: "retry", label: "Retry Connection", primary: true },
    { id: "wishlist", label: "Saved Collection", href: "/wishlist" },
    { id: "discoveries", label: "Recently Viewed", href: "/discoveries" },
    { id: "collection", label: "Cached Collection", href: "/collection" },
  ] as const satisfies readonly ExperienceAction[],
} as const;

export const EXPERIENCE_SEARCH_EMPTY = {
  eyebrow: "Discovery Continues",
  heading: "We Couldn't Find That Piece.",
  description:
    "Try another search, or explore our curated collections for timeless inspiration.",
  trending: [
    {
      id: "business",
      title: "Business Collection",
      href: "/collection",
      imageSrc: "/community/04-taupe-lock.webp",
    },
    {
      id: "evening",
      title: "Evening Collection",
      href: "/collection",
      imageSrc: "/featured/celeste-clutch/hero.webp",
    },
    {
      id: "travel",
      title: "Travel Essentials",
      href: "/collection",
      imageSrc: "/community/06-olive-unboxing.webp",
    },
    {
      id: "bestsellers",
      title: "Best Sellers",
      href: "/collection",
      imageSrc: "/featured/luna-tote/hero.webp",
    },
    {
      id: "new",
      title: "New Arrivals",
      href: "/collection",
      imageSrc: "/featured/aurora-mini/hero.webp",
    },
    {
      id: "gifts",
      title: "Luxury Gifts",
      href: "/gift-finder",
      imageSrc: "/community/02-pink-unboxing.webp",
    },
  ] as const,
  ai: {
    eyebrow: "AI Concierge",
    heading: "Describe your style",
    description:
      "Our AI Stylist will curate recommendations just for you.",
    cta: "Meet Your Stylist",
    ctaHref: "/stylist",
  },
} as const;

export const EXPERIENCE_WISHLIST_EMPTY = {
  heading: "Your Private Collection Awaits.",
  description:
    "Save timeless pieces that inspire you, and return whenever the moment feels right.",
  cta: "Explore Collection",
  ctaHref: "/collection",
} as const;

export const EXPERIENCE_RESERVED_EMPTY = {
  heading: "Your Next Signature Piece Awaits.",
  description:
    "Every remarkable journey begins with one timeless piece.",
  cta: "Explore Collection",
  ctaHref: "/collection",
  featured: [
    {
      id: "featured",
      title: "Featured Collection",
      href: "/collection",
      imageSrc: "/featured/luna-tote/hero.webp",
    },
    {
      id: "bestsellers",
      title: "Best Sellers",
      href: "/collection",
      imageSrc: "/community/05-bordeaux-kelly.webp",
    },
    {
      id: "new",
      title: "New Arrivals",
      href: "/collection",
      imageSrc: "/featured/aurora-mini/hero.webp",
    },
    {
      id: "essentials",
      title: "Luxury Essentials",
      href: "/collection",
      imageSrc: "/community/09-pearl-bucket.webp",
    },
  ] as const,
  ai: {
    eyebrow: "AI Concierge",
    heading: "Tell me what you're looking for",
    description:
      "I'll help you choose the perfect handbag.",
    cta: "Ask Concierge",
    ctaHref: "/stylist",
  },
} as const;

export const AI_LOADING = {
  eyebrow: "Private Stylist",
  messages: [
    "Curating recommendations inspired by your personal style...",
    "Considering silhouette, colour, and occasion...",
    "Composing a quiet selection just for you...",
  ] as const,
} as const;

export const CHECKOUT_LOADING_STEPS = [
  "Verifying Order",
  "Preparing Secure Checkout",
  "Confirming Payment",
  "Finalizing Your Journey",
] as const;

export const SUCCESS_ORDER = {
  eyebrow: "Confirmed",
  heading: "Your Journey Begins.",
  description:
    "Your order has been confirmed, and our artisans are preparing your piece with exceptional care.",
  orderLabel: "Order Number",
  deliveryLabel: "Estimated Delivery",
  packagingLabel: "Packaging Status",
  packagingValue: "Atelier preparation underway",
  actions: [
    { id: "track", label: "Track Order", href: "/account/orders", primary: true },
    { id: "dashboard", label: "View Dashboard", href: "/account" },
    { id: "shop", label: "Continue Shopping", href: "/collection" },
  ] as const satisfies readonly ExperienceAction[],
  timeline: [
    { id: "confirmed", label: "Order Confirmed", current: true },
    { id: "preparing", label: "Preparing", current: false },
    { id: "packaging", label: "Luxury Packaging", current: false },
    { id: "shipped", label: "In Transit", current: false },
    { id: "delivered", label: "Delivered", current: false },
  ] as const,
} as const;

export const SUCCESS_PAYMENT = {
  eyebrow: "Secure Confirmation",
  heading: "Payment Successfully Received.",
  description:
    "Thank you for placing your trust in DANOVIX. Your order is now being prepared.",
  actions: [
    { id: "order", label: "View Order", href: "/account/orders", primary: true },
    { id: "home", label: "Return Home", href: "/" },
  ] as const satisfies readonly ExperienceAction[],
} as const;

export const SUCCESS_PASSWORD = {
  eyebrow: "Secure Access",
  heading: "You're Ready To Continue.",
  description:
    "Your password has been updated successfully. Welcome back to your private DANOVIX experience.",
  actions: [
    { id: "account", label: "Continue to Dashboard", href: "/account", primary: true },
    { id: "login", label: "Sign In", href: "/signup?face=login" },
  ] as const satisfies readonly ExperienceAction[],
} as const;

export const SUCCESS_SIGNUP = {
  eyebrow: "Private Membership",
  heading: "Welcome To DANOVIX.",
  description: "Your private luxury journey begins today.",
  actions: [
    { id: "collection", label: "Explore Collection", href: "/collection", primary: true },
    { id: "profile", label: "Complete Profile", href: "/account/profile" },
    { id: "stylist", label: "Meet AI Concierge", href: "/stylist" },
  ] as const satisfies readonly ExperienceAction[],
} as const;

export const SUCCESS_REVIEW = {
  eyebrow: "Shared With Care",
  heading: "Thank You For Sharing Your Experience.",
  description:
    "Your insight helps others discover timeless craftsmanship with confidence.",
  actions: [
    { id: "collection", label: "Continue Shopping", href: "/collection", primary: true },
    { id: "stylist", label: "Recommended Collection", href: "/stylist" },
  ] as const satisfies readonly ExperienceAction[],
} as const;

export const SUCCESS_RETURN = {
  eyebrow: "Return Concierge",
  heading: "Your Request Has Been Received.",
  description:
    "We're here to make every part of your experience effortless. We'll guide you through every step.",
  status: "Return Received",
  nextSteps: [
    "Confirm item condition and packaging",
    "Receive prepaid shipping label by email",
    "Hand to courier within 7 days",
    "Inspection and refund within 5–10 business days",
  ] as const,
  actions: [
    { id: "orders", label: "View Orders", href: "/account/orders", primary: true },
    { id: "contact", label: "Contact Concierge", href: "/contact" },
  ] as const satisfies readonly ExperienceAction[],
} as const;
