import React from 'react'
import './HeroBanner.scss'
import logo from '@assets/logos/logoVerdeBlanco.png'
import Image from 'next/image'
import { Button } from '@components/Button/Button'

interface HeroBannerProps {
  description: string
  buttonComponent: React.ReactNode
}

const HeroBanner = ({ description, buttonComponent }: HeroBannerProps) => {
  return (
    <div className="heroBanner">
      <div className="heroBanner__content">
        <div className="heroBanner__signature">
          <Image
            src={logo}
            alt="Roshni P. Dietista - Nutricionista en Las Palmas - Firma"
            layout="fill"
            style={{ objectFit: 'contain' }}
            quality={50}
          />
        </div>
        <div className="heroBanner__text">
          <div className="heroBanner__title">
            <h1>La salud empieza en tu intestino</h1>
            <h2>Salud digestiva y bienestar integral</h2>
          </div>
          <div className="heroBanner__button-section">
            <Button
              baseClassName="heroBanner__button button-secondary"
              text="Conóceme"
              href="/roshni-peswani-nutricionista-dietista"
            />
            <Button
              baseClassName="heroBanner__button button-primary"
              text="Concertar cita"
              href="/contacto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
