import type { Metadata } from "next";
import InlineLink from "@/components/InlineLink";
import { getAllJournalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Jurnal",
  description:
    "Kumpulan catatan Razaqul Tegar — soal kerjaan, proyek yang lagi dikerjain, atau sekadar pikiran random.",
  alternates: {
    canonical: "/jurnal",
  },
};

export default function JournalPage() {
  const entries = getAllJournalEntries();

  return (
    <main className="mx-auto max-w-145 px-6 pt-14 pb-20">
      <h1 className="text-xl font-bold tracking-tight">Jurnal</h1>
      <p className="text-ink/80 mt-4 text-[15px] leading-relaxed">
        Kumpulan tulisan singkat — kadang soal proyek yang lagi dikerjain,
        kadang cuma pikiran random yang kepengen dicatet. Nggak ada jadwal
        rutin, nulis kalau lagi pengen aja.
      </p>

      {entries.length === 0 ? (
        <p className="text-ink/60 mt-10">Belum ada tulisan.</p>
      ) : (
        <ul className="mt-10 space-y-6">
          {entries.map((entry) => (
            <li key={entry.slug} className="border-ink/10 border-b pb-6">
              <InlineLink href={`/jurnal/${entry.slug}`}>
                <span className="text-base font-semibold">{entry.title}</span>
              </InlineLink>
              <p className="text-ink/60 mt-1 text-sm">
                {new Date(entry.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-ink/80 mt-2 text-[15px]">{entry.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
