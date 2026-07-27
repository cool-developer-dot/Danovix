"use client";

import dynamic from "next/dynamic";

const DiscoveriesExperience = dynamic(
  () =>
    import("./DiscoveriesExperience").then(
      (mod) => mod.DiscoveriesExperience,
    ),
  { ssr: true },
);

export function DiscoveriesExperienceLazy() {
  return <DiscoveriesExperience />;
}
