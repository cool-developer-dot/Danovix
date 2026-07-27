import type { Metadata } from "next";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { ExperienceAiCard } from "@/components/Experience/ExperienceAiCard";
import {
  ExperienceActions,
  ExperienceHeroCopy,
} from "@/components/Experience/ExperienceHero";
import { ExperienceShell } from "@/components/Experience/ExperienceShell";
import { MarblePedestal } from "@/components/Experience/MarblePedestal";
import { EXPERIENCE_404 } from "@/lib/experience/constants";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Piece Not Found",
  description:
    "This piece couldn't be found — continue your journey through the DANOVIX collection.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <HeroNavbar />
      <ExperienceShell>
        <MarblePedestal variant="empty" />
        <ExperienceHeroCopy
          eyebrow={EXPERIENCE_404.eyebrow}
          heading={EXPERIENCE_404.heading}
          description={EXPERIENCE_404.description}
        />
        <ExperienceActions actions={[...EXPERIENCE_404.actions]} />
        <ExperienceAiCard
          eyebrow={EXPERIENCE_404.ai.eyebrow}
          heading={EXPERIENCE_404.ai.heading}
          description={EXPERIENCE_404.ai.description}
          cta={EXPERIENCE_404.ai.cta}
          ctaHref={EXPERIENCE_404.ai.ctaHref}
        />
      </ExperienceShell>
    </>
  );
}
