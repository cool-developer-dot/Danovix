"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import type {
  ProductColour,
  ProductDetail,
  ProductMediaItem,
} from "@/lib/product/constants";

import { AILuxuryStylist } from "./AILuxuryStylist";
import { BrandFilm } from "./BrandFilm";
import { ColourExperience } from "./ColourExperience";
import { CompleteTheLook } from "./CompleteTheLook";
import { CraftsmanshipJourney } from "./CraftsmanshipJourney";
import { CustomerStories } from "./CustomerStories";
import { DimensionsCapacity } from "./DimensionsCapacity";
import { EditorialStory } from "./EditorialStory";
import { LifestyleGallery } from "./LifestyleGallery";
import { MaterialsFeatures } from "./MaterialsFeatures";
import { Product3DExperience } from "./Product3DExperience";
import { useProductAnimations } from "./ProductAnimations";
import { ProductHero } from "./ProductHero";
import { ProductMediaExperience } from "./ProductMediaExperience";
import { RecentlyViewed } from "./RecentlyViewed";
import { ShippingTrust } from "./ShippingTrust";
import { productMain, productPage } from "./product.styles";

type ProductExperienceProps = {
  detail: ProductDetail;
};

export function ProductExperience({ detail }: ProductExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeMediaId, setActiveMediaId] = useState(detail.media[0]?.id ?? "front");
  const [activeColourId, setActiveColourId] = useState(
    detail.colours[0]?.id ?? detail.product.id,
  );
  const [quantity, setQuantity] = useState(1);
  const [reserved, setReserved] = useState(false);
  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useProductAnimations(rootRef);

  const activeColour = useMemo(
    () =>
      detail.colours.find((colour) => colour.id === activeColourId) ??
      detail.colours[0],
    [detail.colours, activeColourId],
  );

  const viewerImage = activeColour?.imageSrc ?? detail.product.imageSrc;

  useEffect(() => {
    try {
      const key = "danovix-recently-viewed";
      const raw = window.localStorage.getItem(key);
      const prev: string[] = raw ? (JSON.parse(raw) as string[]) : [];
      const next = [
        detail.slug,
        ...prev.filter((id) => id !== detail.slug),
      ].slice(0, 6);
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // ignore storage failures
    }
  }, [detail.slug]);

  const flashStatus = useCallback((message: string) => {
    setStatus(message);
    window.setTimeout(() => setStatus(null), 2400);
  }, []);

  const handleMediaSelect = useCallback((item: ProductMediaItem) => {
    setActiveMediaId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleColourSelect = useCallback((colour: ProductColour) => {
    setActiveColourId(colour.id);
    setActiveMediaId("front");
  }, []);

  const scrollTo3d = useCallback(() => {
    document.getElementById("product-3d")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: detail.product.name,
          text: detail.editorialSubtitle,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        flashStatus("Link copied to clipboard");
      }
    } catch {
      flashStatus("Unable to share just now");
    }
  }, [detail.editorialSubtitle, detail.product.name, flashStatus]);

  return (
    <div ref={rootRef} className={productPage}>
      <HeroNavbar />

      <main id="main-content" className={productMain}>
        <ProductHero
          detail={detail}
          activeMediaId={activeMediaId}
          activeColourId={activeColourId}
          quantity={quantity}
          reserved={reserved}
          saved={saved}
          compared={compared}
          onMediaSelect={handleMediaSelect}
          onColourSelect={handleColourSelect}
          onQuantityChange={setQuantity}
          onReserve={() => {
            setReserved((value) => !value);
            flashStatus(
              reserved
                ? "Removed from reserved collection"
                : "Reserved — your piece awaits",
            );
          }}
          onSave={() => {
            setSaved((value) => !value);
            flashStatus(
              saved
                ? "Removed from private collection"
                : "Saved to private collection",
            );
          }}
          onCompare={() => {
            setCompared((value) => !value);
            flashStatus(
              compared ? "Removed from comparison" : "Added to comparison",
            );
          }}
          onShare={() => void handleShare()}
          onScrollTo3d={scrollTo3d}
        />

        <ProductMediaExperience
          media={detail.media}
          productName={detail.product.name}
          onSelect={handleMediaSelect}
        />

        <Product3DExperience
          imageSrc={viewerImage}
          productName={detail.product.name}
        />

        <EditorialStory detail={detail} />

        <CraftsmanshipJourney steps={detail.craftSteps} />

        <MaterialsFeatures features={detail.features} />

        <LifestyleGallery shots={detail.lifestyle} />

        <BrandFilm
          chapters={detail.filmChapters}
          productName={detail.product.name}
        />

        <DimensionsCapacity
          dimensions={detail.dimensions}
          capacity={detail.capacity}
          imageSrc={viewerImage}
          imageAlt={detail.product.imageAlt}
        />

        <ColourExperience
          colours={detail.colours}
          activeId={activeColourId}
          onSelect={handleColourSelect}
        />

        <CompleteTheLook items={detail.completeTheLook} />

        <CustomerStories
          productName={detail.product.name}
          rating={detail.rating}
          reviewCount={detail.reviewCount}
          onReserve={() => {
            setReserved(true);
            flashStatus("Reserved — your piece awaits");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        <AILuxuryStylist
          productName={detail.product.name}
          onAsk={(prompt) =>
            flashStatus(prompt ? `Stylist noted: ${prompt}` : "Stylist ready")
          }
        />

        <ShippingTrust />

        <RecentlyViewed ids={detail.recentlyViewed} />

        {status ? (
          <p className="sr-only" role="status" aria-live="polite">
            {status}
          </p>
        ) : null}

        <FooterDeferred />
      </main>
    </div>
  );
}
