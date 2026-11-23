import { ScrollSmoother } from "gsap/ScrollSmoother";

const NAVBAR_OFFSET = 24;
// Lazy-loaded images below the fold can resize as they come into view mid-scroll,
// shifting the target's position. Re-aim a few times while things settle.
const SCROLL_CORRECTION_DELAYS = [150, 350, 650, 1000];

export function scrollToHash(el) {
  function go() {
    const offset = (document.querySelector("header")?.offsetHeight ?? 0) + NAVBAR_OFFSET;
    const smoother = ScrollSmoother.get();
    const currentScrollY = smoother ? smoother.scrollTop() : window.scrollY;
    const targetTop = el.getBoundingClientRect().top + currentScrollY - offset;

    if (smoother) {
      smoother.scrollTo(targetTop, true);
      return;
    }

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }

  go();
  SCROLL_CORRECTION_DELAYS.forEach((delay) => setTimeout(go, delay));
}
