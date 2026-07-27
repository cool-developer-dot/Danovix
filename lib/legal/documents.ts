import {
  LEGAL_META,
  POLICY_EFFECTIVE,
  POLICY_UPDATED,
  POLICY_VERSION,
  type LegalDocument,
} from "./types";

const baseHistory = [
  {
    version: POLICY_VERSION,
    date: POLICY_UPDATED,
    summary: "Initial production legal suite for the DANOVIX storefront.",
  },
] as const;

const counsel = LEGAL_META.counselNotice;

function doc(
  partial: Omit<
    LegalDocument,
    "version" | "effectiveDate" | "lastUpdated" | "revisionHistory" | "counselNotice"
  >,
): LegalDocument {
  return {
    ...partial,
    version: POLICY_VERSION,
    effectiveDate: POLICY_EFFECTIVE,
    lastUpdated: POLICY_UPDATED,
    revisionHistory: baseHistory,
    counselNotice: counsel,
  };
}

export const PRIVACY_POLICY = doc({
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How DANOVIX collects, uses, stores, and protects information across our luxury ecommerce experience.",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction",
      paragraphs: [
        `${LEGAL_META.companyName} (“DANOVIX,” “we,” “us,” or “our”) operates ${LEGAL_META.productDescription} available at ${LEGAL_META.website} and related pages (the “Site”).`,
        "This Privacy Policy explains what information we collect, why we collect it, how we use it, and the choices available to you. It is written to reflect the Site’s current implementation and intended production ecommerce behavior.",
        "Important current-state note: portions of the Site (including account, checkout, and AI-labeled experiences) presently operate as client-side product experiences. When production authentication, payments, messaging, or AI processors are connected, those processors will be disclosed here and in our Subprocessor disclosures.",
      ],
    },
    {
      id: "scope",
      heading: "2. Scope",
      paragraphs: [
        "This Policy applies to visitors, customers, newsletter subscribers, and account holders who use the Site, including Collection, Product, Search, Wishlist, Reserved Collection, Compare, Discoveries, Stylist, Style Quiz, Gift Finder, Account, Signup, Brand, and Contact experiences.",
      ],
    },
    {
      id: "collect",
      heading: "3. Information We Collect",
      subsections: [
        {
          heading: "3.1 Information you provide",
          bullets: [
            "Account and profile details: name, email, phone, birthday, gender, language, country, and preference toggles when you use Profile settings.",
            "Authentication form inputs: name, email, and password fields on Signup / Login / Forgot Password screens.",
            "Addresses: shipping labels, street, city, region, postal code, and country.",
            "Payment method displays: brand and masked last-four digits shown in Account wallet UI (full card numbers are never displayed).",
            "Order and shopping context: reserved pieces, wishlist selections, order history shown in Account.",
            "Contact Concierge submissions: name, email, topic, optional order reference, message, and optional PDF/JPG/PNG attachments.",
            "Newsletter email address.",
            "Style Quiz / Gift Finder answers and generated style/gift recommendations.",
          ],
        },
        {
          heading: "3.2 Information collected automatically",
          bullets: [
            "Device and browser information typically provided by your browser (such as user agent) when requesting pages.",
            "IP address as received by our hosting infrastructure (for example, Vercel) for security, routing, and abuse prevention.",
            "On-device storage: recently viewed product identifiers (`danovix-recently-viewed`) and navigation helpers in session storage.",
            "Consent records we store locally when you accept cookies or acknowledge terms (policy version and timestamp).",
          ],
        },
        {
          heading: "3.3 AI-labeled experiences",
          paragraphs: [
            "Features labeled “AI Concierge,” “AI Stylist,” Style Quiz, Gift Finder, and related guidance currently generate recommendations and copy in the browser from curated catalog rules and editorial content. Unless and until a third-party AI processor is connected, prompts and quiz answers are not transmitted to an external generative AI provider by the Site.",
          ],
        },
      ],
    },
    {
      id: "how",
      heading: "4. How We Collect Information",
      bullets: [
        "Directly from forms and interactive experiences on the Site.",
        "Automatically through standard web logs and hosting infrastructure.",
        "From on-device storage used to improve browsing continuity.",
      ],
    },
    {
      id: "purpose",
      heading: "5. Purpose of Collection",
      bullets: [
        "Provide and improve the ecommerce browsing, reservation, and account experience.",
        "Respond to Concierge and support requests.",
        "Send Journal / newsletter communications when you subscribe.",
        "Personalize editorial recommendations and shopping guidance.",
        "Protect the Site against abuse and maintain security.",
        "Comply with legal obligations when production commerce systems are live.",
      ],
    },
    {
      id: "legal-basis",
      heading: "6. Legal Bases (GDPR)",
      paragraphs: [
        "Where the GDPR applies, we rely on one or more of the following bases: performance of a contract (orders and account services), consent (newsletter, non-essential cookies, optional preferences), legitimate interests (security, product improvement, fraud prevention), and legal obligation.",
      ],
    },
    {
      id: "ccpa",
      heading: "7. California Privacy Rights (CCPA/CPRA)",
      paragraphs: [
        "If you are a California resident, you may have rights to know, delete, correct, and opt out of certain sharing of personal information. DANOVIX does not sell personal information. To exercise rights, contact privacy@danovix.com. We will not discriminate against you for exercising privacy rights.",
      ],
    },
    {
      id: "sharing",
      heading: "8. Sharing & Processors",
      paragraphs: [
        "We do not sell personal information. We share information only with service providers who help operate the Site, and only as needed.",
      ],
      subsections: [
        {
          heading: "8.1 Current technical processors / infrastructure",
          bullets: [
            "Hosting / edge delivery: Vercel (when deployed).",
            "Fonts: Google Fonts delivered via Next.js font optimization.",
            "Image CDN for select editorial portraits: images.unsplash.com.",
          ],
        },
        {
          heading: "8.2 Planned / future processors (not currently wired in application code)",
          bullets: [
            "Payment processors (for example, Stripe) for live checkout.",
            "Authentication providers for production identity.",
            "Transactional email / SMS providers for order and care messages.",
            "Analytics providers, if enabled with consent.",
            "Generative AI providers, if Concierge/Stylist are connected to external models.",
          ],
        },
      ],
    },
    {
      id: "retention",
      heading: "9. Retention",
      paragraphs: [
        "We retain account, order, and support information for as long as needed to provide services, resolve disputes, and meet legal requirements. On-device recently viewed data remains until cleared by you or your browser. When production databases are introduced, retention schedules will be published here.",
      ],
    },
    {
      id: "security",
      heading: "10. Security",
      bullets: [
        "Transport security via HTTPS and security headers configured for the Site.",
        "No full payment card numbers are displayed in Account payment UI.",
        "Access to production systems will be limited to authorized personnel when backends are live.",
        "No method of transmission or storage is perfectly secure; please use strong unique passwords.",
      ],
    },
    {
      id: "transfers",
      heading: "11. International Transfers",
      paragraphs: [
        "Our Site may be hosted and accessed internationally. Where required, we will use appropriate safeguards for cross-border transfers.",
      ],
    },
    {
      id: "rights",
      heading: "12. Your Rights",
      bullets: [
        "Access, correct, or update profile information through Account settings when available.",
        "Request deletion, export, restriction, or objection by emailing privacy@danovix.com.",
        "Unsubscribe from marketing emails using unsubscribe mechanisms provided in those messages.",
        "Clear local browser storage to remove recently viewed and local consent markers.",
      ],
    },
    {
      id: "children",
      heading: "13. Children",
      paragraphs: [
        "The Site is intended for adults. We do not knowingly collect personal information from children under 16.",
      ],
    },
    {
      id: "updates",
      heading: "14. Updates",
      paragraphs: [
        "We may update this Policy. Material changes will update the version number, last updated date, and revision history on this page.",
      ],
    },
    {
      id: "contact",
      heading: "15. Contact",
      paragraphs: [
        `Privacy inquiries: ${LEGAL_META.privacyEmail}`,
        `Customer care: ${LEGAL_META.supportEmail}`,
        `Postal context: ${LEGAL_META.addressLine}`,
      ],
    },
  ],
});

