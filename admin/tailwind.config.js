/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-layout": "0.5fr 2fr 1fr 1fr 0.5fr",
        "custom-layout2": "0.5fr 2fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
