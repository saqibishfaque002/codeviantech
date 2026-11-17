import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#081326",
          soft: "#0d1b32",
          panel: "#10213b",
          panelLight: "#162a4a",
          blue: "#5b8cff",
          cyan: "#55d6e8",
          line: "rgba(180, 203, 238, 0.14)",
          text: "#f4f7fc",
          muted: "#a8b5c9",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(91, 140, 255, 0.2)",
        "glow-cyan": "0 0 35px rgba(85, 214, 232, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
