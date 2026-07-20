import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { CultureDefinitionSection } from '@/components/culture-definition-section'
import { IntroducingSystemSection } from '@/components/introducing-system-section'
import { OperatingSystemSection } from '@/components/operating-system-section'
import { BuildAssetsSection } from '@/components/build-assets-section'
import { BlueprintSection } from '@/components/blueprint-section'
import { InsideBlueprintSection } from '@/components/inside-blueprint-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { ScorecardSection } from '@/components/scorecard-section'
import { GrowthLoopSection } from '@/components/growth-loop-section'
import { InstructorSection } from '@/components/instructor-section'
import { TrustMetricsSection } from '@/components/trust-metrics-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { AudienceFitSection } from '@/components/audience-fit-section'
import { EverythingIncludedSection } from '@/components/everything-included-section'
import { PricingSection } from '@/components/pricing-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta, SiteFooter } from '@/components/final-cta'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ProblemSection />
        <PhilosophySection />
        <CultureDefinitionSection />
        <IntroducingSystemSection />
        <OperatingSystemSection />
        <BuildAssetsSection />
        <BlueprintSection />
        <InsideBlueprintSection />
        <RoadmapSection />
        <ScorecardSection />
        <GrowthLoopSection />
        <InstructorSection />
        <TrustMetricsSection />
        <TestimonialsSection />
        <AudienceFitSection />
        <EverythingIncludedSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
