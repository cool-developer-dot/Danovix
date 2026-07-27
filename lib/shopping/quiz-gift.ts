import { COMPARE_PIECES } from "./pieces";

export const QUIZ_PAGE = {
  eyebrow: "Private Consultation",
  heading: "Discover Your Signature Style.",
  description:
    "Answer a few thoughtful questions and allow our AI Stylist to curate a collection designed around your lifestyle.",
  next: "Continue",
  back: "Back",
  finish: "Reveal My Collection",
  restart: "Begin Again",
  resultsEyebrow: "Your Consultation",
  resultsHeading: "Your Signature Collection.",
  personalityLabel: "Style Personality",
  introPrefix: "Our stylist has prepared",
} as const;

export type QuizStepId =
  | "occasion"
  | "colour"
  | "lifestyle"
  | "budget"
  | "carrying"
  | "material";

export type QuizOption = {
  id: string;
  label: string;
  swatch?: string;
};

export type QuizStep = {
  id: QuizStepId;
  question: string;
  hint: string;
  multi?: boolean;
  options: readonly QuizOption[];
};

export const QUIZ_STEPS: readonly QuizStep[] = [
  {
    id: "occasion",
    question: "Where will this piece live with you?",
    hint: "Choose the occasion that feels most true.",
    options: [
      { id: "business", label: "Business" },
      { id: "travel", label: "Travel" },
      { id: "evening", label: "Evening" },
      { id: "university", label: "University" },
      { id: "events", label: "Luxury Events" },
      { id: "daily", label: "Daily" },
    ],
  },
  {
    id: "colour",
    question: "Which colours feel like home?",
    hint: "Select one or more tones.",
    multi: true,
    options: [
      { id: "black", label: "Black", swatch: "#1a1a1a" },
      { id: "cognac", label: "Cognac", swatch: "#8B5A2B" },
      { id: "chocolate", label: "Chocolate", swatch: "#4A2F23" },
      { id: "ivory", label: "Ivory", swatch: "#F3EDE3" },
      { id: "forest", label: "Forest Green", swatch: "#2F4F3E" },
      { id: "navy", label: "Navy", swatch: "#1B2A41" },
      { id: "burgundy", label: "Burgundy", swatch: "#6B1E2A" },
    ],
  },
  {
    id: "lifestyle",
    question: "How would you describe your rhythm?",
    hint: "One word that feels closest.",
    options: [
      { id: "minimalist", label: "Minimalist" },
      { id: "professional", label: "Professional" },
      { id: "executive", label: "Executive" },
      { id: "traveller", label: "Frequent Traveller" },
      { id: "creative", label: "Creative" },
      { id: "student", label: "Student" },
      { id: "enthusiast", label: "Luxury Enthusiast" },
    ],
  },
  {
    id: "budget",
    question: "What investment feels considered?",
    hint: "Elegant ranges — never a slider.",
    options: [
      { id: "entry", label: "Under $300" },
      { id: "mid", label: "$300 – $450" },
      { id: "elevated", label: "$450 – $600" },
      { id: "atelier", label: "$600 & Above" },
    ],
  },
  {
    id: "carrying",
    question: "What must it carry with ease?",
    hint: "Select everything that matters.",
    multi: true,
    options: [
      { id: "laptop", label: "Laptop" },
      { id: "tablet", label: "Tablet" },
      { id: "passport", label: "Passport" },
      { id: "travel", label: "Travel" },
      { id: "business", label: "Business" },
      { id: "daily", label: "Daily Essentials" },
      { id: "photography", label: "Photography" },
    ],
  },
  {
    id: "material",
    question: "Which finish speaks to you?",
    hint: "The touch you return to.",
    options: [
      { id: "smooth", label: "Smooth Leather" },
      { id: "textured", label: "Textured Leather" },
      { id: "matte", label: "Matte Finish" },
      { id: "grain", label: "Luxury Grain" },
      { id: "soft", label: "Soft Finish" },
    ],
  },
] as const;

export type StylePersonality =
  | "Luxury Minimalist"
  | "Urban Professional"
  | "Timeless Classic"
  | "Modern Executive"
  | "Weekend Explorer"
  | "Sophisticated Traveller";

export function resolveQuizPersonality(answers: Record<string, string[]>): {
  personality: StylePersonality;
  intro: string;
  products: typeof COMPARE_PIECES;
} {
  const lifestyle = answers.lifestyle?.[0] ?? "professional";
  const occasion = answers.occasion?.[0] ?? "daily";

  let personality: StylePersonality = "Timeless Classic";
  if (lifestyle === "minimalist") personality = "Luxury Minimalist";
  else if (lifestyle === "executive" || lifestyle === "professional")
    personality = occasion === "travel" ? "Sophisticated Traveller" : "Modern Executive";
  else if (lifestyle === "traveller") personality = "Sophisticated Traveller";
  else if (lifestyle === "creative") personality = "Weekend Explorer";
  else if (lifestyle === "enthusiast") personality = "Urban Professional";

  const products =
    occasion === "evening"
      ? [COMPARE_PIECES[1], COMPARE_PIECES[2], COMPARE_PIECES[5]]
      : occasion === "travel"
        ? [COMPARE_PIECES[4], COMPARE_PIECES[0], COMPARE_PIECES[2]]
        : [COMPARE_PIECES[0], COMPARE_PIECES[3], COMPARE_PIECES[5]];

  return {
    personality,
    intro: `A ${personality.toLowerCase()} collection — composed for how you move, what you carry, and the colours you return to.`,
    products,
  };
}

