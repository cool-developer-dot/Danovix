"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useSearchParams } from "next/navigation";

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import {
  buildEditorialGallery,
  COLLECTION_PRODUCTS,
  DEFAULT_COLLECTION_FILTERS,
  filterAndSortCollection,
  type ActiveCollectionFilters,
  type CollectionCategoryId,
  type CollectionSortId,
} from "@/lib/collection/constants";

import { CollectionCategories } from "./CollectionCategories";
import { useCollectionAnimations } from "./CollectionAnimations";
import { CollectionFilters } from "./CollectionFilters";
import { CollectionHero } from "./CollectionHero";
import { CollectionSearch } from "./CollectionSearch";
import { ContinueExploring } from "./ContinueExploring";
import { EditorialGallery } from "./EditorialGallery";
import { EditorialStoryBreak } from "./EditorialStoryBreak";
import { FeaturedCollections } from "./FeaturedCollections";
import { StyleConcierge } from "./StyleConcierge";
import { collectionMain, collectionPage } from "./collection.styles";

const VALID_CATEGORIES = new Set<CollectionCategoryId>([
  "all",
  "tote",
  "crossbody",
  "shoulder",
  "travel",
  "evening",
  "new",
]);

function parseCategory(value: string | null): CollectionCategoryId {
  if (value && VALID_CATEGORIES.has(value as CollectionCategoryId)) {
    return value as CollectionCategoryId;
  }
  return "all";
}

export function CollectionExperience() {
  const searchParams = useSearchParams();
  const rootRef = useRef<HTMLDivElement>(null);
  const quickViewTimer = useRef<number | null>(null);

  const [category, setCategory] = useState<CollectionCategoryId>(() =>
    parseCategory(searchParams.get("category")),
  );
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<ActiveCollectionFilters>(() => {
    const color = searchParams.get("color");
    if (color) {
      return { ...DEFAULT_COLLECTION_FILTERS, color };
    }
    return DEFAULT_COLLECTION_FILTERS;
  });
  const [sort, setSort] = useState<CollectionSortId>("featured");
  const [reservedIds, setReservedIds] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [quickViewId, setQuickViewId] = useState<string | null>(null);

  const visibleProducts = useMemo(
    () =>
      filterAndSortCollection(
        COLLECTION_PRODUCTS,
        category,
        query,
        filters,
        sort,
      ),
    [category, query, filters, sort],
  );

  const galleryBlocks = useMemo(
    () => buildEditorialGallery(visibleProducts),
    [visibleProducts],
  );

  useCollectionAnimations(rootRef);

  useEffect(() => {
    const nextCategory = parseCategory(searchParams.get("category"));
    const nextColor = searchParams.get("color");
    setCategory(nextCategory);
    if (nextColor) {
      setFilters((current) => ({ ...current, color: nextColor }));
    }
  }, [searchParams]);

  useEffect(() => {
    return () => {
      if (quickViewTimer.current != null) {
        window.clearTimeout(quickViewTimer.current);
      }
    };
  }, []);

  const toggleId = useCallback(
    (setter: Dispatch<SetStateAction<string[]>>, id: string) => {
      setter((current) =>
        current.includes(id)
          ? current.filter((item) => item !== id)
          : [...current, id],
      );
    },
    [],
  );

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

  const handleReset = useCallback(() => {
    setCategory("all");
    setQuery("");
    setFilters(DEFAULT_COLLECTION_FILTERS);
    setSort("featured");
  }, []);

  const scrollToSearch = useCallback(() => {
    const input = document.querySelector<HTMLInputElement>(
      'input[type="search"]',
    );
    input?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleExplore = useCallback((next: CollectionCategoryId) => {
    setCategory(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div ref={rootRef} className={collectionPage}>
      <HeroNavbar />

      <main id="main-content" className={collectionMain}>
        <CollectionHero />

        <CollectionCategories active={category} onChange={setCategory} />

        <CollectionSearch
          query={query}
          onQueryChange={setQuery}
          onAskAi={scrollToSearch}
        />

        <CollectionFilters
          filters={filters}
          sort={sort}
          onFiltersChange={setFilters}
          onSortChange={setSort}
        />

        <EditorialGallery
          blocks={galleryBlocks}
          reservedIds={reservedIds}
          savedIds={savedIds}
          onQuickView={handleQuickView}
          onReserve={(id) => toggleId(setReservedIds, id)}
          onSave={(id) => toggleId(setSavedIds, id)}
          onReset={handleReset}
        />

        <EditorialStoryBreak />

        <FeaturedCollections onExplore={handleExplore} />

        <StyleConcierge onAsk={scrollToSearch} />

        <ContinueExploring onExplore={handleExplore} />

        {quickViewId ? (
          <p className="sr-only" role="status" aria-live="polite">
            Quick view opened for{" "}
            {COLLECTION_PRODUCTS.find((item) => item.id === quickViewId)
              ?.name ?? "piece"}
          </p>
        ) : null}

        <FooterDeferred />
      </main>
    </div>
  );
}
