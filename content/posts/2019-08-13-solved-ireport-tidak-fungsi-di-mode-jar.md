---
date: 2019-08-13T07:50:20+07:00
title: "Solved! iReport tidak berfungsi dimode Jar"
template: post
slug: solved-ireport-tidak-fungsi-di-mode-jar
---

## Apa itu iReport?

iReport adalah plugin tambahan pada pemograman Java yang digunakan untuk mendesain laporan secara visual. Melalui antar muka yang simple namun kaya akan fitur, iReport menyediakan banyak sekali fungsi penting untuk membuat laporan yang kompleks dengan mudah, sehingga memudahkan para developer/programmer untuk mengembangkan aplikasinya secara singkat.

Salah satu fitur yang paling menonjol dari iReport yakni bisa terhubung langsung dengan database apapun dan export laporan ke berbagai ekstensi seperti PDF, XHTML, OpenOffice, MS. Word, MS. Excel, XML, Text, dll.

## Inti Permasalahan

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

Kode diatas merupakan kode standart untuk pemanggilan iReport di Java Netbeans, banyak sekali situs-situs tutorial yang menyarankan kode tersebut. Tapi, ada kesalahan yang menurut saya paling fatal disitu yakni ada di bagian `File report_file = new File (namaFile);`. 

Ketika aplikasi/program di jalankan melalui Netbeans, script pemanggilan itu berfungsi dengan baik. Namun, ketika aplikasi/program kamu sudah diexectuble menjadi Jar, script itu tidak berfungsi sama sekali dan muncul pesan error seperti berikut.

![](../uploads/solved-ireport.png)

## Pemecahan Masalah

Pesan error tersbut mengatakan bahwa `java.io.FileNotFoundException` yang berarti file jasper kamu tidak ditemukan. Untuk mengatasi permasalahan tersebut kamu harus mengganti bagian yang fatal itu menjadi seperti berikut.

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