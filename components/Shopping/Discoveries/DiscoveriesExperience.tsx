"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  DISCOVERIES_PAGE,
  DISCOVERY_GROUPS,
  DISCOVERY_ITEMS,
} from "@/lib/shopping/experiences";

import {
  btnGhost,
  btnPrimary,
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

export function DiscoveriesExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useShoppingAnimations(rootRef);

  return (
    <ShoppingShell rootRef={rootRef}>
      <ShoppingHero
        eyebrow={DISCOVERIES_PAGE.eyebrow}
        heading={DISCOVERIES_PAGE.heading}
        description={DISCOVERIES_PAGE.description}
        headingId="discoveries-heading"
      />

      {DISCOVERY_GROUPS.map((group) => {
        const items = DISCOVERY_ITEMS.filter((item) => item.group === group.id);
        if (items.length === 0) return null;

        return (
          <section
            key={group.id}
            className={darkSection}
            aria-labelledby={`discovery-${group.id}`}
          >
            <div className={shoppingInner}>
              <p className={shoppingEyebrow}>{group.label}</p>
              <h2
                id={`discovery-${group.id}`}
                className={`${sectionHeading} mt-3 text-left`}
              >
                {group.label}.
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <article
                    key={`${group.id}-${item.id}`}
                    data-shopping="card"
                    className={`${glassCard} overflow-hidden`}
                  >
                    <div className="relative m-3 aspect-[4/5] overflow-hidden rounded-[18px]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 90vw, 30vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                      />
                    </div>
                    <div className="px-5 pb-6">
                      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]">
                        {item.collection}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-[rgb(248_247_244/0.55)]">
                        {item.editorial}
                      </p>
                      <p className="mt-3 text-[14px] text-[rgb(248_247_244/0.75)]">
                        {item.priceLabel}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link href={item.href} className={btnGhost}>
                          {DISCOVERIES_PAGE.actions.view}
                        </Link>
                        <Link href="/compare" className={btnGhost}>
                          {DISCOVERIES_PAGE.actions.compare}
                        </Link>
                        <Link href="/reserved" className={btnGhost}>
                          {DISCOVERIES_PAGE.actions.reserve}
                        </Link>
                        <Link href="/wishlist" className={btnGhost}>
                          {DISCOVERIES_PAGE.actions.wishlist}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className={warmSection} aria-labelledby="insight-heading">
        <div className={warmBg} aria-hidden="true" />
        <div className={warmNoise} aria-hidden="true" />
        <div className={shoppingInner}>
          <article
            data-shopping="card"
            className={`${warmGlassCard} mx-auto max-w-[720px] p-6 text-center sm:p-10`}
          >
            <p className={`${shoppingEyebrow} !text-[rgb(168_138_78)]`}>
              {DISCOVERIES_PAGE.insightHeading}
            </p>
            <h2 id="insight-heading" className={`${warmHeading} mt-4`}>
              An observation from your journey
            </h2>
            <p className={warmDescription}>{DISCOVERIES_PAGE.insight}</p>
            <Link href="/stylist" className={`${btnPrimary} mt-8`}>
              {DISCOVERIES_PAGE.insightCta}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="continue-heading">
        <div className={shoppingInner}>
          <div className={sectionHeader}>
            <h2 id="continue-heading" className={sectionHeading}>
              {DISCOVERIES_PAGE.continueHeading}
            </h2>
            <p className={sectionDescription}>
              {DISCOVERIES_PAGE.continueDescription}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {DISCOVERY_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={`cont-${item.id}`}
                href={item.href}
                data-shopping="card"
                className={`${glassCard} p-4`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[16px]">
                  <Image
                    src={item.lifestyleSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="30vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="px-2 pb-2 pt-4 text-center">
                  <h3 className="font-serif text-[1.2rem] font-light text-[rgb(248_247_244)]">
                    {item.name}
                  </h3>
                  <span className={`${softChip} mt-3`}>{item.collection}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ShoppingShell>
  );
}
