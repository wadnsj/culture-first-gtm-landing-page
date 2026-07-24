import { Check } from 'lucide-react'

const OUTCOMES = [
  'Exactly where to focus first: your beachhead market and positioning',
  'What to test before you scale: messaging, offer, and channels',
  'A 90-day execution plan you can follow step by step',
  'A repeatable system to revisit every quarter as you grow',
]

export function WhatYoullLeaveWithSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / What You&apos;ll Leave With
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold text-balance text-zinc-900 md:text-5xl">
          Your Personalized 90-Day Go-to-Market Blueprint
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-pretty text-zinc-600">
          Not a stack of frameworks to sort through: one clear plan telling
          you where to focus, what to test, and how to scale.
        </p>

        <ul className="mx-auto mt-10 flex max-w-lg flex-col gap-4 text-left">
          {OUTCOMES.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3">
              <Check
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span className="text-base leading-relaxed text-pretty text-zinc-700">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
