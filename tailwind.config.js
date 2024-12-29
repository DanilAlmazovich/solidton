/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '1450px'
      },
      padding: {
        DEFAULT: '8px'
      },
    },
    extend: {
      colors: {
        gray: {
          800: '#121624'
        },
        blue: {
          100: '#CAD1DB',
          200: '#D8E0FA',
          300: '#66B5FF',
          800: '#030118'
        },
        rgba: {
          100: 'rgba(151, 179, 234, 0.1)'
        }
      }
    },
  },
  plugins: [require('tailwindcss-primeui')]
}