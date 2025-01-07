/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: {max: '1200px', min: '0px'},
      lg: {max: '1024px', min: '0px'},
      md: {max: '876px', min: '0px'},
      sm: {max: '600px', min: '0px'},
      xs: {max: '420px', min: '0px'},
      xm: {max: '380px', min: '0px'},
    },
    container: {
      center: true,
      screens: {
        'xm': '100%',
        'xs': '420px',
        'sm': '600px',
        'md': '876px',
        'lg': '1024px',
        'xl': '1200px',
        DEFAULT: '1295px'
      },
      padding: {
        'xm': '6px',
        'xs': '8px',
        'sm': '8px',
        'md': '16px',
        'lg': '16px',
        'xl': '16px',
        DEFAULT: '8px'
      },
    },
    extend: {
      colors: {
        gray: {
          300: '#909090',
          350: '#404040',
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