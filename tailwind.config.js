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
    screens: {
      'xs': {'min': '525px'},
      '-xs': {'max': '525px'},

      'sm': {'min': '640px'},
      '-sm': {'max': '640px'},

      'md': {'min' : '800px'},
      '-md': {'max': '800px'},

      'lg': {'min' : '1024px'},
      '-lg': {'max': '1024px'},

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}

