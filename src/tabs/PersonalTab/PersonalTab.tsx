import personal from '@/data/personal'
import { useDarkMode } from '@/hooks/useDarkMode'
import WorldMap from '@/components/WorldMap/WorldMap'
import styles from './PersonalTab.module.css'

export default function PersonalTab() {
  const { name, pronouns, tagline, bio, photo, photoDark, links, interestsIntro, interests, visitedCountries, travelIntro, travelNote } = personal
  const dark = useDarkMode()
  const src = dark && photoDark ? photoDark : photo

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img
          src={src}
          alt={name}
          className={styles.photo}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div className={styles.content}>
          <h1 className={styles.name}>
            {name}
            {pronouns && <span className={styles.pronouns}>({pronouns})</span>}
          </h1>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          {bio.map((p, i) => (
            <p key={i} className={styles.bio}>
              {typeof p === 'string'
                ? p
                : p.map((seg, si) =>
                    seg.url
                      ? <a key={si} href={seg.url} target="_blank" rel="noopener noreferrer">{seg.text}</a>
                      : <span key={si}>{seg.text}</span>
                  )}
            </p>
          ))}
          <ul className={styles.links}>
            {links.map(({ label, url }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.interests}>
        {interestsIntro && <p className={styles.interestsIntro}>{interestsIntro}</p>}
        {interests.filter(({ label }) => label === 'Books').map(({ label, icon, groups }) => (
          <div key={label} className={styles.interestCard}>
            <h3 className={styles.interestHeading}>
              <span className={styles.interestIcon}>{icon}</span>
              {label}
            </h3>
            <div className={styles.interestBody}>
              {groups.map((group, gi) => (
                <div key={gi}>
                  {group.genre && <p className={styles.genre}>{group.genre}</p>}
                  <ul
                    className={styles.interestItems}
                    style={group.columns ? { display: 'grid', gridTemplateColumns: `repeat(${group.columns}, 1fr)` } : undefined}
                  >
                    {group.entries.map((segments, ei) => (
                      <li key={ei}>
                        {segments.map((seg, si) =>
                          seg.url
                            ? <a key={si} href={seg.url} target="_blank" rel="noopener noreferrer">{seg.text}</a>
                            : <span key={si}>{seg.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.travel}>
        <h2 className={styles.travelHeading}>✈️ Travel</h2>
        {travelIntro && <p className={styles.travelText}>{travelIntro}</p>}
        <WorldMap visited={visitedCountries} />
        {travelNote && <p className={styles.travelText}>{travelNote}</p>}
      </div>

      <div className={styles.interests}>
        {interests.filter(({ label }) => label !== 'Books').map(({ label, icon, groups }) => (
          <div key={label} className={styles.interestCard}>
            <h3 className={styles.interestHeading}>
              <span className={styles.interestIcon}>{icon}</span>
              {label}
            </h3>
            <div className={styles.interestBody}>
              {groups.map((group, gi) => (
                <div key={gi}>
                  {group.genre && <p className={styles.genre}>{group.genre}</p>}
                  <ul
                    className={styles.interestItems}
                    style={group.columns ? { display: 'grid', gridTemplateColumns: `repeat(${group.columns}, 1fr)` } : undefined}
                  >
                    {group.entries.map((segments, ei) => (
                      <li key={ei}>
                        {segments.map((seg, si) =>
                          seg.url
                            ? <a key={si} href={seg.url} target="_blank" rel="noopener noreferrer">{seg.text}</a>
                            : <span key={si}>{seg.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
