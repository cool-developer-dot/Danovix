import { cn } from "@/lib/cn";

/* ---------- Page shell ---------- */

export const wishlistPage = cn(
  "wishlist-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const wishlistMain = cn("relative z-[1] w-full");

export const wishlistSectionInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1360px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const wishlistEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

/* ---------- Hero ---------- */

export const heroRoot = cn(
  "wishlist-hero relative flex min-h-[40vh] w-full flex-col items-center justify-center overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(4.5rem,10vh,7rem)] pt-[clamp(8rem,16vh,10.5rem)]",
);

export const heroStage = cn("absolute inset-0 z-0 overflow-hidden");

export const heroBg = cn("wishlist-hero-bg absolute inset-0");

export const heroNoise = cn("wishlist-hero-noise absolute inset-0");

export const heroSpotlight = cn("wishlist-hero-spotlight absolute");

export const heroGrain = cn("wishlist-hero-grain absolute inset-0");

export const heroParticles = cn("wishlist-hero-particles absolute inset-0");

export const heroWatermark = cn(
  "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden",
);

export const heroWatermarkText = cn(
  "select-none font-serif font-light uppercase tracking-[0.08em]",
  "text-[clamp(4.5rem,16vw,12rem)] leading-none text-[rgb(248_247_244/0.03)]",
  "whitespace-nowrap",
);

export const heroContent = cn(
  "relative z-[2] mx-auto flex w-full max-w-[820px] flex-col items-center px-5 text-center",
  "sm:px-8",
);

export const heroEyebrow = cn(wishlistEyebrow, "mb-5 sm:mb-6");

export const heroHeadline = cn(
  "font-serif font-light leading-[1.04] tracking-[-0.028em]",
  "text-[clamp(2.4rem,7.5vw,4.5rem)] text-[rgb(248_247_244)]",
);

export const heroHeadlineLine = cn("block overflow-hidden");

export const heroHeadlineWord = cn("inline-block will-change-transform");

export const heroDescription = cn(
  "mt-6 max-w-[480px] text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)] sm:mt-7",
);

export const heroCounter = cn(
  "mt-8 font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(214_196_158/0.9)] sm:mt-9",
);

/* ---------- Editorial intro (hero → collection bridge) ---------- */

export const introRoot = cn(
  "wishlist-intro relative z-[2] w-full",
  "pt-[clamp(2.75rem,7vh,4.5rem)] pb-[clamp(2rem,5vh,3.25rem)]",
);

export const introInner = cn(
  wishlistSectionInner,
  "mx-auto flex min-h-[120px] max-w-[720px] flex-col items-center justify-center text-center",
  "sm:min-h-[140px] lg:min-h-[160px]",
);

export const introHeading = cn(
  "font-serif font-light leading-[1.12] tracking-[-0.025em]",
  "text-[clamp(1.65rem,4vw,2.35rem)] text-[rgb(248_247_244)]",
);

export const introDescription = cn(
  "mt-4 max-w-[520px] text-[clamp(13px,3.2vw,15px)] leading-[1.8]",
  "text-[rgb(248_247_244/0.55)]",
);

/* ---------- Stats ---------- */

export const statsRoot = cn(
  "wishlist-stats relative z-[2]",
  wishlistSectionInner,
  "pb-[clamp(2rem,5vh,3.25rem)] pt-[clamp(0.5rem,2vh,1.25rem)]",
);

export const statsGrid = cn(
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
);

export const statsCard = cn(
  "wishlist-stat-card group/stat relative overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.06)_0%,rgb(248_247_244/0.025)_100%)]",
  "p-5 backdrop-blur-[14px] sm:p-6",
  "shadow-[0_20px_48px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.38)]",
  "hover:shadow-[0_28px_56px_-24px_rgb(0_0_0/0.65),0_0_40px_-18px_rgb(198_161_91/0.28)]",
);

export const statsCardGlow = cn(
  "pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.18)_0%,transparent_70%)] blur-xl",
  "opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100",
);

export const statsIcon = cn(
  "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.04)]",
  "text-[rgb(214_196_158)]",
);

export const statsLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(248_247_244/0.45)]",
);

