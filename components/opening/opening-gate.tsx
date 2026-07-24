"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

export type OpeningGateValue = {
  heroAnimate: boolean;
  awaitingOpening: boolean;
  phase: "intro" | "reveal" | "done";
};

const DEFAULT_GATE: OpeningGateValue = {
  heroAnimate: false,
  awaitingOpening: true,
  phase: "intro",
};

const OpeningGateContext = createContext<OpeningGateValue>(DEFAULT_GATE);

export function OpeningGateProvider({
  value,
  children,
}: {
  value: OpeningGateValue;
  children: ReactNode;
}) {
  return (
    <OpeningGateContext.Provider value={value}>
      {children}
    </OpeningGateContext.Provider>
  );
}

export function useOpeningGate(): OpeningGateValue {
  return useContext(OpeningGateContext);
}
