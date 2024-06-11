/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/header_img.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      gridTemplateColumns: {
        "custom-layout": "1fr 1.5fr 1fr 1fr 1fr 0.5fr",
      },
    },
  },
  plugins: [],
};
