import { Play } from 'lucide-react'

export function WhyCultureVideoSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / The Missing Layer in GTM
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
          Why Culture Shapes Customer Choice
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-pretty text-zinc-300">
          Reaching more people isn&apos;t your problem. Being more relevant
          to the right people is. Understanding culture is how you get
          there.
        </p>
      </div>

      <button
        type="button"
        aria-label="Play: Why I Built the Culture-First GTM System"
        className="group relative mx-auto mt-12 flex aspect-video w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '2.5rem 2.5rem',
          }}
        />
        <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-105">
          <Play className="size-6 fill-current" aria-hidden="true" />
        </span>
        <span className="absolute bottom-4 left-4 font-mono text-xs font-semibold tracking-widest text-white/70 uppercase">
          Why I Built the Culture-First GTM System
        </span>
        <span className="absolute right-4 bottom-4 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-white/70">
          0:60
        </span>
      </button>
    </section>
  )
}
