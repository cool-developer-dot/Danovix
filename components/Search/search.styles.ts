import { cn } from "@/lib/cn";

/* ---------- Page shell ---------- */

export const searchPage = cn(
  "search-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const searchMain = cn("relative z-[1] w-full");

export const searchSectionInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1360px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const searchEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

/* ---------- Hero ---------- */

export const heroRoot = cn(
  "search-hero relative flex min-h-[28vh] w-full flex-col items-center justify-center overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(2.5rem,6vh,4rem)] pt-[clamp(7.5rem,14vh,9.5rem)]",
  "sm:min-h-[30vh] lg:min-h-[32vh]",
);

export const heroStage = cn("absolute inset-0 z-0 overflow-hidden");

export const heroBg = cn("search-hero-bg absolute inset-0");

export const heroNoise = cn("search-hero-noise absolute inset-0");

export const heroSpotlight = cn("search-hero-spotlight absolute");

export const heroGrain = cn("search-hero-grain absolute inset-0");

export const heroParticles = cn("search-hero-particles absolute inset-0");

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

export const heroEyebrow = cn(searchEyebrow, "mb-5 sm:mb-6");

export const heroHeadline = cn(
  "font-serif font-light leading-[1.04] tracking-[-0.028em]",
  "text-[clamp(2.2rem,6.5vw,4rem)] text-[rgb(248_247_244)]",
);

export const heroHeadlineLine = cn("block overflow-hidden");

export const heroHeadlineWord = cn("inline-block will-change-transform");

export const heroDescription = cn(
  "mt-5 max-w-[460px] text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)] sm:mt-6",
);

/* ---------- Luxury search bar ---------- */

export const searchBarRoot = cn(
  "search-bar-section relative z-40 w-full",
  "px-4 sm:px-6 lg:px-10 xl:px-14",
  "-mt-[clamp(0.5rem,2vh,1rem)] pb-[clamp(1.5rem,4vh,2.5rem)]",
  "max-md:sticky max-md:top-[104px] max-md:z-40",
  "max-md:bg-[linear-gradient(180deg,rgb(12_12_12/0.96)_0%,rgb(12_12_12/0.88)_70%,transparent_100%)]",
  "max-md:pb-4 max-md:pt-2 max-md:backdrop-blur-md",
);

export const searchBarInner = cn(
  "mx-auto w-full max-w-[920px]",
);

export const searchConsole = cn(
  "group/console relative flex items-center gap-2 rounded-full",
  "border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(18_16_14/0.72)] px-3 py-2.5 backdrop-blur-[20px]",
  "shadow-[0_28px_70px_-28px_rgb(0_0_0/0.65),inset_0_1px_0_rgb(255_255_255/0.1)]",
  "transition-[transform,border-color,box-shadow,background-color] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "sm:gap-3 sm:px-4 sm:py-3",
);

export const searchConsoleActive = cn(
  "-translate-y-1 border-[rgb(198_161_91/0.42)]",
  "bg-[rgb(18_16_14/0.88)]",
  "shadow-[0_36px_80px_-24px_rgb(0_0_0/0.72),0_0_48px_-16px_rgb(198_161_91/0.28),inset_0_1px_0_rgb(255_255_255/0.14)]",
);

export const searchConsoleReflection = cn(
  "pointer-events-none absolute inset-x-6 top-0 h-px",
  "bg-[linear-gradient(90deg,transparent,rgb(214_196_158/0.35),transparent)]",
  "opacity-60",
);

export const searchIconBtn = cn(
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
  "text-[rgb(248_247_244/0.45)] transition-[color,transform,background-color] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-focus-within/console:scale-110 group-focus-within/console:text-[rgb(214_196_158)]",
);

export const searchInput = cn(
  "min-w-0 flex-1 bg-transparent font-sans text-[clamp(14px,3.2vw,16px)]",
  "text-[rgb(248_247_244)] placeholder:text-[rgb(248_247_244/0.32)]",
  "outline-none transition-[letter-spacing] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "placeholder:transition-[opacity,letter-spacing,transform] placeholder:duration-500",
  "focus:placeholder:translate-x-1 focus:placeholder:tracking-[0.02em] focus:placeholder:opacity-55",
);

export const searchActionBtn = cn(
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.04)]",
  "text-[rgb(248_247_244/0.55)] backdrop-blur-[8px]",
  "transition-[transform,border-color,background-color,color,box-shadow] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "hover:bg-[rgb(198_161_91/0.12)] hover:text-[rgb(214_196_158)]",
  "hover:shadow-[0_0_24px_-8px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const voicePulse = cn(
  "pointer-events-none absolute inset-0 rounded-full",
  "border border-[rgb(198_161_91/0.35)] opacity-0",
  "group-hover/voice:animate-[search-voice-pulse_1.8s_ease-out_infinite]",
);

