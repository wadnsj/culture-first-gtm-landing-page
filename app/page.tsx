import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { WhatYoullLeaveWithSection } from '@/components/what-youll-leave-with-section'
import { VisualFlowMapSection } from '@/components/visual-flow-map-section'
import { BuildAssetsSection } from '@/components/build-assets-section'
import { FiveLawsSection } from '@/components/five-laws-section'
import { WhyCultureVideoSection } from '@/components/why-culture-video-section'
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
        <WhatYoullLeaveWithSection />
        <VisualFlowMapSection />
        <BuildAssetsSection />
        <FiveLawsSection />
        <WhyCultureVideoSection />
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
