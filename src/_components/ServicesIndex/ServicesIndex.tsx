import Image from 'next/image'
import { SERVICES } from '@/content/site'
import styles from '@components/ServicesIndex/ServicesIndex.module.css'

export default function ServicesIndex() {
  return (
    <ul className={styles.index}>
      {SERVICES.map(({ icon, items, title }) => (
        <li className={styles.row} key={title}>
          <Image alt="" className={styles.icon} src={icon} />
          <h3>{title}</h3>
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
