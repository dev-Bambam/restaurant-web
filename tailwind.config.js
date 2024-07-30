/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark","black", "garden"],
  },
  plugins: [require('daisyui'),],
}

