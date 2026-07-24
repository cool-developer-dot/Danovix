import { Gift, Headphones, RotateCcw, ShieldCheck } from "lucide-react";

import {
  COMPLIMENTARY_SERVICES,
  type ComplimentaryService,
} from "@/lib/reserved/constants";

import {
  reservedEyebrow,
  serviceCard,
  serviceDescription,
  serviceIcon,
  serviceLabel,
  servicesGrid,
  servicesHeader,
  servicesHeading,
  servicesRoot,
} from "./reserved.styles";

const ICONS: Record<
  ComplimentaryService["icon"],
  typeof Gift
> = {
  gift: Gift,
  rotate: RotateCcw,
  shield: ShieldCheck,
  headset: Headphones,
};

export function ComplimentaryServices() {
  return (
    <section
      aria-labelledby="reserved-services-heading"
      className={servicesRoot}
      data-reserved="services-section"
    >
      <div className={servicesHeader}>
        <p data-reserved="services-eyebrow" className={reservedEyebrow}>
          Atelier Privileges
        </p>
        <h2
          id="reserved-services-heading"
          data-reserved="services-heading"
          className={servicesHeading}
        >
          Complimentary Services
        </h2>
      </div>

      <ul className={servicesGrid} role="list">
        {COMPLIMENTARY_SERVICES.map((service) => {
          const Icon = ICONS[service.icon];
          return (
            <li
              key={service.id}
              data-reserved="service-card"
              className={serviceCard}
            >
              <span className={serviceIcon} aria-hidden="true">
                <Icon className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>
              <h3 className={serviceLabel}>{service.label}</h3>
              <p className={serviceDescription}>{service.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
