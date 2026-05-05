type Track = 'work' | 'teaching' | 'education'

type TimelineBlurb =
  | string
  | {
      paragraphs: string[]
      bullets?: string[]
      paragraphsAfterBullets?: string[]
    }

export interface TimelineEntry {
  id: string
  track: Track
  title: string
  org: string
  course?: string
  start: number
  end: number
  location: string
  dateLabel?: string
  blurb: TimelineBlurb
}

const PRESENT = 2026.99

const entries: TimelineEntry[] = [
  // Work entries (primary spine)
  {
    id: 'msft-sde2',
    track: 'work',
    title: 'Software Engineer II',
    org: 'Microsoft Azure',
    start: 2022.5,
    end: PRESENT,
    location: 'Redmond, WA',
    blurb: {
      paragraphs: [
        'My team was responsible for re-architecting Azure\'s distributed file system to go from exabyte-scale to zettabyte-scale. This involved redesigning legacy components (originally forked from Cosmos DB) with a new horizontally-scalable metadata layer.',
        'I owned the mechanism which migrated data from the legacy system to the new architecture. This code transitioned ~175EiB to the new system over three years. I designed this mechanism to minimize cost and all risk of data loss. To that end:'
      ],
      bullets: [
        'I wrote formal models (i.e. TLA+ specifications) to verify the correctness of the migration process. These models catch tricky race conditions and are necessary to prove correctness in a distributed system.',
        'I designed a chaos testing framework which randomly performs specific, destructive actions in preprod to put stress on our auto-recovery systems. This chaos testing framework was later expanded to support many non-migration scenarios.',
        'I worked with folks at Microsoft Research to integrate property-based testing into Azure Storage. This approach allowed us to automatically generate comprehensive test suites. This was essential to proving behavioral equivalence of our system.',
        'I built pipelines to continuously monitor for known issues (e.g. slow hardware) and automatically try safe mitigations.'
      ],
      paragraphsAfterBullets: [
        'This migration effort was completed with no customer impact. I also contributed to other projects on the team.'
      ]
    },
  },
  {
    id: 'msft-intern-21',
    track: 'work',
    title: 'Software Engineering Intern',
    org: 'Microsoft',
    start: 2021.42,
    end: 2021.75,
    location: 'Redmond, WA',
    blurb: 'Added telemetry to SharePoint Online to understand usage of legacy features and help migrate users to the new retention model.',
  },
  {
    id: 'msft-intern-20',
    track: 'work',
    title: 'Software Engineering Intern',
    org: 'Microsoft',
    start: 2020.42,
    end: 2020.67,
    location: 'Redmond, WA',
    blurb: 'Shipped production code for Exchange Server to modernize a process that purges data under a compliance hold.',
  },
  {
    id: 'informatica-intern',
    track: 'work',
    title: 'Software Engineering Intern',
    org: 'Informatica',
    start: 2019.42,
    end: 2019.75,
    location: 'Redwood City, CA',
    blurb: 'Built a lightweight reverse proxy so our servers could securely access an on-premise product. Supports SSL with streaming of HTTP requests of arbitrary payload size.',
  },
  {
    id: 'ivanti-intern',
    track: 'work',
    title: 'DevOps Engineering Intern',
    org: 'Ivanti',
    start: 2018.42,
    end: 2018.75,
    location: 'South Jordan, UT',
    blurb: 'Designed and implemented an end-to-end service backed by Azure Data Lake to continuously measure and generate reports on company data. Processed 10GB/hr of data (independent of file format or schema).',
  },

  // Teaching entries (split by summer/course)
  {
    id: 'uw-teach-26',
    track: 'teaching',
    title: 'Part-time Lecturer',
    org: 'University of Washington',
    course: 'CSE 333: Systems Programming',
    start: 2026.42,
    end: 2026.67,
    location: 'Seattle, WA',
    dateLabel: 'Summer 2026',
    blurb: 'Taught systems programming.',
  },
  {
    id: 'uw-teach-23',
    track: 'teaching',
    title: 'Part-time Lecturer',
    org: 'University of Washington',
    course: 'CSE 331: Software Design',
    start: 2023.42,
    end: 2023.67,
    location: 'Seattle, WA',
    dateLabel: 'Summer 2023',
    blurb: 'Taught software design.',
  },
  {
    id: 'uw-teach-22',
    track: 'teaching',
    title: 'Part-time Lecturer',
    org: 'University of Washington',
    course: 'CSE 331: Software Design',
    start: 2022.42,
    end: 2022.67,
    location: 'Seattle, WA',
    dateLabel: 'Summer 2022',
    blurb: 'Taught software design.',
  },
  {
    id: 'uw-predoc-21',
    track: 'teaching',
    title: 'Part-time Lecturer',
    org: 'University of Washington',
    course: 'CSE 163: Data Programming',
    start: 2021.42,
    end: 2021.75,
    location: 'Seattle, WA',
    dateLabel: 'Summer 2021',
    blurb: 'Taught introduction to data programming where students learned basic Python skills.',
  },

  // Education entries
  {
    id: 'uw-ms',
    track: 'education',
    title: 'M.S. in Computer Science',
    org: 'University of Washington',
    start: 2021.73,
    end: 2022.42,
    location: 'Seattle, WA',
    blurb: 'Explored theory and CS education. Decided PhD was not the path. I thought I wanted to pursue a Ph.D. in theoretical computer science. It turns out, I did not. During this year, I took many graduate classes on algorithms and proofs. At the same time, I also became interested in computer science education research (e.g. SIGCSE). Favorite courses: Computational Complexity, Randomized Algorithms, Distributed and Parallel Systems.',
  },
  {
    id: 'uw-bs',
    track: 'education',
    title: 'B.S. in Computer Science',
    org: 'University of Washington',
    start: 2017.73,
    end: 2021.42,
    location: 'Seattle, WA',
    blurb: 'Minor in Philosophy. Received the Bob Bandes Teaching Award. Teaching assistant for 5 courses over 13 quarters. Favorite courses: Toolkit for Modern Algorithms, Cryptography, Algorithms, Artificial Intelligence.',
  },
]

export default entries
