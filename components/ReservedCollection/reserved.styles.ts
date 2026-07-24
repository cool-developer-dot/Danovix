import { cn } from "@/lib/cn";

/* ---------- Page shell ---------- */

export const reservedPage = cn(
  "reserved-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const reservedMain = cn("relative z-[1] w-full");

export const reservedSectionInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1360px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const reservedEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

/* ---------- Hero — editorial left-aligned, never vertically centered ---------- */

export const heroRoot = cn(
  "reserved-hero relative flex w-full flex-col overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(3.5rem,8vh,5.5rem)] pt-[clamp(7.5rem,14vh,9.5rem)]",
);

export const heroStage = cn("absolute inset-0 z-0 overflow-hidden");

export const heroBg = cn("reserved-hero-bg absolute inset-0");

export const heroNoise = cn("reserved-hero-noise absolute inset-0");

export const heroSpotlight = cn("reserved-hero-spotlight absolute");

export const heroGrain = cn("reserved-hero-grain absolute inset-0");

export const heroParticles = cn("reserved-hero-particles absolute inset-0");

export const heroWatermark = cn(
  "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden",
);

export const heroWatermarkText = cn(
  "select-none font-serif font-light uppercase tracking-[0.08em]",
  "text-[clamp(5rem,18vw,14rem)] leading-none text-[rgb(248_247_244/0.03)]",
  "whitespace-nowrap",
);

export const heroContent = cn(
  reservedSectionInner,
  "relative z-[2] flex max-w-[920px] flex-col items-start text-left",
);

export const heroEyebrow = cn(reservedEyebrow, "mb-5 sm:mb-6");

export const heroHeadline = cn(
  "font-serif font-light leading-[1.02] tracking-[-0.028em]",
  "text-[clamp(2.6rem,7.2vw,4.75rem)] text-[rgb(248_247_244)]",
);

export const heroHeadlineLine = cn("block overflow-hidden");

export const heroHeadlineWord = cn("inline-block will-change-transform");

export const heroDescription = cn(
  "mt-6 max-w-[440px] whitespace-pre-line text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)] sm:mt-7",
);

export const heroCounter = cn(
  "mt-9 font-serif text-[clamp(1.05rem,2.8vw,1.25rem)] font-light tracking-[-0.01em]",
  "text-[rgb(214_196_158/0.95)] sm:mt-10",
);

/* ---------- Collection layout — 70/30 editorial ---------- */

export const collectionRoot = cn(
  "reserved-collection relative z-[2]",
  "pb-[clamp(3rem,8vh,5rem)] pt-[clamp(0.5rem,2vh,1.25rem)]",
);

export const collectionInner = cn(
  reservedSectionInner,
  "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14",
);

export const collectionMain = cn(
  "flex min-w-0 flex-col gap-8 lg:col-span-8 xl:col-span-8",
);

export const collectionAside = cn(
  "lg:col-span-4 xl:col-span-4",
);

export const collectionAsideSticky = cn(
  "lg:sticky lg:top-[120px] lg:self-start",
);

export const collectionMobileRail = cn(
  "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2",
  "-mx-5 px-5 sm:-mx-8 sm:px-8",
  "lg:mx-0 lg:flex-col lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0",
  "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
);

/* ---------- Product card — editorial showcase ---------- */

export const productCard = cn(
  "group/piece relative flex w-[min(86vw,380px)] shrink-0 snap-center flex-col",
  "overflow-hidden rounded-[28px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.055)_0%,rgb(248_247_244/0.02)_100%)]",
  "backdrop-blur-[16px]",
  "shadow-[0_24px_64px_-28px_rgb(0_0_0/0.6),inset_0_1px_0_rgb(255_255_255/0.05)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1.5 hover:border-[rgb(198_161_91/0.38)]",
  "hover:shadow-[0_32px_72px_-24px_rgb(0_0_0/0.7),0_0_48px_-20px_rgb(198_161_91/0.28)]",
  "lg:w-full",
);

export const productImageWrap = cn(
  "relative m-3 aspect-[4/5] overflow-hidden rounded-[20px]",
  "border border-[rgb(248_247_244/0.06)]",
);

export const productImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "group-hover/piece:scale-[1.02]",
);

export const productOverlay = cn(
  "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
  "bg-[linear-gradient(180deg,rgb(12_12_12/0.05)_0%,rgb(12_12_12/0.35)_100%)]",
  "group-hover/piece:opacity-100",
);

