import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { skeletonPulse, skeletonShimmer } from "./experience.styles";

type SkeletonBlockProps = {
  className?: string;
  style?: CSSProperties;
};

export function SkeletonBlock({ className, style }: SkeletonBlockProps) {
  return (
    <div
      className={cn(skeletonShimmer, skeletonPulse, className)}
      style={style}
      aria-hidden
    />
  );
}

export function HomeLoadingSkeleton() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#0c0c0c]"
      aria-busy
      aria-label="Preparing the DANOVIX experience"
    >
      <div
        className="experience-loading-bg absolute inset-0"
        aria-hidden
      />
      <div
        className="experience-loading-noise absolute inset-0"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto flex min-h-screen max-w-[1200px] flex-col px-5 pt-[clamp(7rem,14vh,10rem)] sm:px-8">
        <SkeletonBlock className="mx-auto h-3 w-28 rounded-full" />
        <SkeletonBlock className="mx-auto mt-8 h-14 w-[min(90%,520px)] rounded-[20px]" />
        <SkeletonBlock className="mx-auto mt-5 h-4 w-[min(70%,360px)] rounded-full" />
        <div className="mt-12 flex justify-center gap-3">
          <SkeletonBlock className="h-12 w-40 rounded-[14px]" />
          <SkeletonBlock className="h-12 w-36 rounded-[14px]" />
        </div>
        <SkeletonBlock className="mx-auto mt-16 aspect-[16/9] w-full max-w-[900px] rounded-[28px]" />
      </div>
    </div>
  );
}

export function CollectionLoadingSkeleton() {
  return (
    <div
      className="min-h-screen bg-[#0c0c0c] px-5 pb-20 pt-[clamp(6.5rem,12vh,9rem)] sm:px-8"
      aria-busy
      aria-label="Preparing the collection"
    >
      <div className="mx-auto max-w-[1200px]">
        <SkeletonBlock className="h-3 w-32 rounded-full" />
        <SkeletonBlock className="mt-6 h-12 w-[min(80%,420px)] rounded-[18px]" />
        <SkeletonBlock className="mt-4 h-10 w-full max-w-md rounded-[14px]" />
        <div className="mt-8 flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <SkeletonBlock className="aspect-[3/4] w-full rounded-[22px]" />
              <SkeletonBlock className="h-3 w-3/4 rounded-full" />
              <SkeletonBlock className="h-3 w-1/2 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductLoadingSkeleton() {
  return (
    <div
      className="min-h-screen bg-[#0c0c0c] px-5 pb-24 pt-[clamp(6.5rem,12vh,9rem)] sm:px-8"
      aria-busy
      aria-label="Preparing the piece"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SkeletonBlock className="aspect-[4/5] w-full rounded-[28px]" />
          <div className="mt-4 flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-16 w-16 rounded-[12px]" />
            ))}
          </div>
        </div>
        <div className="space-y-4 pt-2">
          <SkeletonBlock className="h-3 w-24 rounded-full" />
          <SkeletonBlock className="h-12 w-[90%] rounded-[18px]" />
          <SkeletonBlock className="h-4 w-[70%] rounded-full" />
          <SkeletonBlock className="h-8 w-32 rounded-[12px]" />
          <SkeletonBlock className="mt-6 h-14 w-full rounded-[14px]" />
          <SkeletonBlock className="h-24 w-full rounded-[18px]" />
          <div className="space-y-2 pt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-3 w-full rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SearchLoadingSkeleton() {
  return (
    <div
      className="min-h-screen bg-[#0c0c0c] px-5 pb-20 pt-[clamp(6.5rem,12vh,9rem)] sm:px-8"
      aria-busy
      aria-label="Searching the collection"
    >
      <div className="mx-auto max-w-[920px]">
        <SkeletonBlock className="mx-auto h-14 w-full max-w-xl rounded-[18px]" />
        <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-8 w-28 rounded-full" />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlock key={i} className="aspect-[3/4] rounded-[22px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AccountLoadingSkeleton() {
  return (
    <div
      className="min-h-screen bg-[#0c0c0c] px-5 pb-24 pt-[clamp(6.5rem,12vh,9rem)] sm:px-8"
      aria-busy
      aria-label="Preparing your private lounge"
    >
      <div className="mx-auto max-w-[1100px]">
        <SkeletonBlock className="mx-auto h-3 w-36 rounded-full" />
        <SkeletonBlock className="mx-auto mt-6 h-14 w-[min(90%,480px)] rounded-[20px]" />
        <SkeletonBlock className="mx-auto mt-4 h-4 w-[min(70%,360px)] rounded-full" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-36 rounded-[22px]" />
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <SkeletonBlock className="h-64 rounded-[24px]" />
          <SkeletonBlock className="h-64 rounded-[24px]" />
        </div>
      </div>
    </div>
  );
}

export function AiLoadingCard({ message }: { message?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-[rgb(198_161_91/0.22)]",
        "bg-[linear-gradient(165deg,rgb(248_247_244/0.07)_0%,rgb(248_247_244/0.025)_100%)]",
        "p-8 text-center backdrop-blur-[16px]",
        "shadow-[0_24px_56px_-28px_rgb(0_0_0/0.55)]",
      )}
      role="status"
      aria-live="polite"
    >
      <div
        className="pointer-events-none absolute inset-0 animate-[danovix-breathe_3.2s_ease-in-out_infinite]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgb(198 161 91 / 0.18), transparent 70%)",
        }}
      />
      <p className="relative font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(214_196_158)]">
        Private Stylist
      </p>
      <p className="relative mx-auto mt-5 max-w-[360px] font-serif text-[clamp(1.2rem,3vw,1.5rem)] font-light leading-snug text-[rgb(248_247_244)]">
        {message ??
          "Curating recommendations inspired by your personal style..."}
      </p>
    </div>
  );
}

export function CheckoutLoadingProgress({
  step,
  steps,
}: {
  step: number;
  steps: readonly string[];
}) {
  const safe = Math.min(Math.max(step, 0), steps.length - 1);
  return (
    <div className="mx-auto w-full max-w-md text-center" role="status">
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(214_196_158)]">
        Secure Checkout
      </p>
      <p className="mt-5 font-serif text-[clamp(1.5rem,4vw,2rem)] font-light text-[rgb(248_247_244)]">
        {steps[safe]}
      </p>
      <div className="mt-8 flex justify-center gap-2">
        {steps.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-10 rounded-full transition-[background-color,opacity] duration-700",
              i <= safe
                ? "bg-[rgb(198_161_91)] opacity-100"
                : "bg-[rgb(248_247_244/0.15)] opacity-70",
            )}
          />
        ))}
      </div>
    </div>
  );
}
