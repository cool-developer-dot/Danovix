import type gsap from "gsap";

import {
  OPENING_COLORS,
  OPENING_DUST_OPACITY,
  OPENING_EASE,
  OPENING_TIMING,
  REDUCED_MOTION_TIMING,
  REVEAL_TIMING,
  getInkWaveEnd,
} from "@/lib/opening/constants";

export type OpeningElements = {
  overlay: HTMLElement;
  backdrop: HTMLElement;
  ambientGlow: HTMLElement;
  textWrap: HTMLElement;
  inkChars: HTMLElement[];
  particles: HTMLElement[];
};

export type RevealElements = {
  overlay: HTMLElement;
  backdrop: HTMLElement;
  /** Present on the homepage hero; null on other routes. */
  background: HTMLElement | null;
  ambient: HTMLElement | null;
  tone: HTMLElement | null;
  heroOverlay: HTMLElement | null;
  textWrap: HTMLElement | null;
  inkChars: HTMLElement[];
  particles: HTMLElement[];
};

function addInkWave(
  timeline: gsap.core.Timeline,
  gsapInstance: typeof gsap,
  inkChars: HTMLElement[],
  startAt: number,
) {
  gsapInstance.set(inkChars, { color: OPENING_COLORS.ivoryMuted });

  inkChars.forEach((char, index) => {
    const charStart = startAt + index * OPENING_TIMING.inkCharStagger;

    timeline.to(
      char,
      {
        color: OPENING_COLORS.champagneSoft,
        duration: OPENING_TIMING.inkCharChampagneDuration,
        ease: OPENING_EASE.soft,
      },
      charStart,
    );

    timeline.to(
      char,
      {
        color: OPENING_COLORS.ivory,
        duration: OPENING_TIMING.inkCharIvoryDuration,
        ease: OPENING_EASE.luxury,
      },
      charStart + OPENING_TIMING.inkCharChampagneDuration,
    );
  });
}

export function createOpeningTimeline(
  gsapInstance: typeof gsap,
  elements: OpeningElements,
  onComplete: () => void,
) {
  const { ambientGlow, backdrop, inkChars, particles } = elements;

  gsapInstance.set(backdrop, { opacity: 1 });
  gsapInstance.set(ambientGlow, { opacity: 0 });
  gsapInstance.set(inkChars, { color: OPENING_COLORS.ivoryMuted });
  gsapInstance.set(particles, { opacity: 0 });

  const waveComplete = getInkWaveEnd(inkChars.length);

  const timeline = gsapInstance.timeline({
    defaults: { ease: OPENING_EASE.soft },
    onComplete,
  });

  timeline
    .to(
      ambientGlow,
      {
        opacity: 1,
        duration: OPENING_TIMING.ambientGlowDuration,
        ease: OPENING_EASE.luxury,
      },
      OPENING_TIMING.ambientGlow,
    )
    .to(
      particles,
      {
        opacity: OPENING_DUST_OPACITY,
        duration: OPENING_TIMING.dustFadeDuration,
        stagger: 0.038,
        ease: OPENING_EASE.soft,
      },
      OPENING_TIMING.dustFadeIn,
    );

  addInkWave(timeline, gsapInstance, inkChars, OPENING_TIMING.inkRevealStart);

  timeline.to({}, { duration: OPENING_TIMING.holdAfterReveal }, waveComplete);

  return timeline;
}

