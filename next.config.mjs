/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return ['/agents', '/languages/:path*', '/pricing'].map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }))
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'app.graffiticode.org' },
      { protocol: 'https', hostname: 'api.graffiticode.org' },
    ],
  },
}

export default nextConfig
