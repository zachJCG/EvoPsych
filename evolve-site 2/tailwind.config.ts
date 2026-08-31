import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from Sagan's business card
        forest: {
          50: "#f3f5f3",
          100: "#dde3dd",
          200: "#b8c4b9",
          300: "#8ea18f",
          400: "#647e6a",
          500: "#3f5944",
          600: "#2f4334",
          700: "#243329",
          800: "#1a2620",  // primary background
          900: "#121a16",
        },
        gold: {
          50: "#fbf6e6",
          100: "#f4e9bf",
          200: "#ead693",
          300: "#dec068",
          400: "#cba844",
          500: "#b08c2e",   // brushed gold from card
          600: "#8c6e22",
          700: "#6a521a",
          800: "#4a3812",
        },
        cream: "#f5efe1",
        bark: "#5a3d2b",
        sage: "#a8b89a",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
