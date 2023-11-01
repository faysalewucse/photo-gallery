/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#334155",
        light: "#f9fafb",
        danger: "#ef4444",
        danger2: "#dc2626",
        success: "#22c55e",
        success2: "#16a34a",
      },
    },
  },
  plugins: [],
};
