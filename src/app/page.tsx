import { getPosts } from 'src/sanity/utils/sanity-querys'
import { PostPreview } from '@components/PostPreview/PostPreview'
import Headline from '@components/Headline/Headline'
import HeroBanner from '@components/HeroBanner/HeroBanner'
import PictureSection from '@components/PictureSection/PictureSection'
import DesiProfilePicture from '@assets/pictures/desiProfile.webp'
import dynamic from 'next/dynamic'
import nutritionImage from '@assets/icons/nutrition.png'
import hormonesImage from '@assets/icons/hormones.png'
import diseasesImage from '@assets/icons/diseases.png'
import metabolicImage from '@assets/icons/metabolic.png'
import bodyCompositionImage from '@assets/icons/bodyComposition.png'
import { Button } from '@components/Button/Button'

interface indexProps {}

const Carousel = dynamic(() => import('@components/Carousel/Carousel'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const services = [
  {
    title: 'Alteraciones Hormonales',
    list: [
      'SOP',
      'Endometriosis',
      'Amenorrea',
      'Síndrome premenstrual',
      'Dismenorrea',
    ],
    img: hormonesImage.src,
    alt: 'Hormonal Disorders',
  },
  {
    title: 'Nutrición en Diferentes Etapas de la Mujer',
    list: ['Preconcepción', 'Embarazo', 'Lactancia', 'Menopausia'],
    img: nutritionImage.src,
    alt: "Women's Stages",
  },
  {
    title: 'Enfermedades Autoinmunes',
    list: [
      'Tiroiditis de Hashimoto',
      'Artritis reumatoide',
      'Enfermedad de Graves',
    ],
    img: diseasesImage.src,
    alt: 'Autoimmune Diseases',
  },
  {
    title: 'Disfunciones Metabólicas',
    list: [
      'Insulinorresistencia',
      'Diabetes',
      'Hipertensión',
      'Dislipemia',
      'Obesidad',
    ],
    img: metabolicImage.src,
    alt: 'Metabolic Dysfunctions',
  },
  {
    title: 'Mejora de la Composición Corporal',
    list: ['Pérdida de grasa', 'Aumento de masa muscular'],
    img: bodyCompositionImage.src,
    alt: 'Body Composition',
  },
]

export default async function Home({}: indexProps) {
  const posts = await getPosts()
  const latestPosts = posts.slice(posts.length - 3, posts.length)

  return (
    <>
      <HeroBanner
        description="Diestista-Nutricionista en Las Palmas de Gran Canaria"
        buttonComponent="hola"
      />
      <main className="main-layout">
        <PictureSection
          pictureSrc={DesiProfilePicture}
          picturePosition="left"
          objectPosition="0 35%"
          text={
            <>
              <h2>¡Bienvenida!</h2>
              <p>
                Soy <strong>Desirée Acosta</strong>, nutricionista especializada
                en salud femenina. Mi prioridad es acompañar a mujeres en la
                búsqueda de su equilibrio hormonal, dotándolas de las
                herramientas y conocimientos necesarios para alcanzar su máximo
                bienestar.
              </p>
              <Button
                text="Concertar una cita"
                href="https://linktr.ee/desiacosta.nutri"
              />
            </>
          }
        />
        <Headline
          title="Servicios"
          subtitle="Descubre cómo la Nutrición Personalizada puede transformar tu bienestar en cada etapa de la vida. Complementa esto con nuestra Nutrición Clínica, que aborda condiciones como obesidad, diabetes y alergias con un enfoque integral."
          id="servicios"
        />
        <Carousel services={services} />
        <Headline
          title="Últimos Posts"
          subtitle="Mantente al día con las tendencias en nutrición a través de nuestro blog. Descubre recetas innovadoras, consejos expertos y noticias sobre bienestar que te guiarán hacia un estilo de vida más saludable."
        />
        <div className="latestPosts">
          {latestPosts.map((post) => {
            return <PostPreview key={post._id} post={post} />
          })}
        </div>
      </main>
    </>
  )
}
