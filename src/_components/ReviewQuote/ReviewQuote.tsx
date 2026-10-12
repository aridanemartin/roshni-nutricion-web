'use client'

import { useState } from 'react'
import { DOCTORALIA_URL } from '@/content/site'
import styles from '@components/ReviewQuote/ReviewQuote.module.css'

type ReviewQuoteProps = {
  reviews: { author: string; text: string }[]
}

export default function ReviewQuote({ reviews }: ReviewQuoteProps) {
  const [active, setActive] = useState(0)
  const review = reviews[active]

  return (
    <figure className={styles.quote}>
      <blockquote aria-live="polite">{review.text}</blockquote>
      <figcaption className={styles.meta}>
        <cite>
          {review.author} ·{' '}
          <a href={DOCTORALIA_URL} rel="noopener noreferrer" target="_blank">
            Doctoralia
          </a>
        </cite>
        <div aria-label="Elegir reseña" className={styles.dots} role="group">
          {reviews.map((item, i) => (
            <button
              aria-label={`Reseña de ${item.author}`}
              aria-pressed={i === active}
              key={item.author}
              onClick={() => setActive(i)}
              type="button"
            />
          ))}
        </div>
      </figcaption>
    </figure>
  )
}
