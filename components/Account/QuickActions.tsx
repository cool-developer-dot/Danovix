"use client";

import {
  CreditCard,
  Headphones,
  Heart,
  MapPin,
  Package,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";

import { ACCOUNT_QUICK_ACTIONS } from "@/lib/account/constants";

import {
  quickActionChip,
  quickActionsBar,
  quickActionsRoot,
} from "./account.styles";

const ICONS = {
  profile: User,
  orders: Package,
  collection: Heart,
  addresses: MapPin,
  payments: CreditCard,
  concierge: Sparkles,
  support: Headphones,
} as const;

export function QuickActions() {
  return (
    <nav
      aria-label="Account quick actions"
      data-account="quick-actions"
      className={quickActionsRoot}
    >
      <div className={quickActionsBar}>
        {ACCOUNT_QUICK_ACTIONS.map((action) => {
          const Icon = ICONS[action.id];
          return (
            <Link
              key={action.id}
              href={action.href}
              className={quickActionChip}
            >
              <Icon className="h-3.5 w-3.5 stroke-[1.25]" aria-hidden="true" />
              {action.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
