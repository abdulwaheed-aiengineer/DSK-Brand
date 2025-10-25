import { Hero } from "@/components/home/Hero"
import { ServiceGrid } from "@/components/home/ServiceGrid"
import { ProcessTimeline } from "@/components/home/ProcessTimeline"
import { CaseStudyCarousel } from "@/components/home/CaseStudyCarousel"
import { Testimonials } from "@/components/home/Testimonials"
import { FAQSection } from "@/components/home/FAQSection"
import { FinalCTA } from "@/components/home/FinalCTA"
import { faqSchema } from "@/lib/schema"
import Script from "next/script"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ServiceGrid />
      <ProcessTimeline />
      <CaseStudyCarousel />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </div>
  )
}

