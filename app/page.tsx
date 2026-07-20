import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

const services = [
  {
    num: "01",
    title: "Individual Therapy",
    href: "/services/individual-therapy",
    copy: "Integrated, evidence-based therapy for children, teens, adults, and older adults — in person or virtual.",
  },
  {
    num: "02",
    title: "Psychological Testing",
    href: "/services/psychological-testing",
    copy: "Comprehensive assessments for diagnostic clarity, accommodations, and treatment direction.",
  },
  {
    num: "03",
    title: "Consulting & Speaking",
    href: "/services/consulting-speaking",
    copy: "Research-grounded presentations and consultation for clinicians, courts, employers, and communities.",
  },
];

const logistics = [
  { label: "Sessions", value: "53 minutes, in person or telehealth" },
  { label: "Availability", value: "Monday through Saturday" },
  { label: "Insurance", value: "Aetna · Custom Design Benefits" },
  { label: "Licensure", value: "Ohio & North Carolina" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden">
        <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">
                Cincinnati, Ohio · In Person &amp; Telehealth
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[3.4rem] font-light leading-[1.02] md:text-7xl lg:text-[5.2rem]">
                Every season of life
                <br />
                asks something{" "}
                <em className="text-gold-deep">new</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft">
                Evolve Psychological Services offers integrated,
                client-centered therapy, psychological testing, and
                consultation — grounded in genuine connection and personalized,
                compassionate care.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href={site.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-forest px-8 py-4 text-[12px] font-medium uppercase tracking-caps text-parchment transition hover:bg-forest-deep"
                >
                  Book a Session
                </a>
                <Link
                  href="/about"
                  className="link-quiet text-[12px] uppercase tracking-caps text-ink-soft"
                >
                  Meet Dr. King
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-t-full border border-gold/30"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sage-wash">
                <Image
                  src="/sagan-king.jpg"
                  alt={`${site.provider.name}, ${site.provider.credentials}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <span className="font-display text-lg">
                  {site.provider.name}, {site.provider.credentials}
                </span>
                <span className="text-[11px] uppercase tracking-caps text-ink-muted">
                  {site.provider.title}
                </span>
              </figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TAGLINE BAND */}
      <section className="border-y border-forest-line bg-parchment-deep">
        <div className="mx-auto max-w-wrap px-6 py-14 lg:px-10">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-display text-2xl font-light italic leading-snug text-ink-soft md:text-3xl">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-wrap scroll-mt-24 px-6 py-20 lg:px-10 lg:py-28"
      >
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What We Offer</p>
              <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
                Three pathways to care.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <Link
                href={s.href}
                className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-forest-line bg-parchment-card p-8 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_40px_-24px_rgba(28,43,35,0.35)]"
              >
                <div>
                  <span className="font-display text-2xl text-gold">
                    {s.num}
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {s.copy}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-caps text-gold-deep">
                  Learn more
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="grain bg-forest text-parchment">
        <div className="mx-auto max-w-wrap px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-gold-soft">Our Approach</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
                We meet you where you are — and adjust as you evolve.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-parchment/80">
                No single method fits every person. Dr. King draws on a range
                of evidence-based traditions — blending them as the work calls
                for it, with humor, encouragement, and gentle challenges that
                provoke insight.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "CBT",
                  "DBT",
                  "ACT",
                  "Motivational Interviewing",
                  "Psychodynamic",
                  "Humanistic & Existential",
                ].map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-gold-soft/40 px-4 py-2 text-[12px] uppercase tracking-wider text-parchment/85"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-10 text-sm leading-relaxed text-parchment/60">
                Care is attentive to age, culture, sexual orientation, gender
                identity, family of origin, and diagnosis — for clients across
                every age and stage of life.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-forest-line bg-forest-line md:grid-cols-4">
          {logistics.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="bg-parchment-card">
              <div className="p-8">
                <p className="eyebrow">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Questions about coverage or rates?{" "}
            <Link href="/fees-insurance" className="link-quiet text-gold-deep">
              Fees &amp; insurance details
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
