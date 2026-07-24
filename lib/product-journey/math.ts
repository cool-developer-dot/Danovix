/**
 * Pure math helpers for the continuous handbag journey.
 * All coordinates are viewport-normalized (0–1).
 */

import {
  HERO_PRODUCT_ASPECT,
  HERO_PRODUCT_EMERGE,
} from "@/lib/hero-product/constants";
import { PRODUCT_JOURNEY } from "./constants";

export type Vec2 = { x: number; y: number };

/** Absolute document coordinates — stable across scroll. */
export type DocPoint = { x: number; y: number };

export function viewportToDoc(point: Vec2): DocPoint {
  return {
    x: point.x * window.innerWidth + window.scrollX,
    y: point.y * window.innerHeight + window.scrollY,
  };
}

export function docToViewport(point: DocPoint): Vec2 {
  return {
    x: (point.x - window.scrollX) / window.innerWidth,
    y: (point.y - window.scrollY) / window.innerHeight,
  };
}

export type HeroRestPose = {
  /** Bag center X/Y in viewport 0–1 */
  bagCenter: Vec2;
  /** Marble opening center (lift origin) */
  cavity: Vec2;
  /** Pedestal stage width in CSS px — bag must match exactly */
  stageWidthPx: number;
  /** Viewport-normalized half-height of the bag at stage width */
  bagHalfHeight: number;
  /** Marble lip Y in viewport 0–1 */
  lipY: number;
  /** Absolute viewport Y% of the platform shelf (legacy) */
  shelfTopViewportY: number;
};

/** Cubic Bezier at t ∈ [0,1] */
export function cubicBezier(
  p0: Vec2,
  p1: Vec2,
  p2: Vec2,
  p3: Vec2,
  t: number,
): Vec2 {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  return {
    x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
    y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
  };
}

/** Smoothstep ease for commercial motion */
export function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** Responsive start / mid / end scale for the travel scrub */
export function getJourneyScaleTargets(viewportWidth = window.innerWidth) {
  const { scale } = PRODUCT_JOURNEY;
  if (viewportWidth < 480) return scale.smallPhone;
  if (viewportWidth < 768) return scale.largePhone;
  if (viewportWidth < 1024) return scale.tablet;
  return scale.desktop;
}

/**
 * Interpolate perspective scale from scroll progress.
 * 0 → start, 0.5 → mid (~75%), 1 → end (~45–50%).
 */
export function sampleJourneyScale(
  progress: number,
  viewportWidth = window.innerWidth,
) {
  const { start, mid, end } = getJourneyScaleTargets(viewportWidth);
  const t = Math.min(1, Math.max(0, progress));
  if (t <= 0.5) {
    return lerp(start, mid, smoothstep(0, 0.5, t));
  }
  return lerp(mid, end, smoothstep(0.5, 1, t));
}

export function sampleRotationY(progress: number) {
  const keys = PRODUCT_JOURNEY.rotation.keyframes;
  if (progress <= keys[0].t) return keys[0].y;
  if (progress >= keys[keys.length - 1].t) return keys[keys.length - 1].y;

  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (progress >= a.t && progress <= b.t) {
      const local = (progress - a.t) / (b.t - a.t);
      const eased = smoothstep(0, 1, local);
      return lerp(a.y, b.y, eased);
    }
  }

  return 0;
}

/** Build cubic control points for a smooth commercial arc onto the marble. */
export function buildJourneyCurve(
  from: Vec2,
  to: Vec2,
): [Vec2, Vec2, Vec2, Vec2] {
  const { c1, c2 } = PRODUCT_JOURNEY.path;
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  /*
   * Keep both control points on the approach side of the landing so the
   * curve never undershoots below the marble (the classic down-then-up glitch).
   */
  const p1: Vec2 = {
    x: from.x + dx * 0.3 + c1.x,
    y: from.y + dy * 0.12 + c1.y,
  };
  const p2: Vec2 = {
    x: from.x + dx * 0.72 + c2.x,
    y: from.y + dy * 0.78 + c2.y,
  };

  /* Clamp P2 so it cannot sit below the landing rest (viewport Y increases downward). */
  if (dy >= 0) {
    p2.y = Math.min(p2.y, to.y - 0.008);
  } else {
    p2.y = Math.max(p2.y, to.y + 0.008);
  }

  return [from, p1, p2, to];
}

