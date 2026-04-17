import teaching from '@/data/teaching'
import styles from './TeachingTab.module.css'

export default function TeachingTab() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Teaching</h2>
      <ul className={styles.grid}>
        {teaching.map((course, i) => (
          <li key={i} className={styles.card}>
            <div className={styles.top}>
              {course.code && <span className={styles.code}>{course.code}</span>}
              <span className={styles.term}>{course.term}</span>
            </div>
            <h3 className={styles.name}>
              {course.link
                ? <a href={course.link} target="_blank" rel="noopener noreferrer">{course.name}</a>
                : course.name}
            </h3>
            <p className={styles.desc}>{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
