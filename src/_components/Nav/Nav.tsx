'use client'

import './Nav.scss'
import './Burger.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// images
import navLogo from '@assets/logos/logoDesiNew.webp'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { usePathname } from 'next/navigation'
import { SocialIcons } from '@components/SocialIcons/SocialIcons'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'

const socialLinks = [
  {
    href: 'https://www.facebook.com/desiree.acostasantana',
    icon: <FacebookIcon />,
  },
  {
    href: 'https://www.instagram.com/desiacosta.nutri/',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://www.doctoralia.es/desiree-acosta-santana/dietista-nutricionista/las-palmas-de-gran-canaria',
    icon: <DoctoraliaIcon />,
  },
  {
    href: 'https://www.linkedin.com/in/desinutri',
    icon: <LinkedinIcon />,
  },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const pathname = usePathname()
  const isBurgerIconWhite =
    (pathname.includes('/blog') ||
      pathname.includes('/servicios') ||
      pathname === '/') &&
    !isOpen

  const isSecondaryColor =
    pathname.includes('/desiree-acosta-nutricionista-dietista') ||
    pathname.includes('/contacto')

  return (
    <>
      <button
        onClick={toggle}
        className={`burger ${isOpen ? 'open' : ''}`}
        id="burger"
      >
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
      </button>
      <div className={isOpen ? 'nav' + ' ' + 'navOpen' : 'nav'}>
        <div className="navContent">
          <section className="navContent__leftSection">
            <Link href="/" className="navContent__logo">
              <Image
                src={navLogo}
                alt="Con Nutricion Saludable - Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <ul className="linksWrapper">
              <li>
                <Link
                  className={`link ${isSecondaryColor && 'linkSecondary'}`}
                  href="/"
                  onClick={toggle}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${isSecondaryColor && 'linkSecondary'}`}
                  href="/desiree-acosta-nutricionista-dietista"
                  onClick={toggle}
                >
                  Conóceme
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${isSecondaryColor && 'linkSecondary'}`}
                  href="/blog"
                  onClick={toggle}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${isSecondaryColor && 'linkSecondary'}`}
                  href="/#servicios"
                  onClick={toggle}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${isSecondaryColor && 'linkSecondary'}`}
                  href="/contacto"
                  onClick={toggle}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </section>
          <div className="navContent__social">
            <SocialIcons socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </>
  )
}
