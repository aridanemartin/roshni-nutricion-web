import styles from '@components/RotatingReviews/RotatingReviews.module.css'
import reviews from '@components/RotatingReviews/reviews.json'

type Review = (typeof reviews)[number]

const DOCTORALIA_REVIEWS_URL =
  'https://www.doctoralia.es/roshni-peswani-peswani/dietista-nutricionista/las-palmas-de-gran-canaria#profile-reviews'

const COLUMNS = 3

// Each column starts at a different review so neighbouring columns never line up
const columns: Review[][] = Array.from({ length: COLUMNS }, (_, col) =>
  reviews.map((_, i) => reviews[(i + col) % reviews.length]),
)

const getInitials = (name: string) =>
  name
    .replace(/\./g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

const ReviewCard = ({ review }: { review: Review }) => (
  <a
    className={styles.card}
    href={DOCTORALIA_REVIEWS_URL}
    rel="noopener noreferrer"
    target="_blank"
  >
    <p className={styles.text}>{review.text}</p>
    <div className={styles.cardHead}>
      <div className={styles.cardHeadLeft}>
        <span aria-hidden="true" className={styles.avatar}>
          {getInitials(review.autor)}
        </span>
        <span className={styles.author}>{review.autor}</span>
      </div>
      <span className={styles.source}>Doctoralia</span>
    </div>
  </a>
)

export default function RotatingReviews() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {columns.map((column, col) => (
          <div className={styles.column} key={col}>
            <div
              className={`${styles.columnScroll} ${
                col % 2 === 0 ? styles.up : styles.down
              }`}
            >
              {/* Rendered twice for a seamless loop; the copy is hidden from assistive tech */}
              {[0, 1].map((set) => (
                <div
                  aria-hidden={set === 1}
                  className={styles.columnSet}
                  key={set}
                >
                  {column.map((review) => (
                    <ReviewCard key={review.text} review={review} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        className={styles.allReviews}
        href={DOCTORALIA_REVIEWS_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        Leer todas las reseñas en Doctoralia
      </a>
    </section>
  )
}
