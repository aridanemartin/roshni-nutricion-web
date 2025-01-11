import ContactForm from '@components/ContactForm/ContactForm'
import type { Metadata } from 'next'

import '@styles/Contacto.scss'

export const metadata: Metadata = {
  title:
    'Contacto | Desi Acosta Nutricionista / Dietista en Las Palmas de Gran Canaria',
  description:
    'Desirée Acosta, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN, con más de 15 años de experiencia. Especializada en mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. ¡Prioriza tu bienestar hoy!',
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
