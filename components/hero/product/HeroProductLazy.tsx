"use client";

import dynamic from "next/dynamic";

export const HeroProductLazy = dynamic(
  () =>
    import("@/components/hero/product/HeroProduct").then((mod) => mod.HeroProduct),
  { ssr: false },
);
