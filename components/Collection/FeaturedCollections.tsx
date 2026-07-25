"use client";

import Image from "next/image";

import { FEATURED_EDITS, type CollectionCategoryId } from "@/lib/collection/constants";

import {
  eyebrow,
  featuredCard,
  featuredContent,
  featuredCta,
  featuredGrid,
  featuredHeader,
  featuredHeading,
  featuredImage,
  featuredOverlay,
  featuredRoot,
  featuredSubtitle,
  featuredTitle,
} from "./collection.styles";

type FeaturedCollectionsProps = {
  onExplore: (category: CollectionCategoryId) => void;
};

export function FeaturedCollections({ onExplore }: FeaturedCollectionsProps) {
  return (
    <section
      aria-labelledby="collection-featured-heading"
      data-collection="featured"
      className={featuredRoot}
    >
      <div className={featuredHeader}>
        <p data-collection="featured-eyebrow" className={eyebrow}>
          Signature Edits
        </p>
        <h2
          id="collection-featured-heading"
          data-collection="featured-heading"
          className={featuredHeading}
        >
          Featured Collection
        </h2>
      </div>

      <div className={featuredGrid}>
        {FEATURED_EDITS.map((edit) => (
          <article
            key={edit.id}
            data-collection="featured-card"
            className={featuredCard}
          >
            <Image
              src={edit.imageSrc}
              alt={edit.imageAlt}
              fill
              sizes="(max-width: 768px) 92vw, 33vw"
              className={featuredImage}
              loading="lazy"
            />
            <div className={featuredOverlay} aria-hidden="true" />
            <div className={featuredContent}>
              <h3 className={featuredTitle}>{edit.title}</h3>
              <p className={featuredSubtitle}>{edit.subtitle}</p>
              <button
                type="button"
                className={featuredCta}
                onClick={() => onExplore(edit.category)}
              >
                Explore Edit
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
