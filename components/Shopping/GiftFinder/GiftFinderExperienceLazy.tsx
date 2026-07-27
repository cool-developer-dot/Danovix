"use client";

import dynamic from "next/dynamic";

const GiftFinderExperience = dynamic(
  () =>
    import("./GiftFinderExperience").then((mod) => mod.GiftFinderExperience),
  { ssr: true },
);

export function GiftFinderExperienceLazy() {
  return <GiftFinderExperience />;
}
