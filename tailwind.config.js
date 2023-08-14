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

      colors: {
        'primary': 'rgb(34,177,197)',
      },
      
    },
    fontFamily: {
      'logo': ['Montserrat', 'sans-serif'],
      'ai': ['Instrument Serif', 'serif'],
      'raleway': ['Raleway', 'sans-serif'],
       'sans': ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
}
