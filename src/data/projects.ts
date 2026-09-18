export interface Project {
  name: string
  description: string
  tags: string[]
  href: string
}

export const recentProject: Project = {
  name: 'Pocket Ledger',

  description:
    "A tiny budgeting app that turns your bank CSV exports into a calm, color-coded monthly overview — no linked accounts, no ads, just your own data, read once and kept on your device. Started as a weekend project to replace my own spreadsheet habit and turned into the thing I'm proudest of shipping this year.",

  tags: ['React', 'Node.js', 'SQLite'],

  href: '#',
}
