"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";

import {
  buildCompareRecommendation,
  WISHLIST_COMPARE,
  type WishlistItem,
} from "@/lib/wishlist/constants";

import {
  drawerAiCard,
  drawerAiCta,
  drawerBackdrop,
  drawerBody,
  drawerCard,
  drawerClose,
  drawerGrid,
  drawerHeader,
  drawerImage,
  drawerName,
  drawerPanel,
  drawerSpecLabel,
  drawerSpecList,
  drawerSpecRow,
  drawerSpecValue,
  drawerTitle,
  wishlistEyebrow,
} from "./wishlist.styles";

type CompareDrawerProps = {
  open: boolean;
  items: readonly WishlistItem[];
  onClose: () => void;
};

const SPECS: readonly {
  key: keyof Pick<
    WishlistItem,
    | "materials"
    | "dimensions"
    | "weight"
    | "capacity"
    | "hardware"
    | "leather"
  >;
  label: string;
}[] = [
  { key: "materials", label: "Materials" },
  { key: "dimensions", label: "Dimensions" },
  { key: "weight", label: "Weight" },
  { key: "capacity", label: "Interior capacity" },
  { key: "hardware", label: "Hardware finish" },
  { key: "leather", label: "Leather type" },
];

export function CompareDrawer({ open, items, onClose }: CompareDrawerProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const recommendation = buildCompareRecommendation(items);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-wishlist="compare-drawer"
    >
      <button
        type="button"
        className={drawerBackdrop}
        aria-label="Close comparison"
        onClick={onClose}
      />

      <div className={drawerPanel}>
        <div className={drawerHeader}>
          <div>
            <p className={wishlistEyebrow}>{WISHLIST_COMPARE.eyebrow}</p>
            <h2 id={titleId} className={`${drawerTitle} mt-3`}>
              {WISHLIST_COMPARE.drawerTitle}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className={drawerClose}
            aria-label="Close comparison drawer"
            onClick={onClose}
          >
            <X className="h-[18px] w-[18px] stroke-[1.25]" aria-hidden="true" />
          </button>
        </div>

        <div className={drawerBody}>
          <div className={drawerGrid}>
            {items.map((item) => (
              <article key={item.id} className={drawerCard}>
                <div className={drawerImage}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 80vw, 220px"
                    className="object-cover"
                  />
                </div>
                <h3 className={drawerName}>{item.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[rgb(198_161_91/0.85)]">
                  {item.collection} · {item.color}
                </p>
                <p className="mt-2 text-[13px] text-[rgb(248_247_244/0.78)]">
                  {item.priceLabel}
                </p>

                <dl className={drawerSpecList}>
                  {SPECS.map((spec) => (
                    <div key={spec.key} className={drawerSpecRow}>
                      <dt className={drawerSpecLabel}>{spec.label}</dt>
                      <dd className={drawerSpecValue}>{item[spec.key]}</dd>
                    </div>
                  ))}
                  <div className={drawerSpecRow}>
                    <dt className={drawerSpecLabel}>Available colors</dt>
                    <dd className={drawerSpecValue}>
                      {item.colors.join(" · ")}
                    </dd>
                  </div>
                  <div className={drawerSpecRow}>
                    <dt className={drawerSpecLabel}>Recommended occasions</dt>
                    <dd className={drawerSpecValue}>
                      {item.occasions.join(" · ")}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <aside className={drawerAiCard} aria-label="AI recommendation">
            <p className={wishlistEyebrow}>{WISHLIST_COMPARE.aiEyebrow}</p>
            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.85] text-[rgb(248_247_244/0.72)]">
              {recommendation}
            </p>
            <Link href="/collection" className={drawerAiCta}>
              {WISHLIST_COMPARE.aiCta}
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
