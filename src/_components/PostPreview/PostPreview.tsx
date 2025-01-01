import Link from 'next/link'
import React from 'react'
import './PostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'

export const PostPreview = ({ post }) => {
  return (
    <Link key={post.slug} href={`blog/${post.slug}`}>
      <div className="postPreview" key={post._id}>
        <div className="postPreview__image">
          <Image
            className="postPreview__image-img"
            src={post.mainImage}
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
      </div>
    </Link>
  )
}
