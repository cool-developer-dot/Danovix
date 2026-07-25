"use client";

import dynamic from "next/dynamic";

import type { ProductDetail } from "@/lib/product/constants";

const ProductExperience = dynamic(
  () =>
    import("@/components/Product/ProductExperience").then(
      (mod) => mod.ProductExperience,
    ),
  { ssr: true },
);

type ProductExperienceLazyProps = {
  detail: ProductDetail;
};

export function ProductExperienceLazy({ detail }: ProductExperienceLazyProps) {
  return <ProductExperience detail={detail} />;
}
