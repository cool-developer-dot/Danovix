import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductExperienceLazy } from "@/components/Product/ProductExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/lib/product/constants";
import { createPageMetadata } from "@/lib/seo/metadata";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProductBySlug(slug);
  if (!detail) {
    return createPageMetadata({
      title: "Piece Not Found",
      path: `/product/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: detail.product.name,
    description: `${detail.storyLead} ${detail.product.material} · ${detail.product.priceLabel}.`,
    path: `/product/${slug}`,
    ogImage: detail.product.imageSrc,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const detail = getProductBySlug(slug);
  if (!detail) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Collection", path: "/collection" },
          { name: detail.product.name, path: `/product/${slug}` },
        ]}
      />
      <ProductExperienceLazy detail={detail} />
    </>
  );
}
