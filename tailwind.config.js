/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: "#1e3a5f", // Deep navy - professional and trustworthy
          dark: "#15294a",    // Darker navy for hover states
          light: "#2d5a8f",   // Lighter navy for accents
        },
        accent: {
          DEFAULT: "#475569", // Slate gray - sophisticated secondary
          light: "#64748b",   // Light slate
          lighter: "#94a3b8", // Even lighter slate for subtle elements
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
