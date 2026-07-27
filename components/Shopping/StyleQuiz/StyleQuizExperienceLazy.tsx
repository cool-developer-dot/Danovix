"use client";

import dynamic from "next/dynamic";

const StyleQuizExperience = dynamic(
  () =>
    import("./StyleQuizExperience").then((mod) => mod.StyleQuizExperience),
  { ssr: true },
);

export function StyleQuizExperienceLazy() {
  return <StyleQuizExperience />;
}