export const promptsRow = cn(
  "mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6",
);

export const promptChip = cn(
  "inline-flex max-w-full items-center rounded-full border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.03)] px-3.5 py-2",
  "font-sans text-[11px] tracking-[0.02em] text-[rgb(248_247_244/0.48)]",
  "transition-[border-color,background-color,color,transform] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(248_247_244/0.88)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

/* ---------- Suggestions ---------- */

export const suggestionsRoot = cn(
  "absolute left-0 right-0 top-[calc(100%+14px)] z-50",
  "origin-top",
);

export const suggestionsPanel = cn(
  "overflow-hidden rounded-[24px] border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(18_16_14/0.94)] p-2.5 backdrop-blur-[22px]",
  "shadow-[0_32px_80px_-24px_rgb(0_0_0/0.75),inset_0_1px_0_rgb(255_255_255/0.06)]",
);

export const suggestionCard = cn(
  "group/suggest flex w-full items-start gap-3.5 rounded-[18px] px-3.5 py-3.5 text-left",
  "transition-[background-color,transform,border-color] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:translate-x-0.5",
  "focus-visible:outline-none focus-visible:bg-[rgb(198_161_91/0.12)]",
);

export const suggestionIcon = cn(
  "mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.04)]",
  "text-[rgb(214_196_158)] transition-[transform,border-color,background-color] duration-400",
  "group-hover/suggest:rotate-3 group-hover/suggest:border-[rgb(198_161_91/0.4)]",
  "group-hover/suggest:bg-[rgb(198_161_91/0.12)]",
);

export const suggestionTitle = cn(
  "font-serif text-[1.05rem] font-light tracking-[-0.015em] text-[rgb(248_247_244)]",
);

export const suggestionDescription = cn(
  "mt-1 text-[12px] leading-relaxed text-[rgb(248_247_244/0.48)]",
);

/* ---------- Trending ---------- */

export const trendingRoot = cn(
  "search-trending relative z-[2]",
  searchSectionInner,
  "pb-[clamp(2.5rem,7vh,4.5rem)] pt-[clamp(0.75rem,2vh,1.5rem)]",
);

export const trendingHeader = cn("mx-auto max-w-[640px] text-center");

export const trendingHeading = cn(
  "mt-4 font-serif text-[clamp(1.75rem,4.5vw,2.5rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const trendingChips = cn(
  "mt-[clamp(1.75rem,5vh,2.75rem)] flex flex-wrap items-center justify-center gap-2.5",
  "max-md:flex-nowrap max-md:justify-start max-md:overflow-x-auto max-md:pb-2",
  "max-md:[-ms-overflow-style:none] max-md:[scrollbar-width:none]",
  "max-md:[&::-webkit-scrollbar]:hidden",
);

export const trendingChip = cn(
  "group/trend relative inline-flex shrink-0 items-center rounded-full border px-5 py-2.5",
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(248_247_244/0.68)] backdrop-blur-[8px]",
  "transition-[border-color,background-color,color,transform,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.5)]",
  "hover:bg-[rgb(198_161_91/0.12)] hover:text-[rgb(248_247_244)]",
  "hover:shadow-[0_12px_32px_-14px_rgb(198_161_91/0.45),0_0_0_1px_rgb(198_161_91/0.2)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const trendingChipGlow = cn(
  "pointer-events-none absolute inset-0 rounded-full opacity-0",
  "bg-[radial-gradient(circle_at_50%_50%,rgb(198_161_91/0.22),transparent_70%)]",
  "transition-opacity duration-500 group-hover/trend:opacity-100",
);

/* ---------- Smart filters ---------- */

export const filtersRoot = cn(
  "search-filters relative z-30 w-full",
  "px-4 sm:px-6 lg:px-10 xl:px-14",
  "pb-[clamp(1.5rem,4vh,2.5rem)]",
);

export const filtersInner = cn(
  "mx-auto flex w-full max-w-[1360px] flex-col gap-3 rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(18_16_14/0.78)] p-4 backdrop-blur-xl sm:gap-4 sm:p-5",
  "shadow-[0_24px_64px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]",
  "lg:flex-row lg:items-center lg:justify-between",
);

