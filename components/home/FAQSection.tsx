"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What data sources do you use?",
    answer: "We use a combination of premium B2B databases (LinkedIn Sales Navigator, ZoomInfo, Apollo), public web data, and custom scrapers. All data is verified and compliant with GDPR and privacy regulations."
  },
  {
    question: "Which tools and platforms do you work with?",
    answer: "We integrate with all major CRMs (HubSpot, Salesforce, Pipedrive), email platforms (Mailchimp, SendGrid, Instantly), LinkedIn automation tools, and can build custom integrations for your specific tech stack."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing varies based on your needs and scale. Most clients invest between $2,000-$10,000 per month depending on the services and volume. We offer custom packages and flexible contracts. Book a free consultation to get a personalized quote."
  },
  {
    question: "How long does it take to see results?",
    answer: "Initial setup takes 1-2 weeks. You'll typically see first results (leads, responses) within 2-3 weeks of launch. Full pipeline impact and ROI becomes clear after 60-90 days of optimization."
  },
  {
    question: "Is the outreach compliant and safe?",
    answer: "Yes, absolutely. We follow all compliance regulations (GDPR, CAN-SPAM, CCPA), use verified data sources, respect opt-outs, and implement best practices to protect your domain reputation and LinkedIn account."
  },
  {
    question: "Do you provide the leads or just the tools?",
    answer: "Both! We can provide fully-researched, verified lead lists ready for outreach, or we can build and manage the entire automated system for you. Choose the level of service that fits your team's capacity."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with DSK BRAND
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold font-heading text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

