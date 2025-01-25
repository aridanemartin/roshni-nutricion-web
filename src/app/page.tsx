import posts from '../app/blog/posts.json'
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

const Carousel = dynamic(() => import('@components/Carousel/Carousel'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const services = [
  {
    title: 'Salud Digestiva',
    list: [
      'Digestiones lentas, hinchazón abdominal',
      'Gastritis / Reflujo',
      'Diarrea / Estreñimiento',
      'Sobrecrecimiento bacteriano',
    ],
    img: stomachIcon.src,
    alt: 'Estómago',
  },
  {
    title: 'Intolerancias Alimentarias',
    list: ['Lactosa', 'Fructosa / Sorbitol', 'Gluten', 'Histamina'],
    img: intoleranceIcon.src,
    alt: 'Intolerancias',
  },
  {
    title: 'Enfermedades Autoinmunes',
    list: ['Hipotiroidismo Hashimoto', 'Artritis Reumatoide', 'Psoriasis'],
    img: autoinmuneIcon.src,
    alt: 'Autoinmunes',
  },
  {
    title: 'Síndrome metabólico',
    list: ['Obesidad', 'Diabetes', 'HTA'],
    img: metabolicIcon.src,
    alt: 'Metabólico',
  },
  {
    title: 'Composición Corporal',
    list: [
      'Pérdida de peso',
      'Ganancia de masa muscular',
      'Definición muscular',
    ],
    img: bodyCompositionIcon.src,
    alt: 'Composición Corporal',
  },
]

export default async function Home() {
  const latestPosts = posts.slice(0, 3)

  return (
    <>
      <HeroBanner
        description="Diestista-Nutricionista en Las Palmas de Gran Canaria"
        buttonComponent="hola"
      />
      <main className="main-layout">
        <PictureSection
          pictureSrc={RoshniProfilePicture}
          picturePosition="left"
          objectPosition="0 35%"
          text={
            <>
              <h2>
                ¡Hola! <strong>Soy Roshni</strong>
              </h2>
              <p>
                Dietista-Nutricionista especializada en patologías digestivas en
                Las Palmas de Gran Canaria. Ayudo a mis pacientes a alcanzar un
                estado de salud óptimo, desde un punto de vista integrativo y
                con un enfoque multidisciplinar.
              </p>
              <Button
                text="Concertar una cita"
                href="https://linktr.ee/desiacosta.nutri"
              />
            </>
          }
        />
        <Headline
          title="Últimos Posts"
          subtitle="Mantente al día con las tendencias en nutrición a través de nuestro blog. Descubre recetas innovadoras, consejos expertos y noticias sobre bienestar que te guiarán hacia un estilo de vida más saludable."
        />
        <div className="latestPosts">
          {latestPosts.map((post) => {
            return <PostPreview key={post._id} post={post} />
          })}
        </div>
        <Headline
          title="Servicios"
          subtitle="Descubre cómo la Nutrición Personalizada puede transformar tu bienestar en cada etapa de la vida. Complementa esto con nuestra Nutrición Clínica, que aborda condiciones como obesidad, diabetes y alergias con un enfoque integral."
          id="servicios"
        />
        <Carousel services={services} />
      </main>
    </>
  )
}
