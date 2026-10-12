import type { Metadata } from 'next'
import Image from 'next/image'
import heroPicture from '@assets/pictures/personal/roshniProfile3.webp'
import logo from '@assets/logos/logoVerdeBlanco.png'
import { ROUTES, SITE_URL } from '@/content/site'
import { breadcrumbSchema, webPageSchema } from '@/content/schema'
import { pageMetadata } from '@/content/seo'
import { Button } from '@components/Button/Button'
import InstitutionLogos from '@components/InstitutionLogos/InstitutionLogos'
import JsonLd from '@components/JsonLd/JsonLd'
import PageHero from '@components/PageHero/PageHero'
import RotatingReviews from '@components/RotatingReviews/RotatingReviews'
import Timeline from '@components/Timeline/Timeline'
import styles from '@/app/(site)/roshni-peswani-nutricionista-dietista/about.module.css'

export const metadata: Metadata = pageMetadata({
  description:
    'Roshni Peswani, Dietista-Nutricionista en Las Palmas de Gran Canaria especializada en patologías digestivas, microbiota e intolerancias alimentarias.',
  path: ROUTES.about,
  title: 'Sobre mí',
})

const steps = [
  {
    place: 'Universidad Complutense de Madrid',
    text: 'Estudié Nutrición Humana y Dietética en la Universidad Complutense de Madrid.',
    title: 'Nutrición Humana y Dietética',
  },
  {
    text: 'Posteriormente, complementé mi formación con el Experto Universitario en Nutrición Hospitalaria.',
    title: 'Experto Universitario en Nutrición Hospitalaria',
  },
  {
    place: 'Centro de Investigación en Nutrición y Salud de Madrid (CINUSA)',
    text: 'Para poder ofrecer una mejor atención a mis pacientes realicé esta formación, lo cual fue el detonante para continuar profundizando en esta área de la nutrición.',
    title: 'Actualización en Patologías Digestivas',
  },
  {
    place: 'Universidad CEU Cardenal Herrera',
    text: 'Cada vez existe mayor evidencia acerca de la influencia del sistema digestivo en una gran parte de las patologías crónicas a las que nos enfrentamos a día de hoy.',
    title: 'Máster de Microbiota',
  },
]

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: ROUTES.home },
          { name: 'Sobre mí', path: ROUTES.about },
        ])}
      />
      <JsonLd
        data={{
          ...webPageSchema({
            description:
              'Trayectoria, formación y experiencia de Roshni Peswani, dietista-nutricionista.',
            name: 'Sobre mí',
            path: ROUTES.about,
            type: 'ProfilePage',
          }),
          mainEntity: { '@id': `${SITE_URL}/#roshni` },
        }}
      />
      <PageHero
        crumb="Sobre mí"
        image={heroPicture}
        imageAlt="Roshni Peswani en su consulta"
        imageShape="tall"
        lede="Dietista-Nutricionista especializada en patologías digestivas en Las Palmas de Gran Canaria. Mi objetivo es acompañar a mis pacientes a alcanzar un estado de salud óptimo, a través de la alimentación y el estilo de vida."
        title={
          <>
            ¡Hola! <em>soy Roshni</em>
          </>
        }
      >
        <Button href={ROUTES.contact}>Concertar cita →</Button>
        <Button href="#trayectoria" variant="ghost">
          Mi formación
        </Button>
      </PageHero>

      <section className="section" id="trayectoria">
        <div className={`wrap ${styles.story}`}>
          <div className={styles.intro}>
            <span className="eyebrow">Trayectoria</span>
            <p>
              Tras trabajar en múltiples sectores de la nutrición, descubrí lo
              importante que es la atención personalizada en consulta, debido al
              enorme impacto que tienen sobre la salud unos buenos hábitos
              alimentarios adaptados a la condición de cada persona.
            </p>
          </div>
          <Timeline steps={steps} />
        </div>
      </section>

      <div className="wrap">
        <InstitutionLogos />
      </div>

      <section className={styles.statement}>
        <div className="wrap">
          <Image alt="" className={styles.mark} sizes="240px" src={logo} />
          <p>
            Mi equipo y yo nos esforzamos en estar siempre lo más actualizados
            posible con la finalidad de ofrecer a nuestros pacientes las mejores
            herramientas para alcanzar sus objetivos de salud.
          </p>
        </div>
      </section>

      <div className="wrap">
        <section className="section" id="resenas">
          <span className="eyebrow">Reseñas</span>
          <h2 className="sec-title">Reseñas</h2>
          <p className={styles.reviewsLead}>
            A continuación, algunos testimonios de pacientes que han
            experimentado una mejora significativa en su salud y bienestar
            gracias a la atención personalizada de Roshni Peswani.
          </p>
          <RotatingReviews />
        </section>
      </div>
    </>
  )
}
