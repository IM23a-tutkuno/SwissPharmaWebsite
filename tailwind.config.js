/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./html/*.html"  // Include all HTML files in your project
  ],
  theme: {
    extend: {
      colors: {
        'swiss-blue': '#2E74FF',
      }
    },
  },
  plugins: [],
}