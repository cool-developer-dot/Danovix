"use client";

import dynamic from "next/dynamic";

const StylistExperience = dynamic(
  () =>
    import("./StylistExperience").then((mod) => mod.StylistExperience),
  { ssr: true },
);

export function StylistExperienceLazy() {
  return <StylistExperience />;
}
