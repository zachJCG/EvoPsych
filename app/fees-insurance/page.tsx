import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fees & Insurance",
  description:
    "Insurance and payment information for Evolve Psychological Services in Cincinnati, OH. In-network with Aetna and Custom Design Benefits; private pay and out-of-network options available.",
};

const faqs = [
  {
    q: "Which insurance plans are accepted?",
    a: "Evolve Psychological Services is in-network with Aetna and Custom Design Benefits. Coverage varies by plan, so we recommend confirming your outpatient mental health benefits with your insurer before the first session.",
  },
  {
    q: "What if you're out-of-network for my plan?",
    a: "Private pay is welcome, and many plans reimburse a portion of out-of-network care. On request, we can provide a superbill you can submit to your insurer for reimbursement.",
  },
  {
    q: "How long are sessions?",
    a: "Standard sessions are 53 minutes, offered in person at our downtown Cincinnati office or virtually via secure telehealth.",
  },
  {
    q: "When are appointments available?",
    a: "Appointments are available Monday through Saturday with flexible scheduling, including options for working professionals and students.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Emails are typically answered within 48 hours. For scheduling, the online client portal is the fastest route. If you are experiencing a clinical emergency, call 911 or 988 — this site is not monitored for crisis support.",
  },
  {
    q: "What about psychological testing fees?",
    a: "Assessment fees depend on the referral question and the scope of the testing battery. Reach out with your situation and we'll outline the process and cost before any commitment.",
  },
];

export default function FeesInsurancePage() {
  return (
    <>
      <PageIntro
        eyebrow="Fees & Insurance"
        title={
          <>
            Clear terms, <em className="text-gold-deep">no surprises</em>.
          </>
        }
        intro="What to expect before your first session — coverage, scheduling, and logistics."
      />

      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {site.insurance.map((plan, i) => (
            <Reveal key={plan} delay={i * 0.08}>
              <div className="rounded-2xl border border-forest-line bg-parchment-card p-8 text-center">
                <p className="eyebrow">
                  {i < 2 ? "In-Network" : "Also Welcome"}
                </p>
                <p className="mt-3 font-display text-2xl">{plan}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-forest-line bg-parchment-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
          <Reveal>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
              Answers up front.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) * 0.06}>
                <details className="group rounded-2xl border border-forest-line bg-parchment-card px-7 py-5 open:pb-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden
                      className="text-gold transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Still have questions?"
        copy="Send a message with your plan details and we'll help you figure out coverage before you commit to anything."
      />
    </>
  );
}
