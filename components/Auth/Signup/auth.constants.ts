import type { LucideIcon } from "lucide-react";
import {
  Bookmark,
  CreditCard,
  Gift,
  Lock,
  Mail,
  Package,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Truck,
  User,
} from "lucide-react";

/* ---------- Auth faces ---------- */

export type AuthFace = "signup" | "login" | "forgot";

export type AuthContext = "default" | "wishlist" | "checkout" | "concierge";

/* ---------- Editorial ---------- */

export const SIGNUP_HERO = {
  eyebrow: "The DANOVIX Membership",
  headline: ["Begin Your", "Danovix Journey."] as const,
  description:
    "Create your account to unlock a personalized shopping experience, curated collections, AI recommendations, and exclusive access to future releases.",
} as const;

export const LOGIN_HERO = {
  eyebrow: "The DANOVIX Membership",
  headline: ["Welcome", "Back."] as const,
  description:
    "Continue your luxury journey. Your saved collection, personalized recommendations and luxury experience are waiting for you.",
} as const;

export const FORGOT_HERO = {
  eyebrow: "The DANOVIX Membership",
  headline: ["Reset Your", "Password."] as const,
  description:
    "Enter your email and we will send a secure link to restore access to your private collection.",
} as const;

export const AUTH_CONTEXT_SUBTITLES: Record<AuthContext, string> = {
  default: LOGIN_HERO.description,
  wishlist: "Your Private Collection is waiting.",
  checkout: "Let's complete your order.",
  concierge: "Your AI Concierge is ready.",
};

export function resolveAuthContext(from: string | null): AuthContext {
  if (from === "wishlist" || from === "checkout" || from === "concierge") {
    return from;
  }
  return "default";
}

export function getEditorialForFace(face: AuthFace) {
  if (face === "login") return LOGIN_HERO;
  if (face === "forgot") return FORGOT_HERO;
  return SIGNUP_HERO;
}

/* ---------- Floating feature cards ---------- */

export type FeatureCardId =
  | "shipping"
  | "concierge"
  | "packaging"
  | "returns";

export type FeatureCard = {
  id: FeatureCardId;
  title: string;
  copy: string;
  icon: LucideIcon;
  /** Positioning + independent float rhythm handled via CSS class. */
  placement: string;
  floatClass: string;
};

export const FEATURE_CARDS: readonly FeatureCard[] = [
  {
    id: "shipping",
    title: "Complimentary Shipping",
    copy: "Enjoy complimentary shipping on qualifying orders.",
    icon: Truck,
    placement:
      "left-[5%] top-[8%] w-[min(58%,17rem)] max-w-[280px] sm:left-[6%] md:left-[5%] md:top-[9%] md:w-[min(52%,15.5rem)] lg:left-[5%] lg:top-[10%] lg:w-[16.5rem] xl:left-[6%] xl:top-[11%] xl:w-[17.5rem] 2xl:top-[12%] 2xl:w-[18rem]",
    floatClass: "signup-float-a",
  },
  {
    id: "concierge",
    title: "AI Shopping Concierge",
    copy: "Receive personalized recommendations tailored to your style.",
    icon: Sparkles,
    placement:
      "right-[5%] top-[18%] w-[min(56%,16rem)] max-w-[260px] sm:right-[6%] md:right-[5%] md:top-[20%] md:w-[min(48%,14.5rem)] lg:right-[6%] lg:top-[22%] lg:w-[15.5rem] xl:right-[7%] xl:top-[23%] xl:w-[16.5rem] 2xl:top-[24%] 2xl:w-[17rem]",
    floatClass: "signup-float-b",
  },
  {
    id: "packaging",
    title: "Luxury Packaging",
    copy: "Every order arrives beautifully presented.",
    icon: Gift,
    placement:
      "left-[8%] bottom-[28%] w-[min(54%,15.5rem)] max-w-[250px] sm:left-[9%] md:left-[8%] md:bottom-[26%] md:w-[min(46%,14rem)] lg:left-[9%] lg:bottom-[24%] lg:w-[15rem] xl:left-[10%] xl:bottom-[22%] xl:w-[16rem] 2xl:bottom-[20%] 2xl:w-[16.5rem]",
    floatClass: "signup-float-c",
  },
  {
    id: "returns",
    title: "30-Day Returns",
    copy: "Shop confidently with hassle-free returns.",
    icon: RotateCcw,
    placement:
      "right-[5%] bottom-[16%] w-[min(52%,14.5rem)] max-w-[240px] sm:right-[6%] md:right-[5%] md:bottom-[15%] md:w-[min(44%,13.5rem)] lg:right-[5%] lg:bottom-[14%] lg:w-[14.5rem] xl:right-[6%] xl:bottom-[13%] xl:w-[15.5rem] 2xl:bottom-[12%] 2xl:w-[16rem]",
    floatClass: "signup-float-d",
  },
] as const;

/** Login-face copy for the same four floating cards — positions unchanged. */
export const LOGIN_FEATURE_COPY: Record<
  FeatureCardId,
  { title: string; copy: string; icon: LucideIcon }
> = {
  packaging: {
    title: "Saved Collection",
    copy: "Your curated pieces await — refined and ready to revisit.",
    icon: Bookmark,
  },
  concierge: {
    title: "AI Concierge",
    copy: "Personalized guidance tailored to your style and occasion.",
    icon: Sparkles,
  },
  shipping: {
    title: "Secure Checkout",
    copy: "Encrypted payments with trusted global processors.",
    icon: ShieldCheck,
  },
  returns: {
    title: "Order Tracking",
    copy: "Follow every delivery from atelier to doorstep.",
    icon: Package,
  },
};

