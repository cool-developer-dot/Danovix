import { cn } from "@/lib/cn";

export const productPage = cn(
  "product-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const productMain = cn("relative z-[1] w-full");

export const sectionInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1440px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const eyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

export const sectionHeading = cn(
  "mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-light tracking-[-0.028em]",
  "leading-[1.1] text-[rgb(248_247_244)]",
);

export const sectionBody = cn(
  "mt-5 max-w-[520px] text-[15px] leading-[1.85] text-[rgb(248_247_244/0.58)]",
);

/* ---------- Hero ---------- */

export const heroRoot = cn(
  "product-hero relative w-full overflow-hidden",
  "bg-[#0c0c0c] pt-[clamp(6.5rem,12vh,8.5rem)] pb-[clamp(2.5rem,6vh,4rem)]",
);

export const heroBg = cn("product-hero-bg absolute inset-0");
export const heroNoise = cn("product-hero-noise absolute inset-0");
export const heroGrain = cn("product-hero-grain absolute inset-0");

export const heroGrid = cn(
  sectionInner,
  "relative z-[2] grid grid-cols-1 gap-8",
  "lg:grid-cols-[72px_minmax(0,1fr)_minmax(300px,400px)] lg:gap-8 xl:gap-12",
  "xl:grid-cols-[84px_minmax(0,1fr)_minmax(320px,440px)]",
);

export const thumbRail = cn(
  "flex gap-2.5 overflow-x-auto pb-2",
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:max-h-[min(72vh,720px)] lg:pb-0",
  "lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden",
);

export const thumbBtn = cn(
  "group/thumb relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-[14px]",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.03)]",
  "transition-[border-color,transform,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
  "xl:h-[76px] xl:w-[76px]",
);

export const thumbBtnActive = cn(
  "border-[rgb(198_161_91/0.55)] shadow-[0_0_0_1px_rgb(198_161_91/0.25)]",
);

export const thumbImage = cn(
  "object-cover transition-transform duration-700",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/thumb:scale-[1.06]",
);

export const thumbBadge = cn(
  "absolute inset-x-0 bottom-0 z-[1] bg-[rgb(12_12_12/0.72)] px-1 py-1",
  "text-center font-sans text-[7px] font-medium uppercase tracking-[0.12em]",
  "text-[rgb(248_247_244/0.78)] backdrop-blur-sm",
);

export const stageWrap = cn(
  "relative flex min-h-[min(62vh,640px)] items-center justify-center overflow-hidden",
  "rounded-[28px] border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.015)_100%)]",
  "shadow-[0_32px_90px_-28px_rgb(0_0_0/0.7)]",
);

export const stageImage = cn(
  "object-contain object-center p-6 sm:p-10 transition-opacity duration-700",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const stageOverlay = cn(
  "pointer-events-none absolute inset-0",
  "bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,rgb(12_12_12/0.35)_100%)]",
);

export const stageHint = cn(
  "absolute bottom-5 left-1/2 z-[2] -translate-x-1/2",
  "rounded-full border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(18_16_14/0.72)] px-4 py-2 backdrop-blur-md",
  "font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(248_247_244/0.55)]",
);

export const infoPanel = cn(
  "relative flex flex-col lg:py-2",
);

export const infoCollection = cn(eyebrow, "mb-4");

export const infoName = cn(
  "font-serif text-[clamp(2rem,4.5vw,3rem)] font-light tracking-[-0.028em]",
  "leading-[1.08] text-[rgb(248_247_244)]",
);

export const infoSubtitle = cn(
  "mt-3 text-[15px] leading-[1.7] text-[rgb(248_247_244/0.55)]",
);

export const infoPriceRow = cn(
  "mt-6 flex flex-wrap items-center gap-3",
);

export const infoPrice = cn(
  "font-sans text-[clamp(1.15rem,2.5vw,1.35rem)] tracking-[0.04em]",
  "text-[rgb(248_247_244)]",
);

export const infoBadge = cn(
  "inline-flex items-center rounded-full border border-[rgb(198_161_91/0.4)]",
  "bg-[rgb(198_161_91/0.12)] px-3 py-1.5",
  "font-sans text-[9px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(214_196_158)]",
);

export const infoMeta = cn(
  "mt-4 flex flex-wrap items-center gap-2",
);

export const infoChip = cn(
  "inline-flex items-center rounded-full border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(248_247_244/0.04)] px-3 py-1.5",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.68)]",
);

