"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, DollarSign, Target } from "lucide-react"

const caseStudies = [
  {
    company: "SaaS Startup",
    industry: "B2B Software",
    metric: "+320 qualified leads",
    timeframe: "in 6 weeks",
    description: "Automated LinkedIn and email outreach targeting CTOs at mid-market companies",
    icon: Target,
    stats: [
      { label: "Open Rate", value: "58%" },
      { label: "Response Rate", value: "12%" },
      { label: "Meetings Booked", value: "47" }
    ]
  },
  {
    company: "Marketing Agency",
    industry: "Digital Marketing",
    metric: "+150% pipeline growth",
    timeframe: "in 90 days",
    description: "Custom data scraping and multi-channel outreach for e-commerce brands",
    icon: TrendingUp,
    stats: [
      { label: "Leads Generated", value: "850+" },
      { label: "Conversion Rate", value: "8.5%" },
      { label: "ROI", value: "340%" }
    ]
  },
  {
    company: "Consulting Firm",
    industry: "Professional Services",
    metric: "+$2.4M in pipeline",
    timeframe: "in 4 months",
    description: "AI-powered lead scoring and automated nurture sequences",
    icon: DollarSign,
    stats: [
      { label: "Opportunities Created", value: "180" },
      { label: "Average Deal Size", value: "$45K" },
      { label: "Close Rate", value: "28%" }
    ]
  }
]

export function CaseStudyCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real metrics from clients who scaled their pipeline with DSK BRAND
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading">{study.company}</h3>
                    <p className="text-sm text-gray-600">{study.industry}</p>
                  </div>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">{study.metric}</div>
                  <div className="text-gray-600">{study.timeframe}</div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="font-bold text-lg">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

