import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span
        aria-hidden
        className={`flex h-9 w-9 items-center justify-center rounded-full border font-display text-lg leading-none transition group-hover:bg-gold/10 ${
          dark ? "border-gold-soft/60 text-gold-soft" : "border-gold/50 text-gold-deep"
        }`}
      >
        E
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[17px] tracking-wide ${
            dark ? "text-parchment" : "text-ink"
          }`}
        >
          Evolve
        </span>
        <span
          className={`block text-[9.5px] uppercase tracking-caps ${
            dark ? "text-parchment/60" : "text-ink-muted"
          }`}
        >
          Psychological Services
        </span>
      </span>
    </Link>
  );
}
