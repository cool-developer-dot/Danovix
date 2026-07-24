import { cn } from "@/lib/cn";

export const featuredRoot = cn(
  "featured-collection relative w-full overflow-hidden bg-[#111111]",
);

export const featuredStage = cn(
  "featured-collection-stage relative w-full overflow-hidden",
);

export const featuredInner = cn(
  "featured-collection-inner relative z-[2] mx-auto flex w-full max-w-[1240px] flex-col items-center",
  "px-5 py-[clamp(4.5rem,12vh,7.5rem)] sm:px-8 lg:px-12",
);

/* ---------- Header ---------- */

export const featuredHeader = cn(
  "featured-collection-header mx-auto flex max-w-[640px] flex-col items-center text-center",
);

export const featuredLabel = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.32em]",
  "text-[rgb(214_196_158)] sm:tracking-[0.38em]",
);

export const featuredHeading = cn(
  "mt-6 font-serif font-light leading-[1.06] tracking-[-0.02em]",
  "text-[clamp(2rem,6vw,3.4rem)] text-[rgb(248_247_244)]",
  "sm:mt-7",
);

export const featuredHeadingLine = cn("block");

export const featuredHeadingLead = cn(
  "block text-[rgb(198_161_91)]",
);

export const featuredDescription = cn(
  "mt-6 max-w-[560px] text-[clamp(13px,3.4vw,15px)] leading-[1.85] text-[rgb(248_247_244/0.66)]",
  "sm:mt-7",
);

/* ---------- Card ---------- */

export const featuredCardWrap = cn(
  "featured-collection-card-wrap mt-[clamp(3rem,7vh,4.5rem)] w-full",
);

export const featuredCard = cn(
  "featured-collection-card group/card relative mx-auto flex w-full max-w-[980px] flex-col overflow-hidden",
  "rounded-[32px] border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.045)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_80px_-24px_rgb(0_0_0/0.6)] backdrop-blur-[10px]",
  "transition-[transform,border-color,box-shadow,background-color] duration-[600ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "hover:-translate-y-[4px] hover:border-[rgb(198_161_91/0.34)]",
  "hover:shadow-[0_36px_110px_-28px_rgb(0_0_0/0.7),0_0_0_1px_rgb(198_161_91/0.14)]",
  "focus-within:border-[rgb(198_161_91/0.34)]",
);

/* Warm luxury highlight sweep on hover */
export const featuredCardGlow = cn(
  "featured-collection-card-glow pointer-events-none absolute inset-0 z-[1] opacity-0",
  "bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgb(214_196_158/0.12),transparent_72%)]",
  "transition-opacity duration-[700ms] ease-out group-hover/card:opacity-100",
);

/* ---------- Image stage (editorial hero — dominant frame) ---------- */

export const featuredImageStage = cn(
  "featured-collection-image-stage relative z-[2] flex w-full items-center justify-center",
  "px-[clamp(0.85rem,3vw,1.75rem)] pt-[clamp(0.85rem,3vw,1.75rem)] pb-[clamp(0.75rem,2.5vw,1.25rem)]",
);

export const featuredImageViewport = cn(
  "featured-collection-image-viewport relative w-full overflow-hidden",
  "rounded-[22px] border border-[rgb(248_247_244/0.12)]",
  "shadow-[0_28px_70px_-24px_rgb(0_0_0/0.75),inset_0_1px_0_rgb(255_255_255/0.08)]",
  "ring-1 ring-[rgb(198_161_91/0.12)]",
  "transition-[border-color,box-shadow] duration-[600ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/card:border-[rgb(198_161_91/0.38)]",
  "group-hover/card:shadow-[0_36px_90px_-22px_rgb(0_0_0/0.8),0_0_40px_-12px_rgb(198_161_91/0.28)]",
  "group-hover/card:ring-[rgb(198_161_91/0.28)]",
  "[perspective:1800px] [transform-style:preserve-3d]",
);

export const featuredCamera = cn(
  "featured-collection-camera absolute inset-0 origin-center will-change-transform",
  "transform-gpu",
);

export const featuredVignette = cn(
  "featured-collection-vignette pointer-events-none absolute inset-0 z-[3]",
);

export const featuredLens = cn(
  "featured-collection-lens pointer-events-none absolute inset-0 z-[2]",
);

