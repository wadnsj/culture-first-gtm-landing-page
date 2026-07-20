type Node = {
  id: string
  name: string
  color: string
  body: string
}

const NODES: Node[] = [
  {
    id: '01',
    name: 'Culture',
    color: '#EAB308',
    body: 'Understand the beliefs, values, and behaviors that shape how your customers think and choose.',
  },
  {
    id: '02',
    name: 'Insight',
    color: '#3B82F6',
    body: 'Turn cultural understanding into actionable insights about what your customers value and why.',
  },
  {
    id: '03',
    name: 'Message',
    color: '#22C55E',
    body: "Craft messages that reflect your customers' world and speak to what matters most to them.",
  },
  {
    id: '04',
    name: 'Preference',
    color: '#A855F7',
    body: 'Build trust and relevance so your brand becomes the preferred choice.',
  },
  {
    id: '05',
    name: 'Growth',
    color: '#EF4444',
    body: 'Attract more of the right customers, increase retention, and drive sustainable business growth.',
  },
  {
    id: '06',
    name: 'Learn',
    color: '#F97316',
    body: "Measure results, learn what's working, and continuously refine your strategy.",
  },
]

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    left: 50 + radius * Math.cos(rad),
    top: 50 + radius * Math.sin(rad),
  }
}

function CircularDiagram() {
  const nodeRadius = 40
  const arrowRadius = 40

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="absolute inset-[10%] rounded-full border border-dashed border-white/15" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {NODES.map((_, i) => {
          const midAngle =
            (i / NODES.length) * 360 - 90 + 360 / NODES.length / 2
          const pos = polar(midAngle, arrowRadius)
          const tangent = midAngle + 90
          const pointsTo = NODES[(i + 1) % NODES.length]
          return (
            <polygon
              key={i}
              points="-2.4,2.4 0,-3.2 2.4,2.4"
              fill={pointsTo.color}
              transform={`translate(${pos.left}, ${pos.top}) rotate(${tangent})`}
            />
          )
        })}
      </svg>

      {NODES.map((node, i) => {
        const angle = (i / NODES.length) * 360 - 90
        const pos = polar(angle, nodeRadius)
        return (
          <div
            key={node.id}
            className="absolute flex flex-col items-center"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              className="flex size-16 flex-col items-center justify-center gap-1 rounded-full border-2 bg-[#0a0a0a] p-2 text-center shadow-lg sm:size-[4.5rem]"
              style={{ borderColor: node.color }}
            >
              <span
                className="font-mono text-xs font-bold"
                style={{ color: node.color }}
              >
                {node.id}
              </span>
              <span
                className="font-mono text-[8px] font-bold tracking-widest uppercase sm:text-[9px]"
                style={{ color: node.color }}
              >
                {node.name}
              </span>
            </span>
          </div>
        )
      })}

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <span
          className="flex size-24 flex-col items-center justify-center gap-1 rounded-full sm:size-28"
          style={{
            boxShadow:
              '0 0 0 1px color-mix(in oklch, var(--accent) 55%, transparent), 0 0 60px -6px var(--accent)',
            backgroundColor: '#0a0a0a',
          }}
        >
          <span className="px-2 text-[11px] leading-tight font-bold text-balance text-white sm:text-xs">
            Culture-First Growth Loop
          </span>
          <span
            className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase"
            style={{
              textShadow:
                '0 0 20px color-mix(in oklch, var(--accent) 65%, transparent)',
            }}
          >
            Repeat
          </span>
        </span>
      </div>
    </div>
  )
}

function CalloutCard({ node, align }: { node: Node; align: 'left' | 'right' }) {
  return (
    <div
      className={`flex items-start gap-3 ${align === 'right' ? 'flex-row-reverse text-right' : ''}`}
    >
      <span
        aria-hidden="true"
        className="mt-2 h-px w-6 shrink-0"
        style={{ backgroundColor: node.color }}
      />
      <div
        className="flex-1 rounded-xl border bg-white/[0.03] p-4"
        style={{
          borderColor: `color-mix(in oklch, ${node.color} 35%, transparent)`,
        }}
      >
        <span
          className="font-mono text-[10px] font-bold tracking-widest uppercase"
          style={{ color: node.color }}
        >
          {node.id} &middot; {node.name}
        </span>
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
          {node.body}
        </p>
      </div>
    </div>
  )
}

export function GrowthLoopSection() {
  const left = [NODES[0], NODES[2], NODES[4]]
  const right = [NODES[1], NODES[3], NODES[5]]

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          The Culture-First Growth Loop
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
          A system that learns and improves with every cycle.
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-zinc-400 text-pretty">
          Growth isn&apos;t a straight line. It&apos;s a loop you run again
          and again &mdash; each cycle sharpening your culture, your
          insight, and your results.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
        <div className="flex flex-col justify-center gap-6">
          {left.map((node) => (
            <CalloutCard key={node.id} node={node} align="left" />
          ))}
        </div>

        <CircularDiagram />

        <div className="flex flex-col justify-center gap-6">
          {right.map((node) => (
            <CalloutCard key={node.id} node={node} align="right" />
          ))}
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-3xl text-center text-xl font-bold tracking-tight text-accent sm:text-2xl">
        Every quarter, your Blueprint gets smarter.
      </p>
    </section>
  )
}