export const productSweep = cn(
  "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 opacity-0",
  "bg-[linear-gradient(105deg,transparent_0%,rgb(255_255_255/0.14)_48%,transparent_100%)]",
  "skew-x-[-18deg]",
);

export const productBody = cn("flex flex-1 flex-col px-5 pb-6 pt-2 sm:px-6");

export const productName = cn(
  "font-serif text-[clamp(1.35rem,3.2vw,1.65rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const productMaterial = cn(
  "mt-2 text-[13px] leading-relaxed text-[rgb(248_247_244/0.58)]",
);

export const productCollection = cn(
  "mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(214_196_158/0.85)]",
);

export const productPrice = cn(
  "mt-4 font-serif text-[1.25rem] font-light tracking-[-0.01em]",
  "text-[rgb(248_247_244)]",
);

export const productQtyRow = cn("mt-5 flex items-center");

export const productActions = cn(
  "mt-5 flex flex-wrap items-center gap-x-5 gap-y-3",
);

export const productActionLink = cn(
  "group/link relative font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.62)] transition-colors duration-300",
  "hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]",
  "after:absolute after:inset-x-[15%] after:bottom-[-3px] after:h-px",
  "after:origin-center after:scale-x-0 after:bg-[rgb(214_196_158)]",
  "after:transition-transform after:duration-500",
  "after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:after:inset-x-0 hover:after:scale-x-100",
);

export const productRemove = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.38)] transition-[color,opacity] duration-400",
  "hover:text-[rgb(248_247_244/0.72)] hover:opacity-90",
  "focus-visible:outline-none focus-visible:text-[rgb(248_247_244/0.72)]",
);

export const productChips = cn(
  "mt-5 flex flex-wrap gap-2 border-t border-[rgb(248_247_244/0.08)] pt-5",
);

export const productChip = cn(
  "inline-flex items-center rounded-full border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.03)] px-3 py-1.5",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.55)]",
);

/* ---------- Quantity selector — premium segmented ---------- */

export const qtyRoot = cn(
  "inline-flex items-center overflow-hidden rounded-[12px]",
  "border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(248_247_244/0.04)] backdrop-blur-[10px]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]",
);

export const qtyButton = cn(
  "inline-flex h-10 w-10 items-center justify-center",
  "text-[rgb(248_247_244/0.7)] transition-[background-color,color,transform]",
  "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:bg-[rgb(198_161_91/0.12)] hover:text-[rgb(214_196_158)]",
  "active:scale-[0.92]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
  "focus-visible:ring-inset disabled:pointer-events-none disabled:opacity-35",
);

export const qtyValue = cn(
  "inline-flex h-10 min-w-[2.5rem] items-center justify-center",
  "border-x border-[rgb(248_247_244/0.1)]",
  "font-serif text-[15px] font-light tabular-nums text-[rgb(248_247_244)]",
);

/* ---------- Order summary — sticky glass panel ---------- */

export const summaryCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(18_16_14/0.78)] p-6 backdrop-blur-xl sm:p-7",
  "shadow-[0_28px_72px_-28px_rgb(0_0_0/0.65),inset_0_1px_0_rgb(255_255_255/0.05)]",
);

export const summaryGlow = cn(
  "pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.16)_0%,transparent_70%)] blur-2xl",
);

export const summaryEyebrow = cn(reservedEyebrow);

