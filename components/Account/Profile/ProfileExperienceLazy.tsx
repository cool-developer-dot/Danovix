"use client";

import dynamic from "next/dynamic";

const ProfileExperience = dynamic(
  () =>
    import("./ProfileExperience").then((mod) => mod.ProfileExperience),
  { ssr: true },
);

export function ProfileExperienceLazy() {
  return <ProfileExperience />;
}
