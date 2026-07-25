"use client";

import Image from "next/image";
import Link from "next/link";

import {
  PRODUCT_ACTIONS,
  formatCurrency,
  type ReservedItem,
} from "@/lib/reserved/constants";

import { QuantitySelector } from "./QuantitySelector";
import {
  productActionLink,
  productActions,
  productBody,
  productCard,
  productChip,
  productChips,
  productCollection,
  productImage,
  productImageWrap,
  productMaterial,
  productName,
  productOverlay,
  productPrice,
  productQtyRow,
  productRemove,
  productSweep,
} from "./reserved.styles";

type ReservedProductCardProps = {
  item: ReservedItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onMoveToPrivate: (id: string) => void;
  priority?: boolean;
};

export function ReservedProductCard({
  item,
  onQuantityChange,
  onRemove,
  onMoveToPrivate,
  priority = false,
}: ReservedProductCardProps) {
  return (
    <article
      data-reserved="card"
      className={productCard}
      aria-labelledby={`reserved-piece-${item.id}`}
    >
      <div className={productImageWrap}>
        <Image
          data-reserved="card-image"
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 1023px) 86vw, 48vw"
          className={productImage}
          priority={priority}
        />
        <div className={productOverlay} aria-hidden="true" />
        <div
          data-reserved="card-sweep"
          className={productSweep}
          aria-hidden="true"
        />
      </div>

      <div className={productBody}>
        <h3 id={`reserved-piece-${item.id}`} className={productName}>
          {item.name}
        </h3>
        <p className={productMaterial}>{item.material}</p>
        <p className={productCollection}>{item.collection}</p>
        <p className={productPrice}>{formatCurrency(item.price)}</p>

        <div className={productQtyRow}>
          <QuantitySelector
            value={item.quantity}
            label={item.name}
            onChange={(next) => onQuantityChange(item.id, next)}
          />
        </div>

        <div className={productActions}>
          <button
            type="button"
            className={productActionLink}
            onClick={() => onMoveToPrivate(item.id)}
          >
            {PRODUCT_ACTIONS.privateCollection}
          </button>
          <Link
            href="/collection"
            className={productActionLink}
          >
            {PRODUCT_ACTIONS.viewDetails}
          </Link>
          <button
            type="button"
            className={productRemove}
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from reserved collection`}
          >
            {PRODUCT_ACTIONS.remove}
          </button>
        </div>

        <ul className={productChips} aria-label="Craft details">
          {item.chips.map((chip) => (
            <li key={chip} className={productChip}>
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
