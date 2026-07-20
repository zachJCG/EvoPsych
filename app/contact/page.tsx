import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Evolve Psychological Services in Cincinnati, OH. Call (513) 201-7776, email, or send a message — or book directly through the secure client portal.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            We&apos;d love to <em className="text-gold-deep">hear from you</em>.
          </>
        }
        intro="For consultations, testing inquiries, and speaking requests — send a message below or schedule directly online."
      />

      <section className="mx-auto max-w-wrap px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Details */}
          <div className="space-y-10 lg:col-span-5">
            <Reveal>
              <h2 className="eyebrow">Office</h2>
              <address className="mt-3 not-italic leading-relaxed text-ink-soft">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <p className="mt-1 text-sm text-ink-muted">
                Office is ADA accessible · {site.hours}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="eyebrow">Direct</h2>
              <ul className="mt-3 space-y-1 text-ink-soft">
                <li>
                  <a href={site.phoneHref} className="link-quiet">
                    {site.phone}
                  </a>
                </li>
                <li className="text-sm text-ink-muted">Fax: {site.fax}</li>
                <li>
                  <a href={`mailto:${site.email}`} className="link-quiet break-all">
                    {site.email}
                  </a>
                </li>
              </ul>
              <p className="mt-2 text-sm text-ink-muted">
                Emails are typically answered within 48 hours.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl bg-forest p-8 text-parchment">
                <h2 className="font-display text-2xl">
                  Prefer to book directly?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-parchment/70">
                  Existing and prospective clients can request appointments
                  through the secure client portal.
                </p>
                <a
                  href={site.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-gold px-7 py-3.5 text-[12px] font-medium uppercase tracking-caps text-forest-deep transition hover:bg-gold-soft"
                >
                  Open Client Portal
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="border-t border-forest-line pt-6 text-sm leading-relaxed text-ink-muted">
                In emergencies, call 911 or dial 988 (Suicide &amp; Crisis
                Lifeline). This site is not monitored for crisis support.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl border border-forest-line bg-parchment-deep p-8 lg:p-10">
              <h2 className="font-display text-3xl">Send a message</h2>
              <p className="mb-8 mt-2 text-sm text-ink-muted">
                Tell us a little about what you&apos;re looking for.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
