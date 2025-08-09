import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a singleton instance
let lenis = null;

export function initSmoothScroll() {
  // Only create a new instance if one doesn't exist
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Update time in the animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);
  }

  return lenis;
}

// Get the Lenis instance
export function getLenis() {
  return lenis;
}

// Scroll to a specific element
export function scrollTo(target, options = {}) {
  if (lenis) {
    lenis.scrollTo(target, options);
  }
}