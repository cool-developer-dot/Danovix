export type TestimonialFilterId =
  | "helpful"
  | "newest"
  | "highest"
  | "photos"
  | "videos"
  | "business"
  | "travel"
  | "daily"
  | "gift";

export type TestimonialCategory =
  | "business"
  | "travel"
  | "daily"
  | "gift"
  | "evening"
  | "weekend";

export type ClientTestimonial = {
  id: string;
  name: string;
  location: string;
  profession?: string;
  rating: number;
  title: string;
  body: string;
  productOwned: string;
  verified: boolean;
  helpful: number;
  date: string;
  dateSort: number;
  category: TestimonialCategory;
  portraitSrc: string;
  portraitAlt: string;
  lifestyleSrc?: string;
  lifestyleAlt?: string;
  hasPhoto: boolean;
  hasVideo: boolean;
};

export type FeaturedClientStory = {
  name: string;
  location: string;
  profession: string;
  productOwned: string;
  quote: string;
  body: string;
  portraitSrc: string;
  portraitAlt: string;
  lifestyleSrc: string;
  lifestyleAlt: string;
};

export type VideoTestimonial = {
  id: string;
  title: string;
  customer: string;
  duration: string;
  category: TestimonialCategory;
  portraitSrc: string;
  portraitAlt: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  verified: boolean;
};

export type CommunityGalleryShot = {
  id: string;
  setting: string;
  imageSrc: string;
  imageAlt: string;
  span: "wide" | "tall" | "square";
};

export type EditorialQuote = {
  id: string;
  quote: string;
  attribution: string;
};

export type TrustMetric = {
  id: string;
  label: string;
  value: string;
  detail: string;
};

export type SocialProofChip = {
  id: string;
  label: string;
};

export const TESTIMONIAL_FILTERS: readonly {
  id: TestimonialFilterId;
  label: string;
}[] = [
  { id: "helpful", label: "Most Helpful" },
  { id: "newest", label: "Newest" },
  { id: "highest", label: "Highest Rated" },
  { id: "photos", label: "With Photos" },
  { id: "videos", label: "With Videos" },
  { id: "business", label: "Business Use" },
  { id: "travel", label: "Travel Use" },
  { id: "daily", label: "Daily Use" },
  { id: "gift", label: "Gift Purchases" },
] as const;

export const CLIENT_STORIES_COPY = {
  eyebrow: "Testimonials & Client Stories",
  heading: ["Lived With.", "Loved Quietly."] as const,
  description:
    "Authentic voices from women who welcomed DANOVIX into their rituals — business days, quiet travel, and evenings that ask for less noise and more presence.",
  featuredEyebrow: "Featured Client Story",
  verifiedBadge: "Verified DANOVIX Client",
  verifiedPurchase: "Verified Purchase",
  gridHeading: "From Our Community",
  videoHeading: "In Their Own Words",
  videoDescription:
    "Short films from clients — office days, journeys, unboxing rituals, and the moments between.",
  galleryHeading: "A Gallery Of Confidence",
  galleryDescription:
    "Real women. Real settings. The quiet elegance of pieces carried through a life well lived.",
  quotesEyebrow: "In Their Words",
  socialEyebrow: "Quiet Social Proof",
  ctaHint: "Ready to write your own chapter?",
  cta: "Reserve Your Piece",
} as const;

export const TRUST_METRICS: readonly TrustMetric[] = [
  {
    id: "rating",
    label: "Overall Rating",
    value: "4.9",
    detail: "Across verified client stories",
  },
  {
    id: "verified",
    label: "Verified Purchases",
    value: "98%",
    detail: "Authenticated DANOVIX clients",
  },
  {
    id: "satisfaction",
    label: "Customer Satisfaction",
    value: "97%",
    detail: "Would choose DANOVIX again",
  },
  {
    id: "repeat",
    label: "Repeat Customers",
    value: "41%",
    detail: "Returned for another piece",
  },
  {
    id: "recommend",
    label: "Recommendation Rate",
    value: "96%",
    detail: "Would recommend to a friend",
  },
] as const;

