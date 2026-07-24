"use client";

import { GitCompareArrows } from "lucide-react";

import { WISHLIST_COMPARE } from "@/lib/wishlist/constants";
import { cn } from "@/lib/cn";

import {
  compareDescription,
  compareHeader,
  compareHeading,
  compareHint,
  compareRoot,
  floatingCompare,
  floatingCompareBtn,
  wishlistEyebrow,
} from "./wishlist.styles";

type CompareMyFavoritesProps = {
  selectedCount: number;
  onOpen: () => void;
};

export function CompareMyFavorites({
  selectedCount,
  onOpen,
}: CompareMyFavoritesProps) {
  const ready = selectedCount >= 2 && selectedCount <= 4;

  return (
    <>
      <section
        aria-labelledby="wishlist-compare-heading"
        className={compareRoot}
      >
        <div className={compareHeader}>
          <p data-wishlist="compare-eyebrow" className={wishlistEyebrow}>
            {WISHLIST_COMPARE.eyebrow}
          </p>
          <h2
            id="wishlist-compare-heading"
            data-wishlist="compare-heading"
            className={compareHeading}
          >
            {WISHLIST_COMPARE.heading}
          </h2>
          <p
            data-wishlist="compare-description"
            className={compareDescription}
          >
            {WISHLIST_COMPARE.description}
          </p>
          <p data-wishlist="compare-hint" className={compareHint}>
            {ready
              ? `${selectedCount} pieces selected`
              : WISHLIST_COMPARE.emptyHint}
          </p>
        </div>
      </section>

      <div
        className={cn(
          floatingCompare,
          ready
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
        aria-hidden={!ready}
      >
        <button
          type="button"
          className={floatingCompareBtn}
          onClick={onOpen}
          tabIndex={ready ? 0 : -1}
        >
          <GitCompareArrows
            className="h-4 w-4 stroke-[1.25]"
            aria-hidden="true"
          />
          {WISHLIST_COMPARE.floatingCta}
          <span className="tabular-nums">({selectedCount})</span>
        </button>
      </div>
    </>
  );
}
