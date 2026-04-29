import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const testingTypes = [
  {
    label: "Diagnostic Clarification",
    copy: "ADHD, learning disabilities, autism spectrum, mood and anxiety disorders, personality functioning.",
  },
  {
    label: "Educational & Accommodations",
    copy: "Psychoeducational assessments to support school, college, and standardized testing accommodations.",
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
      <PageHeader
        eyebrow="Service 02"
        title={
          <>
            Assessments that bring<br />
            <span className="italic gold-text">clarity</span>.
          </>
        }
        intro="Diagnostic clarity, accommodations, and treatment direction — when the way ahead feels unclear."
      />

      {/* WHEN TO CONSIDER TESTING */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                  When Testing Helps
                </span>
              </div>
              <h2 className="font-display text-4xl leading-tight text-cream">
                The right battery answers the right questions.
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-7">
              <p className="text-cream/80 leading-relaxed">
                Testing is considered when there&apos;s uncertainty about the reasons
                a person is having challenges with mood, behavior, thinking, or
                learning. It can quantify a change from a previous baseline or
                clarify the severity of current symptoms.
              </p>
              <p className="text-cream/65 leading-relaxed">
                The right testing battery can provide diagnostic clarity, reveal
                comorbid conditions, or suggest specific treatment recommendations
                and next steps for someone who feels stuck in a treatment rut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF EVALUATIONS */}
      <section className="relative bg-forest-900 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Types of Evaluations
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream">
              Tailored to your referral question.
            </h2>
          </div>

          <div className="grid gap-px bg-gold-500/15 md:grid-cols-2">
            {testingTypes.map((t) => (
              <div key={t.label} className="bg-forest-900 p-8">
                <h3 className="font-display text-xl text-cream">{t.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{t.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
                Each Assessment Includes
              </span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream">
              A start-to-finish process.
            </h2>
            <p className="mt-5 text-cream/70">
              Services can be expanded to include record review, collateral
              interviews, or additional testing batteries as the case requires.
            </p>
          </div>

          <ol className="grid gap-px bg-gold-500/15 md:grid-cols-2">
            {included.map((item, i) => (
              <li key={item} className="flex gap-5 bg-forest-800 p-7">
                <span className="font-display text-2xl text-gold-300/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-cream/85">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY A LICENSED PSYCHOLOGIST */}
      <section className="relative bg-forest-900 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
              Why a Licensed Psychologist
            </span>
          </div>
          <h2 className="font-display text-3xl leading-snug text-cream md:text-4xl">
            Some tests can only be administered, scored, and interpreted by
            clinical psychologists.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            When a referral is accepted by the practice, the professional working
            with you is qualified to complete the entire process — start to
            finish. That training, combined with current literature and an
            understanding of each test&apos;s implications and limitations, gives
            clients insights they may not receive elsewhere. Reports are
            completed in a timely fashion, and clients receive frequent updates
            on report status throughout.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-gold-400/70 bg-gold-500/10 px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
            >
              Inquire About Testing
              <span>→</span>
            </Link>
            <Link
              href="https://sagan-king.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold text-[12px] uppercase tracking-[0.28em] text-cream/80"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
