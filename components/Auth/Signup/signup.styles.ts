import { cn } from "@/lib/cn";

/* ---------- Page shell ---------- */

export const signupPage = cn(
  "signup-page relative min-h-[100svh] w-full overflow-hidden bg-[#0b0a09]",
);

export const signupGrid = cn(
  "relative z-[2] grid min-h-[100svh] w-full grid-cols-1",
  "md:grid-cols-2 lg:grid-cols-[3fr_2fr]",
);

/* ---------- Brand mark (top-left, immersive chrome) ---------- */

export const brandMark = cn(
  "signup-fade absolute left-5 top-5 z-[30] inline-flex items-center gap-3 sm:left-8 sm:top-7 lg:left-10",
  "transition-opacity duration-500 hover:opacity-80",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0a09]",
);

export const brandMarkText = cn(
  "font-serif text-[1.35rem] font-light uppercase leading-none tracking-[0.32em] text-[rgb(248_247_244/0.92)]",
);

/* ---------- Editorial panel (left, 60%) ---------- */

export const editorialPanel = cn(
  "signup-editorial relative isolate flex min-h-[62svh] w-full flex-col justify-end overflow-hidden",
  "px-6 pb-14 pt-28 sm:px-10 sm:pb-16 sm:pt-32",
  "md:min-h-[100svh] md:justify-center md:py-24",
  "lg:px-14 lg:py-28 xl:px-20",
);

export const editorialImage = cn("signup-editorial-image object-cover");

export const editorialImageLayer = cn(
  "signup-fade absolute inset-0 -z-10",
);

export const editorialScrim = cn(
  "signup-editorial-scrim pointer-events-none absolute inset-0 -z-10",
);

export const editorialGlow = cn(
  "signup-editorial-glow pointer-events-none absolute inset-0 -z-10",
);

export const editorialGrain = cn(
  "signup-grain pointer-events-none absolute inset-0 -z-10",
);

export const editorialParticles = cn(
  "signup-particles pointer-events-none absolute inset-0 -z-10",
);

export const editorialWatermark = cn(
  "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden",
);

export const editorialWatermarkText = cn(
  "select-none font-serif font-light uppercase leading-none tracking-[0.06em]",
  "text-[clamp(6rem,26vw,22rem)] text-[rgb(248_247_244/0.03)] whitespace-nowrap",
);

/* Content column */

export const editorialContent = cn(
  "relative z-[2] w-full max-w-[560px]",
);

export const editorialEyebrow = cn(
  "signup-fade font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em]",
  "text-[rgb(214_196_158)]",
);

export const editorialHeadline = cn(
  "mt-6 font-serif font-light leading-[1.02] tracking-[-0.03em]",
  "text-[clamp(2.75rem,7.5vw,5.5rem)] text-[rgb(248_247_244)]",
);

export const editorialHeadlineLine = cn("block overflow-hidden");

export const editorialHeadlineWord = cn("inline-block will-change-transform");

export const editorialDescription = cn(
  "signup-fade mt-7 max-w-[460px] text-[clamp(14px,3vw,16px)] leading-[1.9]",
  "text-[rgb(248_247_244/0.6)] sm:mt-8",
);

export const editorialRule = cn(
  "signup-fade mt-9 h-px w-16 origin-left",
  "bg-[linear-gradient(90deg,rgb(198_161_91/0.8),transparent)] sm:mt-10",
);

/* ---------- Floating feature cards ---------- */

export const featureCardsLayer = cn(
  "pointer-events-none absolute inset-0 z-[1] hidden md:block",
);

export const featureCard = cn(
  "signup-feature-card group/feature pointer-events-auto absolute overflow-hidden",
  "rounded-[18px] border border-[rgb(248_247_244/0.12)]",
  "bg-[linear-gradient(150deg,rgb(248_247_244/0.1)_0%,rgb(248_247_244/0.04)_55%,rgb(198_161_91/0.05)_100%)]",
  "p-4 backdrop-blur-[14px] lg:p-5",
  "shadow-[0_24px_60px_-30px_rgb(0_0_0/0.7),inset_0_1px_0_rgb(255_255_255/0.14)]",
);

export const featureCardSheen = cn(
  "signup-feature-sheen pointer-events-none absolute inset-0",
);

export const featureCardIcon = cn(
  "inline-flex h-10 w-10 items-center justify-center rounded-full",
  "border border-[rgb(248_247_244/0.16)] bg-[rgb(248_247_244/0.08)]",
  "text-[rgb(214_196_158)]",
);

