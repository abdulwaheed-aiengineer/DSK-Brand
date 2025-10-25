import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA"
import { organizationSchema, serviceSchema } from "@/lib/schema"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "DSK BRAND - Automate Your Pipeline. Scale Your Growth.",
  description: "DSK BRAND builds AI-powered lead engines that find, contact, and convert your ideal clients. Services: Data Scraping, B2B Lead Generation, LinkedIn Outreach, Email Marketing, AI Automation.",
  keywords: ["data scraping", "B2B lead generation", "LinkedIn outreach", "email marketing", "AI automation", "lead generation"],
  authors: [{ name: "DSK BRAND" }],
  openGraph: {
    title: "DSK BRAND - Automate Your Pipeline. Scale Your Growth.",
    description: "AI-powered lead engines that find, contact, and convert your ideal clients.",
    url: "https://dskbrand.com",
    siteName: "DSK BRAND",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSK BRAND - Automate Your Pipeline. Scale Your Growth.",
    description: "AI-powered lead engines that find, contact, and convert your ideal clients.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  )
}

