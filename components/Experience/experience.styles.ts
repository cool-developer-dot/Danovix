import { cn } from "@/lib/cn";

export const experiencePage = cn(
  "experience-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const experienceMain = cn(
  "relative z-[1] flex min-h-screen w-full flex-col",
);

export const experienceInner = cn(
  "relative z-[2] mx-auto w-full max-w-[920px] px-5 sm:px-8",
);

export const experienceHero = cn(
  "account-hero relative flex flex-1 flex-col items-center justify-center overflow-hidden",
  "pb-[clamp(4rem,10vh,7rem)] pt-[clamp(7.5rem,15vh,10.5rem)]",
);

export const experienceStage = cn("absolute inset-0 z-0 overflow-hidden");
export const experienceBg = cn("account-hero-bg absolute inset-0");
export const experienceNoise = cn("account-hero-noise absolute inset-0");
export const experienceSpotlight = cn("account-hero-spotlight absolute");
export const experienceGrain = cn("account-hero-grain absolute inset-0");

export const experienceEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

export const experienceHeading = cn(
  "mt-5 text-center font-serif font-light leading-[1.06] tracking-[-0.028em]",
  "text-[clamp(2.2rem,6.5vw,3.85rem)] text-[rgb(248_247_244)]",
);

export const experienceDescription = cn(
  "mx-auto mt-6 max-w-[480px] text-center text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)]",
);

export const experienceActions = cn(
  "mt-10 flex flex-wrap items-center justify-center gap-3",
);

export const experienceBtnPrimary = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_55%,rgb(168_138_78)_100%)]",
  "px-7 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111]",
  "shadow-[0_14px_32px_-16px_rgb(198_161_91/0.5)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const experienceBtnGhost = cn(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.78)]",
  "transition-[border-color,background-color,transform,color] duration-500",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:bg-[rgb(198_161_91/0.08)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const experienceCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.07)_0%,rgb(248_247_244/0.025)_100%)]",
  "p-6 backdrop-blur-[16px] sm:p-8",
  "shadow-[0_24px_56px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
);

export const pedestal = cn(
  "relative mx-auto mb-8 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32",
);

export const pedestalRing = cn(
  "absolute inset-0 rounded-full border border-[rgb(198_161_91/0.28)]",
  "bg-[radial-gradient(circle_at_50%_35%,rgb(214_196_158/0.18)_0%,transparent_65%)]",
  "shadow-[0_20px_48px_-18px_rgb(198_161_91/0.35)]",
);

export const pedestalCore = cn(
  "relative h-16 w-16 rounded-full border border-[rgb(248_247_244/0.12)]",
  "bg-[linear-gradient(160deg,rgb(248_247_244/0.08)_0%,rgb(198_161_91/0.12)_100%)]",
);

/* Skeletons */

export const skeletonShimmer = cn(
  "danovix-skeleton relative overflow-hidden rounded-[18px]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.07)_0%,rgb(248_247_244/0.03)_100%)]",
  "border border-[rgb(248_247_244/0.08)]",
);

export const skeletonPulse = cn(
  "after:pointer-events-none after:absolute after:inset-0 after:translate-x-[-120%]",
  "after:bg-[linear-gradient(105deg,transparent_30%,rgb(248_247_244/0.12)_50%,transparent_70%)]",
  "after:animate-[danovix-skeleton-sweep_1.8s_ease-in-out_infinite]",
);
