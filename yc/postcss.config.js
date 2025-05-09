/** @type {import('postcss').ProcessOptions} */
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // the new Tailwind PostCSS plugin
    autoprefixer: {},              // vendor-prefixer
  },
};
