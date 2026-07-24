import { cn } from "@/lib/cn";

/* ---------- Root & Stage ---------- */

export const footerRoot = cn(
  "site-footer relative z-[4] w-full overflow-hidden bg-[#0c0c0c]",
);

export const footerStage = cn(
  "site-footer-stage relative w-full overflow-hidden",
);

export const footerInner = cn(
  "site-footer-inner relative z-[2] mx-auto w-full max-w-[1320px]",
  "px-5 pt-[clamp(5rem,12vh,8rem)] pb-[clamp(2.5rem,6vh,4rem)]",
  "sm:px-8 lg:px-12 xl:px-16",
);

/* ---------- Ambient ---------- */

export const footerBackground = cn(
  "site-footer-bg pointer-events-none absolute inset-0 z-0",
);

export const footerNoise = cn(
  "site-footer-noise pointer-events-none absolute inset-0 z-[1]",
);

export const footerSpotlight = cn(
  "site-footer-spotlight pointer-events-none absolute z-[1]",
);

export const footerWatermark = cn(
  "site-footer-watermark pointer-events-none absolute inset-0 z-[1]",
  "flex items-center justify-center overflow-hidden",
);

export const footerWatermarkText = cn(
  "select-none font-serif font-light uppercase tracking-[0.08em]",
  "text-[clamp(6rem,22vw,18rem)] leading-none text-[rgb(248_247_244/0.045)]",
  "whitespace-nowrap",
);

/* ---------- Layer 1 · Editorial ---------- */

export const footerEditorial = cn(
  "site-footer-editorial mx-auto flex max-w-[920px] flex-col items-center",
  "pb-[clamp(4rem,10vh,6.5rem)] text-center",
);

export const footerEditorialAccent = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.36em]",
  "text-[rgb(214_196_158)]",
);

export const footerEditorialHeading = cn(
  "mt-8 font-serif font-light leading-[1.05] tracking-[-0.025em]",
  "text-[clamp(2.6rem,8vw,5.25rem)] text-[rgb(248_247_244)]",
);

export const footerEditorialLine = cn("block");

export const footerEditorialRule = cn(
  "mt-10 h-px w-16 bg-[linear-gradient(90deg,transparent,rgb(198_161_91/0.7),transparent)]",
);

/* ---------- Layer 2 · Newsletter ---------- */

export const footerNewsletter = cn(
  "site-footer-newsletter relative mx-auto flex w-full max-w-[560px] flex-col items-center",
  "pb-[clamp(3.25rem,8vh,7rem)] text-center",
);

export const footerNewsletterEyebrow = cn(
  "mb-4 font-sans text-[clamp(9px,2.4vw,10px)] font-medium uppercase tracking-[0.36em]",
  "text-[rgb(214_196_158)]",
);

export const footerNewsletterHeading = cn(
  "font-serif font-light leading-[1.12] tracking-[-0.02em]",
  "text-[clamp(1.85rem,7.5vw,2.35rem)] text-[rgb(248_247_244)]",
);

export const footerNewsletterCopy = cn(
  "mt-4 max-w-[400px] text-[clamp(13px,3.4vw,15px)] leading-[1.75]",
  "text-[rgb(248_247_244/0.55)] sm:mt-5 sm:leading-[1.85]",
);

export const footerNewsletterForm = cn(
  "relative mt-8 w-full sm:mt-9",
);

export const footerNewsletterShell = cn(
  "site-footer-newsletter-shell group/shell relative flex w-full items-center",
  "rounded-[16px] border border-[rgb(248_247_244/0.16)]",
  "bg-[rgb(248_247_244/0.06)] p-1.5 backdrop-blur-[14px]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_16px_40px_-20px_rgb(0_0_0/0.55)]",
  "transition-[border-color,box-shadow] duration-[450ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "focus-within:border-[rgb(198_161_91/0.55)]",
  "focus-within:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_3px_rgb(198_161_91/0.12),0_20px_48px_-18px_rgb(198_161_91/0.25)]",
);

export const footerNewsletterInput = cn(
  "h-12 min-w-0 flex-1 border-0 bg-transparent px-4",
  "font-sans text-[15px] text-[rgb(248_247_244)] outline-none",
  "placeholder:text-[rgb(248_247_244/0.38)]",
  "sm:h-[3.15rem] sm:px-5 sm:text-[14px]",
);

