import Image from 'next/image'
import heroPicture from '@assets/pictures/personal/roshniVertical.webp'
import {
  BOOKING_INTRO,
  COLLABORATORS,
  POSTS,
  ROUTES,
} from '@/content/site'
import { Button } from '@components/Button/Button'
import ClinicList from '@components/ClinicList/ClinicList'
import Credentials from '@components/Credentials/Credentials'
import PostCard from '@components/PostCard/PostCard'
import ServicesIndex from '@components/ServicesIndex/ServicesIndex'
import styles from '@/app/(site)/home.module.css'

export default function Home() {
  return (
    <>
      <div className="wrap">
        <section className={styles.hero}>
          <div>
            <span className="eyebrow">
              Salud digestiva y bienestar integral
            </span>
            <h1>
              La salud empieza en tu <em>intestino</em>
            </h1>
            <p className="lede">
              Dietista-Nutricionista especializada en patologías digestivas en
              Las Palmas de Gran Canaria. Mi objetivo es acompañar a mis
              pacientes a alcanzar un estado de salud óptimo, a través de la
              alimentación y el estilo de vida.
            </p>
            <div className={styles.ctas}>
              <Button href={ROUTES.contact}>Concertar cita →</Button>
              <Button href={ROUTES.about} variant="ghost">
                Conóceme
              </Button>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <Image
              alt="Roshni Peswani, Dietista-Nutricionista en Las Palmas"
              placeholder="blur"
              preload
              sizes="(max-width: 860px) 100vw, 480px"
              src={heroPicture}
            />
            <figcaption>Roshni Peswani · Dietista-Nutricionista</figcaption>
          </figure>
        </section>
        <Credentials />
      </div>

      <section className="section" id="servicios">
        <div className={`wrap ${styles.split}`}>
          <div>
            <span className="eyebrow">Servicios</span>
            <h2 className="sec-title">Servicios</h2>
            <p className={styles.intro}>
              Descubre cómo la Nutrición Personalizada puede transformar tu
              bienestar en cada etapa de la vida. Complementa esto con nuestra
              Nutrición Clínica, que aborda condiciones como obesidad, diabetes
              y alergias con un enfoque integral.
            </p>
          </div>
          <ServicesIndex />
        </div>
      </section>

      <section className={`section on-dark ${styles.dark}`} id="consulta">
        <div className="wrap">
          <span className="eyebrow">Dónde paso consulta</span>
          <h2 className="sec-title">Las Palmas de Gran Canaria</h2>
          <p className={styles.darkLead}>{BOOKING_INTRO}</p>
          <ClinicList />
          <div className={styles.darkCta}>
            <Button href={ROUTES.contact} variant="leaf">
              Ir al formulario de contacto →
            </Button>
          </div>
        </div>
      </section>

      <section className="section" id="ultimos-posts">
        <div className="wrap">
          <div className={styles.postsHead}>
            <div>
              <span className="eyebrow">Blog</span>
              <h2 className="sec-title">Últimos Posts</h2>
              <p>
                Mantente al día con las tendencias en nutrición a través de
                nuestro blog. Descubre recetas innovadoras, consejos expertos y
                noticias sobre bienestar que te guiarán hacia un estilo de vida
                más saludable.
              </p>
            </div>
            <Button href={ROUTES.blog} variant="ghost">
              Ver todos los posts
            </Button>
          </div>
          <div className={styles.posts}>
            {POSTS.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className={styles.collab}>
            <span className="eyebrow">Colaboraciones</span>
            {Object.entries(COLLABORATORS).map(([src, logo]) => (
              <Image
                alt={logo.name}
                height={logo.height}
                key={src}
                src={src}
                width={logo.width}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
