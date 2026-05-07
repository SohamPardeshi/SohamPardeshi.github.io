import { useMemo, useState } from 'react'
import { getAllWritingPosts } from '@/writing'
import styles from './WritingTab.module.css'

function formatDate(iso: string) {
  return new Date(iso + 'T00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function WritingTab() {
  const posts = useMemo(() => getAllWritingPosts(), [])
  const [activeTag, setActiveTag] = useState('all')

  const allTags = useMemo(() => {
    const tags = posts.flatMap((post) => post.tags)
    return ['all', ...Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b))]
  }, [posts])

  const filteredPosts = useMemo(
    () => posts.filter((post) => activeTag === 'all' || post.tags.includes(activeTag)),
    [activeTag, posts]
  )

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Writing</h2>
      <div className={styles.filters}>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.tagFilter} ${activeTag === tag ? styles.tagFilterActive : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ol className={styles.feed}>
        {filteredPosts.map((post, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.date}>{formatDate(post.date)}</span>
            <h3 className={styles.title}>
              <a href={`#writing/${post.slug}`}>{post.title}</a>
            </h3>
            {post.venue && <span className={styles.venue}>{post.venue}</span>}
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tagPill}>{tag}</span>
              ))}
            </div>
            {post.externalUrl && (
              <p className={styles.publishedLink}>
                <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">Published version</a>
              </p>
            )}
          </li>
        ))}
      </ol>
      {filteredPosts.length === 0 && (
        <p className={styles.empty}>No posts found for this tag yet.</p>
      )}
    </section>
  )
}
