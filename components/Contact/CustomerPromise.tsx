import { CUSTOMER_PROMISE } from "@/lib/contact/constants";

import {
  promiseHeading,
  promiseInner,
  promiseLine,
  promiseLineInner,
  promiseRoot,
  promiseRule,
  promiseSupporting,
} from "./contact.styles";

export function CustomerPromise() {
  return (
    <section
      aria-labelledby="customer-promise-heading"
      className={promiseRoot}
    >
      <div className={promiseInner}>
        <h2 id="customer-promise-heading" className={promiseHeading}>
          {CUSTOMER_PROMISE.lines.map((line) => (
            <span key={line} className={promiseLine}>
              <span data-contact="promise-line" className={promiseLineInner}>
                {line}
              </span>
            </span>
          ))}
        </h2>

        <div className={promiseRule} aria-hidden="true" />

        <p
          data-contact="promise-supporting"
          className={promiseSupporting}
        >
          {CUSTOMER_PROMISE.supporting}
        </p>
      </div>
    </section>
  );
}
