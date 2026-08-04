import React from 'react'
import PropTypes from 'prop-types'
import '@components/PostPreview/PostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'

export const PostPreview = ({ post }) => (
    <a
      href={`${post.link}`}
      key={post.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="postPreview" key={post._id}>
        <div className="postPreview__image">
          <Image
            alt={enhanceAltDescription(post.title)}
            className="postPreview__image-img"
            fill
            src={post.image}
          />
        </div>
        <div className="postPreview__text">
          <div className="postPreview__title">
            <h2 id={post.title}>{post.title}</h2>
          </div>
          <div
            aria-labelledby={post.title}
            className="postPreview__description"
          >
            <p className="postPreview__description-text">{post.description}</p>
          </div>
        </div>
        {post.collaboratorLogo && (
          <div className="postPreview__collaboration">
            <p>Colaborando con:</p>
            <div className="postPreview__collaborationLogo">
              <Image alt="collaborationLogo" fill src={post.collaboratorLogo} />
            </div>
          </div>
        )}
      </div>
    </a>
  )

PostPreview.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    collaboratorLogo: PropTypes.string,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
