import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette drawn from the practice's forest + brushed-gold identity,
        // rebuilt for a light, warm, editorial layout.
        ink: {
          DEFAULT: "#1c2b23", // deep forest ink — primary text
          soft: "#3d4f45",
          muted: "#69796f",
          faint: "#93a099",
        },
        parchment: {
          DEFAULT: "#f7f4ec", // warm ivory page background
          deep: "#efeadd", // tinted section background
          card: "#fdfcf8", // raised card surface
        },
        forest: {
          DEFAULT: "#22382c", // deep surfaces (footer, dark bands)
          deep: "#16261d",
          line: "#d9d4c5", // hairline rules on parchment
        },
        gold: {
          DEFAULT: "#a3822b", // brushed gold accent
          deep: "#8c6e22",
          soft: "#c2a558",
          wash: "#f1e8d2", // pale gold tint for chips/washes
        },
        sage: {
          DEFAULT: "#a8b89a",
          wash: "#e9ede2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "72rem",
      },
      letterSpacing: {
        caps: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
