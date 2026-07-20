import { ChevronDown, RefreshCw } from 'lucide-react'

type Zone = {
  id: string
  name: string
  color: string
  inputs: string[]
  engine: string
  decision: string
  connector: string
}

const ZONES: Zone[] = [
  {
    id: 'A',
    name: 'Customer Culture',
    color: 'var(--accent)',
    inputs: [
      'Beliefs',
      'Values',
      'Behaviors',
      'Symbols',
      'Language',
      'Conventions',
    ],
    engine: 'Customer Culture Map',
    decision: 'How does this community see the world?',
    connector: 'Cultural patterns identified',
  },
  {
    id: 'B',
    name: 'Cultural Alignment',
    color: '#2563eb',
    inputs: [
      'Customer Conviction — what customers already believe',
      'Founder Conviction — what your company genuinely stands for',
    ],
    engine: 'Cultural Insight Framework',
    decision: 'Where does our point of view naturally align with theirs?',
    connector: 'Shared meaning established',
  },
  {
    id: 'C',
    name: 'Message System',
    color: '#16a34a',
    inputs: [
      'Positioning',
      'Value proposition',
      'Core message',
      'Narrative',
      'Proof',
      'Customer language',
      'Touchpoint messaging',
    ],
    engine: 'Messaging Toolkit',
    decision: 'What must customers hear to recognize themselves in us?',
    connector: 'Recognition and trust created',
  },
  {
    id: 'D',
    name: 'Market Entry',
    color: '#7c3aed',
    inputs: [
      'Priority customer',
      'Cultural tension',
      'Urgent problem',
      'Early adopter signals',
      'Competitive alternatives',
      'First channel',
      'Validation plan',
    ],
    engine: 'Beachhead Strategy',
    decision: 'Which community is most likely to choose, adopt, and champion us first?',
    connector: 'Focused market entry',
  },
  {
    id: 'E',
    name: 'Growth System',
    color: '#ea580c',
    inputs: [
      'Acquisition',
      'Conversion',
      'Retention',
      'Referral',
      'Experiments',
      'Metrics',
      'Review cadence',
    ],
    engine: 'Growth Playbook',
    decision: 'How will we turn customer preference into repeatable growth?',
    connector: 'Learning compounds',
  },
]

const ANNOTATIONS = [
  { tag: 'NOTE 01', text: 'Culture is discovered, not manufactured.' },
  {
    tag: 'CHECKPOINT A',
    text: 'Validate customer beliefs before finalizing your message.',
  },
  {
    tag: 'NOTE 02',
    text: "Do not define positioning before understanding what customers already value.",
  },
  {
    tag: 'CHECKPOINT B',
    text: 'Test recognition before scaling distribution.',
  },
  {
    tag: 'WARNING',
    text: 'Skipping customer discovery weakens every downstream decision.',
  },
]

const BLANK_FIELDS = [
  'OUR CORE CONVICTION',
  'THE CUSTOMER BELIEF WE ALIGN WITH',
  'THE CULTURAL TENSION WE ADDRESS',
  'OUR BEACHHEAD COMMUNITY',
]

const BENEFITS = [
  {
    title: 'See the whole system',
    detail: 'Understand how every GTM decision connects.',
  },
  {
    title: 'Know what to do next',
    detail: 'Turn strategy into a clear sequence of actions.',
  },
  {
    title: 'Keep improving',
    detail: 'Use customer learning to update the system every quarter.',
  },
]

