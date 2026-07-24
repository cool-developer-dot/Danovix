import { cn } from "@/lib/cn";

/* ---------- Page shell ---------- */

export const contactPage = cn(
  "contact-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c]",
);

export const contactMain = cn("relative z-[1] w-full");

/* ---------- Shared editorial ---------- */

export const contactEyebrow = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

export const contactEyebrowDark = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(168_138_78)]",
);

export const contactSectionInner = cn(
  "relative z-[2] mx-auto w-full max-w-[1280px]",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const contactSectionPad = cn(
  "py-[clamp(4.5rem,12vh,8rem)]",
);

/* ---------- Hero ---------- */

export const heroRoot = cn(
  "contact-hero relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden",
  "bg-[#0c0c0c] pb-[clamp(5.5rem,14vh,8.5rem)] pt-[7.5rem]",
);

export const heroStage = cn("absolute inset-0 z-0 overflow-hidden");

export const heroBg = cn("contact-hero-bg absolute inset-0");

export const heroNoise = cn("contact-hero-noise absolute inset-0");

export const heroSpotlight = cn("contact-hero-spotlight absolute");

export const heroArch = cn("contact-hero-arch pointer-events-none absolute inset-0");

export const heroWatermark = cn(
  "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden",
);

export const heroWatermarkText = cn(
  "select-none font-serif font-light uppercase tracking-[0.08em]",
  "text-[clamp(5rem,18vw,14rem)] leading-none text-[rgb(248_247_244/0.03)]",
  "whitespace-nowrap",
);

export const heroContent = cn(
  "relative z-[2] mx-auto flex w-full max-w-[1280px] flex-col",
  "px-5 sm:px-8 lg:px-12 xl:px-16",
);

export const heroEyebrow = cn(contactEyebrow, "mb-6 sm:mb-7");

export const heroHeadline = cn(
  "font-serif font-light leading-[1.02] tracking-[-0.028em]",
  "text-[clamp(2.75rem,9vw,5.75rem)] text-[rgb(248_247_244)]",
);

export const heroHeadlineLine = cn("block overflow-hidden");

export const heroHeadlineWord = cn("inline-block will-change-transform");

export const heroDescription = cn(
  "mt-7 max-w-[440px] text-[clamp(14px,3.2vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.58)] sm:mt-8",
);

export const heroCta = cn(
  "group/cta relative mt-10 inline-flex min-h-12 items-center justify-center gap-3",
  "rounded-[14px] bg-[rgb(248_247_244)] px-8 py-3.5",
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "shadow-[0_16px_40px_-18px_rgb(0_0_0/0.55)]",
  "transition-[transform,background-color,box-shadow,color] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:bg-danovix-accent hover:text-[#111111]",
  "hover:shadow-[0_20px_48px_-16px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
  "sm:mt-11",
);

export const heroCtaArrow = cn(
  "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/cta:translate-x-1",
);

export const heroScroll = cn(
  "pointer-events-none absolute inset-x-0 bottom-6 z-[2] flex justify-center sm:bottom-8",
);

export const heroScrollLabel = cn(
  "text-[9px] font-medium uppercase tracking-[0.3em] text-[rgb(248_247_244/0.35)]",
);

export const heroScrollLine = cn(
  "contact-hero-scroll-line mt-2 block h-8 w-px origin-top",
  "bg-gradient-to-b from-[rgb(248_247_244/0)] via-[rgb(248_247_244/0.4)] to-[rgb(248_247_244/0)]",
);

/* ---------- Warm band (methods → form → meet) ---------- */

export const warmBand = cn(
  "contact-warm relative w-full overflow-hidden bg-[#f5f2ec]",
);

export const warmBg = cn("contact-warm-bg absolute inset-0");

export const warmNoise = cn("contact-warm-noise absolute inset-0");

export const warmSpotlight = cn("contact-warm-spotlight absolute");

export const warmWatermark = cn(
  "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden",
);

export const warmWatermarkText = cn(
  "select-none font-serif font-light uppercase tracking-[0.08em]",
  "text-[clamp(6rem,20vw,16rem)] leading-none text-[rgb(17_17_17/0.03)]",
  "whitespace-nowrap",
);

/* ---------- Quick contact ---------- */

export const quickRoot = cn("relative z-[2]", contactSectionInner, "pt-[clamp(3.5rem,8vh,5.5rem)] pb-[clamp(3rem,7vh,4.5rem)]");

export const quickGrid = cn(
  "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5",
);

export const quickCard = cn(
  "contact-glass-card group/card relative flex flex-col overflow-hidden",
  "rounded-[20px] border border-[rgb(17_17_17/0.08)]",
  "bg-[rgb(248_247_244/0.55)] p-6 backdrop-blur-[16px]",
  "shadow-[0_12px_40px_-24px_rgb(17_17_17/0.28),inset_0_1px_0_rgb(255_255_255/0.65)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.45)]",
  "hover:shadow-[0_22px_48px_-22px_rgb(198_161_91/0.35),inset_0_1px_0_rgb(255_255_255/0.8)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
  "sm:p-7",
);

export const quickCardSheen = cn(
  "pointer-events-none absolute -inset-x-8 -top-10 h-24 rotate-[-8deg]",
  "bg-gradient-to-r from-transparent via-[rgb(255_255_255/0.35)] to-transparent",
  "opacity-0 transition-opacity duration-700 ease-out",
  "group-hover/card:opacity-100",
);

export const quickIconWrap = cn(
  "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.7)]",
  "text-[#111111] transition-[border-color,background-color,color] duration-500",
  "group-hover/card:border-[rgb(198_161_91/0.4)] group-hover/card:text-[rgb(168_138_78)]",
);

export const quickLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(17_17_17/0.45)]",
);

