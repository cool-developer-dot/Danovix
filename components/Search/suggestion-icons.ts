import {
  Briefcase,
  Gift,
  Moon,
  Plane,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import type { SearchSuggestion } from "@/lib/search/constants";

export function suggestionIconName(
  icon: SearchSuggestion["icon"],
): LucideIcon {
  switch (icon) {
    case "office":
      return Briefcase;
    case "travel":
      return Plane;
    case "evening":
      return Moon;
    case "gift":
      return Gift;
    case "new":
      return Sparkles;
    case "crossbody":
      return Search;
    case "collection":
      return Sparkles;
    case "leather":
    default:
      return Sparkles;
  }
}
