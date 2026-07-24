"use client";

import { useEffect, useRef, useState } from "react";

import {
  PRODUCT_JOURNEY,
  PRODUCT_JOURNEY_CALLOUTS,
} from "@/lib/product-journey/constants";
import { cn } from "@/lib/cn";

/**
 * Premium connector callouts — desktop only (≥1024px).
 * Mobile removes leader lines entirely (features live in editorial).
 */
export function JourneyCallouts({ active }: { active: boolean }) {
  const [lineProgress, setLineProgress] = useState(0);
  const [bagAnchor, setBagAnchor] = useState({ x: 70, y: 50 });
  const [isCompact, setIsCompact] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!active || isCompact) return;

    const measure = () => {
      const marble = document.querySelector(
        '[data-journey-anchor="signature-marble"]',
      ) as HTMLElement | null;
      const camera = document.querySelector(
        "[data-signature='camera']",
      ) as HTMLElement | null;
      if (!marble || !camera) return;

      const bag = marble.getBoundingClientRect();
      const frame = camera.getBoundingClientRect();
      if (frame.width < 2 || frame.height < 2) return;

      setBagAnchor({
        x: ((bag.left + bag.width / 2 - frame.left) / frame.width) * 100,
        y: ((bag.top + bag.height * 0.42 - frame.top) / frame.height) * 100,
      });
    };

    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [active, isCompact]);

  useEffect(() => {
    if (!active || isCompact) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const delay = window.setTimeout(() => {
      const start = performance.now();
      const duration = 900;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setLineProgress(t);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, PRODUCT_JOURNEY.landing.contentDelay * 1000 + 900);

    return () => {
      window.clearTimeout(delay);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, isCompact]);

  if (!active || isCompact) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
      {PRODUCT_JOURNEY_CALLOUTS.map((callout, index) => {
        const local = Math.max(
          0,
          Math.min(1, (lineProgress - index * 0.18) / 0.35),
        );
        const bagX = bagAnchor.x;
        const bagY = bagAnchor.y;
        const endX = bagX + callout.offsetX * 100;
        const endY = bagY + callout.offsetY * 100;
        const labelOnLeft = callout.offsetX < 0;

        return (
          <div key={callout.id} className="absolute inset-0">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1={bagX}
                y1={bagY}
                x2={bagX + (endX - bagX) * local}
                y2={bagY + (endY - bagY) * local}
                stroke="rgba(214,196,158,0.45)"
                strokeWidth="0.12"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={bagX + (endX - bagX) * local}
                cy={bagY + (endY - bagY) * local}
                r={local > 0.95 ? 0.35 : 0}
                fill="rgba(214,196,158,0.7)"
              />
            </svg>
            <span
              className={cn(
                "absolute max-w-[11rem] font-sans text-[clamp(9px,0.7vw,10px)] uppercase tracking-[0.22em] text-[rgb(248_247_244/0.55)]",
                "transition-opacity duration-500",
                local > 0.85 ? "opacity-100" : "opacity-0",
                labelOnLeft ? "text-right" : "text-left",
              )}
              style={{
                left: `${endX}%`,
                top: `${endY}%`,
                transform: labelOnLeft
                  ? "translate(-108%, -50%)"
                  : "translate(8%, -50%)",
              }}
            >
              {callout.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