export const quickValue = cn(
  "mt-2 font-serif text-[clamp(1.15rem,3vw,1.35rem)] font-light leading-snug tracking-[-0.015em] text-[#1a1a1a]",
);

export const quickDetail = cn(
  "mt-2 text-[12px] leading-relaxed text-[rgb(26_26_26/0.48)]",
);

/* ---------- Help categories ---------- */

export const helpRoot = cn(
  "relative z-[2]",
  contactSectionInner,
  "pb-[clamp(3.5rem,9vh,6rem)]",
);

export const helpHeader = cn("mx-auto max-w-[560px] text-center");

export const helpHeading = cn(
  "mt-5 font-serif font-light leading-[1.08] tracking-[-0.02em]",
  "text-[clamp(2rem,5.5vw,3.25rem)] text-[#1a1a1a]",
);

export const helpGrid = cn(
  "mt-[clamp(2.5rem,6vh,3.75rem)] grid grid-cols-1 gap-3.5",
  "sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5",
);

export const helpCard = cn(
  "group/help relative flex w-full items-start gap-4 overflow-hidden text-left",
  "rounded-[18px] border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.5)]",
  "px-5 py-5 backdrop-blur-[12px] sm:px-6 sm:py-6",
  "shadow-[0_10px_32px_-22px_rgb(17_17_17/0.22)]",
  "transition-[transform,border-color,box-shadow,background-color] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)]",
  "hover:bg-[rgb(248_247_244/0.85)]",
  "hover:shadow-[0_18px_40px_-20px_rgb(198_161_91/0.28)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

export const helpCardActive = cn(
  "border-[rgb(198_161_91/0.55)] bg-[rgb(248_247_244/0.92)]",
  "shadow-[0_18px_40px_-18px_rgb(198_161_91/0.32)]",
);

export const helpIcon = cn(
  "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.08)] text-[#111111]",
  "transition-colors duration-500 group-hover/help:text-[rgb(168_138_78)]",
);

export const helpCardTitle = cn(
  "block font-serif text-[1.2rem] font-light tracking-[-0.01em] text-[#1a1a1a]",
);

export const helpCardCopy = cn(
  "mt-1.5 block text-[13px] leading-relaxed text-[rgb(26_26_26/0.52)]",
);

/* ---------- Form + AI layout ---------- */

export const deskRoot = cn(
  "relative z-[2]",
  contactSectionInner,
  "pb-[clamp(4.5rem,11vh,7.5rem)]",
);

export const deskGrid = cn(
  "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12",
);

export const deskFormCol = cn("lg:col-span-7");

export const deskAiCol = cn("lg:col-span-5 lg:pt-2");

/* ---------- Concierge form ---------- */

export const formShell = cn(
  "relative overflow-hidden rounded-[24px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.62)]",
  "p-6 backdrop-blur-[18px] sm:p-8 lg:p-10",
  "shadow-[0_24px_60px_-36px_rgb(17_17_17/0.35),inset_0_1px_0_rgb(255_255_255/0.7)]",
);

export const formEyebrow = cn(contactEyebrowDark);

export const formHeading = cn(
  "mt-4 font-serif font-light leading-[1.1] tracking-[-0.02em]",
  "text-[clamp(1.85rem,4.5vw,2.55rem)] text-[#1a1a1a]",
);

export const formDescription = cn(
  "mt-3 max-w-[420px] text-[14px] leading-[1.75] text-[rgb(26_26_26/0.55)]",
);

export const formFields = cn("mt-9 flex flex-col gap-6 sm:mt-10 sm:gap-7");

export const fieldGroup = cn("relative");

export const fieldInput = cn(
  "peer w-full rounded-[14px] border border-[rgb(17_17_17/0.12)]",
  "bg-[rgb(255_255_255/0.45)] px-4 pb-3 pt-6 text-[15px] text-[#1a1a1a]",
  "placeholder:text-transparent",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.5)]",
  "transition-[border-color,box-shadow,background-color] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(17_17_17/0.2)]",
  "focus:border-[rgb(198_161_91/0.65)] focus:bg-[rgb(255_255_255/0.7)]",
  "focus:outline-none focus:shadow-[0_0_0_3px_rgb(198_161_91/0.15),inset_0_1px_0_rgb(255_255_255/0.6)]",
);

