/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6F67FF',
        secondary: '#5F2069',
        common: '#0A2540',
        usual: '#F6F9FC',
        dark: '#121212',
      }
    },
  },
  plugins: [],
}

