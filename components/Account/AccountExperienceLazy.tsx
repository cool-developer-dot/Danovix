"use client";

import dynamic from "next/dynamic";

const AccountExperience = dynamic(
  () =>
    import("@/components/Account/AccountExperience").then(
      (mod) => mod.AccountExperience,
    ),
  { ssr: true },
);

export function AccountExperienceLazy() {
  return <AccountExperience />;
}
