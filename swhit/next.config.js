/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig

