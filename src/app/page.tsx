import posts from '@/app/blog/posts.json'
import { PostPreview } from '@components/PostPreview/PostPreview'
import Headline from '@components/Headline/Headline'
import HeroBanner from '@components/HeroBanner/HeroBanner'
import PictureSection from '@components/PictureSection/PictureSection'
import RoshniProfilePicture from '@assets/pictures/personal/roshniProfile.jpg'
import dynamic from 'next/dynamic'
import stomachIcon from '@assets/icons/stomach.webp'
import intoleranceIcon from '@assets/icons/intolerance.webp'
import autoinmuneIcon from '@assets/icons/immunity.webp'
import metabolicIcon from '@assets/icons/diabetes.webp'
import bodyCompositionIcon from '@assets/icons/fat.webp'
import { Button } from '@components/Button/Button'
import RotatingReviews from '@components/RotatingReviews/RotatingReviews'

const Carousel = dynamic(() => import('@components/Carousel/Carousel'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const services = [
  {
    alt: 'Estómago',
    img: stomachIcon.src,
    list: [
      'Digestiones lentas, hinchazón abdominal',
      'Gastritis / Reflujo',
      'Diarrea / Estreñimiento',
      'Sobrecrecimiento bacteriano',
    ],
    title: 'Salud Digestiva',
  },
  {
    alt: 'Intolerancias',
    img: intoleranceIcon.src,
    list: ['Lactosa', 'Fructosa / Sorbitol', 'Gluten', 'Histamina'],
    title: 'Intolerancias Alimentarias',
  },
  {
    alt: 'Autoinmunes',
    img: autoinmuneIcon.src,
    list: ['Hipotiroidismo Hashimoto', 'Artritis Reumatoide', 'Psoriasis'],
    title: 'Enfermedades Autoinmunes',
  },
  {
    alt: 'Metabólico',
    img: metabolicIcon.src,
    list: ['Obesidad', 'Diabetes', 'HTA'],
    title: 'Síndrome metabólico',
  },
  {
    alt: 'Composición Corporal',
    img: bodyCompositionIcon.src,
    list: [
      'Pérdida de peso',
      'Ganancia de masa muscular',
      'Definición muscular',
    ],
    title: 'Composición Corporal',
  },
]

export default async function Home() {
  const latestPosts = posts.slice(0, 3)

  return (
    <>
      <HeroBanner />
      <main className="main-layout">
        <PictureSection
          objectPosition="0 35%"
          picturePosition="left"
          pictureSrc={RoshniProfilePicture}
          text={
            <>
              <h2>
                ¡Hola! <strong>Soy Roshni</strong>
              </h2>
              <p>
                Dietista-Nutricionista especializada en patologías digestivas en
                Las Palmas de Gran Canaria. Mi objetivo es acompañar a mis
                pacientes a alcanzar un estado de salud óptimo, a través de la
                alimentación y el estilo de vida.
              </p>
              <Button href="/contacto" text="Concertar una cita" />
            </>
          }
        />
        <Headline
          subtitle="Mantente al día con las tendencias en nutrición a través de nuestro blog. Descubre recetas innovadoras, consejos expertos y noticias sobre bienestar que te guiarán hacia un estilo de vida más saludable."
          title="Últimos Posts"
        />
        <div className="latestPosts">
          {latestPosts.map((post) => <PostPreview key={post.id} post={post} />)}
        </div>
        <Headline
          id="servicios"
          subtitle="Descubre cómo la Nutrición Personalizada puede transformar tu bienestar en cada etapa de la vida. Complementa esto con nuestra Nutrición Clínica, que aborda condiciones como obesidad, diabetes y alergias con un enfoque integral."
          title="Servicios"
        />
        <Carousel services={services} />
        <Headline
          id="reseñas"
          subtitle="A continuación, algunos testimonios de pacientes que han experimentado una mejora significativa en su salud y bienestar gracias a la atención personalizada de Roshni Peswani."
          title="Reseñas"
        />
        <RotatingReviews />
      </main>
    </>
  )
}