function ZonePanel({ zone, index }: { zone: Zone; index: number }) {
  return (
    <div>
      <div
        className="relative overflow-hidden rounded-xl border bg-white/[0.02] p-5 sm:p-6"
        style={{
          borderColor: `color-mix(in oklch, ${zone.color} 30%, transparent)`,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-2 rounded-full"
            style={{ backgroundColor: zone.color }}
          />
          <span
            className="font-mono text-[10px] font-bold tracking-widest uppercase"
            style={{ color: zone.color }}
          >
            Section {zone.id} / {zone.name}
          </span>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.1fr_1fr] md:items-start">
          <div>
            <p className="mb-1.5 font-mono text-[9px] tracking-widest text-white/30 uppercase">
              Inputs
            </p>
            <div className="flex flex-wrap gap-1.5">
              {zone.inputs.map((input) => (
                <span
                  key={input}
                  className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] leading-relaxed text-white/60"
                >
                  {input}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg border-2 px-4 py-3 text-center"
            style={{
              borderColor: `color-mix(in oklch, ${zone.color} 50%, transparent)`,
              backgroundColor: `color-mix(in oklch, ${zone.color} 8%, transparent)`,
            }}
          >
            <p className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
              Central Engine
            </p>
            <p className="mt-1 text-sm leading-snug font-bold text-white">
              {zone.engine}
            </p>
          </div>

          <div>
            <p className="mb-1.5 font-mono text-[9px] tracking-widest text-white/30 uppercase">
              Decision Produced
            </p>
            <p className="text-xs leading-relaxed text-white/70 italic">
              &ldquo;{zone.decision}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 py-3 pl-2">
        <ChevronDown
          className="size-3 shrink-0"
          style={{ color: zone.color }}
          aria-hidden="true"
        />
        <span className="font-mono text-[9px] text-white/40">
          [{zone.connector}] &rarr; Section {ZONES[index + 1]?.id ?? 'F'}
        </span>
      </div>
    </div>
  )
}

function AnnotationStrip({
  annotation,
}: {
  annotation: { tag: string; text: string }
}) {
  return (
    <div className="mb-3 flex items-start gap-2 border-l-2 border-dashed border-white/15 py-1 pl-3">
      <span className="font-mono text-[9px] font-bold tracking-widest text-accent/70 uppercase">
        {annotation.tag}
      </span>
      <span className="font-mono text-[9px] text-white/35">
        {annotation.text}
      </span>
    </div>
  )
}

function BlankFieldsRow() {
  return (
    <div className="mb-6 grid gap-2 sm:grid-cols-2">
      {BLANK_FIELDS.map((field) => (
        <div
          key={field}
          className="flex items-center gap-2 rounded-md border border-dashed border-white/15 px-3 py-2"
        >
          <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
            [{field}]
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      ))}
    </div>
  )
}

function LoopTerminal() {
  const steps = [
    '90-Day GTM Execution Plan',
    'Quarterly GTM Scorecard',
    'New Cultural Insight',
  ]
  return (
    <div className="rounded-xl border border-dashed border-accent/40 bg-accent/[0.04] p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <RefreshCw className="size-3.5 text-accent" aria-hidden="true" />
        <span className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase">
          Section F / Operating Rhythm
        </span>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs leading-none font-semibold whitespace-nowrap text-white">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronDown
                className="size-3 text-white/30 sm:rotate-[-90deg]"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[10px] text-accent/80">
        &#8635; Loops back directly to Section A &mdash; Customer Culture Map
      </p>
    </div>
  )
}

export function BlueprintSection() {
  return (
    <section className="border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-center text-white lg:px-12">
      <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
        Everything builds to this
      </span>
      <h2 className="mx-auto mt-6 max-w-xl text-3xl leading-snug font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        Your Culture-First GTM Blueprint
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-400 text-pretty">
        The five strategic assets do not live in separate documents. They
        connect to form one operating system that shows you what to decide,
        what to validate, and what to do next.
      </p>

      <div className="mx-auto mt-14 max-w-7xl text-left">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#050505] p-6 shadow-2xl sm:p-10 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {[
            'top-4 left-4 border-t-2 border-l-2',
            'top-4 right-4 border-t-2 border-r-2',
            'bottom-4 left-4 border-b-2 border-l-2',
            'bottom-4 right-4 border-b-2 border-r-2',
          ].map((corner) => (
            <span
              key={corner}
              aria-hidden="true"
              className={`absolute size-6 ${corner}`}
              style={{ borderColor: 'var(--accent)' }}
            />
          ))}

          {/* Top reference axis */}
          <div className="relative mb-6 hidden justify-between px-1 font-mono text-[10px] tracking-[0.3em] text-white/25 sm:flex">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
              <span key={letter}>{letter}</span>
            ))}
          </div>

          <div className="relative flex gap-4 sm:gap-6">
            {/* Left reference axis */}
            <div className="hidden flex-col justify-between py-2 font-mono text-[10px] text-white/25 sm:flex">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-6">
                <span className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase">
                  Culture-First GTM Blueprint
                </span>
                <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
                  Living Operating System
                </span>
              </div>

              <ZonePanel zone={ZONES[0]} index={0} />
              <AnnotationStrip annotation={ANNOTATIONS[0]} />

              <ZonePanel zone={ZONES[1]} index={1} />
              <BlankFieldsRow />
              <AnnotationStrip annotation={ANNOTATIONS[1]} />

              <ZonePanel zone={ZONES[2]} index={2} />
              <AnnotationStrip annotation={ANNOTATIONS[2]} />
              <AnnotationStrip annotation={ANNOTATIONS[3]} />

              <ZonePanel zone={ZONES[3]} index={3} />
              <AnnotationStrip annotation={ANNOTATIONS[4]} />

              <ZonePanel zone={ZONES[4]} index={4} />

              <div className="mt-2 mb-8">
                <LoopTerminal />
              </div>

              <p className="border-t border-white/10 pt-4 text-center font-mono text-[9px] tracking-widest text-white/25 uppercase">
                System Rule: When the customer changes, revisit the
                Blueprint.
              </p>
            </div>
          </div>

          {/* Corner engineering title block */}
          <div className="relative mt-8 ml-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/15">
            <table className="w-full font-mono text-[10px] text-white/60">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="bg-white/[0.03] px-3 py-2 tracking-widest text-white/35 uppercase">
                    Project
                  </td>
                  <td className="px-3 py-2 text-white">
                    Culture-First GTM Blueprint
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="bg-white/[0.03] px-3 py-2 tracking-widest text-white/35 uppercase">
                    Founder
                  </td>
                  <td className="px-3 py-2 text-white/30">&mdash;</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="bg-white/[0.03] px-3 py-2 tracking-widest text-white/35 uppercase">
                    Company
                  </td>
                  <td className="px-3 py-2 text-white/30">&mdash;</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="bg-white/[0.03] px-3 py-2 tracking-widest text-white/35 uppercase">
                    Version
                  </td>
                  <td className="px-3 py-2 text-white">1.0</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="bg-white/[0.03] px-3 py-2 tracking-widest text-white/35 uppercase">
                    Date
                  </td>
                  <td className="px-3 py-2 text-white">07.19.2026</td>
                </tr>
                <tr>
                  <td className="bg-white/[0.03] px-3 py-2 tracking-widest text-white/35 uppercase">
                    90-Day Goal
                  </td>
                  <td className="px-3 py-2 text-white/30">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <p className="text-lg leading-relaxed font-semibold text-balance text-white">
          One system. Every critical GTM decision, connected in one place.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
            >
              <p className="text-sm font-bold text-white">{benefit.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
