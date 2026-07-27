import { cn } from "@/lib/cn";

/* Reuse account atmospheric CSS hooks for visual continuity */

export const shoppingPage = cn(
  "shopping-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const shoppingMain = cn("relative z-[1] w-full");

export const shoppingInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1360px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const shoppingEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

export const sectionHeader = cn("mx-auto max-w-[640px] text-center");

export const sectionHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const sectionDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const darkSection = cn(
  "relative z-[2] overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(4rem,10vh,6.5rem)]",
);

export const warmSection = cn(
  "account-warm relative z-[2] overflow-hidden",
  "bg-[#f5f2ec] py-[clamp(4rem,10vh,6.5rem)]",
);

export const warmBg = cn("account-warm-bg absolute inset-0");
export const warmNoise = cn("account-warm-noise absolute inset-0");

export const warmHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[#1a1a1a]",
);

export const warmDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(26_26_26/0.55)]",
);

/* Hero */

export const heroRoot = cn(
  "account-hero relative flex min-h-[30vh] w-full items-center overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(3rem,7vh,4.5rem)] pt-[clamp(7.5rem,15vh,10rem)]",
);

export const heroStage = cn("absolute inset-0 z-0 overflow-hidden");
export const heroBg = cn("account-hero-bg absolute inset-0");
export const heroNoise = cn("account-hero-noise absolute inset-0");
export const heroSpotlight = cn("account-hero-spotlight absolute");
export const heroGrain = cn("account-hero-grain absolute inset-0");

export const heroContent = cn(
  shoppingInner,
  "relative z-[2] mx-auto max-w-[760px] text-center",
);

export const heroHeadline = cn(
  "font-serif font-light leading-[1.04] tracking-[-0.028em]",
  "text-[clamp(2.35rem,6.5vw,4.1rem)] text-[rgb(248_247_244)]",
);

export const heroHeadlineLine = cn("block overflow-hidden");
export const heroHeadlineWord = cn("inline-block will-change-transform");

export const heroDescription = cn(
  "mx-auto mt-6 max-w-[520px] text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)]",
);

/* Cards & chips */

export const glassCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.06)_0%,rgb(248_247_244/0.025)_100%)]",
  "backdrop-blur-[14px]",
  "shadow-[0_24px_56px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.36)]",
);

export const warmGlassCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.58)]",
  "backdrop-blur-[16px]",
  "shadow-[0_20px_48px_-28px_rgb(17_17_17/0.28),inset_0_1px_0_rgb(255_255_255/0.7)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.4)]",
);

export const chip = cn(
  "inline-flex min-h-10 items-center rounded-full border px-4 py-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "transition-[border-color,background-color,color,transform] duration-400",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
);

export const chipIdle = cn(
  "border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(248_247_244/0.68)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(248_247_244)]",
);

export const chipActive = cn(
  "border-[rgb(198_161_91/0.55)] bg-[rgb(198_161_91/0.14)]",
  "text-[rgb(248_247_244)] shadow-[0_8px_24px_-12px_rgb(198_161_91/0.45)]",
);

export const softChip = cn(
  "inline-flex rounded-full border border-[rgb(198_161_91/0.3)]",
  "bg-[rgb(198_161_91/0.08)] px-3 py-1.5",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(214_196_158)]",
);

export const btnPrimary = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_55%,rgb(168_138_78)_100%)]",
  "px-7 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111]",
  "shadow-[0_14px_32px_-16px_rgb(198_161_91/0.5)]",
  "transition-[transform,box-shadow,filter,opacity] duration-500",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "disabled:pointer-hover disabled:opacity-40",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const btnGhost = cn(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.78)]",
  "transition-[border-color,background-color,transform,color] duration-500",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:bg-[rgb(198_161_91/0.08)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const progressTrack = cn(
  "h-[3px] w-full overflow-hidden rounded-full bg-[rgb(248_247_244/0.08)]",
);

export const progressFill = cn(
  "h-full rounded-full",
  "bg-[linear-gradient(90deg,rgb(214_196_158)_0%,rgb(198_161_91)_100%)]",
  "transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const optionCard = cn(
  "group/opt relative flex min-h-[72px] items-center justify-center rounded-[18px] border px-5 py-5 text-center",
  "font-serif text-[1.15rem] font-light tracking-[-0.015em]",
  "transition-[border-color,background-color,transform,color,box-shadow] duration-400",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
);

export const optionIdle = cn(
  "border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(248_247_244/0.78)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
);

export const optionActive = cn(
  "border-[rgb(198_161_91/0.55)] bg-[rgb(198_161_91/0.12)]",
  "text-[rgb(248_247_244)] shadow-[0_12px_32px_-16px_rgb(198_161_91/0.4)]",
);
