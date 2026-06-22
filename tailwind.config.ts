import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          50: "#F4F5F7",
          100: "#E5E7EB",
          800: "#1B1F2A",
          900: "#11141B",
          950: "#0B0D12",
        },
        surface: {
          DEFAULT: "#151922",
          raised: "#1B202B",
          line: "#252B38",
        },
        signal: {
          DEFAULT: "#5EEAD4",
          dim: "#2DD4BF",
          50: "#ECFEFB",
        },
        spark: {
          DEFAULT: "#FFB454",
          dim: "#E8973A",
        },
        ash: {
          DEFAULT: "#A7AEBE",
          dim: "#6B7280",
          bright: "#E7E9EE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(94,234,212,0.10), transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(94, 234, 212, 0.35)",
        "glow-spark": "0 0 40px -10px rgba(255, 180, 84, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
