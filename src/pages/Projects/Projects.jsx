// Replace the first line
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

import { ReactLenis } from "lenis/react";

// Import project images
import AutobizzMain from "@/assets/images/autobizz.,homnemain.png";
import AutobizzStore from "@/assets/images/store.autobizz.png";
import CheeseClub from "@/assets/images/cheesclub.png";
import JellyLand from "@/assets/images/jellayland.png";
import Rudy from "@/assets/images/rudy.png";
import vendor from "@/assets/images/mulivendor.png";
import LemonAndLine from "@/assets/images/lemon-and-line.png";
import FlashShopBD from "@/assets/images/flashshopbd.png";
import PlushiesAndMore from "@/assets/images/plushies-and-more.jpg";
import Monexa from "@/assets/images/monexa-money-management.jpg";

const projects = [
  {
    title: "FlashShopBD — Production E-commerce Store",
    description:
      "Designed and developed an end-to-end online store for Bangladesh with responsive product discovery, cart, Cash on Delivery checkout, and customer-support journeys. The store now generates more than ৳200K in monthly sales.",
    src: "ecommerce.jpg",
    link: FlashShopBD,
    color: "#2f75a8",
    githubLink: "https://github.com/ahnafahad53-hue/FlashShopBD",
    liveLink: "https://www.flashshopbd.com/",
    imageFit: "contain",
  },
  {
    title: "Autobizz — Company Website",
    description:
      "Built the Autobizz company website end to end, presenting its Shopify, custom software, ERP/CRM, automation, and brand services through a responsive, conversion-focused experience.",
    src: "autobizz.jpg",
    link: AutobizzMain,
    color: "#58c9e8",
    githubLink: "",
    liveLink: "https://www.autobizz.net/",
  },
  {
    title: "Jellyland — Headless Shopify Storefront",
    description:
      "Built and deployed a production storefront for a U.S. client with Shopify Hydrogen, Remix, React, Oxygen, GraphQL, and the Storefront API, including product, collection, cart, and variant workflows.",
    src: "commerce.jpg",
    link: JellyLand,
    color: "#5eead4",
    githubLink: "",
    liveLink: "https://jellylandusa.com/",
  },
  {
    title: "Autobizz — Shopify Store",
    description:
      "Built and customized the Autobizz commerce storefront with Shopify, Liquid, metafields, and responsive UX improvements.",
    src: "shopify.jpg",
    link: AutobizzStore,
    color: "#f6c85f",
    githubLink: "",
    liveLink: "https://store.autobizz.net/",
  },
  {
    title: "Lemon & Line — Shopify Store Optimization",
    description:
      "Optimized the nautical lifestyle storefront with Shopify Liquid and performance-focused product-detail and UX refinements, supporting a clearer path from product discovery to purchase.",
    src: "shopify.jpg",
    link: LemonAndLine,
    color: "#8db7d8",
    githubLink: "",
    liveLink: "https://www.lemonandline.com/",
  },
  {
    title: "Shopify Two-Way Delivery Integration",
    description:
      "Built a Shopify integration and operations dashboard that supports two-way delivery workflows, synchronizing order and fulfillment updates between the store and delivery process for clearer tracking and fewer manual steps.",
    src: "rock.jpg",
    link: CheeseClub,
    color: "#5196fd",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Multi-vendor E-commerce Website (MERN + Tailwind + shadcn/ui)",
    description:
      "Developed a marketplace with vendor dashboards, cart, and order workflows. Integrated API endpoints and handled error states for a reliable UX.",
    src: "tree.jpg",
    link: vendor,
    color: "#8f89ff",
    githubLink: "https://github.com/junaidzamaahmed/multivendor-ecommerce",
    liveLink: "https://multivendor-ecommerce-six.vercel.app/",
  },
  {
    title: "Grasshopper Capital — Loan Management App",
    description:
      "Contributed to a loan-management application that helps the client monitor and manage a portfolio of more than $5M, with centralized borrower data, performance visibility, and more efficient financial workflows.",
    src: "water.jpg",
    link: Rudy,
    color: "#7fd6b5",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Monexa — AI Voice Money Manager",
    description:
      "Built a personal finance application with an AI voice system that listens to natural-language commands and helps users manage spending, budgets, loans, and savings from one dashboard.",
    src: "finance.jpg",
    link: Monexa,
    color: "#1b806f",
    githubLink: "https://github.com/Oshi-01/money-management",
    liveLink: "https://money-management-jet.vercel.app/login?callbackUrl=https%3A%2F%2Fmoney-management-jet.vercel.app%2Fdashboard",
    imageFit: "contain",
  },
  {
    title: "Plushies & More — E-commerce Landing Page",
    description:
      "Designed and developed a playful, responsive storefront for plush toys and gifts, with clear category discovery and commerce-focused navigation. The original domain is currently offline.",
    src: "plushies.jpg",
    link: PlushiesAndMore,
    color: "#ef7d8b",
    githubLink: "https://github.com/Himatrooshe/Plushies-nd-more",
    liveLink: "https://plushiesandmore.store/",
    liveLabel: "Domain offline",
    imageFit: "contain",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.025;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i / projects.length, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                liveLabel={project.liveLabel}
                imageFit={project.imageFit}
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
  liveLabel = "Live",
  imageFit = "cover",
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen md:h-screen flex items-center justify-center md:sticky md:top-0 project-container py-16 md:py-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-4vh + ${i * 10}px)`,
        }}
        className="relative md:-top-[10%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <img
              src={url}
              alt={title}
              className={`w-full h-full ${imageFit === "contain" ? "object-contain bg-white" : "object-cover"}`}
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

            {githubLink || liveLink ? (
              <div className="mt-4 md:mt-auto pt-4">
                <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

                <div className="flex items-center gap-4">
                  {/* GitHub Link */}
                  {githubLink ? (
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
                  ) : null}

                  {/* Live Link */}
                  {liveLink ? (
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
                        {liveLabel}
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
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
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  liveLabel: PropTypes.string,
  imageFit: PropTypes.oneOf(["cover", "contain"]),
};
