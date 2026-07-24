import type { CSSProperties } from "react";

import { COMMUNITY_DUST } from "@/lib/community/constants";

import {
  communityAmbient,
  communityBackground,
  communityDust,
  communityNoise,
  communitySpotlight,
} from "./community.styles";

export function CommunityAmbient() {
  return (
    <>
      <div
        data-community="bg"
        className={communityBackground}
        aria-hidden="true"
      />
      <div
        data-community="noise"
        className={communityNoise}
        aria-hidden="true"
      />
      <div
        data-community="spotlight"
        className={communitySpotlight}
        aria-hidden="true"
      />
      <div
        data-community="ambient"
        className={communityAmbient}
        aria-hidden="true"
      >
        {COMMUNITY_DUST.map((particle, index) => {
          const style: CSSProperties = {
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            ["--dust-duration" as string]: `${particle.duration}s`,
            ["--dust-delay" as string]: `${particle.delay}s`,
          };

          return (
            <span key={index} className={communityDust} style={style} />
          );
        })}
      </div>
    </>
  );
}
