import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold-500/15 bg-forest-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo withWordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/65">
              Integrated, client-centered psychological services for adolescents,
              adults, and older adults — in person and virtually.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
              Office
            </h4>
            <div className="mt-4 space-y-1 text-sm text-cream/80">
              <div>323 W. Fifth St. #1N</div>
              <div>Cincinnati, OH 45202</div>
              <div className="pt-3">
                <a href="tel:5132017776" className="link-gold">(513) 201-7776</a>
              </div>
              <div>
                <a href="mailto:dr.saganking@evolutionpsych.com" className="link-gold">
                  dr.saganking@evolutionpsych.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
              Licensure
            </h4>
            <div className="mt-4 space-y-1 text-sm text-cream/80">
              <div>Dr. Sagan King, Psy.D.</div>
              <div>Licensed Psychologist</div>
              <div className="pt-2 text-cream/60">Ohio &middot; North Carolina</div>
            </div>
          </div>
        </div>

        <div className="gold-rule mt-14" />

        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-[11px] uppercase tracking-[0.22em] text-cream/45 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Evolve Psychological Services</div>
          <div>
            In emergencies, call 988 or 911. This site is not for crisis support.
          </div>
        </div>
      </div>
    </footer>
  );
}
