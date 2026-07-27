"use client";

import dynamic from "next/dynamic";

const PaymentsExperience = dynamic(
  () =>
    import("./PaymentsExperience").then((mod) => mod.PaymentsExperience),
  { ssr: true },
);

export function PaymentsExperienceLazy() {
  return <PaymentsExperience />;
}
