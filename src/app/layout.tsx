import type { Metadata, Viewport } from 'next'
import { Gloock, Hanken_Grotesk as HankenGrotesk } from 'next/font/google'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/content/site'
import '@/app/globals.css'

const gloock = Gloock({
  subsets: ['latin'],
  variable: '--font-gloock',
  weight: '400',
})

const hanken = HankenGrotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
})

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  authors: [{ name: 'Roshni Peswani', url: SITE_URL }],
  category: 'Salud y nutrición',
  creator: 'Roshni Peswani',
  description: SITE_DESCRIPTION,
  formatDetection: { telephone: false },
  metadataBase: new URL(SITE_URL),
  publisher: 'Roshni Peswani',
  title: {
    default: SITE_TITLE,
    template: '%s | Roshni Peswani Nutricionista',
  },
}

export const viewport: Viewport = {
  themeColor: '#1c2620',
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html
      className={`${gloock.variable} ${hanken.variable}`}
      data-scroll-behavior="smooth"
      lang="es"
    >
      <body>{children}</body>
    </html>
  )
}