export const infoRating = cn(
  "mt-5 flex items-center gap-2 font-sans text-[12px] text-[rgb(248_247_244/0.62)]",
);

export const infoStory = cn(
  "mt-6 border-t border-[rgb(248_247_244/0.08)] pt-6",
  "text-[14px] leading-[1.8] text-[rgb(248_247_244/0.58)]",
);

export const colourRow = cn("mt-7");

export const colourLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.45)]",
);

export const colourSwatches = cn("mt-3 flex flex-wrap gap-2.5");

export const colourSwatch = cn(
  "relative h-9 w-9 rounded-full border-2 border-transparent",
  "transition-[transform,box-shadow,border-color] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:scale-105 focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const colourSwatchActive = cn(
  "border-[rgb(248_247_244/0.85)] shadow-[0_0_0_1px_rgb(198_161_91/0.45)]",
);

export const qtyRow = cn("mt-6 flex items-center gap-4");

export const qtyControl = cn(
  "inline-flex h-11 items-center rounded-full border border-[rgb(248_247_244/0.14)]",
  "bg-[rgb(248_247_244/0.03)]",
);

export const qtyBtn = cn(
  "inline-flex h-11 w-11 items-center justify-center",
  "text-[rgb(248_247_244/0.7)] transition-colors duration-300",
  "hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:text-danovix-accent",
);

export const qtyValue = cn(
  "min-w-[2rem] text-center font-sans text-[13px] text-[rgb(248_247_244)]",
);

export const ctaPrimary = cn(
  "mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[14px]",
  "bg-[rgb(248_247_244)] px-8 py-3.5",
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "transition-[transform,background-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:bg-danovix-accent",
  "hover:shadow-[0_20px_48px_-16px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const ctaSecondaryRow = cn(
  "mt-3 grid grid-cols-3 gap-2",
);

