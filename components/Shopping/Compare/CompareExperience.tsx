"use client";

import {
  Box,
  Briefcase,
  BookOpen,
  Droplets,
  Laptop,
  Phone,
  Sparkles,
  Tablet,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";

import {
  COMPARE_DEFAULT_IDS,
  COMPARE_PAGE,
  CRAFT_ROWS,
} from "@/lib/shopping/experiences";
import {
  buildAiCompareNote,
  CAPACITY_LABELS,
  COMPARE_PIECES,
  getComparePieces,
  type CapacityItem,
  type ComparePiece,
} from "@/lib/shopping/pieces";
import { cn } from "@/lib/cn";

import {
  btnGhost,
  btnPrimary,
  chip,
  chipActive,
  chipIdle,
  darkSection,
  glassCard,
  sectionDescription,
  sectionHeader,
  sectionHeading,
  shoppingEyebrow,
  shoppingInner,
  softChip,
  warmBg,
  warmDescription,
  warmGlassCard,
  warmHeading,
  warmNoise,
  warmSection,
} from "../shopping.styles";
import { ShoppingHero } from "../shared/ShoppingHero";
import { ShoppingShell } from "../shared/ShoppingShell";
import { useShoppingAnimations } from "../shared/useShoppingAnimations";

const CAPACITY_ICONS: Record<
  CapacityItem,
  typeof Laptop
> = {
  laptop: Laptop,
  tablet: Tablet,
  phone: Phone,
  wallet: Wallet,
  bottle: Droplets,
  passport: BookOpen,
  cosmetics: Sparkles,
  notebook: BookOpen,
};

function PiecePanel({ piece }: { piece: ComparePiece }) {
  return (
    <article data-shopping="card" className={`${glassCard} p-4 sm:p-5`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
        <Image
          src={piece.imageSrc}
          alt={piece.imageAlt}
          fill
          sizes="(max-width: 768px) 85vw, 28vw"
          className="object-cover"
        />
      </div>
      <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-[16px]">
        <Image
          src={piece.lifestyleSrc}
          alt={`${piece.name} lifestyle`}
          fill
          sizes="(max-width: 768px) 85vw, 28vw"
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex min-h-11 items-center justify-center rounded-[14px] border border-dashed border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)]">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(214_196_158/0.8)]">
          {COMPARE_PAGE.preview}
        </span>
      </div>
      <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]">
        {piece.collection}
      </p>
      <h3 className="mt-2 font-serif text-[1.45rem] font-light text-[rgb(248_247_244)]">
        {piece.name}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-[rgb(248_247_244/0.55)]">
        {piece.subtitle}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="font-serif text-[1.2rem] font-light text-[rgb(248_247_244)]">
          {piece.priceLabel}
        </p>
        <span className={softChip}>
          {piece.available ? COMPARE_PAGE.available : COMPARE_PAGE.reserved}
        </span>
      </div>
      <Link href={piece.href} className={`${btnGhost} mt-5 w-full`}>
        View Piece
      </Link>
    </article>
  );
}

