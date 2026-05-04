import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import PersonalTab from '@/tabs/PersonalTab/PersonalTab'
import CareerTab from '@/tabs/CareerTab/CareerTab'
import TeachingTab from '@/tabs/TeachingTab/TeachingTab'
import WritingTab from '@/tabs/WritingTab/WritingTab'
import WritingPostPage from '@/tabs/WritingTab/WritingPostPage'

const VALID_TABS = ['personal', 'career', 'teaching', 'writing'] as const
type Tab = typeof VALID_TABS[number]

function hashToRoute(): { tab: Tab; postSlug?: string } {
  const hash = window.location.hash.replace('#', '')
  const [tabCandidate, ...rest] = hash.split('/')

  if (!(VALID_TABS as readonly string[]).includes(tabCandidate)) {
    return { tab: 'personal' }
  }

  const tab = tabCandidate as Tab
  if (tab !== 'writing') {
    return { tab }
  }

  const postSlug = rest.join('/') || undefined
  return { tab, postSlug }
}

export default function App() {
  const [route, setRoute] = useState(hashToRoute)
  const active = route.tab

  useEffect(() => {
    const onHash = () => setRoute(hashToRoute())
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
        {active === 'writing' && !route.postSlug && <WritingTab />}
        {active === 'writing' && route.postSlug && <WritingPostPage slug={route.postSlug} />}
      </main>
      <Footer />
    </>
  )
}
