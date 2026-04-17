export interface PersonalInfo {
  name: string
  tagline?: string
  bio: string[]
  photo: string
  photoDark?: string
  links: { label: string; url: string }[]
  interestsIntro?: string
  interests: {
    label: string
    icon: string
    groups: {
      genre?: string
      entries: { text: string; url?: string }[][]
    }[]
  }[]
}

export interface Role {
  title: string
  company: string
  location: string
  start: string
  end: string | null
  bullets: string[]
}

export interface Course {
  name: string
  code?: string
  term: string
  description: string
  link?: string
}

export interface Post {
  title: string
  date: string
  excerpt: string
  url?: string
  venue?: string
}
