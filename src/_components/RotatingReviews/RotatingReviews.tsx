import leftCuoteIcon from '@assets/icons/leftQuote.webp'
import styles from '@components/RotatingReviews/RotatingReviews.module.css'
import reviews from '@components/RotatingReviews/reviews.json'
import Image from 'next/image'

export default function RotatingReviews() {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {reviews.map((review, index) => (
          <section className={styles.cslide} key={index}>
            <div className={styles.imageWrap}>
              <Image alt="Quotes Icon" fill src={leftCuoteIcon} />
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
          <section className={styles.cslide} key={index}>
            <div className={styles.imageWrap}>
              <Image alt="Quotes Icon" fill src={leftCuoteIcon} />
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
