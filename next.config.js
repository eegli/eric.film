require('dotenv').config();

module.exports = {
  target: 'serverless',
  distDir: 'build',
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    graphql_url: process.env.GRAPHQL_BACKEND,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
