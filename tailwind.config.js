/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // ...colors,
      'red-salsa': 'hsl(0, 75%, 60%)',
      'light-salmon': 'hsl(17, 100%, 76%)',
      seashell: 'hsl(12, 48%, 94%)',
      jet: 'hsla(15, 3%, 26%, 1)',
    },
    extend: {},
  },
  plugins: [],
};
