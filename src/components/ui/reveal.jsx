import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ 
  children, 
  direction = 'up', // 'up', 'down', 'left', 'right'
  delay = 0,
  duration = 0.8,
  distance = 50,
  threshold = 0.2, // When the element should start revealing (0-1)
  stagger = 0, // For staggered animations of children
  once = true, // Whether the animation should play only once
  className = '',
  style = {}
}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    // Set initial position based on direction
    let initialProps = { opacity: 0 };
    
    switch (direction) {
      case 'up':
        initialProps.y = distance;
        break;
      case 'down':
        initialProps.y = -distance;
        break;
      case 'left':
        initialProps.x = distance;
        break;
      case 'right':
        initialProps.x = -distance;
        break;
      default:
        initialProps.y = distance;
    }
    
    // Set final position
    let finalProps = { 
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      stagger,
      overwrite: 'auto'
    };
    
    // Create the animation
    const anim = gsap.fromTo(element, initialProps, finalProps);
    
    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${(1 - threshold) * 100}%`,
      toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      animation: anim,
      // Uncomment for debugging
      // markers: true,
    });
    
    return () => {
      // Clean up
      anim.kill();
      trigger.kill();
    };
  }, [direction, delay, duration, distance, threshold, stagger, once]);
  
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  delay: PropTypes.number,
  duration: PropTypes.number,
  distance: PropTypes.number,
  threshold: PropTypes.number,
  stagger: PropTypes.number,
  once: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Reveal;