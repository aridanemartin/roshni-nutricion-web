import React from 'react'
import Image from 'next/image'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import './Header.scss'

export default function Header({ title, image }) {
  const altDescription = enhanceAltDescription(
    'Roshni P. Dietista - Nutricionista en Las Palmas' + title,
  )

  return (
    <div className="postImageHero">
      <h1 className="postImageHero__title">{title}</h1>
      <Image
        src={image}
        className="imageHero"
        alt={altDescription}
        quality={50}
        fill
        priority
      />
    </div>
  )
}
