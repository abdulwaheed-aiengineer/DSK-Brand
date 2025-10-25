"use client"

import Link from "next/link"
import { Database, Target, Linkedin, Mail, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { services } from "@/lib/services-data"

const iconMap = {
  Database: Database,
  Target: Target,
  Linkedin: Linkedin,
  Mail: Mail,
  Zap: Zap,
}

export function ServiceGrid() {
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
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end solutions to automate your lead generation and outreach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

