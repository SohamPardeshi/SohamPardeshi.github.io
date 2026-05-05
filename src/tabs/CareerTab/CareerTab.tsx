import entries, { type TimelineEntry } from '@/data/careerTimeline'
import styles from './CareerTab.module.css'

const PRESENT_THRESHOLD = 2026.15

function formatYearAsDate(year: number): string {
  const yearInt = Math.floor(year)
  const monthDecimal = (year - yearInt) * 12
  const monthIdx = Math.round(monthDecimal)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[Math.max(0, Math.min(11, monthIdx))]

  if (year >= PRESENT_THRESHOLD) {
    return 'Present'
  }

  return `${month} ${yearInt}`
}

function formatDateRange(start: number, end: number, dateLabel?: string): string {
  if (dateLabel) return dateLabel
  const endStr = end >= PRESENT_THRESHOLD ? 'Present' : formatYearAsDate(end)
  return `${formatYearAsDate(start)} – ${endStr}`
}

function isConcurrent(work: TimelineEntry, other: TimelineEntry): boolean {
  return other.start < work.end && other.end > work.start
}

function GhostCard({ entry }: { entry: TimelineEntry }) {
  const trackLabel = entry.track.charAt(0).toUpperCase() + entry.track.slice(1)
  const cardClassName = [styles.ghostCard, styles[`ghost_${entry.track}`], entry.id === 'uw-ms' ? styles.ghost_ms : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClassName}>
      <span className={styles.ghostLabel}>{trackLabel}</span>
      <h4 className={styles.ghostTitle}>{entry.title}</h4>
      <p className={styles.ghostOrg}>{entry.org}</p>
      {entry.course && <p className={styles.ghostCourse}>{entry.course}</p>}
      <p className={styles.ghostDate}>{formatDateRange(entry.start, entry.end, entry.dateLabel)}</p>
    </div>
  )
}

function Blurb({ blurb }: { blurb: TimelineEntry['blurb'] }) {
  if (typeof blurb === 'string') {
    return <p className={styles.workBlurb}>{blurb}</p>
  }

  return (
    <div className={styles.workBlurbRich}>
      {blurb.paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.workBlurb} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
      {blurb.bullets && blurb.bullets.length > 0 && (
        <ul className={styles.workBlurbList}>
          {blurb.bullets.map((item) => (
            <li key={item} className={styles.workBlurbItem} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
      {blurb.paragraphsAfterBullets && blurb.paragraphsAfterBullets.length > 0 && (
        <div className={styles.workBlurbAfterBullets}>
          {blurb.paragraphsAfterBullets.map((paragraph) => (
            <p key={paragraph} className={styles.workBlurb} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      )}
    </div>
  )
}

function WorkEntry({ work, concurrentOthers }: { work: TimelineEntry; concurrentOthers: TimelineEntry[] }) {
  const isCompact = typeof work.blurb === 'string'

  return (
    <div className={[styles.workRow, isCompact ? styles.workRowCompact : ''].filter(Boolean).join(' ')}>
      <div className={[styles.mainColumn, isCompact ? styles.mainColumnCompact : ''].filter(Boolean).join(' ')}>
        <div className={styles.workMeta}>
          <span className={styles.workDates}>{formatDateRange(work.start, work.end)}</span>
          <span className={styles.workLocation}>{work.location}</span>
        </div>
        <div className={styles.workHeading}>
          <h3 className={styles.workTitle}>{work.title}</h3>
          <p className={styles.workOrg}>
            {/* Placeholder for org link if needed */}
            {work.org}
          </p>
        </div>
        <Blurb blurb={work.blurb} />
      </div>

      {concurrentOthers.length > 0 && (
        <div className={styles.ghostColumn}>
          {concurrentOthers.map((entry) => (
            <GhostCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function CareerTab() {
  const workEntries = [...entries].filter((e) => e.track === 'work').sort((a, b) => b.start - a.start)
  const otherEntries = entries.filter((e) => e.track !== 'work')
  const unmatchedOthers = otherEntries
    .filter((entry) => !workEntries.some((work) => isConcurrent(work, entry)))
    .sort((a, b) => b.start - a.start)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.workHeaderRow}>
          <div className={styles.workLabel}>Career Timeline</div>
          <div className={styles.ghostLabelTop}>Concurrent Work</div>
        </div>

        <div className={styles.timeline}>
          {workEntries.map((work) => {
            const concurrent = otherEntries
              .filter((other) => isConcurrent(work, other))
              .sort((a, b) => b.start - a.start)

            return <WorkEntry key={work.id} work={work} concurrentOthers={concurrent} />
          })}
        </div>

        {unmatchedOthers.length > 0 && (
          <div className={styles.secondarySection}>
            <div className={styles.secondaryLabel}>ELSEWHERE</div>
            <div className={styles.secondaryCards}>
              {unmatchedOthers.map((entry) => (
                <GhostCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
