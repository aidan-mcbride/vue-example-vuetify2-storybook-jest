const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    './.storybook/addon-show-vue-markup/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['~storybook'] = path.resolve(__dirname);

    config.resolve.alias['@'] = path.resolve('src/');

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};
