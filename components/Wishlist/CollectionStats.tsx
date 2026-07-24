import {
  Bookmark,
  Layers,
  Sparkles,
  WalletCards,
} from "lucide-react";

import {
  formatCollectionValue,
  getNewestAddition,
  getUniqueCollections,
  WISHLIST_STATS,
  type WishlistItem,
} from "@/lib/wishlist/constants";

import {
  statsCard,
  statsCardGlow,
  statsGrid,
  statsIcon,
  statsLabel,
  statsRoot,
  statsValue,
} from "./wishlist.styles";

type CollectionStatsProps = {
  items: readonly WishlistItem[];
};

export function CollectionStats({ items }: CollectionStatsProps) {
  const newest = getNewestAddition(items);
  const collections = getUniqueCollections(items);
  const value = formatCollectionValue(items);

  const cards = [
    {
      id: "saved",
      label: WISHLIST_STATS.saved,
      value: String(items.length),
      icon: Bookmark,
    },
    {
      id: "newest",
      label: WISHLIST_STATS.newest,
      value: newest?.name.replace(/^The\s+/, "") ?? "—",
      icon: Sparkles,
    },
    {
      id: "collections",
      label: WISHLIST_STATS.collections,
      value: String(collections),
      icon: Layers,
    },
    {
      id: "value",
      label: WISHLIST_STATS.value,
      value,
      icon: WalletCards,
    },
  ] as const;

  return (
    <section
      aria-label="Collection overview"
      className={statsRoot}
    >
      <div className={statsGrid}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.id}
              data-wishlist="stat-card"
              className={statsCard}
            >
              <div className={statsCardGlow} aria-hidden="true" />
              <span className={statsIcon} aria-hidden="true">
                <Icon className="h-[18px] w-[18px] stroke-[1.15]" />
              </span>
              <p className={statsLabel}>{card.label}</p>
              <p className={statsValue}>{card.value}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
