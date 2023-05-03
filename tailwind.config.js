/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  darkMode: 'class',
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
        violet: {
          1: '#D5D8F7',
          2: '#C5C9F4',
          3: '#939BF4',
          4: '#5964E0',
        },
        blue: {
          1: '#9DAEC2',
          2: '#6E8098',
          3: '#19202D',
          4: '#121721',
        },
        grey: {
          1: '#F4F6F8',
          2: '#E7E8E9',
          3: '#6A6E77',
          4: '#303642',
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

