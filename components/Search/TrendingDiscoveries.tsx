"use client";

import { TRENDING_DISCOVERIES } from "@/lib/search/constants";

import {
  searchEyebrow,
  trendingChip,
  trendingChipGlow,
  trendingChips,
  trendingHeader,
  trendingHeading,
  trendingRoot,
} from "./search.styles";

type TrendingDiscoveriesProps = {
  onSelect: (query: string) => void;
};

export function TrendingDiscoveries({ onSelect }: TrendingDiscoveriesProps) {
  return (
    <section
      aria-labelledby="search-trending-heading"
      data-search="trending"
      className={trendingRoot}
    >
      <div className={trendingHeader}>
        <p className={searchEyebrow}>{TRENDING_DISCOVERIES.eyebrow}</p>
        <h2 id="search-trending-heading" className={trendingHeading}>
          {TRENDING_DISCOVERIES.heading}
        </h2>
      </div>

      <div className={trendingChips} role="list">
        {TRENDING_DISCOVERIES.chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            role="listitem"
            data-search="trend-chip"
            className={trendingChip}
            onClick={() => onSelect(chip.query)}
          >
            <span className={trendingChipGlow} aria-hidden="true" />
            <span className="relative z-[1]">{chip.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
