import { parse as parseYaml } from 'yaml';

// --- Type definitions ---

export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  dateRead: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface CommentaryEntry {
  id: string;
  paperTitle: string;
  headline: string;
  body: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'read' | 'reading' | 'want';
  rating: number;
  review: string;
  content: string;
  tags: string[];
}

// --- Simple frontmatter parser (browser-compatible) ---

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }
  const [, frontmatterStr, content] = match;
  const data = parseYaml(frontmatterStr) as Record<string, unknown>;
  return { data, content };
}

// --- Raw markdown loading via Vite glob ---

const projectFiles = import.meta.glob('./projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const paperFiles = import.meta.glob('./papers/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const commentaryFiles = import.meta.glob('./commentary/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const bookFiles = import.meta.glob('./books/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

// --- Parsers ---

function parseProjects(): Project[] {
  return Object.entries(projectFiles)
    .map(([, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        id: data.id as string,
        title: data.title as string,
        description: content.split('\n').find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('---'))?.trim() ?? '',
        content,
        tags: (data.tags as string[]) ?? [],
        liveUrl: data.liveUrl as string | undefined,
        sourceUrl: data.sourceUrl as string | undefined,
        featured: (data.featured as boolean) ?? false,
      };
    })
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

function parsePapers(): Paper[] {
  return Object.entries(paperFiles)
    .map(([, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        id: data.id as string,
        title: data.title as string,
        authors: data.authors as string,
        venue: data.venue as string,
        year: data.year as number,
        dateRead: data.dateRead as string,
        summary: content.split('\n').find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('---'))?.trim() ?? '',
        content,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => b.year - a.year);
}

function parseCommentary(): CommentaryEntry[] {
  return Object.entries(commentaryFiles)
    .map(([, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        id: data.id as string,
        paperTitle: data.paperTitle as string,
        headline: data.headline as string,
        body: content.split('\n').find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('---'))?.trim() ?? '',
        content,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function parseBooks(): Book[] {
  const statusOrder: Record<string, number> = { reading: 0, read: 1, want: 2 };
  return Object.entries(bookFiles)
    .map(([, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        id: data.id as string,
        title: data.title as string,
        author: data.author as string,
        status: data.status as 'read' | 'reading' | 'want',
        rating: (data.rating as number) ?? 0,
        review: content.split('\n').find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('---'))?.trim() ?? '',
        content,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => (statusOrder[a.status] ?? 3) - (statusOrder[b.status] ?? 3));
}

// --- Exports ---

export const projects = parseProjects();
export const papers = parsePapers();
export const commentary = parseCommentary();
export const books = parseBooks();

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getPaper(id: string): Paper | undefined {
  return papers.find((p) => p.id === id);
}

export function getCommentary(id: string): CommentaryEntry | undefined {
  return commentary.find((c) => c.id === id);
}

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
