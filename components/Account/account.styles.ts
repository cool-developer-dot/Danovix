import { cn } from "@/lib/cn";

/* ---------- Page shell ---------- */

export const accountPage = cn(
  "account-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const accountMain = cn(
  "relative z-[1] w-full pb-[5.5rem] sm:pb-[6.5rem]",
);

export const accountSectionInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1360px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const accountEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

export const sectionHeader = cn(
  "mx-auto max-w-[640px] text-center",
);

export const sectionHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[rgb(248_247_244)]",
);

export const sectionDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const warmSectionHeading = cn(
  "mt-5 font-serif text-[clamp(2rem,5.5vw,3.15rem)] font-light tracking-[-0.025em]",
  "text-[#1a1a1a]",
);

export const warmSectionDescription = cn(
  "mt-5 text-[15px] leading-[1.85] text-[rgb(26_26_26/0.55)]",
);

/* ---------- Welcome hero ---------- */

export const heroRoot = cn(
  "account-hero relative flex min-h-[32vh] w-full items-center overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(3.5rem,8vh,5.5rem)] pt-[clamp(7.5rem,15vh,10rem)]",
);

export const heroStage = cn("absolute inset-0 z-0 overflow-hidden");

export const heroBg = cn("account-hero-bg absolute inset-0");

export const heroNoise = cn("account-hero-noise absolute inset-0");

export const heroSpotlight = cn("account-hero-spotlight absolute");

export const heroGrain = cn("account-hero-grain absolute inset-0");

export const heroContent = cn(
  accountSectionInner,
  "relative z-[2] grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12",
);

export const heroCopy = cn("lg:col-span-7");

export const heroEyebrow = cn(accountEyebrow, "mb-5 sm:mb-6");

export const heroHeadline = cn(
  "font-serif font-light leading-[1.04] tracking-[-0.028em]",
  "text-[clamp(2.35rem,6.5vw,4.25rem)] text-[rgb(248_247_244)]",
);

export const heroHeadlineLine = cn("block overflow-hidden");

export const heroHeadlineWord = cn("inline-block will-change-transform");

export const heroDescription = cn(
  "mt-6 max-w-[460px] text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)] sm:mt-7",
);

export const heroMeta = cn(
  "mt-8 flex flex-wrap gap-x-8 gap-y-5 sm:mt-10",
);

export const heroMetaItem = cn("min-w-[120px]");

export const heroMetaLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(214_196_158/0.85)]",
);

export const heroMetaValue = cn(
  "mt-2 font-serif text-[clamp(1.15rem,3vw,1.45rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const heroMetaRule = cn(
  "mt-4 h-px w-14 bg-[linear-gradient(90deg,rgb(198_161_91/0.55),transparent)]",
);

export const heroAside = cn(
  "flex justify-center lg:col-span-5 lg:justify-end",
);

export const profileCard = cn(
  "account-profile-card group/profile relative w-full max-w-[360px] overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.12)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.09)_0%,rgb(248_247_244/0.03)_100%)]",
  "p-6 backdrop-blur-[22px] sm:p-7",
  "shadow-[0_28px_64px_-28px_rgb(0_0_0/0.65),inset_0_1px_0_rgb(255_255_255/0.08)]",
  "transition-[border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(198_161_91/0.4)]",
  "hover:shadow-[0_32px_72px_-24px_rgb(0_0_0/0.7),0_0_48px_-16px_rgb(198_161_91/0.28)]",
);

export const profileCardGlow = cn(
  "pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.22)_0%,transparent_70%)] blur-2xl",
);

export const profileAvatar = cn(
  "relative mx-auto flex h-20 w-20 items-center justify-center rounded-full",
  "border border-[rgb(198_161_91/0.45)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158/0.28)_0%,rgb(198_161_91/0.12)_100%)]",
  "font-serif text-[1.65rem] font-light tracking-[-0.02em] text-[rgb(248_247_244)]",
  "shadow-[0_12px_32px_-16px_rgb(198_161_91/0.45)]",
);

