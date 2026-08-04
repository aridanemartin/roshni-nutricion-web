import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import '@components/Header/Header.scss'

export default function Header({ title, image }) {
  const altDescription = enhanceAltDescription(
    'Roshni P. Dietista - Nutricionista en Las Palmas' + title,
  )

  return (
    <div className="postImageHero">
      <h1 className="postImageHero__title">{title}</h1>
      <Image
        alt={altDescription}
        className="imageHero"
        fill
        priority
        quality={50}
        src={image}
      />
    </div>
  )
}

Header.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
}
