// .storybook/webpack.config.js

const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  })

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
    loaders: ['file-loader'],
    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.s?css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('sass'),
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: "src/style/_variables.scss",
        }
      }
    ],
    include: [
      path.resolve(__dirname, "../"),
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
