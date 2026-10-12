/* eslint-disable camelcase -- the Web App Manifest spec uses snake_case keys */
import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#eceee7',
    description: SITE_DESCRIPTION,
    display: 'standalone',
    icons: [
      {
        sizes: 'any',
        src: '/icon.ico',
        type: 'image/x-icon',
      },
    ],
    lang: 'es-ES',
    name: SITE_NAME,
    short_name: 'Roshni Nutrición',
    start_url: '/',
    theme_color: '#1c2620',
  }
}
