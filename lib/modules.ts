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
    accent: 'var(--accent)',
    icon: Users,
    assetTitle: 'Cultural Identity Map',
    assetLabel: 'Fold-Out Explorer Map',
    assetIcon: MapIcon,
    assetPurpose:
      "Map your customer's cultural position and strategic territory.",
    assetIncludes: [
      { name: 'Customer Identity Profiles', category: 'Worksheet' },
      { name: 'Customer Interviews', category: 'Guide' },
      { name: 'Beliefs & Values', category: 'Worksheet' },
      { name: 'Buying Triggers', category: 'Playbook' },
    ],
  },
  {
    number: '02',
    name: 'Meaning',
    deliverable: 'Positioning and Pricing Foundation',
    handbookPurpose:
      'Turn customer understanding into positioning and pricing that reflects why customers choose one option over another.',
    accent: '#2563eb',
    icon: Compass,
    assetTitle: 'Positioning and Pricing Foundation',
    assetLabel: 'Customer Intelligence Binder',
    assetIcon: BookOpen,
    assetPurpose: "Organize everything you've learned about your customer.",
    assetIncludes: [
      { name: 'Jobs to Be Done', category: 'Framework' },
      { name: 'Positioning Statements', category: 'AI Prompt' },
      { name: 'Pricing Framework', category: 'Framework' },
    ],
  },
  {
    number: '03',
    name: 'Connection',
    deliverable: 'Messaging and Narrative Kit',
    handbookPurpose:
      'Turn cultural insight into messaging and narrative that resonates in your own voice at every touchpoint.',
    accent: '#16a34a',
    icon: MessageCircle,
    assetTitle: 'Messaging and Narrative Kit',
    assetLabel: 'Premium Toolkit Case',
    assetIcon: Briefcase,
    assetPurpose:
      'Build the messaging system that turns understanding into connection.',
    assetIncludes: [
      { name: 'Messaging Framework', category: 'Framework' },
      { name: 'Narrative Framework', category: 'Framework' },
      { name: 'Value Proposition', category: 'Template' },
      { name: 'Story Templates', category: 'Template' },
    ],
  },
  {
    number: '04',
    name: 'Differentiation',
    deliverable: 'Differentiation Strategy',
    handbookPurpose:
      'Focus your differentiated advantage so you become the obvious choice instead of competing on price.',
    accent: '#7c3aed',
    icon: Gem,
    assetTitle: 'Differentiation Strategy',
    assetLabel: 'Executive Strategy Case',
    assetIcon: Award,
    assetPurpose: 'Build everything required to become the obvious choice.',
    assetIncludes: [
      { name: 'Positioning Framework', category: 'Framework' },
      { name: 'Competitive Analysis', category: 'Guide' },
      { name: 'Offer Design', category: 'Playbook' },
    ],
  },
  {
    number: '05',
    name: 'Growth',
    deliverable: 'Growth Engine and GTM Blueprint',
    handbookPurpose:
      'Turn preference into a repeatable, compounding growth engine and your full 90-day GTM blueprint.',
    accent: '#ea580c',
    icon: TrendingUp,
    assetTitle: 'Growth Engine and GTM Blueprint',
    assetLabel: 'Executive Growth Loop Diagram',
    assetIcon: Repeat,
    assetPurpose:
      'Design the repeatable operating loop that keeps your strategy learning and improving over time.',
  },
]
