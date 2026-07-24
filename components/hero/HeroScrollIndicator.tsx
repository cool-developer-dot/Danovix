import { cn } from "@/lib/cn";

type HeroScrollIndicatorProps = {
  className?: string;
};

export function HeroScrollIndicator({ className }: HeroScrollIndicatorProps) {
  return (
    <div
      data-hero-animate="scroll-indicator"
      className={cn(
        "hero-fade-target pointer-events-none absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-danovix-background/35">
          Scroll
        </span>
        <span className="hero-scroll-line block h-8 w-px origin-top bg-gradient-to-b from-danovix-background/0 via-danovix-background/40 to-danovix-background/0" />
      </div>
    </div>
  );
}