export const SOCIAL_PROOF: readonly SocialProofChip[] = [
  { id: "professionals", label: "Featured by professionals" },
  { id: "modern", label: "Loved by modern women" },
  { id: "travel", label: "Chosen for business travel" },
  { id: "everyday", label: "Everyday luxury" },
] as const;

export const EDITORIAL_QUOTES: readonly EditorialQuote[] = [
  {
    id: "q1",
    quote: "The craftsmanship exceeded every expectation.",
    attribution: "Claire M. · Paris",
  },
  {
    id: "q2",
    quote: "It instantly became my everyday companion.",
    attribution: "Elena V. · Milan",
  },
  {
    id: "q3",
    quote: "Luxury that feels timeless rather than trendy.",
    attribution: "Naomi K. · Tokyo",
  },
] as const;

export function buildFeaturedStory(productName: string): FeaturedClientStory {
  return {
    name: "Isabelle Chen",
    location: "New York, United States",
    profession: "Creative Director",
    productOwned: productName,
    quote:
      "I stopped switching bags between meetings and evenings. This one simply belongs — quiet, composed, and entirely itself.",
    body: "Isabelle chose her piece for a season of openings, flights, and late dinners. Six months later, it remains the companion she reaches for without thinking — the leather softened just enough to feel familiar, the silhouette still as considered as the first unboxing.",
    portraitSrc: "/community/04-taupe-lock.webp",
    portraitAlt: "Isabelle Chen with her DANOVIX handbag",
    lifestyleSrc: "/community/08-atelier-mahogany.webp",
    lifestyleAlt: "Isabelle carrying her bag through a refined interior",
  };
}

