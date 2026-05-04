import styles from '@/writing/PostPage.module.css'

const backgroundContext =
  'Written after my dad had a heart attack and agreed to quit smoking. He had quit many times before, but had relapsed in secret each time.'

const poemText = `I see the smoke still in your eyes,
A hunger crouched behind your silence
As though the ash and ember
Have never left your lungs

You speak of quitting
But I hear in dad's voice the echo of return
A door left ajar
A lighter waiting to be ignited

Mom no longer cares
Her hope a burnt wick,
I too withhold my trust
And hate myself for it

O father, heart still wounded
Do not walk again into the fire
I stand at the edge of your breath
Counting its fragile rhythm,
Fearing its end`

function parsePoem(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((stanza) => stanza.split('\n'))
}

export default function AsIfToSayPost() {
  const poemStanzas = parsePoem(poemText)
  const hasBackgroundContext = backgroundContext.trim().length > 0

  return (
    <article className={styles.article}>
      <div className={styles.poem} aria-label="Poem text">
        {poemStanzas.map((stanza) => (
          <div key={stanza.join(' ')} className={styles.stanza}>
            {stanza.map((line) => (
              <p key={line} dangerouslySetInnerHTML={{ __html: line }} />
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