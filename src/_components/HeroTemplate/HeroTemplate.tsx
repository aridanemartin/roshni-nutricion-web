import heroImage from '@assets/pictures/blog3.webp'
import Image from 'next/image'
import React from 'react'

import '@components/HeroTemplate/HeroTemplate.scss'
import Link from 'next/link'

export default function HeroTemplate() {
  return (
    <div className="hero">
      <div className="hero__image">
        <Image alt="hero" fill src={heroImage} style={{ objectFit: 'cover' }} />
      </div>
      <div className="hero__text-content">
        <h1>
          Bienvenido a <br />
          <strong>Roshni P. Dietista - Nutricionista en Las Palmas</strong>
        </h1>
        <div className="hero__quote">
          <h2>
            “Qué tu medicina sea tu alimento, y el alimento tu medicina”
            <br />
          </h2>
          <i>Hipócrates</i>
        </div>
        <div className="hero__button-container">
          <p>
            Haz clic ahora para empezar tu viaje hacia una vida más saludable.
          </p>
          <Link className="Button" href="/contacto">
            <button className="hero__button">Concertar cita</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
