import Image from 'next/image'
import cimeLogo from '@assets/logos/cime.webp'
import complutenseLogo from '@assets/logos/complutense.webp'
import edriaLogo from '@assets/logos/edria.webp'
import freseniusLogo from '@assets/logos/fresenius.webp'
import hebeLogo from '@assets/logos/hebe.webp'
import hpsLogo from '@assets/logos/hps.webp'
import unedLogo from '@assets/logos/uned.webp'
import styles from '@components/InstitutionLogos/InstitutionLogos.module.css'

const logos = [
  { alt: 'UNED', src: unedLogo },
  { alt: 'Universidad Complutense de Madrid', src: complutenseLogo },
  { alt: 'Cime', src: cimeLogo },
  { alt: 'Edria', src: edriaLogo },
  { alt: 'Fresenius', src: freseniusLogo },
  // The Hebe logo is white on transparent
  { alt: 'Hebe', inverted: true, src: hebeLogo },
  { alt: 'Hospital Perpetuo Socorro', src: hpsLogo },
]

export default function InstitutionLogos() {
  return (
    <div className={styles.logos}>
      <span className="eyebrow">Instituciones</span>
      <div className={styles.row}>
        {logos.map(({ alt, inverted, src }) => (
          <Image
            alt={alt}
            className={inverted ? styles.inverted : undefined}
            key={alt}
            sizes="160px"
            src={src}
          />
        ))}
      </div>
    </div>
  )
}
