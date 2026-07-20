import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Individual Therapy",
  description:
    "Integrated, evidence-based individual therapy in Cincinnati, OH and via telehealth. CBT, DBT, ACT, MI, and psychodynamic approaches for children, teens, adults, and older adults.",
};

const concerns = [
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
];

const orientations = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    copy: "Evidence-based work on anxiety, depression, and relationship problems by changing unhelpful patterns of thinking, feeling, and behaving.",
  },
  {
    name: "Dialectical Behavior Therapy (DBT)",
    copy: "For mood disorders, problematic personality traits, substance use, self-harm, suicidal thoughts, and interpersonal conflict.",
  },
  {
    name: "Acceptance & Commitment Therapy (ACT)",
    copy: "Behavior change through cognitive flexibility, acceptance, and mindfulness.",
  },
  {
    name: "Motivational Interviewing (MI)",
    copy: "A collaborative, goal-oriented method that strengthens your own motivation and commitment to change.",
  },
  {
    name: "Psychodynamic Therapy",
    copy: "Understanding past relationships — particularly family — to heal emotional pain such as betrayal, humiliation, abandonment, and rejection.",
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
    copy: "A space for identity, relationships, and pressure to be examined honestly — at the client's pace.",
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
      <PageIntro
        eyebrow="Services · Individual Therapy"
        title={
          <>
            Therapy that feels <em className="text-gold-deep">human</em>.
          </>
        }
        intro="53-minute sessions, in person or virtual. Humor, encouragement, and gentle challenges in a space designed for real growth."
      />

      {/* CONCERNS */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">What We Work On</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
            Whatever you&apos;re carrying, it belongs in the room.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {concerns.map((c) => (
              <li
                key={c}
                className="rounded-full border border-forest-line bg-parchment-card px-4 py-2 text-sm text-ink-soft"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ORIENTATIONS */}
      <section className="border-y border-forest-line bg-parchment-deep">
        <div className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
          <Reveal>
            <p className="eyebrow">Therapeutic Orientations</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
              An integrated approach.
            </h2>
            <p className="mt-5 max-w-2xl text-ink-muted">
              No single orientation fits every person. Sessions blend the
              traditions below as the work calls for them.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orientations.map((o, i) => (
              <Reveal key={o.name} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-forest-line bg-parchment-card p-7">
                  <h3 className="font-display text-xl leading-snug">
                    {o.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {o.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POPULATIONS */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Across Every Stage</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
            Care adapted to where you are.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {populations.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="border-t-2 border-gold/50 pt-5">
                <h3 className="font-display text-xl">{p.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Take the first step."
        copy="Seeking therapy is a courageous step. Clients report a respectful, non-judgmental environment — one that enables relief, connection, and forward progression."
      />
    </>
  );
}
