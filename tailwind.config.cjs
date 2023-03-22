/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: "'Garamond', 'serif'",
        gordita: "'Gordita', 'sans-serif'",
        gorditaLight: "'Gordita Light', 'sans-serif'",
        circularStd: "'Circular Std', 'sans-serif'"
      },
      colors: {
        "jobi-green-dark": "#254135",
        "jobi-green": "#31795A",
        "jobi-green-bright": "#00BF58",
        "jobi-green-light": "#E9F2EF",
        "jobi-green-lime": "#D2F34C",
        "jobi-black": "#0F1620",
        "jobi-grey": "#C4C4C4",
        "jobi-grey-light": "#F5F5F5"
      }
    },
  },
  plugins: [],
}
