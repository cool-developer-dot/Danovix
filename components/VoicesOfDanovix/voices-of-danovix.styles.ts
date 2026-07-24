import { cn } from "@/lib/cn";

/* ---------- Root & Stage ---------- */

export const voicesRoot = cn(
  "voices-of-danovix relative z-[3] w-full overflow-hidden bg-[#111111]",
  "-mt-[clamp(3rem,22vh,15rem)]",
);

export const voicesStage = cn(
  "voices-of-danovix-stage relative w-full overflow-hidden",
);

export const voicesInner = cn(
  "voices-of-danovix-inner relative z-[2] mx-auto w-full max-w-[1440px]",
  "px-5 pt-[clamp(1.5rem,4vh,3rem)] pb-[clamp(4.5rem,12vh,7.5rem)] sm:px-8 lg:px-12 xl:px-16",
);

/* ---------- Header ---------- */

export const voicesHeader = cn(
  "voices-of-danovix-header mx-auto flex max-w-[700px] flex-col items-center text-center",
);

export const voicesLabel = cn(
  "font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.32em]",
  "text-[rgb(214_196_158)] sm:tracking-[0.38em]",
);

export const voicesHeading = cn(
  "mt-6 font-serif font-light leading-[1.06] tracking-[-0.02em]",
  "text-[clamp(2rem,6vw,3.8rem)] text-[rgb(248_247_244)]",
  "sm:mt-7",
);

export const voicesHeadingLine = cn("block");

export const voicesDescription = cn(
  "mt-6 max-w-[700px] text-[clamp(13px,3.4vw,15px)] leading-[1.85] text-[rgb(248_247_244/0.66)]",
  "sm:mt-7",
);

/* ---------- Carousel ---------- */

export const voicesCarousel = cn(
  "voices-of-danovix-carousel mt-[clamp(2.75rem,7vh,4.5rem)] w-full",
  "[perspective:1400px]",
);

export const voicesViewport = cn(
  "voices-of-danovix-viewport relative w-full overflow-hidden py-[clamp(1.5rem,3vh,2.5rem)]",
  "outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/40",
  "focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111] rounded-[8px]",
  "cursor-grab active:cursor-grabbing",
);

export const voicesTrack = cn(
  "voices-of-danovix-track flex items-stretch",
  "gap-[clamp(1rem,2vw,1.75rem)]",
);

/* ---------- Panel ---------- */

export const voicesPanel = cn(
  "voices-of-danovix-panel relative flex shrink-0 flex-col overflow-hidden",
  "basis-[90%] sm:basis-[88%] md:basis-[86%] lg:basis-[82%] xl:basis-[80%]",
  "rounded-[32px] border border-[rgb(248_247_244/0.08)]",
  "bg-[rgb(248_247_244/0.035)] backdrop-blur-[8px]",
  "shadow-[0_32px_90px_-40px_rgb(0_0_0/0.72)]",
  "p-[clamp(1.5rem,4vw,3.5rem)]",
  "min-h-[clamp(30rem,60vh,34rem)] lg:min-h-[clamp(30rem,56vh,36rem)]",
);

export const voicesPanelGrid = cn(
  "relative z-[1] grid h-full flex-1 items-center gap-[clamp(1.75rem,4vw,3.5rem)]",
  "lg:grid-cols-[minmax(0,300px)_1fr] xl:grid-cols-[minmax(0,340px)_1fr]",
);

/* ---------- Panel · Left (portrait + identity) ---------- */

export const voicesPanelAside = cn(
  "voices-of-danovix-aside flex flex-col",
);

export const voicesPortrait = cn(
  "voices-of-danovix-portrait relative w-full max-w-[clamp(9rem,40vw,20rem)] overflow-hidden",
  "aspect-[4/5] rounded-[24px] border border-[rgb(198_161_91/0.28)]",
  "bg-[rgb(198_161_91/0.05)] shadow-[0_18px_50px_-24px_rgb(0_0_0/0.7)]",
);

export const voicesPortraitImage = cn(
  "h-full w-full object-cover object-center will-change-transform",
);

export const voicesPanelName = cn(
  "mt-[clamp(1.25rem,3vh,1.75rem)] font-serif text-[clamp(1.35rem,4vw,1.7rem)]",
  "font-light leading-[1.15] tracking-[-0.01em] text-[rgb(248_247_244)]",
);

export const voicesPanelCity = cn(
  "mt-2 font-sans text-[clamp(11px,2.8vw,12px)] uppercase tracking-[0.2em]",
  "text-[rgb(248_247_244/0.5)]",
);

export const voicesPanelIdentityRow = cn(
  "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2",
);

export const voicesPanelVerified = cn(
  "inline-flex items-center gap-1.5 font-sans text-[clamp(10px,2.6vw,11px)]",
  "font-medium uppercase tracking-[0.2em] text-[rgb(198_161_91/0.78)]",
);

export const voicesStars = cn(
  "voices-of-danovix-stars inline-flex items-center gap-0.5",
  "text-[0.72rem] leading-none text-[rgb(198_161_91/0.85)]",
);

/* ---------- Panel · Right (editorial quote) ---------- */

export const voicesPanelBody = cn(
  "voices-of-danovix-body flex flex-col justify-center",
);

