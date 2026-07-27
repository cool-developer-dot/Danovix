import type { LucideIcon } from "lucide-react";
import { Infinity, Layers, ShieldCheck } from "lucide-react";

export const NAV_LINKS = [
  { label: "Collection", href: "/collection" },
  { label: "Stylist", href: "/stylist" },
  { label: "Gifts", href: "/gift-finder" },
  { label: "About", href: "/#about" },
  { label: "Craftsmanship", href: "/#craftsmanship" },
  { label: "Contact", href: "/#contact" },
] as const;

export const HERO_DESCRIPTION =
  "Handcrafted leather handbags defined by restraint, precision, and enduring form — designed for women who understand that true elegance never announces itself.";

export const HERO_PRIMARY_CTA = "Shop Collection";
export const HERO_SECONDARY_CTA = "Explore Craftsmanship";

export type HeroFeature = {
  icon: LucideIcon;
  label: string;
};

export const HERO_FEATURES: HeroFeature[] = [
  { icon: Layers, label: "Premium Leather" },
  { icon: ShieldCheck, label: "Lifetime Quality" },
  { icon: Infinity, label: "Designed to Last" },
];

export const HERO_TRUST = {
  line: "Designed with premium craftsmanship",
  subline: "Loved by modern women worldwide",
} as const;

export const ANIMATION = {
  ease: "power3.out",
  easeLuxury: "power4.out",
  duration: {
    navbar: 1.1,
    logo: 0.9,
    nav: 0.8,
    description: 0.95,
    buttons: 0.8,
    features: 0.65,
    featureStagger: 0.12,
    trust: 0.75,
    scrollIndicator: 0.8,
  },
  delay: {
    navbar: 0.2,
    logo: 0.5,
    nav: 0.7,
    description: 1.1,
    buttons: 1.7,
    features: 2.2,
    trust: 2.7,
    scrollIndicator: 3.3,
  },
} as const;
