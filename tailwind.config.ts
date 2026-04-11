import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "deep-blue": "#1E2A78",
          "deep-navy": "#141B4D",
          "soft-blue": "#E8ECFF",
          "teal": "#2FA4A9",
          "soft-teal": "#6FC9C5",
          "deep-teal": "#1F7A80",
          "bg": "#F7F9FC",
          "text": "#1C1F21",
        },
      },
      maxWidth: {
        content: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)",
        "glow-teal": "0 0 20px rgba(47, 164, 169, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
