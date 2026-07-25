"use client";

import {
  BadgeCheck,
  ChevronDown,
  Heart,
  Lock,
  Package,
  RotateCcw,
  Shield,
  Truck,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/cn";
import { PRODUCT_TRUST, type TrustItem } from "@/lib/product/constants";

import {
  darkSection,
  eyebrow,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
  trustDetail,
  trustItem,
  trustList,
  trustSummary,
  trustTitle,
  trustTrigger,
} from "./product.styles";

const ICONS = {
  truck: Truck,
  package: Package,
  shield: Shield,
  rotate: RotateCcw,
  lock: Lock,
  heart: Heart,
  badge: BadgeCheck,
} as const;

export function ShippingTrust() {
  const [openId, setOpenId] = useState<string | null>(PRODUCT_TRUST[0]?.id ?? null);

  return (
    <section
      aria-labelledby="product-trust-heading"
      data-product="trust"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Care & Assurance</p>
          <h2 id="product-trust-heading" className={sectionHeading}>
            Shipping, Warranty & Authentication.
          </h2>
          <p className={sectionBody}>
            The quiet promises that make reserving a piece feel as assured as
            collecting it in person.
          </p>
        </div>

        <div className={trustList}>
          {PRODUCT_TRUST.map((item) => (
            <TrustRow
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() =>
                setOpenId((current) => (current === item.id ? null : item.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustRow({
  item,
  open,
  onToggle,
}: {
  item: TrustItem;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = ICONS[item.icon];
  const panelId = `trust-panel-${item.id}`;

  return (
    <div className={trustItem}>
      <button
        type="button"
        className={trustTrigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgb(248_247_244/0.12)] text-[rgb(214_196_158)]">
            <Icon className="h-4 w-4 stroke-[1.25]" />
          </span>
          <span>
            <span className={trustTitle}>{item.title}</span>
            <span className={cn(trustSummary, "block")}>{item.summary}</span>
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 stroke-[1.5] text-[rgb(248_247_244/0.5)] transition-transform duration-400",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <div id={panelId} className={trustDetail}>
          {item.detail}
        </div>
      ) : null}
    </div>
  );
}
