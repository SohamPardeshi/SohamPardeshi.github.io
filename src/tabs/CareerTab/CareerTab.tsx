import career from '@/data/career'
import styles from './CareerTab.module.css'

export default function CareerTab() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Career</h2>
      <ol className={styles.timeline}>
        {career.map((role, i) => (
          <li key={i} className={styles.entry}>
            <div className={styles.dot} />
            <div className={styles.body}>
              <div className={styles.meta}>
                <span className={styles.dates}>
                  {role.start} – {role.end ?? 'Present'}
                </span>
                <span className={styles.location}>{role.location}</span>
              </div>
              <h3 className={styles.title}>{role.title}</h3>
              <p className={styles.company}>{role.company}</p>
              <ul className={styles.bullets}>
                {role.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
