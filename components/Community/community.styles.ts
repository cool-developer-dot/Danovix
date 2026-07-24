import { cn } from "@/lib/cn";

/* ---------- Root & Stage ---------- */

export const communityRoot = cn(
  "community relative z-[3] w-full overflow-hidden bg-[#f5f2ec]",
);

export const communityStage = cn(
  "community-stage relative w-full overflow-hidden",
);

export const communityInner = cn(
  "community-inner relative z-[2] mx-auto w-full max-w-[1400px]",
  "px-5 py-[clamp(5rem,14vh,9rem)] sm:px-8 lg:px-12 xl:px-16",
);

/* ---------- Header ---------- */

export const communityHeader = cn(
  "community-header mx-auto flex max-w-[640px] flex-col items-center text-center",
);

export const communityLabel = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.32em]",
  "text-[rgb(168_138_78)] sm:tracking-[0.38em]",
);

export const communityHeading = cn(
  "mt-6 font-serif font-light leading-[1.06] tracking-[-0.02em]",
  "text-[clamp(2.15rem,6.5vw,3.85rem)] text-[#1a1a1a]",
  "sm:mt-7",
);

export const communityHeadingLine = cn("block");

export const communityDescription = cn(
  "mt-6 max-w-[420px] text-[clamp(13px,3.4vw,15px)] leading-[1.85] text-[rgb(26_26_26/0.58)]",
  "sm:mt-7",
);

/* ---------- Editorial Grid ---------- */

export const communityGrid = cn(
  "community-grid mt-[clamp(3.5rem,9vh,6rem)] grid w-full",
  "grid-cols-1 gap-y-[clamp(1.75rem,4vh,2.75rem)]",
  "md:grid-cols-12 md:gap-x-[clamp(1rem,2vw,1.75rem)] md:gap-y-[clamp(1.75rem,3.5vh,2.75rem)]",
);

export const communityCellHero = cn("md:col-span-7 md:row-span-2");

export const communityCellTall = cn("md:col-span-5 md:pt-[clamp(1rem,3vh,2.5rem)]");

export const communityCellQuote = cn(
  "md:col-span-5 md:flex md:items-center md:justify-center",
);

export const communityCellStory = cn(
  "md:col-span-5 md:flex md:items-center md:justify-center",
);

export const communityCellWide = cn("md:col-span-7");

export const communityCellSquare = cn("md:col-span-5");

export const communityCellCompact = cn("md:col-span-4");

export const communityCellQuoteWide = cn(
  "md:col-span-12 md:flex md:items-center md:justify-center",
  "md:py-[clamp(1rem,2.5vh,1.75rem)]",
);

export const communityCellOffset = cn("md:col-span-6");

export const communityCellEnd = cn("md:col-span-6");

/* ---------- Lifestyle Card ---------- */

export const lifestyleCard = cn(
  "community-lifestyle group/card relative block w-full overflow-hidden",
  "rounded-[2px] outline-none",
  "focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f2ec]",
);

export const lifestyleMedia = cn(
  "community-lifestyle-media relative w-full overflow-hidden",
  "will-change-transform",
);

export const lifestylePhoto = cn(
  "community-lifestyle-photo relative h-full w-full",
  "will-change-[transform,opacity,filter]",
);

export const lifestyleLightSweep = cn(
  "community-lifestyle-sweep pointer-events-none absolute inset-0 z-[1]",
  "opacity-0",
);

export const lifestyleImage = cn(
  "community-lifestyle-image h-full w-full object-cover object-center",
  "scale-100 transition-transform duration-[1600ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "group-hover/card:scale-[1.06] group-focus-visible/card:scale-[1.06]",
  "motion-reduce:transition-none motion-reduce:group-hover/card:scale-100",
);

export const lifestyleGlass = cn(
  "community-lifestyle-glass pointer-events-none absolute inset-x-3 bottom-3 z-[2]",
  "flex flex-col gap-2.5 rounded-[2px]",
  "px-[clamp(0.9rem,2vw,1.25rem)] py-[clamp(0.85rem,2vw,1.1rem)]",
  "bg-[rgb(248_247_244/0.42)] backdrop-blur-[10px]",
  "border border-[rgb(255_255_255/0.45)]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.55),0_8px_28px_-12px_rgb(26_26_26/0.18)]",
  "opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-4",
  "transition-[opacity,transform] duration-[750ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "sm:group-hover/card:opacity-100 sm:group-hover/card:translate-y-0",
  "sm:group-focus-visible/card:opacity-100 sm:group-focus-visible/card:translate-y-0",
  "motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
);

export const lifestyleCaption = cn(
  "font-sans text-[clamp(10px,2.2vw,11px)] font-medium uppercase tracking-[0.22em]",
  "text-[#1a1a1a]",
);

export const lifestyleMeta = cn(
  "flex items-center gap-4 text-[rgb(26_26_26/0.72)]",
);