export const summaryHeading = cn(
  "mt-3 font-serif text-[clamp(1.5rem,3.5vw,1.85rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const summaryRows = cn("mt-7 space-y-4");

export const summaryRow = cn(
  "flex items-baseline justify-between gap-4",
);

export const summaryLabel = cn(
  "font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.48)]",
);

export const summaryValue = cn(
  "font-serif text-[15px] font-light text-[rgb(248_247_244/0.88)]",
);

export const summaryValueAccent = cn(
  "font-serif text-[15px] font-light text-[rgb(214_196_158)]",
);

export const summaryDivider = cn(
  "my-5 h-px w-full bg-[rgb(248_247_244/0.1)]",
);

export const summaryTotalRow = cn(
  "flex items-baseline justify-between gap-4",
);

export const summaryTotalLabel = cn(
  "font-sans text-[11px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(214_196_158)]",
);

export const summaryTotalValue = cn(
  "font-serif text-[clamp(1.5rem,3.5vw,1.85rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const summaryTrust = cn(
  "mt-5 font-sans text-[10px] uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.35)]",
);

/* ---------- Checkout button ---------- */

export const checkoutButton = cn(
  "reserved-checkout-btn group/checkout relative mt-7 flex w-full min-h-[52px] items-center justify-center gap-3",
  "overflow-hidden rounded-[14px] border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "shadow-[0_18px_40px_-16px_rgb(198_161_91/0.55),0_8px_20px_-12px_rgb(0_0_0/0.35)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-[3px] hover:brightness-[1.04]",
  "hover:shadow-[0_24px_52px_-14px_rgb(198_161_91/0.6),0_0_36px_-10px_rgb(214_196_158/0.45)]",
  "active:translate-y-0 active:scale-[0.985]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
  "disabled:pointer-events-none disabled:opacity-70",
);

export const checkoutSheen = cn(
  "pointer-events-none absolute inset-y-0 -left-1/3 w-1/3",
  "bg-[linear-gradient(105deg,transparent_0%,rgb(255_255_255/0.35)_50%,transparent_100%)]",
  "opacity-0 transition-[opacity,transform] duration-700",
  "group-hover/checkout:translate-x-[280%] group-hover/checkout:opacity-100",
);

export const checkoutMobileBar = cn(
  "fixed inset-x-0 bottom-0 z-40 border-t border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(12_12_12/0.88)] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3",
  "backdrop-blur-xl lg:hidden",
  "shadow-[0_-16px_40px_-20px_rgb(0_0_0/0.7)]",
);

/* ---------- Craftsmanship timeline ---------- */

export const timelineRoot = cn(
  "reserved-timeline relative z-[2] overflow-hidden",
  "bg-[linear-gradient(180deg,#0c0c0c_0%,#12100e_50%,#0c0c0c_100%)]",
  "py-[clamp(4rem,10vh,6.5rem)]",
);

export const timelineHeader = cn(
  reservedSectionInner,
  "mx-auto max-w-[560px] text-center",
);

export const timelineHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5vw,3rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const timelineDescription = cn(
  "mt-4 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const timelineTrack = cn(
  reservedSectionInner,
  "relative mt-[clamp(2.5rem,7vh,4rem)] max-w-[640px]",
);

export const timelineLine = cn(
  "pointer-events-none absolute left-[19px] top-3 bottom-3 w-px sm:left-[23px]",
  "bg-[linear-gradient(180deg,rgb(198_161_91/0.55)_0%,rgb(248_247_244/0.12)_55%,rgb(248_247_244/0.04)_100%)]",
);

export const timelineList = cn("relative space-y-0");

export const timelineItem = cn(
  "relative flex gap-5 pb-10 last:pb-0 sm:gap-6",
);

export const timelineIconWrap = cn(
  "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12",
  "border backdrop-blur-[8px] transition-[border-color,box-shadow,background-color] duration-500",
);

export const timelineIconComplete = cn(
  "border-[rgb(198_161_91/0.55)] bg-[rgb(198_161_91/0.14)]",
  "text-[rgb(214_196_158)] shadow-[0_0_24px_-8px_rgb(198_161_91/0.45)]",
);

export const timelineIconCurrent = cn(
  "border-[rgb(214_196_158/0.65)] bg-[rgb(214_196_158/0.12)]",
  "text-[rgb(214_196_158)] shadow-[0_0_28px_-6px_rgb(214_196_158/0.5)]",
  "reserved-timeline-pulse",
);

export const timelineIconUpcoming = cn(
  "border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(248_247_244/0.4)]",
);

export const timelineCopy = cn("min-w-0 pt-1.5 sm:pt-2.5");

export const timelineLabel = cn(
  "font-serif text-[clamp(1.15rem,2.8vw,1.35rem)] font-light tracking-[-0.015em]",
  "text-[rgb(248_247_244)]",
);

export const timelineMeta = cn(
  "mt-1.5 text-[13px] leading-relaxed text-[rgb(248_247_244/0.5)]",
);

/* ---------- Complimentary services ---------- */

export const servicesRoot = cn(
  "reserved-services relative z-[2]",
  "py-[clamp(3.5rem,9vh,6rem)]",
);

export const servicesHeader = cn(
  reservedSectionInner,
  "mx-auto max-w-[560px] text-center",
);

export const servicesHeading = cn(
  "mt-5 font-serif text-[clamp(1.85rem,4.5vw,2.65rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const servicesGrid = cn(
  reservedSectionInner,
  "mt-[clamp(2rem,6vh,3.25rem)] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
);

export const serviceCard = cn(
  "reserved-service-float group/service relative overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.06)_0%,rgb(248_247_244/0.02)_100%)]",
  "p-5 backdrop-blur-[14px] sm:p-6",
  "shadow-[0_20px_48px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1.5 hover:border-[rgb(198_161_91/0.38)]",
  "hover:shadow-[0_28px_56px_-24px_rgb(0_0_0/0.65),0_0_40px_-18px_rgb(198_161_91/0.28)]",
);

export const serviceIcon = cn(
  "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.04)]",
  "text-[rgb(214_196_158)] transition-transform duration-500",
  "group-hover/service:rotate-6",
);

export const serviceLabel = cn(
  "font-serif text-[1.15rem] font-light tracking-[-0.015em]",
  "text-[rgb(248_247_244)]",
);

export const serviceDescription = cn(
  "mt-2 text-[13px] leading-relaxed text-[rgb(248_247_244/0.5)]",
);

/* ---------- AI Concierge ---------- */

export const conciergeRoot = cn(
  "reserved-concierge relative z-[2] overflow-hidden",
  "bg-[#f5f2ec] py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const conciergeBg = cn("reserved-concierge-bg absolute inset-0");

export const conciergeNoise = cn("reserved-concierge-noise absolute inset-0");

export const conciergeInner = cn(reservedSectionInner);

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

/* ---------- Complete your collection ---------- */

export const completeRoot = cn(
  "reserved-complete relative z-[2] overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(4.5rem,12vh,7.5rem)]",
);

export const completeHeader = cn(
  reservedSectionInner,
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
  reservedSectionInner,
  "mt-[clamp(2.5rem,7vh,4rem)] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",
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
  "font-serif text-[1.25rem] font-light text-[rgb(248_247_244)]",
);

export const completeMeta = cn(
  "mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]",
);

export const completePrice = cn(
  "mt-3 text-[13px] tracking-[0.06em] text-[rgb(248_247_244/0.72)]",
);

export const completeCta = cn(
  "group/curcta mt-5 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(248_247_244/0.78)] transition-colors duration-300",
  "hover:text-danovix-accent",
  "focus-visible:outline-none focus-visible:text-danovix-accent",
  "relative after:absolute after:inset-x-[20%] after:bottom-[-3px] after:h-px",
  "after:origin-center after:scale-x-0 after:bg-danovix-accent",
  "after:transition-transform after:duration-500",
  "after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:after:inset-x-0 hover:after:scale-x-100",
);

/* ---------- Trust chips ---------- */

export const trustRoot = cn(
  "reserved-trust relative z-[2]",
  "pb-[clamp(3rem,8vh,5rem)] pt-[clamp(1rem,3vh,2rem)]",
);

export const trustList = cn(
  reservedSectionInner,
  "flex flex-wrap items-center justify-center gap-3 sm:gap-4",
);

export const trustChip = cn(
  "inline-flex items-center gap-2.5 rounded-full",
  "border border-[rgb(248_247_244/0.1)] bg-[rgb(248_247_244/0.03)]",
  "px-4 py-2.5 backdrop-blur-[8px]",
);

export const trustIcon = cn("text-[rgb(214_196_158/0.85)]");

export const trustLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.62)]",
);

