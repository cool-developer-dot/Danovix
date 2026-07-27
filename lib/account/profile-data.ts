export const PROFILE_PAGE = {
  eyebrow: "Your Identity",
  heading: "Profile",
  description:
    "A private space to refine how DANOVIX knows you — calm, considered, and entirely yours.",
  save: "Save Changes",
  saved: "Your profile has been updated with quiet precision.",
} as const;

export const PROFILE_FIELDS = {
  fullName: "Full Name",
  email: "Email",
  phone: "Phone",
  birthday: "Birthday",
  gender: "Gender",
  language: "Language",
  country: "Country",
} as const;

export const PROFILE_DEFAULTS = {
  fullName: "Sarah Rahman",
  email: "sarah@danovix.private",
  phone: "+92 300 000 0000",
  birthday: "",
  gender: "",
  language: "English",
  country: "Pakistan",
} as const;

export const PROFILE_SECURITY = {
  eyebrow: "Protection",
  heading: "Security",
  description: "Quiet safeguards for your private lounge.",
  cards: [
    {
      id: "password",
      title: "Password",
      body: "Last updated 42 days ago. Keep your lounge sealed.",
      action: "Update Password",
      future: false,
    },
    {
      id: "2fa",
      title: "Two-Factor Authentication",
      body: "An extra layer of calm protection — arriving soon.",
      action: "Coming Soon",
      future: true,
    },
    {
      id: "sessions",
      title: "Login Sessions",
      body: "Review where your private access is currently open.",
      action: "View Sessions",
      future: false,
    },
    {
      id: "devices",
      title: "Device History",
      body: "A refined record of trusted devices — coming soon.",
      action: "Coming Soon",
      future: true,
    },
  ],
} as const;

export const PROFILE_PREFERENCES = {
  eyebrow: "How We Reach You",
  heading: "Preferences",
  description: "Choose what arrives — and what remains silent.",
  items: [
    {
      id: "email",
      label: "Email Preferences",
      description: "Editorial notes and order confirmations.",
      defaultOn: true,
    },
    {
      id: "sms",
      label: "SMS Notifications",
      description: "Discreet delivery updates by message.",
      defaultOn: false,
    },
    {
      id: "orders",
      label: "Order Updates",
      description: "From reservation through delivery.",
      defaultOn: true,
    },
    {
      id: "journal",
      label: "Editorial Journal",
      description: "Craft stories and seasonal inspiration.",
      defaultOn: true,
    },
    {
      id: "ai",
      label: "AI Recommendations",
      description: "Personal styling suggestions from your concierge.",
      defaultOn: true,
    },
    {
      id: "alerts",
      label: "New Collection Alerts",
      description: "Early notice of private launches.",
      defaultOn: false,
    },
  ],
} as const;

export const PROFILE_PHOTO = {
  eyebrow: "Presence",
  heading: "Profile Photo",
  description: "A refined portrait for your private member card.",
  upload: "Upload Portrait",
  cropHint: "Luxury cropping — coming soon.",
} as const;

export const ADDRESSES_PAGE = {
  eyebrow: "Where Pieces Arrive",
  heading: "Address Book",
  description:
    "Your destinations, composed with the same care as every DANOVIX delivery.",
  emptyHeading: "Your Journey Begins Here.",
  emptyDescription:
    "Add your first address for a faster checkout experience.",
  addNew: "Add New Address",
  edit: "Edit",
  remove: "Delete",
  duplicate: "Duplicate",
  setDefault: "Set as Default",
  defaultLabel: "Default",
} as const;

export type AddressType = "home" | "office" | "other";

export type AddressBookEntry = {
  id: string;
  type: AddressType;
  label: string;
  line1: string;
  city: string;
  region: string;
  postal: string;
  country: string;
  isDefault: boolean;
};

export const ADDRESS_BOOK: readonly AddressBookEntry[] = [
  {
    id: "home",
    type: "home",
    label: "Home",
    line1: "14 Atelier Lane",
    city: "Islamabad",
    region: "Capital Territory",
    postal: "44000",
    country: "Pakistan",
    isDefault: true,
  },
  {
    id: "office",
    type: "office",
    label: "Office",
    line1: "3 Maison Boulevard",
    city: "Islamabad",
    region: "Capital Territory",
    postal: "44000",
    country: "Pakistan",
    isDefault: false,
  },
  {
    id: "studio",
    type: "other",
    label: "Studio",
    line1: "88 Heritage Court",
    city: "Lahore",
    region: "Punjab",
    postal: "54000",
    country: "Pakistan",
    isDefault: false,
  },
] as const;

export const PAYMENTS_PAGE = {
  eyebrow: "Private Wallet",
  heading: "Payment Methods",
  description:
    "Treat each method like a membership card — encrypted, discreet, and ready.",
  addNew: "Add Payment Method",
  edit: "Edit",
  remove: "Delete",
  setDefault: "Set Default",
  defaultLabel: "Default",
  securityEyebrow: "Trust",
  securityHeading: "Protected Checkout",
  securityDescription:
    "Every transaction is sealed with the same craftsmanship as our leatherwork.",
  trustChips: [
    "Encrypted Payments",
    "PCI Compliant",
    "Secure Authentication",
    "Protected Checkout",
  ] as const,
} as const;

export type WalletBrand =
  | "visa"
  | "mastercard"
  | "apple-pay"
  | "google-pay"
  | "paypal"
  | "stripe";

export type WalletMethod = {
  id: string;
  brand: WalletBrand;
  label: string;
  lastFour?: string;
  expiry?: string;
  isDefault: boolean;
};

export const WALLET_METHODS: readonly WalletMethod[] = [
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
  {
    id: "paypal",
    brand: "paypal",
    label: "PayPal",
    isDefault: false,
  },
  {
    id: "stripe",
    brand: "stripe",
    label: "Stripe",
    lastFour: "9910",
    expiry: "12/29",
    isDefault: false,
  },
] as const;
