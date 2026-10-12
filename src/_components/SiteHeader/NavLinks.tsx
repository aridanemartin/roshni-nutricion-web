'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinksProps = {
  className?: string
  links: { href: string; label: string }[]
}

export default function NavLinks({ className, links }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Principal" className={className}>
      {links.map(({ href, label }) => (
        <Link
          aria-current={href === pathname ? 'page' : undefined}
          href={href}
          key={href}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
