import { useEffect, useState } from 'react'
import styles from './DarkModeToggle.module.css'

function getInitialDark(): boolean {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function setFavicon(dark: boolean) {
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (link) {
    link.href = dark ? '/favicon-frog-horns.png' : '/favicon-frog.png'
    link.type = 'image/png'
  }
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const initial = getInitialDark()
    setDark(initial)
    document.body.classList.toggle('dark-mode', initial)
    setFavicon(initial)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    document.body.classList.toggle('dark-mode', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setFavicon(next)
  }

  return (
    <button
      className={`${styles.toggle} ${dark ? styles.on : ''}`}
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={styles.knob} />
    </button>
  )
}
