"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { AI_CONCIERGE } from "@/lib/search/constants";

import {
  conciergeAside,
  conciergeBg,
  conciergeCard,
  conciergeCopy,
  conciergeCta,
  conciergeDescription,
  conciergeDot,
  conciergeGlow,
  conciergeHeading,
  conciergeIcon,
  conciergeInner,
  conciergeLayout,
  conciergeList,
  conciergeListItem,
  conciergeNoise,
  conciergeRoot,
} from "./search.styles";

type AIShoppingConciergeProps = {
  onAsk?: () => void;
};

export function AIShoppingConcierge({ onAsk }: AIShoppingConciergeProps) {
  const [started, setStarted] = useState(false);

  return (
    <section
      aria-labelledby="search-concierge-heading"
      className={conciergeRoot}
    >
      <div className={conciergeBg} aria-hidden="true" />
      <div className={conciergeNoise} aria-hidden="true" />

      <div className={conciergeInner}>
        <article data-search="concierge" className={conciergeCard}>
          <div className={conciergeGlow} aria-hidden="true" />

          <div className={conciergeLayout}>
            <div className={conciergeCopy}>
              <span className={conciergeIcon} aria-hidden="true">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>

              <h2
                id="search-concierge-heading"
                className={conciergeHeading}
              >
                {AI_CONCIERGE.heading}
              </h2>
              <p className={conciergeDescription}>
                {AI_CONCIERGE.description}
              </p>

              <ul className={conciergeList} role="list">
                {AI_CONCIERGE.capabilities.map((item) => (
                  <li key={item} className={conciergeListItem}>
                    <span className={conciergeDot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={conciergeAside}>
              <button
                type="button"
                className={conciergeCta}
                onClick={() => {
                  setStarted(true);
                  onAsk?.();
                }}
                aria-describedby={
                  started ? "search-concierge-status" : undefined
                }
              >
                {AI_CONCIERGE.cta}
                <span aria-hidden="true">→</span>
              </button>

              {started ? (
                <p
                  id="search-concierge-status"
                  className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                  role="status"
                  aria-live="polite"
                >
                  Your AI Concierge is ready. Describe a silhouette, color,
                  occasion, or gift — and we&apos;ll guide you with quiet
                  precision.
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
