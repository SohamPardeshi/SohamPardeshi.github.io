import styles from '@/writing/PostPage.module.css'

interface QuoteBoxProps {
  quote: React.ReactNode
  attribution?: string
}

export default function QuoteBox({ quote, attribution }: QuoteBoxProps) {
  return (
    <figure className={styles.quoteBox}>
      <blockquote className={styles.quoteText}>{quote}</blockquote>
      {attribution && <figcaption className={styles.quoteAttribution}>{attribution}</figcaption>}
    </figure>
  )
}