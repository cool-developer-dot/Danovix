"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { ACCOUNT_CONCIERGE } from "@/lib/account/constants";

import {
  accountEyebrow,
  conciergeAside,
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
  warmBg,
  warmNoise,
  warmSection,
} from "./account.styles";

export function AILuxuryConcierge() {
  const [phase, setPhase] = useState<"idle" | "curating" | "ready">("idle");

  return (
    <section
      id="concierge"
      aria-labelledby="account-concierge-heading"
      className={warmSection}
    >
      <div className={warmBg} aria-hidden="true" />
      <div className={warmNoise} aria-hidden="true" />

      <div className={conciergeInner}>
        <article data-account="concierge" className={conciergeCard}>
          <div className={conciergeGlow} aria-hidden="true" />

          <div className={conciergeLayout}>
            <div className={conciergeCopy}>
              <span className={conciergeIcon} aria-hidden="true">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>

              <p
                className={`${accountEyebrow} mb-4 !text-[rgb(168_138_78)]`}
              >
                {ACCOUNT_CONCIERGE.eyebrow}
              </p>

              <h2
                id="account-concierge-heading"
                className={conciergeHeading}
              >
                {ACCOUNT_CONCIERGE.heading}
              </h2>
              <p className={conciergeDescription}>
                {ACCOUNT_CONCIERGE.description}
              </p>

              <ul className={conciergeList} role="list">
                {ACCOUNT_CONCIERGE.capabilities.map((item) => (
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
                  setPhase("curating");
                  window.setTimeout(() => setPhase("ready"), 1600);
                }}
                aria-describedby={
                  phase !== "idle" ? "account-concierge-status" : undefined
                }
              >
                {ACCOUNT_CONCIERGE.cta}
                <span aria-hidden="true">→</span>
              </button>

              {phase === "curating" ? (
                <p
                  id="account-concierge-status"
                  className="mt-5 max-w-[320px] font-serif text-[15px] font-light leading-relaxed text-[rgb(26_26_26/0.62)]"
                  role="status"
                  aria-live="polite"
                >
                  Curating recommendations inspired by your personal style...
                </p>
              ) : null}

              {phase === "ready" ? (
                <p
                  id="account-concierge-status"
                  className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                  role="status"
                  aria-live="polite"
                >
                  {ACCOUNT_CONCIERGE.startedMessage}
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
