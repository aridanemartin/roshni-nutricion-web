'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@components/LegalLayout/LegalLayout.module.css'

type LegalNavProps = {
  links: { href: string; label: string }[]
}

export default function LegalNav({ links }: LegalNavProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Documentos legales" className={styles.docs}>
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