export const featuredImage = cn(
  "featured-collection-image h-full w-full object-cover object-center",
);

export const featuredFloor = cn(
  "featured-collection-floor pointer-events-none absolute left-1/2 bottom-[2%] z-0 opacity-40",
);

/* ---------- Info ---------- */

export const featuredInfo = cn(
  "featured-collection-info relative z-[2] flex flex-col items-center px-[clamp(1.5rem,5vw,3.5rem)]",
  "pb-[clamp(2rem,5vw,3.25rem)] pt-[clamp(0.5rem,2vw,1rem)] text-center",
);

export const featuredCategory = cn(
  "font-sans text-[clamp(9px,2.4vw,10px)] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(198_161_91/0.85)]",
);

export const featuredName = cn(
  "mt-3 font-serif text-[clamp(1.6rem,5vw,2.35rem)] font-light leading-[1.1] tracking-[-0.01em]",
  "text-[rgb(248_247_244)]",
);

export const featuredProductDescription = cn(
  "mt-4 max-w-[440px] text-[clamp(12.5px,3.2vw,14px)] leading-[1.7] text-[rgb(248_247_244/0.58)]",
  "min-h-[4.75em]",
);

export const featuredPrice = cn(
  "mt-6 font-sans text-[clamp(11px,3vw,13px)] font-medium tracking-[0.08em] text-[rgb(248_247_244/0.82)]",
);

export const featuredCta = cn(
  "featured-collection-cta group/cta mt-6 inline-flex items-center gap-2 rounded-[14px]",
  "border border-[rgb(248_247_244/0.22)] bg-[rgb(248_247_244/0.05)] px-[clamp(1.5rem,4vw,2rem)]",
  "h-[clamp(2.85rem,7vw,3.25rem)] font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase",
  "tracking-[0.2em] text-[rgb(248_247_244)] backdrop-blur-[2px]",
  "transition-[border-color,background-color,transform,box-shadow] duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-[2px] hover:border-[rgb(198_161_91/0.7)] hover:bg-[rgb(198_161_91/0.14)]",
  "hover:shadow-[0_12px_36px_-8px_rgb(198_161_91/0.35)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]",
);

export const featuredCtaArrow = cn(
  "text-[1.05em] leading-none transition-transform duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1",
);

/* ---------- Navigation ---------- */

export const featuredNav = cn(
  "featured-collection-nav mt-[clamp(2.5rem,6vh,3.5rem)] flex w-full max-w-[980px] items-center justify-between gap-4",
);

export const featuredNavButton = cn(
  "featured-collection-nav-btn group/nav inline-flex items-center gap-2 rounded-full",
  "border border-[rgb(248_247_244/0.16)] bg-[rgb(248_247_244/0.03)] px-[clamp(1rem,3vw,1.5rem)]",
  "h-[clamp(2.75rem,7vw,3rem)] font-sans text-[clamp(9px,2.4vw,10px)] font-medium uppercase",
  "tracking-[0.2em] text-[rgb(248_247_244/0.78)] backdrop-blur-[2px]",
  "transition-[border-color,background-color,color,transform] duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(198_161_91/0.55)] hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]",
  "disabled:cursor-not-allowed disabled:opacity-40",
);

export const featuredNavArrow = cn(
  "text-[1.15em] leading-none transition-transform duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const featuredNavLabel = cn("hidden sm:inline");

export const featuredCounter = cn(
  "featured-collection-counter flex items-baseline gap-1 font-sans tracking-[0.14em] tabular-nums",
);

export const featuredCounterCurrent = cn(
  "text-[clamp(13px,3.4vw,15px)] font-medium text-[rgb(248_247_244)]",
);

export const featuredCounterDivider = cn(
  "text-[clamp(11px,3vw,13px)] text-[rgb(248_247_244/0.3)]",
);

export const featuredCounterTotal = cn(
  "text-[clamp(11px,3vw,13px)] text-[rgb(248_247_244/0.45)]",
);

/* ---------- Ambient ---------- */

export const featuredBackground = cn(
  "featured-collection-bg pointer-events-none absolute inset-0 z-0",
);

export const featuredNoise = cn(
  "featured-collection-noise pointer-events-none absolute inset-0 z-[1]",
);

export const featuredSpotlight = cn(
  "featured-collection-spotlight pointer-events-none absolute z-[1]",
);
