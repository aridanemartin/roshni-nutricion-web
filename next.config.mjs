/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Force HTTPS for two years, including subdomains.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
]

const config = {
  async headers() {
    return [{ headers: securityHeaders, source: '/(.*)' }]
  },
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  poweredByHeader: false,
}

export default config
