"use client";

import dynamic from "next/dynamic";

const BrandMarquee = dynamic(
  () =>
    import("@/components/marquee/BrandMarquee").then((mod) => mod.BrandMarquee),
  { ssr: true },
);

export function BrandMarqueeLazy() {
  return <BrandMarquee />;
}
