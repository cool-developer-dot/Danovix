import type { StoryItem } from "@/lib/community/constants";
import { cn } from "@/lib/cn";

import {
  storyAvatar,
  storyCard,
  storyHeader,
  storyIdentity,
  storyLocation,
  storyName,
  storyQuote,
  storyRule,
} from "./community.styles";

type StoryCardProps = {
  item: StoryItem;
  className?: string;
};

export function StoryCard({ item, className }: StoryCardProps) {
  return (
    <article
      data-community="card"
      data-reveal={item.reveal}
      className={cn(storyCard, className)}
    >
      <div className={storyHeader}>
        <div
          className={cn(
            storyAvatar,
            "flex items-center justify-center bg-[rgb(198_161_91/0.12)]",
            "font-serif text-[clamp(0.95rem,2.4vw,1.1rem)] font-light text-[rgb(168_138_78)]",
          )}
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div className={storyIdentity}>
          <p className={storyName}>{item.name}</p>
          <p className={storyLocation}>{item.location}</p>
        </div>
      </div>

      <p className={storyQuote}>“{item.quote}”</p>
      <div className={storyRule} aria-hidden="true" />
    </article>
  );
}
