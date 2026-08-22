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
    <main className="mx-auto w-full max-w-145 px-5 py-6 sm:px-0 sm:py-15">
      <InlineLink href="/jurnal">← Semua tulisan</InlineLink>

      <h1 className="mt-6 mb-1 text-2xl font-normal">{entry.title}</h1>
      <p className="text-ink/60 text-sm">
        {new Date(entry.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div
        className="journal-content mt-8"
        dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
      />

      {(olderEntry || newerEntry) && (
        <nav className="border-ink/10 mt-12 grid grid-cols-2 gap-4 border-t pt-6">
          <div>
            {olderEntry ? (
              <>
                <p className="text-ink/50 text-xs tracking-wide uppercase">
                  Jurnal sebelumnya
                </p>
                <InlineLink href={`/jurnal/${olderEntry.slug}`}>
                  <span className="text-sm">← {olderEntry.title}</span>
                </InlineLink>
              </>
            ) : null}
          </div>
          <div className="text-right">
            {newerEntry ? (
              <>
                <p className="text-ink/50 text-xs tracking-wide uppercase">
                  Jurnal selanjutnya
                </p>
                <InlineLink href={`/jurnal/${newerEntry.slug}`}>
                  <span className="text-sm">{newerEntry.title} →</span>
                </InlineLink>
              </>
            ) : null}
          </div>
        </nav>
      )}
    </main>
  );
}
