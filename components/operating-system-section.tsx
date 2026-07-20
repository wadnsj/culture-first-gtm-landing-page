import { ChevronDown } from 'lucide-react'

import { MODULES } from '@/lib/modules'

const TAGLINES: Record<string, string> = {
  Culture: 'How people see the world.',
  Meaning: 'Why your product matters.',
  Connection: 'How customers recognize themselves.',
  Differentiation: 'Why they choose you.',
  Growth: 'How preference compounds.',
}

export function OperatingSystemSection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-[#F9F9FB] px-6 py-24 text-zinc-900 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          How customers choose
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
          One connected system, five business assets.
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-zinc-600 text-pretty">
          Not five modules to work through. Five business assets inside one
          connected GTM operating system &mdash; each one building on the
          last, in the order customers actually decide.
        </p>

        <ol className="mx-auto mt-16 flex flex-col items-center">
          {MODULES.map((module, i) => (
            <li key={module.number} className="flex flex-col items-center">
              <div
                className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-6 py-3 shadow-sm"
                style={{
                  boxShadow: `0 0 0 1px color-mix(in oklch, ${module.accent} 35%, transparent)`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full"
                  style={{ backgroundColor: module.accent }}
                />
                <span className="font-mono text-sm font-bold tracking-widest text-zinc-900 uppercase">
                  {module.name}
                </span>
              </div>
              <span className="mt-2 text-xs text-zinc-500">
                {TAGLINES[module.name]}
              </span>
              {i < MODULES.length - 1 && (
                <ChevronDown
                  className="my-2 size-4 text-zinc-300"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
