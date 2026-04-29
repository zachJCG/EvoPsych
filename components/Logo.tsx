interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

export default function Logo({ className = "", withWordmark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        aria-hidden
      >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#b08c2e" strokeWidth="0.6" opacity="0.45" />

        {/* Right side — earthy striated landscape */}
        <defs>
          <clipPath id="rightHalf">
            <path d="M50 5 A45 45 0 0 1 50 95 Z" />
          </clipPath>
          <linearGradient id="earth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4b88a" />
            <stop offset="35%" stopColor="#b89968" />
            <stop offset="65%" stopColor="#a8b89a" />
            <stop offset="100%" stopColor="#647e6a" />
          </linearGradient>
        </defs>

        <g clipPath="url(#rightHalf)">
          <rect x="50" y="5" width="50" height="22" fill="#e6d4a8" opacity="0.85" />
          <rect x="50" y="27" width="50" height="14" fill="#c9a772" opacity="0.85" />
          <path d="M50 41 Q70 38 100 44 L100 56 Q70 53 50 56 Z" fill="#a8b89a" opacity="0.85" />
          <path d="M50 56 Q70 60 100 56 L100 72 Q70 70 50 72 Z" fill="#7a8e75" opacity="0.85" />
          <rect x="50" y="72" width="50" height="23" fill="#4a5d48" opacity="0.85" />
        </g>

        {/* Left side — tree silhouette */}
        <g transform="translate(50,50)">
          {/* Trunk */}
          <path
            d="M-12 38 Q-10 20 -8 5 Q-6 -8 -4 -18 L-2 -22 L-4 -22 Q-7 -10 -12 5 Q-16 22 -18 38 Z"
            fill="#5a3d2b"
          />
          {/* Branches */}
          <path d="M-6 -4 Q-14 -8 -22 -10" stroke="#5a3d2b" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M-5 -12 Q-12 -18 -20 -22" stroke="#5a3d2b" strokeWidth="0.9" fill="none" strokeLinecap="round" />
          <path d="M-3 -18 Q-8 -26 -14 -32" stroke="#5a3d2b" strokeWidth="0.8" fill="none" strokeLinecap="round" />

          {/* Leaves — clusters of small ovals in muted greens & golds */}
          {[
            { x: -22, y: -10, c: "#8ea18f" },
            { x: -28, y: -14, c: "#a8b89a" },
            { x: -24, y: -18, c: "#647e6a" },
            { x: -20, y: -22, c: "#8ea18f" },
            { x: -14, y: -26, c: "#a8b89a" },
            { x: -10, y: -30, c: "#647e6a" },
            { x: -6, y: -32, c: "#8ea18f" },
            { x: -2, y: -28, c: "#cba844" },
            { x: -16, y: -16, c: "#cba844" },
            { x: -10, y: -20, c: "#a8b89a" },
            { x: -22, y: -4, c: "#647e6a" },
            { x: -18, y: 0, c: "#8ea18f" },
          ].map((leaf, i) => (
            <ellipse
              key={i}
              cx={leaf.x}
              cy={leaf.y}
              rx="3.2"
              ry="1.8"
              fill={leaf.c}
              transform={`rotate(${(i * 23) % 90 - 45} ${leaf.x} ${leaf.y})`}
              opacity="0.92"
            />
          ))}
        </g>
      </svg>

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
