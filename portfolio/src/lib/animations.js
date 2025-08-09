import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade in animation
export function fadeIn(element, delay = 0, duration = 1) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration, 
      delay,
      ease: 'power3.out'
    }
  );
}

// Stagger animation for multiple elements
export function staggerElements(elements, staggerTime = 0.1, delay = 0) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      stagger: staggerTime, 
      delay,
      duration: 0.8,
      ease: 'power2.out'
    }
  );
}

// Create a scroll trigger animation
export function createScrollTrigger(trigger, animation) {
  return ScrollTrigger.create({
    trigger,
    start: 'top 80%',
    animation,
    toggleActions: 'play none none reverse',
  });
}

// Parallax effect
export function parallaxEffect(element, speed = 0.5) {
  gsap.to(element, {
    y: () => (ScrollTrigger.maxScroll(window) * speed),
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}