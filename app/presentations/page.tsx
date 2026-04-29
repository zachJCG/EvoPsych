import Link from "next/link";
import PageHeader from "@/components/PageHeader";

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

const forensicTopics = [
  "Childhood exposure to domestic violence and future outcomes",
  "Recidivism rates and risk assessment for specific charges",
  "Trajectory of mental health diagnoses on impulse control & decision making",
  "Capacity to advocate for one's own best interest",
];

export default function PresentationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 03 / Presentations"
        title={
          <>
            Speaking engagements, grounded<br />
            in <span className="italic gold-text">current research</span>.
          </>
        }
        intro="Engage a professional who will understand what you need, adapt the materials to include the most up-to-date research, and present in an organized, genuine, and compassionate way."
      />

      {/* WHO IT'S FOR */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Audiences
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Built for the room you&apos;re bringing together.
            </h2>
          </div>

          <div className="grid gap-px bg-gold-500/15 md:grid-cols-2">
            {audiences.map((a) => (
              <div key={a.label} className="bg-forest-800 p-8">
                <h3 className="font-display text-xl text-cream">{a.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{a.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE TOPICS */}
      <section className="relative bg-forest-900 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                  Sample Topics
                </span>
              </div>
              <h2 className="font-display text-4xl leading-tight text-cream">
                Adapted to your audience.
              </h2>
              <p className="mt-5 text-cream/70">
                Whether the goal is professional development, community
                education, or workplace culture — we&apos;ll shape the
                presentation around your specific objectives.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3">
                {[
                  "Differential Diagnosis & Ethical Pitfalls",
                  "Trauma-Informed Care & De-escalation",
                  "Preventing Secondary Trauma in High-Stress Roles",
                  "Workplace Conflict, Gossip & Team Dynamics",
                  "Codependency, Attachment & Adult Relationships",
                  "Substance Use & the Path to Recovery",
                  "Identity Development Across the Lifespan",
                  "Mental Health Literacy for Non-Clinicians",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-4 border-l-2 border-gold-500/40 bg-forest-800/40 px-5 py-4 text-cream/85"
                  >
                    <span className="text-gold-400">◆</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORENSIC TESTIMONY */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Forensic Testimony
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Scientific insight at the intersection of law and behavior.
            </h2>
          </div>

          <p className="max-w-3xl text-cream/75 leading-relaxed">
            There are times when a client or court representative wants a
            professional to shed light on a specific topic or present the most
            up-to-date research to the court. Forensic testimony allows a
            psychological professional to provide scientific insights and
            experience toward the successful resolution of a court matter.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {forensicTopics.map((t) => (
              <div
                key={t}
                className="flex items-start gap-4 border-t border-gold-500/20 pt-4 text-sm text-cream/80"
              >
                <span className="text-gold-400">◆</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-forest-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Have a date or topic in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Send a brief description of your audience, goals, and timeline. We&apos;ll
            respond with availability and tailored options.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-gold-400/70 bg-gold-500/10 px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
            >
              Request a Speaking Engagement
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
