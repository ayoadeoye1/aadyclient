/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        lead: ['Great Vibes', 'cursive'], //'Parisienne', 'Tilt Prism', 
        about: ['Tilt Prism', 'cursive'],
        txt: ['Parisienne', 'cursive']
      }
    },
  },
  plugins: [],
}

