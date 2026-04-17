import type { Role } from '@/types'

const career: Role[] = [
  {
    title: 'M.S. in Computer Science',
    company: 'University of Washington',
    location: 'Seattle, WA',
    start: 'Sep 2021',
    end: '2022',
    bullets: [
      'Studying Philosophy and Computer Science.',
      'Research focus on classical AI techniques and their epistemological underpinnings.',
      'Exploring game theory incentives in computer science.',
    ],
  },
  {
    title: 'Co-founder & Engineer',
    company: 'Classy',
    location: 'Seattle, WA',
    start: '2020',
    end: '2022',
    bullets: [
      'Designed the NoSQL Firebase backend using structure duplication techniques to optimize monthly cost.',
      'Wrote Google Cloud Functions to maintain eventual consistency and collect statistics.',
      'Built front-end components for the course-discovery platform.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'TEDxUofW',
    location: 'Seattle, WA',
    start: '2019',
    end: '2021',
    bullets: [
      'Built the backend and designed the REST API for tedxuofw.com.',
      'Added secure authentication, endpoint authorization, and multi-conference user analytics.',
      'Integrated Stripe payments to reduce conference overhead.',
    ],
  },
  {
    title: 'B.S. in Computer Science',
    company: 'University of Washington',
    location: 'Seattle, WA',
    start: 'Sep 2017',
    end: 'Jun 2021',
    bullets: [
      'Minors in Philosophy and Mathematics.',
    ],
  },
]

export default career
