import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

import { HERO_PRIMARY_CTA, HERO_SECONDARY_CTA } from "./constants";

type HeroButtonsProps = {
  className?: string;
};

export function HeroButtons({ className }: HeroButtonsProps) {
  return (
    <div
      data-hero-animate="buttons"
      className={cn(
        "hero-fade-target flex w-full flex-col gap-3",
        "sm:flex-row sm:items-center sm:gap-4",
        className,
      )}
    >
      <a
        href="#collection"
        className="group relative inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-[14px] bg-danovix-primary px-8 text-[clamp(9px,2.5vw,10px)] font-medium uppercase tracking-[0.2em] text-danovix-background shadow-[0_12px_32px_rgb(17_17_17/0.18)] transition-[background-color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-danovix-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:tracking-[0.22em]"
      >
        {HERO_PRIMARY_CTA}
        <ArrowRight
          className="h-3.5 w-3.5 shrink-0 stroke-[1.25] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>

      <a
        href="#craftsmanship"
        className="group inline-flex h-12 w-full items-center justify-center rounded-[14px] border border-danovix-background/30 bg-danovix-background/[0.04] px-8 text-[clamp(9px,2.5vw,10px)] font-medium uppercase tracking-[0.2em] text-danovix-background backdrop-blur-sm transition-[background-color,border-color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-danovix-background/50 hover:bg-danovix-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:tracking-[0.22em]"
      >
        {HERO_SECONDARY_CTA}
      </a>
    </div>
  );
}
