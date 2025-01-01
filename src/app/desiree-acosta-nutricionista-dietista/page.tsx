import '@styles/About.scss'
import heroImage from '@assets/pictures/desiAbout.webp'
import Image from 'next/image'
import ufp from '@assets/logos/ufp.webp'
import ucam from '@assets/logos/ucam.webp'
import icse from '@assets/logos/icse.png'
import kala from '@assets/logos/kalaLogo.png'
import hps from '@assets/logos/hpsLogo.png'
import type { Metadata } from 'next'
import { PressGallery } from '@components/PressGallery/PressGallery'
import ecolagenImage from '@assets/pictures/ecolagen2.webp'
import laProvinciaImage from '@assets/pictures/laProvincia.webp'
import stomachImage from '@assets/pictures/stomach.webp'
import acneImage from '@assets/pictures/acne.webp'

export const metadata: Metadata = {
  title: 'Sobre mi | Desi Acosta Nutricionista - Dietista en Las Palmas',
  description:
    'Desirée Acosta, Diplomada en Nutrición Humana y Dietética. Colegiada en el Colegio de Dietistas - Nutricionistas de las Islas Canarias CODINUISCAN.',
}

const pressGalleryData = [
  {
    title: '<strong>La Provincia:</strong> "Hay que escuchar al cuerpo..."',
    url: 'https://www.laprovincia.es/sociedad/2023/07/23/desiree-acosta-hay-escuchar-cuerpo-90205655.html ',
    image: `${laProvinciaImage.src}`,
  },
  {
    title: '<strong>Spar:</strong> Caldo de huesos Ecolagen',
    url: 'https://www.sparnatural.com/caldo-de-huesos-ecolagen/',
    image: `${ecolagenImage.src}`,
  },
  {
    title: '<strong>Spar:</strong> "Acné bajo control desde la nutrición"',
    url: 'https://www.sparnatural.com/acne-bajo-control-desde-la-nutricion/',
    image: `${acneImage.src}`,
  },
  {
    title: '<strong>Spar:</strong> "Nutrición en la endometriosis"',
    url: 'https://www.sparnatural.com/nutricion-y-estilo-de-vida-aliados-en-la-endometriosis/',
    image: `${stomachImage.src}`,
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
              Hola! <strong>soy Desi</strong>
            </h2>
            <div className="about__content-text">
              <p>
                Estudié
                <strong>
                  Nutrición Humana y Dietética en la Universidad Fernando Pessoa
                </strong>
                en las Palmas de Gran Canaria. Posteriormente complementé mi
                formación con la UCAM con un
                <strong>Máster en Nutrición Clínica y Endocrinología.</strong>
              </p>
              <p>
                Además tengo formación en diversas áreas para el apoyo del
                trabajo en endocrinología. Soy experta en
                <strong>
                  Nutrición y Salud Hormonal Femenina, Inflamación y
                  Autoinmunidad así como nutrición deportiva.
                </strong>
              </p>
              <p>
                A medida que he avanzado en mis estudios me ha apasionado más el
                poder de la nutrición y los hábitos sobre la mejora de las
                enfermedades y la calidad de vida de las personas.
              </p>
              <p>
                Siempre que puedo aprovecho para continuar formándome y crear
                postres saludables porque otra de mis pasiones es la cocina.
              </p>
            </div>
          </div>
          <div className="about__logos">
            <div className="about__logo">
              <Image src={ufp} alt="logo" width={100} height={100} />
            </div>
            <div className="about__logo">
              <Image src={ucam} alt="logo" width={100} height={100} />
            </div>
            <div className="about__logo">
              <Image src={icse} alt="logo" width={50} height={100} />
            </div>
            <div className="about__logo">
              <Image
                src={kala}
                alt="logo"
                width={100}
                height={100}
                style={{ filter: 'invert(1)' }}
              />
            </div>
            <div className="about__logo">
              <Image src={hps} alt="logo" width={70} height={70} />
            </div>
          </div>
        </section>
      </div>
      <PressGallery data={pressGalleryData} />
    </>
  )
}
