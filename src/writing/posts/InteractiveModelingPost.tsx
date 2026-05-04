import { useState } from 'react'
import styles from '@/writing/PostPage.module.css'

export default function InteractiveModelingPost() {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={styles.article}>
      <p>
        Formal modeling can make design tradeoffs concrete. Even a small model can expose edge
        cases that are easy to miss in prose-only specs.
      </p>

      <h2>Interactive Notes</h2>
      <button type="button" className={styles.button} onClick={() => setExpanded((v) => !v)}>
        {expanded ? 'Hide model notes' : 'Show model notes'}
      </button>
      {expanded && (
        <div className={styles.callout}>
          This area is intentionally interactive so you can later swap in richer components:
          simulations, state visualizers, or executable examples.
        </div>
      )}
    </article>
  )
}
