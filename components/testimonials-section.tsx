type Testimonial = {
  name: string
  title: string
  initials: string
  quote: string
  highlight: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Quasan L.',
    title: 'Data Analyst, New York Fed',
    initials: 'QL',
    quote:
      'Great take on the profiling vs mapping concepts, as well as demographics vs culture. {h}, now that I think about it. Insightful!',
    highlight: 'Many companies fall into this trap',
  },
  {
    name: 'Dr. June C.',
    title: 'Executive Organizational Advisor',
    initials: 'JC',
    quote:
      "{h} They've mastered logic, but lost emotional connection. Culture is the missing bridge between clarity and resonance—and it's the only thing that turns attention into trust.",
    highlight:
      "Most leaders don't have a growth problem—they have a relevance problem.",
  },
  {
    name: 'Sachin J.',
    title: 'Founder, ONEGTMLAB (Engineering GTM)',
    initials: 'SJ',
    quote: 'Reach is easy to buy. {h}',
    highlight: 'Relevance has to be earned!',
  },
  {
    name: 'Faizan A.',
    title: 'PM, Martech & Adtech',
    initials: 'FA',
    quote:
      "I've seen the same thing when building marketing systems, logic gets people to click, but emotion is what keeps them coming back. {h} That's what compounds over time.",
    highlight:
      "The best automations I've built weren't just optimized for conversion, they were designed to feel human.",
  },
  {
    name: 'Chandler M.',
    title: 'CEO, Bootup Studios',
    initials: 'CM',
    quote: '{h} This is super helpful boss.',
    highlight: 'This is major facts – keep dropping gems bro!',
  },
  {
    name: 'Paul K.',
    title: 'Strategic Marketing Leader, Zillow Alum',
    initials: 'PK',
    quote:
      'What most brands and even most marketers miss: problems. What problems do your customers most care about solving? {h} Layer in demographics and cultural attributes when you evaluate creative.',
    highlight: 'Problems unite and animate. Personify by that first.',
  },
  {
    name: 'Tiana S.',
    title: 'Executive Leadership & Strategy Advisor',
    initials: 'TS',
    quote:
      "It cuts right to the core challenge... the 'Blueprint vs. Soul' dilemma... '{h}' ... 'People don't buy your product. They buy the future version of themselves you make possible.' Brilliant.",
    highlight: "Traction doesn't come from activity. It comes from clarity.",
  },
  {
    name: 'Justin G.',
    title: 'Fractional CMO (GTM & Growth)',
    initials: 'JG',
    quote:
      'Love this framing and the focus on the value rather than the feature. {h} Really love all of your systems thinking content!',
    highlight:
      'This is so key in demonstrating why a user/customer should try a new product!',
  },
  {
    name: 'Marleta R.',
    title: 'Fintech & Financial Services Executive',
    initials: 'MR',
    quote: 'Got my Day 1 email today. I loved it! {h}',
    highlight:
      'Even quoted in a convo over dinner - my friend was talking about their business and finding new customers 😊',
  },
]

function SourceBadge() {
  return (
    <span
      aria-label="Posted on LinkedIn"
      className="flex size-5 shrink-0 items-center justify-center rounded-[4px] bg-zinc-900 text-[10px] font-bold text-white"
    >
      in
    </span>
  )
}

function QuoteText({ quote, highlight }: { quote: string; highlight: string }) {
  const [before, after] = quote.split('{h}')
  return (
    <p className="text-sm leading-relaxed text-zinc-700 text-pretty">
      {before}
      <mark className="rounded bg-yellow-500/10 px-1 font-semibold text-yellow-600">
        {highlight}
      </mark>
      {after}
    </p>
  )
}

export function TestimonialsSection() {
  return (
    <section className="border-t border-zinc-200 bg-[#F9F9FB] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          / Proof of Resonance
        </span>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance text-zinc-900 md:text-5xl">
          Overcoming the skeptic.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600 text-pretty">
          Real feedback from analysts, CMOs, CEOs, and executives who felt
          the shift from tactics to relevance.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-7 shadow-md shadow-zinc-900/[0.03]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-zinc-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <SourceBadge />
              </div>

              <QuoteText
                quote={testimonial.quote}
                highlight={testimonial.highlight}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
