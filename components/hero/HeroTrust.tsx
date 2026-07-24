import { cn } from "@/lib/cn";

import { HERO_TRUST } from "./constants";

type HeroTrustProps = {
  className?: string;
};

export function HeroTrust({ className }: HeroTrustProps) {
  return (
    <div
      data-hero-animate="trust"
      className={cn(
        "hero-fade-target flex flex-col gap-2 border-t border-danovix-background/8 pt-8",
        className,
      )}
    >
      <p className="text-[clamp(12px,3.4vw,14px)] font-medium leading-[1.65] tracking-[0.01em] text-danovix-background/90">
        {HERO_TRUST.line}
      </p>
      <p className="text-[clamp(11px,3.2vw,13px)] leading-[1.7] text-danovix-background/50">
        {HERO_TRUST.subline}
      </p>
    </div>
  );
}