export const profileName = cn(
  "mt-5 text-center font-serif text-[1.55rem] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const profileTier = cn(
  "mt-2 text-center font-sans text-[10px] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(214_196_158)]",
);

export const profileProgressWrap = cn("mt-6");

export const profileProgressLabel = cn(
  "mb-2.5 flex items-center justify-between gap-3",
  "font-sans text-[10px] uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.5)]",
);

export const profileProgressTrack = cn(
  "h-[3px] w-full overflow-hidden rounded-full bg-[rgb(248_247_244/0.08)]",
);

export const profileProgressFill = cn(
  "h-full rounded-full",
  "bg-[linear-gradient(90deg,rgb(214_196_158)_0%,rgb(198_161_91)_100%)]",
  "transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const profileEditBtn = cn(
  "mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.04)]",
  "font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.85)]",
  "transition-[border-color,background-color,transform,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

/* ---------- Summary ---------- */

export const summaryRoot = cn(
  "account-summary relative z-[2]",
  accountSectionInner,
  "pb-[clamp(2.5rem,6vh,4rem)] pt-[clamp(0.5rem,2vh,1.25rem)]",
);

export const summaryGrid = cn(
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
  "max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-auto",
  "max-sm:pb-2 max-sm:[-ms-overflow-style:none] max-sm:[scrollbar-width:none]",
  "max-sm:[&::-webkit-scrollbar]:hidden",
);

export const summaryCard = cn(
  "account-stat-card group/stat relative overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.06)_0%,rgb(248_247_244/0.025)_100%)]",
  "p-5 backdrop-blur-[14px] sm:p-6",
  "shadow-[0_20px_48px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.38)]",
  "hover:shadow-[0_28px_56px_-24px_rgb(0_0_0/0.65),0_0_40px_-18px_rgb(198_161_91/0.28)]",
  "max-sm:min-w-[78vw] max-sm:snap-center max-sm:shrink-0",
);

export const summaryCardGlow = cn(
  "pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.18)_0%,transparent_70%)] blur-xl",
  "opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100",
);

export const summaryIcon = cn(
  "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.04)]",
  "text-[rgb(214_196_158)]",
);

export const summaryLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(248_247_244/0.45)]",
);

export const summaryValue = cn(
  "mt-2 font-serif text-[clamp(1.35rem,3.5vw,1.75rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const summaryRule = cn(
  "mt-5 h-px w-12 bg-[linear-gradient(90deg,rgb(198_161_91/0.5),transparent)]",
);

/* ---------- Dark content sections ---------- */

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

/* ---------- Orders ---------- */

export const ordersList = cn(
  accountSectionInner,
  "mt-[clamp(2.5rem,7vh,4rem)] flex flex-col gap-5",
);

export const orderCard = cn(
  "account-order-card group/order relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.055)_0%,rgb(248_247_244/0.02)_100%)]",
  "backdrop-blur-[14px]",
  "shadow-[0_24px_56px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.36)]",
  "hover:shadow-[0_28px_56px_-24px_rgb(0_0_0/0.65),0_0_40px_-18px_rgb(198_161_91/0.22)]",
);

export const orderLayout = cn(
  "grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-12 lg:gap-8 lg:p-7",
);

export const orderMedia = cn(
  "relative aspect-[4/5] overflow-hidden rounded-[18px] lg:col-span-3",
  "sm:aspect-[5/4] lg:aspect-[4/5]",
);

export const orderImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/order:scale-[1.04]",
);

export const orderBody = cn("flex flex-col lg:col-span-9");

export const orderTop = cn(
  "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
);

export const orderName = cn(
  "font-serif text-[clamp(1.35rem,3.2vw,1.75rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const orderMeta = cn(
  "mt-2 font-sans text-[10px] uppercase tracking-[0.2em]",
  "text-[rgb(198_161_91/0.85)]",
);

