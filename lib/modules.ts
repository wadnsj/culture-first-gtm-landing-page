export type Module = {
  number: string
  name: string
  emoji: string
  accent: string
  founderQuestion: string
  assetTitle: string
  description: string
  youllBuild: string[]
  outcome: string
}

export const MODULES: Module[] = [
  {
    number: '01',
    name: 'Culture',
    emoji: '🟡',
    accent: 'var(--accent)',
    founderQuestion: 'Why should customers choose us?',
    assetTitle: 'Cultural Identity Map',
    description:
      'Uncover the cultural identities that shape how your market evaluates, trusts, and chooses products.',
    youllBuild: [
      'Cultural Beliefs',
      'Shared Values',
      'Identity Signals',
      'Buying Triggers',
    ],
    outcome: 'Understand why customers choose.',
  },
  {
    number: '02',
    name: 'Meaning',
    emoji: '🔵',
    accent: '#2563eb',
    founderQuestion: 'Who is most likely to choose our product first?',
    assetTitle: 'Positioning Foundation',
    description:
      "Identify the specific customers most likely to choose your product first, define the beachhead market you'll win first, and position your business around what matters most to them.",
    youllBuild: ['Early Customer Blueprint', 'Positioning Foundation'],
    outcome: 'Win your first market.',
  },
  {
    number: '03',
    name: 'Connection',
    emoji: '🟢',
    accent: '#16a34a',
    founderQuestion: 'How do we make our value impossible to ignore?',
    assetTitle: 'Messaging & Narrative Framework',
    description:
      'Turn your positioning into messaging customers immediately understand, trust, and remember.',
    youllBuild: [
      'Messaging Framework',
      'Value Proposition',
      'Brand Narrative',
      'Trust Message',
    ],
    outcome: 'Make your value immediately understood.',
  },
  {
    number: '04',
    name: 'Differentiation',
    emoji: '🟣',
    accent: '#7c3aed',
    founderQuestion: 'How do we become the obvious choice?',
    assetTitle: 'Differentiation Strategy',
    description:
      'Identify where you can create meaningful competitive advantage and define why customers should choose you over every alternative.',
    youllBuild: ['Opportunity Map', 'Differentiation Strategy'],
    outcome: 'Become the obvious choice.',
  },
  {
    number: '05',
    name: 'Growth',
    emoji: '🟠',
    accent: '#ea580c',
    founderQuestion:
      'How do we consistently grow without relying on the founder?',
    assetTitle: 'Growth Engine',
    description:
      "Turn everything you've built into a repeatable growth system and assemble your personalized 90-day GTM strategy.",
    youllBuild: [
      'Growth Engine',
      'Cultural Insight Engine',
      'Personalized 90-Day GTM Strategy',
    ],
    outcome: 'Execute a personalized 90-day GTM strategy.',
  },
]
