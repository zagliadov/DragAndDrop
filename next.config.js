/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/table',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
