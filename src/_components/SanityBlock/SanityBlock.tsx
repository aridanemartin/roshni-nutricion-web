import Image from 'next/image'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'

import '@components/SanityBlock/SanityBlock.scss'
import Link from 'next/link'

import { getYoutubeVideoId } from '@utils/youtubeHelpers'
import { sanityClient } from 'src/sanity/utils/sanity-querys'

function SanityBlock({ sanityContent }) {
  const builder = imageUrlBuilder(sanityClient)
  function imageUrlFor(source) {
    return builder.image(source)
  }

  const headerStyles = {
    h1: ({ children }) => <h1 className="sanityBlock__h1">{children}</h1>,
    h2: ({ children }) => <h2 className="sanityBlock__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="sanityBlock__h3">{children}</h3>,
    h4: ({ children }) => <h4 className="sanityBlock__h4">{children}</h4>,
    h5: ({ children }) => <h5 className="sanityBlock__h5">{children}</h5>,
    h6: ({ children }) => <h6 className="sanityBlock__h6">{children}</h6>,
  }

  const formatAndRenderText = (child, style) => {
    const enrichedLinksKeys = sanityContent.markDefs
      .filter((mark) => mark._type === 'link')
      .map((mark) => mark._key)

    if (child.text === '') {
      return <br key={child._key} />
    }

    // Titles [h1, h2, h3, h4, h5, h6]
    if (headerStyles[style]) {
      const Header = headerStyles[style]
      return <Header>{child.text}</Header>
    }

    if (child.marks.some((mark) => enrichedLinksKeys.includes(mark))) {
      const link = sanityContent.markDefs.find(
        (mark) => mark._key === child.marks[0],
      )

      return (
        <Link
          className={'sanityBlock__paragraph sanityBlock__link'}
          href={`https://${link.href}`}
          key={child._key}
          rel="noReferrer"
          target="_blank"
        >
          {child.text}
        </Link>
      )
    }

    if (child.marks) {
      if (child.marks.includes('strong') && child.marks.includes('em')) {
        return (
          <span className="sanityBlock__paragraph" key={child._key}>
            <strong>
              <em>{child.text}</em>
            </strong>
          </span>
        )
      }

      if (child.marks.includes('strong')) {
        return (
          <span className="sanityBlock__paragraph" key={child._key}>
            <strong>{child.text}</strong>
          </span>
        )
      }
      if (child.marks.includes('em')) {
        return (
          <span className="sanityBlock__paragraph" key={child._key}>
            <em>{child.text}</em>
          </span>
        )
      }
    }

    return <span className="sanityBlock__paragraph">{child.text}</span>
  }

  const renderBlock = (sanityContent) => {
    switch (sanityContent._type) {
      case 'block':
        return (
          <div className="sanityBlock__block">
            {sanityContent.children.map((child) =>
              formatAndRenderText(child, sanityContent.style),
            )}
          </div>
        )

      case 'enrichedImage':
        return (
          <div className="sanityBlock__imageBlockHorizontal">
            <Image
              alt={sanityContent.alt}
              fill
              src={imageUrlFor(sanityContent.image.asset).url()}
              style={{ objectFit: 'cover' }}
            />
          </div>
        )
      case 'enrichedImageVertical':
        return (
          <div className="sanityBlock__imageBlockVertical">
            <Image
              alt={sanityContent.alt}
              fill
              src={imageUrlFor(sanityContent.image.asset).url()}
              style={{ objectFit: 'contain' }}
            />
          </div>
        )
      case 'youtubeVideo':
        return (
          <div className="sanityBlock__videoBlock">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              frameBorder="0"
              src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                sanityContent.url,
              )}`}
              title={sanityContent.title}
            ></iframe>
          </div>
        )

      default:
        return null
    }
  }

  return renderBlock(sanityContent)
}

export default SanityBlock
