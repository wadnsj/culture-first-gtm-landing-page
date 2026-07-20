import {
  Briefcase,
  Cpu,
  Handshake,
  Rocket,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'

type Audience = {
  label: string
  icon: LucideIcon
  accent: string
}

const AUDIENCES: Audience[] = [
  { label: 'B2B SaaS Founders', icon: Briefcase, accent: 'var(--accent)' },
  { label: 'AI Founders', icon: Cpu, accent: '#2563eb' },
  { label: 'Consumer Brands', icon: ShoppingBag, accent: '#16a34a' },
  { label: 'Service Businesses', icon: Handshake, accent: '#7c3aed' },
  { label: 'First-Time Founders', icon: Rocket, accent: '#ea580c' },
]

export function AudienceFitSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-24 text-zinc-900 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / Is This Right for You?
        </span>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
          Whether you&apos;re building an AI startup, a consumer brand, or a
          service business &mdash; the challenge is the same.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600 text-pretty">
          Customers have to understand why your product matters before
          they&apos;ll choose it. Ideal for:
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AUDIENCES.map((audience) => {
            const Icon = audience.icon
            return (
              <div
                key={audience.label}
                className="rounded-2xl border-2 bg-white p-6 text-center shadow-sm"
                style={{
                  borderColor: `color-mix(in oklch, ${audience.accent} 35%, transparent)`,
                }}
              >
                <span
                  className="mx-auto flex size-12 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `color-mix(in oklch, ${audience.accent} 14%, white)`,
                  }}
                >
                  <Icon
                    className="size-5"
                    style={{ color: audience.accent }}
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-4 text-sm leading-snug font-bold text-zinc-900">
                  {audience.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
