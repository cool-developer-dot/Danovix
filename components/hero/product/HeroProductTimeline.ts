import type gsap from "gsap";

import {
  HERO_PRODUCT_EASE,
  HERO_PRODUCT_EMERGE,
  HERO_PRODUCT_TIMING,
} from "@/lib/hero-product/constants";

export type HeroProductElements = {
  stage: HTMLElement;
  well: HTMLElement;
  imageWrap: HTMLElement;
  shadow: HTMLElement;
  spotlight: HTMLElement;
  pedestalGlow: HTMLElement;
  mist: HTMLElement;
  particles: HTMLElement[];
};

/** Keep clip-path in sync across engines during concealment */
function setPortalClip(element: HTMLElement, clipPath: string) {
  element.style.clipPath = clipPath;
  element.style.setProperty("-webkit-clip-path", clipPath);
}

/** Synchronous pre-paint concealment — no GSAP required */
export function applyHeroProductConcealedState(elements: HeroProductElements) {
  const { well, imageWrap, shadow, spotlight, pedestalGlow, mist, particles } =
    elements;

  imageWrap.style.transform = `translate3d(0, ${HERO_PRODUCT_EMERGE.startYPercent}%, 0)`;
  setPortalClip(well, HERO_PRODUCT_EMERGE.clipStart);
  shadow.style.opacity = "0";
  shadow.style.transform = "translateX(-50%) scale(0.55)";
  spotlight.style.opacity = "0";
  pedestalGlow.style.opacity = "0";
  mist.style.opacity = "0";

  for (const particle of particles) {
    particle.style.opacity = "0";
    particle.style.transform = "translate3d(0, 0, 0)";
  }
}

export function createHeroProductReveal(
  gsapInstance: typeof gsap,
  elements: HeroProductElements,
  onComplete?: () => void,
) {
  const { well, imageWrap, shadow, spotlight, pedestalGlow, mist, particles } =
    elements;

  gsapInstance.set(imageWrap, {
    yPercent: HERO_PRODUCT_EMERGE.startYPercent,
    y: 0,
    rotation: 0,
    force3D: true,
  });
  gsapInstance.set(well, {
    clipPath: HERO_PRODUCT_EMERGE.clipStart,
    webkitClipPath: HERO_PRODUCT_EMERGE.clipStart,
  });
  gsapInstance.set(shadow, { opacity: 0, scale: 0.55, transformOrigin: "50% 50%" });
  gsapInstance.set(spotlight, { opacity: 0 });
  gsapInstance.set(pedestalGlow, { opacity: 0 });
  gsapInstance.set(mist, { opacity: 0 });
  gsapInstance.set(particles, { opacity: 0, yPercent: 0, force3D: true });

  const timeline = gsapInstance.timeline({
    delay: HERO_PRODUCT_TIMING.revealDelay,
    onComplete,
  });

  const emergeStart = 0;
  const emergeDuration = HERO_PRODUCT_TIMING.emergeDuration;
  const liftRange =
    HERO_PRODUCT_EMERGE.startYPercent - HERO_PRODUCT_EMERGE.throughYPercent;
  const totalRange = HERO_PRODUCT_EMERGE.startYPercent;
  const portalRiseDuration = emergeDuration * (liftRange / totalRange);
  const fullRevealDuration = emergeDuration - portalRiseDuration;

  timeline
    .to(
      imageWrap,
      {
        yPercent: HERO_PRODUCT_EMERGE.throughYPercent,
        duration: portalRiseDuration,
        ease: HERO_PRODUCT_EASE.emerge,
        force3D: true,
      },
      emergeStart,
    )
    .to(
      imageWrap,
      {
        yPercent: 0,
        duration: fullRevealDuration,
        ease: HERO_PRODUCT_EASE.emerge,
        force3D: true,
      },
      emergeStart + portalRiseDuration,
    )
    .to(
      well,
      {
        clipPath: HERO_PRODUCT_EMERGE.clipEnd,
        webkitClipPath: HERO_PRODUCT_EMERGE.clipEnd,
        duration: fullRevealDuration,
        ease: HERO_PRODUCT_EASE.emerge,
      },
      emergeStart + portalRiseDuration,
    )
    .to(
      particles,
      {
        opacity: 0.4,
        yPercent: -42,
        duration: fullRevealDuration,
        ease: HERO_PRODUCT_EASE.emerge,
        stagger: 0.04,
        force3D: true,
      },
      emergeStart + portalRiseDuration,
    )
    .to(
      spotlight,
      {
        opacity: 0.42,
        duration: HERO_PRODUCT_TIMING.spotlightFade,
        ease: HERO_PRODUCT_EASE.spotlight,
      },
      emergeStart,
    )
    .to(
      pedestalGlow,
      {
        opacity: 0.55,
        duration: HERO_PRODUCT_TIMING.glowFade,
        ease: HERO_PRODUCT_EASE.spotlight,
      },
      emergeStart,
    )
    .to(
      shadow,
      {
        opacity: 0.72,
        scale: 1,
        duration: HERO_PRODUCT_TIMING.shadowFade,
        ease: HERO_PRODUCT_EASE.spotlight,
      },
      emergeStart,
    )
    .to(
      mist,
      {
        opacity: 0.08,
        duration: emergeDuration * 0.55,
        ease: HERO_PRODUCT_EASE.spotlight,
      },
      emergeStart,
    );

  const emergeEnd = emergeStart + emergeDuration;

  timeline
    .to(
      mist,
      {
        opacity: 0,
        duration: HERO_PRODUCT_TIMING.mistFadeOut,
        ease: HERO_PRODUCT_EASE.mist,
      },
      emergeEnd,
    )
    .to(
      particles,
      {
        opacity: 0,
        duration: HERO_PRODUCT_TIMING.mistFadeOut * 0.85,
        ease: HERO_PRODUCT_EASE.mist,
      },
      emergeEnd,
    )
    .to(
      imageWrap,
      {
        y: HERO_PRODUCT_TIMING.settlePx,
        duration: HERO_PRODUCT_TIMING.settleDuration * 0.45,
        ease: "power1.out",
        force3D: true,
      },
      emergeEnd,
    )
    .to(
      imageWrap,
      {
        y: 0,
        duration: HERO_PRODUCT_TIMING.settleDuration * 0.55,
        ease: HERO_PRODUCT_EASE.settle,
        force3D: true,
      },
      emergeEnd + HERO_PRODUCT_TIMING.settleDuration * 0.45,
    );

  return timeline;
}

