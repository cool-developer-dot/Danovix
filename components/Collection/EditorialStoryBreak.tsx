import Image from "next/image";

import { STORY_BREAK } from "@/lib/collection/constants";

import {
  eyebrow,
  storyBody,
  storyCopy,
  storyHeading,
  storyImage,
  storyInner,
  storyMedia,
  storyRoot,
} from "./collection.styles";

export function EditorialStoryBreak() {
  return (
    <section
      aria-labelledby="collection-story-heading"
      data-collection="story"
      className={storyRoot}
    >
      <div className={storyInner}>
        <div className={storyCopy}>
          <p data-collection="story-eyebrow" className={eyebrow}>
            {STORY_BREAK.eyebrow}
          </p>
          <h2
            id="collection-story-heading"
            data-collection="story-heading"
            className={storyHeading}
          >
            {STORY_BREAK.heading}
          </h2>
          <p data-collection="story-body" className={storyBody}>
            {STORY_BREAK.body}
          </p>
        </div>

        <div data-collection="story-media" className={storyMedia}>
          <Image
            src={STORY_BREAK.imageSrc}
            alt={STORY_BREAK.imageAlt}
            fill
            sizes="(max-width: 1024px) 92vw, 55vw"
            className={storyImage}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
