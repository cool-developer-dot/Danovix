/** A single angle in a multi-frame product rotation sequence. */
export type ShowcaseFrame = {
  id: string;
  src: string;
  width: number;
  height: number;
};

/** Ordered rotation path — swap `frames` for a GLB renderer later. */
export type ShowcaseSequence = readonly ShowcaseFrame[];