export const fieldTextarea = cn(fieldInput, "min-h-[148px] resize-y leading-relaxed");

export const fieldSelect = cn(
  fieldInput,
  "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10",
  "cursor-pointer",
);

export const fieldLabel = cn(
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2",
  "text-[14px] text-[rgb(26_26_26/0.45)] transition-all duration-300",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px]",
  "peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-[rgb(168_138_78)]",
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0",
  "peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase",
  "peer-[:not(:placeholder-shown)]:tracking-[0.18em]",
  "peer-[:not(:placeholder-shown)]:text-[rgb(26_26_26/0.48)]",
);

export const fieldLabelTextarea = cn(
  fieldLabel,
  "top-6 peer-focus:top-2.5 peer-[:not(:placeholder-shown)]:top-2.5",
);

export const fieldHint = cn(
  "mt-2 text-[11px] tracking-wide text-[rgb(26_26_26/0.4)]",
);

export const attachZone = cn(
  "group/attach relative flex cursor-pointer flex-col items-center justify-center gap-2",
  "rounded-[14px] border border-dashed border-[rgb(17_17_17/0.16)]",
  "bg-[rgb(255_255_255/0.28)] px-4 py-7 text-center",
  "transition-[border-color,background-color,box-shadow] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(198_161_91/0.5)] hover:bg-[rgb(255_255_255/0.5)]",
  "focus-within:border-[rgb(198_161_91/0.65)]",
  "focus-within:shadow-[0_0_0_3px_rgb(198_161_91/0.12)]",
);

export const attachLabel = cn(
  "font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]",
);

export const attachHint = cn("text-[12px] text-[rgb(26_26_26/0.45)]");

