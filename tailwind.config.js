/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // ...colors,
      'red-salsa': 'hsla(0, 75%, 60%, 1)',
      'light-salmon': 'hsla(17, 100%, 76%, 1)',
      seashell: 'hsl(12, 48%, 94%)',
      jet: 'hsla(15, 3%, 26%, 1)',
    },
    extend: {},
  },
  plugins: [],
};
