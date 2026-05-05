import type { ComponentType } from 'react'
import type { Post } from '@/types'
import ArijeetOnePoem from '@/writing/poems/ArijeetOne'
import AsIfToSayPoem from '@/writing/poems/AsIfToSay'
import UntrustedPoem from '@/writing/poems/Untrusted'
import OnMetricsPost from '@/writing/posts/OnMetrics'
import OnTheExpectedPost from '@/writing/posts/OnTheExpected'

export interface WritingPost extends Post {
  tags: string[]
  component: ComponentType
}

const posts: WritingPost[] = [
  {
    slug: 'arijeet-1',
    title: 'Arijeet #1',
    date: '2024-09-17',
    excerpt: 'A poem for my best friend, written a month after we moved to different cities.',
    tags: ['poetry', 'friendship'],
    component: ArijeetOnePoem,
  },
  {
    slug: 'asiftosay',
    title: 'As If To Say',
    date: '2016-05-19',
    excerpt: 'A poem written in high school after a conversation with a friend.',
    tags: ['poetry', 'friendship', 'personal values'],
    component: AsIfToSayPoem,
  },
  {
    slug: 'untrusted',
    title: 'Untrusted',
    date: '2025-10-23',
    excerpt: 'About my father\'s addiction to cigarettes.',
    tags: ['poetry', 'family'],
    component: UntrustedPoem,
  },
  {
    slug: 'on-metrics',
    title: 'Measurement and Taste',
    date: '2026-05-01',
    excerpt: 'Thoughts on how outsourcing our judgement to metrics can make us lose our taste.',
    tags: ['opinion', 'metrics', 'engineering', 'social'],
    component: OnMetricsPost,
  },
  {
    slug: 'on-the-expected',
    title: 'Only Expect the Expected',
    date: '2025-12-12',
    excerpt: 'Why "expect the unexpected" is terrible advice - and why surprise is the mechanism behind humor and learning.',
    tags: ['opinion', 'humor', 'learning', 'personal values'],
    component: OnTheExpectedPost,
  },
]

export function getAllWritingPosts(): WritingPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getWritingPostBySlug(slug: string): WritingPost | undefined {
  return posts.find((post) => post.slug === slug)
}
