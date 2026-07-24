import { MEET_CONCIERGE } from "@/lib/contact/constants";

import {
  contactEyebrowDark,
  meetBody,
  meetCard,
  meetDescription,
  meetPortrait,
  meetPortraitGlow,
  meetPortraitInitials,
  meetRoot,
  meetStatLabel,
  meetStats,
  meetStatValue,
  meetTitle,
} from "./contact.styles";

export function MeetConcierge() {
  return (
    <section
      id="meet-concierge"
      aria-labelledby="meet-concierge-heading"
      className={meetRoot}
    >
      <div data-contact="meet" className={meetCard}>
        <div className={meetPortrait} aria-hidden="true">
          <div className={meetPortraitGlow} />
          <span className={meetPortraitInitials}>D</span>
        </div>

        <div className={meetBody}>
          <p className={contactEyebrowDark}>{MEET_CONCIERGE.eyebrow}</p>
          <h2 id="meet-concierge-heading" className={meetTitle}>
            {MEET_CONCIERGE.title}
          </h2>
          <p className={meetDescription}>{MEET_CONCIERGE.description}</p>

          <dl className={meetStats}>
            {MEET_CONCIERGE.stats.map((stat) => (
              <div key={stat.label}>
                <dt className={meetStatLabel}>{stat.label}</dt>
                <dd className={meetStatValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
