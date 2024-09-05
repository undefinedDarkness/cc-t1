/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vit-blue': '#3b5987',
        'bronze': '#ba4615'
      }
    },
  },
  plugins: [],
}