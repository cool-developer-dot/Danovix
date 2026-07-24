"use client";

import { useLayoutEffect, useState } from "react";

import {
  OPENING_COLORS,
  OPENING_COMPACT_BREAKPOINT,
  OPENING_LINES_COMPACT,
  OPENING_LINES_EDITORIAL,
} from "@/lib/opening/constants";
import { cn } from "@/lib/cn";

type OpeningTextProps = {
  className?: string;
};

/** Optical kerning offsets — editorial typesetting per character */
const KERN_OFFSETS: Readonly<Record<string, string>> = {
  W: "-0.034em",
  h: "-0.008em",
  e: "-0.006em",
  r: "-0.005em",
  T: "-0.018em",
  i: "-0.014em",
  m: "-0.004em",
  l: "-0.006em",
  E: "-0.016em",
  g: "-0.003em",
  a: "-0.004em",
  n: "-0.003em",
  c: "-0.005em",
  B: "-0.012em",
  s: "-0.004em",
  ".": "-0.02em",
};

function getKernStyle(character: string, index: number, word: string) {
  const offset = KERN_OFFSETS[character];
  if (!offset) return undefined;

  const isFirst = index === 0;
  const isLast = index === word.length - 1;

  if (isFirst) {
    return { marginInlineStart: offset };
  }

  if (isLast && character === ".") {
    return { marginInlineStart: offset };
  }

  return { marginInlineStart: `calc(${offset} * 0.55)` };
}

function InkWord({ word }: { word: string }) {
  return (
    <span className="opening-ink-word">
      {word.split("").map((character, index) => (
        <span
          key={`${word}-${index}`}
          data-opening="ink-char"
          className="opening-ink-char"
          style={{
            color: OPENING_COLORS.ivoryMuted,
            ...getKernStyle(character, index, word),
          }}
        >
          {character}
        </span>
      ))}
    </span>
  );
}

function InkLine({
  words,
  className,
}: {
  words: readonly string[];
  className?: string;
}) {
  return (
    <span className={cn("opening-text-line", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="opening-ink-word-group">
          <InkWord word={word} />
        </span>
      ))}
    </span>
  );
}

/**
 * Resolve compact vs editorial layout once in useLayoutEffect before the
 * opening GSAP timeline captures ink characters.
 *
 * Previous useSyncExternalStore path hydrated as editorial (server snapshot),
 * then remounted compact chars on mobile after the timeline had already
 * bound the old nodes — leaving visible mobile text stuck at ivoryMuted.
 */
export function OpeningText({ className }: OpeningTextProps) {
  const [isCompact, setIsCompact] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    // Resolve layout before GSAP binds ink nodes. Must stay layout-phase so
    // compact vs editorial characters mount once — not after timeline capture.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional pre-paint media resolve
    setIsCompact(
      window.matchMedia(`(max-width: ${OPENING_COMPACT_BREAKPOINT}px)`).matches,
    );
  }, []);

  if (isCompact === null) {
    return (
      <div
        data-opening="text-wrap"
        className={cn("opening-text-wrap relative z-[2]", className)}
        aria-hidden="true"
      />
    );
  }

  const lines = isCompact ? OPENING_LINES_COMPACT : OPENING_LINES_EDITORIAL;

  return (
    <div
      data-opening="text-wrap"
      className={cn("opening-text-wrap relative z-[2]", className)}
    >
      <p
        data-opening="text"
        className="opening-text-block relative font-serif font-light"
      >
        {lines.map((words, index) => (
          <InkLine
            key={`${isCompact ? "compact" : "editorial"}-${index}`}
            words={words}
            className={index > 0 ? "opening-text-line--follow" : undefined}
          />
        ))}
      </p>
    </div>
  );
}
