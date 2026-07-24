/**
 * Shared GSAP bootstrap — register plugins once per page load.
 * Call from any client section after dynamic-importing gsap.
 */

let pluginsRegistered = false;

export async function loadGsap() {
  const { default: gsap } = await import("gsap");
  return gsap;
}

export async function loadGsapWithScrollTrigger() {
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);

  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginsRegistered = true;
  }

  return { gsap, ScrollTrigger };
}
