"use client";

import { Mic, Search, Sparkles, X } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { COLLECTION_SEARCH } from "@/lib/collection/constants";

import {
  searchActionBtn,
  searchActionLabel,
  searchConsole,
  searchConsoleActive,
  searchConsoleReflection,
  searchIconBtn,
  searchInner,
  searchInput,
  searchRoot,
  voicePulse,
} from "./collection.styles";

type CollectionSearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onAskAi?: () => void;
};

export function CollectionSearch({
  query,
  onQueryChange,
  onAskAi,
}: CollectionSearchProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div data-collection="search" className={searchRoot}>
      <div className={searchInner}>
        <form
          role="search"
          aria-label="Collection search"
          onSubmit={(event) => {
            event.preventDefault();
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
              onBlur={() => setFocused(false)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setFocused(false);
                  inputRef.current?.blur();
                }
              }}
              placeholder={COLLECTION_SEARCH.placeholder}
              aria-label={COLLECTION_SEARCH.ariaLabel}
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
                  inputRef.current?.focus();
                }}
              >
                <X className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
              </button>
            ) : null}

            <button
              type="button"
              className={searchActionBtn}
              aria-label={COLLECTION_SEARCH.aiHint}
              onClick={onAskAi}
            >
              <Sparkles className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
              <span className={searchActionLabel}>
                {COLLECTION_SEARCH.aiHint}
              </span>
            </button>

            <button
              type="button"
              className={cn(searchActionBtn, "group/voice relative")}
              aria-label={COLLECTION_SEARCH.voiceLabel}
              disabled
              title={COLLECTION_SEARCH.voiceLabel}
            >
              <span className={voicePulse} aria-hidden="true" />
              <Mic className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
