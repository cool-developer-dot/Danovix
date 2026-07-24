"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import {
  SEARCH_SORTS,
  SMART_FILTERS,
  type ActiveFilters,
  type SearchFilterGroupId,
  type SearchSortId,
} from "@/lib/search/constants";

import {
  filterChip,
  filterChipActive,
  filterChipIdle,
  filterDropdown,
  filterOption,
  filterOptionActive,
  filtersChips,
  filtersInner,
  filtersRoot,
  sortButton,
  sortMenu,
  sortOption,
  sortOptionActive,
  sortWrap,
} from "./search.styles";

type SmartFiltersProps = {
  filters: ActiveFilters;
  sort: SearchSortId;
  onFiltersChange: (filters: ActiveFilters) => void;
  onSortChange: (sort: SearchSortId) => void;
};

export function SmartFilters({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
}: SmartFiltersProps) {
  const [openFilter, setOpenFilter] = useState<SearchFilterGroupId | null>(null);
  const [sortOpen, setSortOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const sortListId = useId();

  const activeSort =
    SEARCH_SORTS.find((option) => option.id === sort)?.label ?? "Sort";

  useEffect(() => {
    if (!openFilter && !sortOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenFilter(null);
        setSortOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenFilter(null);
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openFilter, sortOpen]);

  const isFilterActive = (id: SearchFilterGroupId) => {
    switch (id) {
      case "new":
        return filters.new;
      case "featured":
        return filters.featured;
      case "best-seller":
        return filters.bestSeller;
      case "collection":
        return Boolean(filters.collection);
      case "color":
        return Boolean(filters.color);
      case "material":
        return Boolean(filters.material);
      case "size":
        return Boolean(filters.size);
      case "price":
        return Boolean(filters.price);
      default:
        return false;
    }
  };

  const activeLabel = (id: SearchFilterGroupId, fallback: string) => {
    const group = SMART_FILTERS.find((item) => item.id === id);
    if (!group?.options) return fallback;

    const value =
      id === "collection"
        ? filters.collection
        : id === "color"
          ? filters.color
          : id === "material"
            ? filters.material
            : id === "size"
              ? filters.size
              : id === "price"
                ? filters.price
                : null;

    if (!value) return fallback;
    return group.options.find((option) => option.id === value)?.label ?? fallback;
  };

  const setOption = (id: SearchFilterGroupId, optionId: string) => {
    const next = { ...filters };
    switch (id) {
      case "collection":
        next.collection = next.collection === optionId ? null : optionId;
        break;
      case "color":
        next.color = next.color === optionId ? null : optionId;
        break;
      case "material":
        next.material = next.material === optionId ? null : optionId;
        break;
      case "size":
        next.size = next.size === optionId ? null : optionId;
        break;
      case "price":
        next.price = next.price === optionId ? null : optionId;
        break;
      default:
        break;
    }
    onFiltersChange(next);
    setOpenFilter(null);
  };

  const toggleFlag = (id: "new" | "featured" | "best-seller") => {
    const next = { ...filters };
    if (id === "new") next.new = !next.new;
    if (id === "featured") next.featured = !next.featured;
    if (id === "best-seller") next.bestSeller = !next.bestSeller;
    onFiltersChange(next);
  };

  return (
    <div data-search="filters" ref={rootRef} className={filtersRoot}>
      <div className={filtersInner}>
        <div
          className={filtersChips}
          role="toolbar"
          aria-label="Discovery filters"
        >
          {SMART_FILTERS.map((filter) => {
            const active = isFilterActive(filter.id);

            if (filter.toggle) {
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  className={cn(
                    filterChip,
                    active ? filterChipActive : filterChipIdle,
                  )}
                  onClick={() =>
                    toggleFlag(filter.id as "new" | "featured" | "best-seller")
                  }
                >
                  {filter.label}
                </button>
              );
            }

            return (
              <div key={filter.id} className="relative shrink-0">
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={openFilter === filter.id}
                  aria-pressed={active}
                  className={cn(
                    filterChip,
                    active ? filterChipActive : filterChipIdle,
                  )}
                  onClick={() =>
                    setOpenFilter((current) =>
                      current === filter.id ? null : filter.id,
                    )
                  }
                >
                  {activeLabel(filter.id, filter.label)}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 stroke-[1.5] transition-transform duration-300",
                      openFilter === filter.id && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {openFilter === filter.id && filter.options ? (
                  <div
                    role="listbox"
                    aria-label={`${filter.label} options`}
                    className={filterDropdown}
                  >
                    {filter.options.map((option) => {
                      const selected =
                        (filter.id === "collection" &&
                          filters.collection === option.id) ||
                        (filter.id === "color" && filters.color === option.id) ||
                        (filter.id === "material" &&
                          filters.material === option.id) ||
                        (filter.id === "size" && filters.size === option.id) ||
                        (filter.id === "price" && filters.price === option.id);

                      return (
                        <button
                          key={option.id}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          className={cn(
                            filterOption,
                            selected && filterOptionActive,
                          )}
                          onClick={() => setOption(filter.id, option.id)}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className={sortWrap}>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            aria-controls={sortListId}
            className={sortButton}
            onClick={() => {
              setSortOpen((open) => !open);
              setOpenFilter(null);
            }}
          >
            <span>{activeSort}</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 stroke-[1.5] transition-transform duration-300",
                sortOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>

          {sortOpen ? (
            <div id={sortListId} role="listbox" className={sortMenu}>
              {SEARCH_SORTS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="option"
                  aria-selected={option.id === sort}
                  className={cn(
                    sortOption,
                    option.id === sort && sortOptionActive,
                  )}
                  onClick={() => {
                    onSortChange(option.id);
                    setSortOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
