"use client";

import { useEffect } from "react";
import {
  ExperienceActions,
  ExperienceHeroCopy,
} from "@/components/Experience/ExperienceHero";
import { ExperienceShell } from "@/components/Experience/ExperienceShell";
import { MarblePedestal } from "@/components/Experience/MarblePedestal";
import { EXPERIENCE_ERROR } from "@/lib/experience/constants";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep technical details out of the UI; quietly acknowledge locally.
  }, []);

  return (
    <ExperienceShell>
      <MarblePedestal variant="error" />
      <ExperienceHeroCopy
        eyebrow={EXPERIENCE_ERROR.eyebrow}
        heading={EXPERIENCE_ERROR.heading}
        description={EXPERIENCE_ERROR.description}
      />
      <ExperienceActions
        actions={[...EXPERIENCE_ERROR.actions]}
        onAction={(id) => {
          if (id === "retry") reset();
        }}
      />
    </ExperienceShell>
  );
}
