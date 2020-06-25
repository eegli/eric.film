module.exports = {
  target: 'serverless',
  devIndicators: {
    autoPrerender: true,
  },
  distDir: 'build',
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    graphql_url:
      'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master',
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
