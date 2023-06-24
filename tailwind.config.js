/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js}'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        /* ### Primary */
        /* CTA text  */
        lightRed: 'hsl(356, 100%, 66%)',
        /* CTA hover */
        veryLightRed: 'hsl(355, 100%, 74%)',
        /* headings */
        veryDarkBlue: 'hsl(208, 49%, 24%)',

        /* ### Neutral */
        /* text */
        whiteText: 'hsl(0, 0%, 100%)',
        /* footer text */
        grayishBlue: 'hsl(240, 2%, 79%)',
        /* body copy */
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        /* footer background */
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',

        /* ### Gradient */
        /* Background gradient  Intro/CTA mobile nav: */
        veryLightRedGradient: 'hsl(13, 100%, 72%)',
        lightRedGradient: 'hsl(353, 100%, 62%)',

        /* Background gradient  body: */
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
      },
    },
  },
  plugins: [],
};
