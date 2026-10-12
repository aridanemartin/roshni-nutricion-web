import Image from 'next/image'
import type { Post } from '@/content/site'
import styles from '@components/PostCard/PostCard.module.css'

type PostCardProps = {
  featured?: boolean
  post: Post
}

// Posts are articles published in external media, so cards open them in a new tab
export default function PostCard({ featured = false, post }: PostCardProps) {
  if (featured) {
    return (
      <a
        className={styles.featured}
        href={post.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={styles.media}>
          <Image
            alt={post.title}
            fill
            sizes="(max-width: 860px) 100vw, 640px"
            src={post.image}
          />
        </div>
        <div className={styles.body}>
          <span className="eyebrow">Último post</span>
          {post.collaborator && (
            <Image
              alt={post.collaborator.name}
              className={styles.source}
              height={post.collaborator.height}
              src={post.collaborator.logo}
              width={post.collaborator.width}
            />
          )}
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span className={styles.more}>Leer artículo ↗</span>
        </div>
      </a>
    )
  }

  const lead = post.collaborator
    ? `Leer en ${post.collaborator.name} ↗`
    : 'Leer artículo ↗'

  return (
    <a
      className={styles.card}
      href={post.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        alt={post.title}
        className={styles.bg}
        fill
        sizes="(max-width: 860px) 100vw, 360px"
        src={post.image}
      />
      {post.collaborator && (
        <span className={styles.tab}>
          <Image
            alt={post.collaborator.name}
            className={styles.logo}
            height={post.collaborator.height}
            src={post.collaborator.logo}
            width={post.collaborator.width}
          />
        </span>
      )}
      <div className={styles.cardBody}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className={styles.more}>{lead}</span>
      </div>
    </a>
  )
}
