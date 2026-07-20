import {
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Gem,
  Map as MapIcon,
  MessageCircle,
  Repeat,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type AssetCategory =
  | 'Framework'
  | 'Template'
  | 'Worksheet'
  | 'AI Prompt'
  | 'Guide'
  | 'Playbook'

export const CATEGORY_COLORS: Record<AssetCategory, string> = {
  Framework: '#4f46e5',
  Template: '#0d9488',
  Worksheet: '#65a30d',
  'AI Prompt': '#c026d3',
  Guide: '#d97706',
  Playbook: '#e11d48',
}

export type IncludeItem = {
  name: string
  category: AssetCategory
}

export type Module = {
  number: string
  name: string
  deliverable: string
  handbookPurpose: string
  accent: string
  icon: LucideIcon
  assetTitle: string
  assetLabel: string
  assetIcon: LucideIcon
  assetPurpose: string
  assetIncludes?: IncludeItem[]
}

export const MODULES: Module[] = [
  {
    number: '01',
    name: 'Culture',
    deliverable: 'Cultural Identity Map',
    handbookPurpose:
      'Turn customer observations into a clear map of the beliefs, values, and motivations shaping buying decisions.',
    accent: '#7c3aed',
    icon: Users,
    assetTitle: 'Customer Culture Map',
    assetLabel: 'Fold-Out Explorer Map',
    assetIcon: MapIcon,
    assetPurpose:
      "Map your company's cultural position and strategic territory.",
  },
  {
    number: '02',
    name: 'Meaning',
    deliverable: 'Customer Understanding System',
    handbookPurpose:
      'Turn customer beliefs, values, and motivations into actionable cultural insights.',
    accent: '#2563eb',
    icon: Compass,
    assetTitle: 'Cultural Insight Framework',
    assetLabel: 'Customer Intelligence Binder',
    assetIcon: BookOpen,
    assetPurpose: "Organize everything you've learned about your customer.",
    assetIncludes: [
      { name: 'Customer Identity Profiles', category: 'Worksheet' },
      { name: 'Customer Interviews', category: 'Guide' },
      { name: 'Beliefs', category: 'Worksheet' },
      { name: 'Values', category: 'Worksheet' },
      { name: 'Aspirations', category: 'Worksheet' },
      { name: 'Jobs to Be Done', category: 'Framework' },
      { name: 'Buying Triggers', category: 'Playbook' },
    ],
  },
  {
    number: '03',
    name: 'Connection',
    deliverable: 'Messaging & Narrative Kit',
    handbookPurpose:
      'Turn cultural insight into ready-to-use messaging for every customer touchpoint.',
    accent: '#16a34a',
    icon: MessageCircle,
    assetTitle: 'Messaging Toolkit',
    assetLabel: 'Premium Toolkit Case',
    assetIcon: Briefcase,
    assetPurpose:
      'Build the messaging system that turns understanding into connection.',
    assetIncludes: [
      { name: 'Messaging Framework', category: 'Framework' },
      { name: 'Narrative Framework', category: 'Framework' },
      { name: 'Value Proposition', category: 'Template' },
      { name: 'Story Templates', category: 'Template' },
      { name: 'Positioning Statements', category: 'AI Prompt' },
    ],
  },
  {
    number: '04',
    name: 'Differentiation',
    deliverable: 'Obvious Choice Toolkit',
    handbookPurpose:
      'Focus your differentiated advantage on the first market most likely to choose, adopt, and champion your product.',
    accent: '#ea580c',
    icon: Gem,
    assetTitle: 'Beachhead Strategy',
    assetLabel: 'Executive Strategy Case',
    assetIcon: Award,
    assetPurpose: 'Build everything required to become the obvious choice.',
    assetIncludes: [
      { name: 'Positioning Framework', category: 'Framework' },
      { name: 'Differentiation Framework', category: 'Framework' },
      { name: 'Competitive Analysis', category: 'Guide' },
      { name: 'Offer Design', category: 'Playbook' },
      { name: 'Decision Frameworks', category: 'Framework' },
    ],
  },
  {
    number: '05',
    name: 'Growth',
    deliverable: 'Growth Engine',
    handbookPurpose:
      'Turn cultural insight into a repeatable system for attracting, converting, and retaining the right customers.',
    accent: 'var(--accent)',
    icon: TrendingUp,
    assetTitle: 'Growth Playbook',
    assetLabel: 'Executive Growth Loop Diagram',
    assetIcon: Repeat,
    assetPurpose:
      'Design the repeatable operating loop that keeps your strategy learning and improving over time.',
  },
]
