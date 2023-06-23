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
        primarylightRed: 'hsl(356, 100%, 66%)',
        /* CTA hover */
        primaryVeryLightRed: 'hsl(355, 100%, 74%)',
        /* headings */
        primaryVeryDarkBlue: 'hsl(208, 49%, 24%)',

        /* ### Neutral */
        /* text */
        neutralWhiteText: 'hsl(0, 0%, 100%)',
        /* footer text */
        neutralGrayishBlue: 'hsl(240, 2%, 79%)',
        /* body copy */
        neutralVeryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        /* footer background */
        neutralVeryDarkBlackBlue: 'hsl(240, 10%, 16%)',

        /* ### Gradient */
        /* Background gradient  Intro/CTA mobile nav: */
        gradientVeryLightRed: 'hsl(13, 100%, 72%)',
        gradientLightRed: 'hsl(353, 100%, 62%)',

        /* Background gradient  body: */
        gradientVeryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        gradientVeryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
      },
    },
  },
  plugins: [],
};
