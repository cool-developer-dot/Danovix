"use client";

import dynamic from "next/dynamic";

const WishlistExperience = dynamic(
  () =>
    import("@/components/Wishlist/WishlistExperience").then(
      (mod) => mod.WishlistExperience,
    ),
  { ssr: true },
);

export function WishlistExperienceLazy() {
  return <WishlistExperience />;
}
