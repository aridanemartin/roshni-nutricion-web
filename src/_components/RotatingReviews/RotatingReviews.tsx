import Image from 'next/image'
import styles from './RotatingReviews.module.css'
import leftCuoteIcon from '@assets/icons/leftQuote.webp'
import reviews from './reviews.json'

export default function RotatingReviews() {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {reviews.map((review, index) => (
          <section key={index} className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuoteIcon} alt="Quotes Icon" fill />
            </div>
            <div className={styles.slideText}>{review.text}</div>
            <div className={styles.grupoWrap}>
              <p className={styles.author}>{review.autor}</p>
              <p className={styles.extraido}>Comentario Extraido de</p>
              <p className={styles.fuente}>{review.extraido}</p>
            </div>
          </section>
        ))}
        {reviews.map((review, index) => (
          <section key={index} className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuoteIcon} alt="Quotes Icon" fill />
            </div>
            <div className={styles.slideText}>{review.text}</div>
            <div className={styles.grupoWrap}>
              <p className={styles.author}>{review.autor}</p>
              <p className={styles.extraido}>Comentario Extraido de</p>
              <p className={styles.fuente}>{review.extraido}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
