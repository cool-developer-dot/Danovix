import { cn } from "@/lib/cn";

import { HERO_DESCRIPTION } from "./constants";
import { HeroButtons } from "./HeroButtons";
import { HeroFeatures } from "./HeroFeatures";
import { HeroTrust } from "./HeroTrust";

type HeroContentProps = {
  className?: string;
};

export function HeroContent({ className }: HeroContentProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-[36rem] flex-col",
        "lg:max-w-[38rem] xl:max-w-[40rem]",
        className,
      )}
    >
      <p
        data-hero-animate="description"
        className="hero-fade-target max-w-[30rem] text-[clamp(13px,3.6vw,15px)] leading-[1.85] text-danovix-background/76 sm:leading-[1.95]"
      >
        {HERO_DESCRIPTION}
      </p>

      <HeroButtons className="mt-7 w-full sm:mt-9" />

      <div className="mt-8 flex flex-col gap-7 border-t border-danovix-background/10 pt-8 sm:mt-11 sm:gap-9 sm:pt-11">
        <HeroFeatures />
        <HeroTrust />
      </div>
    </div>
  );
}
