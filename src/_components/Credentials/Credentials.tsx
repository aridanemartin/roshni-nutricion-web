import { CREDENTIALS } from '@/content/site'
import styles from '@components/Credentials/Credentials.module.css'

export default function Credentials() {
  return (
    <ul className={styles.credentials}>
      {CREDENTIALS.map(({ detail, title }) => (
        <li key={title}>
          <b>{title}</b>
          {detail}
        </li>
      ))}
    </ul>
  )
}