export const TERMS_OF_SERVICE = doc({
  slug: "terms",
  title: "Terms of Service",
  description:
    "Terms governing use of the DANOVIX website, accounts, shopping experiences, and purchases.",
  sections: [
    {
      id: "acceptance",
      heading: "1. Acceptance",
      paragraphs: [
        `By accessing or using the DANOVIX Site, you agree to these Terms of Service (“Terms”) and our Privacy Policy. If you do not agree, do not use the Site.`,
      ],
    },
    {
      id: "eligibility",
      heading: "2. Eligibility",
      paragraphs: [
        "You must be legally able to enter a binding contract in your jurisdiction. Business or gift purchases remain your responsibility.",
      ],
    },
    {
      id: "accounts",
      heading: "3. Accounts & Security",
      paragraphs: [
        "You are responsible for maintaining the confidentiality of credentials you create and for activity under your account. Notify us promptly of suspected unauthorized access.",
        "Current implementation note: authentication screens are presently client-side experiences. Production identity systems, when enabled, remain subject to these Terms.",
      ],
    },
    {
      id: "use",
      heading: "4. Acceptable Use",
      bullets: [
        "Use the Site for lawful personal or permitted commercial shopping purposes.",
        "Do not attempt to disrupt, scrape abusively, reverse engineer, or overload the Site.",
        "Do not upload malware or harmful attachments via Concierge forms.",
        "Do not misrepresent identity, payment authority, or shipping details.",
        "Do not circumvent rate limits, security controls, or access restrictions.",
      ],
    },
    {
      id: "products",
      heading: "5. Products, Pricing & Availability",
      paragraphs: [
        "Product descriptions, imagery, and pricing are presented for ecommerce browsing. Availability may change. We may correct errors and update offerings without prior notice.",
      ],
    },
    {
      id: "orders",
      heading: "6. Reservations, Orders & Checkout",
      paragraphs: [
        "Placing items in Wishlist or Reserved Collection does not complete a purchase until checkout is confirmed through an authorized payment flow.",
        "Current implementation note: checkout currently presents a private payment atelier placeholder. When live payments are enabled, order confirmation emails and payment authorization will govern contract formation.",
      ],
    },
    {
      id: "ai",
      heading: "7. AI-Labeled Experiences",
      paragraphs: [
        "Stylist, Concierge, Style Quiz, Gift Finder, Compare guidance, and similar features provide editorial and rule-based shopping assistance. Outputs may be imperfect and are not professional legal, medical, or financial advice. You remain responsible for purchasing decisions.",
      ],
    },
    {
      id: "ip",
      heading: "8. Intellectual Property",
      paragraphs: [
        "DANOVIX names, logos, product designs, photography, copy, and Site software are owned by DANOVIX or its licensors. You receive a limited, non-exclusive license to use the Site for shopping. You may not copy or exploit Site content without permission.",
        "Feedback you submit may be used by DANOVIX without obligation to you.",
      ],
    },
    {
      id: "ugc",
      heading: "9. Customer Content",
      paragraphs: [
        "If you submit messages, attachments, or other content, you grant DANOVIX a license to use that content to operate care and service functions. You represent that you have rights to submit it.",
      ],
    },
    {
      id: "availability",
      heading: "10. Availability",
      paragraphs: [
        "We strive for a refined experience but do not guarantee uninterrupted availability. Maintenance, hosting incidents, or force majeure may cause downtime.",
      ],
    },
    {
      id: "disclaimers",
      heading: "11. Disclaimers",
      paragraphs: [
        "THE SITE AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” TO THE FULLEST EXTENT PERMITTED BY LAW. WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, EXCEPT WHERE PROHIBITED.",
      ],
    },
    {
      id: "liability",
      heading: "12. Limitation of Liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, DANOVIX WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL. OUR AGGREGATE LIABILITY FOR CLAIMS RELATING TO THE SITE WILL NOT EXCEED THE GREATER OF (A) AMOUNTS YOU PAID TO DANOVIX FOR THE PRODUCT GIVING RISE TO THE CLAIM IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS.",
      ],
    },
    {
      id: "indemnity",
      heading: "13. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless DANOVIX from claims arising out of your misuse of the Site, violation of these Terms, or infringement of third-party rights.",
      ],
    },
    {
      id: "termination",
      heading: "14. Termination",
      paragraphs: [
        "We may suspend or terminate access for violations of these Terms or to protect the Site, customers, or brand. Provisions that should survive will survive termination.",
      ],
    },
    {
      id: "law",
      heading: "15. Governing Law & Disputes",
      paragraphs: [
        `These Terms are governed by the laws of ${LEGAL_META.jurisdiction}, without regard to conflict-of-law principles. Courts located in New York, NY shall have exclusive jurisdiction, except where consumer protection laws require otherwise.`,
      ],
    },
    {
      id: "changes",
      heading: "16. Changes",
      paragraphs: [
        "We may update these Terms. Continued use after the effective date of changes constitutes acceptance, except where additional consent is required by law.",
      ],
    },
    {
      id: "contact",
      heading: "17. Contact",
      paragraphs: [
        `Legal: ${LEGAL_META.legalEmail}`,
        `Care: ${LEGAL_META.supportEmail}`,
      ],
    },
  ],
});

