export function IntroducingSystemSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] px-6 py-24 text-center text-white lg:px-12">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute top-10 right-10 h-40 w-40 text-white/10"
      />
      <div className="relative mx-auto max-w-2xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          Introducing the solution
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
          Introducing the Culture-First GTM System
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-zinc-400 text-pretty">
          A step-by-step operating system for winning the right customers.
          Instead of relying on disconnected marketing tactics, you&apos;ll
          build a complete strategic system that helps you understand why
          customers choose and make better go-to-market decisions with
          confidence.
        </p>
      </div>
    </section>
  )
}
