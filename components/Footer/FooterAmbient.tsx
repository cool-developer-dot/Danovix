import {
  footerBackground,
  footerNoise,
  footerSpotlight,
  footerWatermark,
  footerWatermarkText,
} from "./footer.styles";

export function FooterAmbient() {
  return (
    <>
      <div
        data-footer="bg"
        className={footerBackground}
        aria-hidden="true"
      />
      <div
        data-footer="noise"
        className={footerNoise}
        aria-hidden="true"
      />
      <div
        data-footer="spotlight"
        className={footerSpotlight}
        aria-hidden="true"
      />
      <div
        data-footer="watermark"
        className={footerWatermark}
        aria-hidden="true"
      >
        <span className={footerWatermarkText}>DANOVIX</span>
      </div>
    </>
  );
}
