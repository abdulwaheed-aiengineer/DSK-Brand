# Customization Guide - DSK BRAND Website

This guide explains how to customize various aspects of your website.

## Table of Contents

1. [Branding & Colors](#branding--colors)
2. [Content Updates](#content-updates)
3. [Services Management](#services-management)
4. [Images & Media](#images--media)
5. [Typography](#typography)
6. [Layout Modifications](#layout-modifications)

---

## Branding & Colors

### Primary Color

Edit `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: "#2563EB", // Change this hex color
  foreground: "#ffffff",
},
```

Common alternatives:
- Tech: `#0066FF` (bright blue)
- Professional: `#1E3A8A` (dark blue)
- Modern: `#8B5CF6` (purple)
- Growth: `#10B981` (green)

### Logo

1. Add your logo to the `public` folder
2. Edit `components/layout/Header.tsx`:

```typescript
<Link href="/" className="text-2xl font-bold font-heading">
  <img src="/logo.png" alt="DSK BRAND" className="h-8" />
</Link>
```

## Content Updates

### Homepage Hero Section

Edit `components/home/Hero.tsx`:

```typescript
<h1>Your New Headline</h1>
<p>Your new subheadline</p>
```

### Testimonials

Edit `components/home/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    quote: "Your testimonial text",
    author: "Client Name",
    role: "Their Title",
    company: "Company Name"
  },
  // Add more...
]
```

### Case Studies

Edit `components/home/CaseStudyCarousel.tsx`:

```typescript
const caseStudies = [
  {
    company: "Client Company",
    industry: "Their Industry",
    metric: "+500 leads",
    timeframe: "in 3 months",
    description: "Brief description",
    icon: TrendingUp,
    stats: [
      { label: "Metric 1", value: "100%" },
      // Add more stats
    ]
  },
]
```

### FAQ Section

Edit `components/home/FAQSection.tsx`:

```typescript
const faqs = [
  {
    question: "Your question?",
    answer: "Your detailed answer."
  },
  // Add more FAQs
]
```

## Services Management

### Editing Services

All services are managed in `lib/services-data.ts`:

```typescript
{
  slug: "your-service",
  title: "Service Name",
  shortDescription: "Brief description for cards",
  fullDescription: "Detailed description for service page",
  features: [
    "Feature 1",
    "Feature 2",
    // Add more features
  ],
  benefits: [
    "Benefit 1",
    "Benefit 2",
    // Add more benefits
  ],
  icon: "IconName", // Database, Target, Linkedin, Mail, Zap
  color: "#2563EB"
}
```

### Adding a New Service

1. Add the service to `lib/services-data.ts`
2. If using a new icon, import it at the top of the file
3. Add the icon mapping in components that use icons
4. The page will automatically generate at `/services/your-slug`

### Removing a Service

1. Remove the service from the `services` array in `lib/services-data.ts`
2. Rebuild the site

## Images & Media

### Adding Images

1. Place images in the `public` folder
2. Reference them in your code:

```typescript
<img src="/your-image.jpg" alt="Description" />
```

Recommended image formats:
- WebP for photos (best compression)
- PNG for logos and graphics
- SVG for icons and illustrations

### Optimizing Images

Before adding images:
1. Resize to appropriate dimensions
2. Compress using tools like:
   - TinyPNG
   - ImageOptim
   - Squoosh

Recommended sizes:
- Hero images: 1920x1080px
- Card images: 600x400px
- Icons: 64x64px or SVG

### Adding a Favicon

1. Generate favicons at [favicon.io](https://favicon.io)
2. Place in the `public` folder
3. Add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

## Typography

### Changing Fonts

1. Update Google Fonts in `app/layout.tsx`:

```typescript
import { YourFont, AnotherFont } from "next/font/google"

const yourFont = YourFont({ subsets: ["latin"], variable: "--font-your" })
```

2. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["YourFont", "system-ui", "sans-serif"],
  heading: ["AnotherFont", "system-ui", "sans-serif"],
},
```

3. Update CSS variables in `app/globals.css`

Popular font combinations:
- Modern: Poppins + Inter
- Professional: Montserrat + Open Sans
- Tech: Space Grotesk + DM Sans
- Classic: Merriweather + Lato

### Font Sizes

Edit heading sizes in component files:

```typescript
<h1 className="text-4xl md:text-6xl"> // Adjust these values
```

Tailwind size scale:
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-6xl`: 3.75rem (60px)

## Layout Modifications

### Adjusting Section Spacing

Change `py` (padding y-axis) values:

```typescript
<section className="py-20"> // Change to py-16 or py-24
```

### Container Width

Edit components to change max width:

```typescript
<div className="max-w-4xl mx-auto"> // Change to max-w-6xl or max-w-7xl
```

Width options:
- `max-w-3xl`: 48rem (768px)
- `max-w-4xl`: 56rem (896px)
- `max-w-5xl`: 64rem (1024px)
- `max-w-6xl`: 72rem (1152px)
- `max-w-7xl`: 80rem (1280px)

### Grid Layouts

Adjust grid columns:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

Options:
- 2 columns: `lg:grid-cols-2`
- 3 columns: `lg:grid-cols-3`
- 4 columns: `lg:grid-cols-4`

### Removing Sections

To hide a section without deleting code:

```typescript
{/* <ProcessTimeline /> */}
```

Or remove the import and component call entirely.

### Adding New Sections

1. Create a new component in `components/home/`
2. Import and add to `app/page.tsx`:

```typescript
import { YourNewSection } from "@/components/home/YourNewSection"

// In the return:
<YourNewSection />
```

## Animation Customization

### Adjusting Animation Speed

Edit Framer Motion `transition` props:

```typescript
<motion.div
  transition={{ duration: 0.6 }} // Slower: 1.0, Faster: 0.3
>
```

### Disabling Animations

Remove or comment out Framer Motion wrappers:

```typescript
// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
// >
  <div>
    Your content
  </div>
// </motion.div>
```

## Call-to-Action (CTA) Buttons

### Updating CTA Text

Search for button text across components:

```typescript
<Link href="/contact">
  Get Started // Change this
</Link>
```

### Changing CTA Destination

Update the `href` attribute:

```typescript
<Link href="/contact"> // Change to /services or external URL
```

For external links:

```typescript
<a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer">
```

## Mobile Responsiveness

### Adjusting Mobile Layouts

The site uses Tailwind's responsive prefixes:
- No prefix: applies to all sizes
- `sm:`: applies from 640px and up
- `md:`: applies from 768px and up
- `lg:`: applies from 1024px and up
- `xl:`: applies from 1280px and up

Example:

```typescript
<div className="text-2xl md:text-4xl lg:text-6xl">
  // Mobile: 2xl, Tablet: 4xl, Desktop: 6xl
</div>
```

### Mobile Sticky CTA

Edit `components/layout/MobileStickyCTA.tsx` to customize the mobile bottom button.

## Advanced Customizations

### Adding Blog/News Section

1. Create `app/blog/page.tsx`
2. Create `app/blog/[slug]/page.tsx`
3. Add blog content in MDX or JSON format
4. Add navigation link in Header

### Adding Live Chat

Add a chat widget in `app/layout.tsx`:

```typescript
<Script id="chat-widget">
  {`
    // Your chat widget code
  `}
</Script>
```

### Multi-language Support

Consider using:
- next-intl
- next-i18next

This requires restructuring routes and adding translation files.

---

## Need Help?

If you need custom development or have questions:
- Email: Dan@dskbrand.com
- Review the Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

