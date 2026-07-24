"use client";

import dynamic from "next/dynamic";

import { useProductJourneyController } from "./useProductJourneyController";

const ProductJourneyCanvas = dynamic(
  () =>
    import("./ProductJourneyCanvas").then((mod) => mod.ProductJourneyCanvas),
  { ssr: false },
);

type ProductJourneyProps = {
  animate?: boolean;
};

/**
 * Fixed single-instance handbag journey.
 * Mount once at the page level — never duplicate.
 */
export function ProductJourney({ animate = true }: ProductJourneyProps) {
  useProductJourneyController(animate);

  return <ProductJourneyCanvas active={animate} />;
}
