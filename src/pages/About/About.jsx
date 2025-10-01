import HeroImg from "@/assets/images/hero.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Backend Developer, API Engineer, Problem Solver
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
                Hello! I'm Md Mozahidul Islam, a passionate Backend Developer with 2+ years of experience 
                building reliable, scalable, and secure server-side applications and APIs. I specialize in Node.js, Express.js, 
                Next.js API routes, and TypeScript with a strong foundation in database design, system architecture, 
                and performance optimization.
              </p>
              <p className="text-white">
                I have experience designing and optimizing databases (MongoDB, PostgreSQL), building RESTful and GraphQL APIs, 
                integrating authentication and authorization, and deploying microservices with Docker and CI/CD. I excel at collaborating with frontend developers, designers, 
                and business stakeholders to deliver modern, maintainable systems that drive measurable results.
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
                      <span className="text-sm text-gray-400">Backend Developer at Autobizz</span>
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
