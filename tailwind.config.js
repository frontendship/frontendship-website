// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        primary: {
          50: '#F9F5FF',
          100: '#F4EBFF',
          200: '#E9D7FE',
          500: '#9E77ED',
          600: '#7F56D9',
          700: '#6941C6'
        }
      }
    }
  },
  plugins: []
};
