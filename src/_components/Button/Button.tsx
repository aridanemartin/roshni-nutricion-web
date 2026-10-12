import Link from 'next/link'
import styles from '@components/Button/Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  href: string
  /* solid: ink on light grounds · ghost: outlined on light grounds
     leaf: brand green on dark grounds · line: outlined on dark grounds */
  variant?: 'solid' | 'ghost' | 'leaf' | 'line'
}

const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href)

export function Button({
  children,
  className,
  href,
  variant = 'solid',
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  if (isExternal(href)) {
    const opensTab = href.startsWith('http')
    return (
      <a
        className={classes}
        href={href}
        rel={opensTab ? 'noopener noreferrer' : undefined}
        target={opensTab ? '_blank' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}
