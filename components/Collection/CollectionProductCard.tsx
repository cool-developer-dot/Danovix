"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, Heart, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/cn";
import type {
  CollectionCardLayout,
  CollectionProduct,
} from "@/lib/collection/constants";

import {
  actionButton,
  actionButtonActive,
  materialChip,
  productActions,
  productCard,
  productImage,
  productImageFeature,
  productImagePortrait,
  productImageStandard,
  productImageWide,
  productImageWrap,
  productInfo,
  productMeta,
  productName,
  productOverlay,
  productPrice,
  productSubtitle,
  productSweep,
  reserveCta,
} from "./collection.styles";

type CollectionProductCardProps = {
  product: CollectionProduct;
  layout: CollectionCardLayout;
  priority?: boolean;
  reserved: boolean;
  saved: boolean;
  onQuickView: (id: string) => void;
  onReserve: (id: string) => void;
  onSave: (id: string) => void;
};

function imageAspect(layout: CollectionCardLayout) {
  switch (layout) {
    case "feature":
      return productImageFeature;
    case "portrait":
      return productImagePortrait;
    case "wide":
      return productImageWide;
    default:
      return productImageStandard;
  }
}

export function CollectionProductCard({
  product,
  layout,
  priority = false,
  reserved,
  saved,
  onQuickView,
  onReserve,
  onSave,
}: CollectionProductCardProps) {
  const router = useRouter();
  const href = `/product/${product.id}`;

  return (
    <article
      data-collection="card"
      data-layout={layout}
      className="min-w-0 h-full"
      aria-labelledby={`collection-card-${product.id}`}
    >
      <div className={productCard}>
        <div className={cn(productImageWrap, imageAspect(layout))}>
          <Link href={href} className="absolute inset-0 z-[1]" tabIndex={-1}>
            <span className="sr-only">View {product.name}</span>
          </Link>
          <Image
            data-collection="card-image"
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 46vw, (max-width: 1024px) 46vw, 42vw"
            className={productImage}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
          <div className={productOverlay} aria-hidden="true" />
          <div
            data-collection="card-sweep"
            className={productSweep}
            aria-hidden="true"
          />

          <div className={cn(productActions, "z-[5]")}>
            <button
              type="button"
              className={actionButton}
              aria-label={`View details for ${product.name}`}
              onClick={() => {
                onQuickView(product.id);
                router.push(href);
              }}
            >
              <Eye className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={cn(actionButton, reserved && actionButtonActive)}
              aria-label={
                reserved
                  ? `Remove ${product.name} from reserved collection`
                  : `Reserve ${product.name}`
              }
              aria-pressed={reserved}
              onClick={() => onReserve(product.id)}
            >
              <ShoppingBag className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={cn(actionButton, saved && actionButtonActive)}
              aria-label={
                saved
                  ? `Remove ${product.name} from favourites`
                  : `Save ${product.name} to favourites`
              }
              aria-pressed={saved}
              onClick={() => onSave(product.id)}
            >
              <Heart className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={productInfo}>
          <h3 id={`collection-card-${product.id}`} className={productName}>
            <Link
              href={href}
              className="transition-colors duration-300 hover:text-danovix-accent focus-visible:outline-none focus-visible:text-danovix-accent"
            >
              {product.name}
            </Link>
          </h3>
          <p className={productSubtitle}>{product.subtitle}</p>
          <div className={productMeta}>
            <span className={materialChip}>{product.material}</span>
          </div>
          <p className={productPrice}>{product.priceLabel}</p>
          <div className="mt-4 flex flex-col items-start gap-2">
            <Link href={href} className={reserveCta}>
              Discover Piece
              <span aria-hidden="true">→</span>
            </Link>
            <button
              type="button"
              className={cn(reserveCta, "mt-0 opacity-70")}
              onClick={() => onReserve(product.id)}
            >
              {reserved ? "Reserved" : "Reserve Your Piece"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
