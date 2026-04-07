import HeroImg from "@/assets/images/hero.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer, Backend + Frontend, Problem Solver
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
                Hello! I&apos;m Md Mozahidul Islam, a Software Engineer with 2+ years of experience building
                customer-centric web applications with both frontend and backend contributions. I work with
                JavaScript/TypeScript, React, Next.js, and Node.js—shipping reliable features, clean integrations,
                and production-ready fixes.
              </p>
              <p className="text-white">
                Recently, I&apos;ve been building and maintaining backend APIs for HubSpot integrations—handling
                token security, pagination, validation, and robust error handling. I&apos;m comfortable collaborating
                with PM, QA, and UX in remote-first teams and communicating fluently in English with US-based teams.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I care most about reliability and clear systems: predictable APIs, safe auth flows, and
                    well-handled edge cases. I like debugging messy real-world issues and turning them into
                    maintainable solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Md Mozahidul Islam,
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">
                        Junior Software Engineer (Backend) at HubXpert
                      </span>
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
