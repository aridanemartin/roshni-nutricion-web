import type { Metadata } from 'next'
import { POSTS, ROUTES } from '@/content/site'
import { breadcrumbSchema, webPageSchema } from '@/content/schema'
import { pageMetadata } from '@/content/seo'
import BlogGrid from '@components/BlogGrid/BlogGrid'
import JsonLd from '@components/JsonLd/JsonLd'
import PageHero from '@components/PageHero/PageHero'
import PostCard from '@components/PostCard/PostCard'
import styles from '@/app/(site)/blog/blog.module.css'

export const metadata: Metadata = pageMetadata({
  description:
    'Recetas, consejos y noticias sobre nutrición, salud digestiva y bienestar de la dietista-nutricionista Roshni Peswani en Las Palmas.',
  path: ROUTES.blog,
  title: 'Blog',
})

export default function Blog() {
  const [latest, ...rest] = POSTS

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: ROUTES.home },
          { name: 'Blog', path: ROUTES.blog },
        ])}
      />
      <JsonLd
        data={webPageSchema({
          description:
            'Artículos y colaboraciones en medios sobre nutrición y salud digestiva.',
          name: 'Blog',
          path: ROUTES.blog,
          type: 'CollectionPage',
        })}
      />
      <PageHero
        crumb="Blog"
        lede="Te damos la bienvenida a nuestro blog, donde podrás obtener inspiración, consejos prácticos y la información más reciente sobre cómo mejorar tu bienestar a través de una alimentación saludable."
        title="Blog"
      />
      <div className="wrap">
        <div className={styles.featured}>
          <PostCard featured post={latest} />
        </div>
        <BlogGrid posts={rest} />
      </div>
    </>
  )
}
