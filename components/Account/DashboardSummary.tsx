import {
  Bookmark,
  Eye,
  Heart,
  Package,
} from "lucide-react";
import Link from "next/link";

import { ACCOUNT_SUMMARY } from "@/lib/account/constants";

import {
  summaryCard,
  summaryCardGlow,
  summaryGrid,
  summaryIcon,
  summaryLabel,
  summaryRoot,
  summaryRule,
  summaryValue,
} from "./account.styles";

const ICONS = {
  collection: Bookmark,
  orders: Package,
  wishlist: Heart,
  viewed: Eye,
} as const;

export function DashboardSummary() {
  return (
    <section aria-label="Private dashboard summary" className={summaryRoot}>
      <div className={summaryGrid}>
        {ACCOUNT_SUMMARY.map((card) => {
          const Icon = ICONS[card.id as keyof typeof ICONS] ?? Bookmark;
          return (
            <Link
              key={card.id}
              href={card.href}
              data-account="stat-card"
              className={summaryCard}
            >
              <div className={summaryCardGlow} aria-hidden="true" />
              <span className={summaryIcon} aria-hidden="true">
                <Icon className="h-[18px] w-[18px] stroke-[1.15]" />
              </span>
              <p className={summaryLabel}>{card.label}</p>
              <p className={summaryValue}>{card.value}</p>
              <div className={summaryRule} aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
