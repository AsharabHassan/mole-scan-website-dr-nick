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
      },
    },
  },
  plugins: [],
};

export default config;
