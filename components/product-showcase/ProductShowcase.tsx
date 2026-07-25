"use client";

import Image from "next/image";
import { useRef, type RefObject } from "react";

import { cn } from "@/lib/cn";
import type { ShowcaseFrame } from "@/lib/product-showcase/types";

import {
  showcaseImage,
  showcaseLayer,
  showcaseStage,
  showcaseTilt,
  showcaseViewport,
} from "./product-showcase.styles";
import { useProductShowcase } from "./useProductShowcase";

export type ProductShowcaseProps = {
  /** Ordered rotation frames — replace with a GLB renderer later. */
  frames: readonly ShowcaseFrame[];
  alt: string;
  /** Changes when the product changes — restarts the sequence. */
  productKey: string;
  priority?: boolean;
  sizes?: string;
  viewportClassName?: string;
  imageClassName?: string;
  revealRef?: RefObject<HTMLDivElement | null>;
  onReady?: () => void;
};

/**
 * Premium multi-frame rotation showcase.
 *
 * Rendering layer only — layout, card, and nav live in the parent section.
 * Swap `frames` + this component for a 3D model renderer when GLBs arrive.
 */
export function ProductShowcase({
  frames,
  alt,
  productKey,
  priority = false,
  sizes = "(max-width: 640px) 78vw, (max-width: 1024px) 60vw, 560px",
  viewportClassName,
  imageClassName,
  revealRef,
  onReady,
}: ProductShowcaseProps) {
  const internalRevealRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pointerAreaRef = revealRef ?? internalRevealRef;

  useProductShowcase({
    frames,
    productKey,
    layerRefs,
    tiltRef,
    pointerAreaRef,
    onReady,
  });

  return (
    <div
      ref={pointerAreaRef}
      data-featured="image-reveal"
      className={cn(showcaseViewport, viewportClassName)}
    >
      <div className={showcaseStage}>
        <div ref={tiltRef} className={showcaseTilt}>
          {frames.map((frame, index) => (
            <div
              key={frame.id}
              ref={(el) => {
                layerRefs.current[index] = el;
              }}
              className={showcaseLayer}
              data-frame={frame.id}
              aria-hidden={index !== 0}
            >
              <Image
                src={frame.src}
                alt={index === 0 ? alt : ""}
                width={frame.width}
                height={frame.height}
                quality={85}
                priority={priority && index === 0}
                loading={priority && index === 0 ? undefined : "lazy"}
                sizes={sizes}
                decoding="async"
                className={cn(showcaseImage, imageClassName)}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
