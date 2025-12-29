# Customization Guide

## 🔐 **Password Information**

**Password:** `forever`

**Where it's used:**
1. **Countdown page** (`/countdown`) - Unlock anniversary early
2. **Surprise section** (within `/anniversary`) - Reveal surprise message

**To change the password:**
1. Edit `/app/countdown/page.tsx` - Line ~52:
   ```typescript
   if (password.toLowerCase() === 'forever') {
   //                            ^^^^^^^ Change this
   ```

2. Edit `/content/surprise/secret.md` - Frontmatter:
   ```yaml
   unlockValue: "forever"
   #            ^^^^^^^ Change this too
   ```

---

## 💌 **Customizing Love Letters**

### **Letter Files Location**
```
/content/letters/
├── letter-1.md
├── letter-2.md
└── letter-3.md
```

### **Letter Structure**

Each letter has two parts:

#### **1. Frontmatter (YAML)**
```yaml
---
title: "Your Letter Title"
date: "2024-01-15"
mood: "romantic"  # Options: romantic, emotional, playful
---
```

**Mood Options:**
- `romantic` - Rose/pink background
- `emotional` - Purple background
- `playful` - Yellow background

#### **2. Letter Content (Markdown)**
Everything after `---` is your letter text.

---

### **Example: Customize Letter 1**

**Current content:**
```markdown
---
title: "To My Forever Love"
date: "2024-01-15"
mood: "romantic"
---

My Dearest,

As I sit here writing this, I'm overwhelmed by how lucky I am...
```

**Your customized version:**
```markdown
---
title: "Five Years of Magic"
date: "2025-01-15"
mood: "romantic"
---

My Beautiful [Her Name],

I still remember the day we met like it was yesterday. You walked into my life and everything changed. These five years have been the best of my life.

**What I love about you:**
- Your smile lights up my world
- Your laugh is my favorite sound
- Your kindness inspires me every day
- Your strength amazes me constantly

I can't wait for all our tomorrows.

All my love,
[Your Name]
```

---

### **How to Edit Letters**

#### **Option 1: Using a Text Editor**
1. Open `/content/letters/letter-1.md` in any text editor
2. Change the title, date, and mood
3. Rewrite the letter content
4. Save the file
5. Refresh your browser - changes appear instantly!

#### **Option 2: Using Claude Code**
Ask me to edit specific letters with your content!

**Example:**
"Change letter-1 to say [your message]"
"Update letter-2's mood to playful"

---

### **Letter Ideas**

#### **Romantic Letter**
```markdown
---
title: "You Are My Everything"
date: "2024-06-15"
mood: "romantic"
---

My Love,

Every moment with you is a treasure. You make ordinary days extraordinary just by being in them.

I love:
- The way you look at me
- How you make me laugh
- Your beautiful heart
- Everything about you

Forever yours,
Me
```

#### **Playful Letter**
```markdown
---
title: "Top 10 Reasons I'm Obsessed With You"
date: "2024-09-20"
mood: "playful"
---

Hey Beautiful!

In no particular order (okay, maybe a little):

1. You tolerate my terrible jokes
2. You're the best adventure partner
3. Your dance moves (even the embarrassing ones)
4. How you steal my hoodies
5. Your midnight snack raids
6. That thing you do when you're concentrating
7. Your competitive streak at games
8. How you sing in the shower
9. Your random facts at 2am
10. Simply being YOU

Love you, dork!
Your favorite person
```

#### **Emotional Letter**
```markdown
---
title: "Through It All"
date: "2024-11-10"
mood: "emotional"
---

My Dearest,

This year has taught me what real love means. It's not just about the happy moments—it's about standing together through everything.

When things got hard, you didn't run. You held my hand. You reminded me of my strength. You loved me even when I didn't love myself.

That's the kind of love that lasts forever. That's us.

Thank you for being my safe place, my home, my everything.

I'm so grateful for you.

Always,
Your person
```

---

## 🎨 **Changing Header Fonts**

### **Current Fonts**
- **Headers (Serif):** Playfair Display
- **Handwriting (Script):** Dancing Script
- **Body (Sans):** Inter

### **Where to Change Fonts**

Edit `/app/layout.tsx`:

```typescript
import { Playfair_Display, Dancing_Script, Inter } from 'next/font/google';

// Change these font imports:
const playfair = Playfair_Display({  // ← Header font
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({  // ← Script/letter font
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({  // ← Body text font
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

---

### **Popular Google Font Alternatives**

#### **Elegant Serif Headers**
Replace `Playfair_Display` with:

**Option 1: Cormorant Garamond** (More delicate)
```typescript
import { Cormorant_Garamond } from 'next/font/google';

