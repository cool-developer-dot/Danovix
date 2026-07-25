"use client";

import { cn } from "@/lib/cn";
import {
  COLLECTION_CATEGORIES,
  type CollectionCategoryId,
} from "@/lib/collection/constants";

import {
  categoriesRoot,
  categoriesTrack,
  categoryChip,
  categoryChipActive,
  categoryChipIdle,
} from "./collection.styles";

type CollectionCategoriesProps = {
  active: CollectionCategoryId;
  onChange: (id: CollectionCategoryId) => void;
};

export function CollectionCategories({
  active,
  onChange,
}: CollectionCategoriesProps) {
  return (
    <nav
      data-collection="categories"
      aria-label="Collection categories"
      className={categoriesRoot}
    >
      <div className={categoriesTrack} role="tablist">
        {COLLECTION_CATEGORIES.map((category) => {
          const isActive = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              data-collection="category-chip"
              aria-selected={isActive}
              className={cn(
                categoryChip,
                isActive ? categoryChipActive : categoryChipIdle,
              )}
              onClick={() => onChange(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
