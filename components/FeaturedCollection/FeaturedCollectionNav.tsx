"use client";

import {
  featuredCounter,
  featuredCounterCurrent,
  featuredCounterDivider,
  featuredCounterTotal,
  featuredNav,
  featuredNavArrow,
  featuredNavButton,
  featuredNavLabel,
} from "./featured.styles";
import { cn } from "@/lib/cn";

type FeaturedCollectionNavProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

const pad = (value: number) => String(value).padStart(2, "0");

export function FeaturedCollectionNav({
  current,
  total,
  onPrev,
  onNext,
}: FeaturedCollectionNavProps) {
  return (
    <div data-featured="nav" className={featuredNav}>
      <button
        type="button"
        onClick={onPrev}
        className={featuredNavButton}
        aria-label="Previous product"
      >
        <span className={cn(featuredNavArrow, "group-hover/nav:-translate-x-1")}>
          ←
        </span>
        <span className={featuredNavLabel}>Previous</span>
      </button>

      <p className={featuredCounter} aria-live="polite">
        <span className={featuredCounterCurrent}>{pad(current + 1)}</span>
        <span className={featuredCounterDivider}>/</span>
        <span className={featuredCounterTotal}>{pad(total)}</span>
      </p>

      <button
        type="button"
        onClick={onNext}
        className={featuredNavButton}
        aria-label="Next product"
      >
        <span className={featuredNavLabel}>Next</span>
        <span className={cn(featuredNavArrow, "group-hover/nav:translate-x-1")}>
          →
        </span>
      </button>
    </div>
  );
}
