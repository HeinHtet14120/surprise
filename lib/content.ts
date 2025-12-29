import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type {
  ContentData,
  LandingFrontmatter,
  TimelineFrontmatter,
  LetterFrontmatter,
  GalleryFrontmatter,
  BirthdayFrontmatter,
  SurpriseFrontmatter,
  ClosingFrontmatter,
} from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Generic markdown file loader
 * Reads a markdown file, parses frontmatter, and converts content to HTML
 */
async function loadMarkdownFile<T>(
  filePath: string
): Promise<ContentData<T>> {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);

  const htmlContent = processedContent.toString();

  const slug = path.basename(filePath, '.md');

  return {
    frontmatter: data as T,
    content,
    htmlContent,
    slug
  };
}

/**
 * Get landing page content
 */
export async function getLandingContent(): Promise<ContentData<LandingFrontmatter>> {
  return loadMarkdownFile<LandingFrontmatter>('landing.md');
}

/**
 * Get all timeline years (1-5) sorted by year number
 */
export async function getTimelineYears(): Promise<ContentData<TimelineFrontmatter>[]> {
  const years = await Promise.all([
    loadMarkdownFile<TimelineFrontmatter>('timeline/year-1.md'),
    loadMarkdownFile<TimelineFrontmatter>('timeline/year-2.md'),
    loadMarkdownFile<TimelineFrontmatter>('timeline/year-3.md'),
    loadMarkdownFile<TimelineFrontmatter>('timeline/year-4.md'),
    loadMarkdownFile<TimelineFrontmatter>('timeline/year-5.md'),
  ]);

  // Sort by year number
  return years.sort((a, b) =>
    a.frontmatter.yearNumber - b.frontmatter.yearNumber
  );
}

/**
 * Get single timeline year by number
 */
export async function getTimelineYear(yearNum: number): Promise<ContentData<TimelineFrontmatter>> {
  return loadMarkdownFile<TimelineFrontmatter>(`timeline/year-${yearNum}.md`);
}

/**
 * Get all letters sorted by date
 */
export async function getLetters(): Promise<ContentData<LetterFrontmatter>[]> {
  const letterFiles = fs.readdirSync(
    path.join(contentDirectory, 'letters')
  );

  const letters = await Promise.all(
    letterFiles
      .filter(file => file.endsWith('.md'))
      .map(file => loadMarkdownFile<LetterFrontmatter>(`letters/${file}`))
  );

  // Sort by date
  return letters.sort((a, b) =>
    new Date(a.frontmatter.date).getTime() -
    new Date(b.frontmatter.date).getTime()
  );
}

/**
 * Get single letter by slug
 */
export async function getLetter(slug: string): Promise<ContentData<LetterFrontmatter>> {
  return loadMarkdownFile<LetterFrontmatter>(`letters/${slug}.md`);
}

/**
 * Get gallery content
 */
export async function getGalleryContent(): Promise<ContentData<GalleryFrontmatter>> {
  return loadMarkdownFile<GalleryFrontmatter>('gallery/gallery.md');
}

/**
 * Get birthday content
 */
export async function getBirthdayContent(): Promise<ContentData<BirthdayFrontmatter>> {
  return loadMarkdownFile<BirthdayFrontmatter>('birthday/birthday.md');
}

/**
 * Get surprise content
 */
export async function getSurpriseContent(): Promise<ContentData<SurpriseFrontmatter>> {
  return loadMarkdownFile<SurpriseFrontmatter>('surprise/secret.md');
}

/**
 * Get closing message content
 */
export async function getClosingContent(): Promise<ContentData<ClosingFrontmatter>> {
  return loadMarkdownFile<ClosingFrontmatter>('closing/closing.md');
}
