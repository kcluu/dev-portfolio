export interface CareerEntry {
  role: string
  company: string
  dateRange: string
  description: string
}

export const careerHistory: CareerEntry[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Fenwick Labs',
    dateRange: '2023 — Present',

    description:
      "Leading the platform team on our core API, mentoring two junior engineers, and slowly convincing everyone that a well-organized Figma file counts as documentation.",
  },

  {
    role: 'Software Engineer',
    company: 'Brightloop',
    dateRange: '2021 — 2023',

    description:
      'Built the customer-facing dashboard from scratch and worked closely with design to grow our shared component library from nothing into something other teams actually wanted to use.',
  },

  {
    role: 'Junior Developer',
    company: 'Studio Nine',
    dateRange: '2019 — 2021',

    description:
      'My first engineering role out of school. Learned to ship fast, write tests I actually trusted, and take code review feedback without taking it personally.',
  },
]
