"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

import {
  getEditorialForFace,
  type AuthFace,
} from "./auth.constants";
import { FloatingFeatureCards } from "./FloatingFeatureCards";
import {
  editorialContent,
  editorialDescription,
  editorialEyebrow,
  editorialGlow,
  editorialGrain,
  editorialHeadline,
  editorialHeadlineLine,
  editorialHeadlineWord,
  editorialImage,
  editorialImageLayer,
  editorialPanel,
  editorialParticles,
  editorialRule,
  editorialScrim,
  editorialWatermark,
  editorialWatermarkText,
} from "./signup.styles";

const EDITORIAL_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

type EditorialPanelProps = {
  face: AuthFace;
};

export function EditorialPanel({ face }: EditorialPanelProps) {
  const [visibleFace, setVisibleFace] = useState<AuthFace>(face);
  const copy = getEditorialForFace(visibleFace);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstPaint = useRef(true);

  useLayoutEffect(() => {
    if (firstPaint.current) {
      firstPaint.current = false;
      return;
    }
    if (face === visibleFace) return;

    const root = contentRef.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!root || reduce) {
      setVisibleFace(face);
      return;
    }

    let cancelled = false;

    void import("@/lib/gsap/load")
      .then((mod) => mod.loadGsap())
      .then((gsap) => {
        if (cancelled || !contentRef.current) return;

        const targets = Array.from(
          root.querySelectorAll<HTMLElement>(
            '[data-signup="eyebrow"], [data-signup="headline-word"], [data-signup="description"]',
          ),
        );

        gsap.to(targets, {
          opacity: 0,
          y: -10,
          duration: 0.35,
          stagger: 0.02,
          ease: "power2.in",
          force3D: true,
          onComplete: () => {
            if (cancelled) return;
            setVisibleFace(face);
            requestAnimationFrame(() => {
              if (cancelled || !contentRef.current) return;
              const nextTargets = Array.from(
                contentRef.current.querySelectorAll<HTMLElement>(
                  '[data-signup="eyebrow"], [data-signup="headline-word"], [data-signup="description"]',
                ),
              );
              gsap.fromTo(
                nextTargets,
                { opacity: 0, y: 10 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.55,
                  stagger: 0.04,
                  ease: "power3.out",
                  force3D: true,
                  clearProps: "transform",
                },
              );
            });
          },
        });
      });

    return () => {
      cancelled = true;
    };
  }, [face, visibleFace]);

  return (
    <section
      data-signup="editorial"
      aria-labelledby="signup-editorial-heading"
      className={editorialPanel}
    >
      <div data-signup="editorial-image" className={editorialImageLayer}>
        <Image
          src="/bg.webp"
          alt="DANOVIX luxury handbag in a warm architectural showroom"
          fill
          priority
          fetchPriority="high"
          quality={82}
          sizes="(max-width: 768px) 100vw, 60vw"
          placeholder="blur"
          blurDataURL={EDITORIAL_BLUR}
          className={editorialImage}
        />
      </div>

      <div data-signup="editorial-scrim" className={editorialScrim} aria-hidden="true" />
      <div data-signup="editorial-glow" className={editorialGlow} aria-hidden="true" />
      <div className={editorialGrain} aria-hidden="true" />
      <div className={editorialParticles} aria-hidden="true" />

      <div className={editorialWatermark} aria-hidden="true">
        <span className={editorialWatermarkText}>DANOVIX</span>
      </div>

      <FloatingFeatureCards face={face} />

      <div ref={contentRef} className={editorialContent}>
        <p data-signup="eyebrow" className={editorialEyebrow}>
          {copy.eyebrow}
        </p>

        <h1 id="signup-editorial-heading" className={editorialHeadline}>
          {copy.headline.map((line) => (
            <span
              key={`${visibleFace}-${line}`}
              className={editorialHeadlineLine}
            >
              {line.split(" ").map((word, index, arr) => (
                <span key={`${visibleFace}-${line}-${word}-${index}`}>
                  <span
                    data-signup="headline-word"
                    className={editorialHeadlineWord}
                  >
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-signup="description" className={editorialDescription}>
          {copy.description}
        </p>

        <span data-signup="rule" className={editorialRule} aria-hidden="true" />
      </div>
    </section>
  );
}
