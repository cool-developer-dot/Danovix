"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import {
  ACCOUNT_COLLECTION,
  ACCOUNT_COLLECTION_COPY,
  type CollectionPiece,
} from "@/lib/account/constants";

import {
  accountEyebrow,
  collectionAction,
  collectionActions,
  collectionCard,
  collectionGrid,
  collectionHeaderCopy,
  collectionHeaderRow,
  collectionImage,
  collectionImageWrap,
  collectionInfo,
  collectionMeta,
  collectionName,
  collectionPrice,
  collectionSweep,
  collectionViewAll,
  darkSection,
  sectionDescription,
  sectionHeading,
} from "./account.styles";

export function PrivateCollectionPreview() {
  const [pieces, setPieces] = useState<CollectionPiece[]>(() => [
    ...ACCOUNT_COLLECTION,
  ]);

  const handleRemove = useCallback((id: string) => {
    setPieces((current) => current.filter((piece) => piece.id !== id));
  }, []);

  if (pieces.length === 0) return null;

  return (
    <section
      id="private-collection"
      aria-labelledby="account-collection-heading"
      className={darkSection}
    >
      <div className={collectionHeaderRow}>
        <div className={collectionHeaderCopy}>
          <p data-account="collection-eyebrow" className={accountEyebrow}>
            {ACCOUNT_COLLECTION_COPY.eyebrow}
          </p>
          <h2
            id="account-collection-heading"
            data-account="collection-heading"
            className={`${sectionHeading} mt-4 sm:text-left`}
          >
            {ACCOUNT_COLLECTION_COPY.heading}
          </h2>
          <p
            data-account="collection-description"
            className={`${sectionDescription} sm:text-left`}
          >
            {ACCOUNT_COLLECTION_COPY.description}
          </p>
        </div>

        <Link
          href={ACCOUNT_COLLECTION_COPY.viewAllHref}
          className={collectionViewAll}
        >
          {ACCOUNT_COLLECTION_COPY.viewAll}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={collectionGrid}>
        {pieces.map((piece) => (
          <article
            key={piece.id}
            data-account="collection-card"
            className={collectionCard}
          >
            <div className={collectionImageWrap}>
              <Image
                src={piece.imageSrc}
                alt={piece.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                loading="lazy"
                className={collectionImage}
              />
              <div
                data-account="collection-sweep"
                className={collectionSweep}
                aria-hidden="true"
              />
            </div>
            <div className={collectionInfo}>
              <h3 className={collectionName}>{piece.name}</h3>
              <p className={collectionMeta}>{piece.collection}</p>
              <p className={collectionPrice}>{piece.priceLabel}</p>
              <div className={collectionActions}>
                <Link href={piece.href} className={collectionAction}>
                  {ACCOUNT_COLLECTION_COPY.actions.view}
                </Link>
                <Link href="/reserved" className={collectionAction}>
                  {ACCOUNT_COLLECTION_COPY.actions.reserve}
                </Link>
                <button type="button" className={collectionAction}>
                  {ACCOUNT_COLLECTION_COPY.actions.compare}
                </button>
                <button
                  type="button"
                  className={collectionAction}
                  onClick={() => handleRemove(piece.id)}
                >
                  {ACCOUNT_COLLECTION_COPY.actions.remove}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
