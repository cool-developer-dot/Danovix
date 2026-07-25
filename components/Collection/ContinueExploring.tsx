"use client";

import Image from "next/image";

import {
  CONTINUE_EXPLORING_COPY,
  EXPLORE_CARDS,
  type CollectionCategoryId,
} from "@/lib/collection/constants";

import {
  continueCard,
  continueContent,
  continueDescription,
  continueGrid,
  continueHeader,
  continueHeading,
  continueImage,
  continueOverlay,
  continueRoot,
  continueSubtitle,
  continueTitle,
  eyebrow,
} from "./collection.styles";

type ContinueExploringProps = {
  onExplore: (category: CollectionCategoryId) => void;
};

export function ContinueExploring({ onExplore }: ContinueExploringProps) {
  return (
    <section
      aria-labelledby="collection-continue-heading"
      className={continueRoot}
    >
      <div className={continueHeader}>
        <p data-collection="continue-eyebrow" className={eyebrow}>
          {CONTINUE_EXPLORING_COPY.eyebrow}
        </p>
        <h2
          id="collection-continue-heading"
          data-collection="continue-heading"
          className={continueHeading}
        >
          {CONTINUE_EXPLORING_COPY.heading}
        </h2>
        <p
          data-collection="continue-description"
          className={continueDescription}
        >
          {CONTINUE_EXPLORING_COPY.description}
        </p>
      </div>

      <div className={continueGrid}>
        {EXPLORE_CARDS.map((card) => (
          <button
            key={card.id}
            type="button"
            data-collection="continue-card"
            className={continueCard}
            onClick={() => onExplore(card.category)}
            aria-label={`Explore ${card.title}`}
          >
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 25vw"
              className={continueImage}
              loading="lazy"
            />
            <div className={continueOverlay} aria-hidden="true" />
            <div className={continueContent}>
              <h3 className={continueTitle}>{card.title}</h3>
              <p className={continueSubtitle}>{card.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