export const orderStatusBadge = cn(
  "inline-flex self-start rounded-full border border-[rgb(198_161_91/0.35)]",
  "bg-[rgb(198_161_91/0.1)] px-3.5 py-1.5",
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(214_196_158)]",
);

export const orderProgressWrap = cn("mt-6");

export const orderProgressHeader = cn(
  "mb-3 flex flex-wrap items-end justify-between gap-3",
);

export const orderProgressLabel = cn(
  "font-sans text-[11px] text-[rgb(248_247_244/0.62)]",
);

export const orderProgressEta = cn(
  "font-sans text-[10px] uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.45)]",
);

export const orderProgressTrack = cn(
  "h-[3px] w-full overflow-hidden rounded-full bg-[rgb(248_247_244/0.08)]",
);

export const orderProgressFill = cn(
  "account-order-progress h-full rounded-full",
  "bg-[linear-gradient(90deg,rgb(214_196_158)_0%,rgb(198_161_91)_100%)]",
);

export const orderSteps = cn(
  "mt-3 flex justify-between gap-2",
);

export const orderStep = cn(
  "font-sans text-[9px] uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.28)]",
);

export const orderStepActive = cn("text-[rgb(214_196_158/0.9)]");

export const orderActions = cn(
  "mt-7 flex flex-wrap gap-2.5",
);

export const orderBtnPrimary = cn(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_55%,rgb(168_138_78)_100%)]",
  "px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#111111]",
  "shadow-[0_12px_28px_-16px_rgb(198_161_91/0.5)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "hover:-translate-y-0.5 hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const orderBtnGhost = cn(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px]",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.78)]",
  "transition-[border-color,background-color,transform,color] duration-500",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:bg-[rgb(198_161_91/0.08)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

/* ---------- Private collection ---------- */

export const collectionHeaderRow = cn(
  accountSectionInner,
  "flex flex-col items-center gap-6 text-center",
  "sm:flex-row sm:items-end sm:justify-between sm:text-left",
);

export const collectionHeaderCopy = cn("max-w-[560px]");

export const collectionViewAll = cn(
  "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[14px]",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]",
  "px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.82)]",
  "transition-[border-color,background-color,transform,color] duration-500",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
);

export const collectionGrid = cn(
  accountSectionInner,
  "mt-[clamp(2.25rem,6vh,3.5rem)] grid grid-cols-1 gap-5",
  "sm:grid-cols-2 lg:grid-cols-4",
);

export const collectionCard = cn(
  "account-collection-card group/piece relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_64px_-28px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color,box-shadow] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.34)]",
);

export const collectionImageWrap = cn(
  "relative m-3 aspect-[4/5] overflow-hidden rounded-[18px]",
);

export const collectionImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/piece:scale-[1.04]",
);

export const collectionSweep = cn(
  "pointer-events-none absolute inset-0 z-[1] opacity-0",
  "bg-[linear-gradient(105deg,transparent_35%,rgb(248_247_244/0.18)_50%,transparent_65%)]",
);

export const collectionInfo = cn("px-5 pb-5 pt-1");

export const collectionName = cn(
  "font-serif text-[1.25rem] font-light text-[rgb(248_247_244)]",
);

export const collectionMeta = cn(
  "mt-1.5 font-sans text-[10px] uppercase tracking-[0.2em]",
  "text-[rgb(198_161_91/0.85)]",
);

export const collectionPrice = cn(
  "mt-2 text-[13px] tracking-[0.06em] text-[rgb(248_247_244/0.7)]",
);

export const collectionActions = cn(
  "mt-4 flex flex-wrap gap-2",
);

export const collectionAction = cn(
  "inline-flex min-h-9 items-center rounded-full border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(248_247_244/0.03)] px-3 py-1.5",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.65)]",
  "transition-[border-color,background-color,color,transform] duration-400",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
);

/* ---------- Addresses ---------- */

export const addressGrid = cn(
  accountSectionInner,
  "mt-[clamp(2.25rem,6vh,3.5rem)] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
);

