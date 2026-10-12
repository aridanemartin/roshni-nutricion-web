'use client'

import { useEffect, useRef } from 'react'
import { ROUTES } from '@/content/site'
import { Button } from '@components/Button/Button'
import NavLinks from '@components/SiteHeader/NavLinks'
import styles from '@components/SiteHeader/MobileMenu.module.css'

type MobileMenuProps = {
  children: React.ReactNode
  links: { href: string; label: string }[]
  logo: React.ReactNode
}

// A modal <dialog> gives focus trapping, Escape to close and inert background for free
export default function MobileMenu({ children, links, logo }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => {
    dialogRef.current?.showModal()
    document.body.classList.add('menu-open')
  }

  const close = () => dialogRef.current?.close()

  useEffect(() => {
    const dialog = dialogRef.current
    const onClose = () => document.body.classList.remove('menu-open')
    // Any link inside the menu navigates, so close it on the way out
    const onClick = (event: MouseEvent) => {
      if ((event.target as Element).closest('a')) dialog?.close()
    }
    const onResize = () => {
      if (window.innerWidth > 860) dialog?.close()
    }
    dialog?.addEventListener('close', onClose)
    dialog?.addEventListener('click', onClick)
    window.addEventListener('resize', onResize)
    return () => {
      dialog?.removeEventListener('close', onClose)
      dialog?.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <button
        aria-controls="mobile-menu"
        aria-haspopup="dialog"
        aria-label="Abrir menú"
        className={styles.burger}
        onClick={open}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <dialog
        aria-label="Menú"
        className={styles.menu}
        id="mobile-menu"
        ref={dialogRef}
      >
        <div className={styles.top}>
          {logo}
          <button
            aria-label="Cerrar menú"
            className={styles.close}
            onClick={close}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
        <NavLinks className={styles.links} links={links} />
        <Button className={styles.cta} href={ROUTES.contact} variant="leaf">
          Concertar cita →
        </Button>
        <div className={styles.social}>{children}</div>
      </dialog>
    </>
  )
}
