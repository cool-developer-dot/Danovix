"use client";

import {
  AI_EDITORIAL,
  buildAiEditorial,
} from "@/lib/search/constants";

import {
  aiEditorialBody,
  aiEditorialCard,
  aiEditorialGlow,
  aiEditorialHeading,
  aiEditorialRoot,
  searchEyebrow,
} from "./search.styles";

type AiEditorialResponseProps = {
  query: string;
};

export function AiEditorialResponse({ query }: AiEditorialResponseProps) {
  if (!query.trim()) return null;

  return (
    <section
      aria-labelledby="search-ai-editorial-heading"
      data-search="ai-editorial"
      className={aiEditorialRoot}
    >
      <article className={aiEditorialCard}>
        <div className={aiEditorialGlow} aria-hidden="true" />
        <p className={searchEyebrow}>{AI_EDITORIAL.eyebrow}</p>
        <h2 id="search-ai-editorial-heading" className={aiEditorialHeading}>
          {AI_EDITORIAL.heading}
        </h2>
        <p className={aiEditorialBody}>{buildAiEditorial(query)}</p>
      </article>
    </section>
  );
}
