import {
  voicesAmbient,
  voicesBackground,
  voicesDust,
  voicesNoise,
  voicesSpotlight,
} from "./voices-of-danovix.styles";
import { VOICES_DUST } from "@/lib/voices-of-danovix/constants";
import type { CSSProperties } from "react";

export function VoicesOfDanovixAmbient() {
  return (
    <>
      <div
        data-voices="bg"
        className={voicesBackground}
        aria-hidden="true"
      />
      <div
        data-voices="noise"
        className={voicesNoise}
        aria-hidden="true"
      />
      <div
        data-voices="spotlight"
        className={voicesSpotlight}
        aria-hidden="true"
      />
      <div
        data-voices="ambient"
        className={voicesAmbient}
        aria-hidden="true"
      >
        {VOICES_DUST.map((particle, index) => {
          const style: CSSProperties = {
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            ["--dust-duration" as string]: `${particle.duration}s`,
            ["--dust-delay" as string]: `${particle.delay}s`,
          };

          return (
            <span key={index} className={voicesDust} style={style} />
          );
        })}
      </div>
    </>
  );
}