export const REFUND_POLICY = doc({
  slug: "refund-policy",
  title: "Returns & Refund Policy",
  description:
    "How returns, exchanges, and refunds work for DANOVIX handbag purchases.",
  sections: [
    {
      id: "scope",
      heading: "1. Scope",
      paragraphs: [
        "This Policy applies to purchases of DANOVIX handbags and related goods fulfilled through danovix.com once live checkout is enabled. It does not describe SaaS subscription billing.",
      ],
    },
    {
      id: "window",
      heading: "2. Return Window",
      paragraphs: [
        "Eligible unworn items may be returned within 30 days of delivery for a refund or exchange, subject to inspection. Items must include original packaging and authenticity materials.",
      ],
    },
    {
      id: "eligibility",
      heading: "3. Eligibility",
      bullets: [
        "Unworn, unmarked, and in original condition.",
        "Personalized or made-to-order pieces may be final sale unless required by law.",
        "Gift purchases may follow the same condition standards.",
      ],
    },
    {
      id: "process",
      heading: "4. How to Request a Return",
      paragraphs: [
        `Contact ${LEGAL_META.supportEmail} or use the Contact Concierge with your order reference. We will provide return instructions. Unauthorized returns may be refused.`,
      ],
    },
    {
      id: "refunds",
      heading: "5. Refunds",
      bullets: [
        "Approved refunds are issued to the original payment method.",
        "Processing typically completes within 5–10 business days after warehouse inspection, subject to your bank or card network.",
        "Shipping fees, if any were charged, may be non-refundable unless the return is due to our error.",
      ],
    },
    {
      id: "exchanges",
      heading: "6. Exchanges",
      paragraphs: [
        "Exchanges depend on availability. If an exchange item differs in price, we will collect or refund the difference.",
      ],
    },
    {
      id: "billing",
      heading: "7. Duplicate or Failed Payments",
      paragraphs: [
        "If you believe you were charged in error, contact care@danovix.com promptly with transaction details. Chargebacks should be a last resort after contacting us; we cooperate with payment partners to resolve billing errors.",
      ],
    },
    {
      id: "future-payments",
      heading: "8. Future Payment Processors",
      paragraphs: [
        "When Stripe or another processor is connected, their dispute and refund tooling will operate alongside this Policy. Card network rules may also apply.",
      ],
    },
    {
      id: "exceptions",
      heading: "9. Exceptions",
      bullets: [
        "Damaged-on-arrival claims require photos within 48 hours of delivery where reasonably possible.",
        "Final-sale or limited pieces marked as such at purchase.",
        "Returns that show signs of wear, odor, or alteration.",
      ],
    },
    {
      id: "contact",
      heading: "10. Contact",
      paragraphs: [`${LEGAL_META.supportEmail}`],
    },
  ],
});

