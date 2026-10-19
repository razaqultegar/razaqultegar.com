import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

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

export function formatJournalDate(date: string): string {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readEntryFile(
  slug: string,
): Pick<JournalEntry, "title" | "date"> & { content: string } {
  const fullPath = path.join(journalDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { title: data.title as string, date: data.date as string, content };
}

export function getAllJournalSlugs(): string[] {
  if (!fs.existsSync(journalDirectory)) return [];
  return fs
    .readdirSync(journalDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllJournalEntries(): JournalListEntry[] {
  const entries = getAllJournalSlugs().map((slug) => {
    const { title, date, content } = readEntryFile(slug);
    return { slug, title, date, excerpt: makeExcerpt(content) };
  });

  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

const LANGUAGE_LABELS: Record<string, string> = {
  ts: "TypeScript",
  tsx: "TypeScript",
  js: "JavaScript",
  jsx: "JavaScript",
  bash: "Bash",
  sh: "Shell",
  shell: "Shell",
  zsh: "Zsh",
  json: "JSON",
  yaml: "YAML",
  yml: "YAML",
  css: "CSS",
  html: "HTML",
  md: "Markdown",
  markdown: "Markdown",
  py: "Python",
  python: "Python",
  go: "Go",
  rb: "Ruby",
  ruby: "Ruby",
  rs: "Rust",
  java: "Java",
  c: "C",
  cpp: "C++",
  "c++": "C++",
  cs: "C#",
  csharp: "C#",
  php: "PHP",
  sql: "SQL",
  graphql: "GraphQL",
  swift: "Swift",
  kotlin: "Kotlin",
  txt: "Text",
  plaintext: "Text",
  diff: "Diff",
};

function getLanguageLabel(language: string): string {
  const normalized = language.toLowerCase();
  return (
    LANGUAGE_LABELS[normalized] ??
    normalized.charAt(0).toUpperCase() + normalized.slice(1)
  );
}

function isElement(node: unknown, tagName: string): node is Element {
  return (
    typeof node === "object" &&
    node !== null &&
    (node as Element).type === "element" &&
    (node as Element).tagName === tagName
  );
}

function rehypeCodeLanguageBadge() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (!isElement(node, "pre")) return;

      const code = node.children.find((child): child is Element =>
        isElement(child, "code"),
      );
      if (!code) return;

      const className = code.properties?.className;
      const classNames = Array.isArray(className) ? className : [];
      const languageClass = classNames.find(
        (name): name is string =>
          typeof name === "string" && name.startsWith("language-"),
      );
      if (!languageClass) return;

      node.properties = {
        ...node.properties,
        dataLang: getLanguageLabel(languageClass.replace("language-", "")),
      };
    });
  };
}

export function getJournalEntry(slug: string): JournalEntry {
  const { title, date, content } = readEntryFile(slug);

  const processed = remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeCodeLanguageBadge)
    .use(rehypeStringify)
    .processSync(content);

  return {
    slug,
    title,
    date,
    contentHtml: processed.toString(),
    excerpt: makeExcerpt(content),
  };
}
