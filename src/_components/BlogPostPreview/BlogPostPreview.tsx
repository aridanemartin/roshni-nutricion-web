import React from 'react'
import PropTypes from 'prop-types'
import '@components/BlogPostPreview/BlogPostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'

export const BlogPostPreview = ({ post }) => (
  <a
    href={post.link}
    key={post.link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className="blogPostPreview" key={post._id}>
      <div className="blogPostPreview__image">
        <Image
          alt={enhanceAltDescription(post.title)}
          className="blogPostPreview__image-img"
          fill
          src={post.image}
        />
      </div>
      <div className="blogPostPreview__title">
        <h2 id={post.title}>{post.title}</h2>
      </div>
      <section
        aria-labelledby={post.title}
        className="blogPostPreview__description"
      >
        <p className="blogPostPreview__description-text">{post.description}</p>
        {post.collaboratorLogo && (
          <div className="blogPostPreview__collaboration">
            <p>Colaborando con:</p>
            <div className="blogPostPreview__collaborationLogo">
              <Image alt="collaborationLogo" fill src={post.collaboratorLogo} />
            </div>
          </div>
        )}
      </section>
    </div>
  </a>
)

BlogPostPreview.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    collaboratorLogo: PropTypes.string,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
