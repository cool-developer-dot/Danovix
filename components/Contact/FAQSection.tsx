"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";

import { CONTACT_FAQ } from "@/lib/contact/constants";
import { cn } from "@/lib/cn";

import {
  contactEyebrowDark,
  faqAnswer,
  faqHeading,
  faqHeader,
  faqIcon,
  faqIconOpen,
  faqInner,
  faqItem,
  faqList,
  faqPanel,
  faqPanelInner,
  faqQuestion,
  faqRoot,
  faqTrigger,
} from "./contact.styles";

export function FAQSection() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(CONTACT_FAQ[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="contact-faq-heading"
      className={faqRoot}
    >
      <div className={faqInner}>
        <div data-contact="faq-header" className={faqHeader}>
          <p className={contactEyebrowDark}>Guidance</p>
          <h2 id="contact-faq-heading" className={faqHeading}>
            Frequently Asked
          </h2>
        </div>

        <div className={faqList}>
          {CONTACT_FAQ.map((item) => {
            const open = openId === item.id;
            const panelId = `${baseId}-${item.id}-panel`;
            const triggerId = `${baseId}-${item.id}-trigger`;

            return (
              <div
                key={item.id}
                data-contact="faq-item"
                className={faqItem}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    className={faqTrigger}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span className={faqQuestion}>{item.question}</span>
                    <span
                      className={cn(faqIcon, open && faqIconOpen)}
                      aria-hidden="true"
                    >
                      <Plus className="h-3.5 w-3.5 stroke-[1.5]" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={faqPanel}
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  inert={!open ? true : undefined}
                >
                  <div className={faqPanelInner}>
                    <p className={faqAnswer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
