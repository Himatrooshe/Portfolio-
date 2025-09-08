import HeroImg from "@/assets/images/hero.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Frontend Developer, Shopify Expert, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Md Mozahidul Islam, a passionate Frontend Developer with 2+ years of experience 
                building responsive, scalable, and user-friendly web applications. I specialize in React, Next.js, 
                JavaScript (ES6+), and Tailwind CSS with a strong foundation in UI/UX design, SEO optimization, 
                and performance improvement.
              </p>
              <p className="text-white">
                I have extensive experience in developing and optimizing Shopify stores, including work with the 
                Shopify Remix framework, theme customization using Liquid, and store restructuring to enhance 
                performance and user experience. I excel at collaborating with designers, backend developers, 
                and business stakeholders to deliver modern digital solutions that drive measurable results.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm passionate about creating efficient, scalable solutions that enhance user experience 
                    and drive business growth. My expertise spans from building high-performance React applications 
                    to optimizing Shopify stores for better conversion rates. I believe in continuous learning 
                    and staying updated with the latest technologies to deliver cutting-edge solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Md Mozahidul Islam,
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Frontend Developer at Autobizz</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
