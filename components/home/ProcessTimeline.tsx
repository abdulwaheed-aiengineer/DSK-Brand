"use client"

import { Search, Settings, Rocket, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "We analyze your ICP, competitors, and market to identify the best data sources and messaging angles."
  },
  {
    icon: Settings,
    title: "Setup",
    description: "Build custom scrapers, sequences, and workflows tailored to your business goals and tech stack."
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy campaigns across email, LinkedIn, and other channels with continuous monitoring and optimization."
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "A/B test messaging, refine targeting, and scale what works to maximize your ROI and pipeline growth."
  }
]

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven four-step process to transform your lead generation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 -z-10 hidden lg:block last:hidden"></div>
                    
                    <h3 className="text-xl font-bold font-heading mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

