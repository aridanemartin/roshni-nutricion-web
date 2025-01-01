import contactoImage from '@assets/pictures/contacto.webp'
import ContactForm from '@components/ContactForm/ContactForm'
import Image from 'next/image'
import type { Metadata } from 'next'

import '@styles/Contacto.scss'
import useViewportSize from 'src/_hooks/useViewportSize'

export const metadata: Metadata = {
  title:
    'Contacto | Desi Acosta Nutricionista / Dietista en Las Palmas de Gran Canaria',
  description:
    'Desirée Acosta, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN, con más de 15 años de experiencia. Especializada en mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. ¡Prioriza tu bienestar hoy!',
}

const Contacto = () => {
  // const [width] = useViewportSize()

  // //dynamic import to switch between images
  // const contactoImage =
  //   width < 1280
  //     ? require('@assets/pictures/contacto.webp')
  //     : require('@assets/pictures/contacto.webp')

  return (
    <main className="main-layout">
      <div className="contacto">
        <section className="contacto__form-section">
          <h1>Contacto</h1>
          <ContactForm />
        </section>
        <section className="contacto__image-section">
          {/* <Image
            className="contacto__image"
            src={contactoImage}
            alt="Con Nutrición Saludable - Contacto"
            fill
          /> */}
        </section>
      </div>
    </main>
  )
}

export default Contacto
