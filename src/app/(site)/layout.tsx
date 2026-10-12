import type { Metadata } from 'next'
import {
  ROUTES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from '@/content/site'
import { siteGraph } from '@/content/schema'
import { OG_IMAGE } from '@/content/seo'
import JsonLd from '@components/JsonLd/JsonLd'
import SiteFooter from '@components/SiteFooter/SiteFooter'
import SiteHeader from '@components/SiteHeader/SiteHeader'

export const metadata: Metadata = {
  alternates: { canonical: ROUTES.home },
  openGraph: {
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    locale: 'es_ES',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    type: 'website',
    url: ROUTES.home,
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  twitter: {
    card: 'summary_large_image',
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
    title: SITE_TITLE,
  },
}

export default function SiteLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <>
      {siteGraph().map((node) => (
        <JsonLd data={node} key={String(node['@id'])} />
      ))}
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
