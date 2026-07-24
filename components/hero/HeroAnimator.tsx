"use client";

import { useCallback, useRef, type ReactNode } from "react";

import { useHeroAnimation } from "./HeroAnimations";
import { setupHeroChapterExit } from "./useHeroChapterExit";

type HeroAnimatorProps = {
  children: ReactNode;
  animate?: boolean;
};

export function HeroAnimator({ children, animate = true }: HeroAnimatorProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const exitCleanupRef = useRef<(() => void) | null>(null);

  const handleEntranceComplete = useCallback(() => {
    const scope = scopeRef.current;
    if (!scope || !animate) return;

    exitCleanupRef.current?.();
    exitCleanupRef.current = setupHeroChapterExit(scope);
  }, [animate]);

  useHeroAnimation(scopeRef, animate, handleEntranceComplete);

  const setScopeRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node && exitCleanupRef.current) {
        exitCleanupRef.current();
        exitCleanupRef.current = null;
      }
      scopeRef.current = node;
    },
    [],
  );

  return (
    <div ref={setScopeRef} className="h-full">
      {children}
    </div>
  );
}
