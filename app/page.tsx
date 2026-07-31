import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { FiveLawsSection } from '@/components/five-laws-section'
import { WhatYoullLeaveWithSection } from '@/components/what-youll-leave-with-section'
import { BuildAssetsSection } from '@/components/build-assets-section'
import { InstructorSection } from '@/components/instructor-section'
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
        <FiveLawsSection />
        <WhatYoullLeaveWithSection />
        <BuildAssetsSection />
        <InstructorSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
