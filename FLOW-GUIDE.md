# Website Flow Guide

## 🎯 Complete User Journey

Your romantic website now has a beautiful multi-page flow with a countdown timer!

### The Flow:

```
1. Hello Page (/)
   ↓ [Click "Click to Begin" button]

2. Birthday Wishes (/birthday)
   ↓ [Click "Continue to Your Next Surprise" button]

3. Countdown Timer (/countdown)
   ↓ [Wait until Jan 15, 2026 OR enter password "forever"]

4. Anniversary Content (/anniversary)
   → Full anniversary experience with all sections
```

---

## 📄 Page Details

### 1️⃣ **Hello Page** (`/`)
**URL:** http://localhost:3000

**What it shows:**
- Beautiful animated greeting: "Hello, Beautiful"
- Romantic message: "I have something special prepared for you..."
- Single button: "Click to Begin"

**Customization:**
- Edit greeting text directly in `/app/page.tsx`
- Change colors, fonts, or animation timings

---

### 2️⃣ **Birthday Wishes** (`/birthday`)
**URL:** http://localhost:3000/birthday

**What it shows:**
- Birthday greeting header
- Date: January 15, 2025
- Full birthday message with wishes
- Button to continue to countdown

**Customization:**
- Edit content directly in `/app/birthday/page.tsx`
- Change the date (currently hardcoded as Jan 15, 2025)
- Modify the birthday message text

---

### 3️⃣ **Countdown Timer** (`/countdown`)
**URL:** http://localhost:3000/countdown

**What it shows:**
- Live countdown timer to **January 15, 2026**
- Days, Hours, Minutes, Seconds (updating every second)
- Password unlock option (initially hidden)

**Features:**
- ⏰ **Automatic redirect:** When January 15, 2026 arrives, automatically redirects to `/anniversary`
- 🔐 **Password unlock:** Click "Can't wait?" to reveal password input
- ✅ **Password:** `forever` (case-insensitive)
- ❌ **Wrong password:** Shows error message and clears input

**Customization:**
```typescript
// To change the target date, edit /app/countdown/page.tsx
const targetDate = new Date('2026-01-15T00:00:00');

// To change the password, edit this line:
if (password.toLowerCase() === 'forever') {
```

**Password Hint Displayed:** "Our promise to each other..."

---

### 4️⃣ **Anniversary Content** (`/anniversary`)
**URL:** http://localhost:3000/anniversary

**What it shows:**
All anniversary sections in order:
1. **Hero** - Romantic landing with title and quote
2. **Timeline** - 5-year journey with alternating card layout
3. **Letters** - 3 love letters with different moods
4. **Gallery** - Photo grid with 10 images
5. **Surprise** - Another surprise reveal (password: "forever")
6. **Closing** - Final heartfelt message

**Access:**
- Only accessible after countdown reaches target date
- OR by entering correct password on countdown page

---

## 🔐 Passwords Used

| Location | Password | Purpose |
|----------|----------|---------|
| Countdown page | `forever` | Unlock anniversary early |
| Surprise section (within anniversary) | `forever` | Reveal surprise message |

---

## ⏰ Countdown Timer Details

### Target Date
**January 15, 2026 at 00:00:00**

### How it Works
1. **Before Jan 15, 2026:**
   - Shows live countdown
   - Offers password bypass option
   - Updates every second

2. **On Jan 15, 2026:**
   - Automatically redirects to `/anniversary`
   - No password needed

3. **Password Bypass:**
   - Enter "forever" to access early
   - Instant redirect to anniversary page

### Countdown Display
- Large colorful boxes for each time unit
- Rose gradient colors (500, 400, 300, 200)
- Mobile responsive (2 columns on mobile, 4 on desktop)

---

## 🎨 Design Features

### Animations
- ✨ Fade-in and slide-up animations on all pages
- 🔄 Smooth transitions between states
- ⏱️ Staggered animation delays for elegant flow

### Color Palette
- **Primary:** Rose shades (#f43f5e, #fb7185, #fda4af)
- **Background:** Cream (#fef3e2) and rose tints
- **Text:** Dark (#292524) and warm gray (#78716c)

### Fonts
- **Titles:** Playfair Display (serif)
- **Handwriting:** Dancing Script (script)
- **Body:** Inter (sans-serif)

---

## 🛠️ Customization Guide

### Change Countdown Target Date
Edit `/app/countdown/page.tsx`:
```typescript
const targetDate = new Date('2026-01-15T00:00:00');
// Change to your desired date, e.g.:
// const targetDate = new Date('2025-12-31T23:59:59');
```

### Change Password
Edit `/app/countdown/page.tsx`:
```typescript
if (password.toLowerCase() === 'forever') {
  // Change 'forever' to your desired password
```

### Change Birthday Date
Edit `/app/birthday/page.tsx`:
```typescript
<p className="font-script text-2xl md:text-3xl text-warm-gray mb-8">
  January 15, 2025  {/* Change this date */}
</p>
```

### Customize Messages
- **Hello Page:** Edit `/app/page.tsx`
- **Birthday:** Edit `/app/birthday/page.tsx`
- **Countdown hint:** Edit `/app/countdown/page.tsx` (line with "Hint:")
- **Anniversary content:** Edit markdown files in `/content/`

---

## 🧪 Testing the Flow

### Test the Complete Journey
1. Visit http://localhost:3000
2. Click "Click to Begin" → Goes to `/birthday`
3. Click "Continue to Your Next Surprise" → Goes to `/countdown`
4. Click "Can't wait?" to reveal password input
5. Enter "forever" → Goes to `/anniversary`
6. Explore all anniversary sections

### Test Countdown
Since the target date is Jan 15, 2026 (future), you'll see:
- Days: ~400+ days
- Hours, Minutes, Seconds: Counting down in real-time

**To test immediate access:**
- Use the password "forever" on countdown page

---

## 📱 Mobile Responsive

All pages are fully responsive:
- **Mobile:** Single column layout, smaller text
- **Tablet:** Medium layout
- **Desktop:** Full layout with larger elements

Breakpoints:
- `md:` 768px (tablets)
- `lg:` 1024px (desktops)

---

## 🚀 Going Live

When you're ready to deploy:

1. **Update dates and content:**
   - Birthday date in `/app/birthday/page.tsx`
   - Anniversary date in `/app/countdown/page.tsx`
   - All personal messages and content

2. **Replace placeholder images:**
   - Add real photos to `/public/images/`
   - Update markdown files if changing image names

3. **Change passwords:**
   - Use a unique password instead of "forever"
   - Update in both countdown page and surprise section

4. **Build and deploy:**
   ```bash
   npm run build
   npm start
   ```

---

## 🎁 Special Features

### Auto-Redirect on Date
The countdown page checks every second:
- If current date >= Jan 15, 2026
- Automatically redirects to `/anniversary`
- No user action needed

### Password Protection
- Case-insensitive password check
- Error message for wrong password
- Smooth animations for reveal/hide

### Smooth Page Transitions
- Each button click navigates to next page
- Consistent animation style throughout
- Loading states handled automatically

---

## 💡 Pro Tips

1. **Test the countdown locally:**
   - Change target date to tomorrow to see auto-redirect
   - Change back before deploying

2. **Keep password secret:**
   - Don't share the password before the surprise
   - Consider changing it to something meaningful to you both

3. **Preview on mobile:**
   - Open dev server on phone to test mobile view
   - Use browser dev tools to simulate different devices

4. **Backup content:**
   - Keep a copy of all markdown files
   - Save your customizations before major changes

---

**Enjoy your beautiful romantic website journey! 💕**
