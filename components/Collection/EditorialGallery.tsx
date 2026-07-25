"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/cn";
import {
  GALLERY_COPY,
  type GalleryBlock,
} from "@/lib/collection/constants";

import { CollectionProductCard } from "./CollectionProductCard";
import {
  bannerCard,
  bannerContent,
  bannerCta,
  bannerDescription,
  bannerImage,
  bannerOverlay,
  bannerTitle,
  emptyCta,
  emptyDescription,
  emptyHeading,
  emptyRoot,
  eyebrow,
  galleryCount,
  galleryGrid,
  galleryHeader,
  galleryHeading,
  galleryRoot,
  layoutBanner,
  layoutFeature,
  layoutPortrait,
  layoutQuote,
  layoutStandard,
  layoutWide,
  quoteAttribution,
  quoteBlock,
  quoteText,
} from "./collection.styles";

type EditorialGalleryProps = {
  blocks: readonly GalleryBlock[];
  reservedIds: readonly string[];
  savedIds: readonly string[];
  onQuickView: (id: string) => void;
  onReserve: (id: string) => void;
  onSave: (id: string) => void;
  onReset: () => void;
};

function layoutClass(layout: string) {
  switch (layout) {
    case "feature":
      return layoutFeature;
    case "portrait":
      return layoutPortrait;
    case "wide":
      return layoutWide;
    default:
      return layoutStandard;
  }
}

export function EditorialGallery({
  blocks,
  reservedIds,
  savedIds,
  onQuickView,
  onReserve,
  onSave,
  onReset,
}: EditorialGalleryProps) {
  const productCount = blocks.filter((block) => block.type === "product").length;

  if (blocks.length === 0) {
    return (
      <section aria-labelledby="collection-empty-heading" className={galleryRoot}>
        <div data-collection="empty" className={emptyRoot}>
          <Sparkles
            className="mb-8 h-10 w-10 stroke-[1.15] text-[rgb(214_196_158)]"
            aria-hidden="true"
          />
          <h2 id="collection-empty-heading" className={emptyHeading}>
            {GALLERY_COPY.emptyHeading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className={emptyDescription}>{GALLERY_COPY.emptyDescription}</p>
          <button type="button" className={emptyCta} onClick={onReset}>
            {GALLERY_COPY.emptyCta}
          </button>
        </div>
      </section>
    );
  }

  let productIndex = 0;

  return (
    <section
      aria-labelledby="collection-gallery-heading"
      data-collection="gallery"
      className={galleryRoot}
    >
      <div className={galleryHeader}>
        <p className={eyebrow}>{GALLERY_COPY.eyebrow}</p>
        <h2 id="collection-gallery-heading" className={galleryHeading}>
          {GALLERY_COPY.heading}
        </h2>
        <p className={galleryCount} aria-live="polite">
          {productCount} {GALLERY_COPY.countSuffix}
        </p>
      </div>

      <div className={galleryGrid}>
        {blocks.map((block, index) => {
          if (block.type === "product") {
            const priority = productIndex < 2;
            const currentIndex = productIndex;
            productIndex += 1;

            return (
              <div
                key={`product-${block.product.id}`}
                className={cn(layoutClass(block.layout), "min-w-0")}
              >
                <CollectionProductCard
                  product={block.product}
                  layout={block.layout}
                  priority={priority && currentIndex === 0}
                  reserved={reservedIds.includes(block.product.id)}
                  saved={savedIds.includes(block.product.id)}
                  onQuickView={onQuickView}
                  onReserve={onReserve}
                  onSave={onSave}
                />
              </div>
            );
          }

          if (block.type === "banner") {
            return (
              <div
                key={`banner-${block.banner.id}`}
                data-collection="banner"
                className={layoutBanner}
              >
                <article className={bannerCard}>
                  <Image
                    src={block.banner.imageSrc}
                    alt={block.banner.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1360px"
                    className={bannerImage}
                    loading="lazy"
                  />
                  <div className={bannerOverlay} aria-hidden="true" />
                  <div className={bannerContent}>
                    <p className={eyebrow}>{block.banner.eyebrow}</p>
                    <h3 className={bannerTitle}>{block.banner.title}</h3>
                    <p className={bannerDescription}>
                      {block.banner.description}
                    </p>
                    <Link href={block.banner.href} className={bannerCta}>
                      {block.banner.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </div>
            );
          }

          return (
            <div
              key={`quote-${index}`}
              data-collection="quote"
              className={layoutQuote}
            >
              <blockquote className={quoteBlock}>
                <p className={quoteText}>&ldquo;{block.quote}&rdquo;</p>
                <footer className={quoteAttribution}>{block.attribution}</footer>
              </blockquote>
            </div>
          );
        })}
      </div>
    </section>
  );
}
