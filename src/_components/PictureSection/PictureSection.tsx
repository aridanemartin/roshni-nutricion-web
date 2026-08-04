import React from 'react'
import '@components/PictureSection/PictureSection.scss'
import Image, { StaticImageData } from 'next/image'

type PicturePosition = 'left' | 'right'

interface PictureSectionProps {
  pictureSrc: StaticImageData
  picturePosition: PicturePosition
  text: React.ReactElement
  objectPosition?: string
}

const PictureSection = ({
  pictureSrc: pictureUrl,
  picturePosition,
  text,
  objectPosition = 'center',
}: PictureSectionProps) => (
    <div className={`picture-section picture-section__${picturePosition}`}>
      <div className="picture-section__picture-wrapper">
        <Image
          alt="Picture"
          className="picture-section__picture"
          src={pictureUrl}
          style={{ objectPosition: `${objectPosition}` }}
        />
      </div>
      <div className="picture-section__text">{text}</div>
    </div>
  )

export default PictureSection
