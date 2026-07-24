import { TRUST_SIGNALS } from "./auth.constants";
import { trustIcon, trustItem, trustStrip } from "./signup.styles";

export function TrustStrip() {
  return (
    <ul data-signup="trust" className={trustStrip}>
      {TRUST_SIGNALS.map((signal) => {
        const Icon = signal.icon;
        return (
          <li key={signal.id} className={trustItem}>
            <Icon className={trustIcon} strokeWidth={1.5} aria-hidden="true" />
            {signal.label}
          </li>
        );
      })}
    </ul>
  );
}
