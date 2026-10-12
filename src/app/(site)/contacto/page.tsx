import type { Metadata } from 'next'
import heroPicture from '@assets/pictures/personal/roshniProfile2.webp'
import {
  BOOKING_INTRO,
  CONTACT_EMAIL,
  ROUTES,
  SOCIAL_LINKS,
} from '@/content/site'
import { breadcrumbSchema, webPageSchema } from '@/content/schema'
import { pageMetadata } from '@/content/seo'
import ClinicList from '@components/ClinicList/ClinicList'
import ContactForm from '@components/ContactForm/ContactForm'
import JsonLd from '@components/JsonLd/JsonLd'
import PageHero from '@components/PageHero/PageHero'
import {
  DoctoraliaIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from '@components/SocialIcons/icons'
import styles from '@/app/(site)/contacto/contact.module.css'

export const metadata: Metadata = pageMetadata({
  description:
    'Contacta con Roshni Peswani, Dietista-Nutricionista en Las Palmas de Gran Canaria. Pide tu cita por teléfono, WhatsApp, formulario o Doctoralia.',
  path: ROUTES.contact,
  title: 'Contacto',
})

const directContacts = [
  { Icon: WhatsappIcon, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
  { Icon: MailIcon, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
  { Icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { Icon: DoctoraliaIcon, href: SOCIAL_LINKS.doctoralia, label: 'Doctoralia' },
  { Icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
]

export default function Contacto() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: ROUTES.home },
          { name: 'Contacto', path: ROUTES.contact },
        ])}
      />
      <JsonLd
        data={webPageSchema({
          description:
            'Teléfonos de las consultas, WhatsApp, email y formulario de contacto.',
          name: 'Contacto',
          path: ROUTES.contact,
          type: 'ContactPage',
        })}
      />
      <PageHero
        crumb="Contacto"
        image={heroPicture}
        imageAlt="Roshni Peswani sonriendo en su consulta"
        lede={BOOKING_INTRO}
        title="Contacto"
      />

      <section className={`on-dark ${styles.clinics}`}>
        <div className="wrap">
          <span className="eyebrow">Llamando al centro de tu elección</span>
          <ClinicList variant="cards" />
        </div>
      </section>

      <div className={`wrap ${styles.contact}`}>
        <div>
          <span className="eyebrow">O contactando directamente conmigo</span>
          <h2 className="sec-title">Escríbeme</h2>
          <ul className={styles.social}>
            {directContacts.map(({ href, Icon, label }) => {
              const external = href.startsWith('http')
              return (
                <li key={label}>
                  <a
                    aria-label={label}
                    className={styles.icon}
                    href={href}
                    rel={external ? 'noopener noreferrer' : undefined}
                    target={external ? '_blank' : undefined}
                    title={label}
                  >
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ContactForm />
      </div>
    </>
  )
}
