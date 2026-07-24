"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

import {
  markOpeningSeen,
  prefersReducedMotion,
  shouldPlayOpening,
} from "@/lib/opening/storage";
import {
  preloadCriticalAssets,
  preloadFutureAssets,
} from "@/lib/opening/preload";

import { OpeningGateProvider, type OpeningGateValue } from "./opening-gate";
import { OpeningOverlay } from "./OpeningOverlay";
import { OpeningText } from "./OpeningText";
import { OpeningTransition } from "./OpeningTransition";

type OpeningPhase = OpeningGateValue["phase"];

type OpeningState = OpeningGateValue & {
  phase: OpeningPhase;
};

/**
 * SSR-safe home intro state — identical on server and first client render.
 * After a fresh load, useLayoutEffect either plays the intro or skips to done.
 */
const SSR_SAFE_HOME_STATE: OpeningState = {
  phase: "intro",
  heroAnimate: false,
  awaitingOpening: true,
};

const SKIPPED_STATE: OpeningState = {
  phase: "done",
  heroAnimate: true,
  awaitingOpening: false,
};

type OpeningExperienceProps = {
  /** App Router page tree from the root layout. */
  children: ReactNode;
};

export function OpeningExperience({ children }: OpeningExperienceProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [phaseState, setPhaseState] =
    useState<OpeningState>(SSR_SAFE_HOME_STATE);
  const [skipIntro, setSkipIntro] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const preloadedRef = useRef(false);

  // Soft-nav onto home before intro has run: resume from done → intro.
  if (
    isHome &&
    !skipIntro &&
    phaseState.phase === "done" &&
    typeof window !== "undefined" &&
    shouldPlayOpening()
  ) {
    setPhaseState(SSR_SAFE_HOME_STATE);
  }

  useLayoutEffect(() => {
    if (!isHome) return;

    if (!shouldPlayOpening()) {
      markOpeningSeen();
      // Hydration session gate: server always starts home on intro; skip before paint.
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional session gate
      setSkipIntro(true);
      return;
    }

    // Claim this document load so Soft Navigations never replay mid-session.
    markOpeningSeen();

    if (prefersReducedMotion()) {
      // Intro still runs in reduced-motion mode via the overlay timeline.
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    if (preloadedRef.current) return;
    preloadedRef.current = true;

    preloadCriticalAssets();
    preloadFutureAssets();
  }, [isHome]);

  const handleIntroComplete = useCallback(() => {
    setPhaseState((current) => ({
      ...current,
      phase: "reveal",
      awaitingOpening: false,
    }));
  }, []);

  const handleHeroStart = useCallback(() => {
    setPhaseState((current) => ({
      ...current,
      heroAnimate: true,
    }));
  }, []);

  const handleRevealComplete = useCallback(() => {
    markOpeningSeen();
    setPhaseState((current) => ({
      ...current,
      phase: "done",
      awaitingOpening: false,
    }));
  }, []);

  const state: OpeningState =
    !isHome || skipIntro ? SKIPPED_STATE : phaseState;

  const { phase, heroAnimate, awaitingOpening } = state;
  const showOverlay = phase === "intro" || phase === "reveal";

  useEffect(() => {
    if (!showOverlay) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showOverlay]);

  const gateValue: OpeningGateValue = {
    phase,
    heroAnimate,
    awaitingOpening,
  };

  return (
    <OpeningGateProvider value={gateValue}>
      <div ref={homeRef}>{children}</div>

      {showOverlay && (
        <OpeningOverlay
          ref={overlayRef}
          introActive={phase === "intro"}
          onIntroComplete={handleIntroComplete}
        >
          {(phase === "intro" || phase === "reveal") && <OpeningText />}
        </OpeningOverlay>
      )}

      {phase === "reveal" && (
        <OpeningTransition
          overlayRef={overlayRef}
          homeRef={homeRef}
          onHeroStart={handleHeroStart}
          onComplete={handleRevealComplete}
        />
      )}
    </OpeningGateProvider>
  );
}
