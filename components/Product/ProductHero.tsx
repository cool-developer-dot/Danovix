"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Box,
  Check,
  GitCompareArrows,
  Heart,
  Minus,
  Plus,
  Share2,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import {
  PRODUCT_HERO_COPY,
  type ProductColour,
  type ProductDetail,
  type ProductMediaItem,
} from "@/lib/product/constants";

import {
  colourRow,
  colourLabel,
  colourSwatch,
  colourSwatchActive,
  colourSwatches,
  ctaPrimary,
  ctaSecondary,
  ctaSecondaryActive,
  ctaSecondaryRow,
  heroBg,
  heroGrain,
  heroGrid,
  heroNoise,
  heroRoot,
  infoBadge,
  infoChip,
  infoCollection,
  infoMeta,
  infoName,
  infoPanel,
  infoPrice,
  infoPriceRow,
  infoRating,
  infoStory,
  infoSubtitle,
  qtyBtn,
  qtyControl,
  qtyRow,
  qtyValue,
  stageHint,
  stageImage,
  stageOverlay,
  stageWrap,
  thumbBadge,
  thumbBtn,
  thumbBtnActive,
  thumbImage,
  thumbRail,
  trustIndicators,
  trustLine,
} from "./product.styles";

type ProductHeroProps = {
  detail: ProductDetail;
  activeMediaId: string;
  activeColourId: string;
  quantity: number;
  reserved: boolean;
  saved: boolean;
  compared: boolean;
  onMediaSelect: (item: ProductMediaItem) => void;
  onColourSelect: (colour: ProductColour) => void;
  onQuantityChange: (value: number) => void;
  onReserve: () => void;
  onSave: () => void;
  onCompare: () => void;
  onShare: () => void;
  onScrollTo3d: () => void;
};

