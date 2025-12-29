You are a senior Next.js engineer.

Context:
- A Next.js App Router project already exists.
- TypeScript is enabled.
- Tailwind CSS is already set up.
- The goal is to build a romantic 5-year anniversary + birthday website.
- ALL content must come from Markdown (.md) files.

Main Goal:
Implement a markdown-driven content system for an anniversary + birthday website.

--------------------------------------------------
CONTENT STRUCTURE
--------------------------------------------------

Create a `/content` folder with this structure:

/content
  /landing.md
  /timeline
    year-1.md
    year-2.md
    year-3.md
    year-4.md
    year-5.md
  /letters
    letter-1.md
    letter-2.md
    letter-3.md
  /gallery
    gallery.md
  /birthday
    birthday.md
  /surprise
    secret.md
  /closing
    closing.md

Each markdown file must support:
- Frontmatter (YAML)
- Markdown body content

--------------------------------------------------
MARKDOWN SCHEMAS
--------------------------------------------------

1. landing.md
Frontmatter:
- title
- subtitle
- backgroundMusic
- heroImage

Body:
- Intro paragraph
- Optional quote

2. timeline/year-X.md
Frontmatter:
- yearNumber
- title
- dateRange
- coverImage

Body:
- Short story of the year
- Bullet list of memories

3. letters/letter-X.md
Frontmatter:
- title
- date
- mood (romantic / emotional / playful)

Body:
- Full love letter text

4. gallery/gallery.md
Frontmatter:
- title

Body:
- List of image/video paths with captions

5. birthday/birthday.md
Frontmatter:
- title
- birthdayDate
- theme

Body:
- Birthday wish message
- Optional poem

6. surprise/secret.md
Frontmatter:
- unlockType (countdown | click | password)
- unlockValue

Body:
- Hidden message content

7. closing/closing.md
Frontmatter:
- signature
- date

Body:
- Final emotional message

--------------------------------------------------
IMPLEMENTATION REQUIREMENTS
--------------------------------------------------

1. Markdown Parsing
- Use `gray-matter` to parse frontmatter
- Use `remark` or `next-mdx-remote` for rendering
- Content should be statically generated (SSG)

2. Data Layer
- Create a `lib/content.ts` helper
- Functions like:
  - getLandingContent()
  - getTimelineYears()
  - getLetters()
  - getBirthdayContent()
  - getSurpriseContent()
  - getClosingContent()

3. Components
Create reusable components:
- <Hero />
- <Timeline />
- <TimelineCard />
- <Gallery />
- <LetterCard />
- <BirthdayCard />
- <SurpriseReveal />
- <ClosingMessage />

Each component must:
- Receive parsed MD data as props
- Be fully responsive
- Support animation hooks (Framer Motion ready)

4. Animations
- Add Framer Motion animations on scroll
- Soft fade, slide, and scale effects
- No over-animation, keep it emotional

5. Routing
- Main page `/` loads all MD content sections in order
- Optional dynamic routes:
  - /letters/[slug]
  - /timeline/[year]

6. Styling
- Romantic palette (soft pink, cream, warm gray)
- Handwritten-style font for letters
- Elegant serif font for titles

7. Code Quality
- Type-safe interfaces for frontmatter
- Clear folder structure
- Comments explaining markdown parsing
- No mock data in components

--------------------------------------------------
OUTPUT EXPECTATIONS
--------------------------------------------------

- Provide:
  - Folder structure
  - Example markdown files
  - content loader utilities
  - Component usage examples
  - Explanation comments where needed

Focus on:
- Emotional storytelling
- Clean architecture
- Maintainability
