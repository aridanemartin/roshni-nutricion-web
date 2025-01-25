import React from 'react'
import './BlogPostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'

export const BlogPostPreview = ({ post }) => {
  console.log(post)
  return (
    <a
      key={post.link}
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="blogPostPreview" key={post._id}>
        <div className="blogPostPreview__image">
          <Image
            className="blogPostPreview__image-img"
            src={post.image}
            alt={enhanceAltDescription(post.title)}
            fill
          />
        </div>
        <div className="blogPostPreview__title">
          <h2 id={post.title}>{post.title}</h2>
        </div>
        <section
          className="blogPostPreview__description"
          aria-labelledby={post.title}
        >
          <p className="blogPostPreview__description-text">
            {post.description}
          </p>
          {post.collaboratorLogo && (
            <div className="blogPostPreview__collaboration">
              <p>Colaborando con:</p>
              <div className="blogPostPreview__collaborationLogo">
                <Image
                  alt="collaborationLogo"
                  src={post.collaboratorLogo}
                  fill
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </a>
  )
}
