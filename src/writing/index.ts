import type { ComponentType } from 'react'
import type { Post } from '@/types'

import ArijeetOnePoem from '@/writing/poems/ArijeetOne'
import AsIfToSayPoem from '@/writing/poems/AsIfToSay'
import UntrustedPoem from '@/writing/poems/Untrusted'
import PacketPoem from '@/writing/poems/Packet'
import MissingYearsPoem from '@/writing/poems/MissingYears'

import OnMetricsPost from '@/writing/posts/OnMetrics'
import OnTheExpectedPost from '@/writing/posts/OnTheExpected'
import SohamismPost from '@/writing/posts/Sohamism'

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
    slug: 'packet',
    title: 'Packet',
    date: '2019-11-04',
    excerpt: 'A poem about the journey of a data packet through the network.',
    tags: ['poetry', 'engineering'],
    component: PacketPoem,
  },
  {
    slug: 'missing-years',
    title: 'The Missing Years',
    date: '2026-06-15',
    excerpt: 'A poem about some time I lost.',
    tags: ['poetry', 'love'],
    component: MissingYearsPoem,
  },
  {
    slug: 'on-the-expected',
    title: 'Only Expect the Expected',
    date: '2025-12-12',
    excerpt: 'Why "expect the unexpected" is terrible advice - and why surprise is the mechanism behind humor and learning.',
    tags: ['opinion', 'humor', 'learning', 'personal values'],
    component: OnTheExpectedPost,
  },
  {
    slug: 'sohamism',
    title: 'Robust Sohamism',
    date: '2024-12-18',
    excerpt: 'A rigorous introduction to the most provably correct ethical framework in modern philosophy.',
    tags: ['philosophy', 'artificial intelligence'],
    component: SohamismPost,
  },
]

export function getAllWritingPosts(): WritingPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getWritingPostBySlug(slug: string): WritingPost | undefined {
  return posts.find((post) => post.slug === slug)
}
