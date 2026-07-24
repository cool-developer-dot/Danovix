"use client";

import { useRef } from "react";

import { CommunityAmbient } from "./CommunityAmbient";
import { CommunityHeader } from "./CommunityHeader";
import { EditorialGrid } from "./EditorialGrid";
import { InstagramCTA } from "./InstagramCTA";
import { useCommunityAnimations } from "./community-animations";
import {
  communityInner,
  communityRoot,
  communityStage,
} from "./community.styles";

export function Community() {
  const sectionRef = useRef<HTMLElement>(null);

  useCommunityAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="community-heading"
      className={communityRoot}
    >
      <div data-community="stage" className={communityStage}>
        <CommunityAmbient />

        <div className={communityInner}>
          <CommunityHeader />
          <EditorialGrid />
          <InstagramCTA />
        </div>
      </div>
    </section>
  );
}
