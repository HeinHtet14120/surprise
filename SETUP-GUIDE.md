# Anniversary & Birthday Website - Setup Guide

## 🎉 Your romantic website is ready!

The markdown-driven anniversary + birthday website has been successfully implemented with all core features and dynamic routes.

## ✅ What's Been Implemented

### 1. **Content System**
- ✓ Markdown-driven content in `/content` folder
- ✓ All placeholder markdown files created with example content
- ✓ Type-safe content loading with TypeScript
- ✓ Automatic markdown-to-HTML conversion

### 2. **Components Built**
- ✓ Hero section with landing page
- ✓ Timeline (5 years with alternating card layout)
- ✓ Love Letters section (3 letters with mood-based styling)
- ✓ Gallery with image grid
- ✓ Birthday celebration section
- ✓ Surprise reveal (supports password, click, and countdown unlocks)
- ✓ Closing message section

### 3. **Dynamic Routes**
- ✓ `/letters/[slug]` - Individual letter pages
- ✓ `/timeline/[year]` - Individual year pages

### 4. **Styling & Animations**
- ✓ Romantic color palette (rose, cream, warm gray)
- ✓ Three beautiful fonts:
  - **Playfair Display** for elegant titles
  - **Dancing Script** for handwritten letters
  - **Inter** for readable body text
- ✓ Framer Motion scroll animations
- ✓ Fully responsive design

## 📝 Next Steps - Personalize Your Website

### Step 1: Add Your Photos

Create an `/public/images` folder and add your photos:

```
/public/images/
├── hero.jpg                    # Hero background image
├── year-1.jpg to year-5.jpg   # Timeline year photos
└── gallery/
    ├── first-date.jpg
    ├── adventure-1.jpg
    ├── cozy-night.jpg
    └── ... (add all your gallery photos)
```

**Image Size Recommendations:**
- Hero image: 1920x1080px (landscape)
- Year cover images: 1200x800px (landscape)
- Gallery images: 1000x1000px (square)

### Step 2: Customize the Markdown Content

Edit the markdown files in `/content` to personalize with your story:

1. **`/content/landing.md`** - Update title, subtitle, and intro message
2. **`/content/timeline/year-*.md`** - Replace with your actual memories for each year
3. **`/content/letters/letter-*.md`** - Write your real love letters
4. **`/content/gallery/gallery.md`** - Update image paths and captions
5. **`/content/birthday/birthday.md`** - Personalize the birthday message
6. **`/content/surprise/secret.md`** - Add your actual surprise message
7. **`/content/closing/closing.md`** - Write your final heartfelt message

### Step 3: Configure the Surprise Unlock

In `/content/surprise/secret.md`, you can choose one of three unlock types:

**Option 1: Password**
```yaml
unlockType: "password"
unlockValue: "yourpassword"  # Change to your secret word
```

**Option 2: Simple Click**
```yaml
unlockType: "click"
unlockValue: ""
```

**Option 3: Countdown Timer**
```yaml
unlockType: "countdown"
unlockValue: "2025-02-14T00:00:00"  # Your special date
```

### Step 4: Update Metadata

Edit `/app/layout.tsx` to update the site title and description:

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description",
};
```

## 🚀 Running the Website

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
birthdaycard/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Main page (all sections)
│   ├── globals.css             # Tailwind theme
│   ├── letters/[slug]/         # Individual letter pages
│   └── timeline/[year]/        # Individual year pages
├── components/
│   ├── sections/               # Hero, Timeline, Letters, etc.
│   ├── ui/                     # Reusable components
│   └── layout/                 # Container, Section
├── content/
│   ├── landing.md
│   ├── timeline/
│   ├── letters/
│   ├── gallery/
│   ├── birthday/
│   ├── surprise/
│   └── closing/
├── lib/
│   └── content.ts              # Markdown loaders
└── types/
    └── content.ts              # TypeScript interfaces
```

## 🎨 Customization Tips

### Change Colors
Edit `/app/globals.css` to change the romantic color palette:

```css
:root {
  --color-rose-500: #f43f5e;  /* Main accent color */
  --color-cream: #fef3e2;     /* Background */
  --color-warm-gray: #78716c; /* Secondary text */
}
```

### Add More Letters or Years
1. Create new markdown files in the appropriate folder
2. The content loader will automatically pick them up
3. Run `npm run build` to regenerate static pages

### Modify Animations
Edit the Framer Motion settings in component files:
- Duration: `transition={{ duration: 0.6 }}`
- Delay: `delay={0.2}`
- Animation type: `initial`, `animate`, `whileInView`

## 🔧 Troubleshooting

### Images not showing?
- Make sure images are in `/public/images/`
- Update markdown files with correct paths (e.g., `/images/hero.jpg`)
- Image paths should start with `/` to reference the public folder

### Build errors?
- Run `npm run build` to see detailed error messages
- Check that all markdown files have valid YAML frontmatter
- Ensure all required frontmatter fields are present

### Fonts not loading?
- Fonts are loaded from Google Fonts automatically
- Make sure you have internet connection during development

## 🌟 Features Overview

### Current Features ✅
- Markdown-driven content
- Romantic design with 3 custom fonts
- Scroll animations
- Responsive design
- Dynamic routes for letters and timeline
- 3 unlock mechanisms for surprise reveal
- Static site generation (SSG) for fast loading

### Optional Future Enhancements 💡
- Add a music player for background music
- Create a photo lightbox for gallery
- Add smooth scroll navigation
- Include a guest book or comments section
- Add social sharing capabilities

## 📧 Support

If you encounter any issues or need help customizing:
1. Check the markdown file frontmatter syntax
2. Verify image paths in `/public/images/`
3. Review the browser console for errors
4. Run `npm run build` to catch build-time errors

---

**Enjoy creating your beautiful romantic website! 💕**
