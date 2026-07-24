import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import { TiltCard } from '@/components/tilt-card'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -bottom-6 right-8 h-48 w-48 text-white/10"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            / Stop Guessing
          </span>
          <h2 className="mt-6 text-5xl leading-[0.98] font-bold tracking-tight text-balance md:text-6xl">
            Start winning <span className="text-zinc-400">the right customers.</span>
          </h2>
          <p className="mt-8 max-w-xl leading-relaxed text-pretty text-zinc-400">
            Build your personalized 90-day go-to-market strategy and know
            exactly where to focus your time, energy, and resources to win
            the right customers.
          </p>
          <div className="mt-10">
            <a
              href="https://buy.stripe.com/aFadR9dRr6zIfpf4kS4Ni04"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent py-3 pr-3 pl-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Get Instant Access
              <span className="font-mono text-xs font-normal text-black/50">
                $350 USD
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-black/15 text-accent-foreground">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <TiltCard maxTilt={7} lift={8} className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-book.png"
                alt="Culture-First GTM System hardcover book, showing the five business assets: Culture, Meaning, Connection, Differentiation, and Growth"
                width={1024}
                height={1536}
                className="h-auto w-full"
              />
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-widest uppercase">
            Culture-First GTM System
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          CULTURE / MEANING / CONNECTION / DIFFERENTIATION / GROWTH
        </p>
      </div>
    </footer>
  )
}