export const voicesQuote = cn(
  "font-serif font-light tracking-[-0.015em] text-[rgb(248_247_244/0.94)]",
  "text-[clamp(1.35rem,4.2vw,2.35rem)] leading-[1.42]",
);

export const voicesQuoteRule = cn(
  "mt-[clamp(1.5rem,3.5vh,2.25rem)] h-px w-[clamp(3rem,8vw,4.5rem)]",
  "bg-[rgb(198_161_91/0.55)]",
);

export const voicesPanelTitle = cn(
  "mt-[clamp(1.25rem,3vh,1.75rem)] font-sans text-[clamp(11px,2.8vw,12.5px)]",
  "font-semibold uppercase tracking-[0.26em] text-[rgb(214_196_158)]",
);

export const voicesPanelExperience = cn(
  "mt-3 max-w-[46ch] text-[clamp(13px,3.2vw,15px)] leading-[1.75]",
  "text-[rgb(248_247_244/0.6)]",
);

/* ---------- Navigation ---------- */

export const voicesNav = cn(
  "voices-of-danovix-nav mt-[clamp(2rem,5vh,3rem)] flex items-center justify-center",
  "gap-[clamp(1.5rem,5vw,3rem)]",
);

export const voicesNavButton = cn(
  "voices-of-danovix-nav-button group/nav relative inline-flex items-center gap-2",
  "font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase tracking-[0.24em]",
  "text-[rgb(248_247_244/0.7)] transition-[color,opacity] duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:text-[rgb(248_247_244)] disabled:pointer-events-none disabled:opacity-30",
  "focus-visible:outline-none focus-visible:text-[rgb(248_247_244)]",
);

export const voicesNavButtonLabel = cn(
  "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full",
  "after:origin-right after:scale-x-0 after:bg-[rgb(198_161_91/0.7)]",
  "after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/nav:after:origin-left group-hover/nav:after:scale-x-100",
  "group-focus-visible/nav:after:origin-left group-focus-visible/nav:after:scale-x-100",
);

export const voicesNavArrow = cn(
  "text-[1.05em] leading-none transition-transform duration-[300ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const voicesNavCounter = cn(
  "voices-of-danovix-counter inline-flex items-center gap-1.5 font-sans tabular-nums",
  "text-[clamp(11px,2.8vw,12px)] tracking-[0.22em]",
);

export const voicesNavCounterCurrent = cn("text-[rgb(214_196_158)]");

export const voicesNavCounterDivider = cn("text-[rgb(248_247_244/0.3)]");

export const voicesNavCounterTotal = cn("text-[rgb(248_247_244/0.45)]");

/* ---------- Trust Bar ---------- */

export const voicesTrustBar = cn(
  "voices-of-danovix-trust mt-[clamp(3rem,8vh,4.5rem)]",
  "border-t border-[rgb(248_247_244/0.08)] pt-[clamp(2rem,5vh,3rem)]",
);

export const voicesTrustList = cn(
  "mx-auto grid max-w-[920px] grid-cols-2 gap-x-6 gap-y-8",
  "sm:grid-cols-4 sm:gap-x-8",
);

export const voicesTrustItem = cn(
  "voices-of-danovix-trust-item group/trust flex cursor-default flex-col items-center gap-3 text-center",
);

export const voicesTrustIcon = cn(
  "voices-of-danovix-trust-icon relative flex h-12 w-12 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.12)] bg-[rgb(248_247_244/0.03)]",
  "text-[rgb(248_247_244/0.78)]",
  "transition-[color,border-color,background-color,box-shadow,transform] duration-[550ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "group-hover/trust:-translate-y-1 group-hover/trust:scale-[1.06]",
  "group-hover/trust:border-[rgb(198_161_91/0.75)]",
  "group-hover/trust:bg-[rgb(198_161_91/0.1)]",
  "group-hover/trust:text-[rgb(214_196_158)]",
  "group-hover/trust:shadow-[0_14px_38px_-12px_rgb(198_161_91/0.55),0_0_0_1px_rgb(198_161_91/0.25)]",
);

export const voicesTrustIconRing = cn(
  "voices-of-danovix-trust-ring pointer-events-none absolute inset-0 rounded-full",
  "opacity-0 transition-opacity duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/trust:opacity-100",
);

export const voicesTrustGlyph = cn(
  "voices-of-danovix-trust-glyph relative transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/trust:rotate-[4deg]",
);

export const voicesTrustLabel = cn(
  "font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase tracking-[0.16em]",
  "text-[rgb(248_247_244/0.55)]",
  "transition-[color,letter-spacing] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/trust:tracking-[0.2em] group-hover/trust:text-[rgb(214_196_158)]",
);

/* ---------- Ambient ---------- */

export const voicesBackground = cn(
  "voices-of-danovix-bg pointer-events-none absolute inset-0 z-0",
);

export const voicesNoise = cn(
  "voices-of-danovix-noise pointer-events-none absolute inset-0 z-[1]",
);

export const voicesSpotlight = cn(
  "voices-of-danovix-spotlight pointer-events-none absolute z-[1]",
);

export const voicesAmbient = cn(
  "voices-of-danovix-ambient pointer-events-none absolute inset-0 z-[1] overflow-hidden",
);

export const voicesDust = cn(
  "voices-of-danovix-dust pointer-events-none absolute rounded-full",
  "bg-[rgb(214_196_158/0.5)]",
);
