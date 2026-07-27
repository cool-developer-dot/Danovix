import type { Metadata } from "next";

import { StyleQuizExperienceLazy } from "@/components/Shopping/StyleQuiz/StyleQuizExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Discover Your Signature Style",
  description:
    "A private DANOVIX style consultation — thoughtful questions that reveal your signature collection.",
  path: "/style-quiz",
});

export default function StyleQuizPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Style Quiz", path: "/style-quiz" },
        ]}
      />
      <StyleQuizExperienceLazy />
    </>
  );
}
