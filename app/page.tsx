import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { GlobalCoverageSection } from "@/components/global-coverage-section"
import { NetworkPerformanceSection } from "@/components/network-performance-section"
import { PlansSection } from "@/components/plans-section"
import { ComparePlansSection } from "@/components/compare-plans-section"
import { ExpertsSection } from "@/components/experts-section"
import { InnovationSection } from "@/components/innovation-section"
import { CustomerSatisfactionSection } from "@/components/customer-satisfaction-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <GlobalCoverageSection />
        <NetworkPerformanceSection />
        <PlansSection />
        <ComparePlansSection />
        <ExpertsSection />
        <InnovationSection />
        <CustomerSatisfactionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
