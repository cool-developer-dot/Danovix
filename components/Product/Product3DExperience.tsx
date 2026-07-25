"use client";

import dynamic from "next/dynamic";
import {
  Maximize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { DeferredSection } from "@/components/ui/DeferredSection";

import {
  darkSection,
  eyebrow,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
  viewerBtn,
  viewerBtnActive,
  viewerControls,
  viewerShell,
} from "./product.styles";

const Product3DCanvas = dynamic(
  () =>
    import("./Product3DCanvas").then((mod) => mod.Product3DCanvas),
  { ssr: false, loading: () => <ViewerFallback /> },
);

function ViewerFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[rgb(248_247_244/0.4)]">
        Preparing atelier viewer…
      </p>
    </div>
  );
}

type Product3DExperienceProps = {
  imageSrc: string;
  productName: string;
};

export function Product3DExperience({
  imageSrc,
  productName,
}: Product3DExperienceProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [resetKey, setResetKey] = useState(0);

  const toggleFullscreen = useCallback(async () => {
    const el = shellRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await el.requestFullscreen?.();
    }
  }, []);

  return (
    <section
      id="product-3d"
      aria-labelledby="product-3d-heading"
      data-product="viewer"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Interactive Atelier</p>
          <h2 id="product-3d-heading" className={sectionHeading}>
            Inspect Every Facet.
          </h2>
          <p className={sectionBody}>
            Rotate, zoom, and study {productName} under boutique lighting —
            the private appointment experience, rendered for the screen.
          </p>
        </div>

        <DeferredSection minHeight="56vh" rootMargin="240px 0px">
          <div ref={shellRef} className={viewerShell}>
            <Product3DCanvas
              key={`${imageSrc}-${resetKey}`}
              imageSrc={imageSrc}
              autoRotate={autoRotate}
              zoom={zoom}
            />

            <div className={viewerControls}>
              <button
                type="button"
                className={cn(viewerBtn, autoRotate && viewerBtnActive)}
                aria-pressed={autoRotate}
                onClick={() => setAutoRotate((v) => !v)}
              >
                <RotateCw className="h-3.5 w-3.5 stroke-[1.25]" />
                Auto Rotate
              </button>
              <button
                type="button"
                className={viewerBtn}
                onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
              >
                <ZoomIn className="h-3.5 w-3.5 stroke-[1.25]" />
                Zoom In
              </button>
              <button
                type="button"
                className={viewerBtn}
                onClick={() => setZoom((z) => Math.max(0.75, z - 0.15))}
              >
                <ZoomOut className="h-3.5 w-3.5 stroke-[1.25]" />
                Zoom Out
              </button>
              <button
                type="button"
                className={viewerBtn}
                onClick={() => {
                  setZoom(1);
                  setAutoRotate(true);
                  setResetKey((k) => k + 1);
                }}
              >
                <RotateCcw className="h-3.5 w-3.5 stroke-[1.25]" />
                Reset
              </button>
              <button
                type="button"
                className={viewerBtn}
                onClick={() => void toggleFullscreen()}
              >
                <Maximize2 className="h-3.5 w-3.5 stroke-[1.25]" />
                Fullscreen
              </button>
            </div>
          </div>
        </DeferredSection>
      </div>
    </section>
  );
}
