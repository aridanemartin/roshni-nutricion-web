/* eslint-disable react-refresh/only-export-components */
import '@styles/About.scss'
import heroImage from '@assets/pictures/personal/roshniProfile3.webp'
import Image from 'next/image'
import cimeLogo from '@assets/logos/cime.webp'
import complutenseLogo from '@assets/logos/complutense.webp'
import edriaLogo from '@assets/logos/edria.webp'
import freseniusLogo from '@assets/logos/fresenius.webp'
import hebeLogo from '@assets/logos/hebe.webp'
import hpsLogo from '@assets/logos/hps.webp'
import unedLogo from '@assets/logos/uned.webp'
import RotatingReviews from '@components/RotatingReviews/RotatingReviews'

import type { Metadata } from 'next'
import Headline from '@components/Headline/Headline'

export const metadata: Metadata = {
  description: 'Roshni Peswani Nutricionista - Dietista en Las Palmas',
  title: 'Sobre mi | Roshni Peswani Nutricionista - Dietista en Las Palmas',
}

export default function About() {
  return (
    <>
      <div className="about">
        <section className="about__profile">
          <div className="about__profile-image">
            <Image
              alt="hero"
              fill
              src={heroImage}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
        <section className="about__content">
          <div>
            <h2 className="about__content-title">
              ¡Hola! <strong>soy Roshni</strong>
            </h2>
            <div className="about__content-text">
              <p>
                Estudié{' '}
                <strong>
                  Nutrición Humana y Dietética en la Universidad Complutense de
                  Madrid
                </strong>
                . Posteriormente, complementé mi formación con el Experto
                Universitario en Nutrición Hospitalaria.
              </p>
              <p>
                Tras trabajar en múltiples sectores de la nutrición, descubrí lo
                importante que es la atención personalizada en consulta, debido
                al enorme impacto que tienen sobre la salud unos buenos hábitos
                alimentarios adaptados a la condición de cada persona.
              </p>
              <p>
                Para poder ofrecer una mejor atención a mis pacientes realicé la
                formación en{' '}
                <strong>Actualización en Patologías Digestivas</strong> en el{' '}
                <strong>
                  Centro de Investigación en Nutrición y Salud de Madrid
                  (CINUSA)
                </strong>
                , lo cual fue el detonante para continuar profundizando en esta
                área de la nutrición.
              </p>
              <p>
                Continué mi formación cursando el{' '}
                <strong>
                  Máster de Microbiota en la Universidad CEU Cardenal Herrera
                </strong>
                , ya que cada vez existe mayor evidencia acerca de la influencia
                del sistema digestivo en una gran parte de las patologías
                crónicas a las que nos enfrentamos a día de hoy.
              </p>
              <p>
                Mi equipo y yo nos esforzamos en estar siempre lo más
                actualizados posible con la finalidad de ofrecer a nuestros
                pacientes las mejores herramientas para alcanzar sus objetivos
                de salud.
              </p>
            </div>
          </div>
          <div className="about__logos">
            <div className="about__logo">
              <Image alt="logo" height={100} src={unedLogo} width={50} />
            </div>
            <div className="about__logo">
              <Image
                alt="logo"
                height={100}
                src={complutenseLogo}
                width={100}
              />
            </div>
            <div className="about__logo">
              <Image alt="logo" height={0} src={cimeLogo} width={50} />
            </div>
            <div className="about__logo">
              <Image alt="logo" height={100} src={edriaLogo} width={50} />
            </div>
            <div className="about__logo">
              <Image alt="logo" height={100} src={freseniusLogo} width={100} />
            </div>
            <div className="about__logo" style={{ filter: 'invert(1)' }}>
              <Image alt="logo" height={100} src={hebeLogo} width={70} />
            </div>
            <div className="about__logo">
              <Image alt="logo" height={100} src={hpsLogo} width={80} />
            </div>
          </div>
        </section>
      </div>
      <div className="about__reviewsSection">
        <Headline
          id="reseñas"
          subtitle="A continuación, algunos testimonios de pacientes que han experimentado una mejora significativa en su salud y bienestar gracias a la atención personalizada de Roshni Peswani."
          title="Reseñas"
        />
        <RotatingReviews />
      </div>
    </>
  )
}