export function CompareExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useShoppingAnimations(rootRef);

  const [selected, setSelected] = useState<string[]>(() => [
    ...COMPARE_DEFAULT_IDS,
  ]);

  const toggle = useCallback((id: string) => {
    setSelected((current) => {
      if (current.includes(id)) {
        if (current.length <= 2) return current;
        return current.filter((item) => item !== id);
      }
      if (current.length >= 4) return current;
      return [...current, id];
    });
  }, []);

  const pieces = useMemo(() => getComparePieces(selected), [selected]);
  const aiNote = useMemo(() => buildAiCompareNote(pieces), [pieces]);

  return (
    <ShoppingShell rootRef={rootRef}>
      <ShoppingHero
        eyebrow={COMPARE_PAGE.eyebrow}
        heading={COMPARE_PAGE.heading}
        description={COMPARE_PAGE.description}
        headingId="compare-heading"
      />

      <section className={darkSection} aria-label="Select pieces">
        <div className={shoppingInner}>
          <p className={`${shoppingEyebrow} text-center`}>
            {COMPARE_PAGE.selectHint}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {COMPARE_PIECES.map((piece) => {
              const active = selected.includes(piece.id);
              return (
                <button
                  key={piece.id}
                  type="button"
                  className={cn(chip, active ? chipActive : chipIdle)}
                  aria-pressed={active}
                  onClick={() => toggle(piece.id)}
                >
                  {piece.name.replace(/^The\s+/, "")}
                </button>
              );
            })}
          </div>

          <div
            className={cn(
              "mt-10 grid grid-cols-1 gap-5",
              pieces.length === 2 && "md:grid-cols-2",
              pieces.length === 3 && "md:grid-cols-3",
              pieces.length >= 4 && "md:grid-cols-2 xl:grid-cols-4",
            )}
          >
            {pieces.map((piece) => (
              <PiecePanel key={piece.id} piece={piece} />
            ))}
          </div>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="craft-heading">
        <div className={shoppingInner}>
          <div className={sectionHeader}>
            <h2 id="craft-heading" className={sectionHeading}>
              {COMPARE_PAGE.craftHeading}
            </h2>
            <p className={sectionDescription}>
              {COMPARE_PAGE.craftDescription}
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {CRAFT_ROWS.map((row) => (
              <div
                key={row.id}
                data-shopping="card"
                className={`${glassCard} p-5`}
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[rgb(214_196_158)]">
                  {row.label}
                </p>
                <div
                  className={cn(
                    "mt-4 grid grid-cols-1 gap-3",
                    pieces.length === 2 && "sm:grid-cols-2",
                    pieces.length === 3 && "sm:grid-cols-3",
                    pieces.length >= 4 && "sm:grid-cols-2 lg:grid-cols-4",
                  )}
                >
                  {pieces.map((piece) => (
                    <div
                      key={`${row.id}-${piece.id}`}
                      className="rounded-[14px] border border-[rgb(248_247_244/0.08)] bg-[rgb(248_247_244/0.03)] px-4 py-3"
                    >
                      <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-[rgb(248_247_244/0.4)]">
                        {piece.name.replace(/^The\s+/, "")}
                      </p>
                      <p className="mt-1.5 text-[14px] text-[rgb(248_247_244/0.82)]">
                        {String(piece[row.key])}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={warmSection} aria-labelledby="capacity-heading">
        <div className={warmBg} aria-hidden="true" />
        <div className={warmNoise} aria-hidden="true" />
        <div className={shoppingInner}>
          <div className={sectionHeader}>
            <h2 id="capacity-heading" className={warmHeading}>
              {COMPARE_PAGE.capacityHeading}
            </h2>
            <p className={warmDescription}>
              {COMPARE_PAGE.capacityDescription}
            </p>
          </div>

          <div
            className={cn(
              "mt-10 grid grid-cols-1 gap-5",
              pieces.length >= 2 && "md:grid-cols-2",
              pieces.length >= 3 && "lg:grid-cols-3",
            )}
          >
            {pieces.map((piece) => (
              <article
                key={piece.id}
                data-shopping="card"
                className={`${warmGlassCard} p-6`}
              >
                <h3 className="font-serif text-[1.35rem] font-light text-[#1a1a1a]">
                  {piece.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {piece.capacity.map((item) => {
                    const Icon = CAPACITY_ICONS[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-[rgb(17_17_17/0.08)] bg-[rgb(248_247_244/0.75)] px-3 py-2 text-[12px] text-[rgb(26_26_26/0.7)]"
                      >
                        <Icon
                          className="h-3.5 w-3.5 text-[rgb(168_138_78)]"
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                        {CAPACITY_LABELS[item]}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <h2 className={warmHeading}>{COMPARE_PAGE.lifestyleHeading}</h2>
            <p className={warmDescription}>
              {COMPARE_PAGE.lifestyleDescription}
            </p>
          </div>

          <div
            className={cn(
              "mt-10 grid grid-cols-1 gap-5",
              pieces.length >= 2 && "md:grid-cols-2",
              pieces.length >= 3 && "lg:grid-cols-3",
            )}
          >
            {pieces.map((piece) => (
              <article
                key={`life-${piece.id}`}
                data-shopping="card"
                className={`${warmGlassCard} p-6`}
              >
                <div className="flex items-center gap-2">
                  <Briefcase
                    className="h-4 w-4 text-[rgb(168_138_78)]"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#1a1a1a]">
                    {piece.name.replace(/^The\s+/, "")}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {piece.lifestyles.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgb(198_161_91/0.35)] bg-[rgb(198_161_91/0.1)] px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.16em] text-[rgb(140_112_58)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="ai-compare-heading">
        <div className={shoppingInner}>
          <article
            data-shopping="card"
            className={`${glassCard} mx-auto max-w-[820px] p-6 sm:p-8 lg:p-10`}
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgb(198_161_91/0.4)] bg-[rgb(198_161_91/0.1)] text-[rgb(214_196_158)]">
                <Sparkles className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>
              <div>
                <p className={shoppingEyebrow}>{COMPARE_PAGE.aiHeading}</p>
                <h2
                  id="ai-compare-heading"
                  className="mt-3 font-serif text-[clamp(1.5rem,3.5vw,2rem)] font-light text-[rgb(248_247_244)]"
                >
                  A considered recommendation
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.62)]">
                  {aiNote}
                </p>
              </div>
            </div>
          </article>

          <div className="mt-16 text-center">
            <Box
              className="mx-auto h-6 w-6 text-[rgb(214_196_158)]"
              strokeWidth={1.2}
              aria-hidden="true"
            />
            <h2 className={`${sectionHeading} mt-4`}>
              {COMPARE_PAGE.ctaHeading}
            </h2>
            <p className={sectionDescription}>{COMPARE_PAGE.ctaDescription}</p>
            <Link href="/stylist" className={`${btnPrimary} mt-8`}>
              {COMPARE_PAGE.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </ShoppingShell>
  );
}
