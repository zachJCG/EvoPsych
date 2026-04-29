import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            We&apos;d love to <span className="italic gold-text">hear from you</span>.
          </>
        }
        intro="For consultations, testing inquiries, and presentation requests — reach out using the details below or schedule directly online."
      />

      <section className="relative py-20">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
                Office
              </h3>
              <p className="mt-3 text-cream/85">
                323 W. Fifth St. #1N<br />
                Cincinnati, OH 45202
              </p>
              <p className="mt-1 text-sm text-cream/55">Office is ADA accessible.</p>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
                Direct
              </h3>
              <p className="mt-3 text-cream/85">
                <a href="tel:5132017776" className="link-gold">(513) 201-7776</a>
              </p>
              <p className="mt-1 text-cream/85">
                <a href="mailto:dr.saganking@evolutionpsych.com" className="link-gold">
                  dr.saganking@evolutionpsych.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
                Licensure
              </h3>
              <p className="mt-3 text-cream/85">Dr. Sagan King, Psy.D.</p>
              <p className="text-cream/65 text-sm">Licensed in Ohio &amp; North Carolina</p>
            </div>

            <div className="border-t border-gold-500/20 pt-6 text-sm text-cream/55">
              In emergencies, dial 911 or 988 (Suicide &amp; Crisis Lifeline).
              This site is not for crisis support.
            </div>
          </div>

          <div className="bg-forest-900 p-10">
            <h3 className="font-display text-2xl text-cream">Schedule online</h3>
            <p className="mt-3 text-cream/70">
              Existing and prospective clients can request appointments through
              our secure portal.
            </p>
            <Link
              href="https://sagan-king.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-gold-400/70 bg-gold-500/10 px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-gold-100 transition hover:bg-gold-500/20"
            >
              Open Client Portal
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
