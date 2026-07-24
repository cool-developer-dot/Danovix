"use client";

import Image from "next/image";
import {
  Eye,
  GitCompareArrows,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { cn } from "@/lib/cn";
import type { WishlistItem } from "@/lib/wishlist/constants";

import {
  actionButton,
  actionButtonActive,
  cardFeature,
  cardHero,
  cardSupport,
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
} from "./wishlist.styles";

type WishlistCardProps = {
  item: WishlistItem;
  selectedForCompare: boolean;
  compareDisabled: boolean;
  onRemove: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onQuickView: (id: string) => void;
};

function sizeClass(size: WishlistItem["size"]) {
  switch (size) {
    case "hero":
      return cardHero;
    case "feature":
      return cardFeature;
    default:
      return cardSupport;
  }
}

function imageAspect(size: WishlistItem["size"]) {
  switch (size) {
    case "hero":
      return productImageHero;
    case "feature":
      return productImageFeature;
    default:
      return productImageSupport;
  }
}

export function WishlistCard({
  item,
  selectedForCompare,
  compareDisabled,
  onRemove,
  onToggleCompare,
  onQuickView,
}: WishlistCardProps) {
  return (
    <article
      data-wishlist="card"
      data-size={item.size}
      className={cn(sizeClass(item.size), "min-w-0")}
      aria-labelledby={`wishlist-card-${item.id}`}
    >
      <div className={productCard}>
        <div className={cn(productImageWrap, imageAspect(item.size))}>
          <Image
            data-wishlist="card-image"
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 42vw"
            className={productImage}
            priority={item.size === "hero"}
          />
          <div className={productOverlay} aria-hidden="true" />
          <div
            data-wishlist="card-sweep"
            className={productSweep}
            aria-hidden="true"
          />

          <div className={productActions}>
            <button
              type="button"
              className={actionButton}
              aria-label={`Remove ${item.name} from collection`}
              onClick={() => onRemove(item.id)}
            >
              <Trash2 className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={actionButton}
              aria-label={`Add ${item.name} to bag`}
            >
              <ShoppingBag className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={actionButton}
              aria-label={`Quick view ${item.name}`}
              onClick={() => onQuickView(item.id)}
            >
              <Eye className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={cn(
                actionButton,
                selectedForCompare && actionButtonActive,
              )}
              aria-label={
                selectedForCompare
                  ? `Remove ${item.name} from comparison`
                  : `Compare ${item.name}`
              }
              aria-pressed={selectedForCompare}
              disabled={!selectedForCompare && compareDisabled}
              onClick={() => onToggleCompare(item.id)}
            >
              <GitCompareArrows
                className="h-4 w-4 stroke-[1.25]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className={productInfo}>
          <h3 id={`wishlist-card-${item.id}`} className={productName}>
            {item.name}
          </h3>
          <p className={productMeta}>
            <span>{item.collection}</span>
            <span className={productMetaDot} aria-hidden="true" />
            <span>{item.color}</span>
          </p>
          <p className={productPrice}>{item.priceLabel}</p>
        </div>
      </div>
    </article>
  );
}
