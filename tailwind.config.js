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
        DEFAULT: '1295px'
      },
      padding: {
        DEFAULT: '8px'
      },
    },
    extend: {
      colors: {
        gray: {
          300: '#909090',
          400: '#1F1F1F'
        },
        blue: {
          400: '#66B5FF',
          800: '#02060F'
        }
      }
    },
  },
  plugins: [require('tailwindcss-primeui')]
}