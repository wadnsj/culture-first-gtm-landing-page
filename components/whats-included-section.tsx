type Module = {
  name: string
  color: string
  learn: string
  build: string
}

const MODULES: Module[] = [
  {
    name: 'Culture',
    color: 'var(--accent)',
    learn: 'What your customers already believe, value, and prioritize.',
    build: 'Cultural Identity Map',
  },
  {
    name: 'Meaning',
    color: '#2563eb',
    learn: 'Why customers choose one option over another.',
    build: 'Positioning and Pricing Foundation',
  },
  {
    name: 'Connection',
    color: '#16a34a',
    learn: 'How to turn understanding into messaging that resonates.',
    build: 'Messaging and Narrative Kit',
  },
  {
    name: 'Differentiation',
    color: '#7c3aed',
    learn: 'How to become the obvious choice instead of competing on price.',
    build: 'Differentiation Strategy',
  },
  {
    name: 'Growth',
    color: '#ea580c',
    learn: 'How to turn preference into repeatable, compounding growth.',
    build: 'Growth Engine and GTM Blueprint',
  },
]

export function WhatsIncludedSection() {
  return (
    <section
      id="system"
      className="border-t border-zinc-200 bg-[#F9F9FB] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            / What&apos;s Included
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold text-balance text-zinc-900 md:text-5xl">
            Five modules. One connected system.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {MODULES.map((module) => (
            <div
              key={module.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="h-1 w-8 rounded-full"
                style={{ backgroundColor: module.color }}
              />
              <h3 className="mt-4 text-lg font-bold text-balance text-zinc-900">
                {module.name}
              </h3>

              <div className="mt-4">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  What you&apos;ll learn
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-pretty text-zinc-600">
                  {module.learn}
                </p>
              </div>

              <div className="mt-4 border-t border-zinc-100 pt-4">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  What you&apos;ll build
                </p>
                <p
                  className="mt-1.5 text-sm leading-snug font-semibold text-balance"
                  style={{ color: module.color }}
                >
                  {module.build}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
