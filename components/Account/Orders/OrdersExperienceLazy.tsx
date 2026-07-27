"use client";

import dynamic from "next/dynamic";

const OrdersExperience = dynamic(
  () =>
    import("./OrdersExperience").then((mod) => mod.OrdersExperience),
  { ssr: true },
);

export function OrdersExperienceLazy() {
  return <OrdersExperience />;
}
