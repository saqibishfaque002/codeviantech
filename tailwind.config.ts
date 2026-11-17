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
          bg: "#090D16",         // Deep midnight obsidian (rich, modern, premium contrast)
          surface: "#0D1424",    // Secondary background container
          panel: "#111A2E",      // Card / panel surface
          panelLight: "#17233D", // Highlighted / hovered panel surface
          panelBorder: "rgba(255, 255, 255, 0.08)", // Fine hairline border
          blue: "#3B82F6",       // Sapphire primary blue
          blueHover: "#2563EB",  // Active / hover state
          cyan: "#06B6D4",       // Precision cyan accent
          teal: "#14B8A6",       // Secondary accent
          indigo: "#6366F1",     // Gradient balance
          line: "rgba(255, 255, 255, 0.08)", // Crisp subtle borders
          lineStrong: "rgba(255, 255, 255, 0.14)",
          text: "#F8FAFC",       // Slate 50 crisp high-contrast text
          muted: "#94A3B8",      // Slate 400 readable paragraph text
          darkMuted: "#64748B",  // Slate 500 metadata text
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
        glow: "0 0 40px -10px rgba(59, 130, 246, 0.25)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.25)",
        button: "0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeIn: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideIn: "slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
