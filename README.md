# SigMap Website

Official website for SigMap OÜ - an Estonian software development company specializing in functional programming and high-quality software solutions.

## Live Site

🌐 **[https://sigmap.tech](https://sigmap.tech)**

## Project Overview

This is a static website hosted on GitHub Pages, serving as the corporate homepage for SigMap OÜ. The site includes company information, services, and legal documentation.

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Dark theme with design tokens, responsive mobile-first approach
- **Vanilla JavaScript** - No frameworks or build tools
- **Google Fonts** - DM Sans, Instrument Serif, JetBrains Mono
- **Formspree** - Contact form backend
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Quality checks (HTML/CSS validation, accessibility, Lighthouse, link checking) and sitemap maintenance
- **Custom Domain** - sigmap.tech via CNAME

## Project Structure

```
sigmap-website/
├── index.html                 # Main company homepage
├── style.css                  # Global stylesheet
├── 2048/
│   └── privacy-policy.html    # Privacy policy for 2048 game
├── .github/
│   └── workflows/
│       ├── quality-checks.yml # HTML/CSS validation, accessibility, Lighthouse, link checks
│       └── update-sitemap.yml # Auto-updates sitemap lastmod dates on push to main
├── .htmlvalidate.json         # html-validate config (shared by CI and local runs)
├── .stylelintrc.json          # stylelint config (shared by CI and local runs)
├── lighthouserc.js            # Lighthouse CI config
├── CNAME                      # GitHub Pages custom domain config
├── robots.txt                 # SEO crawler configuration
├── sitemap.xml                # XML sitemap for search engines
├── favicon.svg                # SVG favicon
├── favicon.png                # PNG favicon (32x32)
├── apple-touch-icon.png       # Apple touch icon (180x180)
├── og-image.png               # Open Graph / Twitter share image (1200x630)
├── CLAUDE.md                  # AI assistant guide
├── LICENSE                    # MIT License
├── README.md                  # This file
└── .gitignore                 # Git ignore rules
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags, Open Graph share image, and JSON-LD structured data
- ✅ Accessibility-friendly with ARIA labels, semantic HTML, and WCAG AA color contrast
- ✅ Smooth scrolling navigation with reduced-motion support
- ✅ Lightweight static site (only external dependencies: Google Fonts and Formspree)
- ✅ Spam-protected contact form (honeypots, rate limiting, time-based checks)
- ✅ Privacy policy for 2048 game product
- ✅ Automated quality checks via GitHub Actions

## Local Development

### Prerequisites

- A modern web browser
- Optional: Local web server for testing

### Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:SigMapTech/sigmap-website.git
   cd sigmap-website
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` in your browser

## Deployment

The site is automatically deployed via GitHub Pages when changes are pushed to the `main` branch.

### Deployment Process

1. Make changes to the files
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. GitHub Pages will automatically rebuild and deploy the site
4. Changes will be live at https://sigmap.tech within a few minutes

### Custom Domain Configuration

The custom domain `sigmap.tech` is configured via the `CNAME` file. To change the domain:

1. Update the `CNAME` file with the new domain
2. Configure DNS settings with your domain provider to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings (recommended)

## File Descriptions

### index.html
Main landing page containing:
- Company overview and mission
- Services offered
- Contact information

### style.css
Global stylesheet with:
- Responsive design breakpoints
- Smooth scrolling behavior
- Mobile-first CSS
- Accessibility-focused design

### 2048/privacy-policy.html
Comprehensive privacy policy for the 2048 game product, including:
- Data collection practices
- Google Play Integrity API usage
- User rights and security measures
- GDPR compliance information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

This site follows web accessibility best practices:
- Semantic HTML5 elements
- ARIA labels and roles
- Proper heading hierarchy
- Keyboard navigation support
- Responsive text sizing

## SEO Features

- Meta descriptions
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic markup
- Mobile-friendly design

## Contributing

This is a private company website. For internal contributions:

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly across different devices
4. Create a pull request with a clear description

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**SigMap OÜ**
- Email: info@sigmap.tech
- Address: Idapõllu tee 3-21, 74001, Haabneeme alevik, Viimsi vald, Harju maakond, Estonia

## Maintenance Notes

### Brand Images

The repository includes all referenced brand images, matching the dark/emerald design system:
- `/favicon.svg` - Vector favicon (dark rounded square with emerald lambda)
- `/favicon.png` - Raster fallback favicon (32x32)
- `/apple-touch-icon.png` - Apple touch icon (180x180)
- `/og-image.png` - Social share image for Open Graph / Twitter Cards (1200x630)

If the branding changes, regenerate all four together so they stay consistent.

### Copyright Year

The footer copyright year is automatically set to the current year using JavaScript. No manual updates are required.

## Recent Updates

- ✅ Redesigned site with dark theme, emerald accent, and lambda calculus aesthetic
- ✅ Restyled 2048 privacy policy page to match the new design system
- ✅ Added Open Graph / Twitter share image and refreshed favicons to new branding
- ✅ Fixed WCAG AA color contrast for muted text
- ✅ Added comprehensive SEO metadata and JSON-LD structured data
- ✅ Added GitHub Actions quality checks (validation, accessibility, Lighthouse, links)
- ✅ Added spam protection to the contact form

---

**Last Updated:** June 2026