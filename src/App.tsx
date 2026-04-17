import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import PersonalTab from '@/tabs/PersonalTab/PersonalTab'
import CareerTab from '@/tabs/CareerTab/CareerTab'
import TeachingTab from '@/tabs/TeachingTab/TeachingTab'
import WritingTab from '@/tabs/WritingTab/WritingTab'

const VALID_TABS = ['personal', 'career', 'teaching', 'writing'] as const
type Tab = typeof VALID_TABS[number]

function hashToTab(): Tab {
  const hash = window.location.hash.replace('#', '')
  return (VALID_TABS as readonly string[]).includes(hash)
    ? (hash as Tab)
    : 'personal'
}

export default function App() {
  const [active, setActive] = useState<Tab>(hashToTab)

  useEffect(() => {
    const onHash = () => setActive(hashToTab())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      <NavBar active={active} />
      <main>
        {active === 'personal' && <PersonalTab />}
        {active === 'career' && <CareerTab />}
        {active === 'teaching' && <TeachingTab />}
        {active === 'writing' && <WritingTab />}
      </main>
    </>
  )
}
