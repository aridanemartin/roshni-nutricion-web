import Link from 'next/link'
import './Button.scss'

interface ButtonProps {
  text: string
  onClick?: () => void
  href?: string
  baseClassName?: string
  secondary?: boolean
}

export const Button = ({
  text,
  onClick,
  href,
  baseClassName,
  secondary = false,
}: ButtonProps) => {
  const className = `button ${baseClassName} ${
    secondary ? 'button-secondary' : 'button-primary'
  }`

  if (href) {
    return (
      <Link className={className} href={href}>
        {text}
      </Link>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}
