import Image from "next/image";

import {
  SIGNATURE_PRODUCT_ASSET,
  SIGNATURE_PRODUCT_HEIGHT,
  SIGNATURE_PRODUCT_WIDTH,
} from "@/lib/signature-collection/constants";

import { signatureProduct, signatureProductStage } from "./signature.styles";

/**
 * Signature marble podium only — the travelling handbag lands here via ProductJourney.
 * Never render a second bag.
 */
export function SignatureCollectionProduct() {
  return (
    <div
      data-signature="product-stage"
      data-journey-anchor="signature-marble"
      className={signatureProductStage}
      aria-hidden="true"
    >
      {/* Gold floor bloom under the disc */}
      <div className="signature-marble-glow" aria-hidden="true" />
      <div className="signature-marble-ring" aria-hidden="true" />

      <div data-signature="marble" className={signatureProduct}>
        <Image
          src={SIGNATURE_PRODUCT_ASSET}
          alt=""
          width={SIGNATURE_PRODUCT_WIDTH}
          height={SIGNATURE_PRODUCT_HEIGHT}
          sizes="(max-width: 640px) 62vw, (max-width: 1024px) 48vw, 28vw"
          quality={80}
          className="signature-product-image signature-marble-image"
          draggable={false}
          priority={false}
        />
        {/* Exact bag rest — top surface of the circular marble */}
        <span
          data-journey-anchor="signature-rest"
          className="signature-rest-anchor"
        />
      </div>
    </div>
  );
}
