const SCORECARD_FIELDS = [
  { label: 'My 90-Day Goal', lines: 1 },
  { label: 'My North Star Metric', lines: 1 },
  { label: 'My Top Three Growth Priorities', lines: 3 },
]

const SCORECARD_PILLARS = [
  'Culture',
  'Meaning',
  'Connection',
  'Differentiation',
  'Growth',
]

const STATUS_BLOCKS = [
  { label: 'Continue', color: '#16a34a' },
  { label: 'Improve', color: 'var(--accent)' },
  { label: 'Stop', color: '#dc2626' },
  { label: 'New Opportunities', color: '#2563eb' },
]

function StatusDots() {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span
        aria-hidden="true"
        className="size-3 rounded-full bg-emerald-500"
      />
      <span aria-hidden="true" className="size-3 rounded-full bg-accent" />
      <span aria-hidden="true" className="size-3 rounded-full bg-red-500" />
    </div>
  )
}

export function ScorecardSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          Measure What Matters
        </span>
        <h2 className="mt-6 max-w-xl text-4xl leading-snug font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl">
          Great founders don&apos;t rely on memory. They rely on systems.
        </h2>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-600">
          Every quarter you&apos;ll evaluate what&apos;s working, capture new
          customer insights, and improve your Blueprint.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
          {/* Strategic Focus Canvas */}
          <div className="grid gap-6 border-b border-zinc-200 p-6 sm:grid-cols-3 sm:p-8">
            {SCORECARD_FIELDS.map((field) => (
              <div key={field.label}>
                <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  {field.label}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {Array.from({ length: field.lines }).map((_, i) => (
                    <div
                      key={i}
                      className="h-9 rounded-lg border border-dashed border-zinc-300 bg-zinc-50"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 5-Pillar Health Radar */}
          <div className="border-b border-zinc-200 p-6 sm:p-8">
            <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
              5-Pillar Health Radar
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {SCORECARD_PILLARS.map((pillar) => (
                <div
                  key={pillar}
                  className="flex flex-1 items-center justify-between gap-4 rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 sm:min-w-[180px]"
                >
                  <span className="text-sm font-semibold text-zinc-900">
                    {pillar}
                  </span>
                  <StatusDots />
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-100 pt-5">
              <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-emerald-500"
                />
                Active / Optimized
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-accent"
                />
                Attention Needed
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-red-500"
                />
                At Risk / Needs Overhaul
              </span>
            </div>
          </div>

          {/* Continue / Improve / Stop / New Opportunities */}
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
              Quarterly Review
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {STATUS_BLOCKS.map((block) => (
                <div
                  key={block.label}
                  className="overflow-hidden rounded-xl border border-zinc-200"
                >
                  <div
                    className="h-1"
                    style={{ backgroundColor: block.color }}
                  />
                  <div className="bg-zinc-50 p-4">
                    <p className="text-sm font-bold text-zinc-900">
                      {block.label}
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <div className="h-7 rounded-md border border-dashed border-zinc-300 bg-white" />
                      <div className="h-7 rounded-md border border-dashed border-zinc-300 bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