export const ctaSecondary = cn(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "font-sans text-[9px] font-medium uppercase tracking-[0.14em]",
  "text-[rgb(248_247_244/0.72)] backdrop-blur-sm",
  "transition-[border-color,background-color,color,transform] duration-400",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const ctaSecondaryActive = cn(
  "border-[rgb(198_161_91/0.55)] bg-[rgb(198_161_91/0.14)] text-[rgb(248_247_244)]",
);

export const trustIndicators = cn(
  "mt-7 flex flex-col gap-2.5 border-t border-[rgb(248_247_244/0.08)] pt-6",
);

export const trustLine = cn(
  "flex items-center gap-3 text-[12px] text-[rgb(248_247_244/0.55)]",
);

/* ---------- Shared section shells ---------- */

export const darkSection = cn(
  "relative z-[2] overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(4rem,11vh,7rem)]",
);

export const ivorySection = cn(
  "relative z-[2] overflow-hidden bg-[#f5f2ec]",
  "py-[clamp(4rem,11vh,7rem)]",
);

export const sectionHeader = cn("mx-auto max-w-[680px] text-center");

/* ---------- Media experience ---------- */

export const mediaTabs = cn(
  "mt-10 flex flex-wrap items-center justify-center gap-2",
);

export const mediaTab = cn(
  "rounded-full border px-5 py-2.5",
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "transition-[border-color,background-color,color] duration-400",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const mediaTabIdle = cn(
  "border-[rgb(248_247_244/0.14)] text-[rgb(248_247_244/0.65)]",
  "hover:border-[rgb(198_161_91/0.4)] hover:text-[rgb(248_247_244)]",
);

export const mediaTabActive = cn(
  "border-[rgb(198_161_91/0.5)] bg-[rgb(198_161_91/0.12)] text-[rgb(248_247_244)]",
);

export const mediaGrid = cn(
  "mt-[clamp(2rem,6vh,3.5rem)] grid grid-cols-2 gap-3 sm:gap-5",
  "md:grid-cols-3 lg:grid-cols-4",
);

export const mediaCard = cn(
  "group/media relative aspect-[3/4] overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.09)]",
  "shadow-[0_24px_60px_-28px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.35)]",
);

export const mediaCardImage = cn(
  "object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.04]",
);

export const mediaCardLabel = cn(
  "absolute inset-x-0 bottom-0 z-[1] p-4",
  "bg-[linear-gradient(180deg,transparent,rgb(12_12_12/0.75))]",
  "font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(248_247_244/0.85)]",
);

/* ---------- 3D ---------- */

export const viewerShell = cn(
  "relative mx-auto mt-10 aspect-[4/3] w-full max-w-[980px] overflow-hidden",
  "rounded-[28px] border border-[rgb(248_247_244/0.1)]",
  "bg-[radial-gradient(ellipse_at_50%_40%,rgb(40_34_28)_0%,rgb(12_12_12)_70%)]",
  "shadow-[0_40px_100px_-36px_rgb(0_0_0/0.75)]",
);

export const viewerControls = cn(
  "absolute inset-x-0 bottom-4 z-10 flex flex-wrap items-center justify-center gap-2 px-4",
);

export const viewerBtn = cn(
  "inline-flex h-10 items-center gap-2 rounded-full border border-[rgb(248_247_244/0.16)]",
  "bg-[rgb(18_16_14/0.72)] px-4 backdrop-blur-md",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.78)]",
  "transition-[border-color,background-color,transform] duration-400",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const viewerBtnActive = cn(
  "border-[rgb(198_161_91/0.5)] bg-[rgb(198_161_91/0.16)]",
);

/* ---------- Story ---------- */

export const storyLayout = cn(
  sectionInner,
  "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16",
);

export const storyCopy = cn("lg:col-span-5");

export const storyLead = cn(
  "mt-5 font-serif text-[clamp(1.85rem,4.5vw,2.85rem)] font-light leading-[1.2]",
  "tracking-[-0.025em] text-[rgb(248_247_244)]",
);

export const storyParagraph = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.58)]",
);

export const storyMedia = cn(
  "relative aspect-[4/5] overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.09)] lg:col-span-7",
  "shadow-[0_32px_80px_-28px_rgb(0_0_0/0.65)]",
);

/* ---------- Craft ---------- */

export const craftTrack = cn(
  "mt-12 flex gap-5 overflow-x-auto pb-4",
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "snap-x snap-mandatory",
);

export const craftCard = cn(
  "group/craft relative w-[min(78vw,320px)] shrink-0 snap-start overflow-hidden",
  "rounded-[24px] border border-[rgb(248_247_244/0.09)]",
  "bg-[rgb(248_247_244/0.03)]",
);

export const craftImageWrap = cn("relative aspect-[4/5] overflow-hidden");

export const craftImage = cn(
  "object-cover transition-transform duration-[900ms]",
  "group-hover/craft:scale-[1.04]",
);

export const craftBody = cn("p-5 sm:p-6");

export const craftIndex = cn(
  "font-sans text-[10px] uppercase tracking-[0.22em] text-[rgb(214_196_158/0.85)]",
);

export const craftTitle = cn(
  "mt-2 font-serif text-[1.45rem] font-light text-[rgb(248_247_244)]",
);

export const craftDesc = cn(
  "mt-2 text-[13px] leading-relaxed text-[rgb(248_247_244/0.55)]",
);

/* ---------- Features ---------- */

export const featureGrid = cn(
  "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5",
);

export const featureCard = cn(
  "rounded-[22px] border border-[rgb(17_17_17/0.08)]",
  "bg-[rgb(248_247_244/0.55)] p-5 backdrop-blur-md",
  "shadow-[0_16px_40px_-28px_rgb(17_17_17/0.25)]",
  "transition-[transform,border-color] duration-500",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.4)]",
);

