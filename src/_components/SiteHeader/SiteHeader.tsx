import Image from 'next/image'
import Link from 'next/link'
import logo from '@assets/logos/logoVerdeBlanco.png'
import { NAV_LINKS, ROUTES } from '@/content/site'
import { Button } from '@components/Button/Button'
import SocialIcons from '@components/SocialIcons/SocialIcons'
import HeaderScroll from '@components/SiteHeader/HeaderScroll'
import MobileMenu from '@components/SiteHeader/MobileMenu'
import NavLinks from '@components/SiteHeader/NavLinks'
import styles from '@components/SiteHeader/SiteHeader.module.css'

const Logo = ({ className }: { className: string }) => (
  <Link aria-label="Roshni Peswani, Dietista-Nutricionista. Inicio" href="/">
    <Image
      alt="Roshni Peswani · Dietista-Nutricionista"
      className={className}
      preload
      sizes="180px"
      src={logo}
    />
  </Link>
)

export default function SiteHeader() {
  return (
    <header className={styles.header} id="site-header">
      <HeaderScroll />
      <div className={`wrap ${styles.bar}`}>
        <Logo className={styles.logo} />
        <NavLinks className={styles.links} links={NAV_LINKS} />
        <div className={styles.actions}>
          <Button className={styles.cta} href={ROUTES.contact} variant="leaf">
            Concertar cita
          </Button>
          <MobileMenu
            links={[{ href: ROUTES.home, label: 'Inicio' }, ...NAV_LINKS]}
            logo={<Logo className={styles.menuLogo} />}
          >
            <SocialIcons />
          </MobileMenu>
        </div>
      </div>
    </header>
  )
}
