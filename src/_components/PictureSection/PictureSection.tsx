import React, { ReactComponentElement } from 'react'
import './PictureSection.scss'
import Image, { StaticImageData } from 'next/image'

type PicturePosition = 'left' | 'right'

interface PictureSectionProps {
  pictureSrc: StaticImageData
  picturePosition: PicturePosition
  text: ReactComponentElement<any>
  objectPosition?: string
}

const PictureSection = ({
  pictureSrc: pictureUrl,
  picturePosition,
  text,
  objectPosition = 'center',
}: PictureSectionProps) => {
  return (
    <div className={`picture-section picture-section__${picturePosition}`}>
      <div className="picture-section__picture-wrapper">
        <Image
          className="picture-section__picture"
          src={pictureUrl}
          alt="Picture"
          style={{ objectPosition: `${objectPosition}` }}
        />
      </div>
      <div className="picture-section__text">{text}</div>
    </div>
  )
}

export default PictureSection
