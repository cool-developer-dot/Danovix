export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  subsections?: readonly {
    heading: string;
    paragraphs?: readonly string[];
    bullets?: readonly string[];
  }[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  revisionHistory: readonly {
    version: string;
    date: string;
    summary: string;
  }[];
  sections: readonly LegalSection[];
  counselNotice?: string;
};

export const LEGAL_META = {
  companyName: "DANOVIX",
  productName: "DANOVIX",
  productDescription:
    "a luxury leather handbags ecommerce storefront and private member experience",
  supportEmail: "care@danovix.com",
  privacyEmail: "privacy@danovix.com",
  legalEmail: "legal@danovix.com",
  securityEmail: "security@danovix.com",
  website: "https://danovix.com",
  jurisdiction: "the State of New York, United States",
  addressLine: "New York, NY, United States",
  counselNotice:
    "These documents establish a compliance foundation for DANOVIX and should be reviewed and approved by qualified legal counsel before public release or use as binding legal terms.",
} as const;

export const POLICY_VERSION = "1.0.0" as const;
export const POLICY_EFFECTIVE = "July 27, 2026" as const;
export const POLICY_UPDATED = "July 27, 2026" as const;

export const CONSENT_STORAGE_KEY = "danovix-legal-consent" as const;
export const COOKIE_CONSENT_KEY = "danovix-cookie-consent" as const;
export const TERMS_VERSION_KEY = "danovix-terms-accepted" as const;
