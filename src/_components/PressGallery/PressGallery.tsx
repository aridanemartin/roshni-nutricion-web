'use client'

import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import '@components/PressGallery/PressGallery.scss'

export const PressGallery = ({ data }) => (
    <div className="pressGalleryContainer">
      <h2 className="title">
        Notas de <strong>nutrición</strong>
      </h2>
      <div className="pressGallery">
        {data.map((publication) => (
            <Link
              className="articleCard"
              href={publication.url}
              key={publication?.title}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="previewImage">
                {publication?.image && (
                  <Image alt={publication.title} fill src={publication.image} />
                )}
              </div>
              <article className="content" key={publication?.title}>
                <h1 dangerouslySetInnerHTML={{ __html: publication.title }} />
                <p>{publication.description}</p>
              </article>
            </Link>
          ))}
      </div>
    </div>
  )

PressGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
}
