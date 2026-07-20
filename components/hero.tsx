import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import { TiltCard } from '@/components/tilt-card'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-1/4 size-[500px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute top-24 right-0 h-64 w-64 text-white/10"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Your strategy&apos;s missing layer
          </span>
          <h1 className="mt-8 max-w-xl text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="lg:block">Win the right</span>{' '}
            <span className="lg:block">customers with</span>{' '}
            <span className="relative inline-block">
              <span className="relative z-10">culture.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-4 bg-accent/60"
              />
            </span>
          </h1>

          <div className="my-8 max-w-xl border-l-2 border-white/10 py-4 pl-5">
            <p className="text-2xl leading-snug font-bold text-balance text-zinc-400 md:text-3xl">
              Most founders chase more customers.
            </p>
            <p
              className="mt-1 text-2xl leading-snug font-bold text-balance text-accent md:text-3xl"
              style={{
                textShadow:
                  '0 0 40px color-mix(in oklch, var(--accent) 55%, transparent)',
              }}
            >
              The best founders become the obvious choice.
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400">
            Culture shapes what people value, trust, and buy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://buy.stripe.com/aFadR9dRr6zIfpf4kS4Ni04"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent py-3 pr-3 pl-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Get Instant Access
              <span className="flex size-8 items-center justify-center rounded-full bg-black/15 text-accent-foreground">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </a>
            <a
              href="#system"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              See What&apos;s Inside
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:col-span-5">
          <TiltCard maxTilt={7} lift={8} className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-book.png"
                alt="Culture-First GTM System hardcover book, showing the five-stage system: Culture, Meaning, Connection, Differentiation, and Growth"
                width={1024}
                height={1536}
                priority
                className="h-auto w-full"
              />
            </div>
          </TiltCard>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl border-t border-white/10 px-6 pb-16 text-center">
        <p className="pt-8 font-mono text-xs tracking-widest text-zinc-500 uppercase">
          Trusted by teams at TikTok &bull; Spotify &bull; Walmart Connect
          &bull; HYPEBEAST
        </p>
      </div>
    </section>
  )
}
