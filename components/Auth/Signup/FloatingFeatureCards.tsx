"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";

import { cn } from "@/lib/cn";

import {
  getFeatureCardsForFace,
  type AuthFace,
} from "./auth.constants";
import {
  featureCard,
  featureCardCopy,
  featureCardIcon,
  featureCardSheen,
  featureCardTitle,
  featureCardsLayer,
} from "./signup.styles";

type FloatingFeatureCardsProps = {
  face: AuthFace;
};

export function FloatingFeatureCards({ face }: FloatingFeatureCardsProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef(face);
  const firstPaint = useRef(true);
  const cards = getFeatureCardsForFace(face);

  useLayoutEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    if (firstPaint.current) {
      firstPaint.current = false;
      faceRef.current = face;
      return;
    }

    if (faceRef.current === face) return;
    faceRef.current = face;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const nodes = Array.from(
      layer.querySelectorAll<HTMLElement>('[data-signup="feature-card"]'),
    );
    if (!nodes.length) return;

    let cancelled = false;

    void import("@/lib/gsap/load")
      .then((mod) => mod.loadGsap())
      .then((gsap) => {
        if (cancelled || !layerRef.current) return;

        nodes.forEach((node, index) => {
          const motion =
            index % 3 === 0
              ? { opacity: 0, y: 12 }
              : index % 3 === 1
                ? { opacity: 0, x: 14 }
                : { opacity: 0, rotate: 2, y: 8 };

          gsap.fromTo(node, motion, {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
            force3D: true,
            clearProps: "transform",
          });
        });
      });

    return () => {
      cancelled = true;
    };
  }, [face]);

  return (
    <div ref={layerRef} className={featureCardsLayer} aria-hidden="true">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            data-signup="feature-card"
            className={cn("absolute", card.placement)}
          >
            <div
              className={cn(featureCard, card.floatClass)}
              style={
                { "--sheen-delay": `${index * 2.1 + 1.5}s` } as CSSProperties
              }
            >
              <span className={featureCardSheen} />
              <span className={featureCardIcon}>
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
              </span>
              <p className={featureCardTitle}>{card.title}</p>
              <p className={featureCardCopy}>{card.copy}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
