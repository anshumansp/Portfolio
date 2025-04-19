/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#1a1035",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "gold-100": "#b8860b",
        "gold-200": "#ffd700",
        "burgundy-100": "#800020",
        "emerald-100": "#0f5132",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        premium: "0px 20px 50px -12px rgba(184, 134, 11, 0.25)",
      },
      screens: {
        xs: "350px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
        "gradient-premium": "linear-gradient(to right, #050816, #1a1035)",
        "gradient-gold": "linear-gradient(to right, #050816, #b8860b)",
      },
    },
  },
  plugins: [],
};