export const filtersChips = cn(
  "flex w-full flex-wrap content-start items-center gap-2",
  "max-md:flex-nowrap max-md:overflow-x-auto max-md:pb-1",
  "max-md:[-ms-overflow-style:none] max-md:[scrollbar-width:none]",
  "max-md:[&::-webkit-scrollbar]:hidden",
);

export const filterChip = cn(
  "relative inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border px-4 py-2",
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

export const filterDropdown = cn(
  "absolute left-0 top-[calc(100%+10px)] z-40 min-w-[200px] overflow-hidden rounded-[16px]",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(18_16_14/0.97)] p-1.5",
  "shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl",
);

export const filterOption = cn(
  "flex w-full items-center rounded-[12px] px-3.5 py-2.5 text-left",
  "font-sans text-[12px] text-[rgb(248_247_244/0.72)]",
  "transition-[background-color,color] duration-200",
  "hover:bg-[rgb(198_161_91/0.12)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:bg-[rgb(198_161_91/0.12)]",
);

export const filterOptionActive = cn(
  "bg-[rgb(198_161_91/0.14)] text-[rgb(248_247_244)]",
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
  "sm:w-auto sm:min-w-[180px] sm:justify-center",
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

/* ---------- AI editorial ---------- */

export const aiEditorialRoot = cn(
  "search-ai-editorial relative z-[2]",
  searchSectionInner,
  "pb-[clamp(2rem,5vh,3.5rem)]",
);

export const aiEditorialCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(198_161_91/0.28)]",
  "bg-[linear-gradient(160deg,rgb(248_247_244/0.07)_0%,rgb(198_161_91/0.08)_100%)]",
  "p-6 backdrop-blur-[14px] sm:p-8 lg:p-10",
  "shadow-[0_24px_56px_-28px_rgb(198_161_91/0.3)]",
);

export const aiEditorialGlow = cn(
  "pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.2)_0%,transparent_70%)] blur-2xl",
);

export const aiEditorialHeading = cn(
  "mt-4 font-serif text-[clamp(1.65rem,4vw,2.35rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const aiEditorialBody = cn(
  "mt-4 max-w-[720px] text-[15px] leading-[1.85] text-[rgb(248_247_244/0.62)]",
);

/* ---------- Editorial collections ---------- */

export const editorialRoot = cn(
  "search-editorial relative z-[2]",
  searchSectionInner,
  "py-[clamp(2rem,6vh,4rem)]",
);

export const editorialGrid = cn(
  "grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7",
);

export const editorialCard = cn(
  "group/editorial relative flex min-h-[280px] overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.09)] sm:min-h-[340px] lg:min-h-[380px]",
  "shadow-[0_28px_70px_-28px_rgb(0_0_0/0.6)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1.5 hover:border-[rgb(198_161_91/0.34)]",
  "hover:shadow-[0_36px_90px_-28px_rgb(0_0_0/0.72)]",
);

export const editorialImage = cn(
  "object-cover transition-transform duration-[1100ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/editorial:scale-[1.05]",
);

export const editorialOverlay = cn(
  "absolute inset-0 z-[1]",
  "bg-[linear-gradient(180deg,rgb(12_12_12/0.15)_0%,rgb(12_12_12/0.55)_45%,rgb(12_12_12/0.88)_100%)]",
);

export const editorialContent = cn(
  "absolute inset-x-0 bottom-0 z-[2] flex flex-col items-start p-6 sm:p-8",
);

export const editorialTitle = cn(
  "font-serif text-[clamp(1.85rem,4vw,2.75rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const editorialSubtitle = cn(
  "mt-2 max-w-[320px] text-[14px] leading-relaxed text-[rgb(248_247_244/0.62)]",
);

export const editorialCta = cn(
  "group/edcta mt-5 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(248_247_244/0.85)] transition-colors duration-300",
  "hover:text-danovix-accent",
  "focus-visible:outline-none focus-visible:text-danovix-accent",
);

export const editorialCtaUnderline = cn(
  "relative after:absolute after:inset-x-[20%] after:bottom-[-3px] after:h-px",
  "after:origin-center after:scale-x-0 after:bg-danovix-accent",
  "after:transition-transform after:duration-500",
  "after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/edcta:after:inset-x-0 group-hover/edcta:after:scale-x-100",
);

/* ---------- Results ---------- */

export const resultsRoot = cn(
  "search-results relative z-[2]",
  searchSectionInner,
  "pt-[clamp(1.5rem,4vh,2.5rem)] pb-[clamp(3.5rem,9vh,6rem)]",
);

export const resultsHeader = cn(
  "mb-[clamp(2rem,5vh,3.25rem)] flex flex-col items-center text-center",
  "sm:mb-[clamp(2.5rem,6vh,3.75rem)]",
);

