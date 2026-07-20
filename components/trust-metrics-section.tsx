import {
  Blocks,
  Building2,
  DollarSign,
  Globe,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

type Metric = {
  label: string
  detail: string
  icon: LucideIcon
}

const METRICS: Metric[] = [
  {
    label: 'Global Product Launches',
    detail: 'Shipped go-to-market strategies across multiple countries and markets.',
    icon: Globe,
  },
  {
    label: 'Millions in Revenue Influenced',
    detail: 'Contributed to positioning and messaging behind revenue-driving launches.',
    icon: DollarSign,
  },
  {
    label: 'Enterprise Adoption Growth',
    detail: 'Helped enterprise platforms turn cultural insight into adoption gains.',
    icon: TrendingUp,
  },
  {
    label: 'Frameworks Built',
    detail: 'Developed positioning and messaging frameworks used at scale.',
    icon: Blocks,
  },
  {
    label: 'Experience Across Five Industries',
    detail: 'SaaS • AI • Retail Media • Commerce • Consumer Technology',
    icon: Building2,
  },
]

const LOGOS = ['TikTok', 'Spotify', 'Walmart Connect', 'HYPEBEAST', 'KAPAB']

export function TrustMetricsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / Why Founders Trust This System
        </span>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
          This isn&apos;t based on theory.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white/5">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                </span>
                <p className="mt-4 text-base leading-snug font-bold text-balance text-white">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-pretty text-zinc-400">
                  {metric.detail}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            Experience across
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50 grayscale">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="font-mono text-lg font-bold tracking-tight text-white"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
