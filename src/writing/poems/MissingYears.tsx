import styles from '@/writing/PostPage.module.css'

const backgroundContext = ''

const poemText = `One year, two years, three years, four,
five years, six years, seven,
I stacked them up like copper coins
I'd saved to spend on heaven.

We met in college when we were young
and loved across the miles,
through phone calls and distant texts,
through wires and waits and whiles.

Till last year, I unpacked my life
and set it by her door.
And thought, at last! No more between us,
no distance anymore!

Then gray clouds moved inside her head
and rained on all her days.
So I tried to hold my umbrella up
a hundred different ways.

I brought her soup, I brought her light,
to love her through the storm.
I hoped my love was wide enough
to keep us nice and warm.

But someone else came whistling by
with pockets full of new.
and she said her goodbye to me
and left out all the who.

Three days after our goodbye,
she let him through the door
of the house it took me seven years
to build her, board by board.

Now I sit out on the curb
and count what's left of mine:
no house, no her, no seven years -
just pockets full of time.

So if you find some missing years of mine
out wandering alone...
Be gentle, please - they're good ones!
They just can't find their way back home.`

function parsePoem(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((stanza) => stanza.split('\n'))
}

export default function MissingYearsPoem() {
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
