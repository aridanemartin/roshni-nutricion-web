'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { CSSProperties } from 'react'

type NavLinksProps = {
  className?: string
  links: { href: string; label: string }[]
}

export default function NavLinks({ className, links }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Principal" className={className}>
      {links.map(({ href, label }, index) => (
        <Link
          aria-current={href === pathname ? 'page' : undefined}
          href={href}
          key={href}
          style={{ '--i': index } as CSSProperties}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