export const statsValue = cn(
  "mt-2 font-serif text-[clamp(1.35rem,3.5vw,1.75rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

/* ---------- Filters ---------- */

export const filtersRoot = cn(
  "wishlist-filters sticky top-[104px] z-30 w-full",
  "px-4 sm:px-6 lg:px-10 xl:px-14",
  "pt-[clamp(0.75rem,2vh,1.25rem)] pb-[clamp(1.25rem,3vh,2rem)]",
);

export const filtersInner = cn(
  "mx-auto flex w-full max-w-[1360px] flex-col gap-4 rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(18_16_14/0.78)] p-4 backdrop-blur-xl sm:gap-5 sm:p-5 lg:p-6",
  "shadow-[0_24px_64px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]",
  "lg:flex-row lg:items-center lg:justify-between lg:gap-8",
);

export const filtersChips = cn(
  "flex w-full flex-wrap content-start items-center justify-center gap-2",
  "lg:flex-1 lg:justify-start",
);

export const filterChip = cn(
  "wishlist-filter-chip inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 py-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "backdrop-blur-[8px] transition-[border-color,background-color,color,transform,box-shadow]",
  "duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const filterChipIdle = cn(
  "border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(248_247_244/0.68)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(248_247_244)]",
);

export const filterChipActive = cn(
  "border-[rgb(198_161_91/0.55)] bg-[rgb(198_161_91/0.14)]",
  "text-[rgb(248_247_244)] shadow-[0_8px_24px_-12px_rgb(198_161_91/0.45)]",
);

export const filtersTools = cn(
  "flex w-full flex-col gap-3",
  "sm:flex-row sm:items-center sm:justify-center",
  "lg:w-auto lg:shrink-0 lg:justify-end",
);

export const searchWrap = cn(
  "relative flex w-full min-w-0 items-center sm:flex-1 sm:max-w-none lg:w-[240px] lg:flex-none",
);

export const searchIcon = cn(
  "pointer-events-none absolute left-3.5 text-[rgb(248_247_244/0.4)]",
);

export const searchInput = cn(
  "h-11 w-full rounded-full border border-[rgb(248_247_244/0.14)]",
  "bg-[rgb(248_247_244/0.04)] pl-10 pr-4 font-sans text-[13px]",
  "text-[rgb(248_247_244)] placeholder:text-[rgb(248_247_244/0.35)]",
  "backdrop-blur-[8px] transition-[border-color,box-shadow] duration-300",
  "focus:border-[rgb(198_161_91/0.5)] focus:outline-none",
  "focus:shadow-[0_0_0_3px_rgb(198_161_91/0.12)]",
);

export const sortWrap = cn("relative w-full shrink-0 sm:w-auto");

export const sortButton = cn(
  "inline-flex h-11 w-full items-center justify-between gap-2 rounded-full border border-[rgb(248_247_244/0.14)]",
  "bg-[rgb(248_247_244/0.04)] px-4 font-sans text-[10px] font-medium uppercase",
  "tracking-[0.18em] text-[rgb(248_247_244/0.78)] backdrop-blur-[8px]",
  "transition-[border-color,background-color,color] duration-300",
  "hover:border-[rgb(198_161_91/0.45)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
  "sm:w-auto sm:min-w-[168px] sm:justify-center",
);

export const sortMenu = cn(
  "absolute right-0 top-[calc(100%+8px)] z-40 min-w-[200px] overflow-hidden rounded-[16px]",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(18_16_14/0.96)] p-1.5",
  "shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl",
);

export const sortOption = cn(
  "flex w-full items-center rounded-[12px] px-3.5 py-2.5 text-left",
  "font-sans text-[12px] text-[rgb(248_247_244/0.72)]",
  "transition-[background-color,color] duration-200",
  "hover:bg-[rgb(198_161_91/0.12)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:bg-[rgb(198_161_91/0.12)]",
);

export const sortOptionActive = cn(
  "bg-[rgb(198_161_91/0.14)] text-[rgb(248_247_244)]",
);

/* ---------- Collection grid ---------- */

export const gridRoot = cn(
  "wishlist-grid relative z-[2]",
  wishlistSectionInner,
  "pt-[clamp(2.75rem,7vh,4.75rem)] pb-[clamp(3.5rem,9vh,6rem)]",
);

export const gridMasonry = cn(
  "grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 min-[480px]:gap-5",
  "md:gap-6 lg:grid-cols-12 lg:gap-7",
);

export const cardHero = cn("lg:col-span-7");
export const cardFeature = cn("lg:col-span-5");
export const cardSupport = cn("lg:col-span-4");

