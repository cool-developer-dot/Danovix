"use client";

import { useEffect, useRef, useState } from "react";

type UseDeferredMountOptions = {
  /** IntersectionObserver rootMargin — load slightly before enter. */
  rootMargin?: string;
  threshold?: number;
  /** When true, mount immediately after hydration (above-fold / critical). */
  eager?: boolean;
  /**
   * Home section id — if it matches the pending/URL hash, mount after hydration.
   * Checked only in an effect so SSR and the first client paint stay identical.
   */
  hashId?: string;
  /** Read pending hash without clearing (injected to keep this hook free of DOM imports in tests). */
  peekHash?: () => string | null;
};

/**
 * Mount heavy section trees only when near the viewport.
 * First paint is always unmounted (SSR + hydrate) to avoid hydration mismatches.
 */
export function useDeferredMount({
  rootMargin = "480px 0px",
  threshold = 0,
  eager = false,
  hashId,
  peekHash,
}: UseDeferredMountOptions = {}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const hashMatch = Boolean(hashId && peekHash?.() === hashId);
    if (eager || hashMatch) {
      // Defer one tick so the hydrated tree matches SSR before children mount.
      const id = window.setTimeout(() => setMounted(true), 0);
      return () => window.clearTimeout(id);
    }

    const node = sentinelRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setMounted(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, hashId, mounted, peekHash, rootMargin, threshold]);

  return { sentinelRef, mounted };
}
