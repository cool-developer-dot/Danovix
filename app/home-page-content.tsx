"use client";

import { useEffect } from "react";

import { HeroAmbientLayer } from "@/components/hero/hero-ambient-layer";
import { HeroBackground } from "@/components/hero/hero-background";
import { HeroAnimator } from "@/components/hero/HeroAnimator";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { HeroScrollIndicator } from "@/components/hero/HeroScrollIndicator";
import { HeroProductLazy } from "@/components/hero/product/HeroProductLazy";
import { ProductJourney } from "@/components/product-journey/ProductJourney";
import { CommunityLazy } from "@/components/Community/CommunityLazy";
import { ContactLazy } from "@/components/Contact/ContactLazy";
import { CraftsmanshipLazy } from "@/components/Craftsmanship/CraftsmanshipLazy";
import { FeaturedCollectionLazy } from "@/components/FeaturedCollection/FeaturedCollectionLazy";
import { FooterLazy } from "@/components/Footer/FooterLazy";
import { SignatureCollectionLazy } from "@/components/SignatureCollection/SignatureCollectionLazy";
import { BrandMarqueeLazy } from "@/components/marquee/BrandMarqueeLazy";
import { VoicesOfDanovixLazy } from "@/components/VoicesOfDanovix/VoicesOfDanovixLazy";
import { useOpeningGate } from "@/components/opening/opening-gate";
import { cn } from "@/lib/cn";
import {
  scrollToHomeSection,
  takeHomeHash,
} from "@/lib/navigation/home-hash";

/**
 * After soft-nav from another route (e.g. /wishlist → Craftsmanship),
 * scroll to the remembered section once its stable anchor is in the DOM.
 */
function useHomeHashScroll(awaitingOpening: boolean) {
  useEffect(() => {
    if (awaitingOpening) return;

    const hash = takeHomeHash();
    if (!hash) return;

    // Keep URL in sync even when App Router dropped the hash.
    if (window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, "", `/#${hash}`);
    }

    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return true;
      // Instant on first successful find avoids fighting layout/lazy mounts.
      const behavior: ScrollBehavior = attempts === 0 ? "auto" : "smooth";
      return scrollToHomeSection(hash, behavior);
    };

    if (tryScroll()) return;

    const timer = window.setInterval(() => {
      attempts += 1;
      if (tryScroll() || attempts >= 100) {
        window.clearInterval(timer);
      }
    }, 40);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [awaitingOpening]);
}

/**
 * Home composition — reads opening gate for hero timing.
 * Kept as a client boundary so animate flags stay in sync without prop drilling
 * from the server page.
 */
export function HomePageContent() {
  const { heroAnimate, awaitingOpening } = useOpeningGate();

  useHomeHashScroll(awaitingOpening);

  return (
    <>
      <main
        id="main-content"
        data-awaiting-opening={awaitingOpening ? "true" : undefined}
        className={cn(awaitingOpening && "pointer-events-none")}
      >
        {/* ONE continuous handbag — never duplicated */}
        <ProductJourney animate={heroAnimate} />

        <HeroNavbar animate={heroAnimate} />

        <HeroBackground awaitingOpening={awaitingOpening}>
          <HeroAmbientLayer />
          {/* Pedestal only — bag rendered by ProductJourney */}
          <HeroProductLazy animate={heroAnimate} />
          <HeroAnimator animate={heroAnimate}>
            <div className="relative z-20 flex h-full flex-col">
              <div className="mx-auto flex h-full w-full max-w-[1600px] flex-1 flex-col px-5 pb-[min(42vh,18rem)] pt-[clamp(5.5rem,14vh,7.5rem)] sm:px-8 sm:pb-24 lg:px-12 lg:pb-16 lg:pt-[128px] xl:px-16">
                <div className="flex flex-1 items-start lg:max-w-[52%] lg:items-center">
                  <HeroContent />
                </div>
              </div>

              <HeroScrollIndicator />
            </div>
          </HeroAnimator>
        </HeroBackground>

        <BrandMarqueeLazy />
        <SignatureCollectionLazy />
        <FeaturedCollectionLazy />
        <CraftsmanshipLazy />
        <VoicesOfDanovixLazy />
        <CommunityLazy />
        <ContactLazy />
      </main>

      <FooterLazy />
    </>
  );
}
