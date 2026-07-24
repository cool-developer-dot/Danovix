"use client";

import dynamic from "next/dynamic";

export const Hero3DPlaceholderLazy = dynamic(
  () =>
    import("@/components/hero/three/Hero3DPlaceholder").then(
      (mod) => mod.Hero3DPlaceholder,
    ),
  { ssr: false },
);
