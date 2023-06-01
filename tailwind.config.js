// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--poppins-font)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: {
          dark: '#18181b',
          saxe: '#5772b9',
          nav: '#9aa2ae',
          navhover: '#f3f4f6',
          lightsaxe: '#aec5e2',
        },
        base: {
          subtle: '#27272a',
          stealth: '#4c4c55',
          navbar: '#1d1e20',
          navbarhover: '#282829',
          tag: '#343941',
        },
      },
    },
  },
  plugins: [],
};