export const featureCardTitle = cn(
  "mt-3.5 font-serif text-[clamp(1rem,1.4vw,1.2rem)] font-light leading-snug tracking-[-0.01em]",
  "text-[rgb(248_247_244/0.94)]",
);

export const featureCardCopy = cn(
  "mt-1.5 text-[12px] leading-relaxed text-[rgb(248_247_244/0.58)]",
);

/* ---------- Auth aside (right, 40%) ---------- */

export const authAside = cn(
  "signup-aside relative flex w-full items-start justify-center overflow-x-hidden overflow-y-auto",
  "px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12",
  "md:items-center md:overflow-hidden md:pb-16 md:pt-24",
  "lg:px-10 lg:pb-14 lg:pt-20 xl:px-14 xl:pt-[4.5rem]",
);

export const authAsideBg = cn(
  "signup-aside-bg pointer-events-none absolute inset-0",
);

export const authAsideGrain = cn(
  "signup-grain pointer-events-none absolute inset-0 opacity-70",
);

/* ---------- Signup card ---------- */

export const authCard = cn(
  "signup-card relative z-[2] w-full max-w-[440px] overflow-hidden rounded-[24px]",
  "border border-[rgb(248_247_244/0.1)]",
  "bg-[linear-gradient(165deg,rgb(28_26_23/0.86)_0%,rgb(18_17_15/0.9)_52%,rgb(22_20_17/0.88)_100%)]",
  "p-6 backdrop-blur-[22px] sm:p-8 lg:p-9",
  "shadow-[0_40px_100px_-40px_rgb(0_0_0/0.85),inset_0_1px_0_rgb(255_255_255/0.08)]",
  /* Lift into the optical sweet spot so the full membership card stays in view */
  "md:-mt-8 lg:-mt-12 xl:-mt-32",
  "transform-gpu [transform-style:preserve-3d]",
);

export const authCardStage = cn(
  "relative z-[2] w-full",
  "[perspective:1400px]",
);

export const authCardFlipper = cn(
  "relative w-full origin-center will-change-transform",
  "transform-gpu [transform-style:preserve-3d]",
);

export const authCardFace = cn("relative w-full");

export const authCardReflection = cn(
  "signup-auth-reflection pointer-events-none absolute inset-0 z-[5] opacity-0",
  "bg-gradient-to-r from-transparent via-[rgb(255_255_255/0.14)] to-transparent",
  "translate-x-[-120%] skew-x-[-16deg]",
);

export const authCardGlow = cn(
  "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full",
  "bg-[radial-gradient(circle,rgb(198_161_91/0.22)_0%,transparent_70%)] blur-2xl",
);

export const authCardHeader = cn("signup-fade relative z-[2] text-center");

export const authEyebrow = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.34em] text-[rgb(214_196_158)]",
);

export const authHeading = cn(
  "mt-4 font-serif font-light leading-[1.08] tracking-[-0.02em]",
  "text-[clamp(1.85rem,5vw,2.4rem)] text-[rgb(248_247_244)]",
);

export const authSubtitle = cn(
  "mx-auto mt-3 max-w-[340px] text-[13.5px] leading-[1.7] text-[rgb(248_247_244/0.52)]",
);

/* ---------- Fields ---------- */

export const fieldList = cn("relative z-[2] mt-8 flex flex-col gap-5");

export const fieldGroup = cn("signup-field relative");

export const fieldShell = cn("relative");

export const fieldIcon = cn(
  "pointer-events-none absolute left-4 top-1/2 z-[2] -translate-y-1/2",
  "text-[rgb(248_247_244/0.4)] transition-colors duration-400",
  "peer-focus:text-[rgb(214_196_158)]",
);

export const fieldInput = cn(
  "peer w-full rounded-[14px] border border-[rgb(248_247_244/0.12)]",
  "bg-[rgb(248_247_244/0.04)] pl-12 pr-4 pb-3 pt-6 text-[15px] text-[rgb(248_247_244/0.95)]",
  "placeholder:text-transparent caret-[rgb(214_196_158)]",
  "shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]",
  "transition-[border-color,box-shadow,background-color] duration-400",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(248_247_244/0.2)]",
  "focus:border-[rgb(198_161_91/0.6)] focus:bg-[rgb(248_247_244/0.06)]",
  "focus:outline-none focus:shadow-[0_0_0_3px_rgb(198_161_91/0.16),inset_0_1px_0_rgb(255_255_255/0.06)]",
);

