import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InlineLink from "@/components/InlineLink";
import {
  formatJournalDate,
  getAllJournalEntries,
  getAllJournalSlugs,
  getJournalEntry,
  type JournalListEntry,
} from "@/lib/journal";

type Props = { params: Promise<{ slug: string }> };

function entryExists(slug: string): boolean {
  return getAllJournalSlugs().includes(slug);
}

export function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!entryExists(slug)) return {};

  const entry = getJournalEntry(slug);

  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: {
      canonical: `/jurnal/${entry.slug}`,
    },
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      type: "article",
      publishedTime: entry.date,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.excerpt,
    },
  };
}

function AdjacentEntryLink({
  entry,
  label,
  direction,
}: {
  entry: JournalListEntry | null;
  label: string;
  direction: "older" | "newer";
}) {
  return (
    <div className={direction === "newer" ? "text-right" : undefined}>
      {entry ? (
        <>
          <p className="text-ink/50 text-xs tracking-wide uppercase">{label}</p>
          <InlineLink href={`/jurnal/${entry.slug}`}>
            <span className="text-sm">
              {direction === "older" ? `← ${entry.title}` : `${entry.title} →`}
            </span>
          </InlineLink>
        </>
      ) : null}
    </div>
  );
}

export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params;
  if (!entryExists(slug)) notFound();

  const entry = getJournalEntry(slug);
  const allEntries = getAllJournalEntries();
  const currentIndex = allEntries.findIndex((e) => e.slug === slug);
  const newerEntry = allEntries[currentIndex - 1] ?? null;
  const olderEntry = allEntries[currentIndex + 1] ?? null;

  return (
    <>
      <InlineLink href="/jurnal">← Semua tulisan</InlineLink>

      <h1 className="mt-6 mb-1 text-2xl font-normal">{entry.title}</h1>
      <p className="text-ink/60 text-sm">{formatJournalDate(entry.date)}</p>

      <div
        className="journal-content mt-8"
        dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
      />

      {(olderEntry || newerEntry) && (
        <nav className="border-ink/10 mt-12 grid grid-cols-2 gap-4 border-t pt-6">
          <AdjacentEntryLink
            entry={olderEntry}
            label="Jurnal sebelumnya"
            direction="older"
          />
          <AdjacentEntryLink
            entry={newerEntry}
            label="Jurnal selanjutnya"
            direction="newer"
          />
        </nav>
      )}
    </>
  );
}
