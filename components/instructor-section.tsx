import { Check, Play } from 'lucide-react'
import Image from 'next/image'

export function InstructorSection() {
  return (
    <section id="proof" className="border-t border-zinc-200 bg-white px-6 py-24 text-zinc-900 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / Why I Built This
        </span>

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <Image
                src="/images/wadnes-castelly.png"
                alt="Portrait of Wadnes Castelly"
                width={480}
                height={600}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <p className="mt-6 font-serif text-3xl text-zinc-800 italic">
              Wadnes Castelly
            </p>
            <p className="mt-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Creator, Culture-First GTM System
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="max-w-xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
              Built on lessons from bringing products to market at TikTok,
              Spotify, Walmart Connect, and HYPEBEAST.
            </h2>

            <button
              type="button"
              aria-label="Play: Why I Built the Culture-First GTM System"
              className="group relative mt-6 flex aspect-video w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl bg-zinc-900"
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

            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-pretty text-zinc-600">
              <p>
                Hi, I&apos;m Wadnes Castelly. Over the last decade,
                I&apos;ve helped launch products and build go-to-market
                strategies across TikTok, Spotify, Walmart, and HYPEBEAST.
              </p>
              <p>
                One question kept coming up: why do customers choose one
                product over another? The Culture-First GTM System is the
                answer I&apos;ve spent nearly a decade building.
              </p>
            </div>

            <blockquote className="mt-8 max-w-xl rounded-2xl border-l-4 border-accent bg-zinc-50 p-6">
              <p className="text-xl leading-snug font-semibold text-balance text-zinc-900">
                &ldquo;Culture isn&apos;t something brands create. It&apos;s
                something they uncover.&rdquo;
              </p>
            </blockquote>

            <div className="mt-6 flex items-center gap-2 text-xs text-pretty text-zinc-500">
              <Check
                className="size-3.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>
                Built on go-to-market experience from TikTok &bull; Spotify
                &bull; Walmart Connect &bull; HYPEBEAST
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
