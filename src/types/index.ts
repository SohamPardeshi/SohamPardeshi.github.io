export interface PersonalInfo {
  name: string
  pronouns?: string
  tagline?: string
  bio: (string | Segment[])[]
  photo: string
  photoDark?: string
  links: { label: string; url: string }[]
  visitedCountries: string[]
  travelIntro?: string
  travelNote?: string
  interestsIntro?: string
  interests: {
    label: string
    icon: string
    groups: {
      genre?: string
      columns?: number
      entries: { text: string; url?: string }[][]
    }[]
  }[]
}

export interface Segment { text: string; url?: string }

export interface Course {
  name: string
  code?: string
  term: string
  description: string
  link?: string
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
  externalUrl?: string
  venue?: string
}