export const featureIcon = cn(
  "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.8)]",
  "text-[rgb(168_138_78)]",
);

export const featureTitle = cn(
  "font-serif text-[1.2rem] font-light text-[#1a1a1a]",
);

export const featureDesc = cn(
  "mt-2 text-[13px] leading-relaxed text-[rgb(26_26_26/0.58)]",
);

/* ---------- Lifestyle gallery ---------- */

export const lifestyleGrid = cn(
  "mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-6 lg:gap-6",
);

export const lifeWide = cn("col-span-2 lg:col-span-4");
export const lifeTall = cn("col-span-1 lg:col-span-2 lg:row-span-2");
export const lifeSquare = cn("col-span-1 lg:col-span-2");

export const lifeCard = cn(
  "group/life relative min-h-[220px] overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.09)] sm:min-h-[280px]",
);

export const lifeImage = cn(
  "object-cover transition-transform duration-[1000ms]",
  "group-hover/life:scale-[1.05]",
);

export const lifeOverlay = cn(
  "absolute inset-0 z-[1]",
  "bg-[linear-gradient(180deg,transparent_35%,rgb(12_12_12/0.78)_100%)]",
);

export const lifeContent = cn("absolute inset-x-0 bottom-0 z-[2] p-5 sm:p-6");

export const lifeTitle = cn(
  "font-serif text-[clamp(1.25rem,3vw,1.75rem)] font-light text-[rgb(248_247_244)]",
);

export const lifeSetting = cn(
  "mt-1 text-[12px] text-[rgb(248_247_244/0.58)]",
);

/* ---------- Film ---------- */

export const filmStage = cn(
  "relative mt-10 aspect-[16/9] overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.09)]",
  "shadow-[0_40px_100px_-36px_rgb(0_0_0/0.7)]",
);

export const filmPlay = cn(
  "absolute inset-0 z-[2] flex items-center justify-center",
);

export const filmPlayBtn = cn(
  "inline-flex h-16 w-16 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.25)] bg-[rgb(248_247_244/0.12)]",
  "text-[rgb(248_247_244)] backdrop-blur-md",
  "transition-[transform,background-color] duration-500",
  "hover:scale-105 hover:bg-[rgb(198_161_91/0.25)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const filmChapters = cn(
  "mt-6 flex flex-wrap items-center justify-center gap-2",
);

export const filmChapter = cn(
  "rounded-full border border-[rgb(248_247_244/0.14)] px-4 py-2",
  "font-sans text-[10px] uppercase tracking-[0.16em] text-[rgb(248_247_244/0.65)]",
  "transition-[border-color,color,background-color] duration-400",
  "hover:border-[rgb(198_161_91/0.45)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

export const filmChapterActive = cn(
  "border-[rgb(198_161_91/0.5)] bg-[rgb(198_161_91/0.12)] text-[rgb(248_247_244)]",
);

/* ---------- Dimensions ---------- */

export const dimLayout = cn(
  "mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12",
);

export const dimDiagram = cn(
  "relative flex aspect-square items-center justify-center overflow-hidden",
  "rounded-[28px] border border-[rgb(248_247_244/0.09)]",
  "bg-[rgb(248_247_244/0.03)] lg:col-span-5",
);

export const dimSpecs = cn(
  "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7 lg:content-start",
);

export const dimSpec = cn(
  "rounded-[18px] border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.03)] p-4",
);

export const dimLabel = cn(
  "font-sans text-[9px] uppercase tracking-[0.2em] text-[rgb(214_196_158/0.85)]",
);

export const dimValue = cn(
  "mt-2 font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]",
);

export const capacityGrid = cn(
  "mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
);

export const capacityChip = cn(
  "flex items-center gap-2 rounded-full border px-3.5 py-2.5",
  "font-sans text-[11px] tracking-[0.02em]",
);

export const capacityFit = cn(
  "border-[rgb(198_161_91/0.35)] bg-[rgb(198_161_91/0.1)] text-[rgb(248_247_244/0.85)]",
);

export const capacityMiss = cn(
  "border-[rgb(248_247_244/0.08)] bg-[rgb(248_247_244/0.02)] text-[rgb(248_247_244/0.35)]",
);

/* ---------- Colour experience ---------- */

export const colourExperienceGrid = cn(
  "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
);

export const colourCard = cn(
  "group/colour relative aspect-[3/4] overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.09)] text-left",
  "transition-[transform,border-color] duration-600",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.4)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const colourCardActive = cn(
  "border-[rgb(198_161_91/0.55)] ring-1 ring-[rgb(198_161_91/0.3)]",
);

export const colourCardImage = cn(
  "object-cover transition-transform duration-900 group-hover/colour:scale-[1.04]",
);

export const colourCardMeta = cn(
  "absolute inset-x-0 bottom-0 z-[1] p-5",
  "bg-[linear-gradient(180deg,transparent,rgb(12_12_12/0.8))]",
);

/* ---------- Complete the look ---------- */

export const lookGrid = cn(
  "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6",
);

export const lookCard = cn(
  "group/look overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.09)]",
  "bg-[rgb(248_247_244/0.03)]",
  "transition-[transform,border-color] duration-600",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.35)]",
);

