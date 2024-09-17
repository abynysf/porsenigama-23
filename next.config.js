/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/2023/porsenigama',
  assetPrefix: '/2023/porsenigama',
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'custom',
    path: 'http://localhost:3005/2023/porsenigama',
    loaderFile: './src/components/loader.js',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3005',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
