"use client";

import type { ReactNode } from "react";

import { peekHomeHash } from "@/lib/navigation/home-hash";
import { useDeferredMount } from "@/lib/hooks/use-deferred-mount";
import { cn } from "@/lib/cn";
import { isoIs } from "@/lib/diagnostics/iso";

type DeferredSectionProps = {
  children: ReactNode;
  /** Stable anchor id — present even before the heavy section mounts. */
  id?: string;
  /** Reserve space to avoid layout shift before the chunk mounts. */
  minHeight?: string;
  rootMargin?: string;
  eager?: boolean;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

/**
 * Viewport-gated mount for below-the-fold dynamic sections.
 * Preserves layout height so scroll position stays stable.
 *
 * Hash / eager mounting happens only after hydration so server HTML and the
 * first client paint always match (minHeight placeholder, no children).
 */
export function DeferredSection({
  children,
  id,
  minHeight = "50vh",
  rootMargin = "320px 0px",
  eager = false,
  className,
  "aria-hidden": ariaHidden,
}: DeferredSectionProps) {
  /* Isolation: "deferred" mode forces eager mount of all sections. */
  const forceEager = eager || isoIs("deferred");
  const { sentinelRef, mounted } = useDeferredMount({
    rootMargin,
    eager: forceEager,
    hashId: id,
    peekHash: peekHomeHash,
  });

  return (
    <div
      ref={sentinelRef}
      id={id}
      className={cn(id && "scroll-mt-[7.5rem]", className)}
      style={mounted ? undefined : { minHeight }}
      aria-hidden={ariaHidden}
    >
      {mounted ? children : null}
    </div>
  );
}
