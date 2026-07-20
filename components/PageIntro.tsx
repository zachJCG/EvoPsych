import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="grain border-b border-forest-line">
      <div className="mx-auto max-w-wrap px-6 pb-16 pt-14 lg:px-10 lg:pb-20 lg:pt-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.05] md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