export function buildClientTestimonials(
  productName: string,
): readonly ClientTestimonial[] {
  return [
    {
      id: "amelia",
      name: "Amelia R.",
      location: "New York, USA",
      profession: "Strategy Consultant",
      rating: 5,
      title: "Quiet confidence, every day",
      body: "It carries my week without announcing itself — meetings, dinners, travel. The leather already feels like it knows me.",
      productOwned: productName,
      verified: true,
      helpful: 42,
      date: "March 2026",
      dateSort: 202603,
      category: "business",
      portraitSrc: "/community/04-taupe-lock.webp",
      portraitAlt: "Amelia with structured DANOVIX bag",
      lifestyleSrc: "/community/04-taupe-lock.webp",
      lifestyleAlt: "Business day styling",
      hasPhoto: true,
      hasVideo: false,
    },
    {
      id: "sofia",
      name: "Sofia L.",
      location: "Los Angeles, USA",
      profession: "Architect",
      rating: 5,
      title: "The unboxing felt like a boutique",
      body: "From the tissue to the dust bag, everything felt intentional. I've never kept packaging before — I kept this.",
      productOwned: productName,
      verified: true,
      helpful: 38,
      date: "February 2026",
      dateSort: 202602,
      category: "gift",
      portraitSrc: "/community/02-pink-unboxing.webp",
      portraitAlt: "Sofia unboxing experience",
      lifestyleSrc: "/community/02-pink-unboxing.webp",
      lifestyleAlt: "Luxury unboxing presentation",
      hasPhoto: true,
      hasVideo: true,
    },
    {
      id: "priya",
      name: "Priya M.",
      location: "London, UK",
      profession: "Editor",
      rating: 5,
      title: "Travel companion that earns its place",
      body: "Airport to hotel to dinner without switching bags. Structure where I need it, softness where I want it.",
      productOwned: productName,
      verified: true,
      helpful: 35,
      date: "January 2026",
      dateSort: 202601,
      category: "travel",
      portraitSrc: "/community/08-atelier-mahogany.webp",
      portraitAlt: "Priya with travel companion bag",
      lifestyleSrc: "/community/08-atelier-mahogany.webp",
      lifestyleAlt: "Travel lifestyle with DANOVIX",
      hasPhoto: true,
      hasVideo: true,
    },
    {
      id: "claire",
      name: "Claire M.",
      location: "Paris, France",
      profession: "Gallery Director",
      rating: 5,
      title: "Craftsmanship you can feel",
      body: "The stitching, the edge finish, the way the hardware sits — every detail rewards a closer look. It feels inherited already.",
      productOwned: productName,
      verified: true,
      helpful: 29,
      date: "December 2025",
      dateSort: 202512,
      category: "evening",
      portraitSrc: "/community/05-bordeaux-kelly.webp",
      portraitAlt: "Claire with evening silhouette",
      lifestyleSrc: "/community/05-bordeaux-kelly.webp",
      lifestyleAlt: "Evening event styling",
      hasPhoto: true,
      hasVideo: false,
    },
    {
      id: "elena",
      name: "Elena V.",
      location: "Milan, Italy",
      profession: "Brand Strategist",
      rating: 5,
      title: "My everyday companion",
      body: "It instantly became the bag I reach for without thinking. Enough capacity for the day, never too much presence.",
      productOwned: productName,
      verified: true,
      helpful: 33,
      date: "November 2025",
      dateSort: 202511,
      category: "daily",
      portraitSrc: "/community/09-pearl-bucket.webp",
      portraitAlt: "Elena with everyday DANOVIX bag",
      lifestyleSrc: "/community/09-pearl-bucket.webp",
      lifestyleAlt: "Weekend coffee ritual",
      hasPhoto: true,
      hasVideo: false,
    },
    {
      id: "naomi",
      name: "Naomi K.",
      location: "Tokyo, Japan",
      rating: 5,
      title: "Timeless rather than trendy",
      body: "I wanted something that would still feel right in five years. The proportions and restraint make that easy to believe.",
      productOwned: productName,
      verified: true,
      helpful: 27,
      date: "October 2025",
      dateSort: 202510,
      category: "weekend",
      portraitSrc: "/community/01-pink-coussin.webp",
      portraitAlt: "Naomi with soft shoulder bag",
      hasPhoto: false,
      hasVideo: false,
    },
    {
      id: "maya",
      name: "Maya T.",
      location: "Toronto, Canada",
      profession: "Attorney",
      rating: 5,
      title: "Gifted — and immediately claimed",
      body: "Received as a birthday gift. Worn to court the following Monday. She understood exactly what I needed.",
      productOwned: productName,
      verified: true,
      helpful: 24,
      date: "September 2025",
      dateSort: 202509,
      category: "gift",
      portraitSrc: "/community/03-taupe-ribbons.webp",
      portraitAlt: "Maya with gifted piece",
      lifestyleSrc: "/community/03-taupe-ribbons.webp",
      lifestyleAlt: "Gift presentation moment",
      hasPhoto: true,
      hasVideo: true,
    },
    {
      id: "hana",
      name: "Hana S.",
      location: "Dubai, UAE",
      profession: "Founder",
      rating: 4,
      title: "Office to evening, one silhouette",
      body: "I used to keep two bags rotating. This one closed the gap — polished enough for clients, soft enough for evenings out.",
      productOwned: productName,
      verified: true,
      helpful: 21,
      date: "August 2025",
      dateSort: 202508,
      category: "business",
      portraitSrc: "/featured/luna-tote/hero.webp",
      portraitAlt: "Hana with office tote",
      lifestyleSrc: "/featured/luna-tote/hero.webp",
      lifestyleAlt: "Business meeting companion",
      hasPhoto: true,
      hasVideo: false,
    },
  ] as const;
}

