export type Law = {
  number: number
  statement: string
  explanation: string
}

export const LAWS: Law[] = [
  {
    number: 1,
    statement: "Features don't make people move. Identity does.",
    explanation:
      'People choose products that reinforce who they are or who they want to become.',
  },
  {
    number: 2,
    statement: "Positioning isn't what you say. It's what people assume.",
    explanation:
      'The market decides what your product means long before they read your messaging.',
  },
  {
    number: 3,
    statement: "More reach doesn't fix confusion. It exposes it.",
    explanation:
      'Distribution amplifies clarity: or confusion. Make your value obvious before scaling attention.',
  },
  {
    number: 4,
    statement: 'If pricing feels hard, your value story is broken.',
    explanation:
      "Customers don't resist paying for value. They resist paying for value they don't fully understand.",
  },
  {
    number: 5,
    statement: "Growth isn't effort. It's a reinforcing loop.",
    explanation:
      'Sustainable growth happens when every customer, interaction, and insight makes the next customer easier to win.',
  },
]

export function FiveLawsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / The Foundation
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
          The Five Culture-First GTM Laws
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-pretty text-zinc-300">
          Every winning go-to-market strategy is built on the same five
          principles.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-pretty text-zinc-400">
          Most GTM frameworks teach tactics. The Culture-First GTM System
          teaches the principles behind why customers choose, trust, and
          buy: so every decision you make is grounded in a repeatable
          system, not guesswork.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl divide-y divide-white/10 border-y border-white/10">
        {LAWS.map((law) => (
          <div
            key={law.number}
            className="flex flex-col gap-3 py-8 sm:flex-row sm:items-start sm:gap-8"
          >
            <span className="shrink-0 font-mono text-sm font-semibold tracking-widest text-accent uppercase sm:w-28">
              Law #{law.number}
            </span>
            <div>
              <p className="text-xl leading-snug font-bold text-balance text-white sm:text-2xl">
                {law.statement}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-pretty text-zinc-400 sm:text-base">
                {law.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-lg text-center text-base leading-relaxed text-pretty text-zinc-300">
        Every module helps you apply one law to your business and build one
        section of your personalized 90-day GTM strategy.
      </p>
    </section>
  )
}
