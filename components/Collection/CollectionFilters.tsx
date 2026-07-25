"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import {
  COLLECTION_FILTERS,
  COLLECTION_SORTS,
  type ActiveCollectionFilters,
  type CollectionFilterGroupId,
  type CollectionSortId,
} from "@/lib/collection/constants";

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
  mobileSheetScrim,
  sortButton,
  sortMenu,
  sortOption,
  sortOptionActive,
  sortWrap,
} from "./collection.styles";

type CollectionFiltersProps = {
  filters: ActiveCollectionFilters;
  sort: CollectionSortId;
  onFiltersChange: (filters: ActiveCollectionFilters) => void;
  onSortChange: (sort: CollectionSortId) => void;
};

export function CollectionFilters({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
}: CollectionFiltersProps) {
  const [openFilter, setOpenFilter] = useState<CollectionFilterGroupId | null>(
    null,
  );
  const [sortOpen, setSortOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const sortListId = useId();

  const activeSort =
    COLLECTION_SORTS.find((option) => option.id === sort)?.label ?? "Sort";

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

  const isFilterActive = (id: CollectionFilterGroupId) =>
    Boolean(filters[id]);

  const setFilterValue = (
    id: CollectionFilterGroupId,
    value: string | null,
  ) => {
    onFiltersChange({ ...filters, [id]: value });
    setOpenFilter(null);
  };

  const sheetOpen = Boolean(openFilter);

  return (
    <div data-collection="filters" className={filtersRoot}>
      {sheetOpen ? (
        <button
          type="button"
          className={mobileSheetScrim}
          aria-label="Close filters"
          onClick={() => setOpenFilter(null)}
        />
      ) : null}

      <div ref={rootRef} className={filtersInner}>
        <div className={filtersChips}>
          {COLLECTION_FILTERS.map((group) => {
            const active = isFilterActive(group.id);
            const selected = filters[group.id];
            const label = selected
              ? (group.options.find((option) => option.id === selected)?.label ??
                group.label)
              : group.label;
            const isOpen = openFilter === group.id;

            return (
              <div key={group.id} className="relative shrink-0">
                <button
                  type="button"
                  className={cn(
                    filterChip,
                    active ? filterChipActive : filterChipIdle,
                  )}
                  aria-haspopup="listbox"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenFilter((current) =>
                      current === group.id ? null : group.id,
                    )
                  }
                >
                  {label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 stroke-[1.5] transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {isOpen ? (
                  <div
                    className={filterDropdown}
                    role="listbox"
                    aria-label={group.label}
                  >
                    <button
                      type="button"
                      role="option"
                      aria-selected={!selected}
                      className={cn(
                        filterOption,
                        !selected && filterOptionActive,
                      )}
                      onClick={() => setFilterValue(group.id, null)}
                    >
                      Any {group.label}
                    </button>
                    {group.options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        role="option"
                        aria-selected={selected === option.id}
                        className={cn(
                          filterOption,
                          selected === option.id && filterOptionActive,
                        )}
                        onClick={() => setFilterValue(group.id, option.id)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className={sortWrap}>
          <button
            type="button"
            className={sortButton}
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            aria-controls={sortListId}
            onClick={() => {
              setOpenFilter(null);
              setSortOpen((current) => !current);
            }}
          >
            <span>Sort · {activeSort}</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 stroke-[1.5] transition-transform duration-300",
                sortOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>

          {sortOpen ? (
            <div id={sortListId} className={sortMenu} role="listbox">
              {COLLECTION_SORTS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="option"
                  aria-selected={sort === option.id}
                  className={cn(
                    sortOption,
                    sort === option.id && sortOptionActive,
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
