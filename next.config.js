/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
    topLevelAwait: true,
  },

}

module.exports = nextConfig
