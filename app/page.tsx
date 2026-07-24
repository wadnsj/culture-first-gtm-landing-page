import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { BigIdeaSection } from '@/components/big-idea-section'
import { WhatYoullLeaveWithSection } from '@/components/what-youll-leave-with-section'
import { WhatsIncludedSection } from '@/components/whats-included-section'
import { CredibilitySection } from '@/components/credibility-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta, SiteFooter } from '@/components/final-cta'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <BigIdeaSection />
        <WhatYoullLeaveWithSection />
        <WhatsIncludedSection />
        <CredibilitySection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
