import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from '@components/PageHero/PageHero.module.css'

type PageHeroProps = {
  children?: React.ReactNode
  crumb: string
  image?: StaticImageData
  imageAlt?: string
  imageShape?: 'tall' | 'landscape' | 'wide'
  lede: string
  title: React.ReactNode
}

export default function PageHero({
  children,
  crumb,
  image,
  imageAlt,
  imageShape = 'landscape',
  lede,
  title,
}: PageHeroProps) {
  const classes = [styles.hero, image ? '' : styles.textOnly]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={`wrap ${classes}`}>
      <div>
        <nav aria-label="Ruta" className={styles.crumbs}>
          <Link href="/">Inicio</Link> /{' '}
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children && <div className={styles.actions}>{children}</div>}
      </div>
      {image && (
        <Image
          alt={imageAlt ?? ''}
          className={`${styles.image} ${styles[imageShape]}`}
          placeholder="blur"
          preload
          sizes="(max-width: 860px) 100vw, 520px"
          src={image}
        />
      )}
    </section>
  )
}
