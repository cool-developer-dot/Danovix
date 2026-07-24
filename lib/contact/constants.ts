import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Gift,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export type ContactTopicId =
  | "product-advice"
  | "order-tracking"
  | "returns"
  | "gift-assistance"
  | "business-partnerships"
  | "general";

export type QuickContactMethod = {
  id: string;
  label: string;
  value: string;
  detail: string;
  href: string;
  icon: LucideIcon;
};

export type HelpCategory = {
  id: ContactTopicId;
  label: string;
  description: string;
  icon: LucideIcon;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SocialNetwork = {
  id: string;
  label: string;
  href: string;
  network: "instagram" | "pinterest" | "tiktok" | "facebook";
};

export const CONTACT_HERO = {
  eyebrow: "Private Concierge",
  headline: ["We're Here", "For Every Journey."] as const,
  description:
    "A personal conversation with the DANOVIX care team — thoughtful guidance for styling, gifting, and every detail that matters to you.",
  cta: "Speak With Us",
  ctaHref: "#speak-with-us",
  scrollLabel: "Discover",
} as const;

export const QUICK_CONTACT: readonly QuickContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "care@danovix.com",
    detail: "We reply with care",
    href: "mailto:care@danovix.com",
    icon: Mail,
  },
  {
    id: "live",
    label: "Live Concierge",
    value: "Chat with a specialist",
    detail: "Available weekdays",
    href: "#speak-with-us",
    icon: MessageCircle,
  },
  {
    id: "phone",
    label: "Phone Support",
    value: "+1 (212) 555-0148",
    detail: "Mon–Fri, 9 AM–6 PM EST",
    href: "tel:+12125550148",
    icon: Phone,
  },
  {
    id: "office",
    label: "Head Office",
    value: "New York, NY",
    detail: "By appointment",
    href: "#meet-concierge",
    icon: MapPin,
  },
] as const;

export const HELP_CATEGORIES: readonly HelpCategory[] = [
  {
    id: "product-advice",
    label: "Product Advice",
    description: "Styling, materials, and collection guidance",
    icon: Sparkles,
  },
  {
    id: "order-tracking",
    label: "Order Tracking",
    description: "Status updates and delivery details",
    icon: Package,
  },
  {
    id: "returns",
    label: "Returns",
    description: "Exchanges and return assistance",
    icon: RotateCcw,
  },
  {
    id: "gift-assistance",
    label: "Gift Assistance",
    description: "Thoughtful gifting and personal notes",
    icon: Gift,
  },
  {
    id: "business-partnerships",
    label: "Business Partnerships",
    description: "Press, wholesale, and collaborations",
    icon: Briefcase,
  },
  {
    id: "general",
    label: "General Questions",
    description: "Anything else we can help with",
    icon: HelpCircle,
  },
] as const;

export const TOPIC_LABELS: Record<ContactTopicId, string> = {
  "product-advice": "Product Advice",
  "order-tracking": "Order Tracking",
  returns: "Returns",
  "gift-assistance": "Gift Assistance",
  "business-partnerships": "Business Partnerships",
  general: "General Questions",
};

export const CONCIERGE_FORM = {
  eyebrow: "Personal Attention",
  heading: "Speak With Our Team",
  description:
    "Share a few details and a member of our concierge team will respond with care.",
  fields: {
    name: { label: "Full Name", placeholder: "Your full name" },
    email: { label: "Email", placeholder: "you@example.com" },
    topic: { label: "Topic", placeholder: "How can we help?" },
    order: {
      label: "Order Number",
      placeholder: "Optional",
      hint: "Optional",
    },
    message: {
      label: "Message",
      placeholder: "Tell us how we can assist you…",
    },
    attachment: {
      label: "Attachment",
      placeholder: "Add a photo or document",
      hint: "Optional · PDF, JPG, or PNG",
    },
  },
  submit: "Send Message",
  success: {
    title: "Your message has been received.",
    body: "A DANOVIX specialist will be in touch shortly. Thank you for trusting us with your journey.",
  },
} as const;