export const lookImageWrap = cn("relative aspect-[3/4] overflow-hidden");

export const lookImage = cn(
  "object-cover transition-transform duration-900 group-hover/look:scale-[1.04]",
);

export const lookInfo = cn("p-4 text-center");

export const lookName = cn(
  "font-serif text-[1.15rem] font-light text-[rgb(248_247_244)]",
);

export const lookMeta = cn(
  "mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(198_161_91/0.85)]",
);

/* ---------- Client Stories / Testimonials ---------- */

export const storiesToolbar = cn(
  "mt-8 flex flex-wrap items-center justify-center gap-2",
  "max-md:flex-nowrap max-md:justify-start max-md:overflow-x-auto max-md:pb-2",
  "max-md:[-ms-overflow-style:none] max-md:[scrollbar-width:none]",
  "max-md:[&::-webkit-scrollbar]:hidden",
);

export const storiesGrid = cn(
  "mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
);

export const storyCard = cn(
  "group/story flex h-full flex-col overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.09)] bg-[rgb(248_247_244/0.03)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.34)]",
);

export const storyCardImage = cn(
  "relative aspect-[16/10] overflow-hidden",
);

export const storyCardPortrait = cn(
  "absolute left-4 top-4 z-[2] h-12 w-12 overflow-hidden rounded-full",
  "border border-[rgb(248_247_244/0.25)] shadow-[0_8px_24px_-10px_rgb(0_0_0/0.6)]",
);

export const storyCardBodyWrap = cn("flex flex-1 flex-col p-5 sm:p-6");

export const storyStars = cn("flex gap-1 text-[rgb(214_196_158)]");

export const storyCardTitle = cn(
  "mt-3 font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]",
);

export const storyCardBody = cn(
  "mt-3 text-[14px] leading-[1.75] text-[rgb(248_247_244/0.58)]",
);

export const storyCardMeta = cn(
  "mt-auto flex flex-wrap items-center gap-2 pt-5",
  "font-sans text-[10px] uppercase tracking-[0.16em] text-[rgb(248_247_244/0.45)]",
);

export const metricsGrid = cn(
  "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4",
);

export const metricCard = cn(
  "rounded-[20px] border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.03)] px-4 py-5 text-center backdrop-blur-sm",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]",
);

export const metricValue = cn(
  "font-serif text-[clamp(1.65rem,3.5vw,2.15rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const metricLabel = cn(
  "mt-2 font-sans text-[9px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(214_196_158/0.9)]",
);

export const metricDetail = cn(
  "mt-1.5 text-[11px] leading-relaxed text-[rgb(248_247_244/0.42)]",
);

export const featuredStory = cn(
  "mt-12 grid grid-cols-1 overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.1)] lg:grid-cols-12",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_32px_90px_-32px_rgb(0_0_0/0.65)]",
);

export const featuredMedia = cn(
  "relative min-h-[320px] overflow-hidden lg:col-span-7 lg:min-h-[520px]",
);