export function buildVideoTestimonials(
  productName: string,
): readonly VideoTestimonial[] {
  return [
    {
      id: "v-office",
      title: "Daily office use",
      customer: "Amelia R.",
      duration: "0:48",
      category: "business",
      portraitSrc: "/community/04-taupe-lock.webp",
      portraitAlt: "Amelia portrait",
      thumbnailSrc: "/community/04-taupe-lock.webp",
      thumbnailAlt: `${productName} in office setting`,
      verified: true,
    },
    {
      id: "v-travel",
      title: "Travel experience",
      customer: "Priya M.",
      duration: "1:12",
      category: "travel",
      portraitSrc: "/community/08-atelier-mahogany.webp",
      portraitAlt: "Priya portrait",
      thumbnailSrc: "/community/08-atelier-mahogany.webp",
      thumbnailAlt: `${productName} for travel`,
      verified: true,
    },
    {
      id: "v-unbox",
      title: "Luxury unboxing",
      customer: "Sofia L.",
      duration: "0:56",
      category: "gift",
      portraitSrc: "/community/02-pink-unboxing.webp",
      portraitAlt: "Sofia portrait",
      thumbnailSrc: "/community/02-pink-unboxing.webp",
      thumbnailAlt: "DANOVIX luxury unboxing",
      verified: true,
    },
    {
      id: "v-weekend",
      title: "Weekend lifestyle",
      customer: "Elena V.",
      duration: "0:41",
      category: "weekend",
      portraitSrc: "/community/09-pearl-bucket.webp",
      portraitAlt: "Elena portrait",
      thumbnailSrc: "/community/09-pearl-bucket.webp",
      thumbnailAlt: "Weekend styling with DANOVIX",
      verified: true,
    },
  ] as const;
}

export const COMMUNITY_GALLERY: readonly CommunityGalleryShot[] = [
  {
    id: "meeting",
    setting: "Business Meeting",
    imageSrc: "/community/04-taupe-lock.webp",
    imageAlt: "Client in a business meeting with DANOVIX bag",
    span: "wide",
  },
  {
    id: "hotel",
    setting: "Luxury Hotel",
    imageSrc: "/community/08-atelier-mahogany.webp",
    imageAlt: "Hotel lobby moment with DANOVIX",
    span: "tall",
  },
  {
    id: "coffee",
    setting: "Coffee Shop",
    imageSrc: "/community/09-pearl-bucket.webp",
    imageAlt: "Coffee ritual with soft bucket bag",
    span: "square",
  },
  {
    id: "airport",
    setting: "Airport Lounge",
    imageSrc: "/community/07-forest-unboxing.webp",
    imageAlt: "Travel companion in an airport lounge",
    span: "square",
  },
  {
    id: "evening",
    setting: "Evening Event",
    imageSrc: "/featured/celeste-clutch/hero.webp",
    imageAlt: "Evening event styling",
    span: "wide",
  },
  {
    id: "outdoor",
    setting: "Outdoor Lifestyle",
    imageSrc: "/community/06-olive-unboxing.webp",
    imageAlt: "Outdoor weekend with olive crossbody",
    span: "tall",
  },
] as const;

export function filterTestimonials(
  items: readonly ClientTestimonial[],
  filter: TestimonialFilterId,
): ClientTestimonial[] {
  let next = [...items];

  switch (filter) {
    case "photos":
      next = next.filter((item) => item.hasPhoto);
      break;
    case "videos":
      next = next.filter((item) => item.hasVideo);
      break;
    case "business":
    case "travel":
    case "daily":
    case "gift":
      next = next.filter((item) => item.category === filter);
      break;
    default:
      break;
  }

  switch (filter) {
    case "newest":
      next.sort((a, b) => b.dateSort - a.dateSort);
      break;
    case "highest":
      next.sort((a, b) => b.rating - a.rating || b.helpful - a.helpful);
      break;
    case "helpful":
    default:
      next.sort((a, b) => b.helpful - a.helpful);
      break;
  }

  return next;
}
