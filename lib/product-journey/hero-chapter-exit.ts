/**
 * Hero chrome fade driven by the master journey ScrollTrigger.
 * No separate scrub timeline — identical mapping to the former
 * start:"top top" / end:"bottom top" / scrub:true / stagger:0.012 tween.
 */

const CONTENT_SELECTORS = [
  '[data-hero-animate="description"]',
  '[data-hero-animate="buttons"]',
  '[data-hero-animate="trust"]',
  '[data-hero-animate="scroll-indicator"]',
  ".hero-feature-item",
].join(", ");

/** Matches GSAP default tween duration used by the previous fromTo scrub. */
const TWEEN_DURATION = 0.5;
const STAGGER = 0.012;
const Y_TO = -12;

type HeroExitTarget = {
  el: HTMLElement;
  index: number;
};

let targets: HeroExitTarget[] = [];
let ready = false;
let enabled = true;

/** Cached scroll range — refreshed on layout, never per scrub tick. */
let rangeStart = 0;
let rangeEnd = 1;

export function collectHeroChapterExitTargets(
  scope: HTMLElement,
): HTMLElement[] {
  return Array.from(scope.querySelectorAll<HTMLElement>(CONTENT_SELECTORS));
}

export function registerHeroChapterExit(
  elements: HTMLElement[],
  options?: { enabled?: boolean },
): () => void {
  enabled = options?.enabled !== false;
  targets = elements.map((el, index) => ({ el, index }));
  ready = false;

  /* Start from the visible post-entrance state (same as former scrub progress 0). */
  for (const { el } of targets) {
    el.style.opacity = "1";
    el.style.transform = "translate3d(0, 0, 0)";
  }

  return () => {
    targets = [];
    ready = false;
    for (const el of elements) {
      el.style.opacity = "";
      el.style.transform = "";
    }
  };
}

export function setHeroChapterExitReady(next: boolean) {
  ready = next;
  if (ready && enabled) {
    applyHeroChapterExitAtScroll(window.scrollY);
  }
}

/**
 * Cache hero exit scroll range (former ScrollTrigger start/end).
 * Call from master ST onRefresh / resize — never during scrub ticks.
 */
export function refreshHeroChapterExitRange(heroSection: HTMLElement) {
  const top = heroSection.getBoundingClientRect().top + window.scrollY;
  const height = heroSection.offsetHeight;
  rangeStart = top;
  rangeEnd = top + Math.max(1, height);
}

/**
 * Apply hero chrome fade for the current scroll Y.
 * Progress mapping matches ScrollTrigger start:"top top" end:"bottom top".
 */
export function applyHeroChapterExitAtScroll(scrollY: number) {
  if (!ready || !enabled || targets.length === 0) return;

  /* Isolation: treat exit as "other scrub" when that A/B mode is active */
  if (
    typeof window !== "undefined" &&
    (window.__ISO__ === "other-scrub" ||
      window.__ISO__ === "all-gsap" ||
      window.__ISO__ === "journey-scrub")
  ) {
    return;
  }

  const span = rangeEnd - rangeStart;
  const progress = Math.min(1, Math.max(0, (scrollY - rangeStart) / span));
  const n = targets.length;
  const total = TWEEN_DURATION + STAGGER * Math.max(0, n - 1);

  for (const { el, index } of targets) {
    const startT = (STAGGER * index) / total;
    const endT = (STAGGER * index + TWEEN_DURATION) / total;
    const local =
      endT <= startT
        ? progress >= endT
          ? 1
          : 0
        : Math.min(1, Math.max(0, (progress - startT) / (endT - startT)));

    const opacity = 1 - local;
    const y = Y_TO * local;
    el.style.opacity = String(opacity);
    el.style.transform = `translate3d(0, ${y}px, 0)`;
  }
}
