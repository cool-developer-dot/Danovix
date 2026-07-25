/**
 * Tight compositor bounds for the journey canvas host.
 * WebGL still renders in a full-viewport child (identical projection math);
 * the fixed host is clipped to the bag + padding so Safari composites a
 * smaller layer instead of a fullscreen transparent quad.
 */

import { HERO_PRODUCT_ASPECT } from "@/lib/hero-product/constants";
import { productJourneyState } from "@/lib/product-journey/store";

const MIN_PAD_PX = 96;

export type JourneyHostBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
  /** Offset of the full-viewport child inside the clipped host */
  childLeft: number;
  childTop: number;
};

/** Full-viewport fallback — used before reveal / when hidden. */
export function fullViewportBounds(): JourneyHostBounds {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    left: 0,
    top: 0,
    width,
    height,
    childLeft: 0,
    childTop: 0,
  };
}

/**
 * Axis-aligned host around the bag large enough for yaw, particles, and shadow.
 * Returns null when the canvas should not paint (caller hides host).
 */
export function computeJourneyHostBounds(): JourneyHostBounds | null {
  const state = productJourneyState;
  if (!state.canvasVisible) return null;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (!state.revealed) {
    return fullViewportBounds();
  }

  const bagW = Math.max(48, state.screenWidthPx * state.scale);
  const bagH = bagW / HERO_PRODUCT_ASPECT;
  /* Rotation + particles + contact shadow expand the visual footprint. */
  const padX = Math.max(MIN_PAD_PX, bagW * 0.85);
  const padY = Math.max(MIN_PAD_PX, bagH * 0.95);
  const shadowExtra = bagH * 0.7;

  const cx = state.x * vw;
  const cy = state.y * vh + state.floatY * 0.15;

  let left = Math.floor(cx - bagW / 2 - padX);
  let top = Math.floor(cy - bagH / 2 - padY);
  let right = Math.ceil(cx + bagW / 2 + padX);
  let bottom = Math.ceil(cy + bagH / 2 + padY + shadowExtra);

  left = Math.max(0, left);
  top = Math.max(0, top);
  right = Math.min(vw, right);
  bottom = Math.min(vh, bottom);

  const width = Math.max(1, right - left);
  const height = Math.max(1, bottom - top);

  return {
    left,
    top,
    width,
    height,
    childLeft: -left,
    childTop: -top,
  };
}

export function applyJourneyHostBounds(
  host: HTMLElement,
  viewport: HTMLElement,
  bounds: JourneyHostBounds,
) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (
    host.style.left === `${bounds.left}px` &&
    host.style.top === `${bounds.top}px` &&
    host.style.width === `${bounds.width}px` &&
    host.style.height === `${bounds.height}px` &&
    viewport.style.left === `${bounds.childLeft}px` &&
    viewport.style.top === `${bounds.childTop}px` &&
    viewport.style.width === `${vw}px` &&
    viewport.style.height === `${vh}px`
  ) {
    return;
  }

  /*
   * Clear the inset shorthand before assigning physical edges. Setting it
   * afterwards resets left/top to `unset`, while the viewport child remains
   * negatively offset, shifting every projected object toward the top-left.
   */
  host.style.inset = "unset";
  host.style.right = "auto";
  host.style.bottom = "auto";
  host.style.left = `${bounds.left}px`;
  host.style.top = `${bounds.top}px`;
  host.style.width = `${bounds.width}px`;
  host.style.height = `${bounds.height}px`;

  viewport.style.left = `${bounds.childLeft}px`;
  viewport.style.top = `${bounds.childTop}px`;
  viewport.style.width = `${vw}px`;
  viewport.style.height = `${vh}px`;
}
