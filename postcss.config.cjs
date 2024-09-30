module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['app/reset.module.css', 'app/global.module.css'],
    },
    'postcss-custom-media': {},
  },
};