export const SHIPPING_POLICY = doc({
  slug: "shipping-policy",
  title: "Shipping Policy",
  description:
    "How DANOVIX delivers physical handbags and related products.",
  sections: [
    {
      id: "nature",
      heading: "1. Physical Products",
      paragraphs: [
        "DANOVIX sells physical luxury handbags and related goods. Orders are shipped to the address you provide. This is not a digital-only SaaS delivery model.",
      ],
    },
    {
      id: "prep",
      heading: "2. Preparation",
      paragraphs: [
        "Orders are typically prepared within 1–2 business days for standard availability, then handed to our courier partners. Luxury packaging and quality inspection occur before shipment.",
      ],
    },
    {
      id: "rates",
      heading: "3. Shipping Rates",
      paragraphs: [
        "Complimentary shipping may be offered for qualifying destinations as described at checkout or in Site FAQ messaging. International duties/taxes may apply and are the recipient’s responsibility unless stated otherwise.",
      ],
    },
    {
      id: "tracking",
      heading: "4. Tracking",
      paragraphs: [
        "When live fulfillment is enabled, tracking numbers and status updates will appear in Account order details and/or email notifications.",
      ],
    },
    {
      id: "risk",
      heading: "5. Title & Risk",
      paragraphs: [
        "Risk of loss passes according to the carrier terms and applicable law once the order is delivered or as otherwise required.",
      ],
    },
    {
      id: "issues",
      heading: "6. Delivery Issues",
      paragraphs: [
        `Contact ${LEGAL_META.supportEmail} for delayed, lost, or damaged shipments. We will coordinate investigation with carriers.`,
      ],
    },
    {
      id: "digital",
      heading: "7. Digital Account Access",
      paragraphs: [
        "Account access, Journal subscription confirmations, and Site experiences are delivered digitally via the website and email. No physical media is required to browse the Site.",
      ],
    },
  ],
});

