import { cn } from "@/lib/cn";

import { HERO_FEATURES } from "./constants";

type HeroFeaturesProps = {
  className?: string;
};

export function HeroFeatures({ className }: HeroFeaturesProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-0",
        "sm:grid-cols-3",
        className,
      )}
    >
      {HERO_FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <li
            key={feature.label}
            className={cn(
              "hero-feature-item flex flex-col items-start gap-3 py-1",
              "sm:items-center sm:gap-3.5 sm:px-4 sm:text-center",
              index > 0 && "sm:border-l sm:border-danovix-background/10",
              index < HERO_FEATURES.length - 1 &&
                "border-b border-danovix-background/10 pb-5 sm:border-b-0 sm:pb-1",
              index === 0 && "pb-5 sm:pb-1",
            )}
          >
            <Icon
              className="h-4 w-4 shrink-0 stroke-[1.1] text-danovix-accent"
              aria-hidden="true"
            />
            <span className="max-w-full text-[clamp(9px,2.4vw,10px)] font-medium uppercase leading-[1.55] tracking-[0.2em] text-danovix-background/68 sm:tracking-[0.24em]">
              {feature.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
