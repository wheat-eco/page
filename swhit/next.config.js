/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: ['github.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig

