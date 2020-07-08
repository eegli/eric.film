const withSourceMaps = require('@zeit/next-source-maps')();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;

process.env.SENTRY_DSN =
  'https://f8391a116d3d4ad79bcb86ef11356476@o412028.ingest.sentry.io/5288196';

module.exports = withSourceMaps({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      NODE_ENV === 'production'
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release: options.buildId,
        })
      );
    }

    return config;
  },
  target: 'serverless',
  distDir: 'build',
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    GRAPHQL_URL:
      'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master',

    GA_TRACKING_ID: 'UA-106609763-2',
  },
});
