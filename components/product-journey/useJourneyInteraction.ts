"use client";

import { useEffect, type RefObject } from "react";

import { isCoarsePointerDevice } from "@/lib/performance/device";
import { PRODUCT_JOURNEY } from "@/lib/product-journey/constants";
import {
  patchProductJourney,
  productJourneyState,
  subscribeProductJourney,
} from "@/lib/product-journey/store";

/** Extra padding around the bag so the pedestal rim stays easy to grab. */
const HIT_PAD = 1.45;
const HIT_ASPECT = 1.2;

/**
 * Position a compact hit target over the bag so the left editorial column
 * stays selectable — the full-screen canvas never receives pointer events.
 * Disabled entirely on coarse/touch devices so vertical scroll is never blocked.
 */
function syncHitTarget(hit: HTMLElement) {
  const state = productJourneyState;
  const allowInteraction =
    state.interactiveEnabled &&
    state.canvasVisible &&
    !isCoarsePointerDevice();

  if (!allowInteraction) {
    hit.style.pointerEvents = "none";
    hit.style.cursor = "";
    hit.style.touchAction = "";
    hit.style.willChange = "auto";
    hit.style.width = "0px";
    hit.style.height = "0px";
    hit.setAttribute("aria-hidden", "true");
    return;
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const width = Math.max(160, state.screenWidthPx * HIT_PAD);
  const height = width * HIT_ASPECT;
  const left = state.x * vw - width / 2;
  const top = state.y * vh - height / 2;

  hit.style.width = `${width}px`;
  hit.style.height = `${height}px`;
  hit.style.transform = `translate3d(${left}px, ${top}px, 0)`;
  hit.style.willChange = "transform";
  hit.style.pointerEvents = "auto";
  hit.style.cursor = "grab";
  hit.style.touchAction = "none";
  hit.setAttribute("aria-hidden", "false");
}

/**
 * Momentum drag (desktop only) — after the bag has landed,
 * only within the bag-surround hit target. Mobile never captures pointers.
 */
export function useJourneyInteraction(
  hitRef: RefObject<HTMLElement | null>,
  active: boolean,
) {
  useEffect(() => {
    if (!active) return;

    const hit = hitRef.current;
    if (!hit) return;

    // Touch / coarse: never attach drag handlers — keep scroll native.
    if (isCoarsePointerDevice()) {
      syncHitTarget(hit);
      return () => {
        hit.style.pointerEvents = "none";
        hit.style.cursor = "";
        hit.style.touchAction = "";
        hit.style.willChange = "auto";
      };
    }

    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityYaw = 0;
    let velocityPitch = 0;
    let raf = 0;
    let layoutRaf = 0;

    const maxPitch =
      PRODUCT_JOURNEY.interaction.maxPitchDeg * (Math.PI / 180);
    const damping = PRODUCT_JOURNEY.interaction.damping;
    const VELOCITY_EPSILON = 0.00002;

    const stopLoop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const tick = () => {
      raf = 0;

      if (!productJourneyState.interactiveEnabled && !dragging) {
        velocityYaw = 0;
        velocityPitch = 0;
        return;
      }

      if (!dragging && productJourneyState.interactiveEnabled) {
        velocityYaw *= 1 - damping;
        velocityPitch *= 1 - damping;

        if (
          Math.abs(velocityYaw) < VELOCITY_EPSILON &&
          Math.abs(velocityPitch) < VELOCITY_EPSILON
        ) {
          velocityYaw = 0;
          velocityPitch = 0;
          return;
        }

        patchProductJourney(
          {
            interactiveYaw: productJourneyState.interactiveYaw + velocityYaw,
            interactivePitch: Math.max(
              -maxPitch,
              Math.min(
                maxPitch,
                productJourneyState.interactivePitch + velocityPitch,
              ),
            ),
          },
          true,
        );
      }

      raf = requestAnimationFrame(tick);
    };

    const ensureLoop = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const scheduleHitSync = () => {
      if (layoutRaf) return;
      layoutRaf = requestAnimationFrame(() => {
        layoutRaf = 0;
        syncHitTarget(hit);
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      if (isCoarsePointerDevice()) return;
      if (!productJourneyState.interactiveEnabled) return;
      if (event.currentTarget !== hit) return;
      // Touch pointers must never steal scroll.
      if (event.pointerType === "touch") return;

      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      velocityYaw = 0;
      velocityPitch = 0;
      hit.setPointerCapture(event.pointerId);
      hit.style.cursor = "grabbing";
      ensureLoop();
      event.preventDefault();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || !productJourneyState.interactiveEnabled) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;

      velocityYaw = dx * 0.0045;
      velocityPitch = dy * 0.0022;

      patchProductJourney(
        {
          interactiveYaw: productJourneyState.interactiveYaw + velocityYaw,
          interactivePitch: Math.max(
            -maxPitch,
            Math.min(
              maxPitch,
              productJourneyState.interactivePitch + velocityPitch,
            ),
          ),
        },
        true,
      );
      ensureLoop();
    };

    const endDrag = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      try {
        hit.releasePointerCapture(event.pointerId);
      } catch {
        /* already released */
      }
      hit.style.cursor = productJourneyState.interactiveEnabled ? "grab" : "";
      ensureLoop();
    };

    const onResize = () => scheduleHitSync();

    syncHitTarget(hit);
    let wasInteractive = productJourneyState.interactiveEnabled;
    const unsub = subscribeProductJourney(() => {
      const now =
        productJourneyState.interactiveEnabled &&
        productJourneyState.canvasVisible;
      if (!now && !wasInteractive) return;
      wasInteractive = now;
      scheduleHitSync();
    });
    window.addEventListener("resize", onResize, { passive: true });

    hit.addEventListener("pointerdown", onPointerDown);
    hit.addEventListener("pointermove", onPointerMove);
    hit.addEventListener("pointerup", endDrag);
    hit.addEventListener("pointercancel", endDrag);

    return () => {
      stopLoop();
      if (layoutRaf) cancelAnimationFrame(layoutRaf);
      unsub();
      window.removeEventListener("resize", onResize);
      hit.removeEventListener("pointerdown", onPointerDown);
      hit.removeEventListener("pointermove", onPointerMove);
      hit.removeEventListener("pointerup", endDrag);
      hit.removeEventListener("pointercancel", endDrag);
      hit.style.pointerEvents = "none";
      hit.style.cursor = "";
      hit.style.willChange = "auto";
    };
  }, [hitRef, active]);
}
