// Landing page frontmatter
export interface LandingFrontmatter {
  title: string;
  subtitle: string;
  backgroundMusic?: string;
  heroImage: string;
}

// Timeline year frontmatter
export interface TimelineFrontmatter {
  yearNumber: number;
  title: string;
  dateRange: string;
  coverImage: string;
}

// Love letter frontmatter
export interface LetterFrontmatter {
  title: string;
  date: string;
  mood: 'romantic' | 'emotional' | 'playful';
}

// Gallery frontmatter
export interface GalleryFrontmatter {
  title: string;
}

export interface GalleryImage {
  path: string;
  caption: string;
  type: 'image' | 'video';
}

// Birthday frontmatter
export interface BirthdayFrontmatter {
  title: string;
  birthdayDate: string;
  theme: string;
}

// Surprise frontmatter
export interface SurpriseFrontmatter {
  unlockType: 'countdown' | 'click' | 'password';
  unlockValue: string | number;
}

// Closing frontmatter
export interface ClosingFrontmatter {
  signature: string;
  date: string;
}

// Generic content structure
export interface ContentData<T> {
  frontmatter: T;
  content: string;
  htmlContent: string;
  slug: string;
}
