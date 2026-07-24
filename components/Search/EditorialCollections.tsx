"use client";

import Image from "next/image";

import {
  EDITORIAL_COLLECTIONS,
  type EditorialCollection,
} from "@/lib/search/constants";

import {
  editorialCard,
  editorialContent,
  editorialCta,
  editorialCtaUnderline,
  editorialGrid,
  editorialImage,
  editorialOverlay,
  editorialRoot,
  editorialSubtitle,
  editorialTitle,
} from "./search.styles";

type EditorialCollectionsProps = {
  collections?: readonly EditorialCollection[];
  onExplore?: (query: string) => void;
};

export function EditorialCollections({
  collections = EDITORIAL_COLLECTIONS.slice(0, 2),
  onExplore,
}: EditorialCollectionsProps) {
  return (
    <section
      aria-label="Editorial collections"
      data-search="editorial"
      className={editorialRoot}
    >
      <div className={editorialGrid}>
        {collections.map((collection) => (
          <article
            key={collection.id}
            data-search="editorial-card"
            className={editorialCard}
          >
            <Image
              src={collection.imageSrc}
              alt={collection.imageAlt}
              fill
              sizes="(max-width: 768px) 92vw, 46vw"
              className={editorialImage}
            />
            <div className={editorialOverlay} aria-hidden="true" />
            <div className={editorialContent}>
              <h3 className={editorialTitle}>{collection.title}</h3>
              <p className={editorialSubtitle}>{collection.subtitle}</p>
              <button
                type="button"
                className={editorialCta}
                onClick={() => onExplore?.(collection.query)}
              >
                <span className={editorialCtaUnderline}>Explore Collection</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
