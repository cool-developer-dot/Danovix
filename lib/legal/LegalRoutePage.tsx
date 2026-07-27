import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentView } from "@/components/Legal/LegalDocumentView";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getLegalDocument } from "@/lib/legal/documents";
import { createPageMetadata } from "@/lib/seo/metadata";

export function buildLegalMetadata(slug: string): Metadata {
  const document = getLegalDocument(slug);
  if (!document) {
    throw new Error(`Missing legal document for slug: ${slug}`);
  }

  return createPageMetadata({
    title: document.title,
    description: document.description,
    path: `/${slug}`,
  });
}

export function LegalRoutePage({ slug }: { slug: string }) {
  const current = getLegalDocument(slug);
  if (!current) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: current.title, path: `/${slug}` },
        ]}
      />
      <LegalDocumentView document={current} />
    </>
  );
}
