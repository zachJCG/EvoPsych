import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(176,140,46,0.10), transparent 65%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(168,184,154,0.06), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-28">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="rise rise-1 mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Cincinnati &middot; Dr. Sagan King, Psy.D.
              </span>
            </div>

            <h1 className="rise rise-2 font-display text-6xl leading-[0.98] text-cream md:text-7xl lg:text-[5.5rem]">
              Therapy that
              <br />
              feels <span className="italic gold-text">human</span>.
            </h1>

            <p className="rise rise-3 mt-10 max-w-md text-lg leading-relaxed text-cream/75">
              Integrated, client-centered psychological care — in person and online.
            </p>

            <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="https://sagan-king.clientsecure.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-gold-400/70 bg-gold-500/10 px-7 py-4 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
              >
                Book a Consultation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/individual-therapy"
                className="link-gold text-[12px] uppercase tracking-[0.28em] text-cream/80"
              >
                Services
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="rise rise-3 lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Layered frame */}
              <div className="absolute -inset-3 -rotate-1 border border-gold-500/30" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 border border-gold-400/40" />
              <div className="relative aspect-[4/5] overflow-hidden bg-forest-900">
                <Image
                  src="/sagan-king.jpg"
                  alt="Dr. Sagan King, Psy.D."
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 480px"
                  className="object-cover"
                  style={{
                    filter: "saturate(0.95) contrast(1.02)",
                  }}
                />
                {/* Subtle tonal overlay to harmonize with the forest palette */}
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26,38,32,0) 60%, rgba(26,38,32,0.35) 100%)",
                  }}
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-6 bg-gold-400" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-cream/65">
                  Licensed in OH &amp; NC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 flex items-end justify-between gap-8">
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Services
            </h2>
            <div className="hidden text-[11px] uppercase tracking-[0.28em] text-gold-300 md:block">
              Three pathways
            </div>
          </div>

          <div className="grid gap-px bg-gold-500/15 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Individual Therapy",
                href: "/individual-therapy",
                copy: "Empathic, integrated work — adapted to each client.",
              },
              {
                num: "02",
                title: "Psychological Testing",
                href: "/testing",
                copy: "Comprehensive assessments for diagnostic clarity.",
              },
              {
                num: "03",
                title: "Presentations",
                href: "/presentations",
                copy: "Speaking engagements grounded in current research.",
              },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group relative flex min-h-[280px] flex-col justify-between bg-forest-800 p-10 transition hover:bg-forest-700"
              >
                <div>
                  <div className="font-display text-3xl text-gold-300/80">
                    {item.num}
                  </div>
                  <h3 className="mt-8 font-display text-2xl text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-cream/65">{item.copy}</p>
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

      {/* APPROACH — quieter, less text */}
      <section className="relative bg-forest-900 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
              Approach
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <p className="font-display text-3xl leading-snug text-cream md:text-4xl lg:text-5xl">
            &ldquo;We meet you where you are — and adjust as you evolve.&rdquo;
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.28em] text-cream/55">
            Dr. Sagan King, Psy.D.
          </p>

          <div className="gold-rule mx-auto mt-16 max-w-md" />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-cream/55">
            <span>CBT</span>
            <span className="text-gold-400/60">◆</span>
            <span>DBT</span>
            <span className="text-gold-400/60">◆</span>
            <span>ACT</span>
            <span className="text-gold-400/60">◆</span>
            <span>MI</span>
            <span className="text-gold-400/60">◆</span>
            <span>Psychodynamic</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
            Ready when you are.
          </h2>
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
