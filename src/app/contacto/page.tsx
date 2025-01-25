import ContactForm from '@components/ContactForm/ContactForm'
import type { Metadata } from 'next'

import '@styles/Contacto.scss'

export const metadata: Metadata = {
  title:
    'Contacto | Roshni Peswani Nutricionista / Dietista en Las Palmas de Gran Canaria',
  description: 'Roshni Peswani, Dietista Nutricionista en Las Palmas',
}

const Contacto = () => {
  return (
    <main className="main-layout">
      <div className="contacto">
        <section className="contacto__form-section">
          <h1>Contacto</h1>
          <ContactForm />
        </section>
        <section className="contacto__image-section"></section>
      </div>
    </main>
  )
}

export default Contacto
