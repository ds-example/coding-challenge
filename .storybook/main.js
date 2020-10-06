module.exports = {
  stories: [
    '../src/intro/**/*.stories.js',
    '../src/c360/**/*.stories.js',
    '../src/sds/**/*.stories.js'
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
    '@storybook/addon-viewport'
  ]
}
