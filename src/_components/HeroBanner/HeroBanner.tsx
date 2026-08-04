import React from 'react'
import '@components/HeroBanner/HeroBanner.scss'
import logo from '@assets/logos/logoVerdeBlanco.png'
import Image from 'next/image'
import { Button } from '@components/Button/Button'

const HeroBanner = () => (
    <div className="heroBanner">
      <div className="heroBanner__content">
        <div className="heroBanner__signature">
          <Image
            alt="Roshni P. Dietista - Nutricionista en Las Palmas - Firma"
            layout="fill"
            quality={50}
            src={logo}
            style={{ objectFit: 'contain' }}
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
              href="/roshni-peswani-nutricionista-dietista"
              text="Conóceme"
            />
            <Button
              baseClassName="heroBanner__button button-primary"
              href="/contacto"
              text="Concertar cita"
            />
          </div>
        </div>
      </div>
    </div>
  )

export default HeroBanner
