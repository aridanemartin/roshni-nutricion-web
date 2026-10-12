import Image from 'next/image'
import Link from 'next/link'
import logo from '@assets/logos/logoVerdeBlanco.png'
import { BOOKING_INTRO, LEGAL_LINKS, ROUTES } from '@/content/site'
import { Button } from '@components/Button/Button'
import SocialIcons from '@components/SocialIcons/SocialIcons'
import AriSignature from '@components/AriSignature/AriSignature'
import FooterCta from '@components/SiteFooter/FooterCta'
import styles from '@components/SiteFooter/SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer className={`on-dark ${styles.footer}`}>
      <div className="wrap">
        <FooterCta>
          <div className={styles.cta}>
            <div>
              <h2>Concertar una cita</h2>
              <p>{BOOKING_INTRO}</p>
              <Button href={ROUTES.contact} variant="leaf">
                Ir a contacto →
              </Button>
            </div>
            <Image
              alt="Roshni Peswani · Dietista-Nutricionista"
              className={styles.logo}
              sizes="240px"
              src={logo}
            />
          </div>
        </FooterCta>
        <div className={styles.social}>
          <SocialIcons />
        </div>
        <div className={styles.legal}>
          <nav aria-label="Legal">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <AriSignature />
        </div>
      </div>
    </footer>
  )
}
