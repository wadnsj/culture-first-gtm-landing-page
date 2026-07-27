import { ChevronDown } from 'lucide-react'

import { CATEGORY_COLORS, MODULES, type Module } from '@/lib/modules'

function CultureCanvas({ module }: { module: Module }) {
  const cells = [
    'Cultural Beliefs',
    'Shared Values',
    'Identity Signals',
    'Buying Triggers',
  ]
  return (
    <div
      aria-hidden="true"
      className="relative h-48 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 sm:h-56"
    >
      <div className="grid h-full grid-cols-2 gap-2.5">
        {cells.map((cell) => (
          <div
            key={cell}
            className="flex items-center justify-center rounded-lg border border-dashed p-2 text-center"
            style={{
              borderColor: `color-mix(in oklch, ${module.accent} 35%, transparent)`,
              backgroundColor: `color-mix(in oklch, ${module.accent} 6%, white)`,
            }}
          >
            <span className="text-[11px] leading-tight font-semibold text-zinc-700">
              {cell}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function InsightFramework({ module }: { module: Module }) {
  const steps = ['Observation', 'Pattern', 'Insight', 'Meaning', 'Business Opportunity']
  return (
    <div
      aria-hidden="true"
      className="relative rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-5"
    >
      <div className="flex flex-col items-center">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <span
              className="rounded-full border bg-white px-3 py-1 text-[11px] leading-none font-semibold whitespace-nowrap text-zinc-700"
              style={{
                borderColor:
                  i === steps.length - 1
                    ? module.accent
                    : 'color-mix(in oklch, #000 12%, transparent)',
                color: i === steps.length - 1 ? module.accent : undefined,
              }}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronDown
                className="my-1 size-3 text-zinc-400"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagingDashboard({ module }: { module: Module }) {
  const tabs = ['Value Prop', 'Homepage Hero', 'Brand Narrative', 'Sales Messaging']
  return (
    <div
      aria-hidden="true"
      className="relative h-48 overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:h-56"
    >
      <div className="flex flex-wrap border-b border-zinc-200">
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className="border-b-2 px-2.5 py-2 text-[9px] leading-none font-semibold whitespace-nowrap sm:text-[10px]"
            style={{
              borderColor: i === 0 ? module.accent : 'transparent',
              color: i === 0 ? '#18181b' : '#a1a1aa',
            }}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2.5 p-4">
        <span className="h-2 w-3/4 rounded-full bg-zinc-200" />
        <span className="h-2 w-full rounded-full bg-zinc-200" />
        <span className="h-2 w-2/3 rounded-full bg-zinc-200" />
        <span
          className="mt-1 h-2 w-1/3 rounded-full"
          style={{
            backgroundColor: `color-mix(in oklch, ${module.accent} 60%, transparent)`,
          }}
        />
      </div>
    </div>
  )
}

function BeachheadTarget({ module }: { module: Module }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-48 items-center gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:h-56"
    >
      <div className="relative flex size-32 shrink-0 items-center justify-center sm:size-36">
        <div
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: 'color-mix(in oklch, #000 10%, transparent)',
            backgroundColor: `color-mix(in oklch, ${module.accent} 5%, transparent)`,
          }}
        />
        <div
          className="absolute inset-6 rounded-full border"
          style={{
            borderColor: 'color-mix(in oklch, #000 14%, transparent)',
            backgroundColor: `color-mix(in oklch, ${module.accent} 12%, transparent)`,
          }}
        />
        <div
          className="absolute inset-12 rounded-full"
          style={{ backgroundColor: module.accent }}
        />
      </div>
      <div className="flex flex-col gap-2.5 text-[11px] leading-none font-semibold text-zinc-600">
        <span className="flex items-center gap-1.5">
          <span
            className="size-2 shrink-0 rounded-full"
            style={{ backgroundColor: module.accent }}
          />
          Ideal Beachhead Market
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 shrink-0 rounded-full border border-zinc-400" />
          Adjacent Markets
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 shrink-0 rounded-full border border-zinc-300" />
          Future Expansion
        </span>
      </div>
    </div>
  )
}

function GrowthLoop({ module }: { module: Module }) {
  const steps = [
    'Culture',
    'Insight',
    'Message',
    'Preference',
    'Growth',
    'Learn',
  ]
  const radius = 34

  return (
    <div
      aria-hidden="true"
      className="relative h-48 overflow-hidden rounded-2xl bg-[#0a0a0a] sm:h-56"
    >
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: module.accent }}
      />
      <span className="absolute top-3 left-4 font-mono text-[9px] font-semibold tracking-widest text-white/40 uppercase">
        Growth Loop: Live System
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative size-32 sm:size-36">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
          {steps.map((step, i) => {
            const angle = (i / steps.length) * 360 - 90
            const rad = (angle * Math.PI) / 180
            const left = 50 + radius * Math.cos(rad)
            const top = 50 + radius * Math.sin(rad)
            return (
              <div
                key={step}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: module.accent }}
                />
                <span className="mt-1 text-[7px] font-semibold tracking-wide whitespace-nowrap text-white/70 uppercase">
                  {step}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const VISUAL_RENDERERS = [
  CultureCanvas,
  InsightFramework,
  MessagingDashboard,
  BeachheadTarget,
  GrowthLoop,
]

function AssetRow({ module, index }: { module: Module; index: number }) {
  const Visual = VISUAL_RENDERERS[index]
  const reversed = index % 2 === 1
  const isFeatured = index === 0

  return (
    <div
      className={`grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      } ${
        isFeatured
          ? 'rounded-3xl border border-accent/25 bg-white px-6 shadow-[0_0_20px_rgba(234,179,8,0.08)] md:px-10'
          : 'border-b border-zinc-200 last:border-0'
      }`}
    >
      <div className="flex flex-col gap-3">
        <span
          className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] leading-none font-semibold whitespace-nowrap text-white"
          style={{
            backgroundColor: `color-mix(in oklch, ${module.accent} 88%, black)`,
          }}
        >
          Asset #{index + 1} for your Blueprint: {module.assetTitle}
        </span>
        <Visual module={module} />
      </div>

      <div>
        <span
          className="font-mono text-xs font-semibold tracking-widest uppercase"
          style={{ color: module.accent }}
        >
          Module {index + 1}: {module.name.toUpperCase()}
        </span>
        <p className="mt-3 text-sm leading-snug font-medium text-pretty text-zinc-500 italic">
          &ldquo;{module.strategicQuestion}&rdquo;
        </p>
        <h3 className="mt-3 text-2xl leading-snug font-bold tracking-tight text-balance text-zinc-900 sm:text-3xl">
          Build Your {module.assetTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-pretty text-zinc-600">
          {module.handbookPurpose}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-white/50 uppercase">
            You leave with
          </span>
          <span className="text-sm font-semibold text-white">
            {module.assetTitle}
          </span>
        </div>

        {module.assetIncludes && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {module.assetIncludes.map((item) => (
              <li
                key={item.name}
                className="rounded-full border px-2.5 py-1 text-[11px] leading-none font-semibold"
                style={{
                  backgroundColor: `color-mix(in oklch, ${CATEGORY_COLORS[item.category]} 14%, white)`,
                  borderColor: `color-mix(in oklch, ${CATEGORY_COLORS[item.category]} 30%, transparent)`,
                  color: CATEGORY_COLORS[item.category],
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function BuildAssetsSection() {
  return (
    <section
      id="system"
      className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-5 py-2">
          <span className="size-1.5 shrink-0 rounded-full bg-accent" />
          <span className="font-mono text-xs font-bold tracking-widest text-accent uppercase">
            5 Modules. 5 Tangible Assets. 1 Complete GTM Blueprint.
          </span>
        </div>

        <span className="mt-10 block font-mono text-xs tracking-widest text-accent uppercase">
          / What You&apos;ll Build
        </span>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.02] font-bold tracking-tight text-balance text-zinc-900 md:text-5xl">
          Build every piece of your personalized GTM strategy, one step at
          a time.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-pretty text-zinc-600">
          Each module builds a different part of your strategy. By the end
          of the course, you&apos;ll have a complete go-to-market blueprint
          you can use to launch, grow, or evolve your business with
          confidence.
        </p>

        <div className="mt-8">
          {MODULES.map((module, index) => (
            <AssetRow key={module.number} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
