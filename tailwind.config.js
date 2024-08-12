/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ "dark", "garden"],
  },
  plugins: [require('daisyui'),],
}

