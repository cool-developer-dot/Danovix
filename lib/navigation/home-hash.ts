const STORAGE_KEY = "danovix-pending-home-hash";

/** In-memory target for the current soft navigation (preferred). */
let pendingHomeHash: string | null = null;

/**
 * Remember which home section to open after a client navigation.
 * Next.js App Router often drops `/#hash` during soft navigations, so we
 * keep an explicit pending target instead of relying on location.hash alone.
 */
export function requestHomeHash(hash: string): void {
  const cleaned = hash.replace(/^#/, "").trim();
  if (!cleaned) return;

  pendingHomeHash = cleaned;

  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, cleaned);
  } catch {
    // Private mode / blocked storage — memory flag is enough for soft nav.
  }
}

/** Read and clear the pending home hash (URL hash wins when present). */
export function takeHomeHash(): string | null {
  let fromUrl: string | null = null;
  let fromStorage: string | null = null;

  if (typeof window !== "undefined") {
    fromUrl = window.location.hash.replace(/^#/, "").trim() || null;
    try {
      fromStorage = sessionStorage.getItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      fromStorage = null;
    }
  }

  const fromMemory = pendingHomeHash;
  pendingHomeHash = null;

  return fromUrl || fromMemory || fromStorage;
}

/** Peek without clearing — used by deferred sections to eager-mount. */
export function peekHomeHash(): string | null {
  if (typeof window !== "undefined") {
    const fromUrl = window.location.hash.replace(/^#/, "").trim();
    if (fromUrl) return fromUrl;

    try {
      const fromStorage = sessionStorage.getItem(STORAGE_KEY);
      if (fromStorage) return fromStorage;
    } catch {
      // ignore
    }
  }

  return pendingHomeHash;
}

export function scrollToHomeSection(
  hash: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const el = document.getElementById(hash);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}
