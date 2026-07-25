import { cn } from "@/lib/cn";

export const signatureRoot = cn("signature-piece relative w-full bg-[#111111]");

export const signatureStage = cn(
  "signature-piece-stage relative min-h-dvh w-full overflow-hidden bg-[#111111]",
);

export const signatureCamera = cn(
  "signature-piece-camera absolute inset-0",
);

export const signatureBackground = cn(
  "signature-piece-bg pointer-events-none absolute inset-0 z-0",
);

export const signatureNoise = cn(
  "signature-piece-noise pointer-events-none absolute inset-0 z-[1]",
);

export const signatureVignette = cn(
  "signature-piece-vignette pointer-events-none absolute inset-0 z-[1]",
);

export const signatureSpotlight = cn(
  "signature-piece-spotlight pointer-events-none absolute z-[1]",
);

export const signatureGrid = cn(
  "signature-piece-grid relative z-[2] mx-auto grid min-h-dvh w-full",
  "max-w-[1600px] grid-cols-1 items-start px-5 py-16",
  "sm:items-center sm:px-10 sm:py-24",
  "lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-[clamp(2rem,5vw,4rem)] lg:px-12 lg:py-0",
  "xl:px-16",
);

export const signatureAmbient = cn(
  "signature-piece-ambient pointer-events-none absolute inset-0 z-[1]",
);

export const signatureEditorialCol = cn(
  "signature-piece-editorial-col flex w-full items-center",
);

export const signatureEditorial = cn(
  "signature-piece-editorial flex w-full max-w-[420px] flex-col",
  "max-lg:mx-auto max-lg:items-center",
);

export const signatureLabel = cn(
  "font-sans text-[clamp(9px,2.4vw,10px)] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(214_196_158)] sm:tracking-[0.34em]",
);

export const signatureHeading = cn(
  "mt-6 font-serif font-light leading-[1.06] tracking-[-0.025em]",
  "text-[clamp(2.15rem,9vw,3.85rem)] text-[rgb(248_247_244)]",
  "sm:mt-8 sm:leading-[1.04]",
);

export const signatureHeadingWord = cn("inline-block");

export const signatureDescription = cn(
  "mt-7 space-y-3 text-[clamp(13px,3.5vw,15px)] leading-[1.85] text-[rgb(248_247_244/0.74)]",
  "sm:mt-9 sm:leading-[1.95]",
);

export const signatureSentence = cn("max-w-[22rem] max-sm:mx-auto");

export const signatureCta = cn(
  "signature-piece-cta mt-8 inline-flex h-12 w-full items-center justify-center",
  "rounded-[14px] border border-[rgb(248_247_244/0.28)] bg-[rgb(248_247_244/0.06)] px-8",
  "text-[clamp(9px,2.5vw,10px)] font-medium uppercase tracking-[0.2em] text-[rgb(248_247_244)]",
  "backdrop-blur-[2px] transition-[border-color,background-color,transform,box-shadow,filter] duration-[250ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-[2px] hover:border-[rgb(198_161_91/0.75)] hover:bg-[rgb(198_161_91/0.16)]",
  "hover:shadow-[0_10px_36px_rgb(198_161_91/0.28)] hover:drop-shadow-[0_0_18px_rgb(198_161_91/0.35)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  "sm:mt-10 sm:w-fit sm:tracking-[0.22em]",
);

export const signatureDetails = cn(
  "mt-10 flex flex-col gap-3.5 sm:mt-14 sm:gap-[1.125rem]",
);

export const signatureDetailItem = cn(
  "signature-piece-feature group flex items-start gap-3 font-sans text-[clamp(9px,2.5vw,11px)] uppercase tracking-[0.18em]",
  "text-[rgb(248_247_244/0.42)] sm:items-center sm:tracking-[0.2em]",
);

export const signatureFeatureBullet = cn(
  "signature-piece-feature-bullet mt-0.5 shrink-0 text-[rgb(198_161_91/0.55)] transition-[color,filter,opacity] duration-[250ms] ease-out sm:mt-0",
  "group-hover:text-[rgb(214_196_158)] group-hover:drop-shadow-[0_0_8px_rgb(198_161_91/0.55)]",
);

export const signatureProductStage = cn(
  "signature-product-stage pointer-events-none absolute z-[3]",
);

export const signatureProduct = cn("signature-product relative w-full");
