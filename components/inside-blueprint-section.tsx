const BLUEPRINT_CONTENTS = [
  'Executive Summary',
  'Customer Strategy',
  'Positioning',
  'Messaging',
  'Beachhead Strategy',
  'Growth System',
  '90-Day GTM Execution Plan',
  'Quarterly GTM Scorecard',
]

function BlueprintIndexItem({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <li className="flex items-center gap-3 border-b border-zinc-100 py-3.5 last:border-0">
      <span aria-hidden="true" className="h-4 w-0.5 shrink-0 bg-accent" />
      <span className="font-mono text-[11px] font-semibold text-zinc-400">
        {number}
      </span>
      <span className="text-sm font-semibold text-zinc-900">{title}</span>
      <span className="mx-2 h-px flex-1 bg-zinc-100" aria-hidden="true" />
    </li>
  )
}

export function InsideBlueprintSection() {
  const left = BLUEPRINT_CONTENTS.slice(0, 4)
  const right = BLUEPRINT_CONTENTS.slice(4)

  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <span className="font-mono text-xs font-medium tracking-widest text-zinc-400 uppercase">
          Inside Your Blueprint
        </span>
        <div className="mt-5 max-w-lg">
          <p className="text-2xl leading-tight font-bold text-zinc-900 sm:text-3xl">
            One document.
          </p>
          <p className="text-2xl leading-tight font-bold text-zinc-900 sm:text-3xl">
            Every strategic decision.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Everything you&apos;ve built throughout the system comes together
            into one strategic operating plan.
          </p>
        </div>

        <p className="mt-10 font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Inside your completed Blueprint:
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
          <div className="grid sm:grid-cols-2">
            <div className="px-6 py-8 sm:px-8">
              <ol>
                {left.map((title, i) => (
                  <BlueprintIndexItem
                    key={title}
                    number={`0${i + 1}`}
                    title={title}
                  />
                ))}
              </ol>
            </div>
            <div className="border-t border-zinc-200 px-6 py-8 sm:border-t-0 sm:border-l sm:px-8">
              <ol>
                {right.map((title, i) => (
                  <BlueprintIndexItem
                    key={title}
                    number={`0${i + 5}`}
                    title={title}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
