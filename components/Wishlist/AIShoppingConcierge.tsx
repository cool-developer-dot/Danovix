"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { WISHLIST_CONCIERGE } from "@/lib/wishlist/constants";

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
} from "./wishlist.styles";

export function AIShoppingConcierge() {
  const [started, setStarted] = useState(false);

  return (
    <section
      aria-labelledby="wishlist-concierge-heading"
      className={conciergeRoot}
    >
      <div className={conciergeBg} aria-hidden="true" />
      <div className={conciergeNoise} aria-hidden="true" />

      <div className={conciergeInner}>
        <article
          data-wishlist="concierge"
          className={conciergeCard}
        >
          <div className={conciergeGlow} aria-hidden="true" />

          <div className={conciergeLayout}>
            <div className={conciergeCopy}>
              <span className={conciergeIcon} aria-hidden="true">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>

              <h2
                id="wishlist-concierge-heading"
                className={conciergeHeading}
              >
                {WISHLIST_CONCIERGE.heading}
              </h2>
              <p className={conciergeDescription}>
                {WISHLIST_CONCIERGE.description}
              </p>

              <ul className={conciergeList} role="list">
                {WISHLIST_CONCIERGE.capabilities.map((item) => (
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
                  started ? "wishlist-concierge-status" : undefined
                }
              >
                {WISHLIST_CONCIERGE.cta}
                <span aria-hidden="true">→</span>
              </button>

              {started ? (
                <p
                  id="wishlist-concierge-status"
                  className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                  role="status"
                  aria-live="polite"
                >
                  Your AI Concierge is ready. Share a silhouette, color, or
                  occasion — and we&apos;ll guide you with quiet precision.
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