export const featuredCopy = cn(
  "relative flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10",
);

export const featuredBadge = cn(
  "inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(198_161_91/0.4)]",
  "bg-[rgb(198_161_91/0.12)] px-3.5 py-1.5",
  "font-sans text-[9px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(214_196_158)]",
);

export const featuredQuote = cn(
  "mt-6 font-serif text-[clamp(1.45rem,3.2vw,2rem)] font-light leading-[1.35]",
  "tracking-[-0.02em] text-[rgb(248_247_244)]",
);

export const featuredBody = cn(
  "mt-5 text-[14px] leading-[1.8] text-[rgb(248_247_244/0.58)]",
);

export const featuredIdentity = cn("mt-8 flex items-center gap-4");

export const featuredPortrait = cn(
  "relative h-14 w-14 shrink-0 overflow-hidden rounded-full",
  "border border-[rgb(248_247_244/0.2)]",
);

export const featuredName = cn(
  "font-serif text-[1.2rem] font-light text-[rgb(248_247_244)]",
);

export const featuredMeta = cn(
  "mt-1 text-[12px] leading-relaxed text-[rgb(248_247_244/0.5)]",
);

export const editorialQuoteBlock = cn(
  "mx-auto my-[clamp(3rem,8vh,5rem)] flex max-w-[720px] flex-col items-center",
  "px-4 text-center",
);

export const editorialQuoteText = cn(
  "font-serif text-[clamp(1.55rem,4vw,2.45rem)] font-light leading-[1.35]",
  "tracking-[-0.02em] text-[rgb(248_247_244/0.92)]",
);

export const editorialQuoteAttr = cn(
  "mt-6 font-sans text-[10px] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(214_196_158/0.8)]",
);

export const videoGrid = cn(
  "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
);

export const videoCard = cn(
  "group/video relative overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.09)]",
  "transition-[transform,border-color] duration-600",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.35)]",
);

export const videoThumb = cn(
  "relative aspect-[3/4] overflow-hidden",
);

export const videoImage = cn(
  "object-cover transition-transform duration-[900ms]",
  "group-hover/video:scale-[1.04]",
);

export const videoOverlay = cn(
  "absolute inset-0 z-[1]",
  "bg-[linear-gradient(180deg,rgb(12_12_12/0.1)_0%,rgb(12_12_12/0.72)_100%)]",
);

export const videoPlay = cn(
  "absolute left-1/2 top-1/2 z-[2] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2",
  "items-center justify-center rounded-full border border-[rgb(248_247_244/0.28)]",
  "bg-[rgb(248_247_244/0.12)] text-[rgb(248_247_244)] backdrop-blur-md",
  "transition-[transform,background-color] duration-500",
  "group-hover/video:scale-105 group-hover/video:bg-[rgb(198_161_91/0.28)]",
);

export const videoMeta = cn(
  "absolute inset-x-0 bottom-0 z-[2] p-4 sm:p-5",
);

export const videoTitle = cn(
  "font-serif text-[1.2rem] font-light text-[rgb(248_247_244)]",
);

export const videoSub = cn(
  "mt-1.5 flex flex-wrap items-center gap-2",
  "font-sans text-[10px] uppercase tracking-[0.16em] text-[rgb(248_247_244/0.65)]",
);

export const communityGrid = cn(
  "mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 lg:gap-5",
);

export const communityWide = cn("col-span-2 lg:col-span-4");
export const communityTall = cn("col-span-1 lg:col-span-2 lg:row-span-2");
export const communitySquare = cn("col-span-1 lg:col-span-2");

export const communityCard = cn(
  "group/community relative min-h-[200px] overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.09)] sm:min-h-[240px]",
);

export const communityImage = cn(
  "object-cover transition-transform duration-[1000ms]",
  "group-hover/community:scale-[1.05]",
);

export const communityOverlay = cn(
  "absolute inset-0 z-[1]",
  "bg-[linear-gradient(180deg,transparent_40%,rgb(12_12_12/0.78)_100%)]",
);

