import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "light-lavender": "rgb(var(--light-lavender) / <alpha-value>)",
        "deep-aubergine": "rgb(var(--deep-aubergine) / <alpha-value>)",
        "rich-plum": "rgb(var(--rich-plum) / <alpha-value>)",
        "vibrant-purple": "rgb(var(--vibrant-purple) / <alpha-value>)",
        "deep-rose": "rgb(var(--deep-rose) / <alpha-value>)",
        "subtle-surface": "rgb(var(--subtle-surface) / <alpha-value>)",
        "text-on-dark": "rgb(var(--text-on-dark) / <alpha-value>)",
        // Legacy
        cream: "rgb(var(--cream) / <alpha-value>)",
        champagne: "rgb(var(--champagne) / <alpha-value>)",
        coffee: "rgb(var(--coffee) / <alpha-value>)"
      },
      borderRadius: {
        soft: "8px"
      },
      boxShadow: {
        offset: "6px 6px 0 0 rgb(27 16 36)",
        brutal: "6px 6px 0 rgb(27 16 36)",
        "brutal-purple": "6px 6px 0 rgb(124 58 237)"
      },
      fontFamily: {
        heading: ["var(--font-shrikhand)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
