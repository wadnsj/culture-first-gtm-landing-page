import {
  Blocks,
  ClipboardList,
  Eye,
  LayoutTemplate,
  ListChecks,
  RefreshCw,
  Route,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  name: string
  description: string
  icon: LucideIcon
  color: string
}

const FEATURES: Feature[] = [
  {
    name: 'Frameworks',
    description: 'Step-by-step strategic frameworks for every asset.',
    icon: Blocks,
    color: '#4f46e5',
  },
  {
    name: 'Templates',
    description: 'Fill-in-the-blank templates to move fast.',
    icon: LayoutTemplate,
    color: '#0d9488',
  },
  {
    name: 'Prompts',
    description: 'AI prompts to accelerate your own research and drafts.',
    icon: Sparkles,
    color: '#c026d3',
  },
  {
    name: 'Worksheets',
    description: 'Guided worksheets to capture your own answers.',
    icon: ClipboardList,
    color: '#65a30d',
  },
  {
    name: 'Examples',
    description: 'Real examples showing each framework applied.',
    icon: Eye,
    color: '#0891b2',
  },
  {
    name: 'Playbooks',
    description: 'Repeatable playbooks for ongoing execution.',
    icon: Route,
    color: '#e11d48',
  },
  {
    name: 'Assignments',
    description: 'Practical assignments that turn theory into output.',
    icon: ListChecks,
    color: '#d97706',
  },
  {
    name: 'Updates',
    description: 'Every future framework and update, included for life.',
    icon: RefreshCw,
    color: '#7c3aed',
  },
]

export function EverythingIncludedSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          Everything included
        </span>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-5xl">
          One connected system. Every format you need to execute it.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ backgroundColor: feature.color }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 0 1px color-mix(in oklch, ${feature.color} 55%, transparent), 0 0 40px -14px ${feature.color}`,
                  }}
                />
                <span
                  className="flex size-10 items-center justify-center rounded-full bg-white/5"
                  style={{
                    boxShadow: `inset 0 0 0 1px color-mix(in oklch, ${feature.color} 55%, transparent)`,
                  }}
                >
                  <Icon
                    className="size-5"
                    style={{ color: feature.color }}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-4 text-base font-bold text-balance text-white">
                  {feature.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-pretty text-zinc-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
