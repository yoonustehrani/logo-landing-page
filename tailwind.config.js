/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ash-gray': '#AEC3B0',
        'ghost-white': '#F8F7FF',
        'antique-white':  '#FFEEDD',
        apricate: '#FFD8BE',
        'feld-grau': '#586D67',
        'earth-yellow': '#DDA15E',
        'rich-black': '#01161E',
        'pantone-red': '#EF233C',
        'charcoal': '#2F3E46',
        'tigers-eye': '#BC6C25',
        'hooker-green': '#52796F',
        'dark-violet': '#483C85',
        'light-violet': '#8F62EB',
        'khaki': '#F1CFAB',
        'cream-powder': '#feebda'
      },
      fontFamily: {
        vazir: 'Vazir'
      }
    },
  },
  plugins: [],
}

