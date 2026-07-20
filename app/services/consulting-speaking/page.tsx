import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Consulting & Speaking",
  description:
    "Professional consultation, presentations, and forensic expertise from Dr. Sagan King, Psy.D. — for clinicians, courts, employers, and community organizations.",
};

const audiences = [
  {
    label: "Clinicians & Students",
    copy: "Differential diagnosis, common ethical pitfalls, integrated treatment planning, and current research in clinical psychology.",
  },
  {
    label: "Courts & Justice System",
    copy: "Trauma-informed care, de-escalation, and preventing secondary trauma — for probation officers, case managers, and law enforcement.",
  },
  {
    label: "Employers & Teams",
    copy: "Managing workplace conflict, gossip, and burnout. Cultivating environments that prioritize employee mental health and team dynamics.",
  },
  {
    label: "Community & Educational Groups",
    copy: "Approachable, research-grounded talks on mental health, relationships, identity, and life transitions — adapted to the audience.",
  },
];

const topics = [
  "Differential Diagnosis & Ethical Pitfalls",
  "Trauma-Informed Care & De-escalation",
  "Preventing Secondary Trauma in High-Stress Roles",
  "Workplace Conflict, Gossip & Team Dynamics",
  "Codependency, Attachment & Adult Relationships",
  "Substance Use & the Path to Recovery",
  "Identity Development Across the Lifespan",
  "Mental Health Literacy for Non-Clinicians",
];

const forensicTopics = [
  "Childhood exposure to domestic violence and future outcomes",
  "Recidivism rates and risk assessment for specific charges",
  "Trajectory of mental health diagnoses on impulse control & decision making",
  "Capacity to advocate for one's own best interest",
];

export default function ConsultingSpeakingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services · Consulting & Speaking"
        title={
          <>
            Speaking, grounded in{" "}
            <em className="text-gold-deep">current research</em>.
          </>
        }
        intro="Tailored to your audience. Adapted to your goals. Delivered with clarity and care."
      />

      {/* AUDIENCES */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Audiences</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
            Built for the room you&apos;re bringing together.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.label} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-2xl border border-forest-line bg-parchment-card p-8">
                <h3 className="font-display text-2xl">{a.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {a.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TOPICS */}
      <section className="border-y border-forest-line bg-parchment-deep">
        <div className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Sample Topics</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
                Adapted to your audience.
              </h2>
              <p className="mt-5 text-ink-muted">
                Whether the goal is professional development, community
                education, or workplace culture — the presentation is shaped
                around your specific objectives.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-7">
              <ul className="grid gap-3">
                {topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-forest-line bg-parchment-card px-5 py-4 text-sm text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FORENSIC */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Forensic Expertise</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
            Expert perspective for legal contexts.
          </h2>
          <p className="mt-5 max-w-2xl text-ink-muted">
            Consultation and testimony informed by clinical research,
            including:
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {forensicTopics.map((t, i) => (
            <Reveal key={t} delay={(i % 2) * 0.08} as="li">
              <div className="flex gap-4 rounded-xl border-l-2 border-gold bg-parchment-card px-6 py-5 text-sm leading-relaxed text-ink-soft">
                {t}
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Bring the conversation to your room."
        copy="Tell us about your audience and objectives — we'll shape the engagement around them."
      />
    </>
  );
}
