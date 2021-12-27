module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
