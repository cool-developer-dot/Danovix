import { cn } from "@/lib/cn";

import {
  skeletonCard,
  skeletonCardWide,
  skeletonRoot,
  skeletonShimmer,
} from "./search.styles";

export function SearchSkeleton() {
  return (
    <div
      data-search="skeleton"
      className={skeletonRoot}
      aria-busy="true"
      aria-label="Discovering pieces"
      role="status"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={cn(skeletonCard, index === 0 && skeletonCardWide)}
        >
          <div
            className={cn(
              skeletonShimmer,
              index === 0 ? "aspect-[4/3]" : index % 2 === 0 ? "aspect-[3/4]" : "aspect-square",
            )}
          />
          <div className="space-y-3 px-5 py-5">
            <div className={cn(skeletonShimmer, "h-5 w-[60%] rounded-full")} />
            <div className={cn(skeletonShimmer, "h-3 w-[40%] rounded-full")} />
            <div className={cn(skeletonShimmer, "h-3 w-[25%] rounded-full")} />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading curated discoveries…</span>
    </div>
  );
}