export const AI_CONCIERGE = {
  eyebrow: "Signature Service",
  heading: "Need Help Instantly?",
  description:
    "Our AI Concierge is ready to assist with thoughtful, immediate guidance.",
  capabilities: [
    "Product recommendations",
    "Collection guidance",
    "Order tracking",
    "Product care",
    "Shipping information",
    "Returns",
  ] as const,
  cta: "Start Conversation",
  welcome:
    "Welcome. I'm the DANOVIX AI Concierge. How may I assist you today?",
  prompts: [
    "Help me choose a bag",
    "Track my order",
    "Care instructions",
    "Shipping timelines",
  ] as const,
  closing: "A specialist can continue anytime — simply send us a message.",
} as const;

export const AI_SHOPPING_CONCIERGE = {
  heading: "AI Shopping Concierge",
  subtitle: "Personalized recommendations powered by AI.",
  description: "Need help choosing the perfect handbag?",
  lead: "Our AI Concierge can help you:",
  capabilities: [
    "Discover the right collection",
    "Compare products",
    "Find the perfect size",
    "Recommend colors",
    "Explain craftsmanship",
    "Answer product questions",
    "Track your order",
    "Help with returns",
  ] as const,
  cta: "Start AI Conversation",
  availability: ["Available 24/7", "Instant Assistance"] as const,
} as const;

export const MEET_CONCIERGE = {
  eyebrow: "Your Specialist",
  title: "Your DANOVIX Concierge",
  description:
    "Our specialists are here to provide personalized assistance with styling, gifting, collections, and order support.",
  portraitAlt: "DANOVIX concierge portrait",
  stats: [
    { label: "Average Response", value: "Under 2 Hours" },
    { label: "Availability", value: "Monday–Friday" },
    { label: "Hours", value: "9 AM – 6 PM EST" },
  ] as const,
} as const;

export const CUSTOMER_PROMISE = {
  lines: [
    "Every message is personally reviewed",
    "by our customer care specialists.",
  ] as const,
  supporting:
    "Exceptional craftsmanship deserves exceptional service.",
} as const;

export const CONTACT_FAQ: readonly FaqItem[] = [
  {
    id: "shipping",
    question: "Shipping",
    answer:
      "Complimentary shipping is offered on qualifying orders within the United States. Orders are carefully prepared and typically depart within 1–2 business days. You will receive tracking details as soon as your piece is on its way.",
  },
  {
    id: "returns",
    question: "Returns",
    answer:
      "We offer a thoughtful 30-day return window for unworn pieces in their original condition with all packaging. Our concierge team will guide you through a seamless return or exchange.",
  },
  {
    id: "warranty",
    question: "Warranty",
    answer:
      "Every DANOVIX piece is covered by our craftsmanship guarantee. Should a manufacturing concern arise, our care team will assess and resolve it with the attention your piece deserves.",
  },
  {
    id: "payments",
    question: "Payments",
    answer:
      "We accept major credit cards, Apple Pay, PayPal, and other secure methods. All transactions are encrypted and processed with the highest standard of protection.",
  },
  {
    id: "product-care",
    question: "Product Care",
    answer:
      "Care for your leather with a soft dry cloth and store it away from direct sunlight when not in use. Detailed care guidance accompanies every piece, and our team is always available for personalized advice.",
  },
] as const;

export const EDITORIAL_QUOTE = {
  lines: [
    "Luxury is remembered",
    "by how it makes you feel.",
  ] as const,
  supporting: "Not just by what you buy.",
} as const;

export const SOCIAL_JOURNEY = {
  eyebrow: "Stay Close",
  heading: "Follow Our Journey",
  description:
    "Discover new collections, craftsmanship stories, and quiet moments from the world of DANOVIX.",
  cta: "Follow Our Journey",
  ctaHref: "https://instagram.com/danovix",
  networks: [
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
  ] as const satisfies readonly SocialNetwork[],
} as const;

export const CONTACT_ENTRANCE = {
  duration: 1.05,
  stagger: 0.12,
  ease: "power4.out",
  softEase: "power3.out",
  y: 36,
  clipY: "110%",
  cardStagger: 0.1,
} as const;

export const CONTACT_PAGE_META = {
  title: "Concierge",
  description:
    "Speak with the DANOVIX private concierge — personalized assistance for styling, gifting, orders, and every detail of your journey.",
} as const;
