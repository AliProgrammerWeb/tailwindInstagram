/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#00376b',
      },
      screens:{
        'smm': '375px'
      }
    },
  },
  plugins: [],
}

