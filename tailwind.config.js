/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '40rem',
      },
      fontFamily: {
        'sans': ['Source Sans Pro'],
        'display': ['Source Sans Pro'],
        'body': ['Source Sans Pro'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
        bolder: 700,
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}