export const GIFT_PAGE = {
  eyebrow: "Gift Atelier",
  heading: "Find The Perfect Gift.",
  description:
    "Thoughtfully curated recommendations for every meaningful occasion.",
  next: "Continue",
  back: "Back",
  finish: "Reveal Gifts",
  restart: "Start Over",
  resultsEyebrow: "Curated For Them",
  resultsHeading: "A Gift, Considered.",
  presentationHeading: "Complete Presentation",
  ctaHeading: "Need More Help?",
  ctaDescription:
    "Speak with your AI Luxury Concierge for a more personal recommendation.",
  cta: "Start Conversation",
} as const;

export type GiftStepId = "recipient" | "occasion" | "budget" | "style";

export type GiftStep = {
  id: GiftStepId;
  question: string;
  hint: string;
  options: readonly QuizOption[];
};

export const GIFT_STEPS: readonly GiftStep[] = [
  {
    id: "recipient",
    question: "Who are you shopping for?",
    hint: "Begin with the person in mind.",
    options: [
      { id: "wife", label: "Wife" },
      { id: "mother", label: "Mother" },
      { id: "sister", label: "Sister" },
      { id: "friend", label: "Friend" },
      { id: "bride", label: "Bride" },
      { id: "graduate", label: "Graduate" },
      { id: "colleague", label: "Colleague" },
      { id: "yourself", label: "Yourself" },
    ],
  },
  {
    id: "occasion",
    question: "What is the occasion?",
    hint: "Every gift deserves a reason.",
    options: [
      { id: "birthday", label: "Birthday" },
      { id: "anniversary", label: "Anniversary" },
      { id: "wedding", label: "Wedding" },
      { id: "promotion", label: "Promotion" },
      { id: "graduation", label: "Graduation" },
      { id: "holiday", label: "Holiday" },
      { id: "mothers", label: "Mother's Day" },
      { id: "valentines", label: "Valentine's Day" },
      { id: "christmas", label: "Christmas" },
    ],
  },
  {
    id: "budget",
    question: "What budget feels generous?",
    hint: "Premium ranges, presented with care.",
    options: [
      { id: "under300", label: "Under $300" },
      { id: "300450", label: "$300 – $450" },
      { id: "450600", label: "$450 – $600" },
      { id: "above600", label: "$600 & Above" },
    ],
  },
  {
    id: "style",
    question: "Which style feels right?",
    hint: "The mood of the gift.",
    options: [
      { id: "minimal", label: "Minimal" },
      { id: "luxury", label: "Luxury" },
      { id: "business", label: "Business" },
      { id: "travel", label: "Travel" },
      { id: "classic", label: "Classic" },
      { id: "modern", label: "Modern" },
      { id: "evening", label: "Evening" },
    ],
  },
] as const;

export const GIFT_INCLUSIONS = [
  "Luxury handbag",
  "Matching wallet",
  "Luxury gift box",
  "Complimentary wrapping",
  "Personalized gift message",
] as const;

export function resolveGiftRecommendation(answers: Record<string, string>) {
  const occasion = answers.occasion ?? "birthday";
  const style = answers.style ?? "classic";
  const recipient = answers.recipient ?? "friend";

  const narrative =
    occasion === "promotion"
      ? "For a professional celebrating a recent promotion, we recommend timeless structured handbags that balance elegance with everyday practicality."
      : occasion === "wedding" || recipient === "bride"
        ? "For a celebration of new beginnings, we recommend refined silhouettes that feel ceremonial yet lasting — pieces she will return to for years."
        : style === "travel"
          ? "For someone always in motion, we recommend voyage-ready pieces that carry lightly and arrive beautifully."
          : "For someone you care for deeply, we recommend a composition of craftsmanship and quiet luxury — chosen to feel personal, never generic.";

  const products =
    style === "evening"
      ? [COMPARE_PIECES[1], COMPARE_PIECES[2]]
      : style === "business" || occasion === "promotion"
        ? [COMPARE_PIECES[3], COMPARE_PIECES[0]]
        : style === "travel"
          ? [COMPARE_PIECES[4], COMPARE_PIECES[0]]
          : [COMPARE_PIECES[0], COMPARE_PIECES[5], COMPARE_PIECES[2]];

  return { narrative, products };
}

export const SHOPPING_ENTRANCE = {
  duration: 0.9,
  stagger: 0.12,
  ease: "power3.out",
} as const;
