/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    theme: {
      extend: {
        screens: {
          desktop: '992px',
        },
      },
    },
  },
  plugins: [],
}
