import Nav from '@components/Nav/Nav'
import { Forum, Playfair_Display, Source_Sans_3 } from 'next/font/google'
import '@styles/global.scss'
import Footer from '@components/Footer/Footer'
import AriSignature from '@components/AriSignature/AriSignature'

export const metadata = {
  title:
    'Desirée del Carmen Acosta Santana | Nutricionista - Dietista en Las Palmas de Gran Canaria',
  description:
    '¡Bienvenidos al mundo de la nutrición consciente! Te invitamos a descubrir cómo nuestras soluciones personalizadas pueden mejorar tu salud y bienestar.',
}

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--playfairDisplay',
})

const sourceSans = Source_Sans_3({
  weight: '400',
  subsets: ['latin'],
  variable: '--sourceSans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
