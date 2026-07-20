import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr. Sagan King",
  description:
    "Dr. Sagan King, Psy.D., is a licensed clinical psychologist in Cincinnati, OH, providing integrated therapy, psychological testing, and consultation. Licensed in Ohio and North Carolina.",
};

const values = [
  {
    title: "Genuine connection",
    copy: "Each 53-minute session is crafted to provide an intrinsic, intuitive, and authentic connection — not a script.",
  },
  {
    title: "A non-judgmental space",
    copy: "Clients consistently describe a respectful, non-judgmental environment that enables relief, connection, and forward progression.",
  },
  {
    title: "Culturally-informed care",
    copy: "Attentive to age, culture, sexual orientation, gender identity, family of origin, and diagnosis — because context shapes everything.",
  },
  {
    title: "Every age and stage",
    copy: "From children navigating school stressors to older adults navigating legacy and meaning — care adapts to where you are.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            A passion for{" "}
            <em className="text-gold-deep">authentic</em> engagement.
          </>
        }
      />

      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl border border-gold/30"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sage-wash">
                <Image
                  src="/sagan-king.jpg"
                  alt={`${site.provider.name}, ${site.provider.credentials}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 space-y-1 text-center">
                <p className="font-display text-2xl">
                  {site.provider.name}, {site.provider.credentials}
                </p>
                <p className="text-[11px] uppercase tracking-caps text-ink-muted">
                  {site.provider.title} · {site.provider.licensure}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft">
                Dr. Sagan King leads Evolve Psychological Services from
                downtown Cincinnati, working with clients across all ages and
                stages of life — in person and through secure telehealth.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="leading-relaxed text-ink-soft">
                The work is collaborative and multi-modal, drawing from
                cognitive behavioral therapy, dialectical behavior therapy,
                acceptance and commitment therapy, motivational interviewing,
                and psychodynamic traditions. Rather than fitting clients to a
                method, sessions blend these approaches as the work calls for
                them.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="leading-relaxed text-ink-soft">
                In the room, that looks like humor, encouragement, and gentle
                challenges that provoke insight — a style clients describe as
                honest, warm, and human. Beyond the therapy room, Dr. King
                provides psychological testing, professional consultation, and
                public speaking grounded in current research.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="rounded-2xl border border-forest-line bg-parchment-card p-7">
                <p className="eyebrow">Licensure</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Licensed Clinical Psychologist in Ohio and North Carolina.
                  Practicing from {site.address.street},{" "}
                  {site.address.city}, {site.address.state}{" "}
                  {site.address.zip}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-forest-line bg-parchment-deep">
        <div className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
          <Reveal>
            <p className="eyebrow">What Guides the Work</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
              Principles over protocols.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-forest-line bg-parchment-card p-8">
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {v.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come as you are."
        copy="Whether it's your first time in therapy or your fifth season of growth — you're welcome here."
      />
    </>
  );
}
