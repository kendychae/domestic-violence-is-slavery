# Domestic Violence Resources Website

A comprehensive, accessible, and modern website providing resources, information, and support for domestic violence survivors.

## 🌐 Features

- **Fully Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Accessibility-Focused**: WCAG AA/AAA compliant with draggable accessibility widget
- **Quick Exit Functionality**: Emergency exit button to immediately leave the site
- **Real-Time Statistics**: Dynamic counter showing estimated lives lost to domestic violence
- **Comprehensive Resources**: Idaho local and U.S. national support services
- **Modern Red Theme**: Professional design with excellent contrast ratios
- **Privacy-Conscious**: No tracking, clear browser history warnings

## 📁 Project Structure

```
domestic-violence-is-slavery/
├── index.html                  # Home page
├── resources.html              # Resources page (Idaho & National)
├── signs.html                  # Signs & Symptoms page
├── stats.html                  # Statistics page with counter
├── styles.css                  # Main stylesheet (red theme + accessibility)
├── script.js                   # Main JavaScript (navigation, quick exit)
├── accessibility-widget.js     # Draggable accessibility widget
├── counter.js                  # Statistics counter functionality
└── README.md                   # This file
```

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended - Free)

1. **Push to GitHub** (if not already done):

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Domestic Violence Resources website"
   git branch -M main
   git remote add origin https://github.com/kendychae/domestic-violence-is-slavery.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://kendychae.github.io/domestic-violence-is-slavery/`

### Option 2: Netlify (Free, with custom domain support)

1. **Install Netlify CLI**:

   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:

   ```bash
   cd domestic-violence-is-slavery
   netlify deploy --prod
   ```

3. Or drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: Vercel (Free, automatic deployments)

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd domestic-violence-is-slavery
   vercel --prod
   ```

### Option 4: Traditional Web Hosting

1. Upload all files to your web host via FTP/SFTP
2. Ensure all files maintain their directory structure
3. Set `index.html` as the default document

## 🔧 Customization & Updates

### Updating Resources

To add or update resource information:

1. **Edit `resources.html`**:
   - Locate the appropriate section (National or Idaho)
   - Copy an existing `<article class="resource-card">` block
   - Update the information with new resource details
   - Verify all phone numbers and links are correct

```html
<article class="resource-card">
  <div class="resource-header">
    <h3>Organization Name</h3>
    <span class="badge">24/7</span>
  </div>
  <div class="resource-content">
    <p>
      <strong>Phone:</strong> <a href="tel:1-XXX-XXX-XXXX">1-XXX-XXX-XXXX</a>
    </p>
    <p>
      <strong>Website:</strong>
      <a href="https://example.org" target="_blank" rel="noopener noreferrer"
        >example.org</a
      >
    </p>
    <p class="resource-description">Description of services...</p>
  </div>
</article>
```

### Updating Statistics

Statistics are located in `stats.html`. To update:

1. Replace numbers in the stat cards
2. Update citation sources
3. **Counter Configuration** (in `counter.js`):
   ```javascript
   const TOTAL_ANNUAL_DEATHS = 1600; // Update with latest data
   const WOMEN_PERCENTAGE = 0.75; // Adjust based on research
   const MEN_PERCENTAGE = 0.25; // Adjust based on research
   ```

### Changing Colors

Edit `styles.css` to change the red theme:

```css
:root {
  --primary-red: #c41e3a; /* Main red color */
  --primary-red-dark: #8b0000; /* Darker red */
  --primary-red-light: #dc143c; /* Lighter red */
}
```

### Adding New Pages

1. Copy an existing HTML file as a template
2. Update the `<title>` and page content
3. Add navigation link to all pages:
   ```html
   <li><a href="newpage.html">New Page</a></li>
   ```

## 🎨 Accessibility Features

### Built-in Features

- **Draggable Accessibility Widget**:
  - Font size controls (increase/decrease)
  - High contrast toggle
  - Movable to any screen position
  - Settings persist across sessions

- **Keyboard Shortcuts**:
  - `Ctrl + Plus`: Increase font size
  - `Ctrl + Minus`: Decrease font size
  - `Ctrl + Alt + C`: Toggle high contrast
  - `ESC` (3 times quickly): Quick exit

- **Semantic HTML**: Proper heading hierarchy, ARIA labels
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Screen Reader Support**: Descriptive labels and announcements

### Testing Accessibility

- Use [WAVE Browser Extension](https://wave.webaim.org/extension/)
- Test with keyboard-only navigation
- Verify with screen readers (NVDA, JAWS, VoiceOver)
- Check color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 🛡️ Security & Privacy Considerations

### Built-in Privacy Features

1. **Quick Exit Button**:
   - Immediately redirects to Google
   - Replaces current page in browser history
   - ESC key 3x for emergency exit

2. **No Tracking**:
   - No analytics or tracking scripts
   - No cookies stored
   - No user data collected

3. **External Links**:
   - All external links use `target="_blank"` and `rel="noopener noreferrer"`
   - Prevents referrer leakage

### Important Safety Notes

- Remind users to:
  - Clear browser history after visiting
  - Use private/incognito mode
  - Consider using a safe device

## 📱 Browser Compatibility

Tested and compatible with:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO & Meta Tags

Each page includes:

- Descriptive meta descriptions
- Relevant keywords
- Mobile-friendly viewport settings
- Semantic HTML structure

To improve SEO:

1. Add `robots.txt` file
2. Create `sitemap.xml`
3. Submit to Google Search Console

## 🐛 Troubleshooting

### Counter Not Updating

- Check browser console for errors
- Verify `counter.js` is loaded on `stats.html`
- Clear browser cache

### Accessibility Widget Not Dragging

- Ensure JavaScript is enabled
- Check for console errors
- Try a different browser

### Styles Not Loading

- Verify `styles.css` is in the same directory as HTML files
- Check for typos in `<link>` tags
- Clear browser cache

## 📝 Maintenance Checklist

### Monthly

- [ ] Verify all phone numbers are still active
- [ ] Check all external links are working
- [ ] Review resource information for accuracy

### Quarterly

- [ ] Update statistics with latest CDC data
- [ ] Review and update content for accuracy
- [ ] Test accessibility features

### Annually

- [ ] Major statistics update
- [ ] Review all resource organizations
- [ ] Update copyright year in footer

## 📊 Analytics (Optional)

If you need analytics while respecting privacy:

1. **Recommended**: [Plausible Analytics](https://plausible.io/) (privacy-focused)
2. **Alternative**: [Fathom Analytics](https://usefathom.com/)

**DO NOT USE**: Google Analytics or similar tracking that could compromise user safety.

## 🤝 Contributing

To suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for public benefit. Feel free to use, modify, and distribute.

**Important**: Always verify any modified content with professionals and cite sources accurately.

## 📞 Important Resources (Quick Reference)

- **National Domestic Violence Hotline**: 1-800-799-7233
- **Crisis Text Line**: Text START to 88788
- **National Suicide Prevention Lifeline**: 988 or 1-800-273-8255
- **Emergency**: 911

## ⚠️ Disclaimer

This website is for informational purposes only and is not a substitute for professional help. If you or someone you know is in immediate danger, call 911 or local emergency services.

---

**Last Updated**: February 2026  
**Website URL**: https://kendychae.github.io/domestic-violence-is-slavery/ (when deployed)

For questions or issues, please open an issue on GitHub.