export const fieldInputWithToggle = cn(fieldInput, "pr-12");

export const fieldLabel = cn(
  "pointer-events-none absolute left-12 top-1/2 -translate-y-1/2",
  "text-[14px] text-[rgb(248_247_244/0.44)] transition-all duration-300",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "peer-focus:left-4 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[9.5px]",
  "peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[rgb(214_196_158)]",
  "peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:top-2.5",
  "peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[9.5px]",
  "peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]",
  "peer-[:not(:placeholder-shown)]:text-[rgb(248_247_244/0.5)]",
);

export const passwordToggle = cn(
  "absolute right-3 top-1/2 z-[2] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full",
  "text-[rgb(248_247_244/0.4)] transition-[color,background-color] duration-300",
  "hover:bg-[rgb(248_247_244/0.06)] hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50",
);

/* ---------- Password strength ---------- */

export const strengthWrap = cn("mt-3");

export const strengthTrack = cn("flex items-center gap-1.5");

export const strengthSegment = cn(
  "h-[3px] flex-1 overflow-hidden rounded-full bg-[rgb(248_247_244/0.1)]",
);

export const strengthFill = cn(
  "h-full w-full origin-left rounded-full transition-[transform,background-color] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
);

export const strengthMeta = cn(
  "mt-2 flex items-center justify-between text-[10.5px] tracking-wide",
);

export const strengthLabel = cn(
  "font-medium uppercase tracking-[0.18em] transition-colors duration-400",
);

export const strengthHint = cn("text-[rgb(248_247_244/0.36)]");

/* ---------- Terms ---------- */

export const termsRow = cn("signup-field relative z-[2] mt-6 flex items-start gap-3");

export const termsCheckbox = cn(
  "group/check relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px]",
  "border border-[rgb(248_247_244/0.2)] bg-[rgb(248_247_244/0.04)]",
  "transition-[border-color,background-color,box-shadow] duration-300",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[rgb(198_161_91/0.5)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]",
  "data-[checked=true]:border-[rgb(198_161_91/0.7)]",
  "data-[checked=true]:bg-[linear-gradient(160deg,rgb(214_196_158),rgb(168_138_78))]",
);

export const termsCheckIcon = cn(
  "scale-0 text-[#141210] opacity-0 transition-[transform,opacity] duration-300",
  "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
  "group-data-[checked=true]/check:scale-100 group-data-[checked=true]/check:opacity-100",
);

export const termsText = cn(
  "text-[12.5px] leading-relaxed text-[rgb(248_247_244/0.55)]",
);

export const termsLink = cn(
  "signup-underline relative text-[rgb(248_247_244/0.8)] transition-colors duration-300",
  "hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]",
);

/* ---------- Login meta (remember / forgot) ---------- */

export const loginMetaRow = cn(
  "signup-field relative z-[2] mt-5 flex flex-wrap items-center justify-between gap-3",
);

export const rememberRow = cn("flex items-center gap-2.5");

export const rememberLabel = cn(
  "text-[12.5px] text-[rgb(248_247_244/0.55)] select-none",
);

export const forgotLink = cn(
  "signup-underline relative cursor-pointer border-0 bg-transparent p-0 font-sans text-[12px] tracking-[0.02em]",
  "text-[rgb(214_196_158/0.9)] transition-colors duration-300",
  "hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]",
);

/* ---------- Primary button ---------- */

export const submitButton = cn(
  "group/submit relative z-[2] mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-3 overflow-hidden",
  "rounded-[14px] border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-8 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#141210]",
  "shadow-[0_18px_44px_-18px_rgb(198_161_91/0.6),inset_0_1px_0_rgb(255_255_255/0.4)]",
  "transition-[transform,box-shadow,filter] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:brightness-[1.04]",
  "hover:shadow-[0_24px_54px_-16px_rgb(198_161_91/0.7)]",
  "active:translate-y-0 active:brightness-[0.98] active:shadow-[0_12px_30px_-16px_rgb(198_161_91/0.6)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]",
  "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:brightness-100",
);

export const submitArrow = cn(
  "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/submit:translate-x-1",
);

export const submitSpinner = cn(
  "h-4 w-4 animate-spin rounded-full border-[1.5px] border-[#141210]/30 border-t-[#141210]",
);

/* ---------- Divider ---------- */

export const divider = cn("signup-fade relative z-[2] my-7 flex items-center gap-4");

export const dividerLine = cn(
  "h-px flex-1 bg-[linear-gradient(90deg,transparent,rgb(248_247_244/0.16),transparent)]",
);

