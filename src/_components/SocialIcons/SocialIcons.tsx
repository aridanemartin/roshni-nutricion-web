import { SOCIAL_LINKS, WHATSAPP_LABEL } from '@/content/site'
import {
  DoctoraliaIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from '@components/SocialIcons/icons'
import styles from '@components/SocialIcons/SocialIcons.module.css'

const links = [
  { Icon: WhatsappIcon, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
  { Icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { Icon: DoctoraliaIcon, href: SOCIAL_LINKS.doctoralia, label: 'Doctoralia' },
  { Icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
]

export default function SocialIcons({
  showHandle = true,
}: {
  showHandle?: boolean
}) {
  return (
    <div className={styles.social}>
      <ul className={styles.icons}>
        {links.map(({ href, Icon, label }) => (
          <li key={label}>
            <a
              aria-label={label}
              className={styles.icon}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              title={label}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
      {showHandle && (
        <a
          className={styles.handle}
          href={SOCIAL_LINKS.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
        >
          {WHATSAPP_LABEL}
        </a>
      )}
    </div>
  )
}
