/**
 * Site Content Configuration
 * Edit all text content for the website in this file
 */

export const siteContent = {
  // ========== DATES ==========
  dates: {
    birthday: "January 2, 2025",
    anniversaryCountdown: "2026-01-15T00:00:00",
    anniversaryCountdownDisplay: "January 15, 2026",
    relationshipStart: "2021-01-15T00:00:00",
    relationshipStartDisplay: "January 15, 2021",
  },

  // ========== HOME PAGE ==========
  home: {
    title: "Hello, My Love ❤️",
    subtitle: "No distance could ever lessen what you mean to me.",
    description: "I made this with all my heart, just for you.",
    button: "Begin Our Story",
    footer: "Forever loving you, across every mile ❤️",
  },
  

  // ========== BIRTHDAY PAGE ==========
  birthday: {
    title: "Happy Birthday, My Love ❤️🎂",
    subtitle: "To the One Who Holds My Heart",
    paragraph1:
      "Happy birthday, my Babe. Even miles apart, my heart is right beside you today. You are my favorite person, my safest place, my greatest blessing.",
    paragraph2:
      "Distance has never weakened us—it has only proven how real our love is. Every call, every message, every moment missing you reminds me that you are worth everything.",
    wishesTitle: "My Wishes for You",
    wishes: [
      "❄️💕 Endless happiness and gentle days",
      "❄️💕 A love that always feels safe and warm",
      "❄️💕 A future where distance is only a memory",
      "❄️💕 Smiles that come easily, every day",
      "❄️💕 Knowing you are deeply, endlessly loved",
    ],
    paragraph3:
      "One day, I’ll celebrate your birthday holding you instead of missing you. Until then, my love is already there with you.",
    closingMessage:
      "Happy Birthday, my love. My heart is yours—today and always.",
    closingQuote:
      "Love travels any distance when it’s real.",
    signature:
      "Always yours, across every mile ❤️❄️",
    button: "Your Next Surprise",
  },
  

  // ========== COUNTDOWN PAGE ==========
  countdown: {
    title: "Our 5-Year Anniversary",
    subtitle: "Counting down to January 15, 2026",
    quote: "The wait will be worth it... ❤️",
    toggleButton: {
      show: "Can't wait? Enter password to unlock early",
      hide: "Hide password option",
    },
    passwordSection: {
      title: "Enter Secret Password",
      placeholder: "Enter password...",
      button: "Unlock Anniversary",
      hint: "Hint: Our promise to each other...",
      error: "Incorrect password. Try again!",
      password: "forever",
    },
  },

  // ========== ANNIVERSARY PAGE ==========
  anniversary: {
    // ========== HERO / LANDING ==========
    hero: {
      title: "Five Years With You ❄️💕",
      subtitle: "A love that distance could never break",
      heroImage: "/images/hero.svg",
      content: `<p>You have been my constant, my comfort, my home—no matter the miles. This is my love letter to you, written through five unforgettable years.</p>
    <p>You’ve never been far from my heart. You are my everything.</p>
    <blockquote>
    <p>"Distance fades when love is this deep."</p>
    <p>You are my forever. ❤️❄️</p>
    </blockquote>`,
    },
    

    // ========== TIMELINE ==========
    timeline: {
      title: "Our Journey Together",
      years: [
        {
          yearNumber: 1,
          title: "The Beginning",
          dateRange: "2020 - 2021",
          coverImage: "/images/year-1.svg",
          content: `<p>Our first year was magical. From awkward first dates to late-night conversations that lasted until sunrise, we discovered each other piece by piece.</p>
<p><strong>Unforgettable Moments:</strong></p>
<ul>
<li>Our first kiss under the stars at the park</li>
<li>That rainy weekend we spent indoors watching movies and laughing until our sides hurt</li>
<li>The spontaneous road trip where we got lost but found each other even more</li>
<li>Your smile when I surprised you with breakfast in bed</li>
<li>Dancing in the kitchen at midnight to our favorite songs</li>
</ul>`,
        },
        {
          yearNumber: 2,
          title: "Growing Together",
          dateRange: "2021 - 2022",
          coverImage: "/images/year-2.svg",
          content: `<p>Year two brought us closer than ever. We learned that love isn't just about the grand gestures—it's in the quiet moments, the shared silences, and the comfort of being truly known.</p>
<p><strong>Cherished Memories:</strong></p>
<ul>
<li>Moving in together and making our first home</li>
<li>Learning to cook your favorite dishes (even if some were disasters!)</li>
<li>That amazing vacation where we explored new places hand in hand</li>
<li>Supporting each other through challenges and celebrating victories together</li>
<li>Building traditions that are uniquely ours</li>
</ul>`,
        },
        {
          yearNumber: 3,
          title: "Finding Our Rhythm",
          dateRange: "2022 - 2023",
          coverImage: "/images/year-3.svg",
          content: `<p>By year three, we had found our rhythm. We knew each other's quirks, finished each other's sentences, and loved each other even more deeply than before.</p>
<p><strong>Beautiful Highlights:</strong></p>
<ul>
<li>That perfect summer evening picnic watching the sunset</li>
<li>Adopting our first plant (or pet!) together and becoming "parents"</li>
<li>All the lazy Sunday mornings with coffee and conversation</li>
<li>Your support when I needed it most—you're my rock</li>
<li>Creating a life that feels like home, wherever we are</li>
</ul>`,
        },
        {
          yearNumber: 4,
          title: "Deeper Roots",
          dateRange: "2023 - 2024",
          coverImage: "/images/year-4.svg",
          content: `<p>Year four was about putting down deeper roots. Our love matured into something steady and unshakeable, a foundation we can build our dreams upon.</p>
<p><strong>Meaningful Moments:</strong></p>
<ul>
<li>That heartfelt conversation where we planned our future together</li>
<li>Celebrating milestones and achievements, big and small</li>
<li>Adventures that pushed us out of our comfort zones</li>
<li>The quiet strength of your hand in mine during difficult times</li>
<li>Realizing that every day with you is a gift I never take for granted</li>
</ul>`,
        },
        {
          yearNumber: 5,
          title: "Forever Begins",
          dateRange: "2024 - 2025",
          coverImage: "/images/year-5.svg",
          content: `<p>Five years together, and I love you more today than I did yesterday. This year represents not just where we've been, but all the beautiful tomorrows stretching out before us.</p>
<p><strong>This Year's Magic:</strong></p>
<ul>
<li>Every single day I get to wake up next to you</li>
<li>The way you still make my heart skip a beat with just a smile</li>
<li>All the inside jokes and shared memories that are ours alone</li>
<li>Knowing that no matter what comes, we'll face it together</li>
<li>Looking forward to forever with my best friend, my partner, my love</li>
</ul>`,
        },
      ],
    },

    // ========== LETTERS ==========
    letters: {
      title: "A Letter to My Babe 💌",
      letter: {
        title: "Across the Miles, My Heart is Yours",
        date: "2025-01-15",
        mood: "emotional",
        content: `<p>My Babe,</p>
        <p>The miles between us have never mattered—because my heart has always been with you. Loving you from afar has only shown me how strong, rare, and real our love is.</p>
        <p>I miss your presence, your touch, your laughter—but what distance can’t steal is my certainty: you are my person.</p>
        <p>I promise you patience, devotion, and a love that only grows stronger with time. One day, distance will no longer exist—only us.</p>
        <p>You are my first thought, my last thought, and my forever.</p>
        <p><strong>I love you—completely, endlessly, always.</strong></p>
        <p><strong>Forever yours ❤️❄️</strong></p>`,
        
      },
    },

    // ========== GALLERY ==========
    gallery: {
      title: "Our Journey in Pictures",
      subtitle: "Moments captured, memories cherished",
      footer: "Each photo tells a story. Each story is about us.",
      images: [
        {
          path: "/images/gallery/first-date.svg",
          caption: "Our very first photo together—nervous smiles and all",
        },
        {
          path: "/images/gallery/adventure-1.svg",
          caption: "That epic hiking trip where we conquered the mountain",
        },
        {
          path: "/images/gallery/cozy-night.svg",
          caption: "Movie night at home, my favorite place to be",
        },
        {
          path: "/images/gallery/celebration.svg",
          caption: "Celebrating your big achievement—so proud of you!",
        },
        {
          path: "/images/gallery/travel-1.svg",
          caption: "Exploring new cities and making memories",
        },
        {
          path: "/images/gallery/candid-laugh.svg",
          caption: "When I caught you mid-laugh—pure joy",
        },
        {
          path: "/images/gallery/sunset.svg",
          caption: "Watching the sunset together, hand in hand",
        },
        {
          path: "/images/gallery/silly-moment.svg",
          caption: "Being absolutely ridiculous together (as usual)",
        },
        {
          path: "/images/gallery/anniversary.svg",
          caption: "Celebrating us—year after year",
        },
        {
          path: "/images/gallery/everyday-love.svg",
          caption: "The everyday moments that mean everything",
        },
      ],
    },

    // ========== INFINITY COUNTER ==========
    infinityCounter: {
      title: "Our Journey Continues ∞",
      subtitle: "Time elapsed since we started this beautiful journey",
      dateRange: "January 15, 2021 - Forever",
      labels: {
        years: "Years",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      quote: "Every second with you is a treasure ❤️❄️",
      footer: "And our story continues to unfold, one heartbeat at a time...",
    },

    // ========== CLOSING ==========
    closing: {
      signature: "Hein Htet",
      date: "2025-01-15",
      content: `<h2>Until We’re Together Again</h2>
    <p>Five years of loving you has taught me one truth—real love knows no distance.</p>
    <p>The miles are temporary. My love for you is not.</p>
    <p><strong>Happy 5 Years, my love.</strong></p>
    <p><strong>Forever and always ❤️❄️</strong></p>`,
    },    
  },

  // ========== METADATA ==========
  metadata: {
    title: "Five Years of Us - Anniversary & Birthday",
    description:
      "A romantic journey through five years of love, laughter, and endless memories",
  },
};

// Helper function to get birthday date
export const getBirthdayDate = () => siteContent.dates.birthday;

// Helper function to get anniversary countdown date
export const getAnniversaryCountdownDate = () => siteContent.dates.anniversaryCountdown;

// Helper function to get relationship start date
export const getRelationshipStartDate = () => siteContent.dates.relationshipStart;

// Helper function to get password
export const getPassword = () => siteContent.countdown.passwordSection.password;
