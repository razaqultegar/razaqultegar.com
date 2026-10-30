---
title: "Bagaimana Website Ini Dibuat (v2)"
date: "2025-12-08"
---

Dulu saya pernah nulis soal [bagaimana website ini dibuat](/jurnal/bagaimana-website-ini-dibuat), waktu masih pakai Gatsby, di-hosting di Netlify, dan nulis artikel lewat Forestry. Sejak itu website ini udah beberapa kali ganti wujud, sempat bolak-balik antara Gatsby dan Next.js juga. Versi yang kamu baca sekarang dibangun ulang dengan stack yang jauh lebih sederhana, jadi rasanya pas buat bikin catatan versi keduanya.

## Stack-nya

- **[Next.js 16](https://nextjs.org) dengan App Router.** Hampir semua halaman di-render jadi HTML statis waktu build, jadi pas dibuka langsung tampil tanpa nunggu apa-apa.
- **[React 19.2](https://react.dev) dan [TypeScript 5.9](https://www.typescriptlang.org/).** Komponennya kebanyakan server component. JavaScript di browser cuma kepakai buat hal-hal kecil kayak tombol salin kode dan lightbox galeri.
- **[Tailwind CSS 4.1](https://tailwindcss.com).** Warna dasar situs ini cuma tiga: krem kertas, abu-abu tinta, dan merah aksen. Semuanya didefinisiin sekali sebagai token, terus dipakai di mana-mana.
- **Markdown biasa.** Setiap jurnal adalah satu file `.md` dengan frontmatter judul dan tanggal, diproses pakai [gray-matter](https://github.com/jonschlinkert/gray-matter) dan [remark](https://github.com/remarkjs/remark).
- **[Vercel](https://vercel.com)** buat hosting. Setiap kali ada perubahan yang di-push ke branch utama, website-nya otomatis ke-deploy ulang.

## Cara Kerjanya

**Jurnal.** Nulis artikel baru cukup bikin file markdown di folder `data/journal`. Waktu build, semua file itu dibaca, diubah jadi HTML, dan dibikinin halamannya masing-masing. Ada satu plugin kecil buatan sendiri yang ngebungkus setiap code block, nambahin label bahasa dan tombol salin, kayak gini:

```ts
export function getJournalEntry(slug: string) {
  const { title, date, content } = readEntryFile(slug);
  const html = remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeCodeBlock)
    .use(rehypeStringify)
    .processSync(content);
  return { slug, title, date, contentHtml: html.toString() };
}
```

**Galeri.** Foto tinggal disalin ke folder `public/gallery`, dan otomatis muncul di halaman depan tanpa perlu nyentuh kode. Judul, deskripsi, dan lokasinya ditulis di satu file data terpisah. Waktu fotonya diklik, tampilannya dibuka pakai elemen `<dialog>` bawaan browser, jadi nggak perlu library tambahan.

**Grafik kontribusi GitHub.** Kotak-kotak hijau di bagian Ngoprek & Open Source diambil dari data publik GitHub dan diperbarui otomatis sekali sehari. Kalau sumber datanya lagi down, grafiknya disembunyiin aja, website-nya tetap jalan.

**SEO seperlunya.** Sitemap, robots.txt, metadata, dan favicon dibikin otomatis lewat fitur bawaan Next.js.

## Yang Beda dari Versi Pertama

- **Nggak pakai CMS lagi.** Dulu saya pakai Forestry biar nulisnya gampang. Sekarang saya nulis langsung di code editor, karena ternyata markdown polos udah lebih dari cukup.
- **Pindah dari Netlify ke Vercel.** Alurnya masih sama: push ke repo, website ke-update sendiri.
- **Dependency seminimal mungkin.** Nggak ada UI library, nggak ada state management, nggak ada CMS. Makin sedikit yang dipasang, makin sedikit juga yang perlu diurus waktu upgrade.
- **Masih tanpa kolom komentar dan analytics.** Sama kayak [prinsip yang dulu](/jurnal/menulis-untuk-menulis): saya nulis untuk menulis, bukan buat ngejar angka.

Kalau ada pertanyaan soal cara bikinnya, atau nemu bagian yang rusak, kirim aja email ke [hello@razaqultegar.com](mailto:hello@razaqultegar.com).
