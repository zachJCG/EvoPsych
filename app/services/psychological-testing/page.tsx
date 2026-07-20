import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Psychological Testing",
  description:
    "Comprehensive psychological assessments in Cincinnati, OH — diagnostic clarification, educational accommodations, forensic evaluations, and treatment planning.",
};

const testingTypes = [
  {
    label: "Diagnostic Clarification",
    copy: "ADHD, learning disabilities, autism spectrum, mood and anxiety disorders, personality functioning.",
  },
  {
    label: "Educational & Accommodations",
    copy: "Psychoeducational assessments to support school, college, and standardized-testing accommodations.",
  },
  {
    label: "Forensic & Court-Ordered",
    copy: "Evaluations to determine parental capacity, sensibility, or judgment in legal proceedings.",
  },
  {
    label: "Treatment Planning",
    copy: "Reveals nuanced comorbid conditions and recommends specific next steps for clients who feel stuck.",
  },
];

const included = [
  "Initial clinical interview & background review",
  "Carefully selected, validated testing battery",
  "Scoring, interpretation, and integration",
  "Comprehensive written report",
  "Feedback session reviewing findings & recommendations",
  "Frequent status updates throughout the process",
];

export default function TestingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services · Psychological Testing"
        title={
          <>
            Assessments that bring{" "}
            <em className="text-gold-deep">clarity</em>.
          </>
        }
        intro="Diagnostic clarity, accommodations, and treatment direction — when the way ahead feels unclear."
      />

      {/* WHEN TESTING HELPS */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">When Testing Helps</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
              The right battery answers the right questions.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="space-y-5">
              <p className="leading-relaxed text-ink-soft">
                Testing is considered when there&apos;s uncertainty about the
                reasons a person is having challenges with mood, behavior,
                thinking, or learning. It can quantify a change from a previous
                baseline or clarify the severity of current symptoms.
              </p>
              <p className="leading-relaxed text-ink-muted">
                The right testing battery can provide diagnostic clarity,
                reveal comorbid conditions, or suggest specific treatment
                recommendations and next steps for someone who feels stuck in
                a treatment rut.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TYPES */}
      <section className="border-y border-forest-line bg-parchment-deep">
        <div className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
          <Reveal>
            <p className="eyebrow">Types of Evaluations</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
              Tailored to your referral question.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testingTypes.map((t, i) => (
              <Reveal key={t.label} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-2xl border border-forest-line bg-parchment-card p-8">
                  <h3 className="font-display text-2xl">{t.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {t.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Each Assessment Includes</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light md:text-5xl">
            A start-to-finish process.
          </h2>
          <p className="mt-5 max-w-2xl text-ink-muted">
            Services can be expanded to include record review, collateral
            interviews, or additional testing batteries as the case requires.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.08} as="li">
              <div className="flex h-full gap-5 rounded-2xl border border-forest-line bg-parchment-card p-7">
                <span className="font-display text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-ink-soft">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand
        title="Start with the right questions."
        copy="Reach out to discuss your referral question and whether an assessment is the right next step."
      />
    </>
  );
}
