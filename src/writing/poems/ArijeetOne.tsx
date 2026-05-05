import styles from '@/writing/PostPage.module.css'

const backgroundContext =
  'I\'ve known my best friend since middle school. I lived with him for six years during and after college. A month after we moved to different cities, I wrote this on a napkin and mailed it to him (along with a postcard). When he opened the letter, he did not see the napkin and threw it away.'

const poemText = `The skyline we shared in view,
Now split by distance, city lines.
Yet memories, like rain that's due,
Still fall between the space and time.

We stand on corners side by side,
Smirk at clouds that blurred the day.
Though streets divide where we reside,
Your friendship yet won't fade away.

Woof, woof, mothafucka`

function parsePoem(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((stanza) => stanza.split('\n'))
}

export default function ArijeetOnePoem() {
  const poemStanzas = parsePoem(poemText)
  const hasBackgroundContext = backgroundContext.trim().length > 0

  return (
    <article className={styles.article}>
      <div className={styles.poem} aria-label="Poem text">
        {poemStanzas.map((stanza) => (
          <div key={stanza.join(' ')} className={styles.stanza}>
            {stanza.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      {hasBackgroundContext && (
        <section className={[styles.callout, styles.poemContext].join(' ')} aria-labelledby="poem-context-heading">
          <h2 id="poem-context-heading" className={styles.calloutHeading}>
            Context
          </h2>
          <p className={styles.calloutBody}>{backgroundContext}</p>
        </section>
      )}
    </article>
  )
}