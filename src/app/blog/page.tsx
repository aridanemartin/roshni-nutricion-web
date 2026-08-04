/* eslint-disable react-refresh/only-export-components */
import posts from '@/app/blog/posts.json'

import '@styles/Blog.scss'
import heroImage from '@assets/pictures/personal/roshniHeroRight.webp'
import Header from '@components/Header/Header'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Dietista-Nutricionista especializada en patologías digestivas en Las Palmas de Gran Canaria. Ayudo a mis pacientes a alcanzar un estado de salud óptimo, desde un punto de vista integrativo y con un enfoque multidisciplinar.',
  title: 'Blog | Roshni Peswani Nutricionista - Dietista en Las Palmas',
}

const Blog = async () => (
    <>
      <Header image={heroImage} title="Blog" />
      <div className="postsContainer">
      <Headline
          subtitle="Te damos la bienvenida a nuestro blog, donde podrás obtener inspiración, consejos prácticos y la información más reciente sobre cómo mejorar tu bienestar a través de una alimentación saludable."
          title="Artículos"
        />
        {posts.map((post) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
    </>
  )

export default Blog
