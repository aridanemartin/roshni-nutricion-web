'use client'

import { useState } from 'react'
import type { Post } from '@/content/site'
import PostCard from '@components/PostCard/PostCard'
import styles from '@components/BlogGrid/BlogGrid.module.css'

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [source, setSource] = useState<string | null>(null)

  const counts = new Map<string, number>()
  posts.forEach(({ collaborator }) => {
    if (collaborator) {
      counts.set(collaborator.name, (counts.get(collaborator.name) ?? 0) + 1)
    }
  })
  const sources = [...counts.entries()].sort((a, b) => b[1] - a[1])
  const visible = source
    ? posts.filter((post) => post.collaborator?.name === source)
    : posts

  return (
    <>
      <div className={styles.bar}>
        <h2 className="sec-title">Artículos</h2>
        <div
          aria-label="Filtrar por medio"
          className={styles.chips}
          role="group"
        >
          <button
            aria-pressed={source === null}
            onClick={() => setSource(null)}
            type="button"
          >
            Todos<span>{posts.length}</span>
          </button>
          {sources.map(([name, count]) => (
            <button
              aria-pressed={source === name}
              key={name}
              onClick={() => setSource(name)}
              type="button"
            >
              {name}
              <span>{count}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {visible.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
