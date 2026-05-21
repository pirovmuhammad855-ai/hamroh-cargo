import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        muted: "#64748B",
        brand: {
          50: "#EEF2FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8"
        },
        navy: {
          900: "#020617",
          800: "#07111f",
          700: "#0a1a2f"
        },
        electric: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#2563eb"
        },
        glass: "rgba(255,255,255,0.08)",
        glow: "#60a5fa"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 42, 0.10)",
        glass: "0 18px 60px rgba(37, 99, 235, 0.14)",
        glow: "0 0 16px 2px #38bdf8, 0 0 32px 8px #2563eb44",
        card: "0 8px 32px 0 rgba(37,99,235,0.12)",
        nav: "0 2px 24px 0 rgba(14,165,233,0.10)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        premium: "1.5rem",
        card: "1.25rem",
        button: "0.75rem"
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(14,165,233,0.18), rgba(2,6,23,0.82))',
        'footer-gradient': 'linear-gradient(180deg, #07111f 0%, #0F172A 100%)',
        'glow': 'radial-gradient(circle, #38bdf8 0%, transparent 70%)'
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      dropShadow: {
        'glow': '0 0 8px #38bdf8',
        'electric': '0 0 12px #0ea5e9',
      }
    }
  },
  plugins: []
};

export default config;
