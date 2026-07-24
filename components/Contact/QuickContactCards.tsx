import { QUICK_CONTACT } from "@/lib/contact/constants";

import {
  quickCard,
  quickCardSheen,
  quickDetail,
  quickGrid,
  quickIconWrap,
  quickLabel,
  quickRoot,
  quickValue,
} from "./contact.styles";

export function QuickContactCards() {
  return (
    <div className={quickRoot}>
      <ul className={quickGrid} role="list" aria-label="Concierge contact methods">
        {QUICK_CONTACT.map((method) => {
          const Icon = method.icon;

          return (
            <li key={method.id}>
              <a
                data-contact="quick-card"
                href={method.href}
                className={quickCard}
                aria-label={`${method.label}: ${method.value}`}
              >
                <span className={quickCardSheen} aria-hidden="true" />
                <span className={quickIconWrap} aria-hidden="true">
                  <Icon className="h-[18px] w-[18px] stroke-[1.25]" />
                </span>
                <span className={quickLabel}>{method.label}</span>
                <span className={quickValue}>{method.value}</span>
                <span className={quickDetail}>{method.detail}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
