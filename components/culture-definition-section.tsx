import {
  Activity,
  Heart,
  MessageSquare,
  Scale,
  Shapes,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

type Satellite = {
  label: string
  icon: LucideIcon
  color: string
  angle: number
}

const SATELLITES: Satellite[] = [
  { label: 'Beliefs', icon: Sparkles, color: 'var(--accent)', angle: -90 },
  { label: 'Values', icon: Scale, color: '#3b82f6', angle: -18 },
  { label: 'Behaviors', icon: Activity, color: '#22c55e', angle: 54 },
  { label: 'Symbols', icon: Shapes, color: '#a855f7', angle: 126 },
  { label: 'Language', icon: MessageSquare, color: '#f97316', angle: 198 },
]

const TRACK = [
  { number: '01', label: 'Discovery', description: 'Locate shared conviction.' },
  { number: '02', label: 'Alignment', description: 'Synchronize the core team.' },
  { number: '03', label: 'Trust', description: 'Remove product inertia.' },
  { number: '04', label: 'Choice', description: 'Become the obvious route.' },
]

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    left: 50 + radius * Math.cos(rad),
    top: 50 + radius * Math.sin(rad),
  }
}

function CultureDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {SATELLITES.map((satellite) => {
        const pos = polar(satellite.angle, 38)
        const Icon = satellite.icon
        return (
          <div
            key={satellite.label}
            className="absolute flex flex-col items-center"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              className="flex size-16 items-center justify-center rounded-full border sm:size-20"
              style={{
                borderColor: `color-mix(in oklch, ${satellite.color} 40%, transparent)`,
                backgroundColor: `color-mix(in oklch, ${satellite.color} 10%, transparent)`,
              }}
            >
              <Icon
                className="size-5 sm:size-6"
                style={{ color: satellite.color }}
                aria-hidden="true"
              />
            </span>
            <span className="mt-2 font-mono text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
              {satellite.label}
            </span>
          </div>
        )
      })}

      <div className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 sm:size-28">
        <Heart
          className="size-6 text-red-400 sm:size-7"
          aria-hidden="true"
        />
        <span className="mt-1 font-mono text-[10px] font-bold tracking-widest text-zinc-900 uppercase">
          Culture
        </span>
      </div>
    </div>
  )
}

export function CultureDefinitionSection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-[#F9F9FB] px-6 py-24 text-zinc-900 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          Defining the term
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
          Brands don&apos;t create culture. They uncover it.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-600 text-pretty">
          Culture already exists. It&apos;s the shared system of beliefs,
          values, behaviors, symbols, and language people use to make sense
          of who they are. Your job isn&apos;t to manufacture it &mdash;
          it&apos;s to discover it.
        </p>

        <div className="mt-16">
          <CultureDiagram />
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRACK.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm"
            >
              <span className="font-mono text-xs text-accent">
                {step.number}
              </span>
              <p className="mt-2 text-sm font-bold text-zinc-900">
                {step.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
