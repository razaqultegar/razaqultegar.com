---
title: Catatan, Masalah Instalasi Laravel
description: Ini adalah catatan saya ketika menginstal Laravel di Ubuntu 18.04 dan saya mendapat beberapa pesan kesalahan.
slug: catatan-masalah-instalasi-laravel
date: May 21, 2020
---

Ini adalah catatan saya ketika menginstal Laravel di Ubuntu 18.04 dan saya mendapat beberapa pesan error. Sejauh ini sudah ada 4 pesan error yang saya alami dan tidak menutup kemungkinan suatu saat akan muncul error baru atau bahkan error ini terulang.

> Catatan: Saya tidak akan membahas bagaimana pesan error ini terjadi atau membahasnya secara mendetail, tetapi saya akan membahasnya dengan metode pemecahan masalah.

## Inti Permasalahan

Berikut adalah daftar beberapa pesan error yang saya temui, dari konfigurasi composer global hingga konfigurasi Laravel:

1. zsh: laravel command not found
1. php artisan serve warning require (../vendor/autoload.php): failed to open stream: no such file or directory in ../artisan
1. error: Your requirements could not be resolved to an installable set of packages
1. laravel 500 internal server error

## Pemecahan Masalah

Untuk mengatasi masalah dengan pesan error `zsh: laravel command not found`, satu-satunya cara untuk melakukannya adalah dengan membuat PATH di file konfigurasi zshrc.

```bash
sudo nano ~/.zshrc
# dan tambahkan kode berikut ke bagian paling bawah:
alias laravel="~/.config/composer/vendor/bin/laravel"
# atau
alias laravel="~/.composer/vendor/bin/laravel"
```

Anda dapat memeriksa sendiri untuk mengetahui di mana folder composer dengan menjalankan perintah berikut:

```bash
$ composer global about
```

Output

```bash
"Changed current directory to /home/username/.config/composer"
# atau
"Changed current directory to /home/username/.composer"
```

Sementara itu, untuk memecahkan masalah `php artisan serve warning require (../vendor/autoload.php): failed to open stream: no such file or directory in ../ artisan`, jalankan saja perintah berikut:

```bash
composer install
# atau
composer update
```

Lalu ʻerror: Your requirements could not be resolved to an installable set of packages`, ini adalah pesan error yang terjadi karena ekstensi php yang dibutuhkan oleh Laravel belum terpasang. Untuk itu kita harus menjalankan perintah:

```bash
sudo apt install php-zip php-xml php-mbstring
```

Akhirnya, ada pemecahan masalah untuk pesan error `laravel 500 internal server error`, yakni:

- Masuk ke direktori root proyek
- Ubah file `.env-example` menjadi `.env`
- Jalankan perintah `php artisan key: generate`
- Setelah itu bersihkan cache dengan perintah `php artisan cache: clear && php artisan config: clear`
