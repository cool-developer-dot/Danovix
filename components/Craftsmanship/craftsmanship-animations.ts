"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  CRAFTSMANSHIP_ENTRANCE,
  CRAFTSMANSHIP_FRAMES,
  CRAFTSMANSHIP_SCROLL,
} from "@/lib/craftsmanship/constants";
import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  perspectiveRevealVars,
  setClipConcealed,
  setLabelConcealed,
  setPerspectiveConcealed,
} from "@/lib/animations/cinematic-reveal";

type CraftsmanshipElements = {
  stage: HTMLElement | null;
  bg: HTMLElement | null;
  noise: HTMLElement | null;
  spotlight: HTMLElement | null;
  ambient: HTMLElement | null;
  label: HTMLElement | null;
  headingLines: HTMLElement[];
  description: HTMLElement | null;
  cta: HTMLElement | null;
  gallery: HTMLElement | null;
  galleryTrack: HTMLElement | null;
  imageLayers: HTMLElement[];
  lightSweep: HTMLElement | null;
  frameLabel: HTMLElement | null;
  pillars: HTMLElement[];
};

function collectElements(root: HTMLElement): CraftsmanshipElements {
  return {
    stage: root.querySelector('[data-craftsmanship="stage"]'),
    bg: root.querySelector('[data-craftsmanship="bg"]'),
    noise: root.querySelector('[data-craftsmanship="noise"]'),
    spotlight: root.querySelector('[data-craftsmanship="spotlight"]'),
    ambient: root.querySelector('[data-craftsmanship="ambient"]'),
    label: root.querySelector('[data-craftsmanship="label"]'),
    headingLines: Array.from(
      root.querySelectorAll<HTMLElement>(
        '[data-craftsmanship="heading-line"]',
      ),
    ),
    description: root.querySelector('[data-craftsmanship="description"]'),
    cta: root.querySelector('[data-craftsmanship="cta"]'),
    gallery: root.querySelector('[data-craftsmanship="gallery"]'),
    galleryTrack: root.querySelector('[data-craftsmanship="gallery-track"]'),
    imageLayers: Array.from(
      root.querySelectorAll<HTMLElement>(
        '[data-craftsmanship="image-layer"]',
      ),
    ),
    lightSweep: root.querySelector('[data-craftsmanship="light-sweep"]'),
    frameLabel: root.querySelector('[data-craftsmanship="frame-label"]'),
    pillars: Array.from(
      root.querySelectorAll<HTMLElement>('[data-craftsmanship="pillar"]'),
    ),
  };
}

function concealTargets(
  elements: CraftsmanshipElements,
  y: number,
) {
  const concealed = `translate3d(0, ${y}px, 0)`;
  const fadeTargets = [
    elements.label,
    elements.description,
    elements.cta,
    elements.gallery,
    ...elements.pillars,
  ];

  for (const el of fadeTargets) {
    if (!el) continue;
    el.style.opacity = "0";
    el.style.transform = concealed;
  }

  for (const line of elements.headingLines) {
    line.style.opacity = "1";
    line.style.transform = "translate3d(0, 110%, 0)";
  }
}

function revealStatic(elements: CraftsmanshipElements) {
  if (elements.stage) {
    elements.stage.style.clipPath = "none";
    elements.stage.style.removeProperty("-webkit-clip-path");
  }

  for (const el of [
    elements.bg,
    elements.noise,
    elements.spotlight,
    elements.ambient,
  ]) {
    if (el) el.style.opacity = "1";
  }

  const all = [
    elements.label,
    elements.description,
    elements.cta,
    elements.gallery,
    ...elements.headingLines,
    ...elements.pillars,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
  }

  for (const [i, layer] of elements.imageLayers.entries()) {
    layer.style.opacity = i === 0 ? "1" : "0";
    layer.style.transform = "scale(1)";
  }
}