export const addressCard = cn(
  "account-address-card group/addr relative overflow-hidden rounded-[22px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.58)]",
  "p-6 backdrop-blur-[16px]",
  "shadow-[0_20px_48px_-28px_rgb(17_17_17/0.28),inset_0_1px_0_rgb(255_255_255/0.7)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.4)]",
);

export const addressIcon = cn(
  "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.75)]",
  "text-[rgb(168_138_78)]",
);

export const addressLabel = cn(
  "font-serif text-[1.4rem] font-light tracking-[-0.02em] text-[#1a1a1a]",
);

export const addressCity = cn(
  "mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(168_138_78)]",
);

export const addressLines = cn(
  "mt-4 text-[14px] leading-relaxed text-[rgb(26_26_26/0.62)]",
);

export const addressDefault = cn(
  "mt-4 inline-flex rounded-full border border-[rgb(198_161_91/0.35)]",
  "bg-[rgb(198_161_91/0.1)] px-3 py-1",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(140_112_58)]",
);

export const addressActions = cn("mt-5 flex flex-wrap gap-2");

export const addressBtn = cn(
  "inline-flex min-h-10 items-center rounded-[12px]",
  "border border-[rgb(17_17_17/0.1)] bg-[rgb(248_247_244/0.65)]",
  "px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(26_26_26/0.72)]",
  "transition-[border-color,transform,color] duration-400",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.45)]",
  "hover:text-[#1a1a1a]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

export const addressAddCard = cn(
  addressCard,
  "flex min-h-[220px] flex-col items-center justify-center text-center",
  "border-dashed border-[rgb(17_17_17/0.14)]",
);

/* ---------- Payments ---------- */

export const paymentGrid = cn(
  accountSectionInner,
  "mt-[clamp(2.25rem,6vh,3.5rem)] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
);

export const paymentCard = cn(
  "account-payment-card group/pay relative overflow-hidden rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(145deg,rgb(248_247_244/0.08)_0%,rgb(248_247_244/0.025)_100%)]",
  "p-5 backdrop-blur-[14px] sm:p-6",
  "shadow-[0_20px_48px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.36)]",
);

export const paymentBrand = cn(
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(214_196_158)]",
);

export const paymentNumber = cn(
  "mt-6 font-serif text-[1.35rem] font-light tracking-[0.08em]",
  "text-[rgb(248_247_244)]",
);

export const paymentMeta = cn(
  "mt-3 font-sans text-[11px] text-[rgb(248_247_244/0.45)]",
);

export const paymentDefault = cn(
  "mt-5 inline-flex rounded-full border border-[rgb(198_161_91/0.35)]",
  "bg-[rgb(198_161_91/0.1)] px-3 py-1",
  "font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(214_196_158)]",
);

/* ---------- Membership ---------- */

export const membershipCard = cn(
  "account-membership relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(160deg,rgb(248_247_244/0.07)_0%,rgb(198_161_91/0.06)_100%)]",
  "p-6 backdrop-blur-[16px] sm:p-8 lg:p-10",
  "shadow-[0_28px_64px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
);

export const membershipLayout = cn(
  "relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center",
);

export const membershipCopy = cn("lg:col-span-7");

export const membershipAside = cn(
  "flex flex-col items-start gap-4 lg:col-span-5 lg:items-end",
);

export const membershipLock = cn(
  "inline-flex h-14 w-14 items-center justify-center rounded-full",
  "border border-[rgb(198_161_91/0.4)] bg-[rgb(198_161_91/0.1)]",
  "text-[rgb(214_196_158)]",
);

export const membershipBenefits = cn(
  "mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2",
);

export const membershipBenefit = cn(
  "flex items-center gap-3 text-[14px] text-[rgb(248_247_244/0.68)]",
);

export const membershipDot = cn(
  "h-1 w-1 shrink-0 rounded-full bg-danovix-accent",
);

