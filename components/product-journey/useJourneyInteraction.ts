"use client";

import { useEffect, type RefObject } from "react";

import { PRODUCT_JOURNEY } from "@/lib/product-journey/constants";
import {
  patchProductJourney,
  productJourneyState,
  subscribeProductJourney,
} from "@/lib/product-journey/store";

/**
 * Momentum drag (desktop + touch) — only after the bag has landed.
 * Mutates journey store yaw/pitch; never causes React renders.
 * rAF runs only while dragging or residual velocity remains.
 */
export function useJourneyInteraction(
  hostRef: RefObject<HTMLElement | null>,
  active: boolean,
) {
  useEffect(() => {
    if (!active) return;

    const host = hostRef.current;
    if (!host) return;

    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityYaw = 0;
    let velocityPitch = 0;
    let raf = 0;

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

    const onPointerDown = (event: PointerEvent) => {
      if (!productJourneyState.interactiveEnabled) return;
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      velocityYaw = 0;
      velocityPitch = 0;
      host.setPointerCapture(event.pointerId);
      host.style.pointerEvents = "auto";
      host.style.cursor = "grabbing";
      ensureLoop();
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
        host.releasePointerCapture(event.pointerId);
      } catch {
        /* already released */
      }
      host.style.cursor = productJourneyState.interactiveEnabled
        ? "grab"
        : "";
      if (!productJourneyState.interactiveEnabled) {
        host.style.pointerEvents = "none";
      }
      ensureLoop();
    };

    const syncPointerMode = () => {
      if (
        productJourneyState.interactiveEnabled &&
        productJourneyState.canvasVisible
      ) {
        host.style.pointerEvents = "auto";
        host.style.cursor = "grab";
        host.style.touchAction = "none";
        ensureLoop();
      } else {
        host.style.pointerEvents = "none";
        host.style.cursor = "";
        host.style.touchAction = "";
        if (!dragging) stopLoop();
      }
    };

    syncPointerMode();
    const unsub = subscribeProductJourney(syncPointerMode);

    host.addEventListener("pointerdown", onPointerDown);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerup", endDrag);
    host.addEventListener("pointercancel", endDrag);

    return () => {
      stopLoop();
      unsub();
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerup", endDrag);
      host.removeEventListener("pointercancel", endDrag);
    };
  }, [hostRef, active]);
}
