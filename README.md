# SigMap Website

Official website for SigMap OÜ - an Estonian software development company specializing in functional programming and high-quality software solutions.

## Live Site

🌐 **[https://sigmap.tech](https://sigmap.tech)**

## Project Overview

This is a static website hosted on GitHub Pages, serving as the corporate homepage for SigMap OÜ. The site includes company information, services, and legal documentation.

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with mobile-first approach
- **GitHub Pages** - Static site hosting
- **Custom Domain** - sigmap.tech via CNAME

## Project Structure

```
sigmap-website/
├── index.html              # Main company homepage
├── style.css               # Global stylesheet
├── CNAME                   # GitHub Pages custom domain config
├── LICENSE                 # MIT License
├── README.md              # This file
├── .gitignore             # Git ignore rules
└── 2048/
    └── privacy-policy.html # Privacy policy for 2048 game
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags and Open Graph support
- ✅ Accessibility-friendly with ARIA labels and semantic HTML
- ✅ Smooth scrolling navigation
- ✅ Fast loading (no external dependencies)
- ✅ Privacy policy for 2048 game product

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

### Adding Favicons

The site references favicon files that should be added to the root directory:
- `/favicon.png` - Standard favicon (32x32 or 192x192)
- `/apple-touch-icon.png` - Apple touch icon (180x180)

To add favicons:
1. Create favicon files in the appropriate sizes
2. Place them in the root directory
3. The HTML already includes the necessary `<link>` tags

### Copyright Year

The footer copyright year is automatically set to the current year using JavaScript. No manual updates are required.

## Recent Updates

- ✅ Extracted CSS to external stylesheet
- ✅ Fixed footer layout (removed fixed positioning)
- ✅ Added comprehensive SEO metadata
- ✅ Implemented mobile responsive design
- ✅ Added accessibility improvements (ARIA labels)
- ✅ Fixed external link security (rel="noopener noreferrer")
- ✅ Updated privacy policy page with consistent styling
- ✅ Added navigation between main site and privacy policy

---

**Last Updated:** December 2025