export const formSubmit = cn(
  "group/submit relative mt-2 inline-flex min-h-12 w-full items-center justify-center gap-3",
  "rounded-[14px] border border-[rgb(198_161_91/0.35)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "shadow-[0_16px_36px_-18px_rgb(198_161_91/0.55),inset_0_1px_0_rgb(255_255_255/0.45)]",
  "backdrop-blur-sm transition-[transform,box-shadow,filter] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-16px_rgb(198_161_91/0.6)]",
  "hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ec]",
  "sm:w-auto sm:min-w-[220px]",
);

export const formSubmitArrow = cn(
  "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/submit:translate-x-1",
);

export const formSuccess = cn(
  "flex min-h-[320px] flex-col items-center justify-center px-4 py-12 text-center",
);

export const formSuccessTitle = cn(
  "font-serif text-[clamp(1.65rem,4vw,2.1rem)] font-light tracking-[-0.02em] text-[#1a1a1a]",
);

export const formSuccessBody = cn(
  "mt-4 max-w-[360px] text-[14px] leading-[1.8] text-[rgb(26_26_26/0.55)]",
);

/* ---------- AI Concierge ---------- */

export const aiCard = cn(
  "relative flex h-full flex-col overflow-hidden rounded-[24px]",
  "border border-[rgb(198_161_91/0.28)]",
  "bg-[linear-gradient(165deg,#141414_0%,#1c1a17_48%,#161412_100%)]",
  "p-6 sm:p-8",
  "shadow-[0_28px_64px_-28px_rgb(17_17_17/0.55),inset_0_1px_0_rgb(255_255_255/0.08)]",
);

export const aiGlow = cn(
  "pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.22)_0%,transparent_70%)] blur-2xl",
);

export const aiEyebrow = cn(contactEyebrow);

export const aiHeading = cn(
  "mt-4 font-serif font-light leading-[1.1] tracking-[-0.02em]",
  "text-[clamp(1.75rem,4vw,2.35rem)] text-[rgb(248_247_244)]",
);

export const aiDescription = cn(
  "mt-3 text-[14px] leading-[1.75] text-[rgb(248_247_244/0.55)]",
);

export const aiList = cn("mt-7 flex flex-col gap-2.5");

export const aiListItem = cn(
  "flex items-center gap-3 text-[13px] text-[rgb(248_247_244/0.72)]",
);

export const aiListDot = cn(
  "h-1 w-1 shrink-0 rounded-full bg-danovix-accent",
);

