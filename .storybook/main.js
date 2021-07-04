const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async(config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./stories/assets/scss/_variables.scss'],
            // include: path.resolve(__dirname, '../')
          }
        }
      ],
      // include: path.resolve(__dirname, '../'),
    })
    return config
  }
}