export function createRevealTimeline(
  gsapInstance: typeof gsap,
  elements: RevealElements,
  onComplete: () => void,
) {
  const {
    overlay,
    backdrop,
    background,
    ambient,
    tone,
    heroOverlay,
    textWrap,
    inkChars,
    particles,
  } = elements;

  if (background) gsapInstance.set(background, { opacity: 0 });
  if (ambient) gsapInstance.set(ambient, { opacity: 0 });
  if (tone) gsapInstance.set(tone, { opacity: 0 });
  if (heroOverlay) gsapInstance.set(heroOverlay, { opacity: 0 });

  const timeline = gsapInstance.timeline({
    defaults: { ease: OPENING_EASE.dissolve },
    onComplete,
  });

  timeline.to(
    backdrop,
    { opacity: 0, duration: REVEAL_TIMING.backdropFade },
    0,
  );

  if (background) {
    timeline.to(
      background,
      { opacity: 1, duration: REVEAL_TIMING.backgroundFade },
      0,
    );
  }

  if (ambient) {
    timeline.to(
      ambient,
      { opacity: 1, duration: REVEAL_TIMING.ambientFade },
      REVEAL_TIMING.ambientDelay,
    );
  }

  if (tone) {
    timeline.to(
      tone,
      { opacity: 1, duration: REVEAL_TIMING.backgroundFade * 0.94 },
      REVEAL_TIMING.toneDelay,
    );
  }

  if (heroOverlay) {
    timeline.to(
      heroOverlay,
      { opacity: 1, duration: REVEAL_TIMING.backgroundFade * 0.96 },
      REVEAL_TIMING.heroOverlayDelay,
    );
  }

  if (textWrap) {
    timeline.to(
      textWrap,
      {
        opacity: 0,
        duration: REVEAL_TIMING.textDissolve,
        ease: OPENING_EASE.dissolve,
      },
      0,
    );
  }

  if (inkChars.length) {
    timeline.to(
      inkChars,
      {
        opacity: 0,
        duration: REVEAL_TIMING.textDissolve * 0.98,
        stagger: {
          each: REVEAL_TIMING.textDissolveStagger,
          from: "start",
        },
        ease: OPENING_EASE.dissolve,
      },
      0,
    );
  }

  if (particles.length) {
    timeline.to(
      particles,
      {
        opacity: 0,
        duration: REVEAL_TIMING.textDissolve * 0.85,
        stagger: 0.004,
        ease: OPENING_EASE.soft,
      },
      0.04,
    );
  }

  timeline.to(
    overlay,
    {
      opacity: 0,
      duration: REVEAL_TIMING.dissolveDuration,
      ease: OPENING_EASE.dissolve,
    },
    REVEAL_TIMING.overlayFadeDelay,
  );

  return timeline;
}

export function createReducedMotionOpening(
  gsapInstance: typeof gsap,
  elements: OpeningElements,
  onComplete: () => void,
) {
  const { inkChars, particles, ambientGlow, backdrop } = elements;

  gsapInstance.set(backdrop, { opacity: 1 });
  gsapInstance.set(inkChars, { color: OPENING_COLORS.ivory, opacity: 1 });
  gsapInstance.set([ambientGlow, ...particles], { opacity: 0 });

  return gsapInstance
    .timeline({ onComplete })
    .to({}, { duration: REDUCED_MOTION_TIMING.introHold });
}

export function createReducedMotionReveal(
  gsapInstance: typeof gsap,
  elements: RevealElements,
  onComplete: () => void,
) {
  const {
    overlay,
    backdrop,
    background,
    ambient,
    tone,
    heroOverlay,
    textWrap,
    inkChars,
  } = elements;

  if (background) gsapInstance.set(background, { opacity: 0 });
  if (ambient) gsapInstance.set(ambient, { opacity: 0 });
  if (tone) gsapInstance.set(tone, { opacity: 0 });
  if (heroOverlay) gsapInstance.set(heroOverlay, { opacity: 0 });

  const dissolveTargets = [textWrap, ...inkChars].filter(
    Boolean,
  ) as HTMLElement[];

  const duration = REDUCED_MOTION_TIMING.revealDuration;

  const timeline = gsapInstance.timeline({
    defaults: { ease: OPENING_EASE.dissolve },
    onComplete,
  });

  timeline.to(backdrop, { opacity: 0, duration }, 0);

  if (background) {
    timeline.to(background, { opacity: 1, duration }, 0);
  }

  if (ambient) {
    timeline.to(ambient, { opacity: 1, duration: duration * 0.92 }, 0.04);
  }

  if (tone) {
    timeline.to(tone, { opacity: 1, duration: duration * 0.9 }, 0.06);
  }

  if (heroOverlay) {
    timeline.to(heroOverlay, { opacity: 1, duration: duration * 0.94 }, 0.08);
  }

  if (dissolveTargets.length) {
    timeline.to(dissolveTargets, { opacity: 0, duration }, 0);
  }

  timeline.to(overlay, { opacity: 0, duration }, 0);

  return timeline;
}
