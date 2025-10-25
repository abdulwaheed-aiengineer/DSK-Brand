# Quick Start Guide - DSK BRAND Website

Get your website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

Wait for all packages to download and install.

## Step 2: Update Contact Information

Open and update these files with your real information:

1. `components/layout/TopBar.tsx` - Email and WhatsApp
2. `components/layout/Footer.tsx` - Social media links
3. `app/contact/page.tsx` - Contact details

## Step 3: Set Up Contact Form

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID
5. Open `app/contact/page.tsx`
6. Replace `YOUR_FORM_ID` with your actual form ID

## Step 4: Update Calendly Link

Replace Calendly links in:
- `components/home/Hero.tsx`
- `components/home/FinalCTA.tsx`

Change `https://calendly.com/dskbrand` to your actual Calendly URL.

## Step 5: Test Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

Check:
- All pages load
- Navigation works
- Contact info is correct
- Links work properly

## Step 6: Build for Production

```bash
npm run build
```

This creates an `out` folder with your static website files.

## Step 7: Deploy to Hostinger

### Quick Upload Method:

1. Log in to Hostinger control panel
2. Go to File Manager
3. Navigate to `public_html`
4. Zip the contents of the `out` folder
5. Upload and extract the zip file
6. Done! Visit your domain

### Detailed Instructions:

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.

## Optional Enhancements

### Add Analytics

Add Google Analytics or Plausible tracking code to `app/layout.tsx`.

See CUSTOMIZATION.md for details.

### Customize Colors

Edit `tailwind.config.ts` to change the primary color:

```typescript
primary: {
  DEFAULT: "#2563EB", // Change this
}
```

### Add Your Logo

1. Add logo image to `public` folder
2. Update `components/layout/Header.tsx`

## Troubleshooting

### npm install fails
- Make sure Node.js 18+ is installed
- Try `npm install --legacy-peer-deps`

### Build fails
- Check for syntax errors in files you edited
- Run `npm run lint` to see linting errors

### Form not working
- Verify Formspree ID is correct
- Make sure form is active on Formspree dashboard

## Next Steps

1. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment details
2. Read [CUSTOMIZATION.md](./CUSTOMIZATION.md) to customize your site
3. Add real testimonials and case studies
4. Set up analytics tracking
5. Test on mobile devices

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- Formspree: https://formspree.io/docs

## Need Help?

Contact: Dan@dskbrand.com

---

Happy launching! 🚀

