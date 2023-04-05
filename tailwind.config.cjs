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
        "jobi-grey-light": "#F7F7F7",
        "jobi-grey-light": "#F5F5F5",
        "jobi-blue": "#EAFBFD",
        "jobi-cream": "#FFFAEC",
        "jobi-pink": "#FFEBFB",
        "jobi-lavender": "#F7F5FF",
        "jobi-orange": "#FFF3EA"
      },
      backgroundImage: {
        "landing":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('./assets/index/photos/photo-group-mapbox.jpg')",
        "get-started":
          "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('./assets/index/photos/photo-laptops-marvin-meyer.jpg')",
        "wp":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%), url('./assets/index/photos/photo-wordpress-stephen-phillips-hostreviews-co-uk.jpg')",
        "audio": 
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%), url('./assets/index/photos/photo-audio-soundtrap.jpg')", 
        "branding": 
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%), url('./assets/index/photos/photo-design-balazs-ketyi.jpg')", 
        "support": 
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%), url('./assets/index/photos/photo-support-berkeley-communications.jpg')", 
        "testimonials":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/index/photos/photo-testimonials-brooke-cagle.jpg')",
        "bottom-banner": 
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('./assets/index/photos/photo-group-meeting-redd-f.jpg')"
      } 
    },
  },
  plugins: [],
}
