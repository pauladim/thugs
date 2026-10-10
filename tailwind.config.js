/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rust: {
          DEFAULT: '#C65D2E',
          dark: '#A64B23',
          light: '#DE8158',
        },
        pine: {
          DEFAULT: '#355E3B',
          dark: '#25412A',
          light: '#4C7A54',
        },
        ink: '#111111',
        cream: '#F6F1E7',
        sand: '#EDE4D3',
        stone: '#8A8377',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '38rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
