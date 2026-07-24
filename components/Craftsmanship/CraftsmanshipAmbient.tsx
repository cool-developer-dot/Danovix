import {
  craftsmanshipAmbient,
  craftsmanshipBackground,
  craftsmanshipDust,
  craftsmanshipNoise,
  craftsmanshipSpotlight,
} from "./craftsmanship.styles";
import { CRAFTSMANSHIP_DUST } from "@/lib/craftsmanship/constants";
import type { CSSProperties } from "react";

export function CraftsmanshipAmbient() {
  return (
    <>
      <div
        data-craftsmanship="bg"
        className={craftsmanshipBackground}
        aria-hidden="true"
      />
      <div
        data-craftsmanship="noise"
        className={craftsmanshipNoise}
        aria-hidden="true"
      />
      <div
        data-craftsmanship="spotlight"
        className={craftsmanshipSpotlight}
        aria-hidden="true"
      />
      <div
        data-craftsmanship="ambient"
        className={craftsmanshipAmbient}
        aria-hidden="true"
      >
        {CRAFTSMANSHIP_DUST.map((particle, index) => {
          const style: CSSProperties = {
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            ["--dust-duration" as string]: `${particle.duration}s`,
            ["--dust-delay" as string]: `${particle.delay}s`,
          };

          return (
            <span key={index} className={craftsmanshipDust} style={style} />
          );
        })}
      </div>
    </>
  );
}
