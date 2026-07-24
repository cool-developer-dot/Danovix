"use client";

import { useRef, useState } from "react";

import type { ContactTopicId } from "@/lib/contact/constants";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { cn } from "@/lib/cn";

import { AIConciergeCard } from "./AIConciergeCard";
import { AIShoppingConciergeCard } from "./AIShoppingConciergeCard";
import { useContactAnimations } from "./ContactAnimations";
import { ContactHero } from "./ContactHero";
import { ConciergeForm } from "./ConciergeForm";
import { CustomerPromise } from "./CustomerPromise";
import { EditorialQuote } from "./EditorialQuote";
import { FAQSection } from "./FAQSection";
import { HelpCategories } from "./HelpCategories";
import { MeetConcierge } from "./MeetConcierge";
import { QuickContactCards } from "./QuickContactCards";
import { SocialJourney } from "./SocialJourney";
import {
  contactMain,
  contactPage,
  deskAiCol,
  deskFormCol,
  deskGrid,
  deskRoot,
  warmBand,
  warmBg,
  warmNoise,
  warmSpotlight,
  warmWatermark,
  warmWatermarkText,
} from "./contact.styles";

type ContactExperienceProps = {
  /** When true, omit page chrome (navbar / main) for homepage embedding. */
  embedded?: boolean;
};

export function ContactExperience({ embedded = false }: ContactExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [topic, setTopic] = useState<ContactTopicId>("general");

  useContactAnimations(rootRef);

  const body = (
    <>
      <ContactHero />

      <div className={warmBand}>
        <div className={warmBg} aria-hidden="true" />
        <div className={warmNoise} aria-hidden="true" />
        <div className={warmSpotlight} aria-hidden="true" />
        <div className={warmWatermark} aria-hidden="true">
          <span className={warmWatermarkText}>DANOVIX</span>
        </div>

        <QuickContactCards />
        <HelpCategories selectedTopic={topic} onSelectTopic={setTopic} />

        <div className={deskRoot}>
          <div className={deskGrid}>
            <div className={deskFormCol}>
              <ConciergeForm topic={topic} onTopicChange={setTopic} />
            </div>
            <div className={deskAiCol}>
              <AIConciergeCard />
            </div>
          </div>
        </div>

        <AIShoppingConciergeCard />
        <MeetConcierge />
      </div>

      <CustomerPromise />
      <FAQSection />
      <EditorialQuote />
      <SocialJourney />
    </>
  );

  return (
    <div
      ref={rootRef}
      id={embedded ? undefined : "contact"}
      className={cn(contactPage, embedded && "z-[3]")}
    >
      {!embedded ? <HeroNavbar /> : null}

      {embedded ? (
        <div className={contactMain}>{body}</div>
      ) : (
        <main id="main-content" className={contactMain}>
          {body}
        </main>
      )}
    </div>
  );
}
