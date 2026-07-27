import { Lock } from "lucide-react";

import { ACCOUNT_MEMBERSHIP } from "@/lib/account/constants";

import {
  accountEyebrow,
  accountSectionInner,
  darkSection,
  membershipAside,
  membershipBadge,
  membershipBenefit,
  membershipBenefits,
  membershipCard,
  membershipCopy,
  membershipDot,
  membershipLayout,
  membershipLock,
  sectionDescription,
  sectionHeading,
} from "./account.styles";

export function PrivateMembership() {
  return (
    <section
      id="membership"
      aria-labelledby="account-membership-heading"
      className={darkSection}
    >
      <div className={accountSectionInner}>
        <article data-account="membership" className={membershipCard}>
          <div className={membershipLayout}>
            <div className={membershipCopy}>
              <p className={accountEyebrow}>{ACCOUNT_MEMBERSHIP.eyebrow}</p>
              <h2
                id="account-membership-heading"
                className={`${sectionHeading} mt-4 text-left`}
              >
                {ACCOUNT_MEMBERSHIP.heading}
              </h2>
              <p className={`${sectionDescription} text-left`}>
                {ACCOUNT_MEMBERSHIP.description}
              </p>

              <ul className={membershipBenefits} role="list">
                {ACCOUNT_MEMBERSHIP.benefits.map((benefit) => (
                  <li key={benefit} className={membershipBenefit}>
                    <span className={membershipDot} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className={membershipAside}>
              <span className={membershipLock} aria-hidden="true">
                <Lock className="h-6 w-6 stroke-[1.2]" />
              </span>
              <span className={membershipBadge}>
                {ACCOUNT_MEMBERSHIP.lockLabel}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
