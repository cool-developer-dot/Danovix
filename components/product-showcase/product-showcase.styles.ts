import { cn } from "@/lib/cn";

export const showcaseViewport = cn(
  "product-showcase-viewport relative flex w-full items-center justify-center",
);

export const showcaseStage = cn(
  "product-showcase-stage relative h-full w-full",
  "perspective-[1400px]",
);

export const showcaseTilt = cn(
  "product-showcase-tilt relative flex h-full w-full items-center justify-center",
  "transform-gpu will-change-transform",
);

export const showcaseLayer = cn(
  "product-showcase-layer absolute inset-0 flex items-center justify-center",
  "opacity-0 will-change-[opacity,transform]",
);

export const showcaseImage = cn(
  "product-showcase-image h-auto max-h-full w-auto max-w-full object-contain",
);

export const showcaseLoading = cn(
  "product-showcase-loading absolute inset-0 flex items-center justify-center",
  "opacity-0 pointer-events-none",
);
