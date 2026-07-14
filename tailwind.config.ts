import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core surface system
        surface: {
          light: "#F7F8FA",
          dark: "#07090D",
        },
        // DeshWeather signature accent — monsoon teal, distinct from generic blue
        monsoon: {
          50: "#EAFBF7",
          100: "#CFF5EA",
          200: "#9BE9D3",
          300: "#5FD6B7",
          400: "#2CBB99",
          500: "#149E80",
          600: "#0E7F67",
          700: "#0C6553",
          800: "#0B5044",
          900: "#0A4238",
        },
        // Warm accent for sunrise/iftar/heat states
        ember: {
          300: "#FFC48A",
          400: "#FFA85C",
          500: "#F3873A",
          600: "#D96B21",
        },
        sky: {
          night: "#050A16",
          dawn: "#2B3A67",
          day: "#3E8EDE",
          dusk: "#6B4A8A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(9, 22, 20, 0.18)",
        "glass-lg": "0 16px 48px 0 rgba(9, 22, 20, 0.24)",
        "inner-glass": "inset 0 1px 0 0 rgba(255,255,255,0.12)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "drift": "drift 40s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
