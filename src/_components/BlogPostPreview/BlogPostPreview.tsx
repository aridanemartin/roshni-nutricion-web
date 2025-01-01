import Link from 'next/link'
import React from 'react'
import './BlogPostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'

export const BlogPostPreview = ({ post }) => {
  return (
    <Link key={post.slug} href={`blog/${post.slug}`}>
      <div className="blogPostPreview" key={post._id}>
        <div className="blogPostPreview__image">
          <Image
            className="blogPostPreview__image-img"
            src={post.mainImage}
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
        </section>
      </div>
    </Link>
  )
}
