/**
 * Single source of truth for the continuous product journey.
 * Mutated by GSAP/ScrollTrigger — readers in the R3F render loop
 * must never trigger React re-renders.
 */

export type ProductJourneyPhase =
  | "concealed"
  | "emerging"
  | "hero-idle"
  | "travelling"
  | "landing"
  | "landed"
  | "interactive";

export type ProductJourneyState = {
  /** 0 = hero rest, 1 = signature rest (scrubbed by ScrollTrigger) */
  progress: number;
  phase: ProductJourneyPhase;
  /** Viewport-normalized bag CENTER (0–1) */
  x: number;
  y: number;
  /** World-scale relative to hero size (1 = hero resting size) */
  scale: number;
  /** Exact on-screen width of the bag in CSS pixels (matches pedestal) */
  screenWidthPx: number;
  /** Degrees — controlled, never a full spin (scroll-owned while travelling) */
  rotateY: number;
  rotateX: number;
  /** Soft depth toward camera (world Z). Transform only. */
  depth: number;
  /** Extra local float for idle / landing settle */
  floatY: number;
  /** Idle yaw offset — never written into travel rotateY */
  idleRotateY: number;
  /** Extra compression on landing (scaleY) */
  compressY: number;
  shadowOpacity: number;
  particlesOpacity: number;
  /** User drag yaw (rad), applied only after land */
  interactiveYaw: number;
  interactivePitch: number;
  interactiveEnabled: boolean;
  /** Bag mesh is visible (transform only — never opacity fade) */
  revealed: boolean;
  /** Fixed canvas visible only within hero → signature journey zone */
  canvasVisible: boolean;
  /**
   * Signature editorial may reveal.
   * Persists in the store so lazy-mounted sections never miss a one-shot event.
   */
  contentReady: boolean;
  reducedMotion: boolean;
};

export const productJourneyState: ProductJourneyState = {
  progress: 0,
  phase: "concealed",
  x: 0.66,
  y: 0.56,
  scale: 1,
  screenWidthPx: 340,
  rotateY: 0,
  rotateX: 0,
  depth: 0,
  floatY: 0,
  idleRotateY: 0,
  compressY: 1,
  shadowOpacity: 0.72,
  particlesOpacity: 0,
  interactiveYaw: 0,
  interactivePitch: 0,
  interactiveEnabled: false,
  revealed: false,
  canvasVisible: true,
  contentReady: false,
  reducedMotion: false,
};

type JourneyListener = (state: ProductJourneyState) => void;

const listeners = new Set<JourneyListener>();

/** Skip notify when pose hasn't moved enough to matter on screen. */
const POSE_EPS = 2.5e-5;
const OPACITY_EPS = 3e-3;

export function subscribeProductJourney(listener: JourneyListener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function notifyProductJourney() {
  for (const listener of listeners) {
    listener(productJourneyState);
  }
}

function isPoseDirty(
  before: ProductJourneyState,
  patch: Partial<ProductJourneyState>,
): boolean {
  for (const key of Object.keys(patch) as Array<keyof ProductJourneyState>) {
    const next = patch[key];
    if (next === undefined) continue;
    const prev = before[key];
    if (typeof next === "number" && typeof prev === "number") {
      const eps =
        key === "shadowOpacity" || key === "particlesOpacity"
          ? OPACITY_EPS
          : POSE_EPS;
      if (Math.abs(next - prev) > eps) return true;
      continue;
    }
    if (next !== prev) return true;
  }
  return false;
}

export function patchProductJourney(
  patch: Partial<ProductJourneyState>,
  notify = true,
) {
  if (!notify) {
    Object.assign(productJourneyState, patch);
    return;
  }

  /* Snapshot only the keys we might dirty-check — avoid cloning the whole state. */
  if (!isPoseDirty(productJourneyState, patch)) {
    Object.assign(productJourneyState, patch);
    return;
  }

  Object.assign(productJourneyState, patch);
  notifyProductJourney();
}
