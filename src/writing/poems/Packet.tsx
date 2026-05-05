import styles from '@/writing/PostPage.module.css'

const backgroundContext =
  'Written in college. It\'s not my favorite (it\'s a bit cringey) but I put the effort into writing it so I will upload it here for posterity.'

const poemText = `Fourteen characters in my header.
I don't read them. I just carry them.
Someone typed a name into a bar
and now it's my life's mission.

The resolver checks its cache - nothing.
Passes me up without a word.
The root doesn't know either
but it knows who might so I get a referral.

The TLD server processes thousands
of my siblings per second. 
Doesn't look up as it says: try 205.251.196.179.

The authoritative hands me an address
the way a clerk slides a form under the glass. 
93.184.216.34.

Seven milliseconds, start to finish. Not bad.
I'll be cached for three hundred seconds.
After that, the next one
will have to make the trip again.
Same name, same question, new packet.

But for those three hundred seconds
my descendants will have direction.`

function parsePoem(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((stanza) => stanza.split('\n'))
}

export default function PacketPoem() {
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