const serif = Cormorant_Garamond({
  variable: "--font-playfair",
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  display: "swap",
});
```

**Option 2: Crimson Text** (Classic and romantic)
```typescript
import { Crimson_Text } from 'next/font/google';

const serif = Crimson_Text({
  variable: "--font-playfair",
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  display: "swap",
});
```

**Option 3: Lora** (Modern serif)
```typescript
import { Lora } from 'next/font/google';

const serif = Lora({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});
```

---

#### **Handwritten Script Fonts**
Replace `Dancing_Script` with:

**Option 1: Great Vibes** (More elegant)
```typescript
import { Great_Vibes } from 'next/font/google';

const script = Great_Vibes({
  variable: "--font-dancing",
  weight: '400',
  subsets: ["latin"],
  display: "swap",
});
```

**Option 2: Parisienne** (French-inspired)
```typescript
import { Parisienne } from 'next/font/google';

const script = Parisienne({
  variable: "--font-dancing",
  weight: '400',
  subsets: ["latin"],
  display: "swap",
});
```

**Option 3: Sacramento** (Flowing script)
```typescript
import { Sacramento } from 'next/font/google';

const script = Sacramento({
  variable: "--font-dancing",
  weight: '400',
  subsets: ["latin"],
  display: "swap",
});
```

---

#### **Body Text Fonts**
Replace `Inter` with:

**Option 1: Open Sans** (Very readable)
```typescript
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

**Option 2: Poppins** (Modern and friendly)
```typescript
import { Poppins } from 'next/font/google';

const sans = Poppins({
  variable: "--font-inter",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: "swap",
});
```

---

### **Complete Font Change Example**

**Current (in `/app/layout.tsx`):**
```typescript
import { Playfair_Display, Dancing_Script, Inter } from 'next/font/google';
```

**New (more elegant):**
```typescript
import { Cormorant_Garamond, Great_Vibes, Open_Sans } from 'next/font/google';

const serif = Cormorant_Garamond({
  variable: "--font-playfair",
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-dancing",
  weight: '400',
  subsets: ["latin"],
  display: "swap",
});

const sans = Open_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

**Then update the variable names in the return statement:**
```typescript
<body
  className={`${serif.variable} ${script.variable} ${sans.variable} antialiased`}
>
```

---

## 🎯 **Quick Customization Checklist**

### **Personal Content**
- [ ] Change password (if desired)
- [ ] Edit letter-1.md with your personal message
- [ ] Edit letter-2.md with your personal message
- [ ] Edit letter-3.md with your personal message
- [ ] Update dates in all letters
- [ ] Choose appropriate moods for each letter

### **Styling**
- [ ] Change header font (optional)
- [ ] Change script font (optional)
- [ ] Change body font (optional)
- [ ] Test new fonts on mobile

### **Other Content**
- [ ] Update birthday date in `/app/birthday/page.tsx`
- [ ] Update anniversary date in `/app/countdown/page.tsx`
- [ ] Edit `/content/landing.md` for hero message
- [ ] Edit `/content/timeline/*.md` for your story
- [ ] Edit `/content/birthday/birthday.md`
- [ ] Edit `/content/surprise/secret.md` with your surprise
- [ ] Edit `/content/closing/closing.md` with final message

---

## 💡 **Pro Tips**

### **Writing Great Love Letters**

1. **Be Specific**
   - ❌ "I love you"
   - ✅ "I love the way you scrunch your nose when you laugh"

2. **Share Memories**
   - Include specific moments you cherish
   - Reference inside jokes

3. **Express Gratitude**
   - Thank them for specific things
   - Acknowledge their impact on your life

4. **Be Vulnerable**
   - Share your feelings honestly
   - Don't be afraid to be emotional

5. **Look Forward**
   - Talk about future dreams together
   - Express excitement for what's ahead

### **Font Pairing Tips**

**Good Combinations:**
- Serif header + Script letters + Sans body (current setup)
- Elegant serif + Simple script + Readable sans
- Bold serif + Flowing script + Light sans

**Avoid:**
- Two similar fonts (confusing)
- Three scripts (hard to read)
- Fonts that clash in style

---

## 🚀 **How to Apply Changes**

### **After editing letters:**
1. Save the markdown file
2. Refresh browser - changes appear instantly!
3. No build needed for content changes

### **After changing fonts:**
1. Save `layout.tsx`
2. Wait for hot reload (auto-refresh)
3. If needed, restart dev server: `npm run dev`

---

## 📝 **Need Help?**

**Common requests:**
- "Edit letter-1 to say [your message]"
- "Change to [font name] for headers"
- "Update the password to [new password]"
- "Make letter-2 more playful"

Just ask and I'll help you customize! 💕
