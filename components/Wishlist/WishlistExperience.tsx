"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import {
  filterAndSortItems,
  WISHLIST_ITEMS,
  type WishlistFilterId,
  type WishlistItem,
  type WishlistSortId,
} from "@/lib/wishlist/constants";

import { AIShoppingConcierge } from "./AIShoppingConcierge";
import { CollectionIntro } from "./CollectionIntro";
import { CollectionStats } from "./CollectionStats";
import { CompareDrawer } from "./CompareDrawer";
import { CompareMyFavorites } from "./CompareMyFavorites";
import { CuratedRecommendations } from "./CuratedRecommendations";
import { EditorialFilters } from "./EditorialFilters";
import { EditorialQuote } from "./EditorialQuote";
import { PrivateCollectionGrid } from "./PrivateCollectionGrid";
import { useWishlistAnimations } from "./WishlistAnimations";
import { WishlistHero } from "./WishlistHero";
import { wishlistMain, wishlistPage } from "./wishlist.styles";

export function WishlistExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const quickViewTimer = useRef<number | null>(null);
  const [items, setItems] = useState<WishlistItem[]>(() => [...WISHLIST_ITEMS]);
  const [filter, setFilter] = useState<WishlistFilterId>("all");
  const [sort, setSort] = useState<WishlistSortId>("recently-saved");
  const [query, setQuery] = useState("");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quickViewId, setQuickViewId] = useState<string | null>(null);

  useWishlistAnimations(rootRef);

  useEffect(() => {
    return () => {
      if (quickViewTimer.current != null) {
        window.clearTimeout(quickViewTimer.current);
      }
    };
  }, []);

  const visibleItems = useMemo(
    () => filterAndSortItems(items, filter, sort, query),
    [items, filter, sort, query],
  );

  const compareItems = useMemo(
    () => items.filter((item) => compareIds.includes(item.id)),
    [items, compareIds],
  );

  const handleRemove = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
    setCompareIds((current) => current.filter((itemId) => itemId !== id));
  }, []);

  const handleToggleCompare = useCallback((id: string) => {
    setCompareIds((current) => {
      if (current.includes(id)) {
        return current.filter((itemId) => itemId !== id);
      }
      if (current.length >= 4) return current;
      return [...current, id];
    });
  }, []);

  const handleQuickView = useCallback((id: string) => {
    setQuickViewId(id);
    if (quickViewTimer.current != null) {
      window.clearTimeout(quickViewTimer.current);
    }
    quickViewTimer.current = window.setTimeout(() => {
      quickViewTimer.current = null;
      setQuickViewId(null);
    }, 2400);
  }, []);

  return (
    <div ref={rootRef} className={wishlistPage}>
      <HeroNavbar />

      <main id="main-content" className={wishlistMain}>
        <WishlistHero count={items.length} />

        {items.length > 0 ? (
          <>
            <CollectionIntro />
            <CollectionStats items={items} />
            <EditorialFilters
              filter={filter}
              sort={sort}
              query={query}
              onFilterChange={setFilter}
              onSortChange={setSort}
              onQueryChange={setQuery}
            />
          </>
        ) : null}

        <PrivateCollectionGrid
          items={visibleItems}
          compareIds={compareIds}
          onRemove={handleRemove}
          onToggleCompare={handleToggleCompare}
          onQuickView={handleQuickView}
        />

        {quickViewId ? (
          <p className="sr-only" role="status" aria-live="polite">
            Quick view opened for{" "}
            {items.find((item) => item.id === quickViewId)?.name ?? "piece"}
          </p>
        ) : null}

        {items.length > 0 ? (
          <>
            <EditorialQuote />
            <CompareMyFavorites
              selectedCount={compareIds.length}
              onOpen={() => setDrawerOpen(true)}
            />
          </>
        ) : null}

        <AIShoppingConcierge />
        <CuratedRecommendations />
        <FooterDeferred />
      </main>

      <CompareDrawer
        open={drawerOpen && compareItems.length >= 2}
        items={compareItems}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
