"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CollectionExperience = dynamic(
  () =>
    import("@/components/Collection/CollectionExperience").then(
      (mod) => mod.CollectionExperience,
    ),
  { ssr: true },
);

export function CollectionExperienceLazy() {
  return (
    <Suspense fallback={null}>
      <CollectionExperience />
    </Suspense>
  );
}
