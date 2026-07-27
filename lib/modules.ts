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
  strategicQuestion: string
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
      'Uncover the cultural identities that shape how your market evaluates, trusts, and chooses products.',
    strategicQuestion: "Why aren't customers choosing us?",
    accent: 'var(--accent)',
    icon: Users,
    assetTitle: 'Cultural Identity Map',
    assetLabel: 'Fold-Out Explorer Map',
    assetIcon: MapIcon,
    assetPurpose:
      "Map your customer's cultural position and strategic territory.",
    assetIncludes: [
      { name: 'Customer Interviews', category: 'Guide' },
      { name: 'Beliefs & Values', category: 'Worksheet' },
      { name: 'Identity Signals', category: 'Worksheet' },
      { name: 'Buying Triggers', category: 'Playbook' },
    ],
  },
  {
    number: '02',
    name: 'Meaning',
    deliverable: 'Positioning & Pricing Foundation',
    handbookPurpose:
      'Define the value your product creates and position it around what matters most to your ideal customers.',
    strategicQuestion: 'What makes our product worth choosing?',
    accent: '#2563eb',
    icon: Compass,
    assetTitle: 'Positioning & Pricing Foundation',
    assetLabel: 'Customer Intelligence Binder',
    assetIcon: BookOpen,
    assetPurpose: "Organize everything you've learned about your customer.",
    assetIncludes: [
      { name: 'Customer Jobs', category: 'Framework' },
      { name: 'Value Drivers', category: 'Worksheet' },
      { name: 'Positioning Strategy', category: 'Framework' },
      { name: 'Pricing Strategy', category: 'Framework' },
    ],
  },
  {
    number: '03',
    name: 'Connection',
    deliverable: 'Messaging & Narrative Kit',
    handbookPurpose:
      'Turn your positioning into messaging that customers instantly understand, remember, and act on.',
    strategicQuestion: 'How do we make our value impossible to ignore?',
    accent: '#16a34a',
    icon: MessageCircle,
    assetTitle: 'Messaging & Narrative Kit',
    assetLabel: 'Premium Toolkit Case',
    assetIcon: Briefcase,
    assetPurpose:
      'Build the messaging system that turns understanding into connection.',
    assetIncludes: [
      { name: 'Messaging Framework', category: 'Framework' },
      { name: 'Value Proposition', category: 'Template' },
      { name: 'Brand Narrative', category: 'Framework' },
      { name: 'Storytelling', category: 'Guide' },
    ],
  },
  {
    number: '04',
    name: 'Differentiation',
    deliverable: 'Differentiation Strategy',
    handbookPurpose:
      'Create a differentiated strategy that gives customers a compelling reason to choose you over every alternative.',
    strategicQuestion: 'How do we become the obvious choice?',
    accent: '#7c3aed',
    icon: Gem,
    assetTitle: 'Differentiation Strategy',
    assetLabel: 'Executive Strategy Case',
    assetIcon: Award,
    assetPurpose: 'Build everything required to become the obvious choice.',
    assetIncludes: [
      { name: 'Competitive Analysis', category: 'Guide' },
      { name: 'Category Positioning', category: 'Framework' },
      { name: 'Offer Design', category: 'Playbook' },
      { name: 'Beachhead Market', category: 'Worksheet' },
    ],
  },
  {
    number: '05',
    name: 'Growth',
    deliverable: 'Growth Engine & GTM Blueprint',
    handbookPurpose:
      'Build a repeatable go-to-market system that consistently attracts, converts, and retains the right customers.',
    strategicQuestion:
      'How do we consistently grow without relying on the founder?',
    accent: '#ea580c',
    icon: TrendingUp,
    assetTitle: 'Growth Engine & GTM Blueprint',
    assetLabel: 'Executive Growth Loop Diagram',
    assetIcon: Repeat,
    assetPurpose:
      'Design the repeatable operating loop that keeps your strategy learning and improving over time.',
    assetIncludes: [
      { name: 'GTM Blueprint', category: 'Playbook' },
      { name: 'Launch Strategy', category: 'Playbook' },
      { name: 'Growth Loops', category: 'Framework' },
      { name: 'Success Metrics', category: 'Worksheet' },
    ],
  },
]
