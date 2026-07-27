import Link from "next/link";

import type { LegalDocument } from "@/lib/legal/types";
import { LEGAL_META } from "@/lib/legal/types";
import { cn } from "@/lib/cn";

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

export function LegalDocumentView({ document }: LegalDocumentViewProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c]">
      <HeroNavbar />
      <main id="main-content" className="relative z-[1] w-full">
        <header className="account-hero relative overflow-hidden pb-12 pt-[clamp(7.5rem,15vh,10rem)]">
          <div className="account-hero-bg absolute inset-0" aria-hidden="true" />
          <div className="account-hero-noise absolute inset-0" aria-hidden="true" />
          <div className="account-hero-grain absolute inset-0" aria-hidden="true" />
          <div className="relative z-[2] mx-auto max-w-[820px] px-5 text-center sm:px-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.34em] text-[rgb(214_196_158)]">
              Legal
            </p>
            <h1 className="mt-5 font-serif text-[clamp(2.2rem,6vw,3.6rem)] font-light tracking-[-0.028em] text-[rgb(248_247_244)]">
              {document.title}
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.85] text-[rgb(248_247_244/0.58)]">
              {document.description}
            </p>
            <dl className="mx-auto mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(248_247_244/0.45)]">
              <div>
                <dt className="inline">Version </dt>
                <dd className="inline text-[rgb(214_196_158)]">
                  {document.version}
                </dd>
              </div>
              <div>
                <dt className="inline">Effective </dt>
                <dd className="inline text-[rgb(214_196_158)]">
                  {document.effectiveDate}
                </dd>
              </div>
              <div>
                <dt className="inline">Updated </dt>
                <dd className="inline text-[rgb(214_196_158)]">
                  {document.lastUpdated}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <article className="relative mx-auto max-w-[820px] px-5 pb-20 sm:px-8">
          <nav
            aria-label="On this page"
            className="mb-12 rounded-[22px] border border-[rgb(248_247_244/0.1)] bg-[rgb(248_247_244/0.03)] p-5 backdrop-blur-[12px]"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[rgb(214_196_158)]">
              Contents
            </p>
            <ol className="mt-4 space-y-2">
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[14px] text-[rgb(248_247_244/0.7)] transition-colors hover:text-[rgb(214_196_158)] focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {document.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-32"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-serif text-[clamp(1.45rem,3vw,1.85rem)] font-light tracking-[-0.02em] text-[rgb(248_247_244)]"
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-4 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.68)]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.75] text-[rgb(248_247_244/0.68)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 64)}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.subsections?.map((sub) => (
                  <div key={sub.heading} className="mt-6">
                    <h3 className="font-serif text-[1.2rem] font-light text-[rgb(248_247_244)]">
                      {sub.heading}
                    </h3>
                    {sub.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="mt-3 text-[15px] leading-[1.85] text-[rgb(248_247_244/0.68)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {sub.bullets ? (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.75] text-[rgb(248_247_244/0.68)]">
                        {sub.bullets.map((bullet) => (
                          <li key={bullet.slice(0, 64)}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </section>
            ))}
          </div>

          <aside className="mt-14 rounded-[22px] border border-[rgb(198_161_91/0.28)] bg-[rgb(198_161_91/0.08)] p-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[rgb(214_196_158)]">
              Counsel Notice
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[rgb(248_247_244/0.72)]">
              {document.counselNotice ?? LEGAL_META.counselNotice}
            </p>
          </aside>

          <section className="mt-12" aria-labelledby="revision-heading">
            <h2
              id="revision-heading"
              className="font-serif text-[1.45rem] font-light text-[rgb(248_247_244)]"
            >
              Revision History
            </h2>
            <ul className="mt-4 space-y-3">
              {document.revisionHistory.map((revision) => (
                <li
                  key={`${revision.version}-${revision.date}`}
                  className="rounded-[16px] border border-[rgb(248_247_244/0.08)] px-4 py-3 text-[14px] text-[rgb(248_247_244/0.65)]"
                >
                  <span className="text-[rgb(214_196_158)]">
                    v{revision.version}
                  </span>{" "}
                  · {revision.date} — {revision.summary}
                </li>
              ))}
            </ul>
          </section>

          <nav
            aria-label="Related policies"
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              ["/privacy", "Privacy"],
              ["/terms", "Terms"],
              ["/cookie-policy", "Cookies"],
              ["/shipping-policy", "Shipping"],
              ["/refund-policy", "Returns"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-full border border-[rgb(248_247_244/0.14)]",
                  "px-4 py-2 font-sans text-[10px] uppercase tracking-[0.18em]",
                  "text-[rgb(248_247_244/0.7)] transition-colors hover:border-[rgb(198_161_91/0.45)]",
                  "hover:text-[rgb(248_247_244)]",
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </article>

        <FooterDeferred />
      </main>
    </div>
  );
}
