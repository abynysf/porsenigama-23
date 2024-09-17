/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          500: '#F2D8B7',
        },
        cream: {
          500: '#F8EAD2',
        },
        sage: {
          500: '#CBCEB6',
        },
        navyblue: {
          500: '#315E6D',
        },
        teal: {
          500: '#34695F',
        },
        turquoise: {
          500: '#52907F',
        },
        seafoamgreen: {
          500: '#5C998A',
        },
        mintgreen: {
          500: '#8EAFAE',
        },
        sagegreen: {
          500: '#B5C6C5',
        },
        red: {
          500: '#911002',
        },
        russet: {
          500: '#85250D',
        },
        orange: {
          500: '#E0872A',
        },
        deepbrown: {
          500: '#621E10',
        },
        darkbrown: {
          500: '#6D3005',
        },
        copper: {
          500: '#B77644',
        },
        lightbrown: {
          500: '#BF8B63',
        },
        sandrift: {
          500: '#B2997D',
        },
        blue_calendar: {
          500: '#1D5F6F',
        },
      },
      fontFamily: {
        rockwell: 'var(--font-rockwell)',
        masterofbreak: 'var(--font-masterofbreak)',
        montserrat: 'Montserrat',
      },
      textColor: {
        'custom-hex-color': '#621E10', // Replace with your hex color code
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'rotate-left-right': {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(-13deg)',
          },
        },
        'break-left-right-1': {
          '0%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
          '100%': {
            transform: 'rotate(-10deg)',
          },
        },
        'break-left-right-2': {
          '0%': {
            transform: 'rotate(-25deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
          '100%': {
            transform: 'rotate(-25deg)',
          },
        },
      },
      animation: {
        'spin-left-right': 'rotate-left-right 2s linear infinite',
        'break-left-right-1': 'break-left-right-1 1.5s steps(1) infinite',
        'break-left-right-2': 'break-left-right-2 1.5s steps(1) infinite',
      },
      screens: {
        xxs: '375px',
        xs: '450px',
        s: '550px',
        tanggung: '380px',
        mepet: '460px',
        nanggung: '1080px',
        '3xl': '2100px',
      },
    },
  },
  plugins: [],
}
