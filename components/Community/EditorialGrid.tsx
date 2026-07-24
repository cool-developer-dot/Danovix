import { COMMUNITY_ITEMS } from "@/lib/community/constants";
import type { EditorialItem } from "@/lib/community/constants";
import { cn } from "@/lib/cn";

import { LifestyleCard } from "./LifestyleCard";
import { QuoteCard } from "./QuoteCard";
import { StoryCard } from "./StoryCard";
import {
  communityCellHero,
  communityCellQuote,
  communityCellQuoteWide,
  communityCellSquare,
  communityCellStory,
  communityCellTall,
  communityCellWide,
  communityGrid,
} from "./community.styles";

/**
 * Dense editorial placement — every row fills 12 columns.
 * No orphan empty tracks beside quotes/stories.
 */
const CELL_CLASS: Record<string, string> = {
  "soho-walk": communityCellHero,
  "cafe-moment": communityCellTall,
  "quote-luxury": communityCellQuote,
  "gallery-pause": communityCellWide,
  "story-emily": communityCellStory,
  "leather-detail": communityCellSquare,
  "quote-journey": communityCellQuoteWide,
  "airport-lounge": communityCellWide,
  "story-sophia": communityCellStory,
  /* Pair: image 6 + quote 6 */
  "brunch-table": "md:col-span-6",
  "quote-confidence": "md:col-span-6 md:flex md:items-center md:justify-center",
  /* Pair: image 6 + story 6 */
  "hotel-corridor": "md:col-span-6",
  "story-charlotte": "md:col-span-6 md:flex md:items-center",
  /* Closing pair — two editorial frames */
  "hands-holding": "md:col-span-6",
  "stitch-detail": "md:col-span-6",
};

function renderItem(item: EditorialItem) {
  const cellClass = CELL_CLASS[item.id] ?? "md:col-span-6";

  if (item.kind === "lifestyle") {
    return (
      <div key={item.id} className={cn(cellClass)}>
        <LifestyleCard item={item} />
      </div>
    );
  }

  if (item.kind === "quote") {
    return (
      <div key={item.id} className={cn(cellClass)}>
        <QuoteCard item={item} />
      </div>
    );
  }

  return (
    <div key={item.id} className={cn(cellClass)}>
      <StoryCard item={item} />
    </div>
  );
}

export function EditorialGrid() {
  return (
    <div data-community="grid" className={communityGrid}>
      {COMMUNITY_ITEMS.map((item) => renderItem(item))}
    </div>
  );
}
