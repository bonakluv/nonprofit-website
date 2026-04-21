# Renara - Women's Rights Digital Solutions

A professional, modern website for a nonprofit that helps women's rights organizations improve their websites.

## 📁 Project Structure

```
nonprofit-website/
├── index.html           # Home page
├── services.html        # Services offered
├── portfolio.html       # Case studies
├── about.html          # About/Team page
├── contact.html        # Contact form
├── assets/             # CSS, JS, and other assets (folder for future use)
├── images/             # Image folder for logos, photos, etc.
└── README.md           # This file
```

## 🎨 Design Features

- **Modern, Professional Design**: Built with Tailwind CSS for a sleek, contemporary look
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Purple & Blue Color Scheme**: Reflects professionalism and trust
- **Fast Loading**: Static HTML with Tailwind CDN for instant performance
- **Easy to Navigate**: Intuitive navigation with clear information hierarchy

## 🚀 Getting Started

### Opening the Website

1. **Open in Browser**: Simply open any HTML file in your web browser (e.g., `index.html`)
2. **Local Server**: For best results, serve files through a local server:
   ```
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   Then visit `http://localhost:8000`

### Pages Included

- **index.html** - Homepage with hero section, mission statement, and service overview
- **services.html** - Detailed descriptions of services offered (4 main offerings)
- **portfolio.html** - 4 detailed case studies showing impact results
- **about.html** - Team profiles, company values, and why organizations choose you
- **contact.html** - Contact form, FAQ section, and testimonials

## ✏️ Editing the Website

### Text Content

1. Open any HTML file in a text editor (VS Code recommended)
2. Find the text you want to change
3. Edit it directly
4. Save the file
5. Refresh your browser to see changes

### Colors

To change the color scheme, search and replace in all files:

- **Primary Color (Purple)**: Change `purple-600`, `purple-100`, etc. to your preferred Tailwind color
- **Secondary Colors**: Look for `blue-600`, `green-600`, `orange-600` for accent colors

### Adding Your Logo

1. Save your logo to the `images/` folder
2. In `index.html` and other pages, replace the text logo with:
   ```html
   <img src="images/your-logo.png" alt="Logo" class="h-8">
   ```

### Updating Contact Information

Search for the following in all pages and update:
- Email: `hello@renara.org`
- Phone: `(555) 123-4567`
- Address: `San Francisco, CA 94105`
- Social links (Twitter, LinkedIn, Instagram)

### Adding Team Members

In `about.html`, duplicate a team member card and update:
- Icon/Image
- Name
- Title
- Bio
- Social links

### Adding Case Studies

In `portfolio.html`, duplicate a case study card and update:
- Organization name
- Icon/color
- Headline and description
- Impact metrics
- Challenge and results

## 🌐 Hosting Options

### Easy Hosting Solutions

1. **Netlify** (Recommended)
   - Free tier, very easy setup
   - Connect to GitHub or upload files directly
   - Built-in form handling with Netlify Forms

2. **GitHub Pages**
   - Free hosting directly from GitHub
   - Perfect for static sites
   - Automatic HTTPS

3. **Vercel**
   - Free tier with generous limits
   - Fast global deployment
   - Easy integration with frameworks

4. **Traditional Hosting**
   - Any web host that supports static files
   - FTP/SFTP upload
   - Extremely affordable

## 🔧 Customization Tips

### Forms

The contact form currently shows an alert. To make it functional:

**Option 1: Netlify Forms**
- Upload to Netlify
- Add `netlify` attribute to the form tag
- Forms automatically work!

**Option 2: Formspree**
- Go to formspree.io
- Create a form
- Get a form URL
- Update the form's `action` attribute

**Option 3: EmailJS**
- Use EmailJS service for client-side form handling
- Add their JavaScript library
- Configure in the contact form

### SEO Optimization

1. Update meta descriptions in each page's `<head>`:
   ```html
   <meta name="description" content="Your page description here">
   ```

2. Add keywords to titles and headings

3. Ensure all pages are properly linked in navigation and footer

### Analytics

Add Google Analytics (or alternative) to track visitors:
```html
<!-- Add to the <head> section of each page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🎯 Next Steps

1. **Customize Content**: Personalize with your organization's name, mission, and details
2. **Add Images**: Replace placeholder color boxes with actual images
3. **Set Up Contact Form**: Choose a form handling solution
4. **Deploy**: Choose a hosting platform and launch
5. **Monitor**: Set up analytics to track performance

## 📝 Footer Notes

- All pages use Tailwind CSS via CDN for styling (no build process needed!)
- The site is completely self-contained—all CSS is inline
- No database or backend needed
- Can be hosted anywhere that serves static files
- Very fast performance due to minimal dependencies

## 💡 Support & Questions

For more information on customizing or deploying this website, consult:
- Tailwind CSS docs: https://tailwindcss.com/docs
- HTML guide: https://developer.mozilla.org/en-US/docs/Web/HTML
- Hosting guides: Check your hosting provider's documentation

---

**Built with ❤️ for nonprofits making a difference**