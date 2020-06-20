module.exports = {
  target: 'serverless',
  devIndicators: {
    autoPrerender: true,
  },
  distDir: 'build',
  // https://github.com/vercel/next.js/issues/9851
  webpack: config => {
    const alias = { ...config.resolve.alias };
    delete alias.url; // alias to native-url
    config.resolve = {
      ...config.resolve,
      alias,
    };
    return config;
  },
};
