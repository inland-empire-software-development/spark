const {parsed: localEnv} = require("dotenv").config();
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const withSASS = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withImages(withCSS(withSASS({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
})));
