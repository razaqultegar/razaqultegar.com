---
title: 'Setting, Multiple PHP di XAMPP Ubuntu'
image: '/medias/thumbnail-ubuntu.png'
date: '2020-05-28T00:00:00.000Z'
path: '/jurnal/setting-multiple-php-di-xampp-ubuntu'
---

## Inti Permasalahn

Jika kamu sudah memasang XAMPP dengan versi PHP 5.x maka secara default aplikasi-aplikasi yang dibuat menggunakan PHP versi 7.x tidak dapat dijalankan/terdapat pesan error. Karena, ada perbedaan yang signifikan di kedua versi tersebut.

## Pemecahan Masalah

Untuk dapat menginstall 2 aplikasi XAMPP dengan versi PHP berbeda di Ubuntu, maka langkah pertama yang harus dilakukan yakni mengubah nama folder default lampp.

1. Masuk ke direktori /opt/ (tempat folder XAMPP berada)
   ```bash
   cd /opt
   sudo mv lampp/ lampp5
   # atau
   sudo mv lampp/ lampp7
   ```
1. Download XAMPP
   ```bash
   cd ~
   wget https://nchc.dl.sourceforge.net/project/xampp/XAMPP%20Linux/5.6.40/xampp-linux-x64-5.6.40-1-installer.run
   # atau
   wget https://jaist.dl.sourceforge.net/project/xampp/XAMPP%20Linux/7.4.6/xampp-linux-x64-7.4.6-0-installer.run
   ```
1. Insatll XAMPP <span className="note">*Sebelum melakukan proses instalasi XAMPP, pastikan langkah pertama sudah dilakukan.</span>
   ```bash
   sudo chmod +x xampp-linux-x64-5.6.40-1-installer.run
   sudo ./xampp-linux-x64-5.6.40-1-installer.run
   # atau
   sudo chmod +x xampp-linux-x64-7.4.6-0-installer.run
   sudo ./xampp-linux-x64-7.4.6-0-installer.run
   ```
1. Konfigurasi
   <div className="filename">Menjalankan XAMPP versi PHP 5.6</div>

   ```bash
   sudo rm -rf /opt/lampp
   sudo ln -s /opt/lampp5/ lampp
   sudo /opt/lampp/lampp start
   ```

   <div className="filename">Menjalankan XAMPP versi PHP 7.4</div>

   ```bash
   sudo rm -rf /opt/lampp
   sudo ln -s /opt/lampp7/ lampp
   sudo /opt/lampp/lampp start
   ```