export function getFeatureCardsForFace(face: AuthFace): readonly FeatureCard[] {
  if (face === "signup") return FEATURE_CARDS;

  return FEATURE_CARDS.map((card) => {
    const next = LOGIN_FEATURE_COPY[card.id];
    return {
      ...card,
      title: next.title,
      copy: next.copy,
      icon: next.icon,
    };
  });
}

/* ---------- Form ---------- */

export type SignupFieldId = "fullName" | "email" | "password" | "confirmPassword";

export type SignupField = {
  id: SignupFieldId;
  label: string;
  type: "text" | "email" | "password";
  autoComplete: string;
  icon: LucideIcon;
};

export const SIGNUP_FORM = {
  eyebrow: "Members Only",
  heading: "Create Your Account",
  subtitle:
    "Become part of the DANOVIX experience and enjoy personalized luxury shopping.",
  submit: "Create Account",
  fields: [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      autoComplete: "name",
      icon: User,
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      autoComplete: "email",
      icon: Mail,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      autoComplete: "new-password",
      icon: Lock,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      autoComplete: "new-password",
      icon: Lock,
    },
  ] as const satisfies readonly SignupField[],
  terms: {
    lead: "I agree to the",
    termsLabel: "Terms of Service",
    termsHref: "/brand",
    and: "and",
    privacyLabel: "Privacy Policy",
    privacyHref: "/brand",
  },
  signIn: {
    lead: "Already have an account?",
    label: "Sign In",
  },
  divider: "or continue with",
} as const;

export const LOGIN_FORM = {
  eyebrow: "Members Only",
  heading: "Welcome Back.",
  subtitle: "Continue where you left off.",
  submit: "Sign In",
  email: {
    id: "email" as const,
    label: "Email Address",
    autoComplete: "email",
    icon: Mail,
  },
  password: {
    id: "password" as const,
    label: "Password",
    autoComplete: "current-password",
    icon: Lock,
  },
  remember: "Remember Me",
  forgot: "Forgot Password?",
  create: {
    lead: "Don't have an account?",
    label: "Create One",
  },
  divider: "or continue with",
} as const;

export const FORGOT_FORM = {
  eyebrow: "Members Only",
  heading: "Reset Your Password.",
  subtitle:
    "Enter your email address and we'll send you a secure reset link.",
  submit: "Send Reset Link",
  email: {
    id: "email" as const,
    label: "Email Address",
    autoComplete: "email",
    icon: Mail,
  },
  back: "Back to Sign In",
} as const;

/* ---------- Password strength ---------- */

export type PasswordTier = {
  id: "empty" | "weak" | "fair" | "strong" | "excellent";
  label: string;
  /** Number of filled segments (of 4). */
  segments: number;
  /** Refined brand-aligned tone — no bright red / green. */
  color: string;
};

export const PASSWORD_TIERS: readonly PasswordTier[] = [
  { id: "empty", label: "", segments: 0, color: "transparent" },
  { id: "weak", label: "Weak", segments: 1, color: "rgb(184 138 108)" },
  { id: "fair", label: "Fair", segments: 2, color: "rgb(198 161 91)" },
  { id: "strong", label: "Strong", segments: 3, color: "rgb(176 158 108)" },
  {
    id: "excellent",
    label: "Excellent",
    segments: 4,
    color: "rgb(120 138 108)",
  },
] as const;

export function evaluatePasswordTier(password: string): PasswordTier {
  if (!password) return PASSWORD_TIERS[0];

  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 1) return PASSWORD_TIERS[1];
  if (score === 2) return PASSWORD_TIERS[2];
  if (score === 3) return PASSWORD_TIERS[3];
  return PASSWORD_TIERS[4];
}

/* ---------- Social ---------- */

export type SocialProvider = {
  id: "google" | "apple";
  label: string;
};

export const SOCIAL_PROVIDERS: readonly SocialProvider[] = [
  { id: "google", label: "Continue with Google" },
  { id: "apple", label: "Continue with Apple" },
] as const;

/* ---------- Trust strip ---------- */

export type TrustSignal = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const TRUST_SIGNALS: readonly TrustSignal[] = [
  { id: "secure", label: "Secure Authentication", icon: ShieldCheck },
  { id: "privacy", label: "Privacy Protected", icon: Lock },
  { id: "payments", label: "Trusted Payments", icon: CreditCard },
] as const;

/* ---------- Success ---------- */

export const SIGNUP_SUCCESS = {
  headline: "Welcome to DANOVIX.",
  subtitle: "Your private collection is ready.",
  cta: "Explore the Collection",
  ctaHref: "/",
} as const;

export const LOGIN_SUCCESS = {
  headline: "Welcome Back.",
  subtitle: "Preparing Your Collection...",
  autoMs: 1100,
} as const;

export const FORGOT_SUCCESS = {
  headline: "Check Your Inbox.",
  subtitle: "A secure reset link is on its way.",
  cta: "Back to Sign In",
} as const;

/* ---------- Motion timings ---------- */

export const SIGNUP_ENTRANCE = {
  ease: "power4.out",
  softEase: "power3.out",
  duration: 1.0,
  y: 34,
  clipY: "110%",
  cardStagger: 0.14,
  fieldStagger: 0.09,
} as const;

export const AUTH_FLIP = {
  duration: 0.82,
  easeIn: "power2.in",
  easeOut: "power3.out",
  liftY: -10,
  liftScale: 1.015,
  perspective: 1400,
} as const;

export const SIGNUP_PAGE_META = {
  title: "Membership",
  description:
    "Join the DANOVIX membership — an invitation into a world of curated luxury, personal service, and exclusive access to future releases.",
} as const;