export const dividerText = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[rgb(248_247_244/0.4)]",
);

/* ---------- Social ---------- */

export const socialList = cn("signup-fade relative z-[2] flex flex-col gap-3");

export const socialButton = cn(
  "group/social inline-flex min-h-[50px] w-full items-center justify-center gap-3",
  "rounded-[14px] border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.04)]",
  "px-6 font-sans text-[12px] font-medium tracking-[0.02em] text-[rgb(248_247_244/0.9)]",
  "backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-500",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.4)] hover:bg-[rgb(248_247_244/0.07)]",
  "hover:shadow-[0_16px_36px_-18px_rgb(198_161_91/0.4)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]",
);

export const socialIcon = cn("h-[18px] w-[18px] text-[rgb(248_247_244/0.9)]");

/* ---------- Sign in link ---------- */

export const signInRow = cn(
  "signup-fade relative z-[2] mt-7 text-center text-[13px] text-[rgb(248_247_244/0.5)]",
);

export const signInLink = cn(
  "signup-underline group/signin relative ml-1 inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-medium text-[rgb(248_247_244/0.9)]",
  "transition-colors duration-300 hover:text-[rgb(214_196_158)]",
  "focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]",
);

export const signInArrow = cn(
  "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/signin:translate-x-0.5",
);

/* ---------- Trust strip ---------- */

export const trustStrip = cn(
  "signup-fade relative z-[2] mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5",
  "border-t border-[rgb(248_247_244/0.08)] pt-6",
);

export const trustItem = cn(
  "inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.14em]",
  "text-[rgb(248_247_244/0.42)]",
);

export const trustIcon = cn("h-3.5 w-3.5 text-[rgb(214_196_158/0.75)]");

/* ---------- Success experience ---------- */

export const successOverlay = cn(
  "signup-success fixed inset-0 z-[60] flex items-center justify-center overflow-hidden px-6",
);

export const successBg = cn("signup-success-bg pointer-events-none absolute inset-0");

export const successGrain = cn(
  "signup-grain pointer-events-none absolute inset-0 opacity-60",
);

export const successParticles = cn(
  "signup-particles pointer-events-none absolute inset-0",
);

export const successWatermark = cn(
  "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
);

export const successWatermarkText = cn(
  "select-none font-serif font-light uppercase leading-none tracking-[0.06em]",
  "text-[clamp(6rem,26vw,22rem)] text-[rgb(248_247_244/0.03)] whitespace-nowrap",
);

export const successInner = cn(
  "relative z-[2] flex max-w-[520px] flex-col items-center text-center",
);

export const successIconRing = cn(
  "signup-success-icon relative flex h-24 w-24 items-center justify-center rounded-full",
  "border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158/0.16),rgb(168_138_78/0.06))]",
  "shadow-[0_0_60px_-12px_rgb(198_161_91/0.5),inset_0_1px_0_rgb(255_255_255/0.14)]",
);

export const successIcon = cn("h-10 w-10 text-[rgb(214_196_158)]");

export const successEyebrow = cn(
  "signup-success-item mt-9 font-sans text-[10px] font-medium uppercase tracking-[0.36em] text-[rgb(214_196_158)]",
);

export const successHeadline = cn(
  "signup-success-item mt-5 font-serif font-light leading-[1.05] tracking-[-0.025em]",
  "text-[clamp(2.5rem,8vw,4.25rem)] text-[rgb(248_247_244)]",
);

export const successSubtitle = cn(
  "signup-success-item mt-5 max-w-[380px] text-[clamp(14px,3vw,16px)] leading-[1.85] text-[rgb(248_247_244/0.55)]",
);

export const successCta = cn(
  "signup-success-item group/success relative mt-11 inline-flex min-h-[54px] items-center justify-center gap-3",
  "rounded-[14px] border border-[rgb(198_161_91/0.4)]",
  "bg-[linear-gradient(160deg,rgb(214_196_158)_0%,rgb(198_161_91)_52%,rgb(168_138_78)_100%)]",
  "px-10 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#141210]",
  "shadow-[0_20px_48px_-18px_rgb(198_161_91/0.6),inset_0_1px_0_rgb(255_255_255/0.4)]",
  "transition-[transform,box-shadow,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:brightness-[1.04] hover:shadow-[0_26px_56px_-16px_rgb(198_161_91/0.7)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0a09]",
);

export const successCtaArrow = cn(
  "inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover/success:translate-x-1",
);
