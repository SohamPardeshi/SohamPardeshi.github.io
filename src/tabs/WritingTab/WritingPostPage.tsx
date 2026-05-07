import { getWritingPostBySlug } from '@/writing'
import styles from './WritingPostPage.module.css'

function formatDate(iso: string) {
  return new Date(iso + 'T00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function WritingPostPage({ slug }: { slug: string }) {
  const post = getWritingPostBySlug(slug)

  if (!post) {
    return (
      <section className={styles.section}>
        <a href="#writing" className={styles.backLink}>
          <span className={styles.backChevron} aria-hidden="true">&lsaquo;</span>
          <span>Back to Writing</span>
        </a>
        <h2 className={styles.heading}>Post Not Found</h2>
        <p className={styles.body}>This post does not exist yet.</p>
      </section>
    )
  }

  const PostComponent = post.component

  return (
    <section className={styles.section}>
      <a href="#writing" className={styles.backLink}>
        <span className={styles.backChevron} aria-hidden="true">&lsaquo;</span>
        <span>Back to Writing</span>
      </a>
      <h1 className={styles.heading}>{post.title}</h1>
      <p className={styles.meta}>{formatDate(post.date)}{post.venue ? ` • ${post.venue}` : ''}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.tagPill}>{tag}</span>
        ))}
      </div>
      {post.externalUrl && (
        <p className={styles.externalWrap}>
          <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
            Read published version
          </a>
        </p>
      )}
      <div className={styles.postContent} data-ghost-container>
        <PostComponent />
      </div>
    </section>
  )
}
