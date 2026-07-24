"use client";

import Image from "next/image";

import { CRAFTSMANSHIP_FRAMES } from "@/lib/craftsmanship/constants";

import {
  craftsmanshipFrameLabel,
  craftsmanshipGallerySticky,
  craftsmanshipGalleryTrack,
  craftsmanshipGalleryViewport,
  craftsmanshipImage,
  craftsmanshipImageLayer,
  craftsmanshipLightSweep,
} from "./craftsmanship.styles";

export function CraftsmanshipGallery() {
  return (
    <div data-craftsmanship="gallery-track" className={craftsmanshipGalleryTrack}>
      <div className={craftsmanshipGallerySticky}>
        <div
          data-craftsmanship="gallery"
          className={craftsmanshipGalleryViewport}
        >
          {CRAFTSMANSHIP_FRAMES.map((frame, index) => (
            <div
              key={frame.id}
              data-craftsmanship="image-layer"
              data-frame={frame.id}
              data-frame-index={index}
              className={craftsmanshipImageLayer}
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                width={frame.width}
                height={frame.height}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 55vw, 42vw"
                quality={85}
                loading={index === 0 ? "eager" : "lazy"}
                className={craftsmanshipImage}
                draggable={false}
              />
            </div>
          ))}

          <div
            data-craftsmanship="light-sweep"
            className={craftsmanshipLightSweep}
            aria-hidden="true"
          />

          <p
            data-craftsmanship="frame-label"
            className={craftsmanshipFrameLabel}
            aria-live="polite"
          >
            {CRAFTSMANSHIP_FRAMES[0].label}
          </p>
        </div>
      </div>
    </div>
  );
}
