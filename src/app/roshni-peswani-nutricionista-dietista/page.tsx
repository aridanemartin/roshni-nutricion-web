import '@styles/About.scss'
import heroImage from '@assets/pictures/personal/roshniProfile3.webp'
import Image from 'next/image'
import ceuLogo from '@assets/logos/ceu.webp'
import cimeLogo from '@assets/logos/cime.webp'
import complutenseLogo from '@assets/logos/complutense.webp'
import edriaLogo from '@assets/logos/edria.webp'
import freseniusLogo from '@assets/logos/fresenius.webp'
import hebeLogo from '@assets/logos/hebe.webp'
import hpsLogo from '@assets/logos/hps.webp'
import unedLogo from '@assets/logos/uned.webp'
import RotatingReviews from '@components/RotatingReviews/RotatingReviews'

import type { Metadata } from 'next'
import { PressGallery } from '@components/PressGallery/PressGallery'
import sparArticle1 from '@assets/pictures/articles/sparArticle1.webp'
import sparArticle2 from '@assets/pictures/articles/sparArticle2.webp'
import { Title } from '@components/Title/Title'

export const metadata: Metadata = {
  title: 'Sobre mi | Roshni Peswani Nutricionista - Dietista en Las Palmas',
  description:
    'Desirée Acosta, Diplomada en Nutrición Humana y Dietética. Colegiada en el Colegio de Dietistas - Nutricionistas de las Islas Canarias CODINUISCAN.',
}

const pressGalleryData = [
  {
    title: '<strong>SPAR:</strong> ¿Son útiles las Apps de Nutrición?"',
    url: 'https://spargrancanaria.es/son-utiles-las-apps-de-nutricion/',
    image: `${sparArticle1.src}`,
  },
  {
    title: '<strong>SPAR:</strong> Alimentos ecológicos y bio',
    url: 'https://spargrancanaria.es/alimentos-ecologicos-y-bio/',
    image: `${sparArticle2.src}`,
  },
]

export default function About() {
  return (
    <>
      <div className="about">
        <section className="about__profile">
          <div className="about__profile-image">
            <Image
              src={heroImage}
              alt="hero"
              fill
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
              <Image src={unedLogo} alt="logo" width={50} height={100} />
            </div>
            <div className="about__logo">
              <Image
                src={complutenseLogo}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div className="about__logo">
              <Image src={cimeLogo} alt="logo" width={50} height={0} />
            </div>
            <div className="about__logo">
              <Image src={edriaLogo} alt="logo" width={50} height={100} />
            </div>
            <div className="about__logo">
              <Image src={freseniusLogo} alt="logo" width={100} height={100} />
            </div>
            <div className="about__logo" style={{ filter: 'invert(1)' }}>
              <Image src={hebeLogo} alt="logo" width={70} height={100} />
            </div>
            <div className="about__logo">
              <Image src={hpsLogo} alt="logo" width={80} height={100} />
            </div>
          </div>
        </section>
      </div>
      <PressGallery data={pressGalleryData} />
      <Title headingType={'h2'}>Reviews</Title>
      <RotatingReviews />
    </>
  )
}
