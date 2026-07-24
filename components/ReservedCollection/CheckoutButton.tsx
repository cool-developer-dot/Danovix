"use client";

import { cn } from "@/lib/cn";
import { CHECKOUT } from "@/lib/reserved/constants";

import { checkoutButton, checkoutSheen } from "./reserved.styles";

type CheckoutButtonProps = {
  checkingOut: boolean;
  onCheckout: () => void;
  className?: string;
};

export function CheckoutButton({
  checkingOut,
  onCheckout,
  className,
}: CheckoutButtonProps) {
  return (
    <button
      type="button"
      data-reserved="checkout-btn"
      className={cn(checkoutButton, className)}
      onClick={onCheckout}
      disabled={checkingOut}
      aria-busy={checkingOut}
    >
      <span className={checkoutSheen} aria-hidden="true" />
      <span className="relative z-[1]">
        {checkingOut ? CHECKOUT.preparing : CHECKOUT.label}
      </span>
      {!checkingOut ? (
        <span className="relative z-[1]" aria-hidden="true">
          →
        </span>
      ) : null}
    </button>
  );
}
