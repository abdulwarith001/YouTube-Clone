/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightRed: 'rgba(254, 0, 0, 0.995)',
        lightBlue: 'rgba(0, 148, 215, 1)',
        veryLightRed: 'rgba(30, 30, 46, 0.067)',
        superLightRed: 'rgba(255, 0, 0, 0.309)',
        lightGrey: 'rgba(0, 0, 0, 0.056)',
        veryLightBlack: 'rgba(50, 43, 46, 0.737)',
        lightBlack: 'rgba(50, 43, 46, 0.937)',
        superLightBlack: 'rgba(50, 43, 46, 0.237)'
      },
      fontFamily: {
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
}
