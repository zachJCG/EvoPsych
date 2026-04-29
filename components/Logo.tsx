interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

export default function Logo({ className = "", withWordmark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Evolve Psychological Services"
        className="h-12 w-12 object-contain"
      />

      {withWordmark && (
        <div className="leading-tight">
          <div className="font-display text-cream text-xl tracking-wide">Evolve</div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-cream/70">
            Psychological Services
          </div>
        </div>
      )}
    </div>
  );
}
