"use client";

import { useEffect, useRef, useState } from "react";

type UseDeferredMountOptions = {
  /** IntersectionObserver rootMargin — load slightly before enter. */
  rootMargin?: string;
  threshold?: number;
  /** When true, mount immediately (above-fold / critical sections). */
  eager?: boolean;
};

/**
 * Mount heavy section trees only when near the viewport.
 * One-shot: once true, stays true (no remount thrash).
 */
export function useDeferredMount({
  rootMargin = "480px 0px",
  threshold = 0,
  eager = false,
}: UseDeferredMountOptions = {}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(eager);

  // Adjust during render when `eager` flips on — avoids cascading effect setState.
  if (eager && !mounted) {
    setMounted(true);
  }

  useEffect(() => {
    if (eager || mounted) return;

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
  }, [eager, mounted, rootMargin, threshold]);

  return { sentinelRef, mounted };
}
