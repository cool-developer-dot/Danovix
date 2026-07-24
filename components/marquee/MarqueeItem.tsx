import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

import { MarqueeDivider } from "./MarqueeDivider";

type MarqueeItemProps = {
  label: string;
  icon?: LucideIcon;
  showDivider?: boolean;
  className?: string;
};

export function MarqueeItem({
  label,
  icon: Icon,
  showDivider = true,
  className,
}: MarqueeItemProps) {
  return (
    <>
      <span
        className={cn(
          "marquee-item inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap",
          className,
        )}
      >
        {Icon && (
          <Icon
            className="marquee-item-icon h-3 w-3 stroke-[1.2] text-danovix-accent/55"
            aria-hidden="true"
          />
        )}
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-danovix-accent/88 sm:text-[11px] sm:tracking-[0.3em]">
          {label}
        </span>
      </span>
      {showDivider && <MarqueeDivider />}
    </>
  );
}