export const aiCta = cn(
  "group/ai mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3",
  "rounded-[14px] border border-[rgb(248_247_244/0.14)]",
  "bg-[rgb(248_247_244/0.08)] px-6 py-3.5 backdrop-blur-md",
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[rgb(248_247_244)]",
  "transition-[transform,background-color,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.5)]",
  "hover:bg-[rgb(198_161_91/0.16)]",
  "hover:shadow-[0_16px_36px_-16px_rgb(198_161_91/0.4)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

export const aiCtaArrow = cn(
  "inline-block transition-transform duration-500 group-hover/ai:translate-x-1",
);

export const aiChat = cn("mt-6 flex flex-1 flex-col");

export const aiBubble = cn(
  "rounded-[16px] border border-[rgb(248_247_244/0.1)]",
  "bg-[rgb(248_247_244/0.06)] px-4 py-3.5 text-[13px] leading-relaxed",
  "text-[rgb(248_247_244/0.78)]",
);

export const aiPrompts = cn("mt-4 flex flex-wrap gap-2");

export const aiPrompt = cn(
  "rounded-full border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.04)]",
  "px-3.5 py-2 text-[11px] tracking-wide text-[rgb(248_247_244/0.7)]",
  "transition-[border-color,background-color,color] duration-400",
  "hover:border-[rgb(198_161_91/0.45)] hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/45",
);

export const aiClosing = cn(
  "mt-5 text-[12px] leading-relaxed text-[rgb(248_247_244/0.42)]",
);

/* ---------- AI Shopping Concierge ---------- */

export const shoppingAiRoot = cn(
  "relative z-[2]",
  contactSectionInner,
  "pb-[clamp(3.5rem,9vh,5.5rem)]",
);

export const shoppingAiCard = cn(
  "contact-glass-card group/shop relative overflow-hidden",
  "rounded-[24px] border border-[rgb(17_17_17/0.08)]",
  "bg-[rgb(248_247_244/0.58)] p-6 backdrop-blur-[18px] sm:p-8 lg:p-10",
  "shadow-[0_24px_56px_-32px_rgb(17_17_17/0.3),inset_0_1px_0_rgb(255_255_255/0.7)]",
  "transition-[transform,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.45)]",
  "hover:shadow-[0_28px_56px_-24px_rgb(198_161_91/0.32),inset_0_1px_0_rgb(255_255_255/0.85)]",
);

export const shoppingAiGlow = cn(
  "pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.18)_0%,transparent_70%)] blur-2xl",
  "opacity-70 transition-opacity duration-500 group-hover/shop:opacity-100",
);

export const shoppingAiSheen = cn(
  "pointer-events-none absolute -inset-x-10 -top-12 h-28 rotate-[-6deg]",
  "bg-gradient-to-r from-transparent via-[rgb(255_255_255/0.4)] to-transparent",
  "opacity-0 transition-opacity duration-700 ease-out",
  "group-hover/shop:opacity-100",
);

export const shoppingAiLayout = cn(
  "relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center",
);

export const shoppingAiCopy = cn("lg:col-span-7");

export const shoppingAiAside = cn(
  "flex flex-col lg:col-span-5 lg:items-start lg:pl-4",
);

export const shoppingAiIcon = cn(
  "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.75)]",
  "text-[rgb(168_138_78)] transition-[border-color,color] duration-500",
  "group-hover/shop:border-[rgb(198_161_91/0.4)]",
);

export const shoppingAiHeading = cn(
  "font-serif font-light leading-[1.1] tracking-[-0.02em]",
  "text-[clamp(1.85rem,4.5vw,2.65rem)] text-[#1a1a1a]",
);

export const shoppingAiSubtitle = cn(
  "mt-3 text-[15px] leading-relaxed text-[rgb(26_26_26/0.55)]",
);

export const shoppingAiDescription = cn(
  "mt-5 text-[14px] leading-[1.75] text-[rgb(26_26_26/0.62)]",
);

export const shoppingAiLead = cn(
  "mt-6 font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(168_138_78)]",
);

export const shoppingAiList = cn(
  "mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5",
);

export const shoppingAiListItem = cn(
  "flex items-center gap-3 text-[13px] text-[rgb(26_26_26/0.68)]",
);

export const shoppingAiListDot = cn(
  "h-1 w-1 shrink-0 rounded-full bg-danovix-accent",
);

export const shoppingAiCta = cn(
  "group/shopcta relative mt-2 inline-flex min-h-12 w-full items-center justify-center gap-3",
  "rounded-[14px] border border-[rgb(198_161_91/0.35)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]",
  "shadow-[0_16px_36px_-18px_rgb(198_161_91/0.5),inset_0_1px_0_rgb(255_255_255/0.45)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-16px_rgb(198_161_91/0.55)]",
  "hover:brightness-[1.03]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ec]",
  "sm:w-auto sm:min-w-[240px]",
);

export const shoppingAiCtaArrow = cn(
  "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/shopcta:translate-x-1",
);

export const shoppingAiMeta = cn(
  "mt-5 flex flex-wrap items-center gap-x-5 gap-y-2",
);

export const shoppingAiMetaItem = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em]",
  "text-[rgb(17_17_17/0.42)]",
);

/* ---------- Meet concierge ---------- */

export const meetRoot = cn(
  "relative z-[2]",
  contactSectionInner,
  "pb-[clamp(4.5rem,11vh,7.5rem)]",
);

