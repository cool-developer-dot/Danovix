"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { STYLE_CONCIERGE } from "@/lib/collection/constants";

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
} from "./collection.styles";

type StyleConciergeProps = {
  onAsk?: () => void;
};

export function StyleConcierge({ onAsk }: StyleConciergeProps) {
  const [started, setStarted] = useState(false);

  return (
    <section
      aria-labelledby="collection-concierge-heading"
      className={conciergeRoot}
    >
      <div className={conciergeBg} aria-hidden="true" />
      <div className={conciergeNoise} aria-hidden="true" />

      <div className={conciergeInner}>
        <article data-collection="concierge" className={conciergeCard}>
          <div className={conciergeGlow} aria-hidden="true" />

          <div className={conciergeLayout}>
            <div className={conciergeCopy}>
              <span className={conciergeIcon} aria-hidden="true">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>

              <h2
                id="collection-concierge-heading"
                className={conciergeHeading}
              >
                {STYLE_CONCIERGE.heading}
              </h2>
              <p className={conciergeDescription}>
                {STYLE_CONCIERGE.description}
              </p>

              <ul className={conciergeList} role="list">
                {STYLE_CONCIERGE.capabilities.map((item) => (
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
                  started ? "collection-concierge-status" : undefined
                }
              >
                {STYLE_CONCIERGE.cta}
                <span aria-hidden="true">→</span>
              </button>

              {started ? (
                <p
                  id="collection-concierge-status"
                  className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                  role="status"
                  aria-live="polite"
                >
                  Your Style Concierge is ready. Describe an occasion, colour,
                  silhouette, or gift — and we&apos;ll guide you with quiet
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
