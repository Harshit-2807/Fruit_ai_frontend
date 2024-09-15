/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cool-gradient': 'linear-gradient(90deg, rgba(224, 188, 243, 1) 0%, rgba(126, 231, 238, 1) 100%)',
        'cool-gradientr': 'linear-gradient(90deg, rgba(126, 231, 238, 1) 0%, rgba(224, 188, 243, 1) 100%)',
        'gradient': 'radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(0,0,0,1) 100%)',
        'black-shadow': 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.50) 100%)',
        'black-shadow2': 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.8) 100%)',
        'red-gradient': 'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,0,0.5008054247089461) 100%)',
        'chat-header': 'linear-gradient(90deg, rgba(60,176,247,0.86) 0%, rgba(0,255,147,0.86) 100%)',
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

