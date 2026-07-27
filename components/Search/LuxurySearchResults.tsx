"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  GitCompareArrows,
  Heart,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import { ExperienceAiCard } from "@/components/Experience/ExperienceAiCard";
import { ExperienceEditorialGrid } from "@/components/Experience/ExperienceEditorialGrid";
import { cn } from "@/lib/cn";
import { EXPERIENCE_SEARCH_EMPTY } from "@/lib/experience/constants";
import {
  RESULTS_COPY,
  SEARCH_EMPTY,
  type SearchProduct,
} from "@/lib/search/constants";

import {
  actionButton,
  actionButtonActive,
  cardFeature,
  cardHero,
  cardSupport,
  emptyCta,
  emptyDescription,
  emptyHeading,
  emptyHeadingLine,
  emptyIllustration,
  emptyRoot,
  productActions,
  productCard,
  productImage,
  productImageFeature,
  productImageHero,
  productImageSupport,
  productImageWrap,
  productInfo,
  productMeta,
  productMetaDot,
  productName,
  productOverlay,
  productPrice,
  productSweep,
  resultsCount,
  resultsHeader,
  resultsHeading,
  resultsMasonry,
  resultsRoot,
  searchEyebrow,
} from "./search.styles";

type LuxurySearchResultsProps = {
  products: readonly SearchProduct[];
  query: string;
  reservedIds: readonly string[];
  savedIds: readonly string[];
  compareIds: readonly string[];
  onQuickView: (id: string) => void;
  onReserve: (id: string) => void;
  onSave: (id: string) => void;
  onCompare: (id: string) => void;
};

function sizeClass(size: SearchProduct["size"]) {
  switch (size) {
    case "hero":
      return cardHero;
    case "feature":
      return cardFeature;
    default:
      return cardSupport;
  }
}

function imageAspect(size: SearchProduct["size"]) {
  switch (size) {
    case "hero":
      return productImageHero;
    case "feature":
      return productImageFeature;
    default:
      return productImageSupport;
  }
}

export function LuxurySearchResults({
  products,
  query,
  reservedIds,
  savedIds,
  compareIds,
  onQuickView,
  onReserve,
  onSave,
  onCompare,
}: LuxurySearchResultsProps) {
  if (products.length === 0) {
    return (
      <section aria-labelledby="search-empty-heading" className={resultsRoot}>
        <div data-search="empty" className={emptyRoot}>
          <div className={emptyIllustration} aria-hidden="true">
            <Sparkles className="h-10 w-10 stroke-[1.15] text-[rgb(214_196_158)]" />
          </div>
          <h2 id="search-empty-heading" className={emptyHeading}>
            {SEARCH_EMPTY.heading.map((line) => (
              <span key={line} className={emptyHeadingLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={emptyDescription}>{SEARCH_EMPTY.description}</p>
          <Link href={SEARCH_EMPTY.ctaHref} className={emptyCta}>
            {SEARCH_EMPTY.cta}
            <span aria-hidden="true">→</span>
          </Link>
          <ExperienceEditorialGrid
            title="Trending Collections"
            items={EXPERIENCE_SEARCH_EMPTY.trending}
            className="mt-12 w-full max-w-[720px]"
          />
          <ExperienceAiCard
            eyebrow={EXPERIENCE_SEARCH_EMPTY.ai.eyebrow}
            heading={EXPERIENCE_SEARCH_EMPTY.ai.heading}
            description={EXPERIENCE_SEARCH_EMPTY.ai.description}
            cta={EXPERIENCE_SEARCH_EMPTY.ai.cta}
            ctaHref={EXPERIENCE_SEARCH_EMPTY.ai.ctaHref}
            className="mx-auto mt-10 w-full max-w-[520px]"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="search-results-heading"
      data-search="results"
      className={resultsRoot}
    >
      <div className={resultsHeader}>
        <p className={searchEyebrow}>{RESULTS_COPY.eyebrow}</p>
        <h2 id="search-results-heading" className={resultsHeading}>
          {RESULTS_COPY.heading}
        </h2>
        <p className={resultsCount} aria-live="polite">
          {products.length} {RESULTS_COPY.countSuffix}
          {query.trim() ? ` · “${query.trim()}”` : ""}
        </p>
      </div>

      <div className={resultsMasonry}>
        {products.map((product) => {
          const reserved = reservedIds.includes(product.id);
          const saved = savedIds.includes(product.id);
          const compared = compareIds.includes(product.id);

          return (
            <article
              key={product.id}
              data-search="card"
              data-size={product.size}
              className={cn(sizeClass(product.size), "min-w-0")}
              aria-labelledby={`search-card-${product.id}`}
            >
              <div className={productCard}>
                <div className={cn(productImageWrap, imageAspect(product.size))}>
                  <Image
                    data-search="card-image"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 42vw"
                    className={productImage}
                    priority={product.size === "hero"}
                  />
                  <div className={productOverlay} aria-hidden="true" />
                  <div
                    data-search="card-sweep"
                    className={productSweep}
                    aria-hidden="true"
                  />

                  <div className={productActions}>
                    <button
                      type="button"
                      className={actionButton}
                      aria-label={`Quick view ${product.name}`}
                      onClick={() => onQuickView(product.id)}
                    >
                      <Eye className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className={cn(actionButton, reserved && actionButtonActive)}
                      aria-label={
                        reserved
                          ? `Remove ${product.name} from reserved collection`
                          : `Add ${product.name} to reserved collection`
                      }
                      aria-pressed={reserved}
                      onClick={() => onReserve(product.id)}
                    >
                      <ShoppingBag
                        className="h-4 w-4 stroke-[1.25]"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className={cn(actionButton, saved && actionButtonActive)}
                      aria-label={
                        saved
                          ? `Remove ${product.name} from private collection`
                          : `Save ${product.name} to private collection`
                      }
                      aria-pressed={saved}
                      onClick={() => onSave(product.id)}
                    >
                      <Heart
                        className="h-4 w-4 stroke-[1.25]"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className={cn(actionButton, compared && actionButtonActive)}
                      aria-label={
                        compared
                          ? `Remove ${product.name} from comparison`
                          : `Compare ${product.name}`
                      }
                      aria-pressed={compared}
                      onClick={() => onCompare(product.id)}
                    >
                      <GitCompareArrows
                        className="h-4 w-4 stroke-[1.25]"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>

                <div className={productInfo}>
                  <h3
                    id={`search-card-${product.id}`}
                    className={productName}
                  >
                    {product.name}
                  </h3>
                  <p className={productMeta}>
                    <span>{product.collection}</span>
                    <span className={productMetaDot} aria-hidden="true" />
                    <span>{product.color}</span>
                  </p>
                  <p className={productPrice}>{product.priceLabel}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