export function ProductHero({
  detail,
  activeMediaId,
  activeColourId,
  quantity,
  reserved,
  saved,
  compared,
  onMediaSelect,
  onColourSelect,
  onQuantityChange,
  onReserve,
  onSave,
  onCompare,
  onShare,
  onScrollTo3d,
}: ProductHeroProps) {
  const { product, media, colours } = detail;
  const activeMedia =
    media.find((item) => item.id === activeMediaId) ?? media[0];
  const activeColour =
    colours.find((item) => item.id === activeColourId) ?? colours[0];
  const [faded, setFaded] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(
    activeColour?.imageSrc ?? activeMedia.src,
  );

  useEffect(() => {
    const nextSrc =
      activeMedia.kind === "image" || activeMedia.kind === "video"
        ? activeMedia.id === "front" || activeMedia.id === "lifestyle"
          ? (activeColour?.imageSrc ?? activeMedia.src)
          : activeMedia.src
        : (activeColour?.imageSrc ?? product.imageSrc);

    if (nextSrc === displaySrc) return;
    setFaded(true);
    const timer = window.setTimeout(() => {
      setDisplaySrc(nextSrc);
      setFaded(false);
    }, 220);
    return () => window.clearTimeout(timer);
  }, [activeMedia, activeColour, displaySrc, product.imageSrc]);

  const handleThumb = useCallback(
    (item: ProductMediaItem) => {
      if (item.kind === "model" || item.id === "model-3d") {
        onScrollTo3d();
        return;
      }
      onMediaSelect(item);
    },
    [onMediaSelect, onScrollTo3d],
  );

  return (
    <section
      aria-labelledby="product-hero-heading"
      data-product="hero"
      className={heroRoot}
    >
      <div className={heroBg} aria-hidden="true" />
      <div className={heroNoise} aria-hidden="true" />
      <div className={heroGrain} aria-hidden="true" />

      <div className={heroGrid}>
        <nav aria-label="Product media views" data-product="thumbs">
          <div className={thumbRail} role="tablist">
            {media.map((item) => {
              const active = item.id === activeMediaId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={item.label}
                  className={cn(thumbBtn, active && thumbBtnActive)}
                  onClick={() => handleThumb(item)}
                >
                  <Image
                    src={item.poster ?? item.src}
                    alt=""
                    fill
                    sizes="76px"
                    className={thumbImage}
                  />
                  <span className={thumbBadge}>{item.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div data-product="stage" className={stageWrap}>
          <Image
            key={displaySrc}
            src={displaySrc}
            alt={activeMedia.alt}
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 55vw"
            className={cn(
              stageImage,
              faded ? "opacity-0" : "opacity-100",
            )}
          />
          <div className={stageOverlay} aria-hidden="true" />
          {(activeMedia.kind === "spin" || activeMedia.kind === "model") && (
            <p className={stageHint}>
              {activeMedia.kind === "spin"
                ? "Drag to explore 360°"
                : "Open interactive 3D below"}
            </p>
          )}
          {activeMedia.kind === "video" && (
            <p className={stageHint}>Cinematic preview · Film section below</p>
          )}
        </div>

        <aside data-product="info" className={infoPanel}>
          <p className={infoCollection}>{product.collection} Collection</p>
          <h1 id="product-hero-heading" className={infoName}>
            {product.name}
          </h1>
          <p className={infoSubtitle}>{detail.editorialSubtitle}</p>

          <div className={infoPriceRow}>
            <p className={infoPrice}>{product.priceLabel}</p>
            {detail.limitedEdition ? (
              <span className={infoBadge}>{PRODUCT_HERO_COPY.limited}</span>
            ) : null}
          </div>

          <div className={infoMeta}>
            <span className={infoChip}>
              {product.available
                ? PRODUCT_HERO_COPY.inStock
                : "Awaiting Restock"}
            </span>
            <span className={infoChip}>{product.material}</span>
            <span className={infoChip}>{product.hardware}</span>
          </div>

          <p className={infoRating}>
            <span className="inline-flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={cn(
                    "h-3.5 w-3.5",
                    index < Math.round(detail.rating)
                      ? "fill-[rgb(214_196_158)] stroke-[rgb(214_196_158)]"
                      : "stroke-[rgb(248_247_244/0.25)]",
                  )}
                />
              ))}
            </span>
            <span>
              {detail.rating.toFixed(1)} · {detail.reviewCount} stories
            </span>
          </p>

          <p className={infoStory}>{detail.storyLead}</p>

          <div className={colourRow}>
            <p className={colourLabel}>
              Colour · {activeColour?.name ?? product.color}
            </p>
            <div className={colourSwatches} role="listbox" aria-label="Colour">
              {colours.map((colour) => {
                const active = colour.id === activeColourId;
                return (
                  <button
                    key={colour.id}
                    type="button"
                    role="option"
                    aria-selected={active}
                    aria-label={colour.name}
                    title={colour.name}
                    className={cn(
                      colourSwatch,
                      active && colourSwatchActive,
                    )}
                    style={{ backgroundColor: colour.swatch }}
                    onClick={() => onColourSelect(colour)}
                  />
                );
              })}
            </div>
          </div>

          <div className={qtyRow}>
            <p className={colourLabel}>{PRODUCT_HERO_COPY.quantity}</p>
            <div className={qtyControl}>
              <button
                type="button"
                className={qtyBtn}
                aria-label="Decrease quantity"
                onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              >
                <Minus className="h-3.5 w-3.5 stroke-[1.5]" />
              </button>
              <span className={qtyValue} aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                className={qtyBtn}
                aria-label="Increase quantity"
                onClick={() => onQuantityChange(Math.min(4, quantity + 1))}
              >
                <Plus className="h-3.5 w-3.5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          <button type="button" className={ctaPrimary} onClick={onReserve}>
            {reserved ? "Reserved" : PRODUCT_HERO_COPY.reserve}
            <span aria-hidden="true">→</span>
          </button>

          <div className={ctaSecondaryRow}>
            <button
              type="button"
              className={cn(ctaSecondary, saved && ctaSecondaryActive)}
              aria-pressed={saved}
              onClick={onSave}
            >
              <Heart className="h-3.5 w-3.5 stroke-[1.25]" aria-hidden="true" />
              Wishlist
            </button>
            <button type="button" className={ctaSecondary} onClick={onShare}>
              <Share2 className="h-3.5 w-3.5 stroke-[1.25]" aria-hidden="true" />
              Share
            </button>
            <button
              type="button"
              className={cn(ctaSecondary, compared && ctaSecondaryActive)}
              aria-pressed={compared}
              onClick={onCompare}
            >
              <GitCompareArrows
                className="h-3.5 w-3.5 stroke-[1.25]"
                aria-hidden="true"
              />
              Compare
            </button>
          </div>

          <ul className={trustIndicators} role="list">
            <li className={trustLine}>
              <Box className="h-4 w-4 stroke-[1.25] text-[rgb(214_196_158)]" />
              {PRODUCT_HERO_COPY.packaging}
            </li>
            <li className={trustLine}>
              <BadgeCheck className="h-4 w-4 stroke-[1.25] text-[rgb(214_196_158)]" />
              {PRODUCT_HERO_COPY.authentication}
            </li>
            <li className={trustLine}>
              <Check className="h-4 w-4 stroke-[1.25] text-[rgb(214_196_158)]" />
              {product.available
                ? "Ready to reserve · Ships within 2–4 days"
                : "Join the waitlist via Concierge"}
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
