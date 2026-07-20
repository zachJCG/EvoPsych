import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Ready when you are.",
  copy = "Reaching out is the hardest step. From there, we move at your pace.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="grain bg-forest text-parchment">
      <div className="mx-auto max-w-wrap px-6 py-20 text-center lg:px-10 lg:py-24">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-parchment/70">{copy}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-caps text-forest-deep transition hover:bg-gold-soft"
            >
              Book a Session
            </a>
            <Link
              href="/contact"
              className="link-quiet text-[12px] uppercase tracking-caps text-parchment/80"
            >
              Send a Message
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
