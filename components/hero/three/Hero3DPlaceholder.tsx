"use client";

import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/cn";
import { HERO_3D_ENABLED } from "@/lib/hero-3d";

import { usePageVisible, useVisible } from "./use-visible-canvas";

const Hero3DCanvas = dynamic(
  () => import("./Hero3DCanvas").then((mod) => mod.Hero3DCanvas),
  { ssr: false },
);

type Hero3DPlaceholderProps = {
  className?: string;
};

export function Hero3DPlaceholder({ className }: Hero3DPlaceholderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(containerRef);
  const isPageVisible = usePageVisible();
  const shouldRender = HERO_3D_ENABLED && isVisible && isPageVisible;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px]",
        "aspect-[4/5]",
        className,
      )}
      aria-hidden="true"
    >
      {shouldRender ? (
        <Suspense fallback={null}>
          <Hero3DCanvas active={shouldRender} />
        </Suspense>
      ) : null}
    </div>
  );
}
