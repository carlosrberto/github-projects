const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  cssModuleLoader: {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[hash:base64:5]',
      importLoaders: 1,
    },
  },
  postCSSLoader: {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
        postcssPresetEnv(),
      ],
    },
  },
};