export const COOKIE_POLICY = doc({
  slug: "cookie-policy",
  title: "Cookie & Local Storage Policy",
  description:
    "How DANOVIX uses cookies, local storage, and similar technologies.",
  sections: [
    {
      id: "overview",
      heading: "1. Overview",
      paragraphs: [
        "This Policy explains cookies and similar technologies used on the Site. As of the current codebase, DANOVIX application code does not set first-party tracking cookies. We do use browser local/session storage and may load fonts or images from third-party CDNs.",
      ],
    },
    {
      id: "essential",
      heading: "2. Essential / Functional Storage",
      bullets: [
        "`danovix-recently-viewed` (localStorage): remembers product pages you opened.",
        "`danovix-pending-home-hash` (sessionStorage): supports smooth in-site navigation.",
        "`danovix-cookie-consent` / `danovix-legal-consent` / `danovix-terms-accepted`: records your consent choices and policy versions.",
      ],
    },
    {
      id: "auth",
      heading: "3. Authentication Cookies",
      paragraphs: [
        "Production authentication cookies are not currently issued by the Site. If a production identity provider is added, essential session cookies will be disclosed here.",
      ],
    },
    {
      id: "analytics",
      heading: "4. Analytics Cookies",
      paragraphs: [
        "No analytics SDK is currently installed. If analytics are introduced, non-essential cookies will require consent where required by law.",
      ],
    },
    {
      id: "third",
      heading: "5. Third-Party Technologies",
      bullets: [
        "Google Fonts via Next.js font loading.",
        "Unsplash image requests for select editorial portraits.",
        "Outbound social network visits (Instagram, Pinterest, TikTok, Facebook) are governed by those platforms’ policies.",
      ],
    },
    {
      id: "consent",
      heading: "6. Consent & Controls",
      paragraphs: [
        "You can accept or manage cookie preferences through our consent banner. You may also clear site data in your browser settings. Essential storage required for security and basic operation may persist.",
      ],
    },
    {
      id: "contact",
      heading: "7. Contact",
      paragraphs: [`${LEGAL_META.privacyEmail}`],
    },
  ],
});

export const ACCEPTABLE_USE = doc({
  slug: "acceptable-use",
  title: "Acceptable Use Policy",
  description:
    "Prohibited and permitted uses of the DANOVIX website and services.",
  sections: [
    {
      id: "permitted",
      heading: "1. Permitted Use",
      paragraphs: [
        "Browse, reserve interest in, purchase (when enabled), and communicate with Concierge for lawful purposes consistent with a luxury retail experience.",
      ],
    },
    {
      id: "prohibited",
      heading: "2. Prohibited Activities",
      bullets: [
        "Fraud, stolen payment instruments, or false identity.",
        "Spam, phishing, or unsolicited commercial messaging through Site forms.",
        "Reverse engineering, scraping at abusive scale, or unauthorized API use.",
        "Credential sharing that compromises account security.",
        "Uploading malicious files or exploiting vulnerabilities.",
        "Interfering with other customers’ experience or Site integrity.",
      ],
    },
    {
      id: "enforcement",
      heading: "3. Enforcement",
      paragraphs: [
        "We may investigate and suspend access, cancel orders, or involve authorities when abuse is suspected.",
      ],
    },
  ],
});

