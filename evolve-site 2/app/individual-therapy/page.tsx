import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const orientations = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    copy: "An evidence-based therapy used to treat anxiety, depression, and relationship problems by changing unhealthy ways of thinking, feeling, and behaving.",
  },
  {
    name: "Dialectical Behavior Therapy (DBT)",
    copy: "An evidence-based approach for mood disorders, problematic personality traits, substance use, self-harm, suicidal thoughts, and interpersonal conflict.",
  },
  {
    name: "Acceptance & Commitment Therapy (ACT)",
    copy: "An evidence-based therapy for commitment issues and behavior change through cognitive flexibility, acceptance, and mindfulness.",
  },
  {
    name: "Motivational Interviewing (MI)",
    copy: "A collaborative, goal-oriented method that strengthens a person's own motivation and commitment to change.",
  },
  {
    name: "Psychodynamic Therapy",
    copy: "Analyzing past relationships — particularly family — to understand and heal emotional pain such as injustice, betrayal, humiliation, abandonment, and rejection.",
  },
  {
    name: "Humanistic & Existential",
    copy: "Holistic work focused on free will, human potential, and meaning — exploring feelings, identity, and the conflicts of being human.",
  },
];

const populations = [
  {
    label: "Children",
    copy: "Tailored care addressing developmental milestones, school stressors, anxiety, and family dynamics.",
  },
  {
    label: "Adolescents",
    copy: "A space for identity, relationships, and pressure to be examined honestly — and at the client's pace.",
  },
  {
    label: "Adults",
    copy: "Career, relationships, transitions, codependency, addiction, and the patterns that quietly run our lives.",
  },
  {
    label: "Older Adults",
    copy: "Navigating loss, role changes, legacy, and meaning in the next season of life.",
  },
];

export default function IndividualTherapyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 01"
        title={
          <>
            Honest, <span className="italic gold-text">integrated</span><br />
            individual therapy.
          </>
        }
        intro="53-minute sessions, in person or virtual. Humor, encouragement, and gentle challenges in a space designed for real growth."
      />

      {/* WHAT WE TREAT */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
              What We Work On
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-cream/85 md:grid-cols-3">
            {[
              "Anxiety",
              "Depression",
              "Trauma",
              "Codependency",
              "Addiction",
              "Substance Use",
              "Relationship Issues",
              "Attachment",
              "Self-Esteem",
              "Life Transitions",
              "Identity Development",
              "Mood Disorders",
              "Anger Management",
              "Open Relationships / Polyamory",
              "Sports Performance",
              "Loneliness",
              "Peer Relationships",
              "Separation Anxiety",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <span className="text-gold-400">◆</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative bg-forest-900 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Therapeutic Orientations
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              An integrated approach.
            </h2>
            <p className="mt-5 text-cream/70">
              No single orientation fits every person. Sessions blend the
              traditions below as the work calls for them.
            </p>
          </div>

          <div className="grid gap-px bg-gold-500/15 md:grid-cols-2">
            {orientations.map((o) => (
              <div key={o.name} className="bg-forest-900 p-8">
                <h3 className="font-display text-xl text-cream">{o.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {o.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Across Every Stage
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Care adapted to where you are.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {populations.map((p) => (
              <div key={p.label} className="border-t border-gold-500/20 pt-6">
                <div className="font-display text-xl text-gold-200">{p.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-forest-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Take the first step.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Seeking therapy is a courageous step. Our clients report a respectful,
            non-judgmental environment — one that enables relief, connection, and
            forward progression.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="https://sagan-king.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold-400/70 bg-gold-500/10 px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
            >
              Schedule a Consultation
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="link-gold text-[12px] uppercase tracking-[0.28em] text-cream/80"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
