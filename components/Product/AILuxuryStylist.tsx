"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { AI_STYLIST } from "@/lib/product/constants";

import {
  ivorySection,
  sectionInner,
  stylistCard,
  stylistCta,
  stylistDesc,
  stylistDot,
  stylistHeading,
  stylistItem,
  stylistLayout,
  stylistList,
  stylistPrompt,
  stylistPrompts,
} from "./product.styles";

type AILuxuryStylistProps = {
  productName: string;
  onAsk?: (prompt?: string) => void;
};

export function AILuxuryStylist({ productName, onAsk }: AILuxuryStylistProps) {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="product-stylist-heading"
      data-product="stylist"
      className={ivorySection}
    >
      <div className={sectionInner}>
        <article className={stylistCard}>
          <div className={stylistLayout}>
            <div className="lg:col-span-7">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.75)] text-[rgb(168_138_78)]">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>
              <h2 id="product-stylist-heading" className={stylistHeading}>
                {AI_STYLIST.heading}
              </h2>
              <p className={stylistDesc}>
                {AI_STYLIST.description} Currently considering{" "}
                <em>{productName}</em>.
              </p>
              <ul className={stylistList} role="list">
                {AI_STYLIST.capabilities.map((item) => (
                  <li key={item} className={stylistItem}>
                    <span className={stylistDot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <button
                type="button"
                className={stylistCta}
                onClick={() => {
                  setMessage(
                    "Your stylist is ready. Describe an occasion, colour preference, or wardrobe gap — and we’ll guide with quiet precision.",
                  );
                  onAsk?.();
                }}
              >
                {AI_STYLIST.cta}
                <span aria-hidden="true">→</span>
              </button>

              <div className={stylistPrompts}>
                {AI_STYLIST.prompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className={stylistPrompt}
                    onClick={() => {
                      setMessage(`Noted: “${prompt}” — drafting a private recommendation.`);
                      onAsk?.(prompt);
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {message ? (
                <p
                  className="mt-5 text-[13px] leading-relaxed text-[rgb(26_26_26/0.55)]"
                  role="status"
                  aria-live="polite"
                >
                  {message}
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