export const meetCard = cn(
  "grid grid-cols-1 overflow-hidden rounded-[24px]",
  "border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.55)]",
  "backdrop-blur-[16px] lg:grid-cols-12",
  "shadow-[0_24px_56px_-32px_rgb(17_17_17/0.3),inset_0_1px_0_rgb(255_255_255/0.65)]",
);

export const meetPortrait = cn(
  "relative min-h-[320px] overflow-hidden lg:col-span-5 lg:min-h-full",
  "bg-[linear-gradient(160deg,#2a2622_0%,#1a1816_55%,#121110_100%)]",
);

export const meetPortraitGlow = cn(
  "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgb(198_161_91/0.18)_0%,transparent_62%)]",
);

export const meetPortraitInitials = cn(
  "absolute inset-0 flex items-center justify-center",
  "font-serif text-[clamp(4rem,12vw,6.5rem)] font-light tracking-[0.08em]",
  "text-[rgb(248_247_244/0.12)]",
);

export const meetBody = cn(
  "flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:col-span-7 lg:px-12 lg:py-14",
);

export const meetTitle = cn(
  "mt-4 font-serif font-light leading-[1.1] tracking-[-0.02em]",
  "text-[clamp(1.85rem,4.5vw,2.65rem)] text-[#1a1a1a]",
);

export const meetDescription = cn(
  "mt-4 max-w-[440px] text-[15px] leading-[1.8] text-[rgb(26_26_26/0.58)]",
);

export const meetStats = cn(
  "mt-9 grid grid-cols-1 gap-6 border-t border-[rgb(17_17_17/0.08)] pt-8",
  "sm:grid-cols-3 sm:gap-4",
);

export const meetStatLabel = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[rgb(17_17_17/0.42)]",
);

export const meetStatValue = cn(
  "mt-2 font-serif text-[1.15rem] font-light tracking-[-0.01em] text-[#1a1a1a]",
);

/* ---------- Customer promise ---------- */

export const promiseRoot = cn(
  "contact-promise relative overflow-hidden bg-[#0c0c0c]",
  "py-[clamp(6rem,18vh,11rem)]",
);

export const promiseInner = cn(
  "relative z-[2] mx-auto flex max-w-[920px] flex-col items-center px-5 text-center",
  "sm:px-8",
);

export const promiseHeading = cn(
  "font-serif font-light leading-[1.12] tracking-[-0.025em]",
  "text-[clamp(1.85rem,5.5vw,3.35rem)] text-[rgb(248_247_244)]",
);

export const promiseLine = cn("block overflow-hidden");

export const promiseLineInner = cn("block");

export const promiseSupporting = cn(
  "mt-10 max-w-[420px] text-[clamp(14px,3vw,16px)] leading-[1.85]",
  "text-[rgb(248_247_244/0.5)]",
);

export const promiseRule = cn(
  "mt-10 h-px w-16 bg-[linear-gradient(90deg,transparent,rgb(198_161_91/0.7),transparent)]",
);

/* ---------- FAQ ---------- */

export const faqRoot = cn(
  "contact-faq relative overflow-hidden bg-[#f8f7f4]",
  contactSectionPad,
);

export const faqInner = cn(contactSectionInner);

export const faqHeader = cn("mx-auto max-w-[520px] text-center");

export const faqHeading = cn(
  "mt-5 font-serif font-light leading-[1.08] tracking-[-0.02em]",
  "text-[clamp(2rem,5.5vw,3.15rem)] text-[#1a1a1a]",
);

export const faqList = cn(
  "mx-auto mt-[clamp(2.75rem,7vh,4rem)] max-w-[760px] divide-y divide-[rgb(17_17_17/0.1)]",
  "border-y border-[rgb(17_17_17/0.1)]",
);

export const faqItem = cn("group/faq");

export const faqTrigger = cn(
  "flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/45",
  "focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8f7f4]",
);

