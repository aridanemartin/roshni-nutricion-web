import Link from 'next/link'
import '@components/Footer/Footer.scss'

import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'
import { WhatsappIcon } from '@components/SocialIcon/WhatsappIcon'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/roshni-peswani-8057604b/?originalSubdomain=es',
    icon: <LinkedinIcon />,
  },
  {
    href: 'https://www.doctoralia.es/roshni-peswani-peswani/dietista-nutricionista/las-palmas-de-gran-canaria',
    icon: <DoctoraliaIcon />,
  },
  {
    href: 'https://www.instagram.com/roshninutricion/',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://wa.me/34644011842',
    icon: <WhatsappIcon />,
  },
]

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__socialIcons">
          {socialLinks.map((link, index) => (
            <Link href={link.href} key={index} rel="noreferrer" target="_blank">
              <div className="socialIcon">{link.icon}</div>
            </Link>
          ))}
        </div>

        <div className="footer__cita">
          <div className="footer__cita-button">
            <Link className="Button" href="/contacto">
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
