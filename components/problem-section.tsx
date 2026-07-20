import { ChevronDown } from 'lucide-react'

type Path = {
  title: string
  steps: string[]
  caption: string
  tone: 'muted' | 'signature'
}

const TRADITIONAL: Path = {
  title: 'Traditional GTM',
  steps: ['Product', 'Marketing', 'Sales', 'Siloed Growth Loop'],
  caption:
    'Results in feature wars, message duplication, high acquisition costs, and structural noise.',
  tone: 'muted',
}

const CULTURE_FIRST: Path = {
  title: 'Culture-First GTM',
  steps: ['Culture', 'Beliefs', 'Values', 'Choices', 'Compounding Growth'],
  caption:
    'Builds organic customer affinity, clear narrative resonance, and strategic defensibility.',
  tone: 'signature',
}

function GtmPath({ path }: { path: Path }) {
  const signature = path.tone === 'signature'
  return (
    <div className="flex flex-1 flex-col items-center">
      <p
        className={`font-mono text-[11px] font-medium tracking-widest uppercase ${
          signature ? 'text-zinc-300' : 'text-zinc-500'
        }`}
      >
        {path.title}
      </p>
      <div className="mt-6 flex flex-col items-center">
        {path.steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <span
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap sm:px-5 sm:text-sm ${
                signature
                  ? 'border border-white/15 bg-white/[0.03] text-white'
                  : 'border border-white/10 text-zinc-500'
              }`}
            >
              {step}
            </span>
            {index < path.steps.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <span
                  className={`h-3 w-px ${signature ? 'bg-accent/40' : 'bg-white/15'}`}
                />
                <ChevronDown
                  className={`size-3 ${signature ? 'text-accent/70' : 'text-zinc-600'}`}
                  aria-hidden="true"
                />
                <span
                  className={`h-3 w-px ${signature ? 'bg-accent/40' : 'bg-white/15'}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <p
        className={`mt-5 max-w-[220px] text-center text-xs leading-relaxed italic ${
          signature ? 'text-accent/80' : 'text-zinc-500'
        }`}
      >
        {path.caption}
      </p>
    </div>
  )
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute top-10 left-6 h-40 w-40 text-white/10"
      />
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          Why most founders struggle to grow
        </span>
        <h2 className="mt-6 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
          Most founders don&apos;t have a product problem.{' '}
          <span className="text-zinc-400">They have a relevance problem.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-zinc-400 text-pretty">
          Customers don&apos;t choose the best product. They choose the
          product that reflects how they see the world. Without
          understanding why customers choose, every positioning, messaging,
          and go-to-market decision becomes a guess.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-zinc-400 text-pretty">
          The Culture-First GTM System helps you discover what your
          customers already believe, identify where your business naturally
          aligns, and become the obvious choice.
        </p>

        <div className="relative mx-auto mt-16 flex w-full max-w-2xl items-start justify-center gap-10 sm:gap-20">
          <span
            aria-hidden="true"
            className="absolute top-8 bottom-8 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.06] sm:block"
          />
          <GtmPath path={TRADITIONAL} />
          <GtmPath path={CULTURE_FIRST} />
        </div>
      </div>
    </section>
  )
}
