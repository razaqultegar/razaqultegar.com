---
title: "Bagaimana Website Ini Dibuat"
date: "2021-03-08"
---

Awalnya website ini jalan di atas WordPress, sampai akhirnya saya pindahin ke Gatsby, framework open-source buat bikin website statis. Pilihan framework sejenis sebenarnya banyak, bisa dicek di [daftar static site generator ini](https://www.staticgen.com/), ada Jekyll, Hugo, Next, sampai Hexo. Tapi Gatsby yang akhirnya kepilih, karena beberapa alasan berikut:

- **Tanpa reload halaman.** Pindah dari satu halaman ke halaman lain kerasa instan.
- **Optimasi gambar otomatis.** Semua gambar di sini langsung dikecilin ukurannya dan dikompres tanpa perlu diurus manual.
- **Pre-fetch resource.** Gatsby ngedeteksi link yang ada di sebuah halaman, terus dimuat duluan ke cache, jadi pas diklik udah siap.
- **Bundling dan minification.** Kode yang ditulis otomatis di-bundle dan dikecilin sebelum dikirim ke browser.
- **Render di sisi server saat build.** Halaman udah jadi HTML sebelum dikunjungi.
- **Artikel bisa diedit lewat GitHub.** Kalau ada yang nemu typo atau salah info, bisa langsung bantu benerin dari repo-nya.
- **Deploy otomatis.** Setiap kali ada perubahan yang di-push ke repo, website-nya ikut ke-update sendiri.

Sebelum pindahan, semua artikel lama saya backup dulu pakai [ExitWP](https://github.com/thomasf/exitwp). Urusan hosting saya serahin ke layanan gratisan dari [Netlify](https://www.netlify.com/), dan biar nulis artikel baru nggak ribet, saya pakai CMS statis dari [Forestry](https://forestry.io/).
