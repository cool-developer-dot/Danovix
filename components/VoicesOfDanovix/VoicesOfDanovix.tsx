"use client";

import { useRef } from "react";

import { VoicesOfDanovixAmbient } from "./VoicesOfDanovixAmbient";
import { VoicesOfDanovixBook } from "./VoicesOfDanovixBook";
import { VoicesOfDanovixHeader } from "./VoicesOfDanovixHeader";
import { VoicesOfDanovixTrustBar } from "./VoicesOfDanovixTrustBar";
import { useVoicesOfDanovixAnimations } from "./voices-of-danovix-animations";
import {
  voicesInner,
  voicesRoot,
  voicesStage,
} from "./voices-of-danovix.styles";

export function VoicesOfDanovix() {
  const sectionRef = useRef<HTMLElement>(null);

  useVoicesOfDanovixAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="voices"
      aria-labelledby="voices-heading"
      className={voicesRoot}
    >
      <div data-voices="stage" className={voicesStage}>
        <VoicesOfDanovixAmbient />

        <div className={voicesInner}>
          <VoicesOfDanovixHeader />
          <VoicesOfDanovixBook />
          <VoicesOfDanovixTrustBar />
        </div>
      </div>
    </section>
  );
}
