export function PhilosophySection() {
  return (
    <section className="border-t border-white/10 bg-[#0A0A0B] px-6 py-28 text-center lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col leading-loose tracking-tight">
        <span className="text-balance text-3xl font-semibold text-zinc-400 sm:text-4xl md:text-5xl">
          Culture influences what people value.
        </span>
        <span className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          What people value influences what they choose.
        </span>
        <span
          className="text-balance text-3xl font-bold text-accent sm:text-4xl md:text-5xl"
          style={{
            textShadow:
              '0 0 40px color-mix(in oklch, var(--accent) 65%, transparent)',
          }}
        >
          What people choose repeatedly creates growth.
        </span>
      </div>
    </section>
  )
}
