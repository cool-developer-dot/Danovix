"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { EXPERIENCE_OFFLINE } from "@/lib/experience/constants";
import { ExperienceActions, ExperienceHeroCopy } from "./ExperienceHero";
import { ExperienceShell } from "./ExperienceShell";
import { MarblePedestal } from "./MarblePedestal";

export function OfflineExperience({
  onRetry,
}: {
  onRetry?: () => void;
}) {
  const handleAction = useCallback(
    (id: string) => {
      if (id === "retry") {
        if (onRetry) onRetry();
        else window.location.reload();
      }
    },
    [onRetry],
  );

  return (
    <>
      <HeroNavbar />
      <ExperienceShell>
        <MarblePedestal variant="offline" />
        <ExperienceHeroCopy
          eyebrow={EXPERIENCE_OFFLINE.eyebrow}
          heading={EXPERIENCE_OFFLINE.heading}
          description={EXPERIENCE_OFFLINE.description}
        />
        <ExperienceActions
          actions={[...EXPERIENCE_OFFLINE.actions]}
          onAction={handleAction}
        />
      </ExperienceShell>
    </>
  );
}

export function OfflineProvider({ children }: { children: ReactNode }) {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (offline) {
    return (
      <OfflineExperience onRetry={() => setOffline(!navigator.onLine)} />
    );
  }

  return <>{children}</>;
}
