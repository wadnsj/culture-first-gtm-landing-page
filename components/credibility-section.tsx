import Image from 'next/image'

const METRICS = [
  { label: 'Global Product Launches' },
  { label: 'Millions in Revenue Influenced' },
  { label: 'Frameworks Built' },
]

export function CredibilitySection() {
  return (
    <section id="proof" className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center sm:p-10">
          <Image
            src="/images/wadnes-castelly.png"
            alt="Portrait of Wadnes Castelly"
            width={144}
            height={144}
            className="size-20 shrink-0 rounded-full object-cover object-top"
          />
          <p className="max-w-lg text-xl leading-snug font-semibold text-balance text-zinc-900">
            Built on lessons from bringing products to market at TikTok,
            Spotify, Walmart Connect, and HYPEBEAST.
          </p>

          <div className="mt-2 grid w-full max-w-md grid-cols-1 gap-3 border-t border-zinc-200 pt-6 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl bg-white px-3 py-3 text-center shadow-sm"
              >
                <p className="text-sm leading-snug font-bold text-balance text-zinc-900">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
