import Link from 'next/link'
import { LEGAL_LINKS } from '@/content/site'
import LegalNav from '@components/LegalLayout/LegalNav'
import styles from '@components/LegalLayout/LegalLayout.module.css'

type LegalLayoutProps = {
  children: React.ReactNode
  sections: { id: string; title: string }[]
  title: string
}

export default function LegalLayout({
  children,
  sections,
  title,
}: LegalLayoutProps) {
  return (
    <div className={`wrap ${styles.page}`}>
      <aside className={styles.aside}>
        <span className="eyebrow">Legal</span>
        <LegalNav links={LEGAL_LINKS} />
        {sections.length > 0 && (
          <nav aria-label="En esta página" className={styles.toc}>
            {sections.map(({ id, title: label }) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </aside>
      <article>
        <header className={styles.head}>
          <nav aria-label="Ruta" className={styles.crumbs}>
            <Link href="/">Inicio</Link> / Legal
          </nav>
          <h1>{title}</h1>
        </header>
        <div className={styles.text}>{children}</div>
      </article>
    </div>
  )
}
