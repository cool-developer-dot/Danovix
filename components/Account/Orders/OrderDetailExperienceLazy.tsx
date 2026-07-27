"use client";

import dynamic from "next/dynamic";

const OrderDetailExperience = dynamic(
  () =>
    import("./OrderDetailExperience").then(
      (mod) => mod.OrderDetailExperience,
    ),
  { ssr: true },
);

type OrderDetailExperienceLazyProps = {
  orderId: string;
};

export function OrderDetailExperienceLazy({
  orderId,
}: OrderDetailExperienceLazyProps) {
  return <OrderDetailExperience orderId={orderId} />;
}
