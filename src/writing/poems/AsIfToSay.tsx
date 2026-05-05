import styles from '@/writing/PostPage.module.css'

const backgroundContext =
  'Written in high school after a conversation with my friend. She was crying and telling me about a problem in her relationship. I had this surreal moment where I realized that nothing in my life could elicit the same depth of emotion in me that she felt at that moment. I like to think that has since changed.'

const poemText = `At six, I wished I could not cry,
and I was blessed with two dry eyes!
When I was sad, no tears would fall,
and I was rarely sad at all.

But as I sit here in your car,
my childish wish feels so bizarre.
You're crying hard and holding tight
to something <i>worth</i> your tears tonight.

I got the gift I asked for, see.
No tears have ever come from me.
But not because my will was strong;
I've just had nothing all along.`

function parsePoem(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((stanza) => stanza.split('\n'))
}

export default function AsIfToSayPoem() {
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