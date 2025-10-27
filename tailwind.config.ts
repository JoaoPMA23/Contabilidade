import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1280px",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#1f2937",
          wine: "#7f1d3a",
          orange: "#f97316",
          green: "#16a34a",
          light: "#f8fafc",
        },
        surface: {
          light: "#ffffff",
          muted: "#f1f5f9",
          border: "#d0d7e2",
        },
        neutral: {
          DEFAULT: "#475569",
          dark: "#334155",
          darker: "#1e293b",
          light: "#94a3b8",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "Roboto",
          "\"Helvetica Neue\"",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