export function useCraftsmanshipAnimations(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    if (!root) return;

    const elements = collectElements(root);
    const { y } = CRAFTSMANSHIP_ENTRANCE;
    concealTargets(elements, y);

    if (elements.stage) concealWithCurtain(elements.stage);

    if (elements.bg) elements.bg.style.opacity = "0";
    if (elements.noise) elements.noise.style.opacity = "0";
    if (elements.spotlight) elements.spotlight.style.opacity = "0";
    if (elements.ambient) elements.ambient.style.opacity = "0";

    for (const layer of elements.imageLayers) {
      layer.style.transform = "scale(1)";
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    let hoverGallery: HTMLElement | null = null;
    let hoverEnter: (() => void) | null = null;
    let hoverLeave: (() => void) | null = null;

    const run = async () => {
      const { gsap } = await import("@/lib/gsap/load").then((mod) =>
        mod.loadGsapWithScrollTrigger(),
      );
      if (cancelled || !rootRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease, clipY, pillarX, galleryRotateY } =
        CRAFTSMANSHIP_ENTRANCE;
      const fadeUp = { opacity: 1, y: 0, duration, ease, force3D: true };
      const {
        scrub,
        crossfadeDuration,
        zoomScale,
        zoomDuration,
        zoomEase,
      } = CRAFTSMANSHIP_SCROLL;

      ctx = gsap.context(() => {
        /* ── Cinematic curtain + atmosphere ── */
        const atmosphere = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            once: true,
          },
        });

        if (elements.stage) {
          addCurtainReveal(gsap, atmosphere, {
            stage: elements.stage,
            spotlight: elements.spotlight,
          });
        }

        for (const [i, el] of [
          elements.bg,
          elements.noise,
          elements.ambient,
        ].entries()) {
          if (!el) continue;
          atmosphere.to(
            el,
            { opacity: 1, duration: 1.05, ease: "power4.out" },
            0.14 + i * 0.08,
          );
        }

        /* ── Editorial entrance with clip-mask headlines ── */
        const entrance = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 74%",
            once: true,
          },
        });

        let at = 0.1;

        if (elements.label) {
          setLabelConcealed(gsap, elements.label, y);
          entrance.to(elements.label, labelRevealVars(duration, ease), at);
          at += stagger;
        }

        if (elements.headingLines.length) {
          setClipConcealed(gsap, elements.headingLines, clipY);
          entrance.to(
            elements.headingLines,
            clipRevealVars({ y: clipY, duration, ease, stagger }),
            at,
          );
          at += stagger * elements.headingLines.length;
        }

        if (elements.description) {
          gsap.set(elements.description, { opacity: 0, y, force3D: true });
          entrance.to(elements.description, fadeUp, at);
          at += stagger;
        }

        if (elements.cta) {
          gsap.set(elements.cta, {
            opacity: 0,
            y,
            scale: 0.92,
            force3D: true,
          });
          entrance.to(
            elements.cta,
            { ...fadeUp, scale: 1, clearProps: "transform" },
            at,
          );
          at += stagger;
        }

        if (elements.gallery) {
          setPerspectiveConcealed(gsap, elements.gallery, {
            rotateY: galleryRotateY,
            y: y + 20,
          });
          entrance.to(
            elements.gallery,
            perspectiveRevealVars({ rotateY: galleryRotateY, duration: duration + 0.25 }),
            at,
          );
        }

        /* ── Scroll-driven image storytelling ── */
        const track = elements.galleryTrack ?? root;
        const layers = elements.imageLayers;
        const frameCount = layers.length;

        if (frameCount > 1) {
          let activeFrame = 0;

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: track,
              start: "top 65%",
              end: "bottom 35%",
              scrub,
              onUpdate: (self) => {
                const index = Math.min(
                  Math.floor(self.progress * frameCount),
                  frameCount - 1,
                );
                if (index !== activeFrame && elements.frameLabel) {
                  activeFrame = index;
                  elements.frameLabel.textContent =
                    CRAFTSMANSHIP_FRAMES[index].label;
                }
              },
            },
          });

          const segment = crossfadeDuration;

          for (let i = 0; i < frameCount; i++) {
            const layer = layers[i];
            const position = i * segment;

            if (i === 0) {
              gsap.set(layer, { opacity: 1, scale: 1, force3D: true });
            } else {
              scrollTl.to(
                layers[i - 1],
                {
                  opacity: 0,
                  duration: segment * 0.55,
                  ease: "power1.inOut",
                },
                position,
              );
              scrollTl.fromTo(
                layer,
                { opacity: 0, scale: 1 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: segment * 0.55,
                  ease: "power1.inOut",
                  force3D: true,
                },
                position,
              );
            }

            scrollTl.fromTo(
              layer,
              { scale: 1 },
              {
                scale: zoomScale,
                duration: zoomDuration * 0.1,
                ease: zoomEase,
                force3D: true,
              },
              position,
            );
          }

          /* Soft spotlight drift tied to scroll */
          if (elements.spotlight) {
            scrollTl.to(
              elements.spotlight,
              {
                x: "8%",
                y: "-4%",
                duration: frameCount * segment,
                ease: "none",
                force3D: true,
              },
              0,
            );
          }

          /* Light sweep across leather */
          if (elements.lightSweep) {
            scrollTl.fromTo(
              elements.lightSweep,
              { opacity: 0, x: "-30%" },
              {
                opacity: 0.35,
                x: "30%",
                duration: frameCount * segment * 0.8,
                ease: "power1.inOut",
              },
              0,
            );
          }
        }

        /* ── Pillars alternate slide-in ── */
        if (elements.pillars.length) {
          for (const [i, pillar] of elements.pillars.entries()) {
            const fromX = i % 2 === 0 ? -pillarX : pillarX;
            gsap.set(pillar, { opacity: 0, x: fromX, y: 12, force3D: true });
          }

          gsap.to(elements.pillars, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            stagger,
            ease,
            force3D: true,
            scrollTrigger: {
              trigger: root.querySelector('[data-craftsmanship="pillars"]'),
              start: "top 86%",
              once: true,
            },
          });
        }

        /* ── Desktop hover: subtle lighting shift ── */
        const gallery = elements.gallery;
        if (gallery && window.matchMedia("(hover: hover)").matches) {
          const onEnter = () => {
            gsap.to(gallery, {
              filter: "brightness(1.06) contrast(1.03)",
              duration: 0.8,
              ease: "power2.out",
            });
            if (elements.lightSweep) {
              gsap.to(elements.lightSweep, {
                opacity: 0.5,
                duration: 0.8,
                ease: "power2.out",
              });
            }
          };
          const onLeave = () => {
            gsap.to(gallery, {
              filter: "brightness(1) contrast(1)",
              duration: 0.8,
              ease: "power2.out",
            });
            if (elements.lightSweep) {
              gsap.to(elements.lightSweep, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
              });
            }
          };

          gallery.addEventListener("mouseenter", onEnter);
          gallery.addEventListener("mouseleave", onLeave);
          hoverGallery = gallery;
          hoverEnter = onEnter;
          hoverLeave = onLeave;
        }
      }, root);
    };

    void run();

    return () => {
      cancelled = true;
      if (hoverGallery && hoverEnter && hoverLeave) {
        hoverGallery.removeEventListener("mouseenter", hoverEnter);
        hoverGallery.removeEventListener("mouseleave", hoverLeave);
      }
      ctx?.revert();
    };
  }, [rootRef, enabled]);
}
