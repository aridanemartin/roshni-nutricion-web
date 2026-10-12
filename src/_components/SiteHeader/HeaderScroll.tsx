'use client'

import { useEffect } from 'react'

// Marks the sticky header with [data-scrolled] once the page is scrolled, so it
// can turn into a translucent, blurred version of its own background colour.
export default function HeaderScroll() {
  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return

    const update = () =>
      header.toggleAttribute('data-scrolled', window.scrollY > 8)

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return null
}
