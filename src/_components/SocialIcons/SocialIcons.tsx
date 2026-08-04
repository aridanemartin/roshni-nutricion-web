import Link from 'next/link'
import PropTypes from 'prop-types'
import '@components/SocialIcons/SocialIcons.scss'

export const SocialIcons = ({ socialLinks }) => (
  <div className="socialIcons">
    {socialLinks.map((link, index) => (
      <div className="socialIcons__icon" key={index}>
        <Link href={link.href} rel="noreferrer" target="_blank">
          {link.icon}
        </Link>
      </div>
    ))}
  </div>
)

SocialIcons.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
    }),
  ).isRequired,
}
