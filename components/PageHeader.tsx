interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="grain relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 20%, rgba(176,140,46,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="rise rise-1 mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-gold-400" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-gold-300">
            {eyebrow}
          </span>
        </div>
        <h1 className="rise rise-2 font-display text-5xl leading-[1.05] text-cream md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-cream/75">
            {intro}
          </p>
        )}
        <div className="gold-rule mt-14" />
      </div>
    </section>
  );
}
