/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prototyprio.gumlet.io',
        port: '',
        pathname: '/*/**'
      }
    ]
  }
};

module.exports = nextConfig;
