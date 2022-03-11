module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        concert: ["Concert One", "sans-serif"],
        pioret: ["Poiret One", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