export const resultsHeading = cn(
  "mt-4 font-serif text-[clamp(1.85rem,4.5vw,2.75rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const resultsCount = cn(
  "mt-3 font-sans text-[11px] uppercase tracking-[0.22em] text-[rgb(214_196_158/0.85)]",
);

export const resultsMasonry = cn(
  "grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 min-[480px]:gap-5",
  "md:gap-6 lg:grid-cols-12 lg:gap-7",
);

export const cardHero = cn("lg:col-span-7");
export const cardFeature = cn("lg:col-span-5");
export const cardSupport = cn("lg:col-span-4");

export const productCard = cn(
  "search-card group/card relative flex h-full flex-col overflow-hidden",
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
  "search-card-image h-full w-full object-cover object-center",
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
  "search-card-sweep pointer-events-none absolute inset-0 z-[3] opacity-0",
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

/* ---------- Empty ---------- */

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

export const emptyHeadingLine = cn("block");

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

/* ---------- Skeleton ---------- */

export const skeletonRoot = cn(
  searchSectionInner,
  "grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-12 lg:gap-7",
  "py-[clamp(2rem,5vh,3.5rem)]",
);

export const skeletonCard = cn(
  "overflow-hidden rounded-[28px] border border-[rgb(248_247_244/0.08)]",
  "bg-[rgb(248_247_244/0.03)] lg:col-span-4",
);

export const skeletonCardWide = cn("lg:col-span-7");

export const skeletonShimmer = cn(
  "relative overflow-hidden bg-[rgb(248_247_244/0.04)]",
  "before:absolute before:inset-0 before:-translate-x-full",
  "before:bg-[linear-gradient(90deg,transparent,rgb(214_196_158/0.12),transparent)]",
  "before:animate-[search-shimmer_1.8s_ease-in-out_infinite]",
);

/* ---------- Continue exploring ---------- */

export const continueRoot = cn(
  "search-continue relative z-[2] overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const continueHeader = cn(
  searchSectionInner,
  "mx-auto max-w-[640px] text-center",
);

export const continueHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const continueDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const continueGrid = cn(
  searchSectionInner,
  "mt-[clamp(2.5rem,7vh,4rem)] grid grid-cols-1 gap-5",
  "min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6",
);

export const continueCard = cn(
  "group/continue relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_70px_-28px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.34)]",
);

export const continueImageWrap = cn(
  "relative m-3 aspect-[3/4] overflow-hidden rounded-[18px]",
);

export const continueImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/continue:scale-[1.04]",
);

export const continueInfo = cn("px-4 pb-5 pt-1 text-center");

export const continueName = cn(
  "font-serif text-[1.15rem] font-light text-[rgb(248_247_244)]",
);

export const continueMeta = cn(
  "mt-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]",
);

/* ---------- Concierge ---------- */

export const conciergeRoot = cn(
  "search-concierge relative z-[2] overflow-hidden",
  "bg-[#f5f2ec] py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const conciergeBg = cn("search-concierge-bg absolute inset-0");

export const conciergeNoise = cn("search-concierge-noise absolute inset-0");

export const conciergeInner = cn(searchSectionInner);

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
  "mt-4 max-w-[520px] text-[15px] leading-[1.8] text-[rgb(26_26_26/0.62)]",
);

export const conciergeList = cn(
  "mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2",
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

/* ---------- Complete collection ---------- */

export const completeRoot = cn(
  "search-complete relative z-[2] overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const completeHeader = cn(
  searchSectionInner,
  "mx-auto max-w-[640px] text-center",
);

export const completeHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const completeDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const completeGrid = cn(
  searchSectionInner,
  "mt-[clamp(2.5rem,7vh,4rem)] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
);

export const completeCard = cn(
  "group/complete relative overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_70px_-28px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.34)]",
);

export const completeImageWrap = cn(
  "relative m-3 aspect-[4/5] overflow-hidden rounded-[20px]",
);

export const completeImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/complete:scale-[1.04]",
);

export const completeInfo = cn("px-5 pb-6 pt-1 text-center");

export const completeName = cn(
  "font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]",
);

export const completeMeta = cn(
  "mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]",
);

export const completePrice = cn(
  "mt-3 text-[13px] tracking-[0.06em] text-[rgb(248_247_244/0.72)]",
);

export const completeCta = cn(
  "group/compcta mt-5 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(248_247_244/0.78)] transition-colors duration-300",
  "hover:text-danovix-accent",
  "focus-visible:outline-none focus-visible:text-danovix-accent",
);
