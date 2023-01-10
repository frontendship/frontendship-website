/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['prototyprio.gumlet.io'] }
};

module.exports = nextConfig;
