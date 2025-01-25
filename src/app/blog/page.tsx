import posts from './posts.json'

import '@styles/Blog.scss'
import heroImage from '@assets/pictures/personal/roshniHeroRight.webp'
import Header from '@components/Header/Header'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Roshni Peswani Nutricionista - Dietista en Las Palmas',
  description:
    'Dietista-Nutricionista especializada en patologías digestivas en Las Palmas de Gran Canaria. Ayudo a mis pacientes a alcanzar un estado de salud óptimo, desde un punto de vista integrativo y con un enfoque multidisciplinar.',
}

const Blog = async () => {
  return (
    <>
      <Header title="Blog" image={heroImage} />
      <div className="postsContainer">
      <Headline
          title="Artículos"
          subtitle="Te damos la bienvenida a nuestro blog, donde podrás obtener inspiración, consejos prácticos y la información más reciente sobre cómo mejorar tu bienestar a través de una alimentación saludable."
        />
        {posts.map((post) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default Blog
