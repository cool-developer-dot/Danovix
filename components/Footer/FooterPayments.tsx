import type { FooterPaymentMethod } from "@/lib/footer/constants";
import { FOOTER_PAYMENTS } from "@/lib/footer/constants";
import { cn } from "@/lib/cn";

import { footerPaymentBadge, footerPayments } from "./footer.styles";

function AppleMark() {
  return (
    <svg
      viewBox="0 0 17 20"
      className="h-[14px] w-auto shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.9 10.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.7.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.5 3.3 2.5 1.3 0 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.2-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.7l.2-.6ZM11.6 3.3c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.4-.6 3-1.6Z" />
    </svg>
  );
}

function MastercardMark() {
  return (
    <svg
      viewBox="0 0 28 18"
      className="h-[12px] w-auto shrink-0"
      aria-hidden="true"
    >
      <circle cx="10" cy="9" r="7.5" fill="currentColor" opacity="0.95" />
      <circle cx="18" cy="9" r="7.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function PaymentMark({
  network,
}: {
  network: FooterPaymentMethod["network"];
}) {
  switch (network) {
    case "apple-pay":
      return (
        <span className="inline-flex items-center gap-1">
          <AppleMark />
          <span className="font-sans text-[11px] font-medium tracking-[-0.02em]">
            Pay
          </span>
        </span>
      );
    case "visa":
      return (
        <span className="font-sans text-[12px] font-semibold italic tracking-[0.12em]">
          VISA
        </span>
      );
    case "mastercard":
      return <MastercardMark />;
    case "paypal":
      return (
        <span className="font-sans text-[11px] font-semibold tracking-[-0.01em]">
          Pay<span className="font-bold">Pal</span>
        </span>
      );
    case "stripe":
      return (
        <span className="font-sans text-[12px] font-semibold tracking-[-0.03em]">
          stripe
        </span>
      );
  }
}

export function FooterPayments() {
  return (
    <ul
      data-footer="payments"
      className={footerPayments}
      aria-label="Accepted payment methods"
    >
      {FOOTER_PAYMENTS.map((method) => (
        <li key={method.id}>
          <span
            data-footer="payment"
            className={cn(footerPaymentBadge)}
            title={method.label}
            role="img"
            aria-label={method.label}
          >
            <PaymentMark network={method.network} />
          </span>
        </li>
      ))}
    </ul>
  );
}