export function createHeroProductIdle(
  gsapInstance: typeof gsap,
  elements: Pick<HeroProductElements, "imageWrap">,
) {
  const { imageWrap } = elements;

  const floatTween = gsapInstance.to(imageWrap, {
    y: -HERO_PRODUCT_TIMING.idleFloatPx,
    duration: HERO_PRODUCT_TIMING.idleFloatDuration,
    ease: HERO_PRODUCT_EASE.idle,
    repeat: -1,
    yoyo: true,
    force3D: true,
  });

  const rotateTween = gsapInstance.to(imageWrap, {
    rotation: HERO_PRODUCT_TIMING.idleRotateDeg,
    duration: HERO_PRODUCT_TIMING.idleRotateDuration,
    ease: HERO_PRODUCT_EASE.idle,
    transformOrigin: "50% 85%",
    repeat: -1,
    yoyo: true,
    force3D: true,
  });

  let resumeTimer: ReturnType<typeof setTimeout> | null = null;

  const clearResumeTimer = () => {
    if (resumeTimer !== null) {
      clearTimeout(resumeTimer);
      resumeTimer = null;
    }
  };

  const pauseRotation = () => {
    rotateTween.pause();
    clearResumeTimer();
  };

  const scheduleResume = () => {
    clearResumeTimer();
    resumeTimer = setTimeout(() => {
      rotateTween.play();
      resumeTimer = null;
    }, HERO_PRODUCT_TIMING.inactivityResumeMs);
  };

  const onPointerDown = () => pauseRotation();
  const onPointerUp = () => scheduleResume();

  imageWrap.style.pointerEvents = "auto";
  imageWrap.style.touchAction = "none";
  imageWrap.addEventListener("pointerdown", onPointerDown);
  imageWrap.addEventListener("pointerup", onPointerUp);
  imageWrap.addEventListener("pointercancel", onPointerUp);
  imageWrap.addEventListener("pointerleave", onPointerUp);

  return {
    kill: () => {
      floatTween.kill();
      rotateTween.kill();
      clearResumeTimer();
      imageWrap.removeEventListener("pointerdown", onPointerDown);
      imageWrap.removeEventListener("pointerup", onPointerUp);
      imageWrap.removeEventListener("pointercancel", onPointerUp);
      imageWrap.removeEventListener("pointerleave", onPointerUp);
      imageWrap.style.pointerEvents = "";
      imageWrap.style.touchAction = "";
    },
  };
}

export function createReducedMotionProduct(
  gsapInstance: typeof gsap,
  elements: HeroProductElements,
) {
  const { well, imageWrap, shadow, spotlight, pedestalGlow, mist, particles } =
    elements;

  gsapInstance.set(imageWrap, { yPercent: 0, y: 0, rotation: 0, clearProps: "transform" });
  gsapInstance.set(well, {
    clipPath: HERO_PRODUCT_EMERGE.clipEnd,
    webkitClipPath: HERO_PRODUCT_EMERGE.clipEnd,
  });
  gsapInstance.set(shadow, { opacity: 0.65, scale: 1 });
  gsapInstance.set(spotlight, { opacity: 0.35 });
  gsapInstance.set(pedestalGlow, { opacity: 0.45 });
  gsapInstance.set(mist, { opacity: 0 });
  gsapInstance.set(particles, { opacity: 0 });
}