export const faqQuestion = cn(
  "font-serif text-[clamp(1.2rem,3.2vw,1.55rem)] font-light tracking-[-0.01em] text-[#1a1a1a]",
  "transition-colors duration-400 group-hover/faq:text-[rgb(120_95_45)]",
);

export const faqIcon = cn(
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
  "border border-[rgb(17_17_17/0.12)] text-[#111111]",
  "transition-[transform,border-color,color] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const faqIconOpen = cn(
  "rotate-45 border-[rgb(198_161_91/0.5)] text-[rgb(168_138_78)]",
);

export const faqPanel = cn(
  "contact-faq-panel grid transition-[grid-template-rows] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const faqPanelInner = cn("overflow-hidden");

export const faqAnswer = cn(
  "pb-6 pr-10 text-[14px] leading-[1.85] text-[rgb(26_26_26/0.58)] sm:pb-7 sm:text-[15px]",
);

/* ---------- Editorial quote ---------- */

export const quoteRoot = cn(
  "contact-quote relative overflow-hidden bg-[#111111]",
  "py-[clamp(6.5rem,20vh,12rem)]",
);

export const quoteInner = cn(
  "relative z-[2] mx-auto flex max-w-[900px] flex-col items-center px-5 text-center",
  "sm:px-8",
);

export const quoteText = cn(
  "font-serif font-light leading-[1.12] tracking-[-0.028em]",
  "text-[clamp(2rem,6.5vw,4rem)] text-[rgb(248_247_244)]",
);

export const quoteLine = cn("block overflow-hidden");

export const quoteSupporting = cn(
  "mt-8 font-serif text-[clamp(1.15rem,3vw,1.55rem)] font-light italic",
  "tracking-[-0.01em] text-[rgb(214_196_158/0.85)]",
);

/* ---------- Social journey ---------- */

export const socialRoot = cn(
  "contact-social relative overflow-hidden bg-[#f5f2ec]",
  contactSectionPad,
);

export const socialInner = cn(
  contactSectionInner,
  "flex flex-col items-center text-center",
);

export const socialHeading = cn(
  "mt-5 font-serif font-light leading-[1.08] tracking-[-0.02em]",
  "text-[clamp(2rem,5.5vw,3.15rem)] text-[#1a1a1a]",
);

export const socialDescription = cn(
  "mt-4 max-w-[420px] text-[14px] leading-[1.8] text-[rgb(26_26_26/0.55)] sm:text-[15px]",
);

export const socialRow = cn(
  "mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-5",
);

export const socialButton = cn(
  "group/social relative inline-flex h-[72px] w-[72px] items-center justify-center",
  "rounded-full border border-[rgb(17_17_17/0.1)]",
  "bg-[rgb(248_247_244/0.55)] text-[#111111] backdrop-blur-[14px]",
  "shadow-[0_12px_32px_-18px_rgb(17_17_17/0.28),inset_0_1px_0_rgb(255_255_255/0.7)]",
  "transition-[transform,border-color,box-shadow,color] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-1 hover:border-[rgb(198_161_91/0.5)] hover:text-[rgb(168_138_78)]",
  "hover:shadow-[0_20px_40px_-16px_rgb(198_161_91/0.35)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
  "sm:h-[84px] sm:w-[84px]",
);

export const socialGlow = cn(
  "pointer-events-none absolute inset-[-18%] rounded-full opacity-0",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.28)_0%,transparent_68%)]",
  "transition-opacity duration-500 group-hover/social:opacity-100",
);

export const socialCta = cn(
  "group/journey relative mt-10 inline-flex min-h-12 items-center justify-center gap-3",
  "rounded-[14px] bg-[#111111] px-8 py-3.5",
  "font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[rgb(248_247_244)]",
  "transition-[transform,background-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:bg-danovix-accent hover:text-[#111111]",
  "hover:shadow-[0_18px_40px_-16px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/55",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ec]",
  "sm:mt-12",
);

export const socialCtaArrow = cn(
  "inline-block transition-transform duration-500 group-hover/journey:translate-x-1",
);
