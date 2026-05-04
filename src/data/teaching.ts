import type { Course, TeachingAward } from '@/types'

export const courses: Course[] = [
  {
    name: 'Systems Programming',
    code: 'CSE 333',
    term: 'Summer 2026',
    role: 'Instructor',
    description:
      'Programming in C/C++, memory management, POSIX systems interfaces, and building networked systems from scratch.',
    link: 'https://courses.cs.washington.edu/courses/cse333/',
  },
  {
    name: 'Software Design & Implementation',
    code: 'CSE 331',
    term: 'Summer 2022 & 2023',
    role: 'Instructor',
    description:
      'Specifications, testing, design patterns, and reasoning about correctness. Students build a full-stack campus maps application.',
    link: 'https://courses.cs.washington.edu/courses/cse331/',
  },
  {
    name: 'Intermediate Data Programming',
    code: 'CSE 163',
    term: 'Summer 2021',
    role: 'Instructor',
    description:
      'Python, pandas, scikit-learn, and data visualization. A project-driven course focused on real-world datasets.',
    link: 'https://courses.cs.washington.edu/courses/cse163/',
  },
  {
    name: 'Introductory CS Sequence',
    code: 'CSE 14x',
    term: '2021 – 2022',
    role: 'Teaching Assistant',
    description:
      'TA for UW\'s introductory CS sequence. Led sections, held office hours, and helped students build confidence in their first year of programming.',
    link: 'https://courses.cs.washington.edu/courses/cse14x/ta/',
  },
]

export const awards: TeachingAward[] = [
  {
    name: 'Bob Bandes Memorial Award for Excellence in Teaching',
    year: '2022',
    description:
      'Awarded annually to an outstanding teaching assistant in the Allen School of Computer Science & Engineering at the University of Washington.',
    link: 'https://www.cs.washington.edu/academics/teaching-assistants/bob-bandes-award/',
  },
]
