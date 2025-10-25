import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Database, Target, Linkedin, Mail, Zap, ArrowRight, Check } from "lucide-react"
import { services, getServiceBySlug } from "@/lib/services-data"

const iconMap = {
  Database: Database,
  Target: Target,
  Linkedin: Linkedin,
  Mail: Mail,
  Zap: Zap,
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: "Service Not Found - DSK BRAND"
    }
  }

  return {
    title: `${service.title} - DSK BRAND`,
    description: service.fullDescription,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
            >
              ← Back to Services
            </Link>

            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-8">
                What We Do
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-heading mb-8">
                Benefits for You
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary rounded-full p-2 flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white border-2 border-primary rounded-xl p-8">
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation to discuss how {service.title.toLowerCase()} can transform your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all font-semibold w-full justify-center group"
                >
                  Get Your Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Explore Other Services
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Combine multiple services for maximum impact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services
                .filter(s => s.slug !== service.slug)
                .slice(0, 4)
                .map((otherService) => {
                  const OtherIcon = iconMap[otherService.icon as keyof typeof iconMap]
                  return (
                    <Link
                      key={otherService.slug}
                      href={`/services/${otherService.slug}`}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group text-left"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                          <OtherIcon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                          {otherService.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {otherService.shortDescription}
                      </p>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