export const footerNewsletterButton = cn(
  "group/nl inline-flex h-12 shrink-0 items-center justify-center gap-1.5",
  "rounded-[12px] border border-[rgb(198_161_91/0.35)]",
  "bg-[rgb(198_161_91/0.18)] px-4",
  "font-sans text-[10px] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(245_230_190)]",
  "transition-[background-color,border-color,transform,box-shadow,color] duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "active:scale-[0.98]",
  "hover:border-[rgb(198_161_91/0.7)] hover:bg-[rgb(198_161_91/0.28)]",
  "hover:text-[rgb(248_247_244)]",
  "hover:shadow-[0_8px_24px_-8px_rgb(198_161_91/0.45)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "sm:h-[3.15rem] sm:gap-2 sm:px-5 sm:tracking-[0.18em]",
  "disabled:pointer-events-none disabled:opacity-55",
);

export const footerNewsletterArrow = cn(
  "text-[1.05em] leading-none transition-transform duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nl:translate-x-1",
);

export const footerNewsletterStatus = cn(
  "mt-3 min-h-[1.25rem] font-sans text-[clamp(12px,3vw,13px)] tracking-[0.04em]",
  "text-[rgb(214_196_158)] sm:mt-4",
);

/* ---------- Luxury Divider ---------- */

export const footerDivider = cn(
  "site-footer-divider mx-auto h-px w-full max-w-[1320px]",
  "bg-[linear-gradient(90deg,transparent_0%,rgb(248_247_244/0.06)_18%,rgb(198_161_91/0.45)_50%,rgb(248_247_244/0.06)_82%,transparent_100%)]",
);

/* ---------- Layer 3 · Columns ---------- */

export const footerColumns = cn(
  "site-footer-columns grid grid-cols-1 gap-[clamp(2.25rem,5vh,3.5rem)]",
  "py-[clamp(3.5rem,9vh,5.5rem)]",
  "md:grid-cols-2 lg:grid-cols-12 lg:gap-x-[clamp(2rem,4vw,3.5rem)]",
);

export const footerBrandCol = cn(
  "site-footer-brand flex flex-col lg:col-span-4",
);

export const footerWordmark = cn(
  "font-serif text-[clamp(1.85rem,4vw,2.35rem)] font-light tracking-[0.04em]",
  "text-[rgb(248_247_244)]",
);

export const footerBrandCopy = cn(
  "mt-5 max-w-[280px] font-serif text-[clamp(1.05rem,2.8vw,1.2rem)]",
  "font-light leading-[1.55] tracking-[-0.01em] text-[rgb(248_247_244/0.62)]",
);

export const footerNavCol = cn("site-footer-nav-col flex flex-col lg:col-span-2");

export const footerNavTitle = cn(
  "font-sans text-[clamp(10px,2.4vw,11px)] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(214_196_158)]",
);

export const footerNavList = cn(
  "mt-5 flex flex-col gap-[clamp(0.7rem,1.6vh,0.9rem)]",
);

export const footerNavLink = cn(
  "site-footer-nav-link group/link relative inline-flex w-fit",
  "font-sans text-[clamp(13px,3.2vw,14px)] text-[rgb(248_247_244/0.58)]",
  "transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:text-[rgb(248_247_244)]",
  "focus-visible:outline-none focus-visible:text-[rgb(248_247_244)]",
);

export const footerNavUnderline = cn(
  "pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-0",
  "-translate-x-1/2 bg-[rgb(198_161_91/0.75)]",
  "transition-[width] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/link:w-full group-focus-visible/link:w-full",
);

/* Mobile accordion */

export const footerAccordion = cn("border-b border-[rgb(248_247_244/0.08)] lg:border-0");

export const footerAccordionTrigger = cn(
  "flex w-full items-center justify-between py-4 text-left",
  "font-sans text-[clamp(10px,2.4vw,11px)] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(214_196_158)] lg:pointer-events-none lg:cursor-default lg:py-0",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
);

export const footerAccordionPanel = cn(
  "overflow-hidden lg:!max-h-none lg:!opacity-100",
);

/* ---------- Social ---------- */

export const footerSocial = cn(
  "mt-8 flex items-center gap-3",
);

export const footerSocialButton = cn(
  "group/social relative inline-flex h-11 w-11 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.2)] bg-[rgb(248_247_244/0.06)]",
  "text-[rgb(248_247_244)] backdrop-blur-[10px]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_4px_16px_-6px_rgb(0_0_0/0.4)]",
  "transition-[border-color,background-color,transform,box-shadow,color] duration-[450ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-[3px] hover:border-[rgb(198_161_91/0.75)]",
  "hover:bg-[rgb(198_161_91/0.16)] hover:text-[rgb(245_230_190)]",
  "hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_12px_28px_-8px_rgb(198_161_91/0.55)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
  "active:translate-y-[-1px]",
);

/* ---------- Trust · editorial strip ---------- */

