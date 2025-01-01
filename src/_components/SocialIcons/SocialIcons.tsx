import Link from 'next/link'
import './SocialIcons.scss'

export const SocialIcons = ({ socialLinks }) => (
  <div className="socialIcons">
    {socialLinks.map((link, index) => (
      <div key={index} className="socialIcons__icon">
        <Link href={link.href} target="_blank" rel="noreferrer">
          {link.icon}
        </Link>
      </div>
    ))}
  </div>
)
