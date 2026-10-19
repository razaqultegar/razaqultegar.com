import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const siteName = "Razaqul Tegar";
const tagline =
  "CTO Orderanku, bikin UdahKelar, dan ngoprek DOTS. Cerita kerjaan, produk, dan jurnal harian di sini.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s — ${siteName}`,
  },
  description: `${siteName}, ${tagline}`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: tagline,
    url: siteUrl,
    siteName,
    images: ["/og-image.png"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <main className="mx-auto w-full max-w-145 px-5 py-6 sm:px-0 sm:py-15">
          {children}
        </main>
      </body>
    </html>
  );
}