export const footerTrust = cn(
  "site-footer-trust mx-auto flex max-w-[900px] flex-wrap items-center justify-center",
  "gap-x-0 gap-y-3 px-2 pb-[clamp(2rem,5vh,2.75rem)]",
);

export const footerTrustItem = cn(
  "group/chip inline-flex items-center gap-2 px-3 py-1 sm:px-4",
  "transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-px",
);

export const footerTrustSep = cn(
  "hidden h-3 w-px shrink-0 bg-[rgb(198_161_91/0.35)] sm:block",
);

export const footerTrustIcon = cn(
  "text-[rgb(198_161_91/0.7)] transition-colors duration-[400ms]",
  "group-hover/chip:text-[rgb(214_196_158)]",
);

export const footerTrustLabel = cn(
  "font-sans text-[clamp(9px,2.2vw,10px)] font-medium uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.48)] transition-colors duration-[400ms]",
  "group-hover/chip:text-[rgb(248_247_244/0.78)]",
);

/* ---------- Payments · crisp glass badges ---------- */

export const footerPayments = cn(
  "site-footer-payments mx-auto flex list-none flex-wrap items-center justify-center",
  "gap-2 sm:gap-2.5 py-[clamp(1.5rem,3.5vh,2rem)]",
);

export const footerPaymentBadge = cn(
  "inline-flex h-9 min-w-[4.25rem] items-center justify-center rounded-[10px] px-3",
  "border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.05)]",
  "text-[rgb(248_247_244/0.78)] backdrop-blur-[8px]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]",
  "transition-[border-color,background-color,color,transform,box-shadow] duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-px hover:border-[rgb(198_161_91/0.45)]",
  "hover:bg-[rgb(198_161_91/0.1)] hover:text-[rgb(245_230_190)]",
  "hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_8px_20px_-10px_rgb(198_161_91/0.35)]",
);

/** @deprecated kept for animation query compatibility */
export const footerPaymentIcon = footerPaymentBadge;

/* ---------- Journey CTA · editorial hero ---------- */

export const footerJourney = cn(
  "site-footer-journey relative mx-auto flex flex-col items-center text-center",
  "pt-[clamp(0.5rem,2vh,1rem)] pb-[clamp(0.25rem,1vh,0.5rem)]",
);

export const footerJourneyLabel = cn(
  "font-sans text-[clamp(9px,2.2vw,10px)] font-medium uppercase tracking-[0.4em]",
  "text-[rgb(214_196_158)]",
);

export const footerJourneyHandle = cn(
  "group/handle relative mt-5 inline-block font-serif font-light",
  "text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95] tracking-[-0.03em]",
  "text-[rgb(248_247_244)] transition-colors duration-[500ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:text-[rgb(245_230_190)]",
  "focus-visible:outline-none focus-visible:text-[rgb(245_230_190)]",
  "after:pointer-events-none after:absolute after:inset-x-[12%] after:-bottom-[0.12em]",
  "after:h-px after:origin-center after:scale-x-0",
  "after:bg-[linear-gradient(90deg,transparent,rgb(198_161_91/0.8),transparent)]",
  "after:transition-transform after:duration-[550ms]",
  "after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:after:scale-x-100 focus-visible:after:scale-x-100",
);

export const footerJourneyButton = cn(
  "group/ig mt-7 inline-flex items-center gap-2.5",
  "font-sans text-[clamp(10px,2.4vw,11px)] font-medium uppercase tracking-[0.24em]",
  "text-[rgb(248_247_244/0.55)] transition-colors duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]",
);

export const footerJourneyArrow = cn(
  "inline-block text-[1.1em] transition-transform duration-[400ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/ig:translate-x-1.5",
);

/* ---------- Signature · colophon ---------- */

export const footerSignature = cn(
  "site-footer-signature mx-auto flex max-w-[520px] flex-col items-center",
  "border-t border-[rgb(248_247_244/0.06)]",
  "pt-[clamp(1.75rem,4vh,2.25rem)] text-center",
);

export const footerSignatureLead = cn(
  "font-serif text-[clamp(13px,3vw,15px)] font-light italic leading-relaxed",
  "text-[rgb(248_247_244/0.4)]",
);

export const footerSignatureMeta = cn(
  "mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1",
);

export const footerSignatureCopy = cn(
  "font-sans text-[clamp(9px,2.2vw,10px)] uppercase tracking-[0.28em]",
  "text-[rgb(248_247_244/0.35)]",
);

export const footerSignatureTrail = cn(
  "font-sans text-[clamp(11px,2.6vw,12px)] tracking-[0.02em]",
  "text-[rgb(248_247_244/0.3)]",
);
