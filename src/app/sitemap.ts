import type { MetadataRoute } from 'next'
import { ROUTES, SITE_URL } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      changeFrequency: 'weekly',
      lastModified,
      priority: 1,
      url: SITE_URL,
    },
    {
      changeFrequency: 'monthly',
      lastModified,
      priority: 0.9,
      url: `${SITE_URL}${ROUTES.about}`,
    },
    {
      changeFrequency: 'monthly',
      lastModified,
      priority: 0.8,
      url: `${SITE_URL}${ROUTES.contact}`,
    },
    {
      changeFrequency: 'weekly',
      lastModified,
      priority: 0.7,
      url: `${SITE_URL}${ROUTES.blog}`,
    },
    {
      changeFrequency: 'yearly',
      lastModified,
      priority: 0.3,
      url: `${SITE_URL}${ROUTES.legal}`,
    },
    {
      changeFrequency: 'yearly',
      lastModified,
      priority: 0.3,
      url: `${SITE_URL}${ROUTES.privacy}`,
    },
    {
      changeFrequency: 'yearly',
      lastModified,
      priority: 0.3,
      url: `${SITE_URL}${ROUTES.cookies}`,
    },
  ]
}
