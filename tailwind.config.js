/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          violet: '#9e7f66',
          'light-violet': '#939BF4',
          'dark-blue': '#19202D',
          midnight: '#121721',
        },
        secondary: {
          'light-grey': '#F4F6F8',
          grey: '#9DAEC2',
          'dark-grey': '#6E8098',
        },
      },
      screens: {
        mobile: '375px',
        tablet: '640px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};

