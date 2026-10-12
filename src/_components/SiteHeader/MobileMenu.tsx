'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ROUTES } from '@/content/site'
import { Button } from '@components/Button/Button'
import NavLinks from '@components/SiteHeader/NavLinks'
import styles from '@components/SiteHeader/MobileMenu.module.css'

type MobileMenuProps = {
  children: React.ReactNode
  links: { href: string; label: string }[]
}

// One toggle that morphs burger <-> X in place, with the panel dropping in below
// the header. We drive the open state ourselves (instead of a modal <dialog>) so
// the header toggle stays interactive while the menu is open.
export default function MobileMenu({ children, links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback((restoreFocus = true) => {
    setOpen(false)
    if (restoreFocus) toggleRef.current?.focus()
  }, [])

  // While open: lock scroll, hide the rest of the page from AT + tab order,
  // and move focus into the menu.
  useEffect(() => {
    if (!open) return
    const regions = document.querySelectorAll('main, footer')
    regions.forEach((el) => el.setAttribute('inert', ''))
    document.body.classList.add('menu-open')
    panelRef.current?.querySelector('a')?.focus({ preventScroll: true })
    return () => {
      regions.forEach((el) => el.removeAttribute('inert'))
      document.body.classList.remove('menu-open')
    }
  }, [open])

  // Escape closes; growing past the mobile breakpoint closes too
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    const onResize = () => {
      if (window.innerWidth > 860) close(false)
    }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open, close])

  return (
    <>
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className={styles.toggle}
        data-open={open}
        onClick={open ? () => close() : () => setOpen(true)}
        ref={toggleRef}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={styles.menu}
        data-open={open}
        id="mobile-menu"
        onClick={(event) => {
          // Any link inside navigates, so close on the way out
          if ((event.target as Element).closest('a')) setOpen(false)
        }}
        ref={panelRef}
      >
        <NavLinks className={styles.links} links={links} />
        <Button className={styles.cta} href={ROUTES.contact} variant="leaf">
          Concertar cita →
        </Button>
        <div className={styles.social}>{children}</div>
      </div>
    </>
  )
}
