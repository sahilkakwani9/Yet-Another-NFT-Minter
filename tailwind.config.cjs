/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Shown in the SocialBar component as font-open-sans
        'Inter': [ "Inter Tight", 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}
