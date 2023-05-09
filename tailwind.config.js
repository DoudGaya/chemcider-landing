/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './parts/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-100deg)' },
          '50%': { transform: 'rotate(100deg)' },
        }
      }
      
    },
    fontFamily: {
      'logo': ['Montserrat', 'sans-serif'],
      'ai': ['Instrument Serif', 'serif']
    },
  },
  plugins: [],
}
