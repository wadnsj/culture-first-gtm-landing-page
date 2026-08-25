import { ArrowDown, ArrowRight } from 'lucide-react'

import { MODULES } from '@/lib/modules'

const STEP_WHY: Record<string, string> = {
  Culture: 'Understand why customers choose',
  Meaning: "Decide who to win first and why you're worth choosing",
  Connection: 'Turn your positioning into messaging customers understand',
  Differentiation: 'Give customers a reason to choose you instead',
  Growth: 'Turn what works into a repeatable system',
}

export function VisualFlowMapSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / System Progression
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
          Your Culture-First GTM System
        </h2>
      </div>

      <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-3 lg:flex-row lg:items-stretch lg:justify-center lg:gap-2">
        {MODULES.map((module, index) => (
          <div key={module.number} className="contents">
            <div
              className="flex w-full max-w-xs flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center lg:max-w-none lg:flex-1"
              style={{
                boxShadow: `inset 0 2px 0 0 color-mix(in oklch, ${module.accent} 70%, transparent)`,
              }}
            >
              <span
                className="font-mono text-xs font-bold tracking-widest uppercase"
                style={{ color: module.accent }}
              >
                {index + 1}. {module.name.toUpperCase()}
              </span>
              <p className="text-sm leading-snug text-pretty text-zinc-300">
                {STEP_WHY[module.name]}
              </p>
            </div>

            {index < MODULES.length - 1 && (
              <>
                <ArrowDown
                  className="size-5 shrink-0 text-zinc-600 lg:hidden"
                  aria-hidden="true"
                />
                <ArrowRight
                  className="hidden size-5 shrink-0 self-center text-zinc-600 lg:block"
                  aria-hidden="true"
                />
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center">
        <ArrowDown className="size-5 text-zinc-600" aria-hidden="true" />
        <div className="mt-4 rounded-full border border-accent/30 bg-accent/10 px-6 py-3">
          <span className="font-mono text-xs font-bold tracking-widest text-accent uppercase">
            Your 90-Day GTM Strategy
          </span>
        </div>
        <p className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-pretty text-zinc-400">
          Everything ladders up to your personalized 90-day GTM strategy.
        </p>
      </div>
    </section>
  )
}
