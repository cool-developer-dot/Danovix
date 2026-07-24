"use client";

import { useRef } from "react";

import { CraftsmanshipAmbient } from "./CraftsmanshipAmbient";
import { CraftsmanshipEditorial } from "./CraftsmanshipEditorial";
import { CraftsmanshipGallery } from "./CraftsmanshipGallery";
import { CraftsmanshipPillars } from "./CraftsmanshipPillars";
import { useCraftsmanshipAnimations } from "./craftsmanship-animations";
import {
  craftsmanshipEditorialCol,
  craftsmanshipGrid,
  craftsmanshipInner,
  craftsmanshipRoot,
  craftsmanshipStage,
  craftsmanshipVisualCol,
} from "./craftsmanship.styles";

export function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);

  useCraftsmanshipAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="craftsmanship-heading"
      className={craftsmanshipRoot}
    >
      <div data-craftsmanship="stage" className={craftsmanshipStage}>
        <CraftsmanshipAmbient />

        <div className={craftsmanshipInner}>
          <div data-craftsmanship="grid" className={craftsmanshipGrid}>
            <div className={craftsmanshipEditorialCol}>
              <CraftsmanshipEditorial />
              <CraftsmanshipPillars />
            </div>

            <div className={craftsmanshipVisualCol}>
              <CraftsmanshipGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
