const cache = new Map<string, Promise<void>>();

/**
 * Preload every frame before the rotation timeline starts.
 * Cached across products so revisiting a bag is instant.
 */
export function preloadShowcaseImages(srcs: readonly string[]): Promise<void> {
  const jobs = srcs.map((src) => {
    const existing = cache.get(src);
    if (existing) return existing;

    const job = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload showcase image: ${src}`));
      img.src = src;
    });

    cache.set(src, job);
    return job;
  });

  return Promise.all(jobs).then(() => undefined);
}
