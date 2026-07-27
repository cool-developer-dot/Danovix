"use client";

import dynamic from "next/dynamic";

const AddressesExperience = dynamic(
  () =>
    import("./AddressesExperience").then((mod) => mod.AddressesExperience),
  { ssr: true },
);

export function AddressesExperienceLazy() {
  return <AddressesExperience />;
}
