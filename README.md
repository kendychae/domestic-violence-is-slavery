# Domestic Violence Resources Website

A comprehensive, accessible, and survivor-centered website providing critical information and resources for individuals experiencing domestic violence. This site adheres to modern web standards, WCAG accessibility guidelines, and trauma-informed design principles.

## 🚨 Important Legal Disclaimer

**THIS WEBSITE IS FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY**

- This website does **not** provide emergency services, legal advice, medical advice, or professional counseling
- If you or someone you know is in **immediate danger**, call **911** or your local emergency services
- The information provided should **not replace** consultation with qualified professionals including law enforcement, medical personnel, licensed therapists, domestic violence advocates, or legal advisors
- Resource availability, phone numbers, and service details may change; always verify current information directly with service providers
- We make every effort to maintain accurate information, but we cannot guarantee the completeness, accuracy, or timeliness of all content
- Use of this website does not establish any professional relationship with the creators or contributors

**Privacy & Safety:** If you are in an unsafe situation, please use private/incognito browsing mode and clear your browser history after visiting. Use the **Quick Exit** button to immediately leave the site.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Accessibility Compliance](#accessibility-compliance)
4. [Data Sourcing & Methodology](#data-sourcing--methodology)
5. [Ethical Considerations](#ethical-considerations)
6. [How to Update Statistics](#how-to-update-statistics)
7. [Technology Stack](#technology-stack)
8. [Deployment Instructions](#deployment-instructions)
9. [Safety Features](#safety-features)
10. [Contributing Guidelines](#contributing-guidelines)
11. [License & Attribution](#license--attribution)

---

## Overview

This website serves as a comprehensive resource hub for individuals affected by domestic violence. It provides:

- **Educational content** on recognizing signs of abuse (physical, emotional, sexual, financial, digital, coercive control)
- **Verified resources** including national and Idaho-specific hotlines and support services
- **Evidence-based statistics** with direct links to authoritative sources (CDC, DOJ, NCADV, NIH)
- **Safety tools** including Quick Exit functionality and privacy guidance
- **Full accessibility** through semantic HTML, ARIA labels, keyboard navigation, and UserWay widget integration

The site is designed with **survivor safety**, **privacy**, and **accessibility** as top priorities.

---

## Features

### Core Functionality

- **4 Main Pages:**
  - **Home Page**: Introduction to domestic violence, abuse types, Power and Control Wheel
  - **Resources**: Comprehensive list of national and Idaho-specific support services
  - **Signs & Symptoms**: Detailed warning signs for all abuse types including coercive control
  - **Statistics**: Data-driven information with real-time counter and sourced statistics

- **Accessibility Features:**
  - UserWay Accessibility Widget (official integration)
  - WCAG AA/AAA compliant contrast ratios
  - Semantic HTML5 structure with ARIA labels
  - Full keyboard navigation support
  - Screen reader optimized
  - Mobile-responsive design

- **Safety Features:**
  - Quick Exit button (redirects to Google)
  - Emergency keyboard shortcut (Escape key × 3)
  - Safety alert modal on first visit
  - Privacy warnings and browsing tips
  - No user tracking or analytics

- **Interactive Elements:**
  - Real-time counter estimating lives lost to domestic violence
  - Scroll-to-top button
  - Mobile-friendly hamburger navigation
  - Smooth scrolling and transitions
  - Dynamically generated "Last Updated" dates

### The Power and Control Wheel

The website includes the **Domestic Violence Power and Control Wheel**, originally developed by the Domestic Abuse Intervention Programs (DAIP) in Duluth, Minnesota. This wheel illustrates the pattern of tactics used by abusers:

1. **Coercion and Threats**
2. **Intimidation**
3. **Emotional Abuse**
4. **Isolation**
5. **Minimizing, Denying, and Blaming**
6. **Using Children**
7. **Using Male Privilege**
8. **Economic Abuse**

All surrounded by **Physical and Sexual Violence**.

**Attribution**: The Power and Control Wheel is © Domestic Abuse Intervention Programs (DAIP), Duluth, Minnesota. Learn more at [www.theduluthmodel.org](https://www.theduluthmodel.org).

---

## Accessibility Compliance

This website strives to meet **WCAG 2.1 Level AA and AAA** standards:

### Compliance Measures

#### Visual Accessibility

- **Contrast Ratios**: All text meets minimum 4.5:1 ratio (AA), with many achieving 7:1 or higher (AAA)
- **Color Independence**: Information is not conveyed by color alone
- **Scalable Text**: Fully functional at 200% zoom without loss of content or functionality
- **Clear Typography**: Inter font family with multiple weights for readability
- **Focus Indicators**: Visible 3px red focus outlines on all interactive elements

#### Navigation & Interaction

- **Keyboard Navigation**: All functionality accessible via keyboard
- **Skip Links**: "Skip to main content" link for screen reader users
- **ARIA Labels**: Comprehensive labeling on interactive elements and regions
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Landmarks**: Clear page structure with role attributes

#### Multimedia & Forms

- **Alt Text**: All decorative emojis removed; images (when added) will include descriptive alt text
- **Form Labels**: All form controls (when implemented) include associated labels
- **Error Identification**: Clear error messages with suggestions for correction

#### Technology Integration

- **UserWay Widget**: Official accessibility widget providing:
  - Screen reader support
  - Dyslexia-friendly fonts
  - Cursor/keyboard enhancements
  - Content highlighting
  - Smart contrast adjustments
  - And 30+ additional accessibility features

### Testing Recommendations

To verify accessibility:

1. **Automated Testing**: Use tools like axe DevTools, WAVE, or Lighthouse
2. **Manual Testing**: Navigate the site using only a keyboard (Tab, Enter, Arrow keys)
3. **Screen Reader Testing**: Test with JAWS, NVDA, or VoiceOver
4. **Zoom Testing**: Verify functionality at 200% browser zoom
5. **Color Contrast**: Use WebAIM's Contrast Checker or similar tools

---

## Data Sourcing & Methodology

### Source Authority Standards

All statistics on this website must come from **reputable, authoritative sources** only:

#### Acceptable Sources

- **Government Agencies**: CDC, NIH, DOJ, Bureau of Justice Statistics, National Institute of Justice
- **Academic Institutions**: Peer-reviewed research from established universities
- **Established Advocacy Organizations**: NCADV, National Domestic Violence Hotline, state coalitions
- **International Organizations**: WHO, UNICEF, UN Women

#### Unacceptable Sources

- Unofficial blogs or personal websites
- Social media posts or user-generated content
- Undocumented or unsourced claims
- Outdated data (generally >5 years old without verification)

### Source Link Requirements

**Every statistic on the Statistics page must include a clickable source link** in the following format:

```html
<div class="stat-source">
  <a href="[URL]" target="_blank" rel="noopener noreferrer">
    Source: [Organization Name]
  </a>
</div>
```

### Real-Time Counter Methodology

The homepage and statistics page include a **real-time counter** estimating lives lost to domestic violence:

- **Data Source**: CDC National Violent Death Reporting System
- **Base Figure**: Approximately 1,500-2,000 intimate partner homicides annually in the U.S.
- **Conservative Estimate**: 1,600 annual deaths used for calculations
- **Gender Distribution**: 75% women (1,200), 25% men (400)
- **Calculation**: Deaths since January 1 of current year based on daily averages
- **Important Note**: Counter represents intimate partner homicides only, not all domestic violence-related deaths

The counter is **intentionally conservative** to maintain credibility and avoid sensationalism.

### Data Update Process

See [How to Update Statistics](#how-to-update-statistics) section below.

---

## Ethical Considerations

### Survivor-Centered Design Principles

This website is built on **trauma-informed** and **survivor-centered** principles:

#### 1. Safety First

- **Quick Exit functionality** available on every page
- **Privacy guidance** prominently displayed
- **Safety modal** on first visit warns about browsing privacy
- **No tracking or analytics** that could compromise user privacy
- **No login or data collection** to avoid leaving traces

#### 2. Empowerment & Agency

- **Non-judgmental language** throughout all content
- **Information, not directives**: We provide resources, not ultimatums ("You should leave")
- **Multiple options presented**: Recognizing that leaving is not always the safest or only option
- **Respecting autonomy**: Acknowledging individuals' right to make their own decisions

#### 3. Trauma-Informed Language

- **No victim-blaming** language
- **Avoid sensationalism** or graphic descriptions of violence
- **Person-first language**: "Person experiencing domestic violence" rather than "victim" where appropriate
- **Acknowledge complexity**: Leaving an abusive relationship is not simple
- **Validate experiences**: "What you're experiencing is not normal" and "It's not your fault"

#### 4. Inclusivity

- **All genders recognized**: Resources for women, men, and LGBTQ+ individuals
- **Diverse family structures**: Including same-sex relationships, non-married partners
- **Cultural sensitivity**: Acknowledging barriers faced by immigrant and refugee populations
- **Disability awareness**: Recognizing unique vulnerabilities of people with disabilities
- **Child witnesses**: Acknowledging children who witness abuse as victims themselves

#### 5. Accessibility as Justice

- **Disability justice perspective**: Accessibility is not optional—it's ensuring equal access to life-saving information
- **Multiple access points**: Phone, text, online chat options for various communication needs
- **Plain language**: Content written at 8th-grade reading level where possible without oversimplifying

### Content Guidelines

When adding or editing content:

- **Verify all facts** with authoritative sources
- **Avoid romanticizing** "love" or relationships in abusive contexts
- **Don't minimize** emotional, financial, or other "non-physical" abuse
- **Include warnings** before graphic content (if ever added)
- **Emphasize**: Abuse is about power and control, not anger management or stress
- **Clarify**: Couples counseling is not appropriate for abusive relationships

---

## How to Update Statistics

### Step-by-Step Process

#### 1. Research & Verification

- Identify the statistic that needs updating
- Find the most recent data from an authoritative source (see [Data Sourcing](#data-sourcing--methodology))
- Verify the:
  - **Publication date** of the study/report
  - **Sample size** and methodology
  - **Geographic scope** (national vs. state vs. localized)
  - **Definition of terms** (e.g., what qualifies as "domestic violence" in that study)

#### 2. Locate Stat in Code

- Statistics are in `stats.html` in various `<article class="stat-card">` elements
- Find the stat you want to update

#### 3. Update the HTML

**Before:**

```html
<article class="stat-card">
  <div class="stat-number">1 in 4</div>
  <div class="stat-description">
    Women experience severe intimate partner violence
  </div>
  <div class="stat-source">
    <a href="https://old-url.com" target="_blank" rel="noopener noreferrer">
      Source: Old Organization
    </a>
  </div>
</article>
```

**After:**

```html
<article class="stat-card">
  <div class="stat-number">1 in 4</div>
  <div class="stat-description">
    Women experience severe intimate partner physical violence, sexual violence,
    and/or stalking
  </div>
  <div class="stat-source">
    <a
      href="https://www.cdc.gov/new-report-url"
      target="_blank"
      rel="noopener noreferrer"
    >
      Source: CDC (2025)
    </a>
  </div>
</article>
```

#### 4. Update Counter Methodology (if applicable)

If the annual death toll estimates change:

- Open `counter.js`
- Update the `annualDeaths`, `womenDeaths`, or `menDeaths` variables
- Update the methodology text in `stats.html` in the `.counter-citation` section
- Update the source links

#### 5. Test Links

- Click every updated source link to verify it loads correctly
- Use `target="_blank"` and `rel="noopener noreferrer"` for security

#### 6. Document Changes

- Update the "Last Updated" date in the footer (automatically generated by JavaScript)
- Consider adding a comment in the HTML with update date: `<!-- Updated Feb 2026 -->`

### Update Frequency Recommendations

- **Statistics**: Review annually or when major new studies are published
- **Resources**: Verify quarterly (hotlines and services can change frequently)
- **Counter methodology**: Review annually based on CDC reports
- **Content/text**: As needed for accuracy or clarity improvements

---

## Technology Stack

### Frontend

- **HTML5**: Semantic markup, ARIA labels, accessibility-first structure
- **CSS3**: Modern flexbox and grid layouts, CSS custom properties (variables)
- **JavaScript (Vanilla)**: No frameworks; pure JS for performance and simplicity

### External Integrations

- **UserWay Accessibility Widget**: Official CDN integration
  - Account ID: `xGkYEsQ9GU`
  - Script: `https://cdn.userway.org/widget.js`
- **Google Fonts**: Inter font family (weights: 300, 400, 600, 700)

### Hosting

- **GitHub Pages** (or any static hosting)
- No server-side processing required
- No database needed

---

## Deployment Instructions

### Initial Setup

1. **Clone or Download Repository**

   ```bash
   git clone https://github.com/kendychae/domestic-violence-is-slavery.git
   cd domestic-violence-is-slavery
   ```

2. **Verify File Structure**
   ```
   domestic-violence-is-slavery/
   ├── index.html
   ├── resources.html
   ├── signs.html
   ├── stats.html
   ├── styles.css
   ├── script.js
   ├── counter.js
   └── README.md
   ```

### Deployment to GitHub Pages

1. **Push to GitHub** (if not already done)

   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at: `https://[username].github.io/[repository-name]/`
   - Example: `https://kendychae.github.io/domestic-violence-is-slavery/`

### Alternative Hosting Options

#### Netlify

1. Connect GitHub repository
2. Build command: (none - static site)
3. Publish directory: `/`
4. Deploy

#### Vercel

1. Import GitHub repository
2. Framework preset: Other
3. Build & output settings: Default
4. Deploy

#### Custom Domain

- Purchase domain from registrar
- Add CNAME record pointing to hosting provider
- Update GitHub Pages/Netlify/Vercel settings with custom domain
- Enable HTTPS/SSL (usually automatic)

---

## Safety Features

### Quick Exit Functionality

The **Quick Exit** button immediately redirects users to Google, helping them quickly leave the site if someone enters the room.

**Multiple triggers:**

- Top-right Quick Exit button (always visible)
- Footer Quick Exit button
- Keyboard shortcut: Press `Escape` 3 times quickly (within 1 second)

**How it works:**

- Uses `window.location.replace()` instead of `window.location.href`
- This replaces the current page in browser history, making it harder to see the user visited the domestic violence site

**Limitations:**

- Does not clear browser history completely
- Users should still use private browsing mode and manually clear history

### Privacy Recommendations

Include on all pages:

1. **"Use private/incognito mode"** - Prevents history tracking
2. **"Clear browser history"** - Instructions for major browsers
3. **"Abusers may monitor devices"** - Warning about phone/computer monitoring
4. **"Use a safe computer"** - Recommend public library or friend's device

### Safety Modal

On first page load, users see a safety alert explaining:

- How to use the Quick Exit button
- Privacy considerations
- Device monitoring risks
- Alternative access methods (public library, friend's phone)

Modal uses `sessionStorage` so it only shows once per browsing session.

---

## Contributing Guidelines

### Who Can Contribute

We welcome contributions from:

- Domestic violence advocates and survivors
- Social workers and counselors
- Web developers and accessibility specialists
- Researchers and data analysts
- Anyone committed to supporting survivors

### What to Contribute

**Welcomed contributions:**

- Updated statistics with verified sources
- New verified resources (hotlines, shelters, legal aid)
- Accessibility improvements
- Bug fixes
- Translation to other languages
- Improved content clarity

**Not accepted:**

- Unverified statistics or resources
- Content that could endanger users
- Tracking or analytics scripts
- Advertisements or commercial content
- Political or religious messaging

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following the guidelines in this README
4. **Test thoroughly** (accessibility, mobile, all browsers)
5. **Commit with clear messages**: `git commit -m "Add updated CDC statistics with sources"`
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Open a Pull Request** with detailed description of changes

### Code Standards

- **HTML**: Semantic, accessible, include ARIA labels where needed
- **CSS**: Use CSS custom properties (variables), maintain existing naming conventions
- **JavaScript**: Vanilla JS only, no frameworks, include comments
- **Sources**: Every statistic must link to an authoritative source
- **Testing**: Test on Chrome, Firefox, Safari, Edge; test mobile responsiveness

---

## License & Attribution

### Website Content License

This website's code and original content are released under the **MIT License**:

```
MIT License

Copyright (c) 2026 Domestic Violence Resources

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Attribution Requirements

#### Power and Control Wheel

The **Domestic Violence Power and Control Wheel** is © **Domestic Abuse Intervention Programs (DAIP)**, Duluth, Minnesota.

- Visit: [www.theduluthmodel.org](https://www.theduluthmodel.org)
- This model is used with educational intent; commercial use may require permission from DAIP

#### Data Sources

All statistics are attributed directly to their sources with inline citations. Major sources include:

- **Centers for Disease Control and Prevention (CDC)**
- **National Coalition Against Domestic Violence (NCADV)**
- **Bureau of Justice Statistics (BJS)**
- **National Institute of Justice (NIJ)**
- **UNICEF**
- **World Health Organization (WHO)**

#### Third-Party Tools

- **UserWay Accessibility Widget**: © UserWay Inc.
- **Google Fonts (Inter)**: © Google Inc., Licensed under SIL Open Font License

### Disclaimer on Reuse

If you fork or adapt this website:

- Verify all resource phone numbers and links for your location
- Update statistics to ensure accuracy
- Customize resources for your geographic area
- Consider local laws and regulations
- Maintain ethical standards and survivor-centered principles

---

## Support & Contact

### For Website Issues

- **Technical bugs**: Open an issue on GitHub
- **Content corrections**: Open a pull request with source documentation
- **Accessibility concerns**: We take these seriously; please open a GitHub issue

### For Help with Domestic Violence

**This repository is for website development only.** If you need help:

- **National Domestic Violence Hotline**: **1-800-799-7233** (24/7)
- **Text**: **START to 88788**
- **Online Chat**: [www.thehotline.org](https://www.thehotline.org)
- **TTY**: **1-800-787-3224**
- **Emergency**: **Call 911**

---

## Acknowledgments

This website exists thanks to:

- **Survivors** who share their stories to help others
- **Advocates** working tirelessly in domestic violence services
- **Researchers** providing evidence-based data
- **Organizations** like NCADV, The Hotline, and DAIP who lead this work
- **Open-source community** enabling accessible web development

---

## Version History

### Version 2.0 (February 2026) - Current

- Complete professional redesign
- Removed all emojis for professional appearance
- Integrated official UserWay Accessibility Widget
- Added comprehensive Safety Alert Modal
- Added Domestic Violence Power and Control Wheel
- Every statistic now includes clickable source links
- Added scroll-to-top button
- Enhanced mobile responsiveness
- Added Coercive Control as distinct abuse type
- Dynamic "Last Updated" date generation
- Full WCAG AA/AAA compliance review

### Version 1.0 (February 2026)

- Initial launch with 4 pages
- Custom accessibility widget
- Basic resource listings
- Real-time statistics counter
- Quick Exit and safety features

---

**Last Updated**: February 10, 2026

**Repository**: [https://github.com/kendychae/domestic-violence-is-slavery](https://github.com/kendychae/domestic-violence-is-slavery)

**Remember**: If you or someone you know is in immediate danger, call **911**. This website is a resource tool, not a replacement for emergency services.
