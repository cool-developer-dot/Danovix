/**
 * TEMPORARY isolation flags for scroll-lag A/B investigation.
 * Controlled via window.__ISO__ (set by the profiler before navigation).
 * DELETE this module and all call sites after the investigation.
 */

export type IsoMode =
  | "baseline"
  | "webgl"
  | "shadows"
  | "particles"
  | "journey-scrub"
  | "other-scrub"
  | "backdrop"
  | "css-blur"
  | "fixed"
  | "deferred"
  | "images"
  | "all-gsap"
  | "three";

declare global {
  interface Window {
    __ISO__?: IsoMode;
  }
}

export function getIsoMode(): IsoMode {
  if (typeof window === "undefined") return "baseline";
  return window.__ISO__ ?? "baseline";
}

export function isoIs(mode: IsoMode): boolean {
  return getIsoMode() === mode;
}
