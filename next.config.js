/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.brth.uk',
        port: '',
        pathname: '/pitahaya/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'dirti.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 