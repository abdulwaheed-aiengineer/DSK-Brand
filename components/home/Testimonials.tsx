"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "DSK BRAND completely transformed our lead generation process. We went from manually prospecting to having a steady stream of qualified leads on autopilot. The ROI has been incredible.",
    author: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechFlow Solutions"
  },
  {
    quote: "The team's expertise in data scraping and automation saved us countless hours. Their custom solutions integrated seamlessly with our CRM, and we're now closing deals faster than ever.",
    author: "Michael Chen",
    role: "Founder & CEO",
    company: "Growth Marketing Pro"
  },
  {
    quote: "What impressed me most was their strategic approach. They didn't just set up campaigns—they analyzed our ICP, refined our messaging, and continuously optimized for better results.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Pinnacle Consulting"
  }
]

export function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies scaling their growth with DSK BRAND
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold font-heading">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

