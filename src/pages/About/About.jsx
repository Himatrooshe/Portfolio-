import HeroImg from "@/assets/images/hero.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            I build the systems behind connected products.
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
                I&apos;m Md Mozahidul Islam, a backend-focused Software Engineer based in Dhaka. I build REST APIs,
                healthcare platforms, CRM/EHR integrations, automation, and full-stack applications with Node.js,
                Express, React, Next.js, PostgreSQL, MongoDB, and Prisma.
              </p>
              <p className="text-white">
                My recent work spans pharmacist and doctor-patient portals, authentication, webhooks, record mapping,
                data synchronization, reporting, and production debugging. I also deploy with Docker, Kubernetes,
                GKE, GCP, Cloud Run, VPS infrastructure, and CI/CD.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I care about the unglamorous details that make software dependable: predictable APIs, safe auth,
                    observable workflows, clean data, and edge cases handled before customers find them.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Md Mozahidul Islam,
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">
                        Junior Software Engineer (Backend / DevOps) at HubXpert
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
