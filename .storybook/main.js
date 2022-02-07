const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/intro/**/*.stories.js',
    '../src/c360/**/*.stories.js',
    '../src/sds/**/*.stories.js',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async (config, { configType }) => {
    const customRules = [];

    // remove default css rules + replace with Sass-firendly webpack config
    const originalRules = config.module.rules.filter(
      (rule) => !rule.test.toString().match('.css'),
    );

    originalRules.push({
      test: /\.css$/,
      use: ['raw-loader'],
      include: path.resolve(__dirname, '../src'),
      exclude: path.resolve(__dirname, '../src/globals.css'),
    });

    originalRules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../src/globals.css'),
    });

    config.module.rules = originalRules;

    const customPlugins = [
      new MiniCssExtractPlugin({
        filename: `[name].css`,
        chunkFilename: `[id].css`,
      }),
    ];

    customRules.push({
      test: /\.(scss)$/,
      oneOf: [
        {
          issuer: /\.(ts)$/,
          use: ['css-loader', 'sass-loader'],
        },
        {
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    });

    // Add markdown (.md) support
    customRules.push({
      test: /\.md$/,
      use: ['markdown-loader'],
    });

    const updatedConfig = merge(config, {
      module: {
        rules: customRules,
      },
      plugins: customPlugins,
    });

    return updatedConfig;
  },
};
