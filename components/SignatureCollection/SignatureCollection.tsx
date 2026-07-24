"use client";

import { useRef } from "react";

import { JourneyCallouts } from "@/components/product-journey/JourneyCallouts";
import { SignatureCollectionAmbient } from "./SignatureCollectionAmbient";
import { SignatureCollectionEditorial } from "./SignatureCollectionEditorial";
import { SignatureCollectionProduct } from "./SignatureCollectionProduct";
import { useSignatureAnimations } from "./signature-animations";
import {
  signatureBackground,
  signatureCamera,
  signatureEditorialCol,
  signatureGrid,
  signatureNoise,
  signatureRoot,
  signatureStage,
  signatureVignette,
} from "./signature.styles";

export function SignatureCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const calloutsActive = useSignatureAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-journey-section="signature"
      aria-label="Signature collection"
      className={signatureRoot}
    >
      <div data-signature="stage" className={signatureStage}>
        <div data-signature="camera" className={signatureCamera}>
          <div data-signature="bg" className={signatureBackground} />
          <div data-signature="noise" className={signatureNoise} aria-hidden="true" />
          <div
            data-signature="vignette"
            className={signatureVignette}
            aria-hidden="true"
          />
          <SignatureCollectionAmbient />

          <div data-signature="editorial-layer" className={signatureGrid}>
            <div className={signatureEditorialCol}>
              <SignatureCollectionEditorial />
            </div>
          </div>

          <SignatureCollectionProduct />
          <JourneyCallouts active={calloutsActive} />
        </div>
      </div>
    </section>
  );
}
