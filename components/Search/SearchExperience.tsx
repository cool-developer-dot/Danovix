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

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import {
  DEFAULT_FILTERS,
  EDITORIAL_COLLECTIONS,
  filterAndSortProducts,
  isNaturalLanguageQuery,
  SEARCH_PRODUCTS,
  type ActiveFilters,
  type SearchSortId,
  type SearchSuggestion,
} from "@/lib/search/constants";

import { AiEditorialResponse } from "./AiEditorialResponse";
import { AIShoppingConcierge } from "./AIShoppingConcierge";
import { CompleteYourCollection } from "./CompleteYourCollection";
import { ContinueExploring } from "./ContinueExploring";
import { EditorialCollections } from "./EditorialCollections";
import { LuxurySearchBar } from "./LuxurySearchBar";
import { LuxurySearchResults } from "./LuxurySearchResults";
import { useSearchAnimations } from "./SearchAnimations";
import { SearchHero } from "./SearchHero";
import { SearchSkeleton } from "./SearchSkeleton";
import { SmartFilters } from "./SmartFilters";
import { TrendingDiscoveries } from "./TrendingDiscoveries";
import { searchMain, searchPage } from "./search.styles";

export function SearchExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [committedQuery, setCommittedQuery] = useState("");
  const [filters, setFilters] = useState<ActiveFilters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SearchSortId>("relevant");
  const [loading, setLoading] = useState(false);
  const [hasCommitted, setHasCommitted] = useState(false);
  const [reservedIds, setReservedIds] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [quickViewId, setQuickViewId] = useState<string | null>(null);
  const loadTimer = useRef<number | null>(null);
  const quickViewTimer = useRef<number | null>(null);

  useSearchAnimations(rootRef);

  useEffect(() => {
    return () => {
      if (loadTimer.current) window.clearTimeout(loadTimer.current);
      if (quickViewTimer.current != null) {
        window.clearTimeout(quickViewTimer.current);
      }
    };
  }, []);

  const filtersActive =
    Boolean(filters.collection) ||
    Boolean(filters.color) ||
    Boolean(filters.material) ||
    Boolean(filters.size) ||
    Boolean(filters.price) ||
    filters.new ||
    filters.featured ||
    filters.bestSeller;

  const runDiscovery = useCallback((value: string) => {
    const next = value.trim();
    setCommittedQuery(next);
    setHasCommitted(Boolean(next) || filtersActive);
    setQuery(next);

    if (!next && !filtersActive) {
      setLoading(false);
      setHasCommitted(false);
      return;
    }

    setLoading(true);
    if (loadTimer.current) window.clearTimeout(loadTimer.current);
    loadTimer.current = window.setTimeout(() => {
      setLoading(false);
      setHasCommitted(true);
    }, 720);
  }, [filtersActive]);

  const visibleProducts = useMemo(
    () =>
      filterAndSortProducts(
        SEARCH_PRODUCTS,
        hasCommitted ? committedQuery : "",
        filters,
        sort,
      ),
    [committedQuery, filters, hasCommitted, sort],
  );

  const showAiEditorial =
    hasCommitted &&
    !loading &&
    isNaturalLanguageQuery(committedQuery) &&
    visibleProducts.length > 0;

  const showTrending = !hasCommitted;

  const handleSuggestionSelect = useCallback(
    (suggestion: SearchSuggestion) => {
      runDiscovery(suggestion.query);
    },
    [runDiscovery],
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

  const toggleId = useCallback(
    (
      setter: Dispatch<SetStateAction<string[]>>,
      id: string,
      max = Infinity,
    ) => {
      setter((current) => {
        if (current.includes(id)) return current.filter((item) => item !== id);
        if (current.length >= max) return current;
        return [...current, id];
      });
    },
    [],
  );

  const handleFiltersChange = useCallback((next: ActiveFilters) => {
    setFilters(next);
    setHasCommitted(true);
    setLoading(true);
    if (loadTimer.current) window.clearTimeout(loadTimer.current);
    loadTimer.current = window.setTimeout(() => setLoading(false), 480);
  }, []);

  const focusSearch = useCallback(() => {
    const input = document.querySelector<HTMLInputElement>(
      'input[type="search"]',
    );
    input?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div ref={rootRef} className={searchPage}>
      <HeroNavbar />

      <main id="main-content" className={searchMain}>
        <SearchHero />

        <LuxurySearchBar
          query={query}
          onQueryChange={setQuery}
          onSubmit={runDiscovery}
          onSuggestionSelect={handleSuggestionSelect}
          onClear={() => {
            setCommittedQuery("");
            setHasCommitted(false);
            setFilters(DEFAULT_FILTERS);
            setLoading(false);
          }}
        />

        {showTrending ? (
          <TrendingDiscoveries onSelect={runDiscovery} />
        ) : null}

        {showTrending ? (
          <AIShoppingConcierge onAsk={focusSearch} />
        ) : null}

        {!showTrending ? (
          <SmartFilters
            filters={filters}
            sort={sort}
            onFiltersChange={handleFiltersChange}
            onSortChange={setSort}
          />
        ) : null}

        {showAiEditorial ? (
          <AiEditorialResponse query={committedQuery} />
        ) : null}

        {loading ? <SearchSkeleton /> : null}

        {!loading && hasCommitted ? (
          <>
            <LuxurySearchResults
              products={visibleProducts}
              query={committedQuery}
              reservedIds={reservedIds}
              savedIds={savedIds}
              compareIds={compareIds}
              onQuickView={handleQuickView}
              onReserve={(id) => toggleId(setReservedIds, id)}
              onSave={(id) => toggleId(setSavedIds, id)}
              onCompare={(id) => toggleId(setCompareIds, id, 4)}
            />

            {visibleProducts.length > 0 ? (
              <EditorialCollections
                collections={EDITORIAL_COLLECTIONS.slice(2, 4)}
                onExplore={runDiscovery}
              />
            ) : null}

            <AIShoppingConcierge onAsk={focusSearch} />
          </>
        ) : null}

        {!loading && !hasCommitted ? (
          <EditorialCollections
            collections={EDITORIAL_COLLECTIONS.slice(0, 2)}
            onExplore={runDiscovery}
          />
        ) : null}

        {quickViewId ? (
          <p className="sr-only" role="status" aria-live="polite">
            Quick view opened for{" "}
            {SEARCH_PRODUCTS.find((item) => item.id === quickViewId)?.name ??
              "piece"}
          </p>
        ) : null}

        <ContinueExploring />
        <CompleteYourCollection />
        <FooterDeferred />
      </main>
    </div>
  );
}
