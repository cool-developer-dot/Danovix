export type FooterNavLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterNavColumn = {
  id: string;
  title: string;
  links: readonly FooterNavLink[];
};

export type FooterTrustChip = {
  id: string;
  label: string;
  icon: "package" | "shield-check" | "truck" | "rotate-ccw";
};

export type FooterSocialLink = {
  id: string;
  label: string;
  href: string;
  network: "instagram" | "pinterest" | "tiktok" | "facebook";
};

export type FooterPaymentMethod = {
  id: string;
  label: string;
  network: "apple-pay" | "visa" | "mastercard" | "paypal" | "stripe";
};

export const FOOTER_EDITORIAL = {
  lines: ["Every Journey", "Deserves Timeless Luxury."] as const,
  accent: "Carry Confidence." as const,
} as const;

export const FOOTER_NEWSLETTER = {
  heading: "Join the DANOVIX Journal." as const,
  description:
    "Receive early access to new collections, exclusive editorials, craftsmanship stories, and timeless style inspiration." as const,
  placeholder: "Enter your email address" as const,
  button: "Join the Journal" as const,
  success: "Welcome to the Journal." as const,
} as const;

export const FOOTER_BRAND = {
  wordmark: "DANOVIX" as const,
  paragraph: [
    "Crafting timeless essentials",
    "for women who value",
    "quality, elegance,",
    "and thoughtful design.",
  ] as const,
} as const;

export const FOOTER_SOCIAL: readonly FooterSocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/danovix",
    network: "instagram",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    href: "https://pinterest.com/danovix",
    network: "pinterest",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@danovix",
    network: "tiktok",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/danovix",
    network: "facebook",
  },
] as const;

export const FOOTER_COLUMNS: readonly FooterNavColumn[] = [
  {
    id: "collections",
    title: "Collections",
    links: [
      { id: "handbags", label: "Handbags", href: "/#collection" },
      { id: "new-arrivals", label: "New Arrivals", href: "/#collection" },
      { id: "best-sellers", label: "Best Sellers", href: "/#collection" },
      { id: "coming-soon", label: "Coming Soon", href: "/#collection" },
      { id: "gift-cards", label: "Gift Cards", href: "/#contact" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { id: "about", label: "About", href: "/#about" },
      { id: "craftsmanship", label: "Craftsmanship", href: "/#craftsmanship" },
      { id: "journal", label: "Journal", href: "/#journal" },
      { id: "community", label: "Community", href: "/#community" },
      { id: "our-story", label: "Our Story", href: "/#about" },
      { id: "careers", label: "Careers", href: "/#contact" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { id: "contact", label: "Contact", href: "/#contact" },
      { id: "shipping", label: "Shipping", href: "/#faq" },
      { id: "returns", label: "Returns", href: "/#faq" },
      { id: "faq", label: "FAQ", href: "/#faq" },
      { id: "privacy", label: "Privacy Policy", href: "/#contact" },
      { id: "terms", label: "Terms", href: "/#contact" },
    ],
  },
] as const;

export const FOOTER_TRUST: readonly FooterTrustChip[] = [
  { id: "packaging", label: "Premium Packaging", icon: "package" },
  { id: "payments", label: "Secure Payments", icon: "shield-check" },
  { id: "shipping", label: "Complimentary Shipping", icon: "truck" },
  { id: "returns", label: "30-Day Returns", icon: "rotate-ccw" },
] as const;

export const FOOTER_PAYMENTS: readonly FooterPaymentMethod[] = [
  { id: "apple-pay", label: "Apple Pay", network: "apple-pay" },
  { id: "visa", label: "Visa", network: "visa" },
  { id: "mastercard", label: "Mastercard", network: "mastercard" },
  { id: "paypal", label: "PayPal", network: "paypal" },
  { id: "stripe", label: "Stripe", network: "stripe" },
] as const;

export const FOOTER_JOURNEY = {
  label: "Follow the Journey" as const,
  handle: "@DANOVIX" as const,
  button: "Follow on Instagram" as const,
  href: "https://instagram.com/danovix" as const,
} as const;

export const FOOTER_SIGNATURE = {
  lead: "Designed with timeless craftsmanship." as const,
  copyright: "© 2026 DANOVIX" as const,
  trail: "Made for modern journeys." as const,
} as const;

/** Choreographed entrance — luxury pacing. */
export const FOOTER_ENTRANCE = {
  duration: 1.05,
  stagger: 0.14,
  ease: "power4.out",
  y: 36,
  clipY: "110%",
} as const;
