"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";

import {
  QUIZ_PAGE,
  QUIZ_STEPS,
  resolveQuizPersonality,
} from "@/lib/shopping/quiz-gift";
import { cn } from "@/lib/cn";

import {
  btnGhost,
  btnPrimary,
  darkSection,
  glassCard,
  optionActive,
  optionCard,
  optionIdle,
  progressFill,
  progressTrack,
  sectionDescription,
  sectionHeading,
  shoppingEyebrow,
  shoppingInner,
  softChip,
} from "../shopping.styles";
import { ShoppingHero } from "../shared/ShoppingHero";
import { ShoppingShell } from "../shared/ShoppingShell";
import { useShoppingAnimations } from "../shared/useShoppingAnimations";

export function StyleQuizExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useShoppingAnimations(rootRef);

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [complete, setComplete] = useState(false);

  const step = QUIZ_STEPS[stepIndex];
  const progress = complete
    ? 100
    : Math.round(((stepIndex + 1) / QUIZ_STEPS.length) * 100);

  const selected = answers[step?.id ?? ""] ?? [];

  const toggleOption = useCallback(
    (optionId: string) => {
      if (!step) return;
      setAnswers((current) => {
        const existing = current[step.id] ?? [];
        if (step.multi) {
          const next = existing.includes(optionId)
            ? existing.filter((id) => id !== optionId)
            : [...existing, optionId];
          return { ...current, [step.id]: next };
        }
        return { ...current, [step.id]: [optionId] };
      });
    },
    [step],
  );

  const canContinue = selected.length > 0;

  const result = useMemo(
    () => (complete ? resolveQuizPersonality(answers) : null),
    [answers, complete],
  );

  return (
    <ShoppingShell rootRef={rootRef}>
      <ShoppingHero
        eyebrow={QUIZ_PAGE.eyebrow}
        heading={
          complete ? QUIZ_PAGE.resultsHeading : QUIZ_PAGE.heading
        }
        description={
          complete && result
            ? result.intro
            : QUIZ_PAGE.description
        }
        headingId="style-quiz-heading"
      />

      <section className={darkSection} aria-label="Style consultation">
        <div className={shoppingInner}>
          <div className="mx-auto max-w-[720px]">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(248_247_244/0.45)]">
                {complete
                  ? "Complete"
                  : `Question ${stepIndex + 1} of ${QUIZ_STEPS.length}`}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(214_196_158)]">
                {progress}%
              </p>
            </div>
            <div className={progressTrack} aria-hidden="true">
              <div
                className={progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!complete && step ? (
            <div className="mx-auto mt-12 max-w-[820px]">
              <p className={`${shoppingEyebrow} text-center`}>{step.hint}</p>
              <h2 className={`${sectionHeading} text-center`}>
                {step.question}
              </h2>

              <div
                className={cn(
                  "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2",
                  step.id === "colour" && "sm:grid-cols-3 lg:grid-cols-4",
                )}
              >
                {step.options.map((option) => {
                  const active = selected.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={cn(
                        optionCard,
                        active ? optionActive : optionIdle,
                        option.swatch && "flex-col gap-3 py-6",
                      )}
                      aria-pressed={active}
                      onClick={() => toggleOption(option.id)}
                    >
                      {option.swatch ? (
                        <span
                          className="h-10 w-10 rounded-full border border-[rgb(248_247_244/0.2)] shadow-[inset_0_1px_0_rgb(255_255_255/0.2)]"
                          style={{ backgroundColor: option.swatch }}
                          aria-hidden="true"
                        />
                      ) : null}
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {stepIndex > 0 ? (
                  <button
                    type="button"
                    className={btnGhost}
                    onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                  >
                    {QUIZ_PAGE.back}
                  </button>
                ) : null}
                <button
                  type="button"
                  className={btnPrimary}
                  disabled={!canContinue}
                  onClick={() => {
                    if (!canContinue) return;
                    if (stepIndex >= QUIZ_STEPS.length - 1) {
                      setComplete(true);
                    } else {
                      setStepIndex((i) => i + 1);
                    }
                  }}
                >
                  {stepIndex >= QUIZ_STEPS.length - 1
                    ? QUIZ_PAGE.finish
                    : QUIZ_PAGE.next}
                </button>
              </div>
            </div>
          ) : null}

          {complete && result ? (
            <div className="mx-auto mt-12 max-w-[960px]">
              <article
                data-shopping="card"
                className={`${glassCard} mx-auto max-w-[560px] p-6 text-center sm:p-8`}
              >
                <p className={shoppingEyebrow}>{QUIZ_PAGE.personalityLabel}</p>
                <h2 className="mt-4 font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-light text-[rgb(248_247_244)]">
                  {result.personality}
                </h2>
                <p className={`${sectionDescription} mx-auto`}>
                  {QUIZ_PAGE.introPrefix} {result.personality.toLowerCase()}{" "}
                  edit — ready to explore.
                </p>
              </article>

              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                {result.products.map((product) => (
                  <article
                    key={product.id}
                    data-shopping="card"
                    className={`${glassCard} overflow-hidden`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 90vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <span className={softChip}>{product.collection}</span>
                      <h3 className="mt-3 font-serif text-[1.3rem] font-light text-[rgb(248_247_244)]">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-[14px] text-[rgb(248_247_244/0.7)]">
                        {product.priceLabel}
                      </p>
                      <Link
                        href={product.href}
                        className={`${btnGhost} mt-5`}
                      >
                        View Piece
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className={btnGhost}
                  onClick={() => {
                    setComplete(false);
                    setStepIndex(0);
                    setAnswers({});
                  }}
                >
                  {QUIZ_PAGE.restart}
                </button>
                <Link href="/stylist" className={btnPrimary}>
                  Meet Your Stylist
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </ShoppingShell>
  );
}
