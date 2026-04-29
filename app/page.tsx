import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden">
        {/* Soft radial atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 75% 30%, rgba(176,140,46,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 15% 80%, rgba(168,184,154,0.07), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-32">
          <div className="lg:col-span-7">
            <div className="rise rise-1 mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Cincinnati &middot; Established Practice
              </span>
            </div>

            <h1 className="rise rise-2 font-display text-5xl leading-[1.05] text-cream md:text-6xl lg:text-7xl">
              A practice rooted in
              <br />
              <span className="italic">authentic</span>{" "}
              <span className="gold-text">connection</span>.
            </h1>

            <p className="rise rise-3 mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
              Led by Dr. Sagan King, a licensed clinical psychologist, Evolve
              offers integrated and client-centered care — therapy, testing, and
              professional presentations — designed to meet you where you are.
            </p>

            <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="https://sagan-king.clientsecure.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold-400/70 bg-gold-500/10 px-7 py-4 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
              >
                Schedule a Consultation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/individual-therapy"
                className="link-gold text-[12px] uppercase tracking-[0.28em] text-cream/80"
              >
                Explore Services
              </Link>
            </div>

            <div className="rise rise-5 mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.24em] text-cream/55">
              <span>Licensed in Ohio &amp; North Carolina</span>
              <span className="hidden h-px w-6 bg-cream/30 md:block" />
              <span>In-Person &amp; Telehealth</span>
              <span className="hidden h-px w-6 bg-cream/30 md:block" />
              <span>Adolescents &mdash; Older Adults</span>
            </div>
          </div>

          {/* Right: foil card composition echoing the business card */}
          <div className="rise rise-3 lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 -rotate-1 rounded-sm bg-forest-900/70 shadow-2xl" />
              <div className="relative aspect-[1.6/1] overflow-hidden rounded-sm border border-gold-500/30 bg-forest-900 shadow-2xl">
                {/* Gold panel */}
                <div className="gold-foil absolute right-0 top-0 h-full w-3/5 opacity-90" />
                <div className="absolute inset-0 flex">
                  <div className="flex w-2/5 flex-col items-center justify-center p-6 text-center">
                    <svg viewBox="0 0 100 100" className="h-20 w-20" aria-hidden>
                      <circle cx="50" cy="50" r="46" fill="none" stroke="#cba844" strokeWidth="0.6" opacity="0.5" />
                      <g transform="translate(50,50)">
                        <path d="M-10 36 Q-8 18 -6 3 Q-4 -10 -2 -20 L0 -22 L-2 -22 Q-5 -10 -10 5 Q-14 22 -16 36 Z" fill="#5a3d2b" />
                        {[
                          { x: -20, y: -10, c: "#8ea18f" },
                          { x: -26, y: -14, c: "#a8b89a" },
                          { x: -22, y: -18, c: "#647e6a" },
                          { x: -18, y: -22, c: "#8ea18f" },
                          { x: -12, y: -26, c: "#a8b89a" },
                          { x: -8, y: -30, c: "#647e6a" },
                          { x: -4, y: -32, c: "#cba844" },
                          { x: -14, y: -16, c: "#cba844" },
                          { x: -8, y: -20, c: "#a8b89a" },
                        ].map((leaf, i) => (
                          <ellipse key={i} cx={leaf.x} cy={leaf.y} rx="3" ry="1.7" fill={leaf.c} transform={`rotate(${(i*23)%90 - 45} ${leaf.x} ${leaf.y})`} />
                        ))}
                      </g>
                    </svg>
                    <div className="mt-3 font-display text-base text-cream">Evolve</div>
                    <div className="text-[8px] uppercase tracking-[0.22em] text-cream/70">
                      Psychological Services
                    </div>
                  </div>
                  <div className="flex w-3/5 flex-col justify-center gap-2 p-5 pr-7 text-forest-900">
                    <div>
                      <div className="font-medium text-[13px] leading-tight">Dr. Sagan King, Psy.D.</div>
                      <div className="text-[10px] opacity-80">Licensed Psychologist</div>
                    </div>
                    <div className="my-1 h-px w-full bg-forest-900/30" />
                    <div className="text-[10px] leading-snug">
                      323 W. Fifth St. #1N<br />
                      Cincinnati, OH 45202
                    </div>
                    <div className="my-1 h-px w-full bg-forest-900/30" />
                    <div className="text-[10px]">dr.saganking@evolutionpsych.com</div>
                    <div className="my-1 h-px w-full bg-forest-900/30" />
                    <div className="text-[10px]">(513) 201-7776</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-cream/45">
                Office &middot; Downtown Cincinnati
              </div>
            </div>
          </div>
        </div>

        <div className="gold-rule mx-auto max-w-6xl" />
      </section>

      {/* SERVICES */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Services
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Three pathways into the work.
            </h2>
            <p className="mt-5 text-cream/70">
              Each begins with a real conversation, an honest assessment of fit,
              and a plan tailored to where you are right now.
            </p>
          </div>

          <div className="grid gap-px bg-gold-500/15 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Individual Therapy",
                href: "/individual-therapy",
                copy: "Empathic, integrated therapy drawing from CBT, DBT, ACT, MI, and psychodynamic traditions — adapted to each client.",
              },
              {
                num: "02",
                title: "Psychological Testing",
                href: "/testing",
                copy: "Comprehensive assessments for diagnostic clarity, accommodations, treatment planning, and court-ordered evaluations.",
              },
              {
                num: "03",
                title: "Presentations",
                href: "/presentations",
                copy: "Tailored speaking engagements for clinicians, courts, employers, and community groups — grounded in current research.",
              },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group relative flex flex-col justify-between bg-forest-800 p-10 transition hover:bg-forest-700"
              >
                <div>
                  <div className="font-display text-3xl text-gold-300/80">
                    {item.num}
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65">
                    {item.copy}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-200">
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative bg-forest-900 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Approach
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              We meet you where you are.
            </h2>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <p className="text-lg leading-relaxed text-cream/80">
              Every individual&apos;s journey is unique and requires distinct,
              personalized treatment. Dr. King draws from a rich tapestry of
              therapeutic orientations — consistently adjusting to your evolving
              needs and goals.
            </p>
            <p className="text-cream/65">
              Sessions are 53 minutes, in person or virtual, designed to provide
              an intuitive and authentic connection. The work uses humor,
              encouragement, and gentle challenges to provoke insight — in a
              setting that fosters healing and growth.
            </p>

            <div className="gold-rule" />

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] uppercase tracking-[0.22em] text-cream/70 md:grid-cols-3">
              {["CBT", "DBT", "ACT", "Motivational Interviewing", "Psychodynamic", "Reality Therapy"].map((m) => (
                <div key={m} className="flex items-center gap-2">
                  <span className="text-gold-400">◆</span> {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Schedule a brief consultation to determine fit and next steps.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="https://sagan-king.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold-400/70 bg-gold-500/10 px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
            >
              Schedule Online
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="link-gold text-[12px] uppercase tracking-[0.28em] text-cream/80"
            >
              Contact the Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
