import { ArrowUpRight, Info } from 'lucide-react'

const lineItems = [
  {
    name: 'Cultural Identity Map',
    note: 'Brand strategy workshop',
    value: '$2,500',
  },
  {
    name: 'Positioning and Pricing Foundation',
    note: 'Customer research & positioning strategist',
    value: '$3,000',
  },
  {
    name: 'Messaging and Narrative Kit',
    note: 'Messaging consultant engagement',
    value: '$2,500',
  },
  {
    name: 'Differentiation Strategy',
    note: 'Positioning & differentiation strategist',
    value: '$3,500',
  },
  {
    name: 'Growth Engine and GTM Blueprint',
    note: 'Fractional GTM advisor',
    value: '$3,000',
  },
  {
    name: 'Lifetime Access + Future Updates',
    note: 'Every new framework, included',
    value: 'Included',
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            / Investment
          </span>
          <h2 className="mt-6 text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-5xl">
            Build an operating system{' '}
            <span className="text-muted-foreground">
              you&apos;ll use every time you launch, grow, or evolve.
            </span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty">
            Piecing this together yourself means hiring a brand strategist, a
            customer researcher, a positioning consultant, and a growth advisor
            &mdash; easily north of $15,000. The Culture-First GTM System gives
            you the same strategic foundation as a complete operating system,
            for one payment.
          </p>
          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <Info
              className="mt-0.5 size-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-balance">
                Know Exactly What You&apos;re Buying
              </p>
              <p className="mt-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                You get immediate access to proprietary videos, templates,
                frameworks, and worksheets. Because of the digital nature of
                this product, all sales are final &mdash; if you&apos;re unsure
                whether it&apos;s right for your business, reach out before
                enrolling.
              </p>
            </div>
          </div>
        </div>

        {/* Price card */}
        <div className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-xl">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            / Piece it together yourself
          </span>
          <ul className="mt-6 flex flex-col gap-4">
            {lineItems.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4"
              >
                <span className="text-sm">
                  <span className="text-foreground/90">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {item.note}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground line-through decoration-foreground/30">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="my-6 border-t border-border" />
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Comparable cost
            </span>
            <span className="font-mono text-sm text-muted-foreground line-through">
              $16,000+
            </span>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <p className="text-6xl font-bold tracking-tight">$350</p>
              <span className="font-mono text-sm text-muted-foreground">USD</span>
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              ONE PAYMENT / LIFETIME ACCESS / FUTURE UPDATES INCLUDED
            </p>
          </div>
          <a
            href="https://buy.stripe.com/aFadR9dRr6zIfpf4kS4Ni04"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center justify-center gap-2 rounded-full bg-primary py-3 pr-3 pl-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get Instant Access
            <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            LIFETIME ACCESS / DOWNLOADABLE TEMPLATES / PRACTICAL ASSIGNMENTS
          </p>
        </div>
      </div>
    </section>
  )
}
