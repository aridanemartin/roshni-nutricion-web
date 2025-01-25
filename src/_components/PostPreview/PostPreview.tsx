import React from 'react'
import './PostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'

export const PostPreview = ({ post }) => {
  return (
    <a
      key={post.link}
      href={`${post.link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="postPreview" key={post._id}>
        <div className="postPreview__image">
          <Image
            className="postPreview__image-img"
            src={post.image}
            alt={enhanceAltDescription(post.title)}
            fill
          />
        </div>
        <div className="postPreview__text">
          <div className="postPreview__title">
            <h2 id={post.title}>{post.title}</h2>
          </div>
          <div
            className="postPreview__description"
            aria-labelledby={post.title}
          >
            <p className="postPreview__description-text">{post.description}</p>
          </div>
        </div>
        {post.collaboratorLogo && (
          <div className="postPreview__collaboration">
            <p>Colaborando con:</p>
            <div className="postPreview__collaborationLogo">
              <Image alt="collaborationLogo" src={post.collaboratorLogo} fill />
            </div>
          </div>
        )}
      </div>
    </a>
  )
}
