"use client";

import dynamic from "next/dynamic";

const SearchExperience = dynamic(
  () =>
    import("@/components/Search/SearchExperience").then(
      (mod) => mod.SearchExperience,
    ),
  { ssr: true },
);

export function SearchExperienceLazy() {
  return <SearchExperience />;
}
