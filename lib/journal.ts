import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const journalDirectory = path.join(process.cwd(), "data/journal");

export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  contentHtml: string;
  excerpt: string;
};

export type JournalListEntry = Omit<JournalEntry, "contentHtml">;

function makeExcerpt(markdown: string, maxLength = 155): string {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= maxLength) return plain;

  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

function readEntryFile(slug: string): {
  data: matter.GrayMatterFile<string>["data"];
  content: string;
} {
  const fullPath = path.join(journalDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getAllJournalSlugs(): string[] {
  if (!fs.existsSync(journalDirectory)) return [];
  return fs
    .readdirSync(journalDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllJournalEntries(): JournalListEntry[] {
  const slugs = getAllJournalSlugs();

  const entries = slugs.map((slug) => {
    const { data, content } = readEntryFile(slug);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: makeExcerpt(content),
    };
  });

  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getJournalEntry(slug: string): JournalEntry {
  const { data, content } = readEntryFile(slug);

  const processed = remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .processSync(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    contentHtml: processed.toString(),
    excerpt: makeExcerpt(content),
  };
}
