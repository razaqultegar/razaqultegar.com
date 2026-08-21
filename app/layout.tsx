import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://razaqultegar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Razaqul Tegar",
    template: "%s — Razaqul Tegar",
  },
  description:
    "Razaqul Tegar — CTO SentraLink, bikin UdahKelar, dan ngoprek DOTS. Cerita kerjaan, produk, dan jurnal harian di sini.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razaqul Tegar",
    description:
      "CTO SentraLink, bikin UdahKelar, dan ngoprek DOTS. Cerita kerjaan, produk, dan jurnal harian di sini.",
    url: siteUrl,
    siteName: "Razaqul Tegar",
    images: ["/og-image.png"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razaqul Tegar",
    description:
      "CTO SentraLink, bikin UdahKelar, dan ngoprek DOTS. Cerita kerjaan, produk, dan jurnal harian di sini.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
