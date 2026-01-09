# CLAUDE.md - AI Assistant Guide for SigMap Website

## Project Overview

This is the official corporate website for **SigMap OÜ**, an Estonian software development company specializing in functional programming. It's a **pure static website** (HTML/CSS/JS) hosted on GitHub Pages.

- **Live Site:** https://sigmap.tech
- **Repository:** SigMapTech/sigmap-website
- **License:** MIT

## Quick Reference

```
Tech Stack:     HTML5, CSS3, Vanilla JavaScript (no frameworks/build tools)
Hosting:        GitHub Pages with custom domain
Form Backend:   Formspree (form ID: movyvqqe)
Fonts:          Google Fonts (Inter)
```

## Project Structure

```
sigmap-website/
├── index.html                 # Main landing page (company info, services, contact form)
├── style.css                  # Global stylesheet (mobile-first, responsive)
├── 2048/
│   └── privacy-policy.html    # Privacy policy for 2048 mobile game
├── CNAME                      # GitHub Pages custom domain config (sigmap.tech)
├── robots.txt                 # SEO crawler configuration
├── sitemap.xml                # XML sitemap for search engines
├── favicon.svg                # SVG favicon
├── favicon.png                # PNG favicon
├── apple-touch-icon.png       # Apple touch icon (180x180)
├── LICENSE                    # MIT License
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore rules
```

## Development Workflow

### Local Development

No build system - serve static files directly:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Deployment

Automatic via GitHub Pages on push to `main`:

```bash
git add .
git commit -m "Description of changes"
git push origin main
# Live at https://sigmap.tech within minutes
```

## Code Conventions

### HTML Standards

- **Semantic HTML5:** Use `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` appropriately
- **Accessibility (WCAG):**
  - Include ARIA labels and roles (`role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"`)
  - Use `aria-required` on required form fields
  - Maintain proper heading hierarchy (h1 > h2 > h3)
  - Include `aria-live="polite"` for status messages
- **SEO Requirements:**
  - Canonical URLs
  - Open Graph meta tags (og:title, og:description, og:type, og:url)
  - Twitter Card meta tags
  - JSON-LD structured data (schema.org Organization)
  - Meta descriptions and keywords

### CSS Standards

- **Mobile-First Approach:** Base styles for mobile, enhance with media queries
- **Responsive Breakpoints:**
  - `768px` - Tablets
  - `480px` - Mobile phones
- **Color Palette:**
  - Primary: `#333` (dark charcoal)
  - Accent: `#0066cc` (blue)
  - Success: `#2e7d32` (green)
  - Error: `#c62828` (red)
  - Info: `#1976d2` (light blue)
- **Transitions:** Use `0.2s` for smooth interactions
- **Focus States:** Always include clear focus indicators for accessibility

### JavaScript Standards

- **Pattern:** IIFE (Immediately Invoked Function Expression) for encapsulation
- **Error Handling:** Wrap localStorage and network operations in try-catch
- **Form Validation:** Client-side validation before submission
- **No External Dependencies:** Keep it vanilla JS

## Contact Form Architecture

The contact form (`index.html`) uses multiple spam protection layers:

1. **Honeypot Fields:** Hidden `_gotcha` and `website` fields (bots fill these)
2. **Time-Based Validation:** Minimum 3-second wait before submission allowed
3. **Rate Limiting:** 60-second cooldown via localStorage
4. **Link Detection:** Rejects messages with >3 URLs
5. **Length Validation:** Minimum 10-character message requirement
6. **Optional reCAPTCHA v3:** Code exists but commented out (needs configuration)

Backend: Formspree handles form submissions (POST to `https://formspree.io/f/movyvqqe`)

## Key Implementation Details

### Dynamic Copyright Year

The footer copyright year is automatically set via JavaScript - no manual updates needed:

```javascript
document.getElementById('currentYear').textContent = new Date().getFullYear();
```

### External Links

Always use `rel="noopener noreferrer"` and `target="_blank"` for external links for security.

### Skip Link

A `.skip-link` element exists for screen reader users to skip to main content.

## Related Products

### 2048 Game (Mobile)

The `/2048/privacy-policy.html` documents the privacy practices for SigMap's 2048 mobile game:
- Uses Firebase Crashlytics for crash reporting
- Integrates Google Play Integrity API for security
- Collects device information for diagnostics

## File Editing Guidelines

### When Modifying index.html

1. Preserve semantic HTML structure
2. Maintain ARIA attributes for accessibility
3. Update sitemap.xml if adding new pages
4. Test responsive design at all breakpoints
5. Verify form functionality after changes

### When Modifying style.css

1. Follow mobile-first approach (base styles, then media queries)
2. Maintain consistent color palette
3. Ensure focus states are visible
4. Test across breakpoints: mobile (default) → 480px → 768px

### When Adding New Pages

1. Include all necessary meta tags (see index.html for template)
2. Use consistent styling by linking style.css
3. Add navigation back to main site
4. Update sitemap.xml with new URL
5. Follow same accessibility patterns

## Testing Checklist

Before committing changes:

- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Forms submit correctly
- [ ] All links work (internal and external)
- [ ] No JavaScript console errors
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader compatible (test with ARIA)
- [ ] SEO: meta tags present and accurate
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge

## Common Tasks

### Update Company Information

Edit the relevant sections in `index.html`:
- Hero section for tagline
- Services section for offerings
- Contact section for details
- JSON-LD structured data in `<head>`

### Add New Service

1. Add new `<div class="service-card">` in the services section
2. Follow existing card structure (icon, h3, p)
3. Maintain consistent styling

### Modify Contact Form Fields

1. Add/modify HTML form elements in the contact section
2. Update JavaScript validation if needed
3. Configure Formspree to handle new fields if necessary

### Update Privacy Policy

Edit `/2048/privacy-policy.html`:
- Update the "Last Updated" date
- Maintain consistent styling with main site
- Keep GDPR compliance information accurate

## Git Workflow

- **Main Branch:** `main` (production, auto-deploys)
- **Feature Branches:** `claude/<feature>-<sessionId>` pattern for AI-assisted development
- **Pull Requests:** Required for code review before merging to main

## External Services

| Service | Purpose | Configuration |
|---------|---------|---------------|
| GitHub Pages | Hosting | Automatic from main branch |
| Formspree | Contact form backend | Form ID: `movyvqqe` |
| Google Fonts | Typography (Inter) | CDN link in HTML head |

## Important Notes for AI Assistants

1. **No Build System:** This is a static site - no npm, no webpack, no compilation
2. **No External JS Libraries:** Keep JavaScript vanilla
3. **Accessibility First:** Always maintain ARIA attributes and semantic HTML
4. **Mobile-First CSS:** Base styles target mobile; use media queries for larger screens
5. **SEO Matters:** Preserve all meta tags, Open Graph, and structured data
6. **Form Security:** Don't remove spam protection mechanisms without good reason
7. **Test Locally:** Use a local server to test changes before committing

## Company Information

**SigMap OÜ**
- Email: info@sigmap.tech
- Address: Idapõllu tee 3-21, 74001, Haabneeme alevik, Viimsi vald, Harju maakond, Estonia
- Country: Estonia

---

*Last Updated: January 2026*
