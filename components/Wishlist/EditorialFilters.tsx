"use client";

import { ChevronDown, Search } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import {
  WISHLIST_FILTERS,
  WISHLIST_SORTS,
  type WishlistFilterId,
  type WishlistSortId,
} from "@/lib/wishlist/constants";

import {
  filterChip,
  filterChipActive,
  filterChipIdle,
  filtersChips,
  filtersInner,
  filtersRoot,
  filtersTools,
  searchIcon,
  searchInput,
  searchWrap,
  sortButton,
  sortMenu,
  sortOption,
  sortOptionActive,
  sortWrap,
} from "./wishlist.styles";

type EditorialFiltersProps = {
  filter: WishlistFilterId;
  sort: WishlistSortId;
  query: string;
  onFilterChange: (filter: WishlistFilterId) => void;
  onSortChange: (sort: WishlistSortId) => void;
  onQueryChange: (query: string) => void;
};

export function EditorialFilters({
  filter,
  sort,
  query,
  onFilterChange,
  onSortChange,
  onQueryChange,
}: EditorialFiltersProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const activeSort =
    WISHLIST_SORTS.find((option) => option.id === sort)?.label ?? "Sort";

  useEffect(() => {
    if (!sortOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!sortRef.current?.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSortOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [sortOpen]);

  return (
    <div data-wishlist="filters" className={filtersRoot}>
      <div className={filtersInner}>
        <div
          className={filtersChips}
          role="toolbar"
          aria-label="Collection filters"
        >
          {WISHLIST_FILTERS.map((chip) => {
            const active = chip.id === filter;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={active}
                className={cn(
                  filterChip,
                  active ? filterChipActive : filterChipIdle,
                )}
                onClick={() => onFilterChange(chip.id)}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <div className={filtersTools}>
          <label className={searchWrap}>
            <span className="sr-only">Search your collection</span>
            <Search
              className={cn(searchIcon, "h-4 w-4 stroke-[1.25]")}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search pieces"
              className={searchInput}
              autoComplete="off"
            />
          </label>

          <div ref={sortRef} className={sortWrap}>
            <button
              type="button"
              className={sortButton}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              aria-controls={listboxId}
              onClick={() => setSortOpen((open) => !open)}
            >
              {activeSort}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 stroke-[1.5] transition-transform duration-300",
                  sortOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            {sortOpen ? (
              <ul
                id={listboxId}
                role="listbox"
                aria-label="Sort collection"
                className={sortMenu}
              >
                {WISHLIST_SORTS.map((option) => {
                  const selected = option.id === sort;
                  return (
                    <li key={option.id} role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={selected}
                        className={cn(
                          sortOption,
                          selected && sortOptionActive,
                        )}
                        onClick={() => {
                          onSortChange(option.id);
                          setSortOpen(false);
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
