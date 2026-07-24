"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { RESERVED_CONCIERGE } from "@/lib/reserved/constants";

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
} from "./reserved.styles";

export function AIShoppingConcierge() {
  const [started, setStarted] = useState(false);

  return (
    <section
      aria-labelledby="reserved-concierge-heading"
      className={conciergeRoot}
    >
      <div className={conciergeBg} aria-hidden="true" />
      <div className={conciergeNoise} aria-hidden="true" />

      <div className={conciergeInner}>
        <article data-reserved="concierge" className={conciergeCard}>
          <div className={conciergeGlow} aria-hidden="true" />

          <div className={conciergeLayout}>
            <div className={conciergeCopy}>
              <span className={conciergeIcon} aria-hidden="true">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>

              <h2
                id="reserved-concierge-heading"
                className={conciergeHeading}
              >
                {RESERVED_CONCIERGE.heading}
              </h2>
              <p className={conciergeDescription}>
                {RESERVED_CONCIERGE.description}
              </p>

              <ul className={conciergeList} role="list">
                {RESERVED_CONCIERGE.capabilities.map((item) => (
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
                onClick={() => setStarted(true)}
                aria-describedby={
                  started ? "reserved-concierge-status" : undefined
                }
              >
                {RESERVED_CONCIERGE.cta}
                <span aria-hidden="true">→</span>
              </button>

              {started ? (
                <p
                  id="reserved-concierge-status"
                  className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                  role="status"
                  aria-live="polite"
                >
                  Your AI Concierge is ready. Share a silhouette, color, or
                  occasion — and we&apos;ll guide your reserved pieces with
                  quiet precision.
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
