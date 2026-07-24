"use client";

import { Camera, Mic, Search, Sparkles, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import {
  filterSuggestions,
  NATURAL_LANGUAGE_PROMPTS,
  SEARCH_BAR,
  type SearchSuggestion,
} from "@/lib/search/constants";

import { AISearchSuggestions } from "./AISearchSuggestions";
import {
  promptChip,
  promptsRow,
  searchActionBtn,
  searchBarInner,
  searchBarRoot,
  searchConsole,
  searchConsoleActive,
  searchConsoleReflection,
  searchIconBtn,
  searchInput,
  suggestionsRoot,
  voicePulse,
} from "./search.styles";

type LuxurySearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onSuggestionSelect: (suggestion: SearchSuggestion) => void;
  onClear?: () => void;
};

export function LuxurySearchBar({
  query,
  onQueryChange,
  onSubmit,
  onSuggestionSelect,
  onClear,
}: LuxurySearchBarProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const suggestions = useMemo(() => filterSuggestions(query), [query]);
  const showSuggestions =
    focused && query.trim().length > 0 && suggestions.length > 0;

  useEffect(() => {
    if (!showSuggestions) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setFocused(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [showSuggestions]);

  return (
    <div data-search="search-bar" className={searchBarRoot}>
      <div ref={wrapRef} className={cn(searchBarInner, "relative")}>
        <form
          role="search"
          aria-label="Luxury discovery search"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(query);
            setFocused(false);
            inputRef.current?.blur();
          }}
        >
          <div className={cn(searchConsole, focused && searchConsoleActive)}>
            <span className={searchConsoleReflection} aria-hidden="true" />

            <span className={searchIconBtn} aria-hidden="true">
              <Search className="h-[18px] w-[18px] stroke-[1.25]" />
            </span>

            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              onFocus={() => setFocused(true)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setFocused(false);
                  inputRef.current?.blur();
                }
              }}
              placeholder={SEARCH_BAR.placeholder}
              aria-label={SEARCH_BAR.ariaLabel}
              aria-autocomplete="list"
              aria-controls={showSuggestions ? listboxId : undefined}
              className={searchInput}
              autoComplete="off"
              spellCheck={false}
            />

            {query ? (
              <button
                type="button"
                className={searchActionBtn}
                aria-label="Clear search"
                onClick={() => {
                  onQueryChange("");
                  onClear?.();
                  inputRef.current?.focus();
                }}
              >
                <X className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
              </button>
            ) : null}

            <button
              type="button"
              className={cn(searchActionBtn, "group/voice relative")}
              aria-label={SEARCH_BAR.voiceLabel}
              title={SEARCH_BAR.voiceLabel}
            >
              <span className={voicePulse} aria-hidden="true" />
              <Mic className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>

            <button
              type="button"
              className={searchActionBtn}
              aria-label={SEARCH_BAR.visualLabel}
              title={SEARCH_BAR.visualLabel}
            >
              <Camera className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
          </div>
        </form>

        {showSuggestions ? (
          <div className={suggestionsRoot}>
            <AISearchSuggestions
              id={listboxId}
              suggestions={suggestions}
              onSelect={(suggestion) => {
                onSuggestionSelect(suggestion);
                setFocused(false);
              }}
            />
          </div>
        ) : null}

        {!query.trim() ? (
          <div className={promptsRow} aria-label="Natural language examples">
            {NATURAL_LANGUAGE_PROMPTS.slice(0, 4).map((prompt) => (
              <button
                key={prompt}
                type="button"
                className={promptChip}
                onClick={() => {
                  onQueryChange(prompt);
                  onSubmit(prompt);
                }}
              >
                <Sparkles
                  className="mr-1.5 inline h-3 w-3 stroke-[1.25] text-[rgb(214_196_158/0.7)]"
                  aria-hidden="true"
                />
                {prompt}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