export const membershipBadge = cn(
  "inline-flex rounded-full border border-[rgb(198_161_91/0.4)]",
  "bg-[rgb(198_161_91/0.12)] px-4 py-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(214_196_158)]",
);

/* ---------- Concierge ---------- */

export const conciergeInner = cn(accountSectionInner);

export const conciergeCard = cn(
  "account-concierge group/concierge relative overflow-hidden rounded-[24px]",
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
  "mt-4 max-w-[480px] text-[15px] leading-[1.8] text-[rgb(26_26_26/0.58)]",
);

export const conciergeList = cn(
  "mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2",
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

/* ---------- Horizontal galleries ---------- */

export const galleryScroller = cn(
  accountSectionInner,
  "mt-[clamp(2.25rem,6vh,3.5rem)] flex gap-5 overflow-x-auto pb-3",
  "snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]",
  "[&::-webkit-scrollbar]:hidden",
);

export const galleryCard = cn(
  "account-gallery-card group/gallery relative w-[min(78vw,280px)] shrink-0 snap-start",
  "overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.09)]",
  "bg-[linear-gradient(180deg,rgb(248_247_244/0.05)_0%,rgb(248_247_244/0.02)_100%)]",
  "shadow-[0_24px_64px_-28px_rgb(0_0_0/0.55)]",
  "transition-[transform,border-color] duration-600",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.34)]",
);

export const galleryImageWrap = cn(
  "relative m-3 aspect-[4/5] overflow-hidden rounded-[18px]",
);

export const galleryImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/gallery:scale-[1.04]",
);

export const galleryInfo = cn("px-5 pb-5 pt-1");

export const galleryName = cn(
  "font-serif text-[1.2rem] font-light text-[rgb(248_247_244)]",
);

export const galleryMeta = cn(
  "mt-1.5 font-sans text-[10px] uppercase tracking-[0.18em]",
  "text-[rgb(198_161_91/0.85)]",
);

/* ---------- Curated ---------- */

export const curatedGrid = cn(
  accountSectionInner,
  "mt-[clamp(2.5rem,7vh,4rem)] grid grid-cols-1 gap-6 md:grid-cols-3",
);

