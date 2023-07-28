/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  //  purge: ['./dist/**/*.html', './dist/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "red-laud": "#B50000",
        "gray-laud": "#242424",
        "red-laud-light": "#AC0000",
        "red-laud-middle": "#0A0000",
        "black-laud": "#0B0C0C",
        "gray-laud-card-dark": "#1c1c1e",
      },
      backgroundColor: {
        "red-laud": "#B50000",
        "gray-laud": "#242424",
        "gray-laud-card": "#2c2c2e",
        "gray-laud-card-dark": "#1c1c1e",
        "gray-laud-card-light": "#f4f4f6",
        "gray-laud-player": "#323232",
        "gray-laud-article": "#212121",
        "red-laud-play-button": "#A22D2D",
        "red-laud-button": "#911C1B",
        "gray-laud-section-one": "#1c1c1e",
        "gray-laud-section-two": "#2c2c2e",
      },
      ringColor: {
        "red-laud": "#B50000",
      },
      borderColor: {
        "pink-laud": "#EA539E",
        "red-laud": "#911C1B",
        "red-laud-play-button": "#A22D2D",
      },
      textColor: {
        "red-laud": "#B50000",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "20s ease-in-out 1s infinite marquee",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