export const productCard = cn(
  "wishlist-card group/card relative flex h-full flex-col overflow-hidden",
  "rounded-[28px] border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_70px_-28px_rgb(0_0_0/0.6)] backdrop-blur-[10px]",
  "transition-[transform,border-color,box-shadow] duration-[600ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "hover:-translate-y-[3px] hover:border-[rgb(198_161_91/0.34)]",
  "hover:shadow-[0_36px_100px_-28px_rgb(0_0_0/0.72),0_0_0_1px_rgb(198_161_91/0.14)]",
);

export const productImageWrap = cn(
  "relative overflow-hidden rounded-[22px] m-[clamp(0.7rem,2vw,1rem)]",
  "border border-[rgb(248_247_244/0.1)]",
  "shadow-[0_20px_50px_-24px_rgb(0_0_0/0.7)]",
);

export const productImageHero = cn("aspect-[4/3]");
export const productImageFeature = cn("aspect-[3/4]");
export const productImageSupport = cn("aspect-[1/1]");

export const productImage = cn(
  "wishlist-card-image h-full w-full object-cover object-center",
  "scale-100 transform-gpu transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "group-hover/card:scale-[1.03]",
);

export const productOverlay = cn(
  "pointer-events-none absolute inset-0 z-[2] opacity-0",
  "bg-[linear-gradient(180deg,rgb(12_12_12/0.05)_0%,rgb(12_12_12/0.45)_100%)]",
  "backdrop-blur-[1px] transition-opacity duration-500",
  "group-hover/card:opacity-100 group-focus-within/card:opacity-100",
);

export const productSweep = cn(
  "wishlist-card-sweep pointer-events-none absolute inset-0 z-[3] opacity-0",
  "bg-gradient-to-r from-transparent via-[rgb(255_255_255/0.18)] to-transparent",
  "translate-x-[-120%] skew-x-[-18deg]",
);

export const productActions = cn(
  "absolute inset-x-0 bottom-4 z-[4] flex items-center justify-center gap-2.5",
  "translate-y-4 opacity-0 transition-[opacity,transform] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/card:translate-y-0 group-hover/card:opacity-100",
  "group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100",
);

export const actionButton = cn(
  "inline-flex h-11 w-11 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.22)] bg-[rgb(248_247_244/0.12)]",
  "text-[rgb(248_247_244)] backdrop-blur-[12px]",
  "shadow-[0_12px_28px_-14px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color,background-color,box-shadow,color] duration-300",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.55)]",
  "hover:bg-[rgb(198_161_91/0.2)] hover:shadow-[0_14px_32px_-12px_rgb(198_161_91/0.4)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const actionButtonActive = cn(
  "border-[rgb(198_161_91/0.6)] bg-[rgb(198_161_91/0.22)] text-[rgb(248_247_244)]",
);

export const productInfo = cn(
  "flex flex-1 flex-col px-[clamp(1.1rem,3vw,1.5rem)] pb-[clamp(1.25rem,3vw,1.75rem)] pt-1",
);

export const productName = cn(
  "font-serif text-[clamp(1.25rem,3vw,1.55rem)] font-light tracking-[-0.015em]",
  "text-[rgb(248_247_244)]",
);

export const productMeta = cn(
  "mt-2 flex flex-wrap items-center gap-x-2 gap-y-1",
  "font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(198_161_91/0.85)]",
);

export const productMetaDot = cn(
  "inline-block h-0.5 w-0.5 rounded-full bg-[rgb(248_247_244/0.3)]",
);

export const productPrice = cn(
  "mt-3 font-sans text-[13px] tracking-[0.06em] text-[rgb(248_247_244/0.78)]",
);

/* ---------- Empty state ---------- */

export const emptyRoot = cn(
  "relative mx-auto flex max-w-[560px] flex-col items-center py-[clamp(4rem,12vh,7rem)] text-center",
);

export const emptyIllustration = cn(
  "relative mb-10 flex h-40 w-40 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[radial-gradient(circle_at_50%_40%,rgb(198_161_91/0.16),transparent_68%)]",
);

export const emptyHeading = cn(
  "font-serif text-[clamp(2rem,5.5vw,3rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const emptyDescription = cn(
  "mt-5 max-w-[400px] text-[15px] leading-[1.8] text-[rgb(248_247_244/0.55)]",
);

