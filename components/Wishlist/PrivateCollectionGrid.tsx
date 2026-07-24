import Link from "next/link";
import { Sparkles } from "lucide-react";

import { WISHLIST_EMPTY, type WishlistItem } from "@/lib/wishlist/constants";

import { WishlistCard } from "./WishlistCard";
import {
  emptyCta,
  emptyDescription,
  emptyHeading,
  emptyIllustration,
  emptyRoot,
  gridMasonry,
  gridRoot,
} from "./wishlist.styles";

type PrivateCollectionGridProps = {
  items: readonly WishlistItem[];
  compareIds: readonly string[];
  onRemove: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onQuickView: (id: string) => void;
};

export function PrivateCollectionGrid({
  items,
  compareIds,
  onRemove,
  onToggleCompare,
  onQuickView,
}: PrivateCollectionGridProps) {
  if (items.length === 0) {
    return (
      <section
        aria-labelledby="wishlist-empty-heading"
        className={gridRoot}
      >
        <div data-wishlist="empty" className={emptyRoot}>
          <div className={emptyIllustration} aria-hidden="true">
            <Sparkles className="h-10 w-10 stroke-[1.1] text-[rgb(214_196_158)]" />
          </div>
          <h2 id="wishlist-empty-heading" className={emptyHeading}>
            {WISHLIST_EMPTY.heading}
          </h2>
          <p className={emptyDescription}>{WISHLIST_EMPTY.description}</p>
          <Link href={WISHLIST_EMPTY.ctaHref} className={emptyCta}>
            {WISHLIST_EMPTY.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Private collection"
      className={gridRoot}
    >
      <div className={gridMasonry}>
        {items.map((item) => (
          <WishlistCard
            key={item.id}
            item={item}
            selectedForCompare={compareIds.includes(item.id)}
            compareDisabled={compareIds.length >= 4}
            onRemove={onRemove}
            onToggleCompare={onToggleCompare}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
}
