import writing from '@/data/writing'
import styles from './WritingTab.module.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function WritingTab() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Writing</h2>
      <ol className={styles.feed}>
        {writing.map((post, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.date}>{formatDate(post.date)}</span>
            <h3 className={styles.title}>
              {post.url
                ? <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                : post.title}
            </h3>
            {post.venue && <span className={styles.venue}>{post.venue}</span>}
            <p className={styles.excerpt}>{post.excerpt}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
