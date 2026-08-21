import type { MetadataRoute } from "next";
import { getAllJournalEntries } from "@/lib/journal";

const siteUrl = "https://razaqultegar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const journalEntries = getAllJournalEntries();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/jurnal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...journalEntries.map((entry) => ({
      url: `${siteUrl}/jurnal/${entry.slug}`,
      lastModified: new Date(entry.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
