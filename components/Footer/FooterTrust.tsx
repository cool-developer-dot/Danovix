import { Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";

import { FOOTER_TRUST, type FooterTrustChip } from "@/lib/footer/constants";

import {
  footerTrust,
  footerTrustIcon,
  footerTrustItem,
  footerTrustLabel,
  footerTrustSep,
} from "./footer.styles";

const ICONS = {
  package: Package,
  "shield-check": ShieldCheck,
  truck: Truck,
  "rotate-ccw": RotateCcw,
} as const;

function TrustIcon({ icon }: { icon: FooterTrustChip["icon"] }) {
  const Icon = ICONS[icon];
  return <Icon className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />;
}

export function FooterTrust() {
  return (
    <ul data-footer="trust" className={footerTrust}>
      {FOOTER_TRUST.map((chip, index) => (
        <li key={chip.id} className="contents">
          {index > 0 ? (
            <span className={footerTrustSep} aria-hidden="true" />
          ) : null}
          <div data-footer="trust-chip" className={footerTrustItem}>
            <span className={footerTrustIcon}>
              <TrustIcon icon={chip.icon} />
            </span>
            <span className={footerTrustLabel}>{chip.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
