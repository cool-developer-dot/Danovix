"use client";

import dynamic from "next/dynamic";

import { isoIs } from "@/lib/diagnostics/iso";

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
  const disableWebgl = isoIs("webgl") || isoIs("three");
  const disableController =
    disableWebgl || isoIs("all-gsap") || isoIs("journey-scrub");

  useProductJourneyController(animate && !disableController);

  if (disableWebgl) return null;
  return <ProductJourneyCanvas active={animate} />;
}
