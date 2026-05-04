import { courses, awards } from '@/data/teaching'
import styles from './TeachingTab.module.css'

export default function TeachingTab() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Teaching</h2>
      <p className={styles.intro}>
        I sometimes teach computer science classes. This is something I find fun and morally fulfilling. Teaching tech has been something I've done (in some form) since middle school. Most recently, I've been teaching undergraduate courses at the University of Washington.
      </p>

      <ul className={styles.grid}>
        {courses.map((course, i) => (
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
            <span className={styles.role}>{course.role}</span>
            <p className={styles.desc}>{course.description}</p>
          </li>
        ))}
      </ul>

      {awards.length > 0 && (
        <>
          <h2 className={styles.heading}>Awards</h2>
          <ul className={styles.awardList}>
            {awards.map((award, i) => (
              <li key={i} className={styles.award}>
                <h3 className={styles.awardName}>
                  {award.link
                    ? <a href={award.link} target="_blank" rel="noopener noreferrer">{award.name}</a>
                    : award.name}
                </h3>
                <span className={styles.awardYear}>{award.year}</span>
                <p className={styles.desc}>{award.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
