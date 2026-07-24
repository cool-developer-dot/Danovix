import type gsap from "gsap";

export const CINEMATIC_CURTAIN = {
  start: "inset(100% 0 0 0)",
  end: "inset(0% 0 0 0)",
  duration: 1.15,
  ease: "power4.inOut",
} as const;

export const CINEMATIC_EASE = {
  luxury: "power4.out",
  dramatic: "expo.out",
  soft: "power3.out",
} as const;

export function setClipPath(element: HTMLElement, clipPath: string) {
  element.style.clipPath = clipPath;
  element.style.setProperty("-webkit-clip-path", clipPath);
}

export function concealWithCurtain(stage: HTMLElement) {
  setClipPath(stage, CINEMATIC_CURTAIN.start);
}

type CurtainRevealConfig = {
  stage: HTMLElement;
  camera?: HTMLElement | null;
  spotlight?: HTMLElement | null;
  duration?: number;
  ease?: string;
};

/** Cinematic curtain wipe + camera settle + spotlight bloom */
export function addCurtainReveal(
  gsapInstance: typeof gsap,
  timeline: gsap.core.Timeline,
  config: CurtainRevealConfig,
  position = 0,
) {
  const {
    stage,
    camera,
    spotlight,
    duration = CINEMATIC_CURTAIN.duration,
    ease = CINEMATIC_CURTAIN.ease,
  } = config;

  gsapInstance.set(stage, {
    clipPath: CINEMATIC_CURTAIN.start,
    webkitClipPath: CINEMATIC_CURTAIN.start,
  });

  timeline.to(
    stage,
    {
      clipPath: CINEMATIC_CURTAIN.end,
      webkitClipPath: CINEMATIC_CURTAIN.end,
      duration,
      ease,
    },
    position,
  );

  if (camera) {
    gsapInstance.set(camera, {
      scale: 1.09,
      transformOrigin: "50% 42%",
      force3D: true,
    });
    timeline.to(
      camera,
      {
        scale: 1,
        duration: duration * 1.15,
        ease: CINEMATIC_EASE.luxury,
        force3D: true,
      },
      position,
    );
  }

  if (spotlight) {
    gsapInstance.set(spotlight, {
      opacity: 0,
      scale: 0.35,
      transformOrigin: "50% 28%",
      force3D: true,
    });
    timeline.to(
      spotlight,
      {
        opacity: 1,
        scale: 1.2,
        duration: duration * 0.5,
        ease: "power2.out",
        force3D: true,
      },
      position + 0.06,
    );
    timeline.to(
      spotlight,
      {
        scale: 1,
        duration: duration * 0.55,
        ease: "power2.inOut",
        force3D: true,
      },
      position + duration * 0.5,
    );
  }
}

type ClipRevealConfig = {
  y?: string | number;
  duration?: number;
  ease?: string;
  stagger?: number;
};

/** Masked line reveal — parent must use overflow-hidden */
export function clipRevealVars({
  y = "110%",
  duration = 0.95,
  ease = CINEMATIC_EASE.luxury,
  stagger = 0.11,
}: ClipRevealConfig = {}) {
  return { y, opacity: 1, duration, ease, stagger, force3D: true };
}

export function setClipConcealed(
  gsapInstance: typeof gsap,
  targets: gsap.TweenTarget,
  y: string | number = "110%",
) {
  gsapInstance.set(targets, { y, opacity: 1, force3D: true });
}

type PerspectiveRevealConfig = {
  rotateY?: number;
  rotateX?: number;
  scale?: number;
  y?: number;
  blur?: number;
  duration?: number;
  ease?: string;
};

/** 3D perspective entrance for hero visuals (gallery, book, etc.) */
export function perspectiveRevealVars({
  duration = 1.15,
  ease = CINEMATIC_EASE.luxury,
}: PerspectiveRevealConfig = {}) {
  // Conceal values live in setPerspectiveConcealed; reveal always settles to identity.
  return {
    opacity: 1,
    y: 0,
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    duration,
    ease,
    force3D: true,
  };
}

export function setPerspectiveConcealed(
  gsapInstance: typeof gsap,
  element: HTMLElement,
  config: PerspectiveRevealConfig = {},
) {
  const {
    rotateY = 16,
    rotateX = 5,
    scale = 0.84,
    y = 56,
    blur = 14,
  } = config;

  gsapInstance.set(element, {
    opacity: 0,
    y,
    rotateY,
    rotateX,
    scale,
    filter: `blur(${blur}px)`,
    transformPerspective: 1400,
    transformOrigin: "50% 50%",
    force3D: true,
  });
}

/** Label shimmer — blur + tracking tighten */
export function labelRevealVars(duration = 0.85, ease: string = CINEMATIC_EASE.soft) {
  return {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    letterSpacing: "0.32em",
    duration,
    ease,
    force3D: true,
  };
}

export function setLabelConcealed(
  gsapInstance: typeof gsap,
  element: HTMLElement,
  y: number,
) {
  gsapInstance.set(element, {
    opacity: 0,
    y,
    filter: "blur(8px)",
    letterSpacing: "0.5em",
    force3D: true,
  });
}
