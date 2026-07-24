"use client";

import Image from "next/image";

import {
  CONTINUE_EXPLORING,
  getProductsByIds,
  CONTINUE_EXPLORING_IDS,
} from "@/lib/search/constants";

import {
  continueCard,
  continueDescription,
  continueGrid,
  continueHeader,
  continueHeading,
  continueImage,
  continueImageWrap,
  continueInfo,
  continueMeta,
  continueName,
  continueRoot,
  searchEyebrow,
} from "./search.styles";

export function ContinueExploring() {
  const products = getProductsByIds(CONTINUE_EXPLORING_IDS);

  return (
    <section
      aria-labelledby="search-continue-heading"
      className={continueRoot}
    >
      <div className={continueHeader}>
        <p data-search="continue-eyebrow" className={searchEyebrow}>
          {CONTINUE_EXPLORING.eyebrow}
        </p>
        <h2
          id="search-continue-heading"
          data-search="continue-heading"
          className={continueHeading}
        >
          {CONTINUE_EXPLORING.heading}
        </h2>
        <p
          data-search="continue-description"
          className={continueDescription}
        >
          {CONTINUE_EXPLORING.description}
        </p>
      </div>

      <div className={continueGrid}>
        {products.map((product) => (
          <article
            key={product.id}
            data-search="continue-card"
            className={continueCard}
          >
            <div className={continueImageWrap}>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 18vw"
                className={continueImage}
              />
            </div>
            <div className={continueInfo}>
              <h3 className={continueName}>{product.name}</h3>
              <p className={continueMeta}>{product.collection}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
