import '@components/AriSignature/AriSignature.scss'

export default function AriSignature() {
  return (
    <span className="createdBy">
      <p>
        Website created by{' '}
        <a
          href="https://www.aridanemartin.dev"
          rel="noreferrer"
          target="_blank"
        >
          Aridane Martín
        </a>{' '}
        &#169; 2024
      </p>
    </span>
  )
}
