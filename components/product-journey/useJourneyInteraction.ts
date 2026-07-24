"use client";

import { useEffect, type RefObject } from "react";

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
 */
function syncHitTarget(hit: HTMLElement) {
  const state = productJourneyState;
  if (!state.interactiveEnabled || !state.canvasVisible) {
    hit.style.pointerEvents = "none";
    hit.style.cursor = "";
    hit.style.touchAction = "";
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
  hit.style.pointerEvents = "auto";
  hit.style.cursor = "grab";
  hit.style.touchAction = "none";
  hit.setAttribute("aria-hidden", "false");
}

/**
 * Momentum drag (desktop + touch) — only after the bag has landed,
 * and only within the bag-surround hit target (never over editorial copy).
 */
export function useJourneyInteraction(
  hitRef: RefObject<HTMLElement | null>,
  active: boolean,
) {
  useEffect(() => {
    if (!active) return;

    const hit = hitRef.current;
    if (!hit) return;

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
          false,
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
      if (!productJourneyState.interactiveEnabled) return;
      // Ignore if somehow outside the hit target (defensive).
      if (event.currentTarget !== hit) return;

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
        false,
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
    const unsub = subscribeProductJourney(scheduleHitSync);
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
    };
  }, [hitRef, active]);
}
