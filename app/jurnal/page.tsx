import type { Metadata } from "next";
import InlineLink from "@/components/InlineLink";
import { formatJournalDate, getAllJournalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Jurnal",
  description:
    "Kumpulan catatan Razaqul Tegar: soal kerjaan, proyek yang lagi dikerjain, atau sekadar pikiran random.",
  alternates: {
    canonical: "/jurnal",
  },
};

export default function JournalPage() {
  const entries = getAllJournalEntries();

  return (
    <>
      <InlineLink href="/">← Kembali</InlineLink>

      <h1 className="mt-6 mb-1 text-2xl font-normal">Jurnal</h1>
      <p className="text-lg leading-6.5">
        Kumpulan tulisan singkat. Kadang soal proyek yang lagi dikerjain, kadang
        cuma pikiran random yang kepengen dicatet. Nggak ada jadwal rutin, nulis
        kalau lagi pengen aja.
      </p>

      {entries.length === 0 ? (
        <p className="text-ink/60 mt-8">Belum ada tulisan.</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {entries.map((entry) => (
            <li
              key={entry.slug}
              className="border-ink/10 flex items-baseline justify-between gap-4 border-b pb-4"
            >
              <InlineLink href={`/jurnal/${entry.slug}`}>
                <span className="text-lg">{entry.title}</span>
              </InlineLink>
              <span className="text-ink/60 shrink-0 text-sm">
                {formatJournalDate(entry.date)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