export function getElementAnchor(el: Element | null): Vec2 | null {
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return null;

  return {
    x: (rect.left + rect.width / 2) / window.innerWidth,
    y: (rect.top + rect.height / 2) / window.innerHeight,
  };
}

/**
 * Exact hero rest pose:
 * bag bottom-center sits on the pedestal surface center.
 * Measured from live layout — not hardcoded pixel offsets.
 */
export function measureHeroRestPose(): HeroRestPose | null {
  const stage = document.querySelector(
    '[data-journey-anchor="hero"]',
  ) as HTMLElement | null;
  if (!stage) return null;

  const stageRect = stage.getBoundingClientRect();
  if (stageRect.width < 2 || stageRect.height < 2) return null;

  const surfaceEl = document.querySelector(
    '[data-journey-anchor="hero-cavity"]',
  ) as HTMLElement | null;

  let cavity: Vec2;
  if (surfaceEl) {
    const measured = getElementAnchor(surfaceEl);
    if (!measured) return null;
    cavity = measured;
  } else {
    cavity = {
      x: (stageRect.left + stageRect.width * 0.5) / window.innerWidth,
      y:
        (stageRect.top +
          stageRect.height * HERO_PRODUCT_EMERGE.pedestalSurfaceY) /
        window.innerHeight,
    };
  }

  const stageWidthPx = stageRect.width;
  const bagHeightPx = stageWidthPx / HERO_PRODUCT_ASPECT;
  const bagHalfHeight = bagHeightPx / 2 / window.innerHeight;

  const lipY =
    (stageRect.top + stageRect.height * HERO_PRODUCT_EMERGE.platformTopY) /
    window.innerHeight;

  const bagCenter: Vec2 = {
    x: cavity.x,
    y: cavity.y - bagHalfHeight,
  };

  const shelfTopViewportY =
    ((stageRect.top + stageRect.height * HERO_PRODUCT_EMERGE.platformTopY) /
      window.innerHeight) *
    100;

  return {
    bagCenter,
    cavity,
    stageWidthPx,
    bagHalfHeight,
    lipY,
    shelfTopViewportY,
  };
}

/**
 * Podium lift range — bag rises from inside the marble opening to rest.
 * Horizontal origin is always the measured opening center.
 */
export function measureHeroEmergeRange(pose: HeroRestPose): {
  start: Vec2;
  rest: Vec2;
} {
  const buriedY =
    pose.lipY +
    pose.bagHalfHeight * (1 + HERO_PRODUCT_EMERGE.hiddenBelowLipFactor);

  return {
    start: { x: pose.cavity.x, y: buriedY },
    rest: pose.bagCenter,
  };
}

/**
 * Signature marble TRUE visual center (top disk surface).
 * Prefer the dedicated rest anchor; fall back to stage bbox center.
 */
export function measureSignatureMarbleCenter(): Vec2 | null {
  const rest = document.querySelector(
    '[data-journey-anchor="signature-rest"]',
  ) as HTMLElement | null;
  const fromRest = getElementAnchor(rest);
  if (fromRest) return fromRest;

  const marble = document.querySelector(
    '[data-journey-anchor="signature-marble"]',
  ) as HTMLElement | null;
  const fromMarble = getElementAnchor(marble);
  if (!fromMarble || !marble) return fromMarble;

  /*
   * Fallback: sit on the upper disc surface (~42% down the marble art),
   * not the geometric middle of the full PNG (which includes the base shadow).
   */
  const rect = marble.getBoundingClientRect();
  return {
    x: fromMarble.x,
    y: (rect.top + rect.height * 0.42) / window.innerHeight,
  };
}

/** Signature bag rests with bottom-center on marble visual center */
export function signatureBagAnchor(marble: Vec2, bagHalfHeight = 0.06): Vec2 {
  return {
    x: marble.x,
    /* Tiny lift so the bag never clips into the disc */
    y: marble.y - bagHalfHeight - 0.004,
  };
}
