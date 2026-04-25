import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ConceptSection } from "@/components/concept-section"
import { BrandSection } from "@/components/brand-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ComparisonSection } from "@/components/comparison-section"
import { AiVisionSection } from "@/components/ai-vision-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#080a0e] text-white">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <BrandSection />
      <SolutionsSection />
      <ComparisonSection />
      <AiVisionSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
