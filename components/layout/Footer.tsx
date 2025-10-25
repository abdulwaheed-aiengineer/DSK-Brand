import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold font-heading mb-4">
              DSK <span className="text-primary">BRAND</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              We build AI-powered lead engines that find, contact, and convert your ideal clients. 
              Automate your pipeline and scale your growth with data-driven outreach strategies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:Dan@dskbrand.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/data-scraping" className="hover:text-primary transition-colors">
                  Data Scraping
                </Link>
              </li>
              <li>
                <Link href="/services/b2b-lead-generation" className="hover:text-primary transition-colors">
                  B2B Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/linkedin-outreach" className="hover:text-primary transition-colors">
                  LinkedIn Outreach
                </Link>
              </li>
              <li>
                <Link href="/services/email-marketing" className="hover:text-primary transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-primary transition-colors">
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} DSK BRAND. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

