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
          DEFAULT: "#0EA5E9", // pick your accent
          dark: "#0284C7",
          light: "#7DD3FC",
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