export const curatedCard = cn(
  "account-curated-card group/curated relative overflow-hidden rounded-[28px]",
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

/* ---------- Journal ---------- */

export const journalGrid = cn(
  accountSectionInner,
  "mt-[clamp(2.25rem,6vh,3.5rem)] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
);

export const journalCard = cn(
  "account-journal-card group/journal relative overflow-hidden rounded-[22px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.55)]",
  "backdrop-blur-[14px]",
  "shadow-[0_20px_48px_-28px_rgb(17_17_17/0.25),inset_0_1px_0_rgb(255_255_255/0.65)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.4)]",
);

export const journalImageWrap = cn(
  "relative aspect-[16/11] overflow-hidden",
);

export const journalImage = cn(
  "h-full w-full object-cover transition-transform duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/journal:scale-[1.04]",
);

export const journalInfo = cn("p-5");

export const journalCategory = cn(
  "font-sans text-[9px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(168_138_78)]",
);

export const journalTitle = cn(
  "mt-2 font-serif text-[1.25rem] font-light tracking-[-0.02em] text-[#1a1a1a]",
);

export const journalExcerpt = cn(
  "mt-2 text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]",
);

export const journalCta = cn(
  "mt-4 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(26_26_26/0.7)] transition-colors duration-300",
  "group-hover/journal:text-[rgb(168_138_78)]",
);

/* ---------- Quick actions ---------- */

export const quickActionsRoot = cn(
  "account-quick-actions fixed bottom-5 left-1/2 z-40 w-[min(96vw,920px)] -translate-x-1/2",
  "pointer-events-none sm:bottom-7",
);

export const quickActionsBar = cn(
  "pointer-events-auto flex gap-2 overflow-x-auto rounded-[18px]",
  "border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(18_16_14/0.82)] p-2 backdrop-blur-xl",
  "shadow-[0_24px_56px_-24px_rgb(0_0_0/0.7),inset_0_1px_0_rgb(255_255_255/0.06)]",
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
);

export const quickActionChip = cn(
  "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full",
  "border border-[rgb(248_247_244/0.1)] bg-[rgb(248_247_244/0.04)]",
  "px-3.5 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.72)]",
  "transition-[border-color,background-color,color,transform] duration-400",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
);

/* ---------- Subpage hero ---------- */

export const subpageHeroRoot = cn(
  "account-hero relative flex min-h-[28vh] w-full items-center overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(3rem,7vh,4.5rem)] pt-[clamp(7.5rem,15vh,10rem)]",
);

export const subpageHeroContent = cn(
  accountSectionInner,
  "relative z-[2] mx-auto max-w-[720px] text-center",
);

export const subpageHeroHeadline = cn(
  "font-serif font-light leading-[1.04] tracking-[-0.028em]",
  "text-[clamp(2.35rem,6.5vw,4rem)] text-[rgb(248_247_244)]",
);

export const subpageHeroDescription = cn(
  "mx-auto mt-6 max-w-[480px] text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)]",
);

export const subpageBack = cn(
  "mb-6 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(214_196_158/0.85)] transition-colors duration-300",
  "hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]",
);

/* ---------- Filters ---------- */

export const filtersRoot = cn(
  accountSectionInner,
  "relative z-[2] pb-[clamp(1.5rem,4vh,2.5rem)]",
);

export const filtersBar = cn(
  "flex flex-wrap content-start items-center justify-center gap-2 rounded-[22px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(18_16_14/0.78)] p-3 backdrop-blur-xl sm:gap-2.5 sm:p-4",
  "shadow-[0_24px_64px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.05)]",
);

export const filterChip = cn(
  "inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 py-2",
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

/* ---------- Vertical timeline ---------- */

export const timelineRoot = cn("relative flex flex-col gap-0");

export const timelineItem = cn("relative flex gap-4 pb-7 last:pb-0");

export const timelineRail = cn(
  "absolute left-[11px] top-7 bottom-0 w-px",
  "bg-[linear-gradient(180deg,rgb(198_161_91/0.45)_0%,rgb(248_247_244/0.08)_100%)]",
);

export const timelineDot = cn(
  "relative z-[1] mt-1 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.16)] bg-[rgb(18_16_14)]",
);

export const timelineDotInner = cn(
  "h-2 w-2 rounded-full bg-[rgb(248_247_244/0.28)]",
);

export const timelineDotActive = cn(
  "border-[rgb(198_161_91/0.55)] shadow-[0_0_18px_-4px_rgb(198_161_91/0.55)]",
);

export const timelineDotInnerActive = cn(
  "bg-[rgb(214_196_158)]",
);

export const timelineDotDone = cn(
  "border-[rgb(198_161_91/0.4)]",
);

export const timelineDotInnerDone = cn(
  "bg-[rgb(198_161_91)]",
);

export const timelineCopy = cn("min-w-0 flex-1 pt-0.5");

export const timelineLabel = cn(
  "font-serif text-[1.15rem] font-light tracking-[-0.015em] text-[rgb(248_247_244)]",
);

export const timelineLabelMuted = cn(
  "text-[rgb(248_247_244/0.4)]",
);

export const timelineDesc = cn(
  "mt-1 text-[13px] leading-relaxed text-[rgb(248_247_244/0.5)]",
);

export const timelineAt = cn(
  "mt-1.5 font-sans text-[10px] uppercase tracking-[0.18em]",
  "text-[rgb(214_196_158/0.75)]",
);

/* ---------- Forms ---------- */

export const formCard = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(248_247_244/0.06)_0%,rgb(248_247_244/0.025)_100%)]",
  "p-6 backdrop-blur-[16px] sm:p-8",
  "shadow-[0_24px_56px_-28px_rgb(0_0_0/0.55),inset_0_1px_0_rgb(255_255_255/0.06)]",
);

