'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const FAQS = [
  {
    question: 'Who is this for?',
    answer:
      'Founders and operators building B2B SaaS, AI, consumer, or service businesses who need customers to understand why their product matters before they choose it.',
  },
  {
    question: 'Does this work for B2B and B2C?',
    answer:
      "Yes. The framework focuses on cultural relevance, which applies whether you're selling to a business buyer or an individual consumer.",
  },
  {
    question: "What if I don't have customers yet?",
    answer:
      "The system works especially well pre-launch, since it helps you define who you're building for and why they'd choose you before you write a line of marketing copy.",
  },
  {
    question: 'How long does it take?',
    answer:
      "You move through it at your own pace. Most founders build all five core assets in four to six weeks working a few hours a week, though you can move faster or slower.",
  },
  {
    question: 'Do I get lifetime access?',
    answer:
      'Yes. One payment gives you lifetime access to every video, template, and framework in the system.',
  },
  {
    question: 'Will I receive future updates?',
    answer:
      'Yes. Every new framework, template, or update added to the system in the future is included at no extra cost.',
  },
  {
    question: 'Can I use AI alongside this framework?',
    answer:
      'Yes. Several of the strategic assets include AI prompts you can use to accelerate your own research, drafting, and messaging work.',
  },
]

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-balance text-zinc-900">
          {question}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-pretty text-zinc-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / Frequently Asked Questions
        </span>
        <h2 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance text-zinc-900 md:text-5xl">
          Questions founders ask before enrolling.
        </h2>

        <div className="mt-12">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
