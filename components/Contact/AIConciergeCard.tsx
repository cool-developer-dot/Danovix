"use client";

import { useState } from "react";

import { AI_CONCIERGE } from "@/lib/contact/constants";

import {
  aiBubble,
  aiCard,
  aiChat,
  aiClosing,
  aiCta,
  aiCtaArrow,
  aiDescription,
  aiEyebrow,
  aiGlow,
  aiHeading,
  aiList,
  aiListDot,
  aiListItem,
  aiPrompt,
  aiPrompts,
} from "./contact.styles";

export function AIConciergeCard() {
  const [started, setStarted] = useState(false);
  const [reply, setReply] = useState<string | null>(null);

  return (
    <aside
      data-contact="ai"
      aria-labelledby="ai-concierge-heading"
      className={aiCard}
    >
      <div className={aiGlow} aria-hidden="true" />

      <p className={aiEyebrow}>{AI_CONCIERGE.eyebrow}</p>
      <h2 id="ai-concierge-heading" className={aiHeading}>
        {AI_CONCIERGE.heading}
      </h2>
      <p className={aiDescription}>{AI_CONCIERGE.description}</p>

      {!started ? (
        <>
          <ul className={aiList} role="list">
            {AI_CONCIERGE.capabilities.map((item) => (
              <li key={item} className={aiListItem}>
                <span className={aiListDot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={aiCta}
            onClick={() => setStarted(true)}
          >
            {AI_CONCIERGE.cta}
            <span className={aiCtaArrow} aria-hidden="true">
              →
            </span>
          </button>
        </>
      ) : (
        <div className={aiChat} role="region" aria-live="polite">
          <p className={aiBubble}>{AI_CONCIERGE.welcome}</p>

          {reply ? (
            <p className={`${aiBubble} mt-3`}>{reply}</p>
          ) : (
            <div className={aiPrompts}>
              {AI_CONCIERGE.prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className={aiPrompt}
                  onClick={() =>
                    setReply(
                      `Thank you. I've noted your interest in “${prompt.toLowerCase()}.” A specialist can continue this conversation below — or explore our collections while we prepare a thoughtful reply.`,
                    )
                  }
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <p className={aiClosing}>{AI_CONCIERGE.closing}</p>
        </div>
      )}
    </aside>
  );
}
