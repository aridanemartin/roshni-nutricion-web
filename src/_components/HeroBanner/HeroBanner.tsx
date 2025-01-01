import React from 'react'
import './HeroBanner.scss'
import logo from '@assets/logos/logoDesiNew.webp'
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
            alt="Desirée del Carmen Acosta Santana - Nutricionista / Dietista en Las Palmas - Firma"
            layout="fill"
            style={{ objectFit: 'contain' }}
            quality={50}
          />
        </div>
        <div className="heroBanner__text">
          <h1 className="heroBanner__title">
            Conexión, equilibrio y bienestar para tus hormonas
          </h1>
          <div className="heroBanner__button-section">
            <Button
              baseClassName="heroBanner__button button-secondary"
              text="Conóceme"
              href="/desiree-acosta-nutricionista-dietista"
            />
            <Button
              baseClassName="heroBanner__button button-primary"
              text="Concertar cita"
              href="https://linktr.ee/desiacosta.nutri"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
