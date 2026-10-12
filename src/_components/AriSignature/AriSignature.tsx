import styles from '@components/AriSignature/AriSignature.module.css'

export default function AriSignature() {
  return (
    <p className={styles.signature}>
      Website created by{' '}
      <a href="https://www.aridanemartin.dev" rel="noreferrer" target="_blank">
        Aridane Martín
      </a>{' '}
      &#169; 2024
    </p>
  )
}
