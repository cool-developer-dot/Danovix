import Image from "next/image";

import type { ProductDetail } from "@/lib/product/constants";

import {
  darkSection,
  eyebrow,
  storyCopy,
  storyLayout,
  storyLead,
  storyMedia,
  storyParagraph,
} from "./product.styles";

type EditorialStoryProps = {
  detail: ProductDetail;
};

export function EditorialStory({ detail }: EditorialStoryProps) {
  return (
    <section
      aria-labelledby="product-story-heading"
      data-product="story"
      className={darkSection}
    >
      <div className={storyLayout}>
        <div className={storyCopy}>
          <p data-product="story-eyebrow" className={eyebrow}>
            Editorial Story
          </p>
          <h2
            id="product-story-heading"
            data-product="story-lead"
            className={storyLead}
          >
            {detail.storyLead}
          </h2>
          {detail.storyBody.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              data-product="story-body"
              className={storyParagraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div data-product="story-media" className={storyMedia}>
          <Image
            src={detail.product.imageSrc}
            alt={detail.product.imageAlt}
            fill
            sizes="(max-width: 1024px) 92vw, 55vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
