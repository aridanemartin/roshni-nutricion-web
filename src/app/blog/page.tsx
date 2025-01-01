import { getPosts } from 'src/sanity/utils/sanity-querys'

import '@styles/Blog.scss'
import heroImage from '@assets/background/blogBackground.webp'
import Header from '@components/Header/Header'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Desi Acosta Nutricionista - Dietista en Las Palmas',
  description:
    'Desireé Acosta Santana, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN, con más de 15 años de experiencia. Especializada en mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. ¡Prioriza tu bienestar hoy!',
}

const Blog = async () => {
  const posts = await getPosts()

  return (
    <>
      <Header title="Blog" image={heroImage} />
      <div className="postsContainer">
        <Headline
          title="Artículos"
          subtitle="Te damos la bienvenida a nuestro blog, donde podrás obtener inspiración, consejos prácticos y la información más reciente sobre cómo mejorar tu bienestar a través de una alimentación saludable."
        />
        {posts.length && posts.map((post) => <BlogPostPreview post={post} />)}
      </div>
    </>
  )
}

export default Blog
