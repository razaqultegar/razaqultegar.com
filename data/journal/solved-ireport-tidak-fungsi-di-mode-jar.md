---
title: "Solved! iReport Tidak Berfungsi di Mode Jar"
date: "2019-08-14"
---

## Apa itu iReport?

iReport itu plugin tambahan di Java buat mendesain laporan secara visual. Tampilannya simpel tapi fiturnya lengkap, jadi bikin laporan yang kompleks pun tetap gampang, dan developer bisa ngembangin aplikasinya lebih cepat.

Fitur yang paling menonjol, iReport bisa langsung terhubung ke database apa pun dan ngekspor laporan ke banyak format, mulai dari PDF, XHTML, OpenOffice, MS Word, MS Excel, XML, sampai teks biasa.

## Masalahnya di Mana?

```java
try{
    String namaFile ="src/Laporan/reportco.jasper";
    HashMap parameter = new HashMap();
    File report_file = new File (namaFile);
    JasperReport jasperReport = (JasperReport) JRLoader.loadObject(report_file);
    JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameter,con);
    JasperViewer.viewReport(jasperPrint,false);
    JasperViewer.setDefaultLookAndFeelDecorated(true);
}catch (JRException e){
    JOptionPane.showMessageDialog(null, e.getMessage());
}
```

Kode di atas adalah cara standar manggil iReport di Java NetBeans, dan banyak banget situs tutorial yang nyaranin kode ini. Sayangnya, ada satu bagian yang menurut saya paling fatal, yaitu `File report_file = new File (namaFile);`.

Selama aplikasi dijalanin dari NetBeans, kode ini aman-aman aja. Tapi begitu aplikasinya udah di-build jadi file Jar, laporannya nggak mau kebuka sama sekali dan malah muncul pesan error kayak gini.

![Pesan error FileNotFoundException saat membuka laporan dari file Jar](/journal/ireport-jar-error.png)

## Solusinya

Pesan error tadi nyebutin `java.io.FileNotFoundException`, artinya file `.jasper`-nya nggak ketemu. Penyebabnya, file di dalam Jar nggak bisa dibaca pakai `File` biasa karena udah dibungkus jadi satu arsip. Solusinya, ganti bagian yang fatal tadi supaya file laporannya dibaca sebagai resource lewat `getResourceAsStream`:

```java
try{
    // String namaFile ="src/Laporan/reportco.jasper";
    HashMap parameter = new HashMap();
    // File report_file = new File (namaFile);
    InputStream report_file = getClass().getResourceAsStream("/src/Laporan/reportco.jasper");
    JasperReport jasperReport = (JasperReport) JRLoader.loadObject(report_file);
    JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameter,con);
    JasperViewer.viewReport(jasperPrint,false);
    JasperViewer.setDefaultLookAndFeelDecorated(true);
}catch (JRException e){
    JOptionPane.showMessageDialog(null, e.getMessage());
}
```
