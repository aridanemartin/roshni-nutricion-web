import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/content/site'

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_URL,
    rules: [
      {
        allow: '/',
        disallow: ['/studio', '/api/'],
        userAgent: '*',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