export const emptyCta = cn(
  "group/empty mt-9 inline-flex min-h-12 items-center gap-3 rounded-[14px]",
  "bg-[rgb(248_247_244)] px-8 py-3.5",
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "transition-[transform,background-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:bg-danovix-accent",
  "hover:shadow-[0_20px_48px_-16px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

/* ---------- Quote ---------- */

export const quoteRoot = cn(
  "wishlist-quote relative overflow-hidden bg-[#111111]",
  "py-[clamp(6rem,18vh,11rem)]",
);

export const quoteInner = cn(
  "relative z-[2] mx-auto flex max-w-[820px] flex-col items-center px-5 text-center",
);

export const quoteText = cn(
  "font-serif font-light leading-[1.12] tracking-[-0.028em]",
  "text-[clamp(2rem,6.5vw,4rem)] text-[rgb(248_247_244)]",
);

export const quoteLine = cn("block overflow-hidden");

/* ---------- Compare section ---------- */

export const compareRoot = cn(
  "wishlist-compare relative z-[2] overflow-hidden",
  "bg-[linear-gradient(180deg,#0c0c0c_0%,#12100e_50%,#0c0c0c_100%)]",
  "py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const compareHeader = cn(
  wishlistSectionInner,
  "mx-auto max-w-[720px] text-center",
);

export const compareHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.25rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const compareDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const compareHint = cn(
  "mt-8 font-sans text-[11px] uppercase tracking-[0.22em] text-[rgb(214_196_158/0.75)]",
);

export const floatingCompare = cn(
  "fixed bottom-6 left-1/2 z-40 -translate-x-1/2",
  "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const floatingCompareBtn = cn(
  "inline-flex min-h-12 items-center gap-3 rounded-full",
  "border border-[rgb(198_161_91/0.45)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-7 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111]",
  "shadow-[0_20px_48px_-16px_rgb(198_161_91/0.5),0_8px_24px_-12px_rgb(0_0_0/0.4)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "hover:shadow-[0_24px_56px_-14px_rgb(198_161_91/0.55)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

/* ---------- Compare drawer ---------- */

export const drawerBackdrop = cn(
  "fixed inset-0 z-50 bg-[rgb(8_8_8/0.72)] backdrop-blur-md",
  "transition-opacity duration-500",
);

export const drawerPanel = cn(
  "fixed inset-x-0 bottom-0 z-50 flex max-h-[92vh] flex-col overflow-hidden",
  "rounded-t-[28px] border border-[rgb(248_247_244/0.1)] border-b-0",
  "bg-[linear-gradient(180deg,#161410_0%,#0e0e0c_100%)]",
  "shadow-[0_-32px_80px_-24px_rgb(0_0_0/0.7)]",
  "sm:inset-x-4 sm:bottom-4 sm:max-h-[88vh] sm:rounded-[28px] sm:border-b",
  "lg:inset-x-auto lg:left-1/2 lg:w-[min(1120px,92vw)] lg:-translate-x-1/2",
);

export const drawerHeader = cn(
  "flex items-start justify-between gap-4 border-b border-[rgb(248_247_244/0.08)]",
  "px-5 py-5 sm:px-8 sm:py-6",
);

export const drawerTitle = cn(
  "font-serif text-[clamp(1.6rem,4vw,2.15rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const drawerClose = cn(
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.14)] text-[rgb(248_247_244/0.7)]",
  "transition-[border-color,color,background-color,transform] duration-300",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const drawerBody = cn(
  "overflow-y-auto px-5 py-6 sm:px-8 sm:py-8",
);

export const drawerGrid = cn(
  "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4",
);

export const drawerCard = cn(
  "rounded-[20px] border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.03)] p-3.5 backdrop-blur-[8px]",
);

export const drawerImage = cn(
  "relative mb-4 aspect-[3/4] overflow-hidden rounded-[14px]",
  "border border-[rgb(248_247_244/0.08)]",
);

export const drawerName = cn(
  "font-serif text-[1.15rem] font-light text-[rgb(248_247_244)]",
);

export const drawerSpecList = cn("mt-4 space-y-2.5");

export const drawerSpecRow = cn(
  "flex flex-col gap-0.5 border-b border-[rgb(248_247_244/0.06)] pb-2.5 last:border-0",
);

export const drawerSpecLabel = cn(
  "font-sans text-[9px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(214_196_158/0.75)]",
);

export const drawerSpecValue = cn(
  "text-[13px] leading-snug text-[rgb(248_247_244/0.72)]",
);

export const drawerAiCard = cn(
  "mt-8 overflow-hidden rounded-[22px] border border-[rgb(198_161_91/0.28)]",
  "bg-[linear-gradient(160deg,rgb(248_247_244/0.07)_0%,rgb(198_161_91/0.08)_100%)]",
  "p-6 backdrop-blur-[12px] sm:p-8",
  "shadow-[0_24px_56px_-28px_rgb(198_161_91/0.35)]",
);

export const drawerAiCta = cn(
  "group/aicta mt-6 inline-flex min-h-12 items-center gap-3 rounded-[14px]",
  "border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_55%,rgb(168_138_78)_100%)]",
  "px-7 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111]",
  "transition-[transform,box-shadow,filter] duration-500",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
);

/* ---------- AI Concierge ---------- */

export const conciergeRoot = cn(
  "wishlist-concierge relative z-[2] overflow-hidden",
  "bg-[#f5f2ec] py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const conciergeBg = cn("wishlist-concierge-bg absolute inset-0");

export const conciergeNoise = cn("wishlist-concierge-noise absolute inset-0");

export const conciergeInner = cn(wishlistSectionInner);

export const conciergeCard = cn(
  "group/concierge relative overflow-hidden rounded-[24px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.58)]",
  "p-6 backdrop-blur-[18px] sm:p-8 lg:p-10",
  "shadow-[0_24px_56px_-32px_rgb(17_17_17/0.3),inset_0_1px_0_rgb(255_255_255/0.7)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.45)]",
  "hover:shadow-[0_28px_56px_-24px_rgb(198_161_91/0.32)]",
);

export const conciergeGlow = cn(
  "pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.2)_0%,transparent_70%)] blur-2xl",
);

export const conciergeLayout = cn(
  "relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10",
);

export const conciergeCopy = cn("lg:col-span-7");

export const conciergeAside = cn("lg:col-span-5 lg:pl-4");

export const conciergeIcon = cn(
  "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.75)]",
  "text-[rgb(168_138_78)]",
);

export const conciergeHeading = cn(
  "font-serif font-light tracking-[-0.02em]",
  "text-[clamp(1.85rem,4.5vw,2.65rem)] text-[#1a1a1a]",
);

export const conciergeDescription = cn(
  "mt-4 font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(168_138_78)]",
);

export const conciergeList = cn(
  "mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2",
);

export const conciergeListItem = cn(
  "flex items-center gap-3 text-[13px] text-[rgb(26_26_26/0.68)]",
);

export const conciergeDot = cn(
  "h-1 w-1 shrink-0 rounded-full bg-danovix-accent",
);

export const conciergeCta = cn(
  "group/concierge-cta relative mt-2 inline-flex min-h-12 w-full items-center justify-center gap-3",
  "rounded-[14px] border border-[rgb(198_161_91/0.35)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "shadow-[0_16px_36px_-18px_rgb(198_161_91/0.5)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ec]",
  "sm:w-auto sm:min-w-[240px]",
);

/* ---------- Curated ---------- */

export const curatedRoot = cn(
  "wishlist-curated relative z-[2] overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const curatedHeader = cn(
  wishlistSectionInner,
  "mx-auto max-w-[640px] text-center",
);

export const curatedHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const curatedDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const curatedGrid = cn(
  wishlistSectionInner,
  "mt-[clamp(2.5rem,7vh,4rem)] grid grid-cols-1 gap-6 md:grid-cols-3",
);

export const curatedCard = cn(
  "group/curated relative overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_70px_-28px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.34)]",
);

export const curatedImageWrap = cn(
  "relative m-3 aspect-[4/5] overflow-hidden rounded-[20px]",
);

export const curatedImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/curated:scale-[1.04]",
);

export const curatedInfo = cn("px-5 pb-6 pt-1 text-center");

export const curatedName = cn(
  "font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]",
);

export const curatedMeta = cn(
  "mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]",
);

export const curatedPrice = cn(
  "mt-3 text-[13px] tracking-[0.06em] text-[rgb(248_247_244/0.72)]",
);

export const curatedCta = cn(
  "group/curcta mt-5 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(248_247_244/0.78)] transition-colors duration-300",
  "hover:text-danovix-accent",
  "focus-visible:outline-none focus-visible:text-danovix-accent",
);

export const curatedCtaUnderline = cn(
  "relative after:absolute after:inset-x-[20%] after:bottom-[-3px] after:h-px",
  "after:origin-center after:scale-x-0 after:bg-danovix-accent",
  "after:transition-transform after:duration-500",
  "after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/curcta:after:inset-x-0 group-hover/curcta:after:scale-x-100",
);
