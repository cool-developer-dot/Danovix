import { signatureAmbient, signatureSpotlight } from "./signature.styles";

const CHAMPAGNE_PARTICLES = [
  { className: "signature-piece-champagne--a" },
  { className: "signature-piece-champagne--b" },
  { className: "signature-piece-champagne--c" },
  { className: "signature-piece-champagne--d" },
  { className: "signature-piece-champagne--e" },
  { className: "signature-piece-champagne--f" },
] as const;

export function SignatureCollectionAmbient() {
  return (
    <>
      <div
        data-signature="spotlight"
        className={signatureSpotlight}
        aria-hidden="true"
      />
      <div
        data-signature="ambient"
        className={signatureAmbient}
        aria-hidden="true"
      >
        {CHAMPAGNE_PARTICLES.map((particle) => (
          <span
            key={particle.className}
            className={`signature-piece-champagne ${particle.className}`}
          />
        ))}
      </div>
    </>
  );
}
