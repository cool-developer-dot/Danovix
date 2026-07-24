"use client";

import { useEffect, useState, type RefObject } from "react";

type UseVisibleOptions = {
  rootMargin?: string;
  threshold?: number;
};

export function useVisible(
  ref: RefObject<Element | null>,
  { rootMargin = "200px", threshold = 0.1 }: UseVisibleOptions = {},
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return visible;
}

export function usePageVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibilityChange = () => {
      setVisible(document.visibilityState === "visible");
    };

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return visible;
}
