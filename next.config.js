/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'via.placeholder.com' },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
