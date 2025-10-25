export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DSK BRAND",
  "url": "https://dskbrand.com",
  "logo": "https://dskbrand.com/logo.png",
  "description": "DSK BRAND builds AI-powered lead engines that find, contact, and convert your ideal clients.",
  "email": "Dan@dskbrand.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/dskbrand",
    "https://twitter.com/dskbrand"
  ]
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Lead Generation Services",
  "provider": {
    "@type": "Organization",
    "name": "DSK BRAND"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lead Generation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Scraping",
          "description": "Custom web-scrapers that gather verified prospect data at scale."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "B2B Lead Generation",
          "description": "ICP research, list building, enrichment, and CRM-ready exports."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LinkedIn Outreach",
          "description": "Automated connection sequences with personalized messaging."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Email Marketing",
          "description": "Cold + nurture campaigns with tested copy and deliverability ops."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation",
          "description": "Integrations and workflows that remove manual touchpoints from your funnel."
        }
      }
    ]
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What data sources do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use a combination of premium B2B databases (LinkedIn Sales Navigator, ZoomInfo, Apollo), public web data, and custom scrapers. All data is verified and compliant with GDPR and privacy regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Which tools and platforms do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate with all major CRMs (HubSpot, Salesforce, Pipedrive), email platforms (Mailchimp, SendGrid, Instantly), LinkedIn automation tools, and can build custom integrations for your specific tech stack."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing varies based on your needs and scale. Most clients invest between $2,000-$10,000 per month depending on the services and volume. We offer custom packages and flexible contracts."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Initial setup takes 1-2 weeks. You'll typically see first results (leads, responses) within 2-3 weeks of launch. Full pipeline impact and ROI becomes clear after 60-90 days of optimization."
      }
    }
  ]
}

