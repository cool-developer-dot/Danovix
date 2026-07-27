"use client";

import dynamic from "next/dynamic";

const CompareExperience = dynamic(
  () =>
    import("./CompareExperience").then((mod) => mod.CompareExperience),
  { ssr: true },
);

export function CompareExperienceLazy() {
  return <CompareExperience />;
}
