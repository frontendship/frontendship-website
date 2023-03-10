/** @type {import('next').NextConfig} */

const withSvgr = require('next-svgr');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    return config;
  },
  images: {
    domains: ['i.ytimg.com', 'www.gravatar.com']
  },
  env: {
    DISCORD_SERVER_URL: 'https://discord.gg/frontendship'
  }
};

module.exports = withSvgr(nextConfig);
