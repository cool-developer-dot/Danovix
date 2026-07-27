"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";

import {
  GIFT_INCLUSIONS,
  GIFT_PAGE,
  GIFT_STEPS,
  resolveGiftRecommendation,
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

export function GiftFinderExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useShoppingAnimations(rootRef);

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [complete, setComplete] = useState(false);

  const step = GIFT_STEPS[stepIndex];
  const progress = complete
    ? 100
    : Math.round(((stepIndex + 1) / GIFT_STEPS.length) * 100);

  const select = useCallback(
    (optionId: string) => {
      if (!step) return;
      setAnswers((current) => ({ ...current, [step.id]: optionId }));
    },
    [step],
  );

  const result = useMemo(
    () => (complete ? resolveGiftRecommendation(answers) : null),
    [answers, complete],
  );

  const canContinue = Boolean(step && answers[step.id]);

  return (
    <ShoppingShell rootRef={rootRef}>
      <ShoppingHero
        eyebrow={GIFT_PAGE.eyebrow}
        heading={complete ? GIFT_PAGE.resultsHeading : GIFT_PAGE.heading}
        description={
          complete && result ? result.narrative : GIFT_PAGE.description
        }
        headingId="gift-finder-heading"
      />

      <section className={darkSection} aria-label="Gift consultation">
        <div className={shoppingInner}>
          <div className="mx-auto max-w-[720px]">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(248_247_244/0.45)]">
                {complete
                  ? "Complete"
                  : `Step ${stepIndex + 1} of ${GIFT_STEPS.length}`}
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

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {step.options.map((option) => {
                  const active = answers[step.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={cn(
                        optionCard,
                        active ? optionActive : optionIdle,
                      )}
                      aria-pressed={active}
                      onClick={() => select(option.id)}
                    >
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
                    {GIFT_PAGE.back}
                  </button>
                ) : null}
                <button
                  type="button"
                  className={btnPrimary}
                  disabled={!canContinue}
                  onClick={() => {
                    if (!canContinue) return;
                    if (stepIndex >= GIFT_STEPS.length - 1) {
                      setComplete(true);
                    } else {
                      setStepIndex((i) => i + 1);
                    }
                  }}
                >
                  {stepIndex >= GIFT_STEPS.length - 1
                    ? GIFT_PAGE.finish
                    : GIFT_PAGE.next}
                </button>
              </div>
            </div>
          ) : null}

          {complete && result ? (
            <div className="mx-auto mt-12 max-w-[960px]">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {result.products.map((product) => (
                  <article
                    key={product.id}
                    data-shopping="card"
                    className={`${glassCard} overflow-hidden`}
                  >
                    <div className="relative aspect-[4/5]">
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
                      <Link href={product.href} className={`${btnGhost} mt-5`}>
                        View Gift
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {complete ? (
        <>
          <section className={warmSection} aria-labelledby="gift-presentation">
            <div className={warmBg} aria-hidden="true" />
            <div className={warmNoise} aria-hidden="true" />
            <div className={shoppingInner}>
              <article
                data-shopping="card"
                className={`${warmGlassCard} mx-auto max-w-[720px] p-6 sm:p-10`}
              >
                <p className={`${shoppingEyebrow} !text-[rgb(168_138_78)]`}>
                  Included
                </p>
                <h2 id="gift-presentation" className={warmHeading}>
                  {GIFT_PAGE.presentationHeading}
                </h2>
                <p className={warmDescription}>
                  Every recommendation arrives as a complete gesture of care.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {GIFT_INCLUSIONS.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] text-[rgb(26_26_26/0.68)]"
                    >
                      <span className="h-1 w-1 rounded-full bg-danovix-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className={darkSection} aria-labelledby="gift-cta">
            <div className={`${shoppingInner} text-center`}>
              <h2 id="gift-cta" className={sectionHeading}>
                {GIFT_PAGE.ctaHeading}
              </h2>
              <p className={sectionDescription}>{GIFT_PAGE.ctaDescription}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className={btnGhost}
                  onClick={() => {
                    setComplete(false);
                    setStepIndex(0);
                    setAnswers({});
                  }}
                >
                  {GIFT_PAGE.restart}
                </button>
                <Link href="/stylist" className={btnPrimary}>
                  {GIFT_PAGE.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </ShoppingShell>
  );
}