export const SECURITY_POLICY = doc({
  slug: "security",
  title: "Security Policy",
  description:
    "High-level security practices for the DANOVIX storefront.",
  sections: [
    {
      id: "controls",
      heading: "1. Technical Controls",
      bullets: [
        "HTTPS delivery and modern security headers (including frame protections and referrer policy).",
        "Dependency and build hygiene via the Next.js application toolchain.",
        "Least-privilege operational access for production deployments.",
      ],
    },
    {
      id: "payments",
      heading: "2. Payments",
      paragraphs: [
        "The Site never displays full card numbers. Live card processing, when enabled, will be handled by PCI-compliant processors; DANOVIX will not store raw PAN data in application databases.",
      ],
    },
    {
      id: "data",
      heading: "3. Data Handling",
      paragraphs: [
        "Support attachments and form data should be treated as confidential. Production storage will use encrypted transport and provider-managed encryption at rest where available.",
      ],
    },
    {
      id: "disclosure",
      heading: "4. Responsible Disclosure",
      paragraphs: [
        `Report suspected vulnerabilities to ${LEGAL_META.securityEmail}. Please allow reasonable time for investigation before public disclosure.`,
      ],
    },
  ],
});

export const AI_DISCLOSURE = doc({
  slug: "ai-disclosure",
  title: "AI Disclosure",
  description:
    "How DANOVIX uses AI-labeled shopping assistance features.",
  sections: [
    {
      id: "what",
      heading: "1. What “AI” Means on DANOVIX",
      paragraphs: [
        "Certain experiences are labeled AI Concierge, AI Stylist, Style Quiz, Gift Finder, or similar. Today these features primarily use curated editorial logic and on-site rules to suggest handbags and looks.",
      ],
    },
    {
      id: "not",
      heading: "2. What We Do Not Currently Do",
      bullets: [
        "We do not currently stream Concierge conversations to an external generative model from application code.",
        "We do not record phone calls or voice sessions on this Site.",
        "We do not claim human stylist equivalence for automated suggestions.",
      ],
    },
    {
      id: "future",
      heading: "3. Future AI Processors",
      paragraphs: [
        "If we connect third-party AI providers, we will update this Disclosure and the Privacy Policy, identify subprocessors, and describe any new data flows before or upon enablement.",
      ],
    },
    {
      id: "responsibility",
      heading: "4. Your Responsibility",
      paragraphs: [
        "Treat AI-labeled guidance as inspirational shopping assistance. Confirm product details on Product pages before purchasing.",
      ],
    },
  ],
});

export const ACCESSIBILITY_STATEMENT = doc({
  slug: "accessibility",
  title: "Accessibility Statement",
  description:
    "DANOVIX’s commitment to an inclusive luxury digital experience.",
  sections: [
    {
      id: "commitment",
      heading: "1. Commitment",
      paragraphs: [
        "We aim to make the Site usable for as many people as possible, following WCAG-oriented practices such as semantic structure, keyboard focus affordances, and readable typography.",
      ],
    },
    {
      id: "measures",
      heading: "2. Measures",
      bullets: [
        "Semantic landmarks and headings on key pages.",
        "Focus-visible styles on interactive controls.",
        "Responsive layouts for mobile and desktop.",
        "Text alternatives on meaningful images where provided.",
      ],
    },
    {
      id: "limitations",
      heading: "3. Known Limitations",
      paragraphs: [
        "Cinematic motion and WebGL experiences may be reduced or unavailable under prefers-reduced-motion or lower-powered devices. We continue to improve alternatives.",
      ],
    },
    {
      id: "feedback",
      heading: "4. Feedback",
      paragraphs: [
        `If you encounter an accessibility barrier, contact ${LEGAL_META.supportEmail} with the page URL and a description of the issue.`,
      ],
    },
  ],
});