/* ---------- Empty state ---------- */

export const emptyRoot = cn(
  "relative z-[2] flex flex-col items-center px-5 py-[clamp(5rem,16vh,9rem)] text-center",
);

export const emptyArch = cn(
  "mb-10 flex h-28 w-28 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.1)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(214_196_158/0.7)]",
);

export const emptyHeading = cn(
  "font-serif text-[clamp(2.2rem,6vw,3.5rem)] font-light tracking-[-0.028em]",
  "text-[rgb(248_247_244)]",
);

export const emptyDescription = cn(
  "mt-5 max-w-[380px] text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const emptyCta = cn(
  "group/empty mt-9 inline-flex min-h-12 items-center gap-3 rounded-[14px]",
  "border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "shadow-[0_16px_36px_-18px_rgb(198_161_91/0.5)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

/* ---------- Checkout veil ---------- */

export const checkoutVeil = cn(
  "fixed inset-0 z-[60] flex items-center justify-center",
  "bg-[rgb(8_8_8/0.72)] backdrop-blur-md",
  "transition-opacity duration-700",
);

export const checkoutVeilInner = cn(
  "flex flex-col items-center px-6 text-center",
);

export const checkoutVeilSpinner = cn(
  "reserved-checkout-orbit mb-8 h-14 w-14 rounded-full",
  "border border-[rgb(198_161_91/0.2)]",
  "border-t-[rgb(214_196_158)]",
);

export const checkoutVeilText = cn(
  "font-serif text-[clamp(1.25rem,3.5vw,1.65rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);
