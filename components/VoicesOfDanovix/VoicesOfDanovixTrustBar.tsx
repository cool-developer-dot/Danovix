import { Gem, RotateCcw, ShieldCheck, Truck } from "lucide-react";

import { VOICES_TRUST_ITEMS, type TrustItem } from "@/lib/voices-of-danovix/constants";

import {
  voicesTrustBar,
  voicesTrustGlyph,
  voicesTrustIcon,
  voicesTrustIconRing,
  voicesTrustItem,
  voicesTrustLabel,
  voicesTrustList,
} from "./voices-of-danovix.styles";

const TRUST_ICONS = {
  "shield-check": ShieldCheck,
  gem: Gem,
  truck: Truck,
  "rotate-ccw": RotateCcw,
} as const;

function TrustIcon({ icon }: { icon: TrustItem["icon"] }) {
  const Icon = TRUST_ICONS[icon];
  return (
    <span className={voicesTrustGlyph}>
      <Icon className="h-[18px] w-[18px] stroke-[1.15]" aria-hidden="true" />
    </span>
  );
}

export function VoicesOfDanovixTrustBar() {
  return (
    <div data-voices="trust" className={voicesTrustBar}>
      <ul
        data-voices="trust-list"
        className={voicesTrustList}
        aria-label="Customer trust guarantees"
      >
        {VOICES_TRUST_ITEMS.map((item) => (
          <li
            key={item.id}
            data-voices="trust-item"
            className={voicesTrustItem}
          >
            <span className={voicesTrustIcon}>
              <span className={voicesTrustIconRing} aria-hidden="true" />
              <TrustIcon icon={item.icon} />
            </span>
            <span className={voicesTrustLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
