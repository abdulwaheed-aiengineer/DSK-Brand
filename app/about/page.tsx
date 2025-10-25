import type { Metadata } from "next"
import Link from "next/link"
import { Target, Users, Zap, Award, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - DSK BRAND | Lead Generation Experts",
  description: "Learn about DSK BRAND's mission to help businesses automate their pipelines and scale growth through data-driven lead generation and AI automation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              About DSK BRAND
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              We&apos;re on a mission to make enterprise-level lead generation accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                DSK BRAND was founded by a team of growth hackers, data engineers, and marketing strategists who 
                saw a common problem: businesses were spending countless hours manually prospecting, sending cold 
                emails, and managing outreach campaigns with minimal results.
              </p>
              <p>
                We knew there had to be a better way. By combining our expertise in data scraping, marketing automation, 
                and AI technology, we created a suite of services that automate the entire lead generation process—from 
                finding prospects to booking qualified calls.
              </p>
              <p>
                Today, we help hundreds of businesses generate thousands of qualified leads every month. Our clients 
                range from early-stage startups to established enterprises, all benefiting from our data-driven approach 
                to pipeline growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Results-Driven",
                  description: "We measure success by the qualified leads and revenue we generate for our clients."
                },
                {
                  icon: Users,
                  title: "Client-Focused",
                  description: "Your goals become our goals. We're committed to your long-term success."
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "We stay ahead of the curve, constantly testing new strategies and technologies."
                },
                {
                  icon: Award,
                  title: "Quality",
                  description: "We never compromise on data quality or campaign performance."
                }
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Choose DSK BRAND?
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Proven Track Record",
                  description: "We've generated over 50,000 qualified leads for our clients across dozens of industries."
                },
                {
                  title: "Custom Solutions",
                  description: "No cookie-cutter approaches. Every strategy is tailored to your specific ICP and goals."
                },
                {
                  title: "Transparent Reporting",
                  description: "Real-time dashboards and weekly reports so you always know what's working."
                },
                {
                  title: "Full Compliance",
                  description: "We follow all GDPR, CAN-SPAM, and data protection regulations to protect your reputation."
                },
                {
                  title: "Dedicated Support",
                  description: "Your success manager is available whenever you need guidance or optimization."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Let&apos;s discuss how we can help you scale your lead generation
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all font-semibold text-lg group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

