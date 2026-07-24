"use client";

import type { SearchSuggestion } from "@/lib/search/constants";

import {
  suggestionCard,
  suggestionDescription,
  suggestionIcon,
  suggestionTitle,
  suggestionsPanel,
} from "./search.styles";
import { suggestionIconName } from "./suggestion-icons";

type AISearchSuggestionsProps = {
  id: string;
  suggestions: readonly SearchSuggestion[];
  onSelect: (suggestion: SearchSuggestion) => void;
};

export function AISearchSuggestions({
  id,
  suggestions,
  onSelect,
}: AISearchSuggestionsProps) {
  return (
    <div
      id={id}
      role="listbox"
      aria-label="Discovery suggestions"
      className={suggestionsPanel}
    >
      {suggestions.map((suggestion, index) => {
        const Icon = suggestionIconName(suggestion.icon);
        return (
          <button
            key={suggestion.id}
            type="button"
            role="option"
            aria-selected="false"
            data-search="suggestion"
            style={{ animationDelay: `${index * 45}ms` }}
            className={suggestionCard}
            onClick={() => onSelect(suggestion)}
          >
            <span className={suggestionIcon} aria-hidden="true">
              <Icon className="h-4 w-4 stroke-[1.25]" />
            </span>
            <span>
              <span className={suggestionTitle}>{suggestion.title}</span>
              <span className={`block ${suggestionDescription}`}>
                {suggestion.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