export const DPA = doc({
  slug: "dpa",
  title: "Data Processing Addendum",
  description:
    "DPA framework for business customers where DANOVIX processes personal data on their behalf.",
  sections: [
    {
      id: "applicability",
      heading: "1. Applicability",
      paragraphs: [
        "DANOVIX is primarily a direct-to-consumer ecommerce brand. This DPA applies only if and when a business customer engages DANOVIX as a processor of personal data (for example, enterprise gifting programs). It does not convert the consumer storefront into a multi-tenant SaaS processor by default.",
      ],
    },
    {
      id: "roles",
      heading: "2. Roles",
      paragraphs: [
        "For consumer purchases on danovix.com, DANOVIX generally acts as an independent controller. Where a written enterprise agreement designates DANOVIX as processor, that agreement and this DPA control.",
      ],
    },
    {
      id: "instructions",
      heading: "3. Processing",
      paragraphs: [
        "As processor, DANOVIX will process personal data only on documented instructions, implement appropriate security measures, and assist with data-subject requests as required by applicable law and contract.",
      ],
    },
    {
      id: "subprocessors",
      heading: "4. Subprocessors",
      paragraphs: [
        "Current and planned subprocessors are listed on the Subprocessors page. Enterprise customers will receive notice of material subprocessor changes as required by agreement.",
      ],
    },
  ],
});

export const SUBPROCESSORS = doc({
  slug: "subprocessors",
  title: "Subprocessor List",
  description:
    "Infrastructure and service providers that may process data for DANOVIX.",
  sections: [
    {
      id: "current",
      heading: "1. Current",
      bullets: [
        "Vercel — application hosting and edge delivery.",
        "Google Fonts (via Next.js) — typography assets.",
        "Unsplash — select remote editorial images.",
      ],
    },
    {
      id: "planned",
      heading: "2. Planned / Conditional",
      bullets: [
        "Payment processor (e.g., Stripe) — when live checkout launches.",
        "Email delivery provider — transactional and Journal messages.",
        "Identity provider — when production authentication launches.",
        "Analytics provider — only with appropriate consent where required.",
        "AI model provider — only if external generative AI is enabled.",
      ],
    },
    {
      id: "updates",
      heading: "3. Updates",
      paragraphs: [
        "This list will be versioned with the legal suite. Material additions will update the revision history.",
      ],
    },
  ],
});

export const RESPONSIBLE_DISCLOSURE = doc({
  slug: "responsible-disclosure",
  title: "Responsible Disclosure Policy",
  description:
    "How to report security vulnerabilities to DANOVIX.",
  sections: [
    {
      id: "report",
      heading: "1. Reporting",
      paragraphs: [
        `Email ${LEGAL_META.securityEmail} with a clear description, steps to reproduce, and impact assessment. Do not access or modify data that is not yours.`,
      ],
    },
    {
      id: "safe-harbor",
      heading: "2. Good Faith",
      paragraphs: [
        "We will not pursue legal action against good-faith researchers who follow this Policy, avoid privacy violations, and give us reasonable time to remediate before public disclosure.",
      ],
    },
  ],
});

export const SUPPORT_POLICY = doc({
  slug: "support",
  title: "Support Policy",
  description:
    "How DANOVIX Customer Care and Concierge support works.",
  sections: [
    {
      id: "channels",
      heading: "1. Channels",
      bullets: [
        `Email: ${LEGAL_META.supportEmail}`,
        "Contact Concierge form on the Site",
        "Account order actions (when signed in)",
      ],
    },
    {
      id: "hours",
      heading: "2. Hours",
      paragraphs: [
        "Concierge messaging indicates weekday availability. Response times vary by volume; we aim to reply with care rather than automation-only answers.",
      ],
    },
    {
      id: "scope",
      heading: "3. Scope",
      bullets: [
        "Product guidance, orders, shipping, returns, gifting, and partnerships.",
        "Accessibility feedback and privacy requests (routed appropriately).",
      ],
    },
  ],
});

export const LEGAL_DOCUMENTS: readonly LegalDocument[] = [
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  REFUND_POLICY,
  SHIPPING_POLICY,
  COOKIE_POLICY,
  ACCEPTABLE_USE,
  SECURITY_POLICY,
  AI_DISCLOSURE,
  ACCESSIBILITY_STATEMENT,
  DPA,
  SUBPROCESSORS,
  RESPONSIBLE_DISCLOSURE,
  SUPPORT_POLICY,
] as const;

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((document) => document.slug === slug);
}

export function getLegalSlugs(): string[] {
  return LEGAL_DOCUMENTS.map((document) => document.slug);
}
