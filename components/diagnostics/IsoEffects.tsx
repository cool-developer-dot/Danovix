"use client";

/**
 * TEMPORARY — applies CSS/DOM isolation for scroll A/B tests.
 * Removed entirely after the investigation.
 */

import { useEffect } from "react";

import { getIsoMode, type IsoMode } from "@/lib/diagnostics/iso";

function applyCss(mode: IsoMode) {
  const id = "danovix-iso-style";
  document.getElementById(id)?.remove();
  if (mode === "baseline") return;

  const style = document.createElement("style");
  style.id = id;

  if (mode === "backdrop") {
    style.textContent = `
      * {
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
      }
    `;
  } else if (mode === "css-blur") {
    style.textContent = `
      * {
        filter: none !important;
      }
    `;
  } else if (mode === "fixed") {
    style.textContent = `
      .product-journey-canvas,
      [data-product-journey="canvas"],
      header.fixed, .fixed {
        position: absolute !important;
      }
    `;
  } else if (mode === "images") {
    style.textContent = `
      img, picture, video {
        visibility: hidden !important;
        /* keep layout boxes */
        opacity: 0 !important;
      }
    `;
  }

  if (style.textContent) document.head.appendChild(style);
}

async function applyGsapIsolation(mode: IsoMode) {
  if (mode !== "all-gsap" && mode !== "other-scrub" && mode !== "journey-scrub") {
    return;
  }

  try {
    const { ScrollTrigger } = await import("@/lib/gsap/load").then((m) =>
      m.loadGsapWithScrollTrigger(),
    );

    if (mode === "all-gsap") {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return;
    }

    if (mode === "other-scrub") {
      /* Kill scrubbed triggers that are NOT the product-journey travel scrub.
         Journey scrub is attached to [data-journey-section="hero"]. */
      ScrollTrigger.getAll().forEach((t) => {
        const scrub = (t as { vars?: { scrub?: unknown } }).vars?.scrub;
        if (scrub === undefined || scrub === false) return;
        const trigger = t.trigger as HTMLElement | null;
        const isJourney =
          trigger?.matches?.('[data-journey-section="hero"]') ||
          trigger?.closest?.('[data-journey-section="hero"]');
        if (!isJourney) t.kill();
      });
    }

    if (mode === "journey-scrub") {
      ScrollTrigger.getAll().forEach((t) => {
        const scrub = (t as { vars?: { scrub?: unknown } }).vars?.scrub;
        if (scrub === undefined || scrub === false) return;
        const trigger = t.trigger as HTMLElement | null;
        const isJourney =
          trigger?.matches?.('[data-journey-section="hero"]') ||
          trigger?.closest?.('[data-journey-section="hero"]');
        if (isJourney) t.kill();
      });
    }
  } catch {
    /* GSAP may not be loaded yet */
  }
}

export function IsoEffects() {
  useEffect(() => {
    const mode = getIsoMode();
    applyCss(mode);

    const timers = [
      window.setTimeout(() => void applyGsapIsolation(mode), 800),
      window.setTimeout(() => void applyGsapIsolation(mode), 2000),
      window.setTimeout(() => void applyGsapIsolation(mode), 4000),
    ];

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      document.getElementById("danovix-iso-style")?.remove();
    };
  }, []);

  return null;
}
