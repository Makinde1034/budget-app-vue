/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryGreen : '#01C29A',
        primaryBlack : '#181818'
      }
    },
  },
  plugins: [],
}

