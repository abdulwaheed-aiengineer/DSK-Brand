export interface Service {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  icon: string
  color: string
}

export const services: Service[] = [
  {
    slug: "data-scraping",
    title: "Data Scraping",
    shortDescription: "Custom web-scrapers that gather verified prospect data at scale.",
    fullDescription: "Real-time scrapers that extract qualified B2B data from any source while maintaining accuracy and compliance.",
    features: [
      "Custom scraper development for any website or platform",
      "Real-time data extraction with automatic updates",
      "Data validation and verification at scale",
      "Compliance with GDPR and data protection regulations",
      "Export to CSV, Excel, or direct CRM integration",
      "Scheduled scraping and monitoring"
    ],
    benefits: [
      "Access to unlimited prospect data",
      "Save 20+ hours per week on manual research",
      "Guaranteed data accuracy above 95%",
      "Scale your outreach without scaling your team"
    ],
    icon: "Database",
    color: "#2563EB"
  },
  {
    slug: "b2b-lead-generation",
    title: "B2B Lead Generation",
    shortDescription: "ICP research, list building, enrichment, and CRM-ready exports.",
    fullDescription: "We craft targeted prospect lists using ICP filters, intent signals, and email verification.",
    features: [
      "Ideal Customer Profile (ICP) research and definition",
      "Multi-source list building (LinkedIn, databases, web)",
      "Email finding and verification (95%+ deliverability)",
      "Firmographic and technographic enrichment",
      "Decision-maker identification",
      "CRM-ready exports with custom fields"
    ],
    benefits: [
      "Receive 500+ qualified leads per month",
      "Target decision-makers with 90%+ accuracy",
      "Reduce bounce rates below 3%",
      "Fill your pipeline with ready-to-convert prospects"
    ],
    icon: "Target",
    color: "#2563EB"
  },
  {
    slug: "linkedin-outreach",
    title: "LinkedIn Outreach",
    shortDescription: "Automated connection sequences with personalized messaging.",
    fullDescription: "Automated yet human LinkedIn campaigns to build warm relationships and drive calls.",
    features: [
      "Automated connection requests with personalization",
      "Multi-step message sequences",
      "Profile visits and post engagement",
      "InMail campaigns for premium reach",
      "A/B testing of messaging strategies",
      "Response tracking and follow-up automation"
    ],
    benefits: [
      "Connect with 100+ decision-makers per week",
      "Achieve 30-40% acceptance rates",
      "Book 5-10 qualified calls per month",
      "Build relationships while you sleep"
    ],
    icon: "Linkedin",
    color: "#2563EB"
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    shortDescription: "Cold + nurture campaigns with tested copy and deliverability ops.",
    fullDescription: "From cold outreach to nurture flows — copy, design, and deliverability handled end-to-end.",
    features: [
      "Cold email campaign strategy and setup",
      "Conversion-tested email copywriting",
      "Email deliverability optimization (SPF, DKIM, DMARC)",
      "Multi-step automated sequences",
      "A/B testing and performance analytics",
      "Inbox placement monitoring"
    ],
    benefits: [
      "Send 1,000+ emails daily with high deliverability",
      "Achieve 40-60% open rates",
      "Generate 3-5% response rates",
      "Convert cold leads into warm conversations"
    ],
    icon: "Mail",
    color: "#2563EB"
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortDescription: "Integrations and workflows that remove manual touchpoints from your funnel.",
    fullDescription: "Workflow bots that connect your CRM, email, and LinkedIn so no lead falls through the cracks.",
    features: [
      "CRM workflow automation (HubSpot, Salesforce, Pipedrive)",
      "Lead scoring and routing automation",
      "AI-powered email responses and follow-ups",
      "Cross-platform integration (Slack, Zapier, Make)",
      "Custom chatbots and lead qualification",
      "Automated reporting and analytics dashboards"
    ],
    benefits: [
      "Eliminate 15+ hours of manual work per week",
      "Never miss a follow-up or hot lead",
      "Increase conversion rates by 25-40%",
      "Scale your operations without hiring"
    ],
    icon: "Zap",
    color: "#2563EB"
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

