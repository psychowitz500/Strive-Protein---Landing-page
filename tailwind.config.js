/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Merriweather', 'serif'],
        display: ['Libertinus Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}