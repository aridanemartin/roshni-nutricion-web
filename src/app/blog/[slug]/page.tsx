import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'
import { getPost } from 'src/sanity/utils/sanity-querys'
import '../../../styles/BlogArticlePage.scss'
import SanityBlock from '@components/SanityBlock/SanityBlock'
import type { Metadata } from 'next'

import profileImage from '@assets/pictures/desiProfile.webp'
import timeToReadIcon from '@assets/icons/time-to-read.webp'
import Layout from '@components/Layout/Layout'
import { ShareButton } from '@components/ShareButton/ShareButton'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description, mainImage } = await getPost(params.slug)

  return {
    title: title,
    description: description,
    openGraph: {
      images: [mainImage],
    },
  }
}

export default async function Post({ params }: Props) {
  const { title, body, mainImage, author, timeToRead } = await getPost(
    params.slug,
  )

  return (
    <>
      <div className="blogArticlePage">
        <div className="blogArticlePage__hero">
          <Image
            src={mainImage}
            className="blogArticlePage__hero-image"
            alt={enhanceAltDescription(title + ' | ' + author)}
            loading="eager"
            priority
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={60}
          />
        </div>
        <section className="blogArticlePage__header">
          <h2 className="title">{title}</h2>
          <div className="subtitle">
            <div className="timeToRead">
              <div className="timeToRead__icon">
                <Image
                  src={timeToReadIcon}
                  alt="Time to read icon"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  quality={30}
                />
              </div>
              <p className="time">
                <em>{timeToRead} min de lectura</em>
              </p>
            </div>
            <div className="author">
              <div className="author__text">
                <p className="name">{author}</p>
              </div>
              <div className="author__image">
                <Image
                  src={profileImage}
                  alt={`${author} - Foto de Perfil`}
                  fill
                  quality={25}
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <article className="contentWrapper">
        <Layout maxWidth="1000px" className="blogArticlePage__articleSection">
          {body.map((block) => (
            <>
              <SanityBlock key={block._key} sanityContent={block} />
            </>
          ))}
        </Layout>
        <div className="blogArticlePage__shareButton">
          <ShareButton />
        </div>
      </article>
    </>
  )
}
