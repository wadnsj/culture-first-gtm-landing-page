import { Check } from 'lucide-react'

const ROADMAP_PHASES = [
  {
    days: 'Days 1–30',
    name: 'Build Your Foundation',
    objective:
      "Understand your customers deeply enough to know exactly why they choose you — or don't.",
    assets: ['Customer Culture Map', 'Cultural Insight Framework'],
    outcomeLabel: 'You Know',
    outcomes: [
      'What your customers actually believe, value, and want',
      "Why some customers choose you and others don't",
      'The cultural territory your brand can credibly own',
    ],
  },
  {
    days: 'Days 31–60',
    name: 'Become the Obvious Choice',
    objective:
      'Turn your understanding into positioning and messaging that make you the obvious choice for the right customers.',
    assets: ['Messaging Toolkit', 'Beachhead Strategy'],
    outcomeLabel: 'You Know',
    outcomes: [
      'The exact language that makes your product feel relevant',
      'The one market segment most likely to choose you first',
      "How you're different in a way that actually matters",
    ],
  },
  {
    days: 'Days 61–90',
    name: 'Build Repeatable Growth',
    objective:
      'Turn your positioning into a growth system you can run again and again.',
    assets: ['Growth Playbook'],
    outcomeLabel: 'You Have',
    outcomes: [
      'A repeatable growth loop you can execute quarter after quarter',
      'A complete Culture-First GTM Blueprint tying every asset together',
      "A system for measuring what's working and improving it",
    ],
  },
]

export function RoadmapSection() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          Launch Your Strategy
        </span>
        <h2 className="mt-6 max-w-xl text-4xl leading-snug font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl">
          Execute with confidence over the next 90 days.
        </h2>
        <p className="mt-3 text-base text-zinc-600">
          Your Blueprint becomes your operating manual.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ROADMAP_PHASES.map((phase, i) => (
            <div
              key={phase.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    {phase.days}
                  </p>
                  <p className="text-lg leading-snug font-bold text-balance text-zinc-900">
                    {phase.name}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-zinc-100 pt-5">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  Objective
                </p>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-zinc-700">
                  {phase.objective}
                </p>
              </div>

              <div className="mt-5 border-t border-zinc-100 pt-5">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  Completed Assets
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {phase.assets.map((asset) => (
                    <li
                      key={asset}
                      className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] leading-none font-semibold text-zinc-800"
                    >
                      {asset}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-zinc-100 pt-5">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  {phase.outcomeLabel}
                </p>
                <ul className="mt-2.5 flex flex-col gap-2">
                  {phase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-snug text-zinc-700">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
