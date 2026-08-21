import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InlineLink from "@/components/InlineLink";
import {
  getAllJournalEntries,
  getAllJournalSlugs,
  getJournalEntry,
} from "@/lib/journal";

export function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getAllJournalSlugs();
  if (!slugs.includes(slug)) return {};

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

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllJournalSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const entry = getJournalEntry(slug);
  const allEntries = getAllJournalEntries();
  const currentIndex = allEntries.findIndex((e) => e.slug === slug);
  const newerEntry = currentIndex > 0 ? allEntries[currentIndex - 1] : null;
  const olderEntry =
    currentIndex >= 0 && currentIndex < allEntries.length - 1
      ? allEntries[currentIndex + 1]
      : null;

  return (
    <main className="mx-auto max-w-145 px-6 pt-14 pb-20">
      <InlineLink href="/jurnal">← Semua tulisan</InlineLink>

      <h1 className="mt-6 text-xl font-bold tracking-tight">{entry.title}</h1>
      <p className="text-ink/60 mt-1 text-sm">
        {new Date(entry.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div
        className="journal-content mt-8 text-[15px]"
        dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
      />

      {(olderEntry || newerEntry) && (
        <nav className="border-ink/10 mt-12 flex items-center justify-between border-t pt-6 text-sm">
          <div>
            {olderEntry ? (
              <InlineLink href={`/jurnal/${olderEntry.slug}`}>
                ← {olderEntry.title}
              </InlineLink>
            ) : null}
          </div>
          <div className="text-right">
            {newerEntry ? (
              <InlineLink href={`/jurnal/${newerEntry.slug}`}>
                {newerEntry.title} →
              </InlineLink>
            ) : null}
          </div>
        </nav>
      )}
    </main>
  );
}
