---
title: Bagaimana Website Ini Dibuat
description: Masalah inti Kode di atas adalah kode standar untuk memanggil iReport di Java Netbeans, ada banyak situs tutorial yang menyarankan kode itu.
slug: bagaimana-website-ini-dibuat
date: 19 May 2019
---

Website ini sebelumnya menggunakan WordPress, lalu bermigrasi ke Static Site Generator. Banyak sekali framework open-source untuk membuat website statis seperti Jekyll, Hugo, Next, Gatsby, dan Hexo. Tapi disini saya memilih [NextJS](https://nextjs.org) dengan beberapa faktor:

1. Optimasi Bawaan: Pengoptimalan Gambar, Font, dan Skrip Otomatis untuk Peningkatan UX dan Data Web.
1. Data Fetching: Metode Pengambilan Data yang berjalan di server dan memungkinkan Anda merender konten dengan berbagai cara.
1. Client and Server Rendering: Pilihan rendering dan caching yang fleksibel, termasuk Incremental Static Regeneration (ISR) pada level per halaman.
1. Bundling dan Minification: Sumber kode yang kita buat juga akan diperkecil dan di-bundle, sehingga website semakin ringan ketika dibuka.

Sebelum bermigrasi, saya harus membackup semua artikel yang pernah saya tulis menggunakan [ExitWP](https://github.com/thomasf/exitwp) dan untuk masalah hosting sendiri saya memakai service gratisan dari [Vercel](https://www.vercel.com).
