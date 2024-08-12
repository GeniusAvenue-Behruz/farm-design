/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset': '47px -52px 99px 13px rgba(0,0,0,0.75) inset',
      },
    },
  },
  plugins: [],
}