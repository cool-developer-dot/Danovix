"use client";

import dynamic from "next/dynamic";

const SignatureCollection = dynamic(
  () =>
    import("@/components/SignatureCollection/SignatureCollection").then(
      (mod) => mod.SignatureCollection,
    ),
  { ssr: false },
);

/**
 * Signature docks the product journey — mount immediately so the marble
 * anchor exists before the bag travels (avoids landing position jumps).
 * Stable `#collection` anchor is always present for hash navigation.
 */
export function SignatureCollectionLazy() {
  return (
    <div id="collection" className="scroll-mt-[7.5rem]">
      <SignatureCollection />
    </div>
  );
}
