---
date: 2019-09-03T14:18:11+07:00
title: "Membuat Permalink SEO Friendly Dengan PHP"
template: post
slug: membuat-permalink-seo-friendly-dengan-php
---

## Apa itu SEO?

Optimisasi mesin pencari atau Search Engine Optimization, biasa disingkat "SEO" adalah serangkaian proses yang dilakukan secara sistematis yang bertujuan untuk meningkatkan kualitas trafik kunjungan melalui mesin pencari menuju situs web tertentu dengan memanfaatkan mekanisme kerja atau algoritma mesin pencari tersebut.

Tujuan dari SEO adalah menempatkan sebuah situs web pada posisi teratas, atau setidaknya halaman pertama hasil pencarian berdasarkan kata kunci tertentu yang ditargetkan. Secara logis, situs web yang menempati posisi teratas pada hasil pencarian memiliki peluang lebih besar untuk mendapatkan pengunjung.

## Contoh Permalink SEO Friendly

1. `https://razaqultegar.com/index.php?page=tentang`
2. `https://razaqultegar.com/tentang` atau `https://razaqultegar.com/membuat-permalink-seo-friendly-dengan-php`

Keterangan : pada contoh nomor satu itu merupakan permalink yang salah atau tidak SEO Friendly, sedangkan contoh nomor dua itu adalah contoh permalink SEO Friendly.

## Lalu bagaimana cara membuatnya?

Berikut saya kasih contoh bagaimana membuat sebuah permalink yang SEO Friendly menggunakan PHP dan tanpa setting htaccess.

```php
function SefLink($str){
  // Convert text to lowercase and to UTF-8 format.
  $str = mb_strtolower($str, 'UTF-8');

  // Convert non-normal characters to hyphens.
  $str = preg_replace('/[^a-z0-9]/','-',$str);

  // Prevents receiving multiple hyphens
  $str = preg_replace('/-+/','-',$str);

  // Delete right and left hyphens
  return trim($str, '-');
}
```