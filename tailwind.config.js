/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-9": "#3E63DD",
      },
      boxShadow: {
        "custom": "12px 12px 12px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
