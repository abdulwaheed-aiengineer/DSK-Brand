import type { Metadata } from "next"
import Link from "next/link"
import { Database, Target, Linkedin, Mail, Zap, ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Services - DSK BRAND | Data Scraping, Lead Gen, LinkedIn, Email, AI Automation",
  description: "Comprehensive digital growth services: Data Scraping, B2B Lead Generation, LinkedIn Outreach, Email Marketing, and AI Automation. Scale your pipeline with proven strategies.",
}

const iconMap = {
  Database: Database,
  Target: Target,
  Linkedin: Linkedin,
  Mail: Mail,
  Zap: Zap,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              End-to-end solutions to automate your lead generation, scale your outreach, and grow your business with AI-powered precision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.slug}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                      {service.title}
                    </h2>

                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full p-1 mt-1">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all font-semibold group"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 aspect-square flex items-center justify-center">
                      <IconComponent className="w-32 h-32 text-primary/30" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Ready to Scale Your Growth?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Let&apos;s build a custom solution that fits your business goals
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all font-semibold text-lg group"
            >
              Get Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

