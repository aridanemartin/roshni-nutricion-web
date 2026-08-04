/* eslint-disable react-refresh/only-export-components */
import Nav from '@components/Nav/Nav'
import {
  Playfair_Display as PlayfairDisplay,
  Source_Sans_3 as SourceSans3,
} from 'next/font/google'
import '@styles/global.scss'
import Footer from '@components/Footer/Footer'
import AriSignature from '@components/AriSignature/AriSignature'

export const metadata = {
  description:
    '¡Bienvenidos al mundo de la nutrición consciente! Te invitamos a descubrir cómo nuestras soluciones personalizadas pueden mejorar tu salud y bienestar.',
  title:
    'Roshni Peswani | Nutricionista - Dietista en Las Palmas de Gran Canaria',
}

const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  variable: '--playfairDisplay',
  weight: '400',
})

const sourceSans = SourceSans3({
  subsets: ['latin'],
  variable: '--sourceSans',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSans.variable + ' ' + playfairDisplay.variable}>
        <Nav />
        {children}
        <Footer />
        <AriSignature />
      </body>
    </html>
  )
}
