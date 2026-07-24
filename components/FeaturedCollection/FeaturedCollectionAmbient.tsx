import {
  featuredBackground,
  featuredNoise,
  featuredSpotlight,
} from "./featured.styles";

export function FeaturedCollectionAmbient() {
  return (
    <>
      <div data-featured="bg" className={featuredBackground} aria-hidden="true" />
      <div data-featured="noise" className={featuredNoise} aria-hidden="true" />
      <div
        data-featured="spotlight"
        className={featuredSpotlight}
        aria-hidden="true"
      />
    </>
  );
}