export const lifestyleMetaItem = cn(
  "inline-flex items-center gap-1.5 font-sans text-[clamp(10px,2vw,11px)] tracking-[0.04em]",
);

export const lifestyleAspect = {
  hero: "aspect-[3/4] md:aspect-[4/5]",
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
  compact: "aspect-[4/5]",
} as const;

/* ---------- Quote Card ---------- */

export const quoteCard = cn(
  "community-quote relative mx-auto flex w-full max-w-[380px] flex-col",
  "items-center px-3 py-[clamp(1rem,3vh,2rem)] text-center",
);

export const quoteMark = cn(
  "pointer-events-none select-none font-serif text-[clamp(4rem,12vw,6.5rem)]",
  "leading-none text-[rgb(198_161_91/0.28)]",
  "-mb-[clamp(1.25rem,3vh,2rem)]",
);

export const quoteText = cn(
  "font-serif font-light leading-[1.2] tracking-[-0.01em]",
  "text-[clamp(1.45rem,4vw,2.15rem)] text-[#1a1a1a]",
);

export const quoteLine = cn("block");

export const quoteRule = cn(
  "mt-8 h-px w-12 bg-[rgb(198_161_91/0.55)]",
);

/* ---------- Story Card ---------- */

export const storyCard = cn(
  "community-story relative mx-auto flex w-full max-w-[320px] flex-col",
  "px-2 py-[clamp(0.75rem,2vh,1.5rem)]",
);

export const storyHeader = cn("flex items-center gap-3.5");

export const storyAvatar = cn(
  "relative h-10 w-10 shrink-0 overflow-hidden rounded-full",
  "ring-1 ring-[rgb(198_161_91/0.35)] ring-offset-2 ring-offset-[#f5f2ec]",
);

export const storyIdentity = cn("flex flex-col");

export const storyName = cn(
  "font-serif text-[clamp(1.05rem,2.8vw,1.2rem)] font-light leading-tight text-[#1a1a1a]",
);

export const storyLocation = cn(
  "mt-0.5 font-sans text-[clamp(10px,2.2vw,11px)] uppercase tracking-[0.2em]",
  "text-[rgb(26_26_26/0.45)]",
);

export const storyQuote = cn(
  "mt-5 font-serif text-[clamp(1.15rem,3vw,1.35rem)] font-light leading-[1.45]",
  "tracking-[-0.01em] text-[#1a1a1a]",
);

export const storyRule = cn(
  "mt-6 h-px w-full max-w-[180px] bg-[rgb(26_26_26/0.12)]",
);

/* ---------- Instagram CTA ---------- */

export const instagramCta = cn(
  "community-cta mt-[clamp(4rem,10vh,7rem)] flex flex-col items-center text-center",
);

export const instagramHandle = cn(
  "font-serif font-light tracking-[-0.02em]",
  "text-[clamp(2rem,5.5vw,3.25rem)] text-[#1a1a1a]",
);

export const instagramCopy = cn(
  "mt-5 max-w-[360px] text-[clamp(13px,3.2vw,15px)] leading-[1.8]",
  "text-[rgb(26_26_26/0.55)]",
);

export const instagramButton = cn(
  "community-cta-btn group/cta mt-9 inline-flex items-center gap-2.5 rounded-[14px]",
  "border border-[rgb(26_26_26/0.14)] bg-[rgb(255_255_255/0.45)]",
  "px-[clamp(1.5rem,4vw,2.15rem)] h-[clamp(2.85rem,7vw,3.25rem)]",
  "font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase tracking-[0.2em]",
  "text-[#1a1a1a] backdrop-blur-[8px]",
  "shadow-[0_1px_0_rgb(255_255_255/0.7)_inset,0_8px_28px_-12px_rgb(26_26_26/0.12)]",
  "transition-[border-color,background-color,transform,box-shadow] duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-[2px] hover:border-[rgb(198_161_91/0.65)]",
  "hover:bg-[rgb(198_161_91/0.12)]",
  "hover:shadow-[0_1px_0_rgb(255_255_255/0.8)_inset,0_14px_36px_-10px_rgb(198_161_91/0.35)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ec]",
);

export const instagramButtonArrow = cn(
  "text-[1.05em] leading-none transition-transform duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1",
);

/* ---------- Ambient ---------- */

export const communityBackground = cn(
  "community-bg pointer-events-none absolute inset-0 z-0",
);

export const communityNoise = cn(
  "community-noise pointer-events-none absolute inset-0 z-[1]",
);

export const communitySpotlight = cn(
  "community-spotlight pointer-events-none absolute z-[1]",
);

export const communityAmbient = cn(
  "community-ambient pointer-events-none absolute inset-0 z-[1] overflow-hidden",
);

export const communityDust = cn(
  "community-dust pointer-events-none absolute rounded-full",
  "bg-[rgb(198_161_91/0.45)]",
);
