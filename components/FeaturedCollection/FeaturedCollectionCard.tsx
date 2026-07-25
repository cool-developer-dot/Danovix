"use client";

import type { RefObject } from "react";

import { ProductShowcase } from "@/components/product-showcase/ProductShowcase";
import {
  FEATURED_CTA,
  type FeaturedProduct,
} from "@/lib/featured-collection/constants";

import {
  featuredCamera,
  featuredCard,
  featuredCardGlow,
  featuredCardWrap,
  featuredCategory,
  featuredCta,
  featuredCtaArrow,
  featuredFloor,
  featuredImage,
  featuredImageStage,
  featuredImageViewport,
  featuredInfo,
  featuredLens,
  featuredName,
  featuredPrice,
  featuredProductDescription,
  featuredVignette,
} from "./featured.styles";

type FeaturedCollectionCardProps = {
  product: FeaturedProduct;
  infoRef: RefObject<HTMLDivElement | null>;
};

export function FeaturedCollectionCard({
  product,
  infoRef,
}: FeaturedCollectionCardProps) {
  return (
    <div data-featured="card" className={featuredCardWrap}>
      <article
        className={featuredCard}
        aria-labelledby="featured-collection-heading"
        aria-roledescription="carousel"
      >
        <div className={featuredCardGlow} aria-hidden="true" />

        <div className={featuredImageStage}>
          <div
            data-featured="film-gate"
            className={featuredImageViewport}
          >
            {/* Cinematic camera plate — GSAP dollies this toward the product */}
            <div data-featured="camera" className={featuredCamera}>
              <ProductShowcase
                frames={product.showcaseFrames}
                alt={product.imageAlt}
                productKey={product.id}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 88vw, 720px"
                viewportClassName="h-full w-full"
                imageClassName={featuredImage}
              />
            </div>

            <div
              data-featured="lens"
              className={featuredLens}
              aria-hidden="true"
            />
            <div
              data-featured="vignette"
              className={featuredVignette}
              aria-hidden="true"
            />
          </div>

          <div className={featuredFloor} aria-hidden="true" />
        </div>

        <div ref={infoRef} className={featuredInfo}>
          <h3 className={featuredName}>{product.name}</h3>
          <p className={featuredCategory}>{product.category}</p>
          <p className={featuredProductDescription}>{product.description}</p>
          <p className={featuredPrice}>{product.price}</p>

          <a
            data-featured="cta"
            href={product.href}
            className={featuredCta}
            aria-label={`${FEATURED_CTA}: ${product.name}`}
          >
            {FEATURED_CTA}
            <span className={featuredCtaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </article>
    </div>
  );
}
