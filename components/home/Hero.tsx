"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
            Automate Your Pipeline.{" "}
            <span className="text-primary">Scale Your Growth.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            DSK BRAND builds AI-powered lead engines that find, contact, and convert your ideal clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg flex items-center gap-2 group shadow-lg hover:shadow-xl"
            >
              Get My Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://calendly.com/dskbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

