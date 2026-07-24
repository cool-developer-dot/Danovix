"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { AI_SHOPPING_CONCIERGE } from "@/lib/contact/constants";

import {
  shoppingAiAside,
  shoppingAiCard,
  shoppingAiCopy,
  shoppingAiCta,
  shoppingAiCtaArrow,
  shoppingAiDescription,
  shoppingAiGlow,
  shoppingAiHeading,
  shoppingAiIcon,
  shoppingAiLayout,
  shoppingAiLead,
  shoppingAiList,
  shoppingAiListDot,
  shoppingAiListItem,
  shoppingAiMeta,
  shoppingAiMetaItem,
  shoppingAiRoot,
  shoppingAiSheen,
  shoppingAiSubtitle,
} from "./contact.styles";

export function AIShoppingConciergeCard() {
  const [started, setStarted] = useState(false);

  return (
    <div className={shoppingAiRoot}>
      <article
        data-contact="shopping-ai"
        aria-labelledby="ai-shopping-concierge-heading"
        className={shoppingAiCard}
      >
        <div className={shoppingAiGlow} aria-hidden="true" />
        <span className={shoppingAiSheen} aria-hidden="true" />

        <div className={shoppingAiLayout}>
          <div className={shoppingAiCopy}>
            <span className={shoppingAiIcon} aria-hidden="true">
              <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
            </span>

            <h3
              id="ai-shopping-concierge-heading"
              className={shoppingAiHeading}
            >
              {AI_SHOPPING_CONCIERGE.heading}
            </h3>
            <p className={shoppingAiSubtitle}>
              {AI_SHOPPING_CONCIERGE.subtitle}
            </p>
            <p className={shoppingAiDescription}>
              {AI_SHOPPING_CONCIERGE.description}
            </p>

            <p className={shoppingAiLead}>{AI_SHOPPING_CONCIERGE.lead}</p>
            <ul className={shoppingAiList} role="list">
              {AI_SHOPPING_CONCIERGE.capabilities.map((item) => (
                <li key={item} className={shoppingAiListItem}>
                  <span className={shoppingAiListDot} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={shoppingAiAside}>
            <button
              type="button"
              className={shoppingAiCta}
              onClick={() => setStarted(true)}
              aria-describedby={
                started ? "ai-shopping-concierge-status" : undefined
              }
            >
              {AI_SHOPPING_CONCIERGE.cta}
              <span className={shoppingAiCtaArrow} aria-hidden="true">
                →
              </span>
            </button>

            <div className={shoppingAiMeta}>
              {AI_SHOPPING_CONCIERGE.availability.map((item) => (
                <span key={item} className={shoppingAiMetaItem}>
                  {item}
                </span>
              ))}
            </div>

            {started ? (
              <p
                id="ai-shopping-concierge-status"
                className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                role="status"
                aria-live="polite"
              >
                Your AI Shopping Concierge is ready. Share what you&apos;re
                looking for — a silhouette, occasion, or color — and we&apos;ll
                guide you with care.
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}
