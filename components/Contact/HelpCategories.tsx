"use client";

import { HELP_CATEGORIES, type ContactTopicId } from "@/lib/contact/constants";
import { cn } from "@/lib/cn";

import {
  contactEyebrowDark,
  helpCard,
  helpCardActive,
  helpCardCopy,
  helpCardTitle,
  helpGrid,
  helpHeader,
  helpHeading,
  helpIcon,
  helpRoot,
} from "./contact.styles";

type HelpCategoriesProps = {
  selectedTopic: ContactTopicId;
  onSelectTopic: (topic: ContactTopicId) => void;
};

export function HelpCategories({
  selectedTopic,
  onSelectTopic,
}: HelpCategoriesProps) {
  return (
    <section
      aria-labelledby="help-heading"
      className={helpRoot}
    >
      <div data-contact="help-header" className={helpHeader}>
        <p className={contactEyebrowDark}>Thoughtful Assistance</p>
        <h2 id="help-heading" className={helpHeading}>
          How can we help you today?
        </h2>
      </div>

      <div
        className={helpGrid}
        role="listbox"
        aria-label="Select a topic"
        aria-activedescendant={`help-${selectedTopic}`}
      >
        {HELP_CATEGORIES.map((category) => {
          const Icon = category.icon;
          const selected = selectedTopic === category.id;

          return (
            <button
              key={category.id}
              id={`help-${category.id}`}
              type="button"
              role="option"
              aria-selected={selected}
              data-contact="help-card"
              className={cn(helpCard, selected && helpCardActive)}
              onClick={() => {
                onSelectTopic(category.id);
                const form = document.getElementById("speak-with-us");
                form?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className={helpIcon} aria-hidden="true">
                <Icon className="h-[17px] w-[17px] stroke-[1.25]" />
              </span>
              <span>
                <span className={helpCardTitle}>{category.label}</span>
                <span className={helpCardCopy}>{category.description}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
