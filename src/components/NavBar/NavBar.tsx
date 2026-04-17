import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle'
import styles from './NavBar.module.css'

const TABS = [
  { id: 'personal', label: 'Personal' },
  { id: 'career', label: 'Career' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'writing', label: 'Writing' },
] as const

interface Props {
  active: string
}

export default function NavBar({ active }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.tabs}>
          {TABS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.tab} ${active === id ? styles.active : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  )
}
