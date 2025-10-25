# Deployment Guide - DSK BRAND Website

This guide will help you deploy your DSK BRAND website to Hostinger.

## Pre-Deployment Checklist

Before deploying, make sure to update the following:

### 1. Contact Information

Update these files with your actual contact details:

- `components/layout/TopBar.tsx`
  - Email: Dan@dskbrand.com
  - WhatsApp number

- `components/layout/Footer.tsx`
  - LinkedIn URL
  - Twitter URL
  - Email

- `app/contact/page.tsx`
  - Email address
  - WhatsApp link
  - Office address

### 2. Form Integration

Update the Formspree form ID in `app/contact/page.tsx`:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

To get a Formspree ID:
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy the form ID and replace `YOUR_FORM_ID`

### 3. Analytics (Optional)

Add analytics tracking by editing `app/layout.tsx`:

For Google Analytics 4:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

For Plausible Analytics:
```typescript
<Script defer data-domain="dskbrand.com" src="https://plausible.io/js/script.js" />
```

### 4. Calendly Integration

Update the Calendly link in:
- `components/home/Hero.tsx`
- `components/home/FinalCTA.tsx`

Replace `https://calendly.com/dskbrand` with your actual Calendly URL.

## Building the Site

1. Install dependencies (if not already done):
```bash
npm install
```

2. Build the static site:
```bash
npm run build
```

This creates an `out` directory with all your static files.

## Deploying to Hostinger

### Method 1: File Manager (Easiest)

1. Log in to your Hostinger control panel
2. Go to "File Manager"
3. Navigate to the `public_html` directory (or your domain's root directory)
4. Delete any existing files (if this is a new site)
5. Upload all files from the `out` directory:
   - Zip the contents of the `out` folder
   - Upload the zip file to Hostinger
   - Extract it in the `public_html` directory

### Method 2: FTP/SFTP

1. Get your FTP credentials from Hostinger:
   - Host: ftp.yourdomain.com
   - Username: your_username
   - Password: your_password
   - Port: 21 (FTP) or 22 (SFTP)

2. Use an FTP client (FileZilla, Cyberduck, etc.):
   - Connect to your server
   - Navigate to `public_html`
   - Upload all files from the `out` directory

### Method 3: Git Deployment (Advanced)

If Hostinger supports Git deployment:

1. Initialize a git repository in the `out` directory
2. Connect to Hostinger's Git repository
3. Push your changes

## Post-Deployment

### 1. Domain Configuration

Make sure your domain points to the correct directory:
- Domain should point to `public_html` or wherever you uploaded the files
- Ensure DNS records are properly configured

### 2. SSL Certificate

Enable SSL (HTTPS) in your Hostinger control panel:
1. Go to SSL section
2. Install a free Let's Encrypt certificate
3. Force HTTPS redirect

### 3. Test Your Site

Visit your site and check:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works
- [ ] Images and assets load
- [ ] Links open correctly

### 4. Performance Optimization

The `.htaccess` file included in the project enables:
- Gzip compression
- Browser caching
- Proper routing for static files

Make sure it's uploaded to your root directory.

## Updating the Site

When you need to make changes:

1. Make your changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Upload the new `out` directory contents to Hostinger (overwrite existing files)

## Troubleshooting

### Pages return 404 errors
- Make sure `.htaccess` is properly uploaded
- Check that all `.html` files are in the root directory

### Images not loading
- Verify the `_next` folder was uploaded
- Check file permissions (should be 644 for files, 755 for directories)

### Form not submitting
- Verify your Formspree ID is correct
- Check browser console for errors
- Ensure Formspree form is active

### CSS not applying
- Clear browser cache
- Verify `_next/static` folder was uploaded
- Check browser console for 404 errors

## Support

For hosting-related issues:
- Contact Hostinger support

For website-related issues:
- Check the browser console for errors
- Review the README.md for configuration options

## Maintenance

Recommended maintenance schedule:

- Weekly: Check form submissions
- Monthly: Review analytics data
- Quarterly: Update content and testimonials
- Annually: Review and update legal pages (Privacy, Terms)

## Backup

Always keep a backup:
1. Download the `out` directory before major updates
2. Keep your source code in a Git repository
3. Regularly backup your Hostinger files

---

Congratulations! Your DSK BRAND website is now live at https://dskbrand.com 🎉