export const formGrid = cn(
  "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2",
);

export const formField = cn("relative");

export const formInput = cn(
  "peer w-full rounded-[14px] border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(248_247_244/0.04)] px-4 pb-3 pt-6 text-[15px] text-[rgb(248_247_244/0.95)]",
  "placeholder:text-transparent caret-[rgb(214_196_158)]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]",
  "transition-[border-color,box-shadow,background-color] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(248_247_244/0.2)]",
  "focus:border-[rgb(198_161_91/0.6)] focus:bg-[rgb(248_247_244/0.06)]",
  "focus:outline-none focus:shadow-[0_0_0_3px_rgb(198_161_91/0.12)]",
);

export const formLabel = cn(
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2",
  "text-[14px] text-[rgb(248_247_244/0.44)] transition-all duration-300",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px]",
  "peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-[rgb(214_196_158)]",
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0",
  "peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase",
  "peer-[:not(:placeholder-shown)]:tracking-[0.16em]",
);

export const formFullWidth = cn("sm:col-span-2");

/* ---------- Switches ---------- */

export const preferenceRow = cn(
  "flex items-center justify-between gap-6 border-b border-[rgb(248_247_244/0.08)] py-5 last:border-0",
);

export const preferenceCopy = cn("min-w-0");

export const preferenceLabel = cn(
  "font-serif text-[1.15rem] font-light text-[rgb(248_247_244)]",
);

export const preferenceDesc = cn(
  "mt-1 text-[13px] leading-relaxed text-[rgb(248_247_244/0.5)]",
);

export const switchTrack = cn(
  "relative h-7 w-12 shrink-0 rounded-full border border-[rgb(248_247_244/0.14)]",
  "bg-[rgb(248_247_244/0.06)] transition-[background-color,border-color] duration-400",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
);

export const switchTrackOn = cn(
  "border-[rgb(198_161_91/0.5)] bg-[rgb(198_161_91/0.22)]",
);

export const switchThumb = cn(
  "absolute left-0.5 top-0.5 h-5 w-5 rounded-full",
  "bg-[rgb(248_247_244/0.7)] transition-transform duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const switchThumbOn = cn(
  "translate-x-5 bg-[rgb(214_196_158)]",
);

/* ---------- Trust chips ---------- */

export const trustGrid = cn(
  "mt-6 flex flex-wrap gap-2.5",
);

export const trustChip = cn(
  "inline-flex min-h-10 items-center rounded-full",
  "border border-[rgb(198_161_91/0.3)] bg-[rgb(198_161_91/0.08)]",
  "px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
  "text-[rgb(214_196_158)]",
);

/* ---------- Photo upload ---------- */

export const photoUpload = cn(
  "relative mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-full",
  "border border-[rgb(198_161_91/0.45)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158/0.22)_0%,rgb(198_161_91/0.1)_100%)]",
  "shadow-[0_16px_40px_-18px_rgb(198_161_91/0.45)]",
  "transition-[transform,box-shadow,border-color] duration-500",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.65)]",
);

export const photoInitials = cn(
  "font-serif text-[2.4rem] font-light tracking-[-0.02em] text-[rgb(248_247_244)]",
);

/* ---------- Section link ---------- */

export const sectionViewAll = cn(
  "mt-6 inline-flex items-center gap-2",
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(214_196_158)] transition-colors duration-300",
  "hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:text-[rgb(248_247_244)]",
);

export const emptyState = cn(
  "mx-auto max-w-[420px] py-16 text-center",
);

export const emptyHeading = cn(
  "font-serif text-[clamp(1.75rem,4vw,2.35rem)] font-light tracking-[-0.02em]",
  "text-[rgb(248_247_244)]",
);

export const emptyDescription = cn(
  "mt-4 text-[15px] leading-[1.8] text-[rgb(248_247_244/0.55)]",
);
