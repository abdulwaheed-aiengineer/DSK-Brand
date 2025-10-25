import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - DSK BRAND",
  description: "DSK BRAND terms of service and conditions of use.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using DSK BRAND&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">2. Services Description</h2>
                <p className="leading-relaxed mb-4">
                  DSK BRAND provides lead generation, data scraping, LinkedIn outreach, email marketing, and AI automation services. Our services include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Custom data scraping and extraction</li>
                  <li>B2B lead generation and list building</li>
                  <li>Automated LinkedIn outreach campaigns</li>
                  <li>Email marketing campaign management</li>
                  <li>AI-powered workflow automation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">3. Client Responsibilities</h2>
                <p className="leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information about your business and target audience</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Not use our services for spam or illegal activities</li>
                  <li>Maintain the confidentiality of any login credentials provided</li>
                  <li>Pay all fees as agreed upon in your service agreement</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">4. Payment Terms</h2>
                <p className="leading-relaxed">
                  Payment terms are specified in your service agreement. Generally, services are billed monthly in advance. Late payments may result in service suspension. All fees are non-refundable except as required by law or as specified in your agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">5. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of our services are owned by DSK BRAND and are protected by copyright, trademark, and other intellectual property laws. Custom deliverables created for your campaign become your property upon full payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">6. Data Compliance</h2>
                <p className="leading-relaxed">
                  We comply with GDPR, CAN-SPAM, CCPA, and other applicable data protection regulations. However, clients are ultimately responsible for ensuring their use of our services complies with all applicable laws in their jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  DSK BRAND shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you in the past 12 months.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">8. Service Guarantees</h2>
                <p className="leading-relaxed">
                  While we strive for excellent results, we cannot guarantee specific outcomes such as response rates, conversion rates, or revenue. Results may vary based on your industry, offer, and target audience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">9. Termination</h2>
                <p className="leading-relaxed">
                  Either party may terminate services with 30 days written notice. DSK BRAND reserves the right to terminate services immediately if you violate these terms or use our services for illegal purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">10. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We may modify these terms at any time. We will notify clients of material changes via email. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">11. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> <a href="mailto:Dan@dskbrand.com" className="text-primary hover:underline">Dan@dskbrand.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

