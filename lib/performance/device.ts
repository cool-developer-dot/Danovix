/**
 * Lightweight device capability helpers for adaptive rendering.
 * Safe to call from client effects only (window-dependent).
 */

export function getPreferredDpr(max = 1.5): [number, number] {
  if (typeof window === "undefined") return [1, Math.min(1.25, max)];

  const cores = navigator.hardwareConcurrency || 4;
  const memory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const width = window.innerWidth;
  const isCoarse =
    window.matchMedia?.("(pointer: coarse)").matches ?? width < 768;

  // Low-end / mobile: cap DPR harder for stable 60fps.
  if (cores <= 4 || memory <= 4 || isCoarse || width < 768) {
    return [1, Math.min(1.25, max)];
  }

  if (cores <= 6 || memory <= 6) {
    return [1, Math.min(1.35, max)];
  }

  return [1, max];
}

/**
 * Touch phones / coarse pointers — drag-to-rotate fights vertical scroll.
 * Prefer native page scroll on these devices.
 */
export function isCoarsePointerDevice(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(pointer: coarse)").matches) return true;
  if (window.matchMedia("(hover: none)").matches && window.innerWidth < 1024) {
    return true;
  }
  return window.innerWidth < 768;
}

export function prefersReducedData(): boolean {
  if (typeof window === "undefined") return false;
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (connection?.saveData) return true;
  const type = connection?.effectiveType;
  return type === "slow-2g" || type === "2g";
}

export function isPageVisible(): boolean {
  if (typeof document === "undefined") return true;
  return document.visibilityState === "visible";
}
