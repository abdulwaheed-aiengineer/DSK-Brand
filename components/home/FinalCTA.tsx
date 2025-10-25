"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Let&apos;s Engineer Your Next 100 Leads
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Stop chasing prospects manually. Start converting on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/dskbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all font-semibold text-lg flex items-center gap-2 group shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg transition-all font-semibold text-lg"
            >
              Get Started Today
            </Link>
          </div>

          <p className="mt-8 text-blue-100 text-sm">
            Free consultation • No commitment • Custom strategy in 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}

