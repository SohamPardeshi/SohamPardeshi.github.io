import type { ComponentType } from 'react'
import type { Post } from '@/types'
import ArijeetOnePost from '@/writing/posts/ArijeetOnePost'
import InteractiveModelingPost from '@/writing/posts/InteractiveModelingPost'
import OnMetricsPost from '@/writing/posts/OnMetrics'

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
    component: ArijeetOnePost,
  },
  {
    slug: 'on-metrics',
    title: 'Measurement and Taste',
    date: '2026-05-01',
    excerpt: 'Thoughts on how outsourcing our judgement to metrics can make us lose our taste.',
    tags: ['opinion', 'metrics', 'engineering', 'social'],
    component: OnMetricsPost,
  },
]

export function getAllWritingPosts(): WritingPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getWritingPostBySlug(slug: string): WritingPost | undefined {
  return posts.find((post) => post.slug === slug)
}
