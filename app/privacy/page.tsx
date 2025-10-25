import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - DSK BRAND",
  description: "DSK BRAND privacy policy and data protection information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Privacy Policy
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
                <h2 className="text-2xl font-bold font-heading mb-4">1. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company information (name, website, industry)</li>
                  <li>Communication preferences</li>
                  <li>Information provided in forms and messages</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about services, offers, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">3. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>With your consent</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">5. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">6. Cookies and Tracking</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">7. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">8. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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