export const communityLabel = cn(
  "absolute inset-x-0 bottom-0 z-[2] p-4",
  "font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(248_247_244/0.88)]",
);

export const socialProofRow = cn(
  "mt-10 flex flex-wrap items-center justify-center gap-2.5",
);

export const socialProofChip = cn(
  "inline-flex items-center rounded-full border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(248_247_244/0.04)] px-4 py-2.5",
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.68)]",
);

export const storiesCtaWrap = cn(
  "mt-[clamp(3rem,8vh,4.5rem)] flex flex-col items-center text-center",
);

export const storiesCta = cn(
  "mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-[14px]",
  "bg-[rgb(248_247_244)] px-8 py-3.5",
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "transition-[transform,background-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:bg-danovix-accent",
  "hover:shadow-[0_20px_48px_-16px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

/* ---------- AI stylist ---------- */

export const stylistCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.58)]",
  "p-6 backdrop-blur-[18px] sm:p-8 lg:p-10",
  "shadow-[0_24px_56px_-32px_rgb(17_17_17/0.3),inset_0_1px_0_rgb(255_255_255/0.7)]",
);

export const stylistLayout = cn(
  "relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start",
);

export const stylistHeading = cn(
  "font-serif text-[clamp(1.85rem,4.5vw,2.65rem)] font-light text-[#1a1a1a]",
);

export const stylistDesc = cn(
  "mt-4 max-w-[520px] text-[15px] leading-[1.8] text-[rgb(26_26_26/0.62)]",
);

export const stylistList = cn(
  "mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2",
);

export const stylistItem = cn(
  "flex items-center gap-3 text-[13px] text-[rgb(26_26_26/0.68)]",
);

export const stylistDot = cn("h-1 w-1 shrink-0 rounded-full bg-danovix-accent");

export const stylistCta = cn(
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-[14px]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "transition-[transform,filter] duration-500 hover:-translate-y-0.5 hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
);

export const stylistPrompts = cn("mt-5 flex flex-wrap gap-2");

export const stylistPrompt = cn(
  "rounded-full border border-[rgb(17_17_17/0.1)] bg-[rgb(248_247_244/0.7)]",
  "px-3.5 py-2 text-[12px] text-[rgb(26_26_26/0.65)]",
  "transition-[border-color,background-color] duration-300",
  "hover:border-[rgb(198_161_91/0.45)] hover:bg-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

/* ---------- Trust ---------- */

export const trustList = cn("mt-10 mx-auto max-w-[880px] space-y-3");

export const trustItem = cn(
  "overflow-hidden rounded-[18px] border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.03)]",
);

export const trustTrigger = cn(
  "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
  "transition-colors duration-300 hover:bg-[rgb(248_247_244/0.04)]",
  "focus-visible:outline-none focus-visible:bg-[rgb(248_247_244/0.05)]",
);

export const trustTitle = cn(
  "font-serif text-[1.25rem] font-light text-[rgb(248_247_244)]",
);

export const trustSummary = cn(
  "mt-1 text-[13px] text-[rgb(248_247_244/0.5)]",
);

export const trustDetail = cn(
  "border-t border-[rgb(248_247_244/0.08)] px-5 py-4",
  "text-[14px] leading-[1.75] text-[rgb(248_247_244/0.58)]",
);

/* ---------- Recently viewed ---------- */

export const recentGrid = cn(
  "mt-10 flex gap-5 overflow-x-auto pb-3",
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
);

export const recentCard = cn(
  "group/recent w-[min(70vw,260px)] shrink-0 overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.09)]",
  "transition-[transform,border-color] duration-600",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.35)]",
);

export const recentImageWrap = cn("relative aspect-[3/4] overflow-hidden");

export const recentImage = cn(
  "object-cover transition-transform duration-900 group-hover/recent:scale-[1.04]",
);

export const recentInfo = cn("p-4 text-center");

export const recentName = cn(
  "font-serif text-[1.15rem] font-light text-[rgb(248_247_244)]",
);

export const recentMeta = cn(
  "mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(198_161_91/0.85)]",
);
