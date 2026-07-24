"use client";

import dynamic from "next/dynamic";

const ReservedExperience = dynamic(
  () =>
    import("@/components/ReservedCollection/ReservedExperience").then(
      (mod) => mod.ReservedExperience,
    ),
  { ssr: true },
);

export function ReservedExperienceLazy() {
  return <ReservedExperience />;
}
