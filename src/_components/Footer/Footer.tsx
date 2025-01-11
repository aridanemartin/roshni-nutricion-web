import Link from 'next/link'
import './Footer.scss'

import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'

const socialLinks = [
  {
    href: 'https://www.instagram.com/roshninutricion/',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://www.doctoralia.es/roshni-peswani-peswani/dietista-nutricionista/las-palmas-de-gran-canaria',
    icon: <DoctoraliaIcon />,
  },
  {
    href: 'https://www.linkedin.com/in/roshni-peswani-8057604b/?originalSubdomain=es',
    icon: <LinkedinIcon />,
  },
]

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__socialIcons">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} target="_blank" rel="noreferrer">
              <div className="socialIcon">{link.icon}</div>
            </Link>
          ))}
        </div>

        <div className="footer__cita">
          <div className="footer__cita-button">
            <Link href="/contacto" className="Button">
              Concertar cita
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <Link href="/legal/politica-de-cookies">Política de Cookies</Link>
        <Link href="/legal/politica-de-privacidad">Política de Privacidad</Link>
        <Link href="/legal/aviso-legal">Aviso Legal</Link>
      </div>
    </div>
  )
}
