"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { CheckoutLoadingProgress } from "@/components/Experience/Skeletons";
import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import {
  CHECKOUT,
  getPieceCount,
  RESERVED_ITEMS,
  type ReservedItem,
} from "@/lib/reserved/constants";

import { AIShoppingConcierge } from "./AIShoppingConcierge";
import { CheckoutButton } from "./CheckoutButton";
import { CompleteCollection } from "./CompleteCollection";
import { ComplimentaryServices } from "./ComplimentaryServices";
import { CraftsmanshipTimeline } from "./CraftsmanshipTimeline";
import { OrderSummary } from "./OrderSummary";
import { useReservedAnimations } from "./ReservedAnimations";
import { ReservedHero } from "./ReservedHero";
import { ReservedProductCard } from "./ReservedProductCard";
import {
  checkoutMobileBar,
  checkoutVeil,
  checkoutVeilInner,
  collectionAside,
  collectionAsideSticky,
  collectionInner,
  collectionMain,
  collectionMobileRail,
  collectionRoot,
  reservedMain,
  reservedPage,
} from "./reserved.styles";
import {
  ReservedEmptyState,
  TrustExperience,
} from "./TrustExperience";

const CHECKOUT_STEP_MS = 700;

export function ReservedExperience() {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const checkoutTimer = useRef<number | null>(null);
  const stepTimer = useRef<number | null>(null);
  const [items, setItems] = useState<ReservedItem[]>(() =>
    RESERVED_ITEMS.map((item) => ({ ...item, chips: [...item.chips] })),
  );
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useReservedAnimations(rootRef);

  useEffect(() => {
    return () => {
      if (checkoutTimer.current != null) {
        window.clearTimeout(checkoutTimer.current);
      }
      if (stepTimer.current != null) {
        window.clearInterval(stepTimer.current);
      }
    };
  }, []);

  const handleQuantityChange = useCallback((id: string, quantity: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const handleRemove = useCallback((id: string) => {
    setItems((current) => {
      const removed = current.find((item) => item.id === id);
      if (removed) {
        setStatusMessage(
          `${removed.name} removed from your reserved collection.`,
        );
      }
      return current.filter((item) => item.id !== id);
    });
  }, []);

  const handleMoveToPrivate = useCallback((id: string) => {
    setItems((current) => {
      const moved = current.find((item) => item.id === id);
      if (moved) {
        setStatusMessage(
          `${moved.name} moved to your Private Collection.`,
        );
      }
      return current.filter((item) => item.id !== id);
    });
  }, []);

  const handleCheckout = useCallback(() => {
    if (checkingOut || items.length === 0) return;
    setCheckingOut(true);
    setCheckoutStep(0);
    setStatusMessage(CHECKOUT.steps[0]);

    if (stepTimer.current != null) {
      window.clearInterval(stepTimer.current);
    }
    if (checkoutTimer.current != null) {
      window.clearTimeout(checkoutTimer.current);
    }

    let step = 0;
    stepTimer.current = window.setInterval(() => {
      step += 1;
      if (step >= CHECKOUT.steps.length) {
        if (stepTimer.current != null) {
          window.clearInterval(stepTimer.current);
          stepTimer.current = null;
        }
        return;
      }
      setCheckoutStep(step);
      setStatusMessage(CHECKOUT.steps[step]);
    }, CHECKOUT_STEP_MS);

    checkoutTimer.current = window.setTimeout(() => {
      checkoutTimer.current = null;
      if (stepTimer.current != null) {
        window.clearInterval(stepTimer.current);
        stepTimer.current = null;
      }
      setItems([]);
      setCheckingOut(false);
      router.push("/success/order");
    }, CHECKOUT.steps.length * CHECKOUT_STEP_MS + 400);
  }, [checkingOut, items.length, router]);

  const pieceCount = getPieceCount(items);
  const hasItems = items.length > 0;

  return (
    <div ref={rootRef} className={reservedPage}>
      <HeroNavbar />

      <main
        id="main-content"
        className={
          hasItems
            ? `${reservedMain} pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0`
            : reservedMain
        }
      >
        <ReservedHero count={pieceCount} />

        {hasItems ? (
          <>
            <section
              aria-label="Reserved pieces"
              className={collectionRoot}
            >
              <div className={collectionInner}>
                <div className={collectionMain}>
                  <div className={collectionMobileRail}>
                    {items.map((item, index) => (
                      <ReservedProductCard
                        key={item.id}
                        item={item}
                        priority={index === 0}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                        onMoveToPrivate={handleMoveToPrivate}
                      />
                    ))}
                  </div>
                </div>

                <div className={collectionAside}>
                  <div className={collectionAsideSticky}>
                    <OrderSummary
                      items={items}
                      checkingOut={checkingOut}
                      onCheckout={handleCheckout}
                    />
                  </div>
                </div>
              </div>
            </section>

            <CraftsmanshipTimeline />
            <ComplimentaryServices />
            <AIShoppingConcierge />
            <CompleteCollection />
            <TrustExperience />
          </>
        ) : (
          <ReservedEmptyState />
        )}

        <FooterDeferred />
      </main>

      {hasItems ? (
        <div className={checkoutMobileBar}>
          <CheckoutButton
            checkingOut={checkingOut}
            onCheckout={handleCheckout}
            className="!mt-0"
          />
        </div>
      ) : null}

      {checkingOut ? (
        <div
          className={checkoutVeil}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="reserved-checkout-preparing"
        >
          <div className={checkoutVeilInner}>
            <div id="reserved-checkout-preparing">
              <CheckoutLoadingProgress
                step={checkoutStep}
                steps={CHECKOUT.steps}
              />
            </div>
          </div>
        </div>
      ) : null}

      {statusMessage ? (
        <p className="sr-only" role="status" aria-live="polite">
          {statusMessage}
        </p>
      ) : null}
    </div>
  );
}
