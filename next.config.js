const nextBuildId = require('next-build-id');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: () => {
    try {
      return nextBuildId.sync({ dir: __dirname, describe: true, fallbackToSha: false });
    } catch {
      return 'dev';
    }
  },
  webpack: (config, { webpack, buildId, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BUILD_ID': JSON.stringify(buildId),
      }),
    );

    return config;
  },
}

module.exports = nextConfig