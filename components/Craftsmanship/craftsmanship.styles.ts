import { cn } from "@/lib/cn";

/* ---------- Root & Stage ---------- */

export const craftsmanshipRoot = cn(
  "craftsmanship relative w-full overflow-hidden bg-[#111111]",
);

export const craftsmanshipStage = cn(
  "craftsmanship-stage relative w-full overflow-hidden",
);

export const craftsmanshipInner = cn(
  "craftsmanship-inner relative z-[2] mx-auto w-full max-w-[1320px]",
  "px-5 py-[clamp(4.5rem,12vh,7.5rem)] sm:px-8 lg:px-12 xl:px-14",
);

/* ---------- Split Grid ---------- */

export const craftsmanshipGrid = cn(
  "craftsmanship-grid grid grid-cols-1 gap-[clamp(2.5rem,6vh,4rem)]",
  "lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:items-start lg:gap-[clamp(3rem,6vw,6rem)]",
);

export const craftsmanshipEditorialCol = cn(
  "craftsmanship-editorial-col flex flex-col lg:pt-[clamp(1rem,3vh,2.5rem)]",
);

export const craftsmanshipVisualCol = cn(
  "craftsmanship-visual-col relative flex flex-col [perspective:1400px]",
);

/* ---------- Editorial ---------- */

export const craftsmanshipEditorial = cn(
  "craftsmanship-editorial flex max-w-[480px] flex-col",
);

export const craftsmanshipLabel = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.32em]",
  "text-[rgb(214_196_158)] sm:tracking-[0.38em]",
);

export const craftsmanshipHeading = cn(
  "mt-6 font-serif font-light leading-[1.08] tracking-[-0.02em]",
  "text-[clamp(2.2rem,7vw,3.8rem)] text-[rgb(248_247_244)]",
  "sm:mt-7",
);

export const craftsmanshipHeadingLine = cn("block");

export const craftsmanshipDescription = cn(
  "mt-6 max-w-[420px] text-[clamp(13px,3.4vw,15px)] leading-[1.85] text-[rgb(248_247_244/0.66)]",
  "sm:mt-7",
);

export const craftsmanshipCta = cn(
  "craftsmanship-cta group/cta mt-8 inline-flex items-center gap-2.5 rounded-[14px]",
  "border border-[rgb(248_247_244/0.22)] bg-[rgb(248_247_244/0.05)] px-[clamp(1.5rem,4vw,2rem)]",
  "h-[clamp(2.85rem,7vw,3.25rem)] font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase",
  "tracking-[0.2em] text-[rgb(248_247_244)] backdrop-blur-[2px]",
  "transition-[border-color,background-color,transform,box-shadow] duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-[2px] hover:border-[rgb(198_161_91/0.7)] hover:bg-[rgb(198_161_91/0.14)]",
  "hover:shadow-[0_12px_36px_-8px_rgb(198_161_91/0.35)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]",
  "sm:mt-10",
);

export const craftsmanshipCtaArrow = cn(
  "text-[1.05em] leading-none transition-transform duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1",
);

/* ---------- Gallery ---------- */

export const craftsmanshipGalleryTrack = cn(
  "craftsmanship-gallery-track relative w-full",
  "min-h-[135vh] sm:min-h-[145vh] lg:min-h-[150vh]",
);

export const craftsmanshipGallerySticky = cn(
  "craftsmanship-gallery-sticky sticky w-full",
  "top-[max(5rem,calc((100vh-min(70vh,640px))/2))]",
  "sm:top-[max(5rem,calc((100vh-min(74vh,700px))/2))]",
  "lg:top-[max(6rem,calc((100vh-min(78vh,740px))/2))]",
);

export const craftsmanshipGalleryViewport = cn(
  "craftsmanship-gallery-viewport group/gallery relative w-full overflow-hidden rounded-[4px]",
  "aspect-[3/4] max-h-[min(70vh,640px)] sm:max-h-[min(74vh,700px)]",
  "lg:aspect-[4/5] lg:max-h-[min(78vh,740px)]",
);

export const craftsmanshipImageLayer = cn(
  "craftsmanship-image-layer absolute inset-0 will-change-[transform,opacity,filter]",
);

export const craftsmanshipImage = cn(
  "craftsmanship-image h-full w-full object-cover object-center",
);

export const craftsmanshipLightSweep = cn(
  "craftsmanship-light-sweep pointer-events-none absolute inset-0 z-[2] opacity-0",
  "will-change-[transform,opacity]",
);

export const craftsmanshipFrameLabel = cn(
  "craftsmanship-frame-label pointer-events-none absolute bottom-0 left-0 z-[3]",
  "px-[clamp(1.25rem,3vw,2rem)] pb-[clamp(1.25rem,3vw,2rem)]",
  "font-sans text-[clamp(9px,2.4vw,10px)] font-medium uppercase tracking-[0.28em]",
  "text-[rgb(248_247_244/0.45)]",
);

/* ---------- Pillars (compact list under editorial) ---------- */

export const craftsmanshipPillars = cn(
  "craftsmanship-pillars mt-[clamp(1.75rem,3.5vh,2.5rem)] flex w-full max-w-[480px] flex-col",
  "gap-[clamp(1.5rem,3vh,2rem)] border-t border-[rgb(248_247_244/0.09)]",
  "pt-[clamp(1.75rem,3.5vh,2.5rem)]",
);

export const craftsmanshipPillar = cn(
  "craftsmanship-pillar flex items-start gap-[clamp(0.875rem,2vw,1.15rem)]",
);

export const craftsmanshipPillarIcon = cn(
  "craftsmanship-pillar-icon mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center",
  "rounded-full border border-[rgb(198_161_91/0.22)] bg-[rgb(198_161_91/0.05)]",
  "text-[rgb(198_161_91/0.8)] transition-[color,border-color,box-shadow] duration-[500ms] ease-out",
  "group-hover/pillar:border-[rgb(198_161_91/0.5)] group-hover/pillar:text-[rgb(214_196_158)]",
  "group-hover/pillar:shadow-[0_0_24px_-6px_rgb(198_161_91/0.4)]",
);

export const craftsmanshipPillarContent = cn("flex flex-col");

export const craftsmanshipPillarHeading = cn(
  "font-serif text-[clamp(1.1rem,3.5vw,1.3rem)] font-light leading-[1.2] tracking-[-0.01em]",
  "text-[rgb(248_247_244)]",
);

export const craftsmanshipPillarDescription = cn(
  "mt-2 max-w-[24rem] text-[clamp(12.5px,3.2vw,14px)] leading-[1.7] text-[rgb(248_247_244/0.52)]",
);

/* ---------- Ambient ---------- */

export const craftsmanshipBackground = cn(
  "craftsmanship-bg pointer-events-none absolute inset-0 z-0",
);

export const craftsmanshipNoise = cn(
  "craftsmanship-noise pointer-events-none absolute inset-0 z-[1]",
);

export const craftsmanshipSpotlight = cn(
  "craftsmanship-spotlight pointer-events-none absolute z-[1]",
);

export const craftsmanshipAmbient = cn(
  "craftsmanship-ambient pointer-events-none absolute inset-0 z-[1] overflow-hidden",
);

export const craftsmanshipDust = cn(
  "craftsmanship-dust pointer-events-none absolute rounded-full",
  "bg-[rgb(214_196_158/0.5)]",
);
