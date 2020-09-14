---
title: 'Note, Masalah Instalasi Laravel 7 di Ubuntu'
image: '/medias/thumbnail-laravel.png'
date: '2020-05-21T00:00:00.000Z'
path: '/jurnal/note-masalah-instalasi-laravel7-di-ubuntu'
---

Ini merupakan catatan saya ketika menginstall laravel di Ubuntu 18.04 dan mendapati beberapa pesan error. Sejauh ini ada 4 pesan error yang saya alami dan ngga menutup kemungkinan suatu saat bakal ada error-error baru yang bermunculan atau bahkan error ini terjadi lagi.

> Note: Saya tidak akan membahas bagaimana pesan error ini bisa terjadi atau membahas lebih rinci, akan tetapi saya akan membahasnya dengan metode penyelesaian masalah.

## Inti Permasalahan

Berikut beberapa daftar pesan error yang saya alami, mulai dari konfigurasi composer secara global sampai ke konfigurasi laravel.

1. zsh: laravel command not found
1. php artisan serve warning require (../vendor/autoload.php): failed to open stream: no such file or directory in ../artisan
1. error: Your requirements could not be resolved to an installable set of packages
1. laravel 500 internal server error

## Pemecahan Masalah

Untuk mengatasi masalah pesan error `zsh: laravel command not found`, cara yang harus dilakukan yakni dengan membuat PATH pada file konfigurasi zshrc.

```bash
sudo nano ~/.zshrc
# dan tambahkan skrip berikut ke bagian paling bawah:
alias laravel="~/.config/composer/vendor/bin/laravel"
# atau
alias laravel="~/.composer/vendor/bin/laravel"
```

Bisa kalian cek sendiri untuk mengetahui letak folder composernya dengan menjalankan perintah berikut

```bash
$ composer global about
```

<div className="filename">Output</div>

```bash
"Changed current directory to /home/username/.config/composer"
# atau
"Changed current directory to /home/username/.composer"
```

Sedangkan untuk mengatasi masalah `php artisan serve warning require (../vendor/autoload.php): failed to open stream: no such file or directory in ../artisan` cukup dengan menjalankan perintah berikut:

```bash
composer install
# atau
composer update
```

Lalu `error: Your requirements could not be resolved to an installable set of packages`, ini merupakan pesan error yang terjadi karena belum terinstallnya ekstensi php yang dibutuhkan oleh Laravel. Untuk itu kita harus menjalankan perintah:

```bash
sudo apt install php-zip php-xml php-mbstring
```

Terakhir ada penyelesaian masalah untuk pesan error `laravel 500 internal server error`, carana yakni

- Masuk ke direktori root projek
- Ubah file `.env-example` menjadi `.env`
- Jalankan perintah `php artisan key:generate`
- Setelah itu bersihkan cahce dengan perintah `php artisan cache:clear && php artisan config:clear`