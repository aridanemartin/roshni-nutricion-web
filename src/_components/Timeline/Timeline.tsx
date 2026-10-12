import styles from '@components/Timeline/Timeline.module.css'

type TimelineProps = {
  steps: { place?: string; text: string; title: string }[]
}

// Numbered because the steps are chronological
export default function Timeline({ steps }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {steps.map((step, i) => (
        <li key={step.title}>
          <span aria-hidden="true" className={styles.number}>
            {i + 1}
          </span>
          <div>
            <h3>{step.title}</h3>
            {step.place && <span className={styles.place}>{step.place}</span>}
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
