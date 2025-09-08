// Replace the first line
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { ReactLenis } from "lenis/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import project images
import AutobizzMain from "@/assets/images/autobizz.,homnemain.png";
import AutobizzStore from "@/assets/images/store.autobizz.png";
import CheeseClub from "@/assets/images/cheesclub.png";
import JellyLand from "@/assets/images/jellayland.png";
import Rudy from "@/assets/images/rudy.png";
import AutobizzOld from "@/assets/images/autobizzhomeold.png";
import vendor from "@/assets/images/mulivendor.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Autobizz - Main Company Website",
    description:
      "Redesigned and rebuilt the main Autobizz company website with modern UI/UX principles. Features responsive design, improved performance, and enhanced user experience using HTML, Tailwind CSS, and JavaScript.",
    src: "rock.jpg",
    link: AutobizzMain,
    color: "#5196fd",
    githubLink: "",
    liveLink: "https://www.autobizz.net/",
  },
  {
    title: "Autobizz Store - E-commerce Platform",
    description:
      "Developed a comprehensive e-commerce store for Autobizz with product catalog, shopping cart, and checkout functionality. Built with modern web technologies focusing on performance and user experience.",
    src: "tree.jpg",
    link: AutobizzStore,
    color: "#8f89ff",
    githubLink: "",
    liveLink: "https://store.autobizz.net/",
  },
  {
    title: "CRM System - Customer Relationship Management",
    description:
      "Engineered a comprehensive CRM system that streamlined order management through integrated REST APIs for tracking, status updates, and file management. Built with React.js and modern UI components for efficient customer relationship handling and business process automation.",
    src: "water.jpg",
    link: CheeseClub,
    color: "#ff6b35",
    githubLink: "",
    liveLink: "https://crm-system.vercel.app/",
  },
  {
    title: "JellyLand - Entertainment & Gaming Hub",
    description:
      "Built an interactive entertainment platform with games, multimedia content, and user engagement features. Focused on creating a fun, colorful, and responsive design that appeals to a wide audience.",
    src: "house.jpg",
    link: JellyLand,
    color: "#ff1493",
    githubLink: "",
    liveLink: "https://jellly-land-official-1e9b3b87bdedc42c02fc.o2.myshopify.dev/",
  },
  {
    title: "Loan Management ERP System",
    description:
      "Developed a comprehensive Enterprise Resource Planning system for loan management with intuitive forms, dashboards, and automated workflows. Built using Express.js and Bulma framework, featuring real-time data processing and secure user authentication.",
    src: "rock.jpg",
    link: Rudy,
    color: "#00c9a7",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Autobizz Legacy - Previous Website Version",
    description:
      "Previous version of the Autobizz company website showcasing the evolution of design and functionality. Demonstrates progression in web development skills and design thinking over time.",
    src: "house.jpg",
    link: AutobizzOld,
    color: "#6c5ce7",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Multi-vendor E-commerce Platform",
    description:
      "Built a comprehensive multi-vendor e-commerce platform with vendor dashboards, product management, order processing, and payment integration. Features include vendor registration, inventory management, commission tracking, and customer reviews. Built with Next.js, TypeScript, and modern UI components.",
    src: "rock.jpg",
    link: vendor,
    color: "#10b981",
    githubLink: "https://github.com/junaidzamaahmed/multivendor-ecommerce",
    liveLink: "https://multivendor-ecommerce-six.vercel.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    // Add revealing animations for projects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      // Create a timeline for each card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Start animation earlier
          end: "top 15%",   // End animation later for smoother transition
          toggleActions: "play none none reverse",
          scrub: 0.5,       // Add smooth scrubbing effect
          // Uncomment for debugging
          // markers: true,
        }
      });
      
      // Add animations to the timeline with improved easing
      tl.fromTo(card, 
        { 
          y: 80,           // Reduced distance for smoother movement
          opacity: 0,
          scale: 0.95,     // Less extreme scale change
          rotateX: 5       // Reduced rotation for subtlety
        }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotateX: 0,
          duration: 1.2,    // Longer duration for smoother animation
          ease: "power2.out", // Changed easing function for smoother motion
          clearProps: "transform,opacity" // Only clear necessary properties
        }
      );
      
      // Animate card content elements with improved stagger
      const cardContent = card.querySelectorAll('.card-content-animate');
      tl.fromTo(cardContent,
        { y: 20, opacity: 0 }, // Reduced distance
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.08,     // Slightly faster stagger
          duration: 0.8,     // Longer duration
          ease: "power1.out" // Smoother easing
        },
        "-=0.6"             // Start earlier for better flow
      );
    });

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[15%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
            />


            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium card-content-animate">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </a>

                {/* Live Link */}
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
