'use client'

import Image from 'next/image'
import Link from 'next/link'
import './PressGallery.scss'

export const PressGallery = ({ data }) => {
  return (
    <div className="pressGalleryContainer">
      <h2 className="title">
        Notas de <strong>nutrición</strong>
      </h2>
      <div className="pressGallery">
        {data.map((publication) => {
          return (
            <Link
              className="articleCard"
              href={publication.url}
              key={publication?.title}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="previewImage">
                {publication?.image && (
                  <Image src={publication.image} alt={publication.title} fill />
                )}
              </div>
              <article className="content" key={publication?.title}>
                <h1 dangerouslySetInnerHTML={{ __html: publication.title }} />
                <p>{publication.description}</p>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
