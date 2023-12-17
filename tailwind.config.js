/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        bluePrimary: 'hsl(238, 22%, 44%)',
        blueSecondary: 'hsl(224, 93%, 58%)',
        blueTertiary: 'hsl(243, 87%, 12%)',
        LightGrayishBlue: 'hsl(240, 75%, 98%)',
        LightGray: 'hsl(0, 0%, 75%)',
        moderateCyan: 'hsl(170, 45%, 43%)'
      }
    },
  },
  plugins